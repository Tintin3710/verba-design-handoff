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
│  ├─ flow.md           12개 화면 플로우
│  └─ responsive.md     반응형(390/768/1440) 규칙 + 웹 전달 주의사항
└─ prototype/
   ├─ verba.html               참고 구현 (전체 13화면·값·컴포넌트·인터랙션)
   ├─ verba-responsive.html    PC/Tablet/Mobile 3폭 리플로우 데모(컨테이너쿼리)
   ├─ verba-history.html       히스토리 단독 화면 (개별 임포트용)
   ├─ verba-voice-loading.html 브랜드 보이스 생성 로딩 (온보딩)
   ├─ verba-generate-cta.html  카피 생성 하단 고정 바(CTA·A/B) + 게스트/크레딧 부족 상태
   ├─ verba-signup-wall.html   결과 위 가입 소프트월 모달(구글·카카오)
   ├─ verba-rationale-copy.html A/B 생성 근거·프로세스 배너 문구(기존→수정)
   ├─ verba-export-options.html 내보내기 옵션 재구성(SNS 이미지 카드 제외)
   ├─ verba-login.html         로그인(패스워드리스) · 인터랙션 참고 — 디자인 최종=Figma
   ├─ verba-signup.html        회원가입(이름·이메일, 패스워드리스) · 인터랙션 참고 — 디자인 최종=Figma
   ├─ verba-templates.html     템플릿 갤러리 — GET /templates 실 데이터 6개 + 카테고리 필터
   ├─ verba-products-grid.html 상품 카드 그리드(career-3 스타일) — 본편 verba.html 화면 13
   └─ verba-product-loader-final.html 저장 상품 불러오기 로더 — Default·Search·Selected·Replace 4상태(본편 화면 2 편입)
```

> **인증(로그인·회원가입)**: 위 두 HTML은 **인터랙션 참고용**입니다. **디자인 최종본은 Figma** — 갈리면 Figma를 따르세요.

## 개발자에게 — 기준 우선순위

> **Figma 파일이 디자인 최종본입니다.** 디자이너가 Figma에서 계속 다듬으므로, 아래 자료와 갈리면 **항상 Figma를 따르세요.**
> Figma: https://www.figma.com/design/0EHUDXn78I7rgtrXuox7jS/AI-카피생성-웹

1. **화면 '모양'(레이아웃·간격·구성) → Figma.** 시각적 판단이 갈리면 Figma가 이깁니다. 이 레포와 다르면 Figma 기준.
2. **정확한 값(색·타이포·라운드·상태색) → `tokens/`.** Figma 변수와 토큰이 다르면 Figma로 맞추고 알려주세요.
3. **'동작·상태' → `spec/components.md`** (hover/focus/loading/empty/A·B 토글/크레딧 차감 등). Figma에 없는 인터랙션은 여기 기준.
4. `prototype/verba.html`은 값·컴포넌트·인터랙션을 한눈에 보는 **참고 구현**입니다(최종 아님). `DESIGN.md`는 원칙.
5. 아이콘은 `currentColor` 2톤 — 색은 CSS `color`로, 크기는 width/height로.

## 핵심 원칙 한 줄
> 미니멀 화이트 + Pretendard. 브랜드 퍼플 `#5F3EFF`는 **화면당 하나의 주요 액션**에만,
> 아이콘 보조색(퍼플·틸·코랄)은 절제되게. 나머지는 흰 배경 + 헤어라인.

## 레퍼런스
- 인터랙티브 프로토타입(라이브): Claude Artifact — A/B 토글·내보내기 모달 동작 확인 가능.
  (별도 공유 링크 참고)
