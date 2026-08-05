# Octus Mobile Remediation — Relatório QA (2026-08-05)

**Status técnico:** `MOBILE_REMEDIATION_PASS`  
**Merge gate:** Rubio authorized — evidence correction then squash-merge  
**Produção tocada (pré-merge):** NÃO  

| Campo | Valor |
|-------|-------|
| APP_QA_SHA | `9fb4fff229b9915f9fb8f9b919c23399654d340d` |
| CURRENT_BRANCH_HEAD | `7c4f4373061abadb05aa774eeb89fe6a57b50895` |
| App QA Preview | https://octus-consulting-mobqz674u-axle1.vercel.app |
| Preview deployment | `dpl_BAJ4Dju9yefNLgJFo8cEDuEduGzt` |
| Produção viva (pré-release) | SHA `28eb2ec` · `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3` |

## Cookie consent evidence correction (2026-08-05)

Recaptured from APP_QA preview at `390×844`:

| Assertion | Result |
|-----------|--------|
| COOKIE_VISIBLE_SCREENSHOT | banner visible |
| COOKIE_ACCEPTED_SCREENSHOT | banner absent |
| WHATSAPP_OVERLAP | false (gap ≈ 41.6px; WA `bottom: 140px` elevated) |
| SCREENSHOT_HASHES_DIFFERENT | true |
| hash 09 visible | `09fcd3760dfd3f218d96a796fc028a433d56571e92d52966f9c4a86e7f884e5e` |
| hash 10 accepted | `a34ef0621ab551f953cb4e8f0cf1e89069a023dabd4a1a3731a117d987ddbca4` |
| WA resting after accept | `bottom: 24px` |

## Gates

| Gate | Resultado |
|------|-----------|
| Playwright matrix | PASS |
| Overflow horizontal | PASS |
| Cookie × WhatsApp overlap | PASS |
| Redirects no preview | PASS (308) |
| Preview `noindex` | PASS |
| Desktop @ 1024 | PASS |

## Terminology

- `APP_QA_SHA` = application tip used for visual QA (`9fb4fff`) — **not** current branch HEAD after docs/evidence stamps.
- `CURRENT_BRANCH_HEAD` = tip after this evidence correction commit.

## Evidência

`docs/ops/evidence/OCTUS_MOBILE_REMEDIATION_2026-08-05/screenshots/`  
`QA_MATRIX.json`
