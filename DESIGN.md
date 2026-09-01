# Verba — Design System

AI 카피라이팅 SaaS **Verba**의 디자인 시스템 문서. 제품 개요부터 토큰·컴포넌트·코드 규칙까지, 화면이 늘어도 같은 인상과 품질을 유지하기 위한 기준을 담습니다.

> **값의 기준** — `tokens/`(css·json·tailwind) + `prototype/verba.html`의 `:root`. **동작** — `spec/components.md`. **디자인 최종본** — Figma.

---

## 1. 프로젝트 개요

**무엇** — 상품 정보를 한 번 입력하면 채널별(상세페이지·SNS·광고) 카피를 서로 다른 전략의 **A/B 2안**으로 생성하고, **브랜드 톤을 일관되게 유지**하는 AI 카피 SaaS.

**누구를 위해**
- 이커머스 셀러(스마트스토어 등) · 1인 브랜드 · 마케팅 대행사
- 전담 마케터 없이 **혼자·소수가 여러 채널의 카피를 반복 제작**하는 사용자

**핵심 기능** — 카피 생성(멀티채널·A/B) · 브랜드 보이스(저장 톤) · 상품 저장·불러오기 · 템플릿 · 히스토리 · 크레딧.

**플랫폼** — Desktop(1440+) / Tablet(768) / Mobile Web(390). 반응형 대응.

---

## 2. 디자인 원칙

**미니멀 화이트** — 흰 배경, 얇은 헤어라인 카드, 가벼운 글자 무게, 넉넉한 여백. 위계는 색이 아니라 **여백·무게·면 대비**로 만든다.

**한 색 원칙** — 브랜드 퍼플 `#5F3EFF` 하나 + 아이콘 전용 절제된 3색(퍼플·틸·코랄). 퍼플은 **화면당 primary 1개 · 활성 · 선택 · 포커스 · 링크**에만. 색을 넓게 칠하지 않는다.

**접근성 우선** — 모든 텍스트·UI는 **WCAG AA 이상**. 값(대비)으로 관리한다.

**Do / Don't**
- **Do** — 화면당 primary 1개(퍼플) · 흰 배경·헤어라인 카드 · 여백 넉넉히 · 아이콘 2톤 절제색 · 상태를 명확히.
- **Don't** — 그라데이션 남용 · 카드 안 카드 중첩 · 퍼플 남발 · 무거운 헤딩 무게 · 진한 그림자.

---

## 3. 토큰 정의

값 기준: [`tokens/tokens.css`](tokens/tokens.css) · [`tokens/tokens.json`](tokens/tokens.json) · [`tokens/tailwind.config.js`](tokens/tailwind.config.js).

### 3.1 컬러 — 브랜드 램프

| step | hex | 용도 |
|---|---|---|
| 50 | `#F2EEFF` | 활성/선택 배경, 아이콘 타일 |
| 100 | `#E6E0FF` | |
| 200 | `#CFC2FF` | border(연) |
| 300 | `#AE97FF` | |
| 400 | `#8763FF` | |
| **500** | **`#5F3EFF`** | **primary** — CTA·활성·링크 |
| 600 | `#4F2BEA` | pressed / hover |
| 700 | `#3D1FC4` | |
| 800 | `#2C1690` | |
| 900 | `#1F0F66` | |

`brand-pale #F2EEFF` · `brand-border #DCD2FF` · `on-brand #FFFFFF`.

### 3.2 컬러 — 시맨틱(역할)

| 토큰 | hex | 역할 |
|---|---|---|
| ink | `#17171B` | 헤딩·본문 (17.4:1 · AAA) |
| body | `#4B4B57` | 보조 텍스트 (8.9:1 · AAA) |
| mute | `#6E6E7A` | 캡션·placeholder·disabled (4.7:1 · AA) |
| surface | `#FFFFFF` | 카드·면 |
| page | `#F4F4F6` | 페이지 배경 |
| surface-soft | `#F8F8FA` | 옅은 면 |
| border | `#E5E5EA` | 헤어라인 |
| border-subtle | `#EDEDF1` | 내부 구분선 |

