# Phase 5C — Fact and Claim Register (opening)

**Phase:** 5C  
**Starting HEAD:** `cee3e907069542b14c85bec56769dc9549b4674c`  
**As-of date for review:** 2026-08-03  
**Status:** OPENING — remediation actions applied in later commits; closeout in claims commit.

## Classification schema

| Field | Values |
|---|---|
| category | `current_law` · `historical_context` · `proposal` · `consultation` · `opinion_commentary` · `institutional_identity` · `process_description` · `third_party_statistic` · `partnership_claim` · `capability_claim` |
| verification_status | `verified` · `qualified` · `unsupported` · `removed` · `retained_with_source` |
| action | `keep` · `qualify` · `remove` |

## Priority triage (opening)

| ID | Route | Exact claim (summary) | Category | Source | Source date | Status | Action |
|---|---|---|---|---|---|---|---|
| C-001 | `/compliance-channel` | “Confidentiality and anonymity are guaranteed.” | process_description | None (absolute guarantee) | — | unsupported | **remove** / soften |
| C-002 | `/compliance-channel` | “Compliance Officer & DPO” designation | institutional_identity | No appointed DPO on public record | — | unsupported | **qualify** — Compliance contact only |
| C-003 | `/privacy` | “essential and analytical cookies” in use | process_description | Conflicts with CookieBanner + `/cookies` | — | unsupported | **qualify** to essential + localStorage only |
| C-004 | `/privacy` | Website usage data “collected via analytics” | process_description | Analytics not enabled on static export | — | unsupported | **qualify** / remove current-tense analytics |
| C-005 | `/privacy` | “Data protection officer” heading | institutional_identity | Team contact exists; no DPO named | — | qualify | Retitle to Data protection contact |
| C-006 | `/insights/.../betting-taxation-...` | “approximately 60% of players” illegal | third_party_statistic | Instituto Locomotiva / IBJR (cited) | article attribution | qualify | Keep attribution; mark as third-party estimate / opinion |
| C-007 | `/insights/.../betting-taxation-...` | “BRL 460 million per year in wages” | third_party_statistic | LCA / Cruz / IBJR / ANJL study (cited) | article attribution | qualify | Keep as attributed study figure; not Octus research |
| C-008 | `/insights/.../quinel-...` | “globally recognised”; “standards of excellence”; “one of five” | partnership_claim | SPA/MF credentialing narrative | 2024 | qualify | Soften marketing; retain credentialing as historical/partnership with source qualification |
| C-009 | `/insights/.../regulation-and-technology-...` | AI integration as sector vector | opinion_commentary | Industry commentary | 2025-07 | qualify | Frame as sector context, not Octus product AI |
| C-010 | `/intelligence` | Positioning / pillars | capability_claim | Editorial | 2026-08 | keep | Practical regulatory/compliance/operational insight; no awards/leader claims |
| C-011 | `/cookies` | Essential-only + future analytics | process_description | Aligns CookieBanner | 2026-07 | keep | Retain; unify Privacy dates |
| C-012 | `/terms` | No professional advice; Delaware governance | institutional_identity | Corporate identity | 2026-03 | keep | Align service wording to engagement model; update date if material edit |
| C-013 | Insights regulatory posts (SPA/STF/COAF etc.) | Statute / ordinance descriptions | current_law / historical_context | Primary instruments named in body | per article | keep/qualify | Add opinion vs law clarity where absolutist |

## Forbidden claim types (binding)

Unsupported numbers · awards · rankings · certifications of Octus · regulator relationships · guaranteed outcomes · response SLAs.

## Closeout note

Full keep/qualify/remove tallies and source coverage recorded after application commits in this register’s closeout section (claims commit).
