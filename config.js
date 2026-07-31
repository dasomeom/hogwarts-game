// ============================================================
// HOGWARTS GAME CONFIG
// 여기서 팀, 기숙사, 스테이션 정보를 수정하세요
// ============================================================

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDUOF_mumMAG8k--d6ABspcmySiA6iKlA4",
  authDomain: "unpl-2026.firebaseapp.com",
  projectId: "unpl-2026",
  storageBucket: "unpl-2026.firebasestorage.app",
  messagingSenderId: "218391862369",
  appId: "1:218391862369:web:cdfe50431df75b29555e20",
  measurementId: "G-NEGVTW26SM",
  databaseURL: "https://unpl-2026-default-rtdb.firebaseio.com",
};

const GAME_CONFIG = {
  gameName: "호그와트 챌린지 2026",
  totalMinutes: 80,
  adminPassword: "hogwarts2026",
 
  houses: [
    { id: "gryffindor", name: "그리핀도르", color: "#740001", accent: "#D3A625", emoji: "🦁" },
    { id: "slytherin",  name: "슬리데린",   color: "#1A472A", accent: "#AAAAAA", emoji: "🐍" },
    { id: "ravenclaw",  name: "래번클로",   color: "#0E1A40", accent: "#946B2D", emoji: "🦅" },
    { id: "hufflepuff", name: "후플푸프",   color: "#ECB939", accent: "#60605B", emoji: "🦡" },
  ],
 
  // ← 소소가 이미 수정한 팀 목록 유지
  teams: {
    "GRIFFIN-1": { name: "그리핀도르 1팀", house: "gryffindor", displayName: "🦁 그리핀도르 1" },
    "GRIFFIN-2": { name: "그리핀도르 2팀", house: "gryffindor", displayName: "🦁 그리핀도르 2" },
    "GRIFFIN-3": { name: "그리핀도르 3팀", house: "gryffindor", displayName: "🦁 그리핀도르 3" },
    "GRIFFIN-4": { name: "그리핀도르 4팀", house: "gryffindor", displayName: "🦁 그리핀도르 4" },
    "GRIFFIN-5": { name: "그리핀도르 5팀", house: "gryffindor", displayName: "🦁 그리핀도르 5" },
    "GRIFFIN-6": { name: "그리핀도르 6팀", house: "gryffindor", displayName: "🦁 그리핀도르 6" },
    "SLYTH-1":   { name: "슬리데린 1팀",   house: "slytherin",  displayName: "🐍 슬리데린 1" },
    "SLYTH-2":   { name: "슬리데린 2팀",   house: "slytherin",  displayName: "🐍 슬리데린 2" },
    "SLYTH-3":   { name: "슬리데린 3팀",   house: "slytherin",  displayName: "🐍 슬리데린 3" },
    "SLYTH-4":   { name: "슬리데린 4팀",   house: "slytherin",  displayName: "🐍 슬리데린 4" },
    "SLYTH-5":   { name: "슬리데린 5팀",   house: "slytherin",  displayName: "🐍 슬리데린 5" },
    "SLYTH-6":   { name: "슬리데린 6팀",   house: "slytherin",  displayName: "🐍 슬리데린 6" },
    "RAVEN-1":   { name: "래번클로 1팀",   house: "ravenclaw",  displayName: "🦅 래번클로 1" },
    "RAVEN-2":   { name: "래번클로 2팀",   house: "ravenclaw",  displayName: "🦅 래번클로 2" },
    "RAVEN-3":   { name: "래번클로 3팀",   house: "ravenclaw",  displayName: "🦅 래번클로 3" },
    "RAVEN-4":   { name: "래번클로 4팀",   house: "ravenclaw",  displayName: "🦅 래번클로 4" },
    "RAVEN-5":   { name: "래번클로 5팀",   house: "ravenclaw",  displayName: "🦅 래번클로 5" },
    "RAVEN-6":   { name: "래번클로 6팀",   house: "ravenclaw",  displayName: "🦅 래번클로 6" },
    "HUFFL-1":   { name: "후플푸프 1팀",   house: "hufflepuff", displayName: "🦡 후플푸프 1" },
    "HUFFL-2":   { name: "후플푸프 2팀",   house: "hufflepuff", displayName: "🦡 후플푸프 2" },
    "HUFFL-3":   { name: "후플푸프 3팀",   house: "hufflepuff", displayName: "🦡 후플푸프 3" },
    "HUFFL-4":   { name: "후플푸프 4팀",   house: "hufflepuff", displayName: "🦡 후플푸프 4" },
    "HUFFL-5":   { name: "후플푸프 5팀",   house: "hufflepuff", displayName: "🦡 후플푸프 5" },
    "HUFFL-6":   { name: "후플푸프 6팀",   house: "hufflepuff", displayName: "🦡 후플푸프 6" },
  },
 
  // ── 호크룩스 스테이션 ────────────────────────────────────
  stations: [
    {
      id: 1,
      riddleNum: "1ST HORCRUX RIDDLE",
      title: "TOM RIDDLE'S DIARY",
      emoji: "📔",
      image: "",
      type: "auto",
      maxScore: 100,
      answer: "7154",
      hint: "glUe",
      missions: []
    },
    {
      id: 2,
      riddleNum: "2ND HORCRUX RIDDLE",
      title: "MARVOLO GAUNT'S RING",
      emoji: "💍",
      image: "",
      type: "quiz",
      maxScore: 100,
      answer: "7183",
      hint: "force",
      missions: [
        { question: "", hint: "" }
      ]
    },
    {
      id: 3,
      riddleNum: "3RD HORCRUX RIDDLE",
      title: "SALAZAR SLYTHERIN'S LOCKET",
      emoji: "📿",
      image: "",
      type: "quiz",
      maxScore: 100,
      answer: "2572",
      hint: "rinSe",
      missions: [
        { question: "", hint: "" }
      ]
    },
    {
      id: 4,
      riddleNum: "4TH HORCRUX RIDDLE",
      title: "HELGA HUFFLEPUFF'S CUP",
      emoji: "🏆",
      image: "",
      type: "quiz",
      maxScore: 100,
      answer: "2106",
      hint: "pun",
      missions: [
        { question: "", hint: "" }
      ]
    },
    {
      id: 5,
      riddleNum: "5TH HORCRUX RIDDLE",
      title: "ROWENA RAVENCLAW'S DIADEM",
      emoji: "👑",
      image: "",
      type: "quiz",
      maxScore: 100,
      answer: "1517",
      hint: "nudge",
      missions: [
        { question: "", hint: "" }
      ]
    },
    {
      id: 6,
      riddleNum: "6TH HORCRUX RIDDLE",
      title: "NAGINI",
      emoji: "🐍",
      image: "",
      type: "quiz",
      maxScore: 100,
      answer: "1245",
      hint: "Cane",
      missions: [
        { question: "", hint: "" }
      ]
    },
    {
      id: 7,
      riddleNum: "7TH HORCRUX RIDDLE",
      title: "HARRY POTTER",
      emoji: "⚡",
      image: "",
      type: "final",
      maxScore: 200,
      answer: "Saenuri Unplugged Conference",
      hint: "",
      missions: []
    },
  ],
 
  bonusEvents: [
    { id: "snitch",      name: "황금 스니치 포획", points: 50 },
    { id: "secret_room", name: "비밀의 방 발견",   points: 30 },
  ]
};
 