### 3.3 컬러 — 아이콘 액센트 · 상태

- **아이콘 액센트** (타일 아이콘 전용, 텍스트 아님): purple `#5F3EFF`/`#F2EEFF` · teal `#3FB3A6`/`#DDF2EE` · coral `#E0795A`/`#FBE7E1`.
- **상태**: ok `#15803D` · warn `#B45309` · danger `#DC2626` (모두 흰 배경 AA).

### 3.4 타이포그래피 — Pretendard

| 스타일 | size / weight | 비고 |
|---|---|---|
| Display | 44 / 700 | tracking −0.03em |
| H1 | 27 / 700 | tracking −0.025em |
| H2 | 22 / 700 | |
| H3 | 18 / 700 | |
| Title | 15 / 600 | |
| Body | 15 / 400 | line-height 1.6 |
| Caption | 12 / 400 | |
| Label | 12 / 600 | uppercase · tracking 1.4px |
| Button | 15 / 600 | |

무게는 전반적으로 가볍게(700/600/500/400). 폴백: `-apple-system, "Inter", system-ui, "Apple SD Gothic Neo", sans-serif`.

### 3.5 스페이싱 · Radius · Elevation

- **Spacing(px)** — 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48. 그룹 내부는 좁게, 그룹 사이는 넓게.
- **Radius** — input `9` · button `10` · card `16` · pill `9999`.
- **Elevation** — 기본은 그림자 없음(면 대비로 위계). 강조 시 `0 18px 44px -30px rgba(30,27,75,.08)` 하나만.

### 3.6 접근성 검증(대비)

| 전경 / 배경 | 비율 | 판정 |
|---|---|---|
| ink `#17171B` / white | 17.4:1 | AAA |
| body `#4B4B57` / white | 8.9:1 | AAA |
| mute `#6E6E7A` / white | 4.7:1 | AA |
| white / brand `#5F3EFF` | 5.8:1 | AA |
| brand `#5F3EFF` / pale `#F2EEFF` | 5.2:1 | AA |

> 이력: 캡션 색 초안 `#9A9AA6`(2.7:1, AA 미달)을 발견해 `#6E6E7A`(4.7:1)로 교정.

---

## 4. 컴포넌트 규칙

시각은 Figma/`prototype/verba.html`, 상세 동작은 [`spec/components.md`](spec/components.md).

### Button
| variant | fill | text | radius | 용도 |
|---|---|---|---|---|
| primary | `brand` | white | `r-btn` | 화면당 하나의 주요 액션 |
| soft/sm | `brand-pale` | `brand` | `r-btn`/pill | 인컨텍스트 보조(다시 생성·복사) |
| outline | white + `border` | ink | `r-btn` | 3순위(데모 보기·현재 플랜) |
| ghost | transparent | ink | — | 저강조(로그인·나중에 하기) |

상태: hover(카드=border→brand, 솔리드=약간 어둡게) · **focus-visible 링(2px brand)** · disabled(opacity .5) · pressed(`brand-pressed`). 관련 시 CTA에 비용 표기 → `카피 생성 · 2 크레딧`.

### Card
평면 흰색 + `1px border` + `r-card`, 기본 **그림자 없음**. 인터랙티브 카드 hover = `border-color:brand`. **카드 안 카드 중첩 금지.**

### Chips / Segmented
- 채널 칩·톤 칩(복수 선택): default = outline / selected = `brand-pale` 배경 + `brand` 보더·텍스트.
- 필터 pill(템플릿): selected = ink 채움 + 흰 텍스트.

### Input
흰색 + `1px border` + `r-input`. Focus = border `brand` + 3px `brand-pale` 링. placeholder `mute`. **읽기 전용 정보는 Input이 아니라 정보 Row로** 표현(예: 이메일).

