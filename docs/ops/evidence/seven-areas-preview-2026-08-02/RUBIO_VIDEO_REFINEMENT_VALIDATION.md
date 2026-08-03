# Rubio video refinement validation — PR #17

**Date:** 2026-08-02  
**Branch:** `feat/seven-areas-website-architecture`  
**Terminal target:** `OCTUS_WEBSITE_RUBIO_VIDEO_REFINEMENT_READY`  
**Base HEAD before mission:** `d67d140ac059ce11e7795bec829dcfdea9e33ce3`  
**Merge:** not performed  
**Production deploy:** not performed  
**Catalog / taxonomy:** unchanged  

## Timestamp-based issue register (recording)

| Approx. cue | Issue | Resolution |
|---|---|---|
| Homepage early scrolls | Leadership portraits of Rubio and Cris missing near top | Restored `HomeLeadershipTrust` after authority strip with approved assets |
| ~00:44 Legal hero | Widow / orphaned last word on long hero line | Shortened Legal `oneSentence`; `text-wrap: balance` on hero titles |
| Compliance / Remediation / Hub heroes | Long formulaic second lines | Editorial shorten of `oneSentence` / summary endings |
| Footer / late scroll | Cookie banner covering footer and colliding with WhatsApp | Raised WA z-index, cookie body class lifts WA above banner + safe-area |
| Area pages late | Orphaned `All services` buttons / sparse related blocks | Integrated into Related services composition; tightened closing padding |
| Homepage final CTA | Three competing buttons | Primary Discuss + secondary Start diagnostic; Contact as text link |
| Homepage copy | Hero and “What Octus does” repeated; negative “not an advisory firm” | Distinct sections; positive leadership language |
| About “2019” | Grey empty rectangle | Replaced with `/team-group.jpg` |
| Public copy | Em/en dash rhetorical punctuation | Unicode dash sweep + natural rewrites |

## Portrait source paths

| Person | Role | Asset |
|---|---|---|
| Rubio Teixeira | Founder | `/public/team/rubio-teixeira.jpg` → `/team/rubio-teixeira.jpg` |
| Maria Cristina (Cris) | Managing Director | `/public/team/maria-cristina.jpg` → `/team/maria-cristina.jpg` |
| About 2019 panel | Team context image | `/public/team-group.jpg` → `/team-group.jpg` |

Prior approved component restored from history: `HomeLeadershipTrust` (`70cb232` / `5f61dcc`), with substantial rectangular portrait treatment (not tiny circular cards).

## Copy punctuation search

- Search for U+2014 (em dash) and U+2013 (en dash) across `app/`, `components/`, `lib/*.ts`.
- Result after sweep: **0** remaining unicode em/en dashes in those trees.
- Title separators rewritten to `|` where brand titles required a separator.
- Compound examples rewritten where natural (`post-license` → after licensing; mechanical over-rewrites of `multi-jurisdiction` / `regulator-facing` repaired where grammar broke).
- Minus signs, URLs, routes and technical identifiers preserved.

## Cookie persistence

| Step | Result |
|---|---|
| Banner shown when `localStorage` empty | Yes |
| Continue sets `octus-cookies-accepted=true` | Yes |
| Banner hidden after accept | Yes |
| Persists across navigation (`/` → `/about`) | Yes |
| Persists after reload | Yes (`bannerAfterReload=0`) |

## WhatsApp overlap

| Viewport | Overlap with cookie | Gap | Notes |
|---|---|---|---|
| Desktop 1440 | None (`ok: true`) | ~27px | WA z-index 110; cookie 100; body class lifts WA |
| Mobile 390 | None (`ok: true`) | ~9–10px | Icon-only label via CSS; `aria-label` retained; 48×48 min target |

Single floating WA control in `app/layout.tsx`. Vercel toolbar is preview-only and not part of site chrome.

## CTA interaction matrix

Machine click audit against local static export (`http://127.0.0.1:3017`). Full JSON: `screenshots/cta-matrix.json`.

