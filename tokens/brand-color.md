# Verba — Brand Color

**Primary `#5F3EFF`** (vivid violet). 이전 `#6B58EC` 대비 더 화사하고, 흰 글자 대비도 높음
(5.8:1 vs 5.0:1). 텍스트는 near-black으로 올려 Mercor 수준의 크리스프한 대비를 확보.

## Purple ramp
| step | hex | 용도 |
|---|---|---|
| 50  | `#F2EEFF` | active/selected 배경, 아이콘 타일 |
| 100 | `#E6E0FF` | |
| 200 | `#CFC2FF` | border(연) |
| 300 | `#AE97FF` | |
| 400 | `#8763FF` | |
| **500** | **`#5F3EFF`** | **primary** — CTA·활성·링크 |
| 600 | `#4F2BEA` | pressed / hover |
| 700 | `#3D1FC4` | |
| 800 | `#2C1690` | |
| 900 | `#1F0F66` | |

- `brand-pale = #F2EEFF`, `brand-border = #DCD2FF`, `on-brand = #FFFFFF`.

## Icon accents (아이콘 전용)
`purple #5F3EFF · teal #3FB3A6 · coral #E0795A` — 각각 옅은 `*-bg` 타일 위. (텍스트 아님)

## 뉴트럴 (near-black)
| token | hex | 이전 |
|---|---|---|
| ink (헤딩/본문) | `#17171B` | ~~#28283C~~ |
| body (보조) | `#4B4B57` | ~~#62626F~~ |
| mute (캡션/placeholder) | `#6E6E7A` | ~~#9A9AA6~~ (2.7:1 → AA 미달이었음) |
| surface | `#FFFFFF` · page `#F4F4F6` · soft `#F8F8FA` | |
| border | `#E5E5EA` · subtle `#EDEDF1` | |

## 대비(WCAG) 검증 — 모두 AA 이상
| 전경 | 배경 | 비율 | 판정 |
|---|---|---|---|
| ink `#17171B` | white | **17.4:1** | AAA |
| body `#4B4B57` | white | **8.9:1** | AAA |
| mute `#6E6E7A` | white | **4.7:1** | AA |
| white | brand `#5F3EFF` | **5.8:1** | AA |
| brand `#5F3EFF` (링크/pill 텍스트) | white | **5.8:1** | AA |
| brand `#5F3EFF` | brand-pale `#F2EEFF` | **5.2:1** | AA |
| ok `#15803D` | white | 5.0:1 | AA |
| warn `#B45309` | white | 5.0:1 | AA |
| danger `#DC2626` | white | 4.8:1 | AA |

> 일반 텍스트 AA 기준 4.5:1, 큰 텍스트/UI 3:1. 위 값은 모두 일반 텍스트 기준으로도 통과.
