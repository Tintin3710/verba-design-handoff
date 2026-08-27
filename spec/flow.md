# Verba — Screen Flow

```
Landing ──▶ (가입/로그인) ──▶ Onboarding(브랜드 보이스 설정) ──▶ Dashboard
                                                                    │
   ┌────────────────────────────────────────────────────────────────┤
   │                                                                  │
   ▼                                                                  ▼
Generate(입력) ──▶ Loading(생성 중) ──▶ Result(A/B·복사) ──▶ Export(모달)
   ▲                                        │
   └──────────── 다시 생성 ◀────────────────┘

Sidebar (전역): Dashboard · Generate · Templates · Brand Voice · Products · History · Insights
Credit low ──▶ Pricing
History (첫 유저) ──▶ Empty state ──▶ Generate
```

## Screens (13)
1. **Dashboard** — greeting, quick-generate action cards, recent (row → detail), monthly stat.
2. **Generate (입력)** — 좌측 상단 **‘저장된 상품 불러오기’**(검색 + 최근 칩 + 모든 상품 보기) → 상품 선택 시 상품명·업종·소구점 자동입력(채널·톤 제외, ‘이번 카피에만 적용’). + 안내 배너('이렇게 만들어드려요') + 상품명/업종/기본 톤(chips)/소구점/채널(복수) + 브랜드 보이스 선택. **하단 고정 바**에 A/B 토글 + 카피 생성 CTA(2크레딧). 상태: 로그인 / 게스트(무료 체험 3크레딧) / 크레딧 부족. 참고: `prototype/verba-generate-cta.html` · `verba-product-loader-final.html`(로더 4상태: Default·Search·Selected·Replace).
3. **Result** — 생성 근거 배너 + 채널별 A/B 카드(전략 캡션·글자수·복사) + 내보내기.
4. **Templates** — 목적별 프리셋 카드 + 카테고리 필터 → '사용'하면 Generate 프리필.
5. **Insights** — KPI + 채널별/주간 차트.
6. **Landing** — 마케팅 히어로 + 기능 3카드 + CTA.
7. **Onboarding** — 스텝퍼(환영→브랜드 보이스→완료); 여기서 '우리 브랜드·기본' 보이스 생성. (생성 로딩: `prototype/verba-voice-loading.html`)
8. **Loading** — 생성 진행 단계.
9. **Empty** — 첫 유저 히스토리 0건 → 첫 카피 CTA.
10. **Brand Voice** — 저장된 보이스 목록/편집/기본 지정(온보딩 결과가 여기로).
11. **Pricing** — 크레딧 소진 배너 → Free/Pro(featured)/Team.
12. **History (기록)** — 생성 이력 리스트 + 검색 + 채널 필터 + 행별 복사.
13. **Products (상품)** — 등록 상품 카드 그리드(career-3 스타일) + 업종 필터 + **불러오기**(카피 생성 프리필) + 상품 상세(= productId 필터 히스토리). 참고: `prototype/verba-products-grid.html`.

## Key rules
- **하나의 primary 액션**만 brand 퍼플로 채움 / 화면.
- 브랜드 보이스는 **온보딩에서 생성 → Brand Voice에서 관리 → Generate에서 선택**.
- 생성 1회 = **2크레딧**(가입 유저). **게스트**는 최초 진입 시 무료 체험 **3크레딧** 지급 → 1회 생성(2크레딧) 후 부족 시 가입 유도.
- 크레딧 부족 시: 카피 생성 버튼 비활성 + 사유 배너 + **하단 고정 바 CTA**(로그인 유저 = 크레딧 충전/Pricing · 게스트 = 가입). 참고: `prototype/verba-generate-cta.html`, `verba-signup-wall.html`.
- **인증**: 로그인 = **패스워드리스**(이메일 인증 링크) + 구글·카카오 / 회원가입 = **이름·이메일**(패스워드리스) + 구글·카카오. 디자인 최종 = **Figma**, 인터랙션 참고 = `prototype/verba-login.html`·`verba-signup.html`.
