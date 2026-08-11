# Verba — Design Handoff

AI 카피라이팅 SaaS **Verba**의 개발 전달용 디자인 패키지. 디자인 시스템 + 토큰 + 아이콘 +
컴포넌트/플로우 스펙 + 레퍼런스 구현을 담습니다.

## 구성
```
verba-handoff/
├─ DESIGN.md            디자인 언어(브랜드·색·타이포·스페이싱·Do/Don't)
├─ tokens/
│  ├─ brand-color.md    브랜드 팔레트(50~900) + WCAG AA 대비표
│  ├─ tokens.css        CSS 변수 (구현 기준값)
│  ├─ tokens.json       기계 판독용 토큰
│  └─ tailwind.config.js Tailwind theme.extend
├─ icons/              19개 2톤 SVG 아이콘 + 사용 규칙(README)
├─ spec/
│  ├─ components.md     컴포넌트 상태 · 인터랙션 동작
│  ├─ flow.md           11개 화면 플로우
│  └─ responsive.md     반응형(390/768/1440) 규칙 + 웹 전달 주의사항
└─ prototype/
   ├─ verba.html            레퍼런스 구현 (모든 값·컴포넌트·인터랙션의 원본)
   └─ verba-responsive.html PC/Tablet/Mobile 3폭 리플로우 데모(컨테이너쿼리)
```

## 개발자에게
- **값의 기준은 `tokens/` + `prototype/verba.html`의 `:root`.** DESIGN.md는 원칙, tokens는 구현값.
- 화면 '모양'은 Figma, **'동작·상태'는 `spec/components.md`** 를 보세요 (hover/focus/loading/empty/A-B 토글/크레딧 차감 등).
- 아이콘은 `currentColor` 2톤 — 색은 CSS `color`로, 크기는 width/height로.

## 핵심 원칙 한 줄
> 미니멀 화이트 + Pretendard. 브랜드 퍼플 `#5F3EFF`는 **화면당 하나의 주요 액션**에만,
> 아이콘 보조색(퍼플·틸·코랄)은 절제되게. 나머지는 흰 배경 + 헤어라인.

## 레퍼런스
- 인터랙티브 프로토타입(라이브): Claude Artifact — A/B 토글·내보내기 모달 동작 확인 가능.
  (별도 공유 링크 참고)