| Control | Source | Expected | Result |
|---|---|---|---|
| Header Discuss | `/` | wa.me | PASS |
| Hero Discuss | `/` | wa.me | PASS |
| Hero Explore services | `/` | `/solutions` | PASS |
| Final Discuss | `/` | wa.me | PASS |
| Final Start diagnostic | `/` | wa.me | PASS |
| Final contact text | `/` | `/contact` | PASS |
| Floating WhatsApp | `/` | wa.me | PASS |
| All services (home) | `/` | `/solutions` | PASS |
| Area hero primary ×7 | area routes | wa.me | PASS |
| Area All services ×7 | area routes | `/solutions` | PASS |
| Contact Discuss | `/contact` | wa.me | PASS |
| Mobile hero Discuss | `/` | wa.me | PASS |
| Mobile floating WA | `/` | wa.me | PASS |
| Mobile Legal hero CTA | Legal area | wa.me | PASS |
| Solutions index “Assess” | `/solutions` | n/a | Not present on index (Assess lives on remediation/home). Not a dead control. |

**Failures found and corrected during mission**

- Cookie/WA collision (positioning + z-index).
- Orphaned area `All services` buttons.
- Homepage three-way final CTA competition.
- Empty About 2019 grey cell.
- Missing homepage leadership portraits.
- Em/en dash rhetorical punctuation across public copy.

## Widow / orphan review

Viewports: 1440, 1280, 1024, 768, 390, 375.  
Helpers: `text-wrap: balance` on headings; `text-wrap: pretty` on body.  
JSON: `screenshots/widow-report.json`.  
Automated last-word scan against forbidden orphan set (`needed`, `operations`, `structure`, `services`, `where`, `for`, `and`): **no suspects** on Legal, Compliance, Remediation, Hub, Home heroes after copy edits.  
Manual Legal hero second line shortened to: “Contractual and legal frameworks, coordinated with counsel.”

## Viewport matrix (evidence screenshots)

| Artifact | Path |
|---|---|
| Homepage top / leadership | `screenshots/rubio-video-refinement/01-homepage-top-leadership-desktop.png` |
| Leadership portraits | `screenshots/rubio-video-refinement/01b-homepage-leadership-portraits-desktop.png` |
| Homepage desktop full | `screenshots/rubio-video-refinement/02-homepage-full-desktop.png` |
| Homepage mobile full | `screenshots/rubio-video-refinement/02b-homepage-full-mobile.png` |
| Legal hero desktop | `screenshots/rubio-video-refinement/03-legal-hero-desktop.png` |
| Legal hero mobile | `screenshots/rubio-video-refinement/04-legal-hero-mobile.png` |
| Remediation hero desktop | `screenshots/rubio-video-refinement/05-remediation-hero-desktop.png` |
| Remediation hero mobile | `screenshots/rubio-video-refinement/06-remediation-hero-mobile.png` |
| About 2019 image | `screenshots/rubio-video-refinement/07-about-2019-image-desktop.png` |
| Footer + cookie | `screenshots/rubio-video-refinement/08-footer-cookie-visible-desktop.png` |
| Footer + cookie mobile | `screenshots/rubio-video-refinement/08b-footer-cookie-visible-mobile.png` |
| Footer after accept | `screenshots/rubio-video-refinement/09-footer-after-cookie-accept-desktop.png` |
| WA on dark | `screenshots/rubio-video-refinement/10-whatsapp-on-dark.png` |
| WA on white | `screenshots/rubio-video-refinement/11-whatsapp-on-white.png` |

## Unresolved human decisions

1. Final human visual PASS / Rubio PNG approval still required before any merge or production claim.
2. Whether Markets hero rewrite (“Regulated sectors. One structural discipline.”) is preferred wording vs prior formula (editorial change within mandate).
3. Whether About team-group photo grading (grayscale) should remain as-is for production.

## Constraints confirmation

- Catalog not modified.
- Insights posts not removed.
- No fake metrics or cases.
- No generated portraits.
- PR #17 not merged.
- Production not deployed.
