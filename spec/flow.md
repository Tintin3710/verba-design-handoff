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

Sidebar (전역): Dashboard · Generate · Templates · Brand Voice · History · Insights
Credit low ──▶ Pricing
History (첫 유저) ──▶ Empty state ──▶ Generate
```

## Screens (12)
1. **Dashboard** — greeting, quick-generate action cards, recent (row → detail), monthly stat.
2. **Generate (입력)** — 상품명/업종/소구점/채널(복수) + 브랜드 보이스 + A/B 토글 → 생성.
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

## Key rules
- **하나의 primary 액션**만 brand 퍼플로 채움 / 화면.
- 브랜드 보이스는 **온보딩에서 생성 → Brand Voice에서 관리 → Generate에서 선택**.
- 크레딧 = 채널 수만큼 차감. 소진 근접 시 Pricing 유도.
