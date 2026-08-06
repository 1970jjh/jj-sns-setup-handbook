window.DECK = [
{ type:"cover", kicker:"기업교육 강사 · 컨설턴트 · HRDer 를 위한",
  title:'<span class="hl">SNS 6종 자동화</span>하기',
  subtitle:"아무것도 깔려 있지 않은 윈도우 PC 기준 &middot; A to Z 사용설명서<br>순서대로 따라만 하시면 혼자서도 끝낼 수 있습니다",
  meta:["Windows 10/11 + Claude Desktop 앱","소요 2~3시간","JJ Creative 교육연구소"] },

{ type:"artifact", sec:"00. 시연 영상", title:"먼저 보세요 — 실제 자동화 시연 (4분 16초)",
  kind:"iframe",
  src:"https://1970jjh.github.io/jj-sns-setup-handbook/media/jj-sns-demo.mp4",
  url:"강의 사진 폴더 하나 → SNS 6종 완성까지 전 과정 녹화",
  bullets:[
    {h:"스타일 선택", t:"카드뉴스 20종 중 번호 하나를 고르는 장면"},
    {h:"자동 모자이크", t:"사람 얼굴과 명찰이 자동으로 가려집니다"},
    {h:"이미지 생성 · 발행", t:"AI 가 이미지를 만들고 네이버 블로그가 스스로 발행"},
    {h:"6채널 확인", t:"완성된 여섯 채널을 하나씩 열어 확인 · 쇼츠 재생"} ],
  note:"사람이 한 일은 <b>두 가지뿐</b>입니다 — ① 사진을 폴더에 넣는다 ② 스타일 번호를 고른다. 재생이 안 되면 <a href='https://1970jjh.github.io/jj-sns-setup-handbook/media/jj-sns-demo.mp4'>이 주소</a>로 직접 열어보세요." },

{ type:"statement", topic:"claude",
  big:'사진 폴더 하나가<br><span class="hl">SNS 6종</span>이 됩니다',
  sub:"네이버 블로그 · 티스토리 · 홈페이지 · 스레드 · 인스타그램 · 유튜브 쇼츠" },

{ type:"split", sec:"00. 전체 그림", title:"완성하면 이렇게 됩니다", side:"right", img:"results",
  url:"실제 발행 결과 — 2026.08.05",
  lead:"강의 사진 폴더 하나로 여섯 채널이 자동으로 채워집니다. 아래는 실제 발행 화면입니다.",
  bullets:[
    {h:"네이버 블로그", t:"현장 사진 + 후기 원고, 얼굴·명찰 자동 모자이크"},
    {h:"티스토리 · 홈페이지", t:"검색용 문체로 다시 쓰고 교육 사례에 자동 반영"},
    {h:"스레드 · 인스타그램", t:"핵심 인사이트 / 카드뉴스 10장 캐러셀"},
    {h:"유튜브 쇼츠", t:"내레이션·자막·편집·업로드까지 전부 자동"} ],
  note:"사람이 쓰는 시간은 <b>사진 폴더 지정과 스타일 선택, 몇 분</b>이 전부입니다." },

{ type:"concept", eyebrow:"OVERVIEW", title:"무엇을 왜 설치하나",
  lead:"이 자동화는 <b>MCP 없이</b> 돌아갑니다. 아래 다섯 덩어리만 갖추면 됩니다.",
  bullets:[
    {h:"① 런타임 4종", t:"Python · Node.js · Git · ffmpeg — 스크립트와 영상 렌더의 토대"},
    {h:"② Claude Desktop + Claude Code", t:"스킬을 실행하는 본체. Windows 앱 기준"},
    {h:"③ 파이썬 패키지 7종", t:"브라우저 자동화 · 얼굴 모자이크 · TTS · 유튜브 업로드"},
    {h:"④ API 키와 토큰 4종", t:"Gemini · YouTube · 인스타그램 · 스레드"},
    {h:"⑤ 브라우저 로그인 세션 3종", t:"네이버 · 티스토리(카카오) · Google Flow"},
    {h:"⑥ 커넥터 (선택이지만 권장)", t:"GitHub · Vercel — 켜두면 배포를 Claude 가 대신합니다"} ],
  aside:{ h:"참고 — 이건 이렇습니다", items:[
    "MCP 서버 — 필요 없습니다 (0개)",
    "커넥터 — GitHub · Vercel · PlayMCP 는 켜두면 편합니다",
    "Claude in Chrome — 네이버 차단으로 사용 불가",
    "유료 이미지 API 불필요 — Flow 구독으로 0원"] } },

{ type:"chapter", topic:"claude", kicker:"STEP 0", num:"0", icon:"🪪",
  title:"계정 먼저 — 과정 전 사전과제",
  sub:"승인·심사에 시간이 걸립니다. 여기서 막히면 당일 실습을 못 따라옵니다.",
  points:["Claude MAX 100 구독","SNS 6개 채널 계정","GitHub · Vercel"] },

{ type:"gallery", sec:"00. 계정 준비", title:"계정 · 서비스 가입 (클릭하면 열립니다)",
  section:"accounts", layout:"link", max:6,
  lead:"아래 여섯 개는 <b>과정 시작 전까지</b> 반드시 끝내주세요." },

{ type:"table", title:"계정 준비 체크리스트", head:["#","항목","확인 포인트"],
  rows:[
    ["0-1","<b>Claude 유료 구독 (MAX 100)</b>","실습량이 많아 Pro는 한도 초과 — 필수"],
    ["0-2","구글 계정","Gemini 키 · 유튜브 · Flow 가 전부 여기 묶임"],
    ["0-3","네이버 계정 + 블로그 개설","글쓰기 API 종료 → 브라우저 자동화"],
    ["0-4","티스토리 블로그 (카카오)","Open API 2024년 종료"],
    ["0-5","<b>인스타 — 비즈니스/크리에이터 전환</b>","개인 계정은 API 발행 불가"],
    ["0-6","스레드 계정 (인스타 연결)","토큰 생성기로 발급"],
    ["0-7","유튜브 채널 · GitHub · Vercel","Vercel은 카드 이미지 호스팅에 필수"] ],
  note:"⚠️ 인스타를 <b>비즈니스 계정으로 전환</b>하지 않으면 카드뉴스 자동 발행이 아예 되지 않습니다. 가장 흔한 사전준비 누락입니다." },

{ type:"chapter", topic:"env", kicker:"STEP 1", num:"1", icon:"⚙️",
  title:"기본 런타임 4종 설치",
  sub:"Python · Node.js · Git · ffmpeg — 모두 Windows 설치본",
  points:["설치 시 PATH 등록 체크","설치 후 버전 확인 명령으로 검증"] },

{ type:"gallery", sec:"01. 런타임", title:"내려받기 링크 (클릭하면 열립니다)",
  section:"runtime", layout:"link", max:4,
  lead:"네 개 모두 <b>기본 옵션 그대로</b> 설치하되, Python만 첫 화면 체크박스를 꼭 눌러주세요." },

{ type:"split", title:"① Python 설치", side:"left", img:"python",
  url:"python.org/downloads/windows",
  lead:"3.11 이상이면 됩니다. 이 컴퓨터는 3.13.7로 검증했습니다.",
  bullets:[
    {h:"Windows installer (64-bit) 선택", t:"embeddable 이 아니라 installer 를 받습니다"},
    {h:"🔴 Add python.exe to PATH 체크", t:"첫 화면 아래 체크박스. 놓치면 명령어가 전부 실패합니다"},
    {h:"Install Now 클릭", t:"나머지는 기본값 그대로"} ],
  note:"확인: PowerShell에서 <b>python --version</b> → 3.11 이상이 보이면 성공" },

{ type:"split", title:"② Node.js 설치", side:"right", img:"nodejs",
  url:"nodejs.org/ko/download",
  lead:"유튜브 쇼츠 렌더 엔진(Remotion)과 Claude Code 설치에 필요합니다.",
  bullets:[
    {h:"LTS 버전 선택", t:"Current 말고 LTS. npm이 함께 설치됩니다"},
    {h:"Windows Installer (.msi)", t:"기본 옵션 그대로 Next"},
    {h:"npm 도 같이 들어옵니다", t:"별도 설치 불필요"} ],
  note:"확인: <b>node --version</b> 과 <b>npm --version</b> 이 모두 나오면 성공" },

{ type:"split", title:"③ Git for Windows 설치", side:"left", img:"git",
  url:"git-scm.com/download/win",
  lead:"홈페이지 소스를 GitHub에 올리고 Vercel로 자동 배포할 때 씁니다.",
  bullets:[
    {h:"64-bit Git for Windows Setup", t:"자동으로 다운로드가 시작됩니다"},
    {h:"설치 옵션은 전부 기본값", t:"Next 만 계속 누르면 됩니다"},
    {h:"설치 후 이름·메일 등록", t:'git config --global user.name / user.email'} ],
  note:"확인: <b>git --version</b>" },

{ type:"split", title:"④ ffmpeg 설치 (PATH 수동 등록)", side:"right", img:"ffmpeg",
  url:"gyan.dev/ffmpeg/builds",
  lead:"쇼츠 렌더와 오디오 합성에 필요합니다. 설치 관리자가 없어 압축을 직접 풀어야 합니다.",
  bullets:[
    {h:"release full 빌드 다운로드", t:"ffmpeg-release-full.7z 또는 .zip"},
    {h:"C:\\ffmpeg 로 압축 해제", t:"경로에 한글·공백이 없어야 합니다"},
    {h:"시스템 환경변수 Path 에 추가", t:"C:\\ffmpeg\\bin 을 등록한 뒤 창을 새로 엽니다"} ],
  note:"확인: <b>ffmpeg -version</b> · 이 컴퓨터는 8.1.1로 검증" },

{ type:"chapter", topic:"claude", kicker:"STEP 2", num:"2", icon:"🤖",
  title:"Claude 환경 (Windows)",
  sub:"Claude Desktop 앱 + Claude Code",
  points:["앱 설치 후 MAX 계정으로 로그인","Claude Code 는 npm 으로 설치"] },

{ type:"split", sec:"02. Claude", title:"Claude Desktop 앱 설치", side:"left", img:"claude",
  url:"claude.ai/download",
  lead:"Windows 버전을 받아 설치하고, <b>MAX 100 구독 계정</b>으로 로그인합니다.",
  bullets:[
    {h:"Download for Windows", t:"내려받아 실행하면 자동 설치됩니다"},
    {h:"MAX 구독 계정으로 로그인", t:"무료·Pro 계정이면 실습 중 한도에 걸립니다"},
    {h:"Claude Code 설치", t:"npm install -g @anthropic-ai/claude-code"} ],
  note:"설치 확인: PowerShell에서 <b>claude --version</b> → 이후 <b>claude</b> 로 실행하면 브라우저 인증이 열립니다" },

{ type:"flow", sec:"02. Claude", title:"Claude Desktop 앱 설치 직후 — 이 순서로 진행합니다",
  lead:"앱만 깔면 스킬이 바로 도는 게 아닙니다. 아래 순서를 지켜야 합니다.",
  steps:[
    {icon:"1️⃣", h:"Claude Desktop 설치", t:"claude.ai/download<br>Windows 버전"},
    {icon:"2️⃣", h:"MAX 계정 로그인", t:"앱을 열고 구독 계정으로"},
    {icon:"3️⃣", h:"Node.js 설치", t:"CLI 설치에 npm 이<br>먼저 필요합니다"},
    {icon:"4️⃣", h:"Claude Code(CLI) 설치", t:"npm install -g<br>@anthropic-ai/claude-code"},
    {icon:"5️⃣", h:"Python + ffmpeg", t:"스크립트·영상 렌더용"},
    {icon:"6️⃣", h:"커넥터 활성화", t:"GitHub · Vercel · PlayMCP"} ],
  note:"🔴 <b>순서가 중요합니다.</b> Node.js 없이 Claude Code 를 설치하려 하면 npm 명령 자체가 없어 실패합니다." },

{ type:"split", title:"Claude Code (CLI) 설치", side:"left", img:"npm_cc",
  url:"npmjs.com/package/@anthropic-ai/claude-code",
  lead:"Claude Desktop 앱과 <b>별개로</b> CLI 를 설치해야 스킬이 돌아갑니다.",
  bullets:[
    {h:"Node.js 를 먼저 설치", t:"npm 이 있어야 설치가 됩니다 (STEP 1 참고)"},
    {h:"PowerShell 에서 설치", t:"npm install -g @anthropic-ai/claude-code"},
    {h:"설치 확인", t:"claude --version 이 출력되면 성공"},
    {h:"첫 실행 시 로그인", t:"claude 입력 → 브라우저 인증 → MAX 계정 선택"} ],
  note:"앱은 대화용, CLI 는 스킬 실행용입니다. <b>둘 다 필요합니다.</b>" },

{ type:"split", title:"커넥터 활성화 — GitHub · Vercel 을 Claude 가 직접 처리", side:"right", img:"connectors",
  url:"Claude Desktop → 설정 → 커넥터",
  lead:"커넥터를 켜두면 저장소 생성·배포를 <b>Claude 가 알아서</b> 합니다. 수동 git 명령이 크게 줄어듭니다.",
  bullets:[
    {h:"설정 → 커넥터 열기", t:"좌측 메뉴 하단의 '커넥터'"},
    {h:"GitHub 연동 활성화", t:"저장소 생성·푸시를 Claude 가 수행"},
    {h:"Vercel 활성화", t:"배포와 URL 확인까지 자동"},
    {h:"PlayMCP 활성화", t:"브라우저 자동화 보조"} ],
  note:"✅ 커넥터를 켜면 STEP 6 의 GitHub·Vercel 수동 작업이 대부분 사라집니다. <b>단, 최초 계정 연결 승인은 본인이 클릭</b>해야 합니다." },

{ type:"chapter", topic:"env", kicker:"STEP 3", num:"3", icon:"📦",
  title:"파이썬 패키지 · 영상 엔진",
  sub:"명령 두 줄이면 끝납니다",
  points:["pip install 7종","playwright 브라우저 설치","npm install (Remotion)"] },

{ type:"prompts", sec:"03. 패키지", title:"복사해서 그대로 실행하세요",
  lead:"PowerShell 을 열고 아래 두 블록을 순서대로 붙여넣습니다.",
  cards:[
    { tag:"① 파이썬 패키지 + 브라우저",
      body:'<span class="v">pip install playwright pillow opencv-python numpy requests google-genai google-api-python-client google-auth-oauthlib</span><br><br><span class="v">python -m playwright install chromium</span>' },
    { tag:"② 영상 엔진 (쇼츠 렌더)",
      body:'<span class="v">cd &lt;영상작업폴더&gt;</span><br><span class="v">npm install</span><br><br>Remotion 4.x · React · TypeScript 가 함께 설치됩니다' } ] },

{ type:"table", title:"각 패키지가 하는 일", head:["패키지","쓰이는 곳"],
  rows:[
    ["<b>playwright</b>","네이버·티스토리 자동 발행, Google Flow 이미지 생성"],
    ["<b>opencv-python + numpy</b>","얼굴·명찰 자동 모자이크"],
    ["<b>pillow</b>","인스타 카드 1:1 변환, 표지 합성"],
    ["<b>google-genai</b>","Gemini TTS — 쇼츠 내레이션 음성"],
    ["<b>google-api-python-client</b><br><b>google-auth-oauthlib</b>","유튜브 업로드 인증"],
    ["<b>requests</b>","스레드·인스타 Graph API 호출"] ],
  note:"🔴 <b>python -m playwright install chromium</b> 을 빠뜨리면 브라우저 자동화가 전부 실패합니다. 가장 흔한 누락입니다." },

{ type:"chapter", topic:"gemini", kicker:"STEP 4", num:"4", icon:"🔑",
  title:"API 키 · 토큰 발급",
  sub:"여기가 가장 오래 걸립니다 — 네 가지",
  points:["Gemini 키","유튜브 OAuth","인스타 토큰","스레드 토큰"] },

{ type:"gallery", sec:"04. 키 발급", title:"발급처 바로가기",
  section:"keys", layout:"link", max:4,
  lead:"각 사이트에서 발급받아 지정된 파일에 저장합니다." },

{ type:"split", title:"① Gemini API 키", side:"left", img:"aistudio",
  url:"aistudio.google.com/apikey",
  lead:"쇼츠 내레이션 음성(TTS)을 만드는 데 씁니다.",
  bullets:[
    {h:"Google AI Studio 접속", t:"구글 계정으로 로그인"},
    {h:"API 키 만들기 클릭", t:"생성된 키를 복사"},
    {h:".env 파일에 저장", t:"GEMINI_API_KEY=복사한키"} ],
  note:"⚠️ 키는 채팅창이나 문서에 붙여넣지 마세요. .env 파일에만 둡니다." },

{ type:"split", title:"② 유튜브 업로드 인증", side:"right", img:"gcloud",
  url:"console.cloud.google.com",
  lead:"쇼츠를 자동 업로드하려면 OAuth 인증이 한 번 필요합니다.",
  bullets:[
    {h:"프로젝트 만들기", t:"이름은 자유"},
    {h:"YouTube Data API v3 사용 설정", t:"API 라이브러리에서 검색해 사용 설정"},
    {h:"OAuth 클라이언트 ID — 데스크톱 앱", t:"JSON 을 받아 secrets 폴더에 둡니다"},
    {h:"최초 1회 브라우저 인증", t:"이후 youtube_token.pickle 로 자동 갱신"} ] },

{ type:"split", title:"③④ 인스타그램 · 스레드 토큰", side:"left", img:"meta",
  url:"developers.facebook.com",
  lead:"두 채널 모두 <b>사용자 토큰 생성기</b>로 받습니다. OAuth 구현도, 페이스북 페이지도 필요 없습니다.",
  bullets:[
    {h:"Meta 개발자에서 앱 만들기", t:"인스타그램용 · 스레드용 각각"},
    {h:"사용자 토큰 생성기에서 발급", t:"장기 토큰(60일)으로 받습니다"},
    {h:"토큰 파일로 저장", t:".auth/instagram.json · .auth/threads.json"} ],
  note:"저장 형식: <b>access_token</b> · <b>user_id</b> · <b>expires_at</b> 세 개 필드" },

{ type:"table", title:"② 유튜브 OAuth — 단계별 상세", head:["단계","화면에서 할 일","자동 여부"],
  rows:[
    ["1","<b>console.cloud.google.com</b> → 새 프로젝트 만들기","🟡 Claude 가 안내, 클릭은 본인"],
    ["2","API 라이브러리 → <b>YouTube Data API v3</b> 검색 → 사용 설정","🟡 동일"],
    ["3","OAuth 동의 화면 → 외부 → 앱 이름·이메일 입력","🔴 <b>본인 입력 필수</b>"],
    ["4","테스트 사용자에 <b>본인 구글 계정 추가</b>","🔴 누락 시 인증 거부됨"],
    ["5","사용자 인증 정보 → OAuth 클라이언트 ID → <b>데스크톱 앱</b>","🟡 안내"],
    ["6","JSON 다운로드 → <b>secrets/</b> 폴더에 저장","🟢 Claude 가 경로 안내"],
    ["7","최초 1회 브라우저 인증 → 계정 선택 → 허용","🔴 <b>본인 클릭</b>"] ],
  note:"인증이 끝나면 <b>youtube_token.pickle</b> 이 만들어지고, 이후로는 자동 갱신됩니다. 4단계 테스트 사용자 추가를 빠뜨리는 사례가 가장 많습니다." },

{ type:"duo", title:"유튜브 OAuth — 실제 화면", lead:"왼쪽에서 API 를 켜고, 오른쪽에서 인증 정보를 만듭니다.",
  imgs:[
    {id:"yt_api", url:"console.cloud.google.com — YouTube Data API v3", cap:"① API 라이브러리에서 '사용 설정'"},
    {id:"gcp_cred", url:"console.cloud.google.com/apis/credentials", cap:"② 사용자 인증 정보 → OAuth 클라이언트 ID → 데스크톱 앱"} ] },

{ type:"split", title:"③ 인스타그램 토큰 — 비즈니스 전환이 먼저", side:"left", img:"ig_business",
  url:"help.instagram.com — 비즈니스 계정 전환",
  lead:"🔴 <b>개인 계정이면 여기서 막힙니다.</b> 전환 먼저 하고 토큰을 받습니다.",
  bullets:[
    {h:"1. 인스타 앱에서 전환", t:"설정 → 계정 유형 → 비즈니스/크리에이터"},
    {h:"2. Meta 개발자에서 앱 생성", t:"developers.facebook.com/apps"},
    {h:"3. 사용자 토큰 생성기", t:"장기 토큰(60일)으로 발급"},
    {h:"4. .auth/instagram.json 저장", t:"access_token · user_id · expires_at"} ],
  note:"OAuth 구현도, 페이스북 페이지도 필요 없습니다. <b>토큰 생성기 한 번</b>이면 됩니다." },

{ type:"split", title:"④ 스레드 토큰", side:"right", img:"threads_doc",
  url:"developers.facebook.com/docs/threads",
  lead:"인스타와 같은 방식입니다. 스레드 전용 앱을 하나 더 만듭니다.",
  bullets:[
    {h:"스레드 계정이 인스타와 연결돼 있어야 함", t:"미연결 시 앱 생성 단계에서 막힘"},
    {h:"Meta 개발자 → 스레드 앱 생성", t:"Threads API 제품 추가"},
    {h:"사용자 토큰 생성기에서 발급", t:"threads_basic · threads_content_publish 권한"},
    {h:".auth/threads.json 저장", t:"인스타와 동일한 세 필드"} ] },

{ type:"split", title:"Meta 개발자 — 앱 만들기 화면", side:"right", img:"meta_apps",
  url:"developers.facebook.com/apps",
  lead:"인스타그램용·스레드용 앱을 각각 하나씩 만듭니다.",
  bullets:[
    {h:"앱 만들기 클릭", t:"용도는 '기타' → 유형은 '비즈니스'"},
    {h:"제품 추가", t:"인스타그램 / Threads API 선택"},
    {h:"사용자 토큰 생성기 열기", t:"권한 체크 후 토큰 생성"},
    {h:"장기 토큰으로 교환", t:"60일 유효, 만료 전 재발급"} ],
  note:"토큰은 비밀번호와 같습니다. 채팅창·문서에 붙여넣지 말고 <b>.auth 폴더 파일</b>에만 저장하세요." },

/* ───────── 실제 화면 단계별 — 스레드 / 인스타 ───────── */
{ type:"chapter", topic:"claude", kicker:"화면으로 따라하기", num:"A", icon:"📸",
  title:"스레드 · 인스타 토큰 — 실제 화면",
  sub:"빨간 상자만 순서대로 누르시면 됩니다",
  points:["Meta 개발자 사이트 접속","앱 만들기 · 이용 사례 선택","권한 확인 후 토큰 생성"] },

{ type:"shot", sec:"A. 스레드·인스타", img:"th01_home",
  title:"① Meta 개발자 사이트 접속",
  url:"developers.facebook.com",
  caption:"페이스북 계정으로 로그인합니다. 별도 가입은 필요 없습니다." },

{ type:"shot", img:"th02_applist", title:"② 앱 만들기",
  url:"developers.facebook.com/apps",
  caption:"우측 상단 <b>[앱 만들기]</b> 를 누릅니다." },

{ type:"shot", img:"th03_create_name", title:"③ 앱 이름과 연락처",
  url:"앱 상세 정보 단계",
  caption:"앱 이름은 자유롭게 정하시면 됩니다. 연락처 이메일은 본인 주소가 자동으로 채워집니다." },

{ type:"shot", img:"th05_usecase_pick", title:"④ 이용 사례에서 Threads API 액세스 선택",
  url:"이용 사례 단계 — 가장 중요",
  caption:"🔴 여기서 <b>Threads API 액세스</b> 를 고릅니다. 인스타그램은 나중에 이용 사례를 하나 더 추가하면 됩니다." },

{ type:"shot", img:"th02b_app_dashboard", title:"⑤ 앱 대시보드 — 모든 설정의 출발점",
  url:"앱을 만든 뒤 나오는 화면",
  caption:"왼쪽 <b>[이용 사례]</b> 에서 권한과 토큰을, <b>[앱 역할]</b> 에서 테스터를 설정합니다." },

{ type:"shot", img:"th07_permissions", title:"⑥ 스레드 권한 확인",
  url:"이용 사례 → Threads API → 권한 및 기능",
  caption:"<b>threads_basic</b> 과 <b>threads_content_publish</b> 가 '테스트 준비 완료' 여야 글을 올릴 수 있습니다." },

{ type:"shot", img:"th09_token_gen", title:"⑦ 스레드 앱 ID·시크릿과 토큰 생성기 위치",
  url:"이용 사례 → Threads API → 설정",
  caption:"위쪽에 앱 ID·시크릿이 있고, 아래로 내리면 <b>사용자 토큰 생성기</b> 가 있습니다." },

{ type:"shot", img:"th10_token_generator", title:"⑧ 액세스 토큰 생성하기",
  url:"사용자 토큰 생성기",
  caption:"내 스레드 계정 옆 <b>[액세스 토큰 생성하기]</b> 를 누르면 긴 문자열이 나옵니다. 그것이 토큰입니다." },

{ type:"shot", sec:"A. 스레드·인스타", img:"ig01_permissions",
  title:"⑨ 인스타그램 — 권한 3가지와 앱 ID",
  url:"이용 사례 → Instagram → API 설정",
  caption:"instagram_business_basic · manage_comments · manage_messages 세 가지가 필요합니다." },

{ type:"shot", img:"ig02_token_setup", title:"⑩ 인스타 토큰 생성",
  url:"2. 액세스 토큰 생성",
  caption:"펼치면 내 계정이 보입니다. <b>[토큰 생성]</b> 을 누르면 토큰이 나옵니다." },

{ type:"shot", img:"ig04_roles_tester", title:"⑪ 앱 역할 — 테스터 확인",
  url:"앱 역할 → 역할",
  caption:"본인 계정이 테스터로 들어가 있어야 토큰이 정상 동작합니다." },

{ type:"prompts", sec:"A. 스레드·인스타", title:"⑫ 받은 토큰을 어디에 넣나 — PowerShell 로",
  lead:"🔴 <b>토큰을 채팅창에 붙여넣지 마세요.</b> 대화 기록에 그대로 남습니다. PowerShell 로 <span class=\"v\">.env</span> 파일에 직접 씁니다.",
  cards:[
    { tag:"① PowerShell 열기",
      body:'윈도우 검색창에 <span class="v">PowerShell</span> 입력 → 실행<br>엔진 폴더로 이동합니다<br><br><span class="v">cd C:\\Users\\사용자명\\claude-app\\tistory</span>' },
    { tag:"② 토큰 써넣기 — 한 줄씩",
      body:'따옴표 안만 본인 값으로 바꿉니다<br><br><span class="v">Add-Content .env \'IG_USER_ID=여기에값\'</span><br><span class="v">Add-Content .env \'IG_ACCESS_TOKEN=여기에값\'</span><br><span class="v">Add-Content .env \'THREADS_USER_ID=여기에값\'</span><br><span class="v">Add-Content .env \'THREADS_ACCESS_TOKEN=여기에값\'</span>' },
    { tag:"③ 제대로 들어갔는지 확인",
      body:'키 이름만 보여주는 안전한 확인 방법입니다<br><br><span class="v">Get-Content .env | ForEach-Object { ($_ -split \'=\')[0] }</span><br><br>다섯 줄이 나오면 성공입니다' },
    { tag:"④ 왜 이렇게 하나",
      body:'토큰은 <b>비밀번호와 같습니다</b>.<br>채팅창·메모장·카톡에 붙여넣으면 기록이 남고,<br>그 기록이 유출되면 계정이 넘어갑니다.<br><br><span class="v">.env</span> 파일은 이 폴더 밖으로 나가지 않습니다' } ] },

/* ───────── 실제 화면 단계별 — 유튜브 ───────── */
{ type:"chapter", topic:"vercel", kicker:"화면으로 따라하기", num:"B", icon:"📸",
  title:"유튜브 인증 — 실제 화면",
  sub:"셋 중 가장 단계가 많습니다. 천천히 따라오세요",
  points:["구글 클라우드 프로젝트 만들기","API 켜고 동의 화면 구성","클라이언트 ID 발급 · 테스트 사용자 추가"] },

{ type:"shot", sec:"B. 유튜브 인증", img:"yt01_console_home",
  title:"① Google Cloud 콘솔 접속",
  url:"console.cloud.google.com",
  caption:"유튜브를 쓰는 구글 계정으로 로그인합니다." },

{ type:"shot", img:"yt02_project_create", title:"② 새 프로젝트 만들기",
  url:"console.cloud.google.com/projectcreate",
  caption:"프로젝트 이름을 정하고 <b>[만들기]</b>. 회사(Workspace) 계정이면 결제 계정 선택이 추가로 나옵니다 — 개인 Gmail 은 나오지 않습니다." },

{ type:"shot", img:"yt05_nav_menu", title:"③ 왼쪽 위 ☰ → API 및 서비스",
  url:"탐색 메뉴",
  caption:"메뉴가 안 보이면 화면 왼쪽 위 <b>줄 세 개(☰)</b> 아이콘을 누르세요." },

{ type:"shot", img:"yt06_api_menu", title:"④ 여기서 세 곳을 씁니다",
  url:"API 및 서비스",
  caption:"<b>라이브러리</b>(API 켜기) · <b>사용자 인증 정보</b>(클라이언트) · <b>OAuth 동의 화면</b>(앱 정보)" },

{ type:"shot", img:"yt03_api_enable", title:"⑤ YouTube Data API v3 — 사용",
  url:"라이브러리 → YouTube Data API v3",
  caption:"검색해서 찾은 뒤 <b>[사용]</b> 을 누릅니다." },

{ type:"shot", img:"yt04b_api_enabled_check", title:"⑥ 반드시 확인 — '사용 설정됨'",
  url:"API/서비스 세부정보",
  caption:"🔴 이걸 건너뛰면 나중에 업로드에서 <b>403 오류</b>가 납니다. 실제로 가장 많이 걸리는 함정입니다." },

{ type:"shot", img:"yt07_oauth_start", title:"⑦ OAuth 동의 화면 — 시작하기",
  url:"왼쪽 메뉴 → OAuth 동의 화면",
  caption:"처음이면 '아직 구성되지 않음' 이 뜹니다. <b>[시작하기]</b> 를 누르세요." },

{ type:"shot", img:"yt09_oauth_appinfo", title:"⑧ 앱 정보 입력",
  url:"프로젝트 구성 1단계",
  caption:"앱 이름은 자유롭게, 지원 이메일은 목록에서 본인 계정을 고릅니다." },

{ type:"shot", img:"yt10_oauth_audience", title:"⑨ 대상은 반드시 [외부]",
  url:"프로젝트 구성 2단계",
  caption:"🔴 <b>[내부]</b> 를 고르면 나중에 인증이 막힙니다. 개인 계정은 [외부] 만 보일 수도 있습니다." },

{ type:"shot", img:"yt13_clients_menu", title:"⑩ 클라이언트 만들기",
  url:"왼쪽 메뉴 → 클라이언트",
  caption:"<b>[+ 클라이언트 만들기]</b> 를 누릅니다." },

{ type:"shot", img:"yt14_app_type", title:"⑪ 유형은 [데스크톱 앱]",
  url:"OAuth 클라이언트 ID 만들기",
  caption:"웹 애플리케이션이 아닙니다. 반드시 <b>데스크톱 앱</b> 을 고르세요." },

{ type:"shot", img:"yt16_client_created", title:"⑫ JSON 다운로드 — 창 닫기 전에!",
  url:"OAuth 클라이언트 생성됨",
  caption:"🔴 이 창을 닫으면 비밀번호를 <b>다시 볼 수 없습니다</b>. 받은 파일은 엔진 폴더에 둡니다." },

{ type:"shot", img:"yt17_test_users", title:"⑬ 테스트 사용자 추가",
  url:"OAuth 동의 화면 → 대상",
  caption:"🔴 게시 상태는 <b>'테스트 중' 그대로</b> 둡니다. [앱 게시] 를 누르면 구글 검수에 걸려 업로드가 막힙니다." },

{ type:"shot", img:"yt18_test_user_added", title:"⑭ 완료 — 본인 계정이 보이면 성공",
  url:"테스트 사용자 목록",
  caption:"비어 있으면 실행할 때 <b>403 access_denied</b> 가 납니다. 꼭 확인하세요." },

{ type:"concept", eyebrow:"AUTOMATION BOUNDARY", title:"어디까지 Claude 가 하고, 어디부터 본인이 하나",
  lead:"토큰 발급은 <b>보안상 100% 자동이 불가능</b>합니다. 경계를 분명히 알아두세요.",
  bullets:[
    {h:"🟢 Claude 가 하는 것", t:"페이지 열기, 어디를 눌러야 하는지 안내, 발급받은 값을 올바른 파일·형식으로 저장, 연결 테스트"},
    {h:"🔴 본인이 해야 하는 것", t:"로그인, 비밀번호 입력, 2단계 인증, 약관·권한 동의 클릭, 계정 선택"},
    {h:"왜 그런가", t:"AI 가 비밀번호를 대신 입력하지 않는 것은 안전장치입니다. 계정 탈취 위험을 원천 차단합니다"} ],
  aside:{ h:"진행 방식", items:[
    "Claude 가 브라우저 창을 띄웁니다",
    "\"여기서 로그인해 주세요\" 안내",
    "본인이 로그인·동의 클릭",
    "그 다음은 다시 전부 자동",
    "→ 영상에서 본 티스토리 로그인과 같은 패턴"] } },

{ type:"chapter", topic:"wrap", kicker:"STEP 5", num:"5", icon:"🔐",
  title:"브라우저 로그인 세션",
  sub:"API 가 없는 채널은 로그인 세션을 저장해 씁니다",
  points:["네이버 — API 2020년 종료","티스토리 — API 2024년 종료","Flow — 8시간마다 갱신"] },

{ type:"table", sec:"05. 로그인", title:"세 곳의 로그인 세션",
  head:["대상","저장 위치","재로그인 주기"],
  rows:[
    ["<b>네이버</b>","~/.claude/.naver-profile","드묾"],
    ["<b>티스토리 (카카오)</b>",".auth/chrome-profile","<b>주기적으로 필요</b>"],
    ["<b>Google Flow</b>","~/.claude/.image-flow-profile","약 8시간"] ],
  note:"🔴 로그인은 <b>본인이 직접</b> 창에서 합니다. AI 는 아이디·비밀번호를 대신 입력하지 않습니다. 창이 뜨면 로그인만 해주시면 그 다음은 다시 전부 자동입니다." },

{ type:"prompts", title:"최초 1회 로그인 — 미리 해둡니다",
  lead:"첫 실행 전에 세 곳을 한 번씩 로그인해 두면 작업 도중 멈추지 않습니다.",
  cards:[
    { tag:"① 네이버 (최초 1회)",
      body:'<span class="v">python ~/.claude/skills/naver-blog-post/scripts/naver_login.py</span><br>한 번 해두면 <b>거의 안 끊깁니다</b>' },
    { tag:"② 티스토리 · 카카오 (주기적)",
      body:'엔진 폴더에서 <span class="v">python src/login.py</span><br><b>\'로그인 상태 유지\'</b> 체크를 꼭 하세요' },
    { tag:"③ Google Flow (약 8시간)",
      body:'<span class="v">python ~/.claude/skills/image-flow/scripts/flow_login.py</span><br>만료되면 Claude 에게 <b>"flow 로그인 다시 해줘"</b>' },
    { tag:"🔴 로그인은 본인이 직접",
      body:'AI 는 아이디·비밀번호를 <b>대신 입력하지 않습니다</b>.<br>작업 중 만료되면 창이 자동으로 열립니다 → <b>로그인만</b> 하시면 이어서 진행됩니다' } ] },

{ type:"chapter", topic:"vercel", kicker:"STEP 6", num:"6", icon:"🚀",
  title:"배포 · 이미지 호스팅",
  sub:"인스타 발행에 반드시 필요합니다",
  points:["GitHub 저장소","Vercel 자동 배포","Flow 이미지 생성"] },

{ type:"split", sec:"06. 배포", title:"Vercel 이 왜 필요한가", side:"right", img:"vercel",
  url:"vercel.com",
  lead:"인스타그램은 <b>https 공개 URL 이미지만</b> 받습니다. 내 PC 안의 파일로는 발행이 되지 않습니다.",
  bullets:[
    {h:"GitHub 저장소 생성 후 clone", t:"홈페이지 소스를 담습니다"},
    {h:"Vercel 에 GitHub 로그인으로 연결", t:"푸시하면 자동 배포"},
    {h:"카드 10장이 여기 올라갑니다", t:"그래야 인스타 캐러셀 발행이 성공합니다"} ],
  note:"✅ <b>커넥터를 켜두셨다면</b> 저장소 생성·연결·배포를 Claude 가 대신합니다(STEP 2 참고). 이미지가 배포되기 전에 발행하면 원인 없이 실패하니 배포 완료를 확인한 뒤 발행합니다." },

{ type:"gallery", title:"배포 · 이미지 생성 링크",
  section:"deploy", layout:"link", max:3,
  lead:"Google Flow 는 <b>구독제</b>라 이미지 생성 비용이 들지 않습니다." },

{ type:"chapter", topic:"claude", kicker:"STEP 7", num:"7", icon:"🧩",
  title:"스킬 설치와 첫 실행",
  sub:"두 스킬은 반드시 세트로",
  points:["스킬 2개 + image-flow","점검 명령 3줄","실전 호출"] },

{ type:"concept", sec:"07. 스킬", eyebrow:"IMPORTANT", title:"필요한 것은 두 덩어리입니다",
  lead:"스킬만 있으면 안 됩니다. <b>엔진(스크립트 본체)</b>이 함께 있어야 실행됩니다.",
  bullets:[
    {h:"① 엔진 폴더", t:"실제 동작하는 파이썬 스크립트 모음 — 수집·모자이크·발행·카드조립·쇼츠빌드"},
    {h:"② 스킬 폴더 3종", t:"Claude 에게 '어떤 순서로 무엇을 하라'고 알려주는 지시서"},
    {h:"③ 작업 폴더", t:"그날 찍은 사진 + 교안 파일을 넣는 곳. 매 강의마다 새로 만듭니다"},
    {h:"바로 내려받으실 수 있습니다", t:"다음 슬라이드의 링크에서 스킬·엔진 압축 파일을 받습니다"} ],
  aside:{ h:"엔진 폴더 안에 있는 것", items:[
    "src/ — 수집·발행·동기화 스크립트",
    "scripts/ — 배치·재시도 도구",
    ".auth/ — 토큰과 로그인 세션 (본인 것)",
    ".env — API 키 (본인 것)",
    "posts/ · work/ · thumbs/ — 산출물"] } },

{ type:"prompts", sec:"07. 스킬", title:"내려받기 — 스킬 3종 · 엔진",
  lead:"아래 두 압축 파일을 받아 압축을 푸세요. <b>스킬 먼저, 엔진 다음</b> 순서입니다.",
  cards:[
    { tag:"① 스킬 3종 (4.0MB)",
      body:'<a href="https://1970jjh.github.io/jj-sns-setup-handbook/media/jj-creative-skills.zip"><b>jj-creative-skills.zip 내려받기</b></a><br>→ <span class="v">C:\\Users\\사용자명\\.claude\\skills\\</span> 에 품니다<br>스킬 3폴더 + README-먼저읽으세요.md' },
    { tag:"② 엔진 (0.1MB)",
      body:'<a href="https://1970jjh.github.io/jj-sns-setup-handbook/media/jj-creative-engine.zip"><b>jj-creative-engine.zip 내려받기</b></a><br>→ <span class="v">C:\\Users\\사용자명\\claude-app\\tistory\\</span> 에 품니다<br>tistory/ 메인 엔진 + shorts-remotion/ 쇼츠 전용' },
    { tag:"③ 압축을 푼 뒤 — 꼭 하실 것",
      body:'스킬 안의 <span class="v">YOUR_</span> 자리표시자를 본인 것으로 바꿉니다.<br>Claude 에게 이렇게 말하면 끝납니다.<br><span class="v">~/.claude/skills 안의 YOUR_ 를 내 정보로 바꿔줘</span>' },
    { tag:"④ 패키지 설치 (2~3분)",
      body:'엔진 폴더에서<br><span class="v">pip install -r requirements.txt</span><br><span class="v">python -m playwright install chromium</span>' } ] },

{ type:"prompts", title:"폴더 배치와 .env 만들기",
  lead:"엔진을 받은 뒤 아래 두 가지를 준비하면 실행 준비가 끝납니다.",
  cards:[
    { tag:"① 권장 폴더 배치",
      body:'<span class="v">C:\Users\사용자명\claude-app\tistory\</span> ← 엔진<br><span class="v">C:\Users\사용자명\.claude\skills\</span> ← 스킬 3폴더<br><br>경로에 <b>한글·공백</b>이 없는 편이 안전합니다' },
    { tag:"② .env 파일 만들기",
      body:'메모장을 열고 아래를 입력한 뒤<br>파일명을 <span class="v">.env</span> 로 저장 (엔진 폴더에)<br><br><span class="v">GEMINI_API_KEY=발급받은키</span><br><span class="v">TTS_ENGINE=gemini</span><br><br>⚠️ 확장자가 <b>.env.txt</b> 가 되지 않도록 주의' } ] },

{ type:"concept", eyebrow:"SKILLS", title:"스킬 폴더 구조",
  lead:"<b>~/.claude/skills/</b> 아래에 세 폴더를 넣습니다.",
  bullets:[
    {h:"naver-blog-post", t:"스킬 ① — 사진 선별 · 모자이크 · 원고 · 네이버 발행"},
    {h:"tistory-thread-insta-hp-youtube", t:"스킬 ② — 티스토리 · 홈페이지 · 스레드 · 인스타 · 쇼츠"},
    {h:"image-flow", t:"두 스킬이 공통으로 호출하는 이미지 생성 엔진"} ],
  aside:{ h:"반드시 세트로", items:[
    "카드뉴스 스타일 20종 레시피가 ②에 들어 있고",
    "①이 그것을 참조합니다",
    "하나만 설치하면 스타일이 적용되지 않습니다",
    "스타일 대시보드는 웹 URL 이라 설치 불필요"] } },

{ type:"concept", eyebrow:"OPTIONAL", title:"Remotion 설치 — 유튜브 쇼츠를 만들 분만",
  lead:"쇼츠를 안 만드셔도 <b>나머지 5개 채널은 정상 동작</b>합니다. 쇼츠가 필요할 때만 하세요.",
  bullets:[
    {h:"Remotion 이 무엇인가", t:"영상을 코드로 만드는 도구. 자막·음성·장면 전환을 붙여 1080×1920 세로 영상을 뽑습니다"},
    {h:"GitHub 에서 따로 받지 않습니다", t:"엔진 압축의 shorts-remotion 폴더에서 npm install 한 번이면 알아서 내려받습니다"},
    {h:"Node.js 가 먼저 있어야 합니다", t:"node -v 로 확인. 버전이 안 나오면 STEP 1 의 Node.js 설치부터"},
    {h:"유튜브가 자동으로 쇼츠 분류", t:"세로 + 60초 이내면 쇼츠가 됩니다. 엔진이 렌더 전에 길이를 미리 검사합니다"} ],
  aside:{ h:"설치 — 마음의 준비를 하고", items:[
    "cd shorts-remotion 폴더",
    "npm install",
    "5~10분 걸립니다 (멈춘 듯해도 정상)",
    "500MB~1GB 가 생깁니다",
    "warn 경고는 괜찮고 error 만 아니면 됩니다",
    "확인 — npx remotion studio",
    "ShortsVideo 항목이 보이면 성공"] } },

{ type:"prompts", title:"설치 점검 · 첫 실행",
  lead:"아래를 순서대로 확인한 뒤, 사진 폴더를 만들고 스킬을 부릅니다.",
  cards:[
    { tag:"① 점검 3줄",
      body:'<span class="v">python -m playwright install chromium</span><br><span class="v">ffmpeg -version</span><br><span class="v">claude --version</span>' },
    { tag:"② 실전 호출 — 이게 전부입니다",
      body:'작업 폴더에 <b>그날 찍은 사진 + 교안 파일</b>을 넣고<br><br><span class="v">/naver-blog-post</span><br><span class="v">/tistory-thread-insta-hp-youtube</span><br><br>나머지는 전부 자동입니다' } ] },

{ type:"chapter", topic:"research", kicker:"TROUBLE", num:"8", icon:"🚨",
  title:"자주 나는 오류와 대처",
  sub:"실제로 겪은 것들만 모았습니다",
  points:["설치 단계","실행 단계","발행 단계"] },

{ type:"table", sec:"08. 오류 대처", title:"설치 · 실행 단계",
  head:["증상","원인","해결"],
  rows:[
    ["<b>'python' 은(는) 인식할 수 없는 명령</b>","설치 시 PATH 체크 누락","Python 재설치하며 <b>Add to PATH</b> 체크"],
    ["<b>브라우저가 안 열림 / Executable doesn't exist</b>","크로미움 미설치","<b>python -m playwright install chromium</b>"],
    ["<b>ffmpeg 를 찾을 수 없음</b>","Path 미등록","환경변수 Path 에 <b>C:\\ffmpeg\\bin</b> 추가 후 창 새로 열기"],
    ["<b>npm install 실패</b>","Node 미설치 또는 구버전","Node.js <b>LTS</b> 재설치"],
    ["<b>한도 초과 안내</b>","Pro 요금제 사용","<b>MAX 100</b> 으로 상향"] ] },

{ type:"table", title:"발행 단계", head:["증상","원인","해결"],
  rows:[
    ["<b>카카오 로그인 세션이 만료되었습니다</b>","티스토리 세션 만료 (정상 동작)","창이 뜨면 <b>직접 로그인</b> → 자동 재시도"],
    ["<b>Flow 에서 이미지가 0장</b>","세션 만료 또는 레이트 리밋","재로그인 · 간격 두고 재시도 (하루 40장 초과 시 발생)"],
    ["<b>인스타 발행이 원인 없이 실패</b>","이미지가 아직 배포 전","Vercel 배포 완료 확인 후 재발행"],
    ["<b>인스타 API 오류 (계정)</b>","개인 계정","<b>비즈니스/크리에이터</b> 로 전환"],
    ["<b>쇼츠가 60초를 넘습니다</b>","내레이션이 김 (검증기가 렌더 전 차단)","문장을 줄이면 자동 재계산"],
    ["<b>티스토리 발행이 조용히 실패</b>","일일 공개 발행 15건 초과","다음 날 자동 이어서 발행됨"] ],
  note:"대부분은 <b>스킬이 렌더·발행 전에 먼저 잡아내</b> 시간 낭비 없이 멈춥니다." },

{ type:"split", sec:"09. 운영 원칙", title:"개인정보는 자동으로 가려집니다", side:"left", img:"mask",
  url:"자동 모자이크 결과",
  lead:"블로그에 쓸 사진만 골라 <b>얼굴·명찰·기관 로고</b>를 자동으로 가립니다.",
  bullets:[
    {h:"얼굴 자동 검출", t:"정면·측면 모두 탐지해 모자이크 처리"},
    {h:"목걸이 명찰", t:"실명이 적힌 명찰도 함께 가립니다"},
    {h:"검수 시트 자동 생성", t:"놓친 곳이 있는지 눈으로 확인할 수 있게 표시"},
    {h:"고객사명은 익명 처리", t:"본문에서도 K사·S사 로 자동 변환"} ],
  note:"완벽하지 않을 수 있어 <b>발행 전 검수 단계</b>가 들어 있습니다. 놓친 부분은 좌표를 지정해 추가로 가릴 수 있습니다." },

{ type:"concept", eyebrow:"IMPORTANT", title:"솔직하게 알려드릴 것",
  lead:"과정에서 반복해 강조하는 세 가지입니다.",
  bullets:[
    {h:"완전 무인은 아닙니다", t:"티스토리 카카오 세션과 Flow 세션은 주기적으로 재로그인이 필요합니다"},
    {h:"하루 1건이 원칙입니다", t:"몰아서 올리면 검색엔진이 스팸으로 보고 계정이 막힙니다"},
    {h:"초기 설정에 하루를 씁니다", t:"한 번 잡아두면 그 다음부터는 사진 폴더 지정과 스타일 선택뿐입니다"} ],
  aside:{ h:"MCP 는 쓰지 않습니다", items:[
    "MCP 서버 0개 · 커넥터 0개로 동작",
    "Playwright 는 파이썬 라이브러리",
    "Claude in Chrome 은 네이버 차단으로 불가",
    "참여자에게 MCP 설치를 요구하지 마세요"] } },

{ type:"table", title:"최종 체크리스트", head:["시점","할 일","확인"],
  rows:[
    ["<b>과정 전</b>","계정 7종 · Claude MAX 구독","로그인 되는지"],
    ["<b>과정 전</b>","런타임 4종 설치","버전 명령 4개 모두 출력"],
    ["<b>1일차 오전</b>","파이썬 패키지 + playwright chromium","오류 없이 완료"],
    ["<b>1일차 오전</b>","API 키·토큰 4종","파일에 저장 완료"],
    ["<b>1일차 오전</b>","브라우저 로그인 3종","창에서 직접 로그인"],
    ["<b>1일차 오후</b>","GitHub · Vercel 연결","배포 URL 열림"],
    ["<b>1일차 오후</b>","스킬 3폴더 설치 → 첫 실행","6채널 발행 성공"] ],
  note:"이 표를 인쇄해 옆에 두고 하나씩 지워가시면 빠짐이 없습니다." },

{ type:"closing", title:"준비가 끝나면, 이제 강의에만 집중하세요",
  sub:"오늘 강의는, 오늘 안에 끝납니다",
  items:[
    "카드뉴스 스타일 20종 → <a href='https://jj-aiedu.vercel.app/style/card-styles.html'>jj-aiedu.vercel.app/style/card-styles.html</a>",
    "과정 안내 → <a href='https://jj-aiedu.vercel.app/sns-automation'>jj-aiedu.vercel.app/sns-automation</a>",
    "교육 문의 → jjh@jjcreative.co.kr · 010-8448-2354",
    "JJ Creative 교육연구소"] },
];
