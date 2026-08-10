# Verba Icons

19 flat **two-tone** icons, 24×24 viewBox. Two-tone is achieved with `currentColor` +
`fill-opacity` on the secondary shapes — so **one color drives the whole icon**.

## Usage
```html
<!-- color = the icon color; size via width/height -->
<span style="color:#6B58EC">
  <svg width="22" height="22"><use href="/icons/ic-doc.svg#..."></use></svg>
</span>
```
Simplest: inline the SVG and set `color` on a wrapper (icons inherit via `currentColor`).
In React, import as a component and pass `color` / `width`.

## Color rules (from the design system)
- **Sidebar / inline icons** → monochrome, `color: var(--body)`; active `var(--brand)`.
- **Tile icons** (action cards, channels, templates, export) → rotate the 3 accents:
  `--acc-purple`, `--acc-teal`, `--acc-coral`, each on its matching `*-bg` tile.

## Note
`ic-chat` uses white (`#fff`) dots inside the bubble — it expects the bubble to be a
solid color on a light background (as used in tiles). If you need it on a dark surface,
swap the dots to the surface color.

## Inventory
| file | meaning | typical use |
|---|---|---|
| ic-home | house | 대시보드 nav |
| ic-pencil | pencil | 카피 생성 nav / empty state |
| ic-grid | 4 squares | 템플릿 nav |
| ic-voice | waveform | 브랜드 보이스 / feature |
| ic-clock | clock | 히스토리 / 타임세일 |
| ic-bars | bar chart | 인사이트 nav |
| ic-doc | document | 상세페이지 채널 |
| ic-chat | speech bubble | SNS 채널 |
| ic-mega | megaphone | 광고 채널 |
| ic-channels | hub → 3 outputs | "채널 한 번에" feature |
| ic-shuffle | crossing arrows | A/B 변형 feature |
| ic-spark | sparkle star | 신제품 template |
| ic-bell | bell | 재입고 template |
| ic-thumb | thumbs up | 리뷰 template |
| ic-gift | gift box | 번들 template |
| ic-image | picture | 내보내기(이미지) |
| ic-code | brackets | 내보내기(HTML) |
| ic-table | table | 내보내기(CSV) |
| ic-bolt | lightning | 생성 근거 / 크레딧 배너 |
