window.CFG = {
  title: "SNS 6종 자동화하기",
  brand: "JJ Creative 교육연구소",
  footer: "JJ Creative 교육연구소 · SNS 6종 자동화하기 · 사용설명서",
  tocFirst: true,
};

window.IMG = {
  python:   { file: "assets/img/python.jpg" },
  nodejs:   { file: "assets/img/nodejs.jpg" },
  git:      { file: "assets/img/git.jpg" },
  ffmpeg:   { file: "assets/img/ffmpeg.jpg" },
  claude:   { file: "assets/img/claude.jpg" },
  aistudio: { file: "assets/img/aistudio.jpg" },
  gcloud:   { file: "assets/img/gcloud.jpg" },
  meta:     { file: "assets/img/meta.jpg" },
  flow:     { file: "assets/img/flow.jpg" },
  github:   { file: "assets/img/github.jpg" },
  vercel:   { file: "assets/img/vercel.jpg" },
  connectors:  { file: "assets/img/connectors.png" },
  meta_apps:   { file: "assets/img/meta_apps.jpg" },
  ig_business: { file: "assets/img/ig_business.jpg" },
  yt_api:      { file: "assets/img/yt_api.jpg" },
  gcp_cred:    { file: "assets/img/gcp_cred.jpg" },
  threads_doc: { file: "assets/img/threads_doc.jpg" },
  npm_cc:      { file: "assets/img/npm_cc.jpg" },
  results:     { file: "assets/img/results.png" },
  concept:     { file: "assets/img/concept.png" },
  mask:        { file: "assets/img/mask.png" },
};

window.SECTIONS = {
  accounts: {
    title: "계정 · 서비스 가입 (과정 전 사전과제)",
    count: 6,
    items: [
      { name: "Claude 요금제 — MAX 100 구독", url: "https://claude.com/pricing", type: "runapp" },
      { name: "네이버 블로그 개설", url: "https://blog.naver.com", type: "link" },
      { name: "티스토리 (카카오 계정)", url: "https://www.tistory.com", type: "link" },
      { name: "인스타그램 — 비즈니스 계정 전환", url: "https://help.instagram.com/502981923235522", type: "docs" },
      { name: "유튜브 채널 만들기", url: "https://www.youtube.com/create_channel", type: "link" },
      { name: "GitHub 가입 — 우측 상단 Sign up", url: "https://github.com", type: "github" },
    ],
  },
  runtime: {
    title: "기본 런타임 4종 내려받기",
    count: 4,
    items: [
      { name: "Python — Windows installer 64-bit", url: "https://www.python.org/downloads/windows/", type: "docs" },
      { name: "Node.js LTS — Windows Installer (.msi)", url: "https://nodejs.org/ko/download", type: "docs" },
      { name: "Git for Windows", url: "https://git-scm.com/download/win", type: "github" },
      { name: "ffmpeg — gyan.dev full build", url: "https://www.gyan.dev/ffmpeg/builds/", type: "link" },
    ],
  },
  keys: {
    title: "API 키 · 토큰 발급처",
    count: 4,
    items: [
      { name: "Gemini API 키 — Google AI Studio", url: "https://aistudio.google.com/apikey", type: "aistudio" },
      { name: "YouTube Data API v3 사용 설정", url: "https://console.cloud.google.com/apis/library/youtube.googleapis.com", type: "link" },
      { name: "Meta 개발자 — 인스타그램 앱", url: "https://developers.facebook.com/apps/", type: "link" },
      { name: "Meta 개발자 — 스레드 API 문서", url: "https://developers.facebook.com/docs/threads", type: "docs" },
    ],
  },
  deploy: {
    title: "배포 · 이미지 호스팅",
    count: 3,
    items: [
      { name: "Vercel 가입 (GitHub 로그인)", url: "https://vercel.com/signup", type: "vercel" },
      { name: "Google Flow — 이미지 생성", url: "https://labs.google/fx/tools/flow", type: "aistudio" },
      { name: "카드뉴스 스타일 20종 대시보드", url: "https://jj-aiedu.vercel.app/style/card-styles.html", type: "vercel" },
    ],
  },
};
