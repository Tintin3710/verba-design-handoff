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
Primary CTA labels show cost when relevant: `카피 생성 −2 크레딧`.

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
Overlay (`rgba(30,27,75,.28)`), centered card. Options: SNS 이미지 카드 / 상세페이지 HTML / 텍스트·CSV.
Close on ✕ or backdrop click. (Prototype: `#exportBtn` / `#exportModal` / `#exportClose`.)

## Credits
Sidebar gauge shows `used / total` + bar. Generation deducts **1 credit per selected channel**.
When low (≤ a threshold), show the contextual banner on relevant views → link to Pricing.

## Loading
Spinner (respect `prefers-reduced-motion`) + staged checklist: 분석 ✓ → 규칙 적용 ✓ → 다듬는 중 … → A/B 정리.
Shown between Generate submit and Result.

## Empty / error (to design if extended)
- Empty history: illustration tile + copy + primary "첫 카피 만들기".
- Generation error: inline retry + keep inputs; never lose the form.

## Sidebar nav
Text + two-tone icon. Active row = `--brand-pale` bg + `--brand`. Inactive = `--body`.
