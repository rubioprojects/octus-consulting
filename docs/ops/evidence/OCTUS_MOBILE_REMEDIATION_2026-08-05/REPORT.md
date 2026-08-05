# Octus Mobile Remediation — Relatório QA (2026-08-05)

**Status técnico:** `MOBILE_REMEDIATION_PASS`

| Campo | Valor |
|-------|-------|
| APP_QA_SHA | `9fb4fff229b9915f9fb8f9b919c23399654d340d` |
| COOKIE_EVIDENCE_SHA | `664742c6539199ed9929670f8a8c8b13ad7ecbc0` |
| CURRENT_BRANCH_HEAD | tip after this report stamp (see git / PR head) |
| App QA Preview | https://octus-consulting-mobqz674u-axle1.vercel.app |
| Preview deployment | `dpl_BAJ4Dju9yefNLgJFo8cEDuEduGzt` |
| Produção viva (pré-release) | SHA `28eb2ec` · `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3` |

## Terminology

- `APP_QA_SHA` (`9fb4fff`) = application tip used for visual QA. **Not** current branch HEAD.
- `COOKIE_EVIDENCE_SHA` (`664742c`) = evidence-only commit that corrected cookie screenshots.
- `CURRENT_BRANCH_HEAD` = PR tip at merge time (docs stamps after cookie evidence).

## Cookie consent evidence correction

Recaptured from APP_QA preview at `390×844`:

| Assertion | Result |
|-----------|--------|
| COOKIE_VISIBLE_SCREENSHOT | banner visible |
| COOKIE_ACCEPTED_SCREENSHOT | banner absent |
| WHATSAPP_OVERLAP | false (gap ≈ 41.6px; WA elevated `bottom: 140px`) |
| SCREENSHOT_HASHES_DIFFERENT | true |
| hash 09 visible | `09fcd3760dfd3f218d96a796fc028a433d56571e92d52966f9c4a86e7f884e5e` |
| hash 10 accepted | `a34ef0621ab551f953cb4e8f0cf1e89069a023dabd4a1a3731a117d987ddbca4` |
| WA resting after accept | `bottom: 24px` |

## Gates

| Gate | Resultado |
|------|-----------|
| Playwright / mobile QA | PASS |
| Cookie × WhatsApp overlap | PASS |
| Desktop @ 1024 | PASS |
| Preview redirects | PASS |
