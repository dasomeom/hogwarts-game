// ============================================================
// STORE — localStorage 기반 게임 상태 관리
// ============================================================

// Firebase 초기화
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

const STORE_KEY = "hg_state";
const GAME_START_KEY = "hg_start";

const Store = {
  // ── 초기 상태 ──────────────────────────────────────────────
  defaultState() {
    const scores = {};
    Object.keys(GAME_CONFIG.teams).forEach(code => {
      scores[code] = {
        total: 0,
        stations: {},   // stationId → { score, completed, completedAt }
        bonuses: [],
        manualAdjustments: [],
      };
    });
    return { scores, gameStarted: false, gameStartTime: null };
  },

  // ── 읽기/쓰기 ─────────────────────────────────────────────
  get() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : this.defaultState();
    } catch { return this.defaultState(); }
  },

  set(state) {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  },

  // ── 게임 시작 ─────────────────────────────────────────────
  startGame() {
    const state = this.get();
    state.gameStarted = true;
    state.gameStartTime = Date.now();
    this.set(state);
  },

  isGameStarted() {
    return this.get().gameStarted;
  },

  getElapsedMinutes() {
    const state = this.get();
    if (!state.gameStartTime) return 0;
    return (Date.now() - state.gameStartTime) / 60000;
  },

  getRemainingSeconds() {
    const elapsed = this.getElapsedMinutes() * 60;
    const total = GAME_CONFIG.totalMinutes * 60;
    return Math.max(0, total - elapsed);
  },

  // ── 스테이션 완료 ─────────────────────────────────────────
  completeStation(teamCode, stationId, score) {
    const state = this.get();
    if (!state.scores[teamCode]) return;
    const already = state.scores[teamCode].stations[stationId];
    if (already?.completed) return; // 중복 방지
    state.scores[teamCode].stations[stationId] = {
      score,
      completed: true,
      completedAt: Date.now(),
    };
    state.scores[teamCode].total = this._calcTotal(state.scores[teamCode]);
    this.set(state);
  },

  // ── 보너스 ───────────────────────────────────────────────
  addBonus(teamCode, bonusId, points) {
    const state = this.get();
    if (!state.scores[teamCode]) return;
    const alreadyHas = state.scores[teamCode].bonuses.find(b => b.id === bonusId);
    if (alreadyHas) return;
    state.scores[teamCode].bonuses.push({ id: bonusId, points, at: Date.now() });
    state.scores[teamCode].total = this._calcTotal(state.scores[teamCode]);
    this.set(state);
  },

  // ── 어드민: 수동 점수 조정 ────────────────────────────────
  adjustScore(teamCode, delta, reason) {
    const state = this.get();
    if (!state.scores[teamCode]) return;
    state.scores[teamCode].manualAdjustments.push({ delta, reason, at: Date.now() });
    state.scores[teamCode].total = this._calcTotal(state.scores[teamCode]);
    this.set(state);
  },

  // ── 어드민: 게임 리셋 ─────────────────────────────────────
  reset() {
    this.set(this.defaultState());
  },

  // ── 집계 ─────────────────────────────────────────────────
  _calcTotal(teamScore) {
    const stationSum = Object.values(teamScore.stations).reduce((s, v) => s + (v.score || 0), 0);
    const bonusSum = teamScore.bonuses.reduce((s, b) => s + b.points, 0);
    const manualSum = teamScore.manualAdjustments.reduce((s, a) => s + a.delta, 0);
    return stationSum + bonusSum + manualSum;
  },

  // ── 리더보드 계산 ─────────────────────────────────────────
  getLeaderboard() {
    const state = this.get();
    const teams = Object.entries(state.scores).map(([code, data]) => ({
      code,
      ...GAME_CONFIG.teams[code],
      total: data.total,
      stationsCompleted: Object.values(data.stations).filter(s => s.completed).length,
    }));
    teams.sort((a, b) => b.total - a.total);

    const houseScores = {};
    GAME_CONFIG.houses.forEach(h => { houseScores[h.id] = 0; });
    teams.forEach(t => { houseScores[t.house] += t.total; });

    return { teams, houseScores };
  },

  getTeamState(teamCode) {
    const state = this.get();
    return state.scores[teamCode] || null;
  },
};