### A/B 결과 카드 ★ interactive
- 채널별 `안 A / 안 B` 탭 → 카피 본문과 전략 캡션을 **함께** 전환, 한 번에 하나만 노출.
- 채널 = 실제 플랫폼(인스타/구글/네이버). 글자수 소형 표기, 하드 리밋(광고 헤드라인 30자)엔 `n / max` + 근접 시 `warn`.
- 채널별 복사 → `✓ 복사됨`. 헤더 액션: `↻ 다시 생성` · `↥ 내보내기`.

### 내보내기 모달
오버레이 + 중앙 카드. 옵션: **전체 복사(클립보드) · 상세페이지 HTML · CSV**. (SNS 이미지 카드는 이미지 렌더링 필요 → 후속) ✕/배경 클릭으로 닫기.

### 상품 불러오기 (로더)
- **Desktop** — 인라인 combobox: 검색 필드 + 최근 칩(`상품명 · 업종`). 포커스 시 팝오버 목록, 바깥 클릭으로 닫힘.
- **Mobile** — **바텀시트**로 전환(큰 탭 타깃). 선택 시 상품명·업종·소구점 **프리필**(채널·톤 제외), "이번 카피에만 적용" helper. 입력값 있는 상태에서 다른 상품 선택 시 **교체 확인 다이얼로그**.

### Credits
사이드바 게이지 `used / total` + 바. **생성 1회 = 2 크레딧**(가입 유저). 소진 근접 시 컨텍스트 배너 → 요금제 유도.

### Loading
스피너(`prefers-reduced-motion` 준수) + 단계 체크리스트(분석 → 규칙 적용 → 다듬는 중). 생성 제출과 결과 사이.

### Sidebar nav
텍스트 + 2톤 아이콘. active = `brand-pale` 배경 + `brand`, inactive = `body`.

### 위험 행동 (Danger)
계정 삭제·연결 해제 등은 **2단계 확인**(확인 다이얼로그/체크 게이팅). red는 삭제·에러에만.

---

## 5. 코드 규칙

### 프레임워크
- **웹 앱** — Next.js. 디자인 시스템은 **토큰 기반이라 프레임워크에 독립적**(핸드오프 프로토타입은 순수 HTML/CSS/JS로 동작·인터랙션을 증명).

### 스타일링 방식
- **토큰 우선** — 모든 값은 `tokens/`에서. CSS는 `:root` 변수, Tailwind는 `theme.extend`, 기계 판독은 `tokens.json`. **하드코딩 금지 — 토큰을 참조**한다.
- **아이콘** — 2톤 SVG. 주 형태 `currentColor`, 보조 형태 `fill-opacity:.3`. 색은 CSS `color`, 크기는 width/height로 제어.
- **반응형** — Mobile ≤767 · Tablet 768–1023 · Desktop ≥1024. hover는 데스크톱 전용(`@media (hover:hover)`), 터치 타깃 **≥44px**, `100dvh`·`safe-area-inset` 고려, 바디 가로 스크롤 금지.

### 파일 구조 (핸드오프 레포)
```
verba-design-handoff/
├─ DESIGN.md            ← 이 문서(디자인 시스템)
├─ tokens/              css · json · tailwind + brand-color.md
├─ icons/               2톤 SVG + 사용 규칙
├─ spec/                components.md · flow.md · responsive.md
└─ prototype/           verba.html(참고 구현) + 화면별 프로토타입
```

### 우선순위 (충돌 시)
1. **모양(레이아웃·간격)** → **Figma**(최종)
2. **값(색·타이포·라운드)** → **`tokens/`**
3. **동작·상태** → **`spec/components.md`**

`prototype/verba.html`은 값·컴포넌트·인터랙션을 한눈에 보는 **참고 구현**(최종 아님).
