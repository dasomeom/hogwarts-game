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
  measurementId: "G-NEGVTW26SM"
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

  // 팀 코드 → { name, house, displayName }
  teams: {
    "GRIFFIN-1": { name: "그리핀도르 1팀", house: "gryffindor", displayName: "🦁 그리핀도르 1" },
    "GRIFFIN-2": { name: "그리핀도르 2팀", house: "gryffindor", displayName: "🦁 그리핀도르 2" },
    "GRIFFIN-3": { name: "그리핀도르 3팀", house: "gryffindor", displayName: "🦁 그리핀도르 3" },
    "GRIFFIN-4": { name: "그리핀도르 4팀", house: "gryffindor", displayName: "🦁 그리핀도르 4" },
    "GRIFFIN-5": { name: "그리핀도르 5팀", house: "gryffindor", displayName: "🦁 그리핀도르 5" },
    "SLYTH-1":   { name: "슬리데린 1팀",   house: "slytherin",  displayName: "🐍 슬리데린 1" },
    "SLYTH-2":   { name: "슬리데린 2팀",   house: "slytherin",  displayName: "🐍 슬리데린 2" },
    "SLYTH-3":   { name: "슬리데린 3팀",   house: "slytherin",  displayName: "🐍 슬리데린 3" },
    "SLYTH-4":   { name: "슬리데린 4팀",   house: "slytherin",  displayName: "🐍 슬리데린 4" },
    "SLYTH-5":   { name: "슬리데린 5팀",   house: "slytherin",  displayName: "🐍 슬리데린 5" },
    "RAVEN-1":   { name: "래번클로 1팀",   house: "ravenclaw",  displayName: "🦅 래번클로 1" },
    "RAVEN-2":   { name: "래번클로 2팀",   house: "ravenclaw",  displayName: "🦅 래번클로 2" },
    "RAVEN-3":   { name: "래번클로 3팀",   house: "ravenclaw",  displayName: "🦅 래번클로 3" },
    "RAVEN-4":   { name: "래번클로 4팀",   house: "ravenclaw",  displayName: "🦅 래번클로 4" },
    "RAVEN-5":   { name: "래번클로 5팀",   house: "ravenclaw",  displayName: "🦅 래번클로 5" },
    "HUFFL-1":   { name: "후플푸프 1팀",   house: "hufflepuff", displayName: "🦡 후플푸프 1" },
    "HUFFL-2":   { name: "후플푸프 2팀",   house: "hufflepuff", displayName: "🦡 후플푸프 2" },
    "HUFFL-3":   { name: "후플푸프 3팀",   house: "hufflepuff", displayName: "🦡 후플푸프 3" },
    "HUFFL-4":   { name: "후플푸프 4팀",   house: "hufflepuff", displayName: "🦡 후플푸프 4" },
    "HUFFL-5":   { name: "후플푸프 5팀",   house: "hufflepuff", displayName: "🦡 후플푸프 5" },
  },

  // 스테이션 순서는 팀마다 다르게 — station_order 배열로 관리
  stationOrder: {
    "GRIFFIN-1": [1, 2, 3, 4, 5],
    "GRIFFIN-2": [2, 3, 4, 5, 1],
    "GRIFFIN-3": [3, 4, 5, 1, 2],
    "GRIFFIN-4": [4, 5, 1, 2, 3],
    "GRIFFIN-5": [5, 1, 2, 3, 4],
    "SLYTH-1":   [1, 3, 5, 2, 4],
    "SLYTH-2":   [2, 4, 1, 3, 5],
    "SLYTH-3":   [3, 5, 2, 4, 1],
    "SLYTH-4":   [4, 1, 3, 5, 2],
    "SLYTH-5":   [5, 2, 4, 1, 3],
    "RAVEN-1":   [1, 4, 2, 5, 3],
    "RAVEN-2":   [2, 5, 3, 1, 4],
    "RAVEN-3":   [3, 1, 4, 2, 5],
    "RAVEN-4":   [4, 2, 5, 3, 1],
    "RAVEN-5":   [5, 3, 1, 4, 2],
    "HUFFL-1":   [1, 5, 4, 3, 2],
    "HUFFL-2":   [2, 1, 5, 4, 3],
    "HUFFL-3":   [3, 2, 1, 5, 4],
    "HUFFL-4":   [4, 3, 2, 1, 5],
    "HUFFL-5":   [5, 4, 3, 2, 1],
  },

  stations: [
    {
      id: 1,
      name: "마법사의 돌",
      emoji: "💎",
      location: "A구역 — 느티나무 앞",
      description: "UV 랜턴으로 숨겨진 글자를 해독하고, 마법사의 돌의 비밀을 풀어라!",
      type: "quiz",   // quiz | photo | qr | voice
      maxScore: 100,
      timeLimit: 14,  // minutes
      missions: [
        {
          question: "UV 랜턴으로 비석에 숨겨진 단어를 찾아라. 그 단어는?",
          answer: "니콜라스",
          hint: "마법사의 돌을 만든 연금술사의 이름",
        }
      ]
    },
    {
      id: 2,
      name: "투명망토 지도",
      emoji: "🗺️",
      location: "B구역 — 분수대 근처",
      description: "모스부호로 암호화된 지도를 해독해 숨겨진 QR을 찾아라!",
      type: "qr",
      maxScore: 100,
      timeLimit: 14,
      qrSecret: "MARAUDERS-MAP-2026",  // QR 코드에 인코딩할 값
      missions: [
        {
          question: "모스부호를 해독하면? (― ・ ― ― / ・ ― ・)",
          answer: "미스터",
          hint: "호그와트 지도 제작자 중 한 명의 별명",
        }
      ]
    },
    {
      id: 3,
      name: "AI 주문 판정",
      emoji: "🎙️",
      location: "C구역 — 중앙 광장",
      description: "마이크에 대고 마법 주문을 외쳐라! AI가 발음 정확도를 판정한다.",
      type: "voice",
      maxScore: 100,
      timeLimit: 14,
      missions: [
        { spell: "Expelliarmus", pronunciation: "익스펠리아르무스" },
        { spell: "Wingardium Leviosa", pronunciation: "윙가르디움 레비오사" },
        { spell: "Expecto Patronum", pronunciation: "엑스펙토 패트로눔" },
      ]
    },
    {
      id: 4,
      name: "포션 약초학",
      emoji: "🧪",
      location: "D구역 — 화단 옆",
      description: "UV 스프레이로 그려진 재료 지도를 해독하고, 올바른 포션을 조합하라!",
      type: "quiz",
      maxScore: 100,
      timeLimit: 14,
      missions: [
        {
          question: "자외선 아래 드러난 세 가지 재료로 만들 수 있는 포션은?",
          answer: "폴리주스포션",
          hint: "외모를 바꾸는 마법 약",
        }
      ]
    },
    {
      id: 5,
      name: "퀴디치 슈팅",
      emoji: "🧹",
      location: "E구역 — 운동장",
      description: "빗자루를 들고 제한 시간 안에 최대한 많은 골을 넣어라!",
      type: "photo",
      maxScore: 100,
      timeLimit: 14,
      missions: [
        {
          instruction: "팀원 전원이 빗자루를 들고 골대 앞에서 단체 사진을 찍어 업로드하라!",
        }
      ]
    },
  ],

  bonusEvents: [
    { id: "snitch", name: "황금 스니치 포획", points: 50, description: "진행요원을 찾아 사진 찍기" },
    { id: "secret_room", name: "비밀의 방 발견", points: 30, description: "숨겨진 UV 표시 발견 후 QR 스캔" },
  ]
};
