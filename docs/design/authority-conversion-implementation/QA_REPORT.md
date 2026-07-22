# QA Report — Authority & Conversion P0

## Automated

| Check | Result |
|-------|--------|
| `npm run build` | **PASS** |
| `next lint` | Not configured (interactive prompt) — skipped |
| HTML smoke (plain language, mailto, WhatsApp, new routes, situation patterns, no “11 weeks” on iGaming) | **PASS** |
| Sitemap entries for new routes | **PASS** |

## Manual / captured

| Check | Result |
|-------|--------|
| Desktop + mobile screenshots (12) | Captured under `screenshots/` |
| mailto / WhatsApp on Contact | Present in export |
| Keyboard focus styles | Existing focus-visible classes retained on new links |
| Print CSS for authority assets | Added (`.authority-asset` @media print) |
| Metadata / canonical on new assets | Present |

## Screenshots

`docs/design/authority-conversion-implementation/screenshots/`

01 home hero · 02 home CTA · 03–04 contact · 05 intelligence · 06–07 assets · 08 iGaming claims · 09 footer · 10 team CTA · 11–12 mobile

## Unresolved blockers

None blocking PR open. Human approval still required before re-publishing quantitative mandate claims.
EOF
