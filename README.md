# 🧙 호그와트 챌린지 웹앱

해리포터 컨셉 실외 팀 게임 플랫폼 (200명 / 20팀 / 4기숙사)

## 파일 구조

```
├── index.html        # 메인 랜딩 + 팀 코드 로그인
├── team.html         # 팀 대시보드 (미션 진행, 인증, 타이머)
├── scoreboard.html   # 실시간 점수판 (팀 + 기숙사)
├── admin.html        # 어드민 (게임 시작, 점수 조정, 현황)
├── config.js         # ⭐ 게임 설정 파일 (여기만 수정!)
└── store.js          # localStorage 기반 상태 관리
```

## GitHub Pages 배포

```bash
# 1. GitHub 저장소 생성 후 파일 업로드
git init
git add .
git commit -m "init"
git remote add origin https://github.com/<your-id>/<repo>.git
git push -u origin main

# 2. GitHub → Settings → Pages → Source: main branch
# 3. 배포된 URL: https://<your-id>.github.io/<repo>/
```

## 커스터마이징

### `config.js` 에서 수정할 것들

| 항목 | 위치 | 설명 |
|------|------|------|
| 팀 코드 | `teams` 객체 | 실제 팀 코드로 교체 |
| 기숙사 배정 | 각 팀의 `house` 필드 | gryffindor / slytherin / ravenclaw / hufflepuff |
| 스테이션 순서 | `stationOrder` | 팀별 방문 순서 |
| 미션 내용 | `stations[].missions` | 퀴즈 정답, QR 시크릿 등 |
| 어드민 비밀번호 | `adminPassword` | 당일 변경 권장 |
| 게임 시간 | `totalMinutes` | 기본값 80분 |

### 스테이션 타입

| type | 설명 |
|------|------|
| `quiz` | 텍스트 정답 입력 |
| `photo` | 사진 촬영 후 제출 |
| `qr` | 퀴즈 → QR 스캔 |
| `voice` | 음성 주문 인식 (Web Speech API) |

## 운영 가이드

### 당일 순서
1. 어드민(`/admin.html`) 접속 → 비밀번호 입력
2. 팀장들에게 URL + 팀 코드 배포
3. 모든 팀 준비 완료 후 어드민에서 **게임 시작** 클릭
4. 점수판(`/scoreboard.html`)을 큰 화면에 띄워두기
5. 필요 시 어드민에서 점수 수동 조정
6. 80분 후 점수판에서 결과 확인

### 데이터 저장
- `localStorage` 기반 → **모든 팀장 기기가 같은 서버를 쓰지만 데이터는 로컬에 저장됨**
- 점수는 각 팀의 기기에 저장되고, 점수판은 어드민 기기에서 띄울 것을 권장
- 실시간 동기화가 필요하면 Firebase Realtime Database 연동 고려

### 음성 인식
- Chrome 브라우저에서 가장 잘 동작 (iOS Safari는 제한적)
- HTTPS 환경 필요 (GitHub Pages는 자동으로 HTTPS)

## QR 코드 만들기

각 스테이션의 `qrSecret` 값을 QR 코드로 만들어 현장에 부착:
- [QR 코드 생성기](https://qr.io) 에서 무료 생성 가능

## 주의사항
- 당일 WiFi 또는 데이터 필요
- 어드민은 `admin.html`을 **별도 기기**에서 열어 운영
- 게임 시작 전 `전체 리셋` 한 번 눌러서 깨끗한 상태 확인
