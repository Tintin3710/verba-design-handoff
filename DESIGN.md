# Verba — Design Language

AI 카피라이팅 SaaS. **미니멀 화이트** 기조 — 흰 배경, 얇은 헤어라인 카드, 가벼운 글자 무게,
넉넉한 여백. 색은 브랜드 퍼플 하나 + 아이콘용 절제된 3색(퍼플·틸·코랄)만.

## 브랜드 컬러
- **Primary `#5F3EFF`** — 화면당 **단 하나의 주요 액션**과 활성/선택 상태, 링크에만.
- **Active bg `#F2EEFF`** — 선택된 nav·칩·소프트 버튼 배경.
- 나머지 UI는 화이트 + Stone-계열 뉴트럴(그레이)로. 색을 넓게 칠하지 않는다.

## 아이콘 보조색 (icon accents)
타일형 아이콘(액션 카드/채널/템플릿/내보내기)은 3색을 로테이션:
`purple #5F3EFF · teal #3FB3A6 · coral #E0795A` (각각 옅은 `*-bg` 타일 위).
아이콘은 `currentColor` + 투명도 2톤 → 컬러 하나로 색이 입혀짐.

## 타이포
- **Pretendard** 단일 패밀리 (한글+라틴).
- 무게: 헤딩 **700**, 강조/타이틀 **600**, 본문 **400**, nav/중간 **500**. (전반적으로 가볍게)
- 라벨은 12px 600 uppercase + tracking 1.4px.
- 스케일·값은 [`tokens/tokens.json`](../tokens/tokens.json) 참고.

## 레이아웃 · 스페이싱
- 콘텐츠 배경 화이트, 카드 = 흰색 + `1px #E6E6EB` 헤어라인, `--r-card` 16px.
- 그림자 최소(면 대비로 위계). 컨트롤은 pill/10px, 입력 9px.
- 스페이싱 4·8·12·16·20·24·28·32·40·48. 그룹 내부는 좁게, 그룹 사이는 넓게.

## Do / Don't
**Do** — 화면당 primary 1개(퍼플) · 흰 배경·헤어라인 카드 · 여백 넉넉히 · 아이콘 2톤 절제색.
**Don't** — 그라데이션 · 카드 안 카드 · 퍼플 남발 · 무거운 헤딩 무게 · 진한 그림자.

> 실제 구현 기준은 [`prototype/verba.html`](prototype/verba.html)의 `:root` 토큰과 컴포넌트.
> 상태·동작은 [`spec/components.md`](spec/components.md), 화면 흐름은 [`spec/flow.md`](spec/flow.md).
