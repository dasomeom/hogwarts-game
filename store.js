// ============================================================
// STORE — Firebase Realtime Database 기반 게임 상태 관리
// ============================================================

// Firebase 초기화
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

const Store = {
  // ── 게임 시작 ─────────────────────────────────────────────
  startGame() {
    db.ref('game/startTime').set(Date.now());
    db.ref('game/started').set(true);
  },

  isGameStarted(callback) {
    db.ref('game/started').once('value', snap => callback(snap.val() === true));
  },

  onGameStarted(callback) {
    db.ref('game/started').on('value', snap => callback(snap.val() === true));
  },

  onTimer(callback) {
    db.ref('game/startTime').on('value', snap => {
      const startTime = snap.val();
      if (!startTime) { callback(GAME_CONFIG.totalMinutes * 60); return; }
      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(0, GAME_CONFIG.totalMinutes * 60 - elapsed);
      callback(remaining);
    });
  },

  getRemainingSeconds(callback) {
    db.ref('game/startTime').once('value', snap => {
      const startTime = snap.val();
      if (!startTime) { callback(GAME_CONFIG.totalMinutes * 60); return; }
      const elapsed = (Date.now() - startTime) / 1000;
      callback(Math.max(0, GAME_CONFIG.totalMinutes * 60 - elapsed));
    });
  },

  // ── 스테이션 완료 ─────────────────────────────────────────
  completeStation(teamCode, stationId, score, callback) {
    const ref = db.ref(`scores/${teamCode}/stations/${stationId}`);
    ref.once('value', snap => {
      if (snap.val()?.completed) { if(callback) callback(); return; }
      ref.set({ score, completed: true, completedAt: Date.now() }, () => {
        this._recalcTotal(teamCode, callback);
      });
    });
  },

  // ── 보너스 ───────────────────────────────────────────────
  addBonus(teamCode, bonusId, points, callback) {
    const ref = db.ref(`scores/${teamCode}/bonuses/${bonusId}`);
    ref.once('value', snap => {
      if (snap.val()) { if(callback) callback(); return; }
      ref.set({ points, at: Date.now() }, () => {
        this._recalcTotal(teamCode, callback);
      });
    });
  },

  // ── 어드민: 수동 점수 조정 ────────────────────────────────
  adjustScore(teamCode, delta, reason, callback) {
    db.ref(`scores/${teamCode}/adjustments`).push({
      delta, reason, at: Date.now()
    }, () => this._recalcTotal(teamCode, callback));
  },

  // ── 총점 재계산 ──────────────────────────────────────────
  _recalcTotal(teamCode, callback) {
    db.ref(`scores/${teamCode}`).once('value', snap => {
      const data = snap.val() || {};
      const stationSum = Object.values(data.stations || {}).reduce((s, v) => s + (v.score || 0), 0);
      const bonusSum = Object.values(data.bonuses || {}).reduce((s, b) => s + (b.points || 0), 0);
      const adjustSum = Object.values(data.adjustments || {}).reduce((s, a) => s + (a.delta || 0), 0);
      const total = stationSum + bonusSum + adjustSum;
      db.ref(`scores/${teamCode}/total`).set(total, () => { if(callback) callback(); });
    });
  },

  // ── 팀 상태 구독 ─────────────────────────────────────────
  onTeamState(teamCode, callback) {
    db.ref(`scores/${teamCode}`).on('value', snap => callback(snap.val() || {}));
  },

  getTeamState(teamCode, callback) {
    db.ref(`scores/${teamCode}`).once('value', snap => callback(snap.val() || {}));
  },

  // ── 리더보드 구독 ────────────────────────────────────────
  onLeaderboard(callback) {
    db.ref('scores').on('value', snap => {
      const scores = snap.val() || {};
      const teams = Object.entries(GAME_CONFIG.teams).map(([code, info]) => {
        const data = scores[code] || {};
        return {
          code, ...info,
          total: data.total || 0,
          stationsCompleted: Object.values(data.stations || {}).filter(s => s.completed).length,
        };
      });
      teams.sort((a, b) => b.total - a.total);
      const houseScores = {};
      GAME_CONFIG.houses.forEach(h => { houseScores[h.id] = 0; });
      teams.forEach(t => { houseScores[t.house] += t.total; });
      callback({ teams, houseScores });
    });
  },

  // ── 어드민: 리셋 ─────────────────────────────────────────
  reset(callback) {
    db.ref('scores').remove(() => {
      db.ref('game').remove(() => {
        db.ref('battles').remove(callback);
      });
    });
  },

  // ══════════════════════════════════════════════════════════
  // 배틀 시스템
  // ══════════════════════════════════════════════════════════

  SPELL_BEATS: {
    'Expelliarmus':       ['Stupefy', 'Petrificus Totalus'],
    'Protego':            ['Expelliarmus', 'Avada Kedavra'],
    'Stupefy':            ['Protego', 'Petrificus Totalus'],
    'Petrificus Totalus': ['Expelliarmus'],
    'Avada Kedavra':      ['Stupefy', 'Petrificus Totalus'],
  },

  SPELL_EMOJIS: {
    'Expelliarmus':       '⚡',
    'Protego':            '🛡️',
    'Stupefy':            '💫',
    'Petrificus Totalus': '🧊',
    'Avada Kedavra':      '☠️',
  },

  BATTLE_POINTS: 20,
  MAX_BATTLES_PER_TEAM: 3,

  requestBattle(fromTeam, toTeam, callback) {
    db.ref(`scores/${fromTeam}/battleCount`).once('value', snap => {
      const count = snap.val() || 0;
      if (count >= this.MAX_BATTLES_PER_TEAM) {
        callback({ error: `배틀은 팀당 최대 ${this.MAX_BATTLES_PER_TEAM}회까지만 가능합니다.` });
        return;
      }
      db.ref(`battles/recent/${fromTeam}`).once('value', snap => {
        if (snap.val() === toTeam) {
          callback({ error: '같은 팀에게 연속으로 배틀을 신청할 수 없습니다.' });
          return;
        }
        const battleRef = db.ref('battles/pending').push({
          from: fromTeam, to: toTeam, status: 'pending', createdAt: Date.now(),
        });
        callback({ battleId: battleRef.key });
      });
    });
  },

  onBattleRequest(teamCode, callback) {
    db.ref('battles/pending').orderByChild('to').equalTo(teamCode).on('value', snap => {
      const battles = [];
      snap.forEach(child => {
        const b = child.val();
        if (b.status === 'pending') battles.push({ id: child.key, ...b });
      });
      callback(battles);
    });
  },

  acceptBattle(battleId, callback) {
    db.ref(`battles/pending/${battleId}`).update({ status: 'accepted' }, callback);
  },

  declineBattle(battleId, callback) {
    db.ref(`battles/pending/${battleId}`).remove(callback);
  },

  submitSpell(battleId, teamCode, spell, callback) {
    db.ref(`battles/pending/${battleId}/spells/${teamCode}`).set(spell, () => {
      db.ref(`battles/pending/${battleId}`).once('value', snap => {
        const battle = snap.val();
        const spells = battle.spells || {};
        if (spells[battle.from] && spells[battle.to]) {
          this._resolveBattle(battleId, battle, callback);
        } else {
          callback({ waiting: true });
        }
      });
    });
  },

  _resolveBattle(battleId, battle, callback) {
    const fromSpell = battle.spells[battle.from];
    const toSpell = battle.spells[battle.to];
    const fromBeats = this.SPELL_BEATS[fromSpell] || [];
    let winner, loser, result;
    if (fromBeats.includes(toSpell)) {
      winner = battle.from; loser = battle.to; result = 'from_wins';
    } else if ((this.SPELL_BEATS[toSpell] || []).includes(fromSpell)) {
      winner = battle.to; loser = battle.from; result = 'to_wins';
    } else {
      result = 'draw';
    }
    const updateData = { status: 'resolved', result, winner: winner || null, loser: loser || null, resolvedAt: Date.now() };
    db.ref(`battles/pending/${battleId}`).update(updateData, () => {
      if (result !== 'draw') {
        this.adjustScore(winner, this.BATTLE_POINTS, `배틀 승리 vs ${loser}`, () => {
          this.adjustScore(loser, -this.BATTLE_POINTS, `배틀 패배 vs ${winner}`, () => {
            db.ref(`scores/${battle.from}/battleCount`).transaction(c => (c || 0) + 1);
            db.ref(`scores/${battle.to}/battleCount`).transaction(c => (c || 0) + 1);
            db.ref(`battles/recent/${battle.from}`).set(battle.to);
            db.ref(`battles/recent/${battle.to}`).set(battle.from);
            callback({ result, winner, loser, fromSpell, toSpell, points: this.BATTLE_POINTS });
          });
        });
      } else {
        callback({ result: 'draw', fromSpell, toSpell });
      }
    });
  },

  onBattleResult(battleId, callback) {
    db.ref(`battles/pending/${battleId}`).on('value', snap => {
      const b = snap.val();
      if (b?.status === 'resolved') callback(b);
    });
  },
};