# Verba — Component & Interaction Spec

States and behavior the coded prototype implies. Visuals live in Figma / `/prototype/verba.html`;
this doc is the **behavior** layer devs need.

## Buttons
| variant | fill | text | radius | use |
|---|---|---|---|---|
| primary | `--brand` | white | `--r-btn` | the one main action per view |
| soft / sm | `--brand-pale` | `--brand` | `--r-btn`/pill | secondary in-context actions (다시 생성, 복사) |
| outline | white + `--border` | ink | `--r-btn` | tertiary (데모 보기, 현재 플랜) |
| ghost | transparent | ink | — | low-emphasis (로그인, 나중에 하기) |

States: hover (border→`--brand` on cards; slight bg darken on solid), **focus-visible ring**
(2px `--brand` @ 40% — add for a11y), disabled (opacity .5, no pointer), pressed (`--brand-pressed`).
Primary CTA labels show cost when relevant: `카피 생성 · 2 크레딧`.

## Cards
Flat white, `1px --border`, `--r-card`, no shadow by default (`--shadow-card` only for the frame device).
Hover on interactive cards: `border-color:--brand`. Never nest a card in a card.

## Chips / segmented
- **Channel chips** (multi-select): default = outline; selected = `--brand-pale` bg + `--brand` border/text.
- **Tone chips** (onboarding): same, multi-select.
- **Filter pills** (templates): selected = ink fill, white text.

## Inputs
White, `1px --border`, `--r-input`. Focus: border `--brand` + 3px `--brand-pale` ring. Placeholder `--mute`.

## A/B result card  ★ interactive
- Tabs `안 A / 안 B` per channel. Clicking swaps **both** the copy body and the strategy caption
  (`data-strat`). Only one variant visible at a time.
- Each channel maps to a real platform (인스타/구글/네이버). Char count shown small; when a
  platform has a hard limit (e.g. Google headline 30자), show `n / max` and turn `--warn` near limit.
- **Copy button** per channel → copies that variant to clipboard; success state `✓ 복사됨`.
- Header actions: `↻ 다시 생성` (re-generate, −credits), `↥ 내보내기` (opens export modal).

## Export modal
Overlay (`rgba(30,27,75,.28)`), centered card. Options: **전체 복사(클립보드) / 상세페이지 HTML / CSV**.
(SNS 이미지 카드는 이미지 렌더링이 필요 → 후속. 전체 복사 = 3채널·선택한 안 한 번에.)
Close on ✕ or backdrop click. (Prototype: `#exportBtn` / `#exportModal` / `#exportClose`.)

## Credits
Sidebar gauge shows `used / total` + bar. Generation costs **2 credits per generation** (signed-in users).
게스트는 최초 진입 시 무료 체험 크레딧(3) → 소진 시 가입/충전 유도.
When low (≤ a threshold), show the contextual banner on relevant views → link to Pricing.

## Loading
Spinner (respect `prefers-reduced-motion`) + staged checklist: 분석 ✓ → 규칙 적용 ✓ → 다듬는 중 … → A/B 정리.
Shown between Generate submit and Result.

## Empty / error (to design if extended)
- Empty history: illustration tile + copy + primary "첫 카피 만들기".
- Generation error: inline retry + keep inputs; never lose the form.

## Sidebar nav
Text + two-tone icon. Active row = `--brand-pale` bg + `--brand`. Inactive = `--body`.

## Product loader (저장 상품 불러오기)  ★ interactive
Generate 폼 상단. 선택 시 상품명·업종·소구점만 **prefill**(채널·톤 제외), "이번 카피에만 적용" helper.
- **Desktop** — 인라인 combobox: 검색 필드 + 최근 칩(`상품명 · 업종`). focus → 팝오버 목록(상품명 / 업종·N회 생성·최근일), 바깥 클릭(mousedown)으로 닫힘.
- **Mobile** — **바텀시트**로 전환(탭 타깃 ≥44px, 드래그 핸들, 배경 딤 탭으로 닫기).
- 입력값이 있는 상태에서 다른 상품 선택 → **교체 확인 다이얼로그**(취소 / 상품 불러오기). 원본 상품 정보는 상품 관리에서만 수정.

## Danger actions (위험 행동)
계정 삭제·소셜 연결 해제 등 되돌릴 수 없는 행동은 **2단계 확인**.
- 삭제: 확인 다이얼로그(데이터 목록 명시) + 확인 체크박스로 실행 게이팅. `--danger`는 삭제·에러에만.
- 연결 해제: 유일 로그인 수단이면 차단 안내("다른 계정 먼저 연결"). 연결 상태 = ✓ 표시 + ⋯ 메뉴(중복 뱃지·버튼 금지).
