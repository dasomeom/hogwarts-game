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
 
  teams: {
    "GRIFFIN-1": { name: "그리핀도르 1팀", house: "gryffindor", displayName: "🦁 그리핀도르 1", message: "그리핀도르의 후계자들이여, 오늘 그대들이 보여준 용기는 고드릭 그리핀도르도 자랑스러워할 것이다. 두려움 앞에서도 앞으로 나아간 그 담대함을 기억하라.", verse: "강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 — 여호수아 1:9" },
    "GRIFFIN-2": { name: "그리핀도르 2팀", house: "gryffindor", displayName: "🦁 그리핀도르 2", message: "사자의 심장을 가진 자들이여, 그대들은 오늘 어둠 속에서도 빛을 잃지 않았다. 그 용기가 앞으로의 길에서도 그대들을 이끌어 줄 것이다.", verse: "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 — 시편 23:4" },
    "GRIFFIN-3": { name: "그리핀도르 3팀", house: "gryffindor", displayName: "🦁 그리핀도르 3", message: "포기하지 않는 자들이여, 지치고 힘들어도 끝까지 달려온 그대들의 모습이 가장 빛났다. 그 불꽃을 절대 꺼뜨리지 말라.", verse: "우리가 낙심하지 아니하노니 겉사람은 낡아지나 우리의 속사람은 날로 새로워지도다 — 고린도후서 4:16" },
    "GRIFFIN-4": { name: "그리핀도르 4팀", house: "gryffindor", displayName: "🦁 그리핀도르 4", message: "두려움을 이긴 자들이여, 오늘 그대들이 보여준 것은 단순한 용기가 아니라 믿음이었다. 그 믿음이 그대들을 언제나 강하게 할 것이다.", verse: "하나님이 우리에게 주신 것은 두려워하는 마음이 아니요 오직 능력과 사랑과 절제하는 마음이니 — 디모데후서 1:7" },
    "GRIFFIN-5": { name: "그리핀도르 5팀", house: "gryffindor", displayName: "🦁 그리핀도르 5", message: "서로를 위해 달린 자들이여, 오늘 그대들의 팀워크와 희생이 진정한 그리핀도르의 정신을 보여주었다. 그 사랑이 세상을 바꾼다.", verse: "사람이 친구를 위하여 자기 목숨을 버리면 이보다 더 큰 사랑이 없나니 — 요한복음 15:13" },
    "GRIFFIN-6": { name: "그리핀도르 6팀", house: "gryffindor", displayName: "🦁 그리핀도르 6", message: "끝까지 싸운 전사들이여, 오늘의 도전은 그대들을 더 강하게 만들었다. 그 싸움은 혼자가 아니었음을 기억하라.", verse: "믿음으로 말미암아 우리는 의롭다 하심을 받고 하나님과 화평을 누리자 — 로마서 5:1" },
    "SLYTH-1":   { name: "슬리데린 1팀", house: "slytherin", displayName: "🐍 슬리데린 1", message: "슬리데린의 후계자들이여, 그대들의 영리함과 전략은 오늘 빛을 발했다. 그러나 진정한 지혜는 하나님을 경외함에서 시작됨을 잊지 말라.", verse: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 — 잠언 3:5" },
    "SLYTH-2":   { name: "슬리데린 2팀", house: "slytherin", displayName: "🐍 슬리데린 2", message: "목적을 향해 달린 자들이여, 그대들은 흔들리지 않았다. 그 단단한 중심을 앞으로의 삶에서도 붙들어라.", verse: "무릇 지킬 만한 것보다 더욱 네 마음을 지키라 생명의 근원이 이에서 남이니라 — 잠언 4:23" },
    "SLYTH-3":   { name: "슬리데린 3팀", house: "slytherin", displayName: "🐍 슬리데린 3", message: "모든 것을 계획하는 자들이여, 오늘의 여정에서 뜻밖의 순간들도 있었을 것이다. 그 모든 것이 합력하여 선을 이루고 있음을 믿어라.", verse: "모든 것이 합력하여 선을 이루느니라 — 로마서 8:28" },
    "SLYTH-4":   { name: "슬리데린 4팀", house: "slytherin", displayName: "🐍 슬리데린 4", message: "꿈을 향해 나아가는 자들이여, 그대들의 야망은 하나님의 손 안에서 더 크고 아름다운 목적을 향해 빚어지고 있다.", verse: "너희 안에서 착한 일을 시작하신 이가 그리스도 예수의 날까지 이루실 줄을 우리는 확신하노라 — 빌립보서 1:6" },
    "SLYTH-5":   { name: "슬리데린 5팀", house: "slytherin", displayName: "🐍 슬리데린 5", message: "한계를 넘어선 자들이여, 오늘 그대들이 할 수 없다고 생각했던 것들을 해냈다. 그 힘의 근원을 절대 잊지 말라.", verse: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 — 빌립보서 4:13" },
    "SLYTH-6":   { name: "슬리데린 6팀", house: "slytherin", displayName: "🐍 슬리데린 6", message: "끈질기게 달려온 자들이여, 오늘 심은 씨앗이 반드시 열매를 맺을 것이다. 그 인내를 삶에서도 이어가라.", verse: "우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라 — 갈라디아서 6:9" },
    "RAVEN-1":   { name: "래번클로 1팀", house: "ravenclaw", displayName: "🦅 래번클로 1", message: "래번클로의 후계자들이여, 그대들의 날카로운 눈과 생각이 오늘 빛났다. 진리를 향한 그 갈망을 절대 멈추지 말라.", verse: "진리를 알지니 진리가 너희를 자유롭게 하리라 — 요한복음 8:32" },
    "RAVEN-2":   { name: "래번클로 2팀", house: "ravenclaw", displayName: "🦅 래번클로 2", message: "말씀을 붙든 자들이여, 오늘 그대들은 빛 가운데 걸었다. 그 말씀이 앞으로의 모든 길에서 등불이 되어줄 것이다.", verse: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다 — 시편 119:105" },
    "RAVEN-3":   { name: "래번클로 3팀", house: "ravenclaw", displayName: "🦅 래번클로 3", message: "답을 찾아 헤맨 자들이여, 오늘 그대들이 발견한 것은 단순한 정답이 아니다. 모든 지혜의 시작을 오늘 경험했기를 바란다.", verse: "여호와를 경외하는 것이 지혜의 근본이라 — 잠언 9:10" },
    "RAVEN-4":   { name: "래번클로 4팀", house: "ravenclaw", displayName: "🦅 래번클로 4", message: "독수리처럼 날아오른 자들이여, 지치고 힘든 순간에도 그대들은 새 힘을 얻었다. 그 힘의 근원을 평생 붙들어라.", verse: "여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 — 이사야 40:31" },
    "RAVEN-5":   { name: "래번클로 5팀", house: "ravenclaw", displayName: "🦅 래번클로 5", message: "변하지 않는 것을 찾는 자들이여, 오늘 그대들이 발로 뛴 이 경험도 언젠가 지나가겠지만, 하나님의 말씀은 영원히 남는다.", verse: "처음도 없고 끝도 없으신 하나님, 그 말씀은 영원히 서 있으리로다 — 이사야 40:8" },
    "RAVEN-6":   { name: "래번클로 6팀", house: "ravenclaw", displayName: "🦅 래번클로 6", message: "배움을 멈추지 않는 자들이여, 오늘 그대들은 머리만이 아니라 몸과 마음으로 배웠다. 그 배움을 세상에 나눠라.", verse: "내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 — 마태복음 28:20" },
    "HUFFL-1":   { name: "후플푸프 1팀", house: "hufflepuff", displayName: "🦡 후플푸프 1", message: "후플푸프의 후계자들이여, 그대들의 따뜻한 마음이 오늘 팀 전체를 품었다. 그 사랑이 세상에서 가장 강한 힘임을 기억하라.", verse: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 — 고린도전서 13:4" },
    "HUFFL-2":   { name: "후플푸프 2팀", house: "hufflepuff", displayName: "🦡 후플푸프 2", message: "함께 짐을 진 자들이여, 오늘 그대들은 혼자가 아니었다. 서로를 의지하며 달려온 그 모습이 가장 아름다웠다.", verse: "서로 짐을 지라 그리하여 그리스도의 법을 성취하라 — 갈라디아서 6:2" },
    "HUFFL-3":   { name: "후플푸프 3팀", house: "hufflepuff", displayName: "🦡 후플푸프 3", message: "낮은 곳에서 섬긴 자들이여, 오늘 그대들의 희생과 배려가 팀을 여기까지 이끌었다. 섬김이 곧 위대함임을 오늘 증명했다.", verse: "너희 중에 누구든지 크고자 하는 자는 너희를 섬기는 자가 되어야 하리라 — 마태복음 20:26" },
    "HUFFL-4":   { name: "후플푸프 4팀", house: "hufflepuff", displayName: "🦡 후플푸프 4", message: "기쁨을 잃지 않은 자들이여, 힘든 순간에도 웃음을 잃지 않은 그대들 덕에 팀 전체가 빛났다. 그 기쁨은 하나님께서 주신 선물이다.", verse: "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라 — 요한일서 4:19" },
    "HUFFL-5":   { name: "후플푸프 5팀", house: "hufflepuff", displayName: "🦡 후플푸프 5", message: "부르심을 받은 자들이여, 오늘 이 자리에 함께하게 된 것은 우연이 아니다. 그대들 한 명 한 명이 하나님께 귀하게 불린 존재다.", verse: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 — 데살로니가전서 5:16-18" },
    "HUFFL-6":   { name: "후플푸프 6팀", house: "hufflepuff", displayName: "🦡 후플푸프 6", message: "먼저 사랑받은 자들이여, 오늘 그대들이 서로에게 베푼 사랑은 이미 받은 사랑에서 흘러나온 것이다. 그 사랑을 계속 흘려보내라.", verse: "내가 너를 지명하여 불렀나니 너는 내 것이라 — 이사야 43:1" },
  },
 
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
      missions: [{ question: "", hint: "" }]
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
      missions: [{ question: "", hint: "" }]
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
      missions: [{ question: "", hint: "" }]
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
      missions: [{ question: "", hint: "" }]
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
      missions: [{ question: "", hint: "" }]
    },
    {
      id: 7,
      riddleNum: "7TH HORCRUX RIDDLE",
      title: "HARRY POTTER",
      emoji: "⚡",
      image: "",
      type: "final",
      maxScore: 1000,
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
 