# Client-Facing Compression and Family Integrity — PR #17

**Date:** 2026-08-03  
**Branch:** `feat/seven-areas-website-architecture`  
**Starting HEAD:** `443f1bc087626c49fd84d3c41d54543521107943`  
**Family-integrity commit:** `5ece72e`  
**Implementation commit:** `bbd3f1d`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  

## Family integrity

| Metric | Before | After |
|--------|--------|-------|
| Public families | 55 | **34** |
| Approved services mapped | 39 | **39** |
| Empty rendered families | 20 | **0** |

Empty families removed or merged into capability notes / delivery stages (examples): REG-F5/F6/F7, CMP due-diligence/training empties, LEG corporate/tax/IP/notifications/dispute empties, CORP maintenance empty, PC succession/governance empties, REM controls/cleanup/docs/continuity empties, HUB jurisdiction-comparison/programme-management/maintenance empties.

Services retained: all SVC-REG-01…05, SVC-CMP-01…06, SVC-LEG-01…04, SVC-CORP-01…07, SVC-PC-01…05, SVC-REM-01…06, SVC-HUB-01…06.

Do not advertise the family count on the public website.

## Family counts by area (internal)

| Area | Families |
|------|----------|
| Regulatory Structuring | 4 |
| Compliance & Risk | 6 |
| Legal & Structural Architecture | 3 |
| Corporate Structuring | 6 |
| Private Clients | 5 |
| Remediation & Readiness | 5 |
| International Hub | 5 |

## Services overview compression

Removed full “55 service families” catalog section. Structure now:

1. Hero  
2. Seven-area overview (≤4 representative themes per card)  
3. How the areas connect  
4. Cross-cutting capabilities (Banking + Tax, positive language)  
5. Multi-jurisdiction  
6. Industries  
7. How Octus engages  
8. Compact text close (no repeated full-size WA button)

## Hub compression

12 content requirements covered in **7 visible chapters** on each hub:

1. Hero (one primary CTA + quiet “All services”)  
2. Client triggers  
3. Capabilities (single family accordion; no summary grid; no duplicate deep list)  
4. Cross-border coordination (MJ + connected areas)  
5. Markets (industries + jurisdictions)  
6. Delivery and accountability (shared scope labels)  
7. Compact text close  

Deep-service routes deduplicated by canonical path inside accordion rows.

## Team

Roster unchanged (7). Bios narrowed to ~25–30 words with scope-specific accountability. Rubio crops retuned for homepage / Team desktop / Team mobile (asset still `8b12fcc` sha256 `b02c2d72…`).

## CTA reductions (page content only)

| Family | Page-content primary | Closing |
|--------|----------------------|---------|
| Seven hubs | 1 hero button | text link only |
| Services | 1 hero button | text link only |
| Team | none in hero | Discuss + Careers text |
| Brazil | 1 hero button | text link only |
| Intelligence | Explore Insights | Discuss a specific issue (quiet) |

## Brazil

Rebuilt into: atmospheric hero → who for → regulatory pathway cards → integrated operating dependencies → international↔Brazil connection → 5 specific Insights → compact close. Evidence-safe B2B/supplier language.

## Editorial / taxonomy

Removed public taxonomy-governance and negative positioning phrases from Services, hubs, Brazil and related public copy. Positive replacements for Banking and Tax cross-cuts.

## Metadata

Preserved absolute production `og:image` / `twitter:image` and production canonical/`og:url`. Verified on static `out/team.html`.

## Screenshots

`docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/compression/`

Includes Services, all seven hubs (desktop), Reg/Compliance/Team/Brazil mobile, Reg at 375 and 360, Rubio crops.

## Validation

- build: PASS  
- typecheck: PASS  
- 81 canonical routes retained in map  
- 39/39 services mapped; 0 empty families  
- 0 prohibited Team profiles  
- metadata production OG; no preview host in social images  
- mobile accordion defaults collapsed &lt;640px  

## Remaining visual defects

- Rubio crop still warrants human eye on live preview against Maria Cristina  
- Mobile accordion expand length on longest hubs should be spot-checked on device  

## Scope exclusions

- No merge  
- No production deploy  
- No rebase  
