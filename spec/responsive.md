# Verba — Responsive & Web Handoff

라이브 데모: [`prototype/verba-responsive.html`](../prototype/verba-responsive.html) — 각 프레임이
**제 폭에 맞춰 실제 리플로우**(컨테이너 쿼리)되어 3폭을 한 화면에서 확인.

## 브레이크포인트
| 구간 | 폭 | 사이드바 | 액션 카드 | 대시보드 패널 | 랜딩 |
|---|---|---|---|---|---|
| **Mobile** | 390–767 | 하단 탭바 + 상단 햄버거 | 2열 | 1열 | 히어로 세로 · 기능 1열 · nav=로고+CTA |
| **Tablet** | 768–1023 | 아이콘 레일 64px | 2열 | 1열 | 기능 3열 · nav 링크 노출 |
| **Desktop** | 1024–1440+ | 풀 사이드바 212px | 4열 | 1.6 / 1 | 풀 레이아웃(콘텐츠 max-width) |

- 구간 사이는 **유동(fluid)**. 데스크톱은 콘텐츠 `max-width`로 **과확장 방지** — 1440+에서도 레이아웃 동일, 좌우 여백만 넓어짐.
- 결과 화면 **채널 카드는 전 구간 세로 스택**.

## 웹 전달 주의사항
1. **내비게이션 변형** — 데스크톱 사이드바를 그대로 모바일에 넣지 말 것. Tablet=아이콘 레일, Mobile=하단 탭바(+햄버거).
2. **터치 & 호버** — 모바일 터치 타깃 ≥ 44px. `hover`는 데스크톱 전용 → `@media (hover:hover)`로 분리(모바일은 active/focus).
3. **폰트** — Pretendard 웹폰트(SIL OFL) 로드 + 시스템 폴백. 한글 잘림/자간 확인. 무게 라이트(700/600/400).
4. **가로 스크롤 금지** — 표·긴 카피는 자체 컨테이너 `overflow-x:auto`. 긴 텍스트 ellipsis. body 가로 스크롤 X.
5. **뷰포트 단위** — `100vh` 대신 `100dvh`(모바일 주소창). 하단 고정 탭바는 `env(safe-area-inset-bottom)`.
6. **접근성** — 대비 AA(무게 낮춘 뒤 재확인), 포커스 링, 키보드 내비, `prefers-reduced-motion`.
7. **이미지/에셋** — 아이콘은 SVG(2톤 currentColor). 래스터가 생기면 `srcset`/2x.

## 구현 메모
데모는 **컨테이너 쿼리**(`@container`)로 한 페이지에 3폭을 동시에 보여줍니다. 실제 앱에선
동일 규칙을 **뷰포트 미디어쿼리**로 옮기면 됩니다:
```css
/* mobile-first */
.actiongrid{ grid-template-columns:1fr 1fr; }
@media (min-width:768px){ .actiongrid{ grid-template-columns:repeat(2,1fr);} .sidebar{...icon rail} }
@media (min-width:1024px){ .actiongrid{ grid-template-columns:repeat(4,1fr);} .dgrid{grid-template-columns:1.6fr 1fr;} }
```
