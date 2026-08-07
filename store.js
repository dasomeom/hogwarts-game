// ============================================================
// STORE — Firebase Realtime Database 기반 게임 상태 관리
// ============================================================

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

  // ── 수동 점수 조정 ────────────────────────────────────────
  adjustScore(teamCode, delta, reason, callback) {
    db.ref(`scores/${teamCode}/adjustments`).push({
      delta, reason, at: Date.now()
    }, () => this._recalcTotal(teamCode, callback));
  },

  // ── 힌트 지급 (어드민) — 스테이션별 기록, 최대 3회 ────────
  MAX_HINTS: 3,

  giveHint(teamCode, stationId, callback) {
    db.ref(`scores/${teamCode}/hints`).once('value', snap => {
      const hints = snap.val() || {};
      const count = Object.keys(hints).length;
      if (count >= this.MAX_HINTS) {
        if (callback) callback({ error: `힌트는 팀당 최대 ${this.MAX_HINTS}회까지만 지급할 수 있습니다.` });
        return;
      }
      const ref = db.ref(`scores/${teamCode}/hints`).push();
      ref.set({ stationId, at: Date.now() }, () => {
        this._recalcTotal(teamCode, () => {
          if (callback) callback({ success: true });
        });
      });
    });
  },

  // ── 완료 처리 (어드민) ───────────────────────────────────
  markFinish(teamCode, callback) {
    db.ref('game/startTime').once('value', snap => {
      const startTime = snap.val();
      const elapsedSeconds = startTime ? (Date.now() - startTime) / 1000 : 0;
      db.ref(`scores/${teamCode}/finishTime`).set(elapsedSeconds, () => {
        this._recalcTotal(teamCode, () => {
          if (callback) callback(elapsedSeconds);
        });
      });
    });
  },

  // ── 총점 재계산 ──────────────────────────────────────────
  _recalcTotal(teamCode, callback) {
    db.ref(`scores/${teamCode}`).once('value', snap => {
      const data = snap.val() || {};

      // 문제 완료 점수 (1~6: 100점, 7: 1000점)
      const stationSum = Object.entries(data.stations || {}).reduce((s, [id, v]) => {
        if (!v.completed) return s;
        return s + (Number(id) === 7 ? 1000 : 100);
      }, 0);

      // 힌트 감점: -100점/회
      const hintPenalty = Object.keys(data.hints || {}).length * 100;

      // 시간 감점: -10점/분
      const timePenalty = data.finishTime
        ? Math.floor(data.finishTime / 60) * 10
        : 0;

      // 수동 조정
      const adjustSum = Object.values(data.adjustments || {}).reduce((s, a) => s + (a.delta || 0), 0);

      const total = stationSum - hintPenalty - timePenalty + adjustSum;
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
          stations: data.stations || {},
          finishTime: data.finishTime || null,
          hints: data.hints || {},
          hintCount: Object.keys(data.hints || {}).length,
        };
      });
      teams.sort((a, b) => b.total - a.total);
      const houseScores = {};
      GAME_CONFIG.houses.forEach(h => { houseScores[h.id] = 0; });
      teams.forEach(t => { houseScores[t.house] += t.total; });
      callback({ teams, houseScores });
    });
  },

  // ── 리셋 ─────────────────────────────────────────────────
  reset(callback) {
    db.ref('scores').remove(() => {
      db.ref('game').remove(() => {
        if (callback) callback();
      });
    });
  },
};