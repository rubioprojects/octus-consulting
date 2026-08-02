# Merge-candidate hygiene — validation

| Field | Value |
|-------|-------|
| Date | 2026-08-02 |
| Branch | `feat/seven-areas-website-architecture` |
| Final HEAD | `fbb8e0eeeac7d321e53b6a3360cb0bbcd8dc3198` |
| Preview | https://octus-consulting-br12puta7-axle1.vercel.app |
| PR | https://github.com/rubioprojects/octus-consulting/pull/17 |
| Terminal | `OCTUS_WEBSITE_MERGE_CANDIDATE_READY_FOR_RUBIO_APPROVAL` |
| Merge | **not performed** |
| Production deploy | **not performed** |

## GitHub mergeability

| Field | Value |
|-------|-------|
| mergeable | **true** |
| mergeable_state | **clean** |
| rebaseable | true |
| base SHA | `3d98346519bc4fc715c5eeb2374cc80fa49bf3f0` |
| head SHA | `fbb8e0eeeac7d321e53b6a3360cb0bbcd8dc3198` |
| Conflict resolution | **none** — no rebase/merge conflict; earlier `mergeable: false`/`UNKNOWN` was transient GitHub computation |
| Website files changed for mergeability | **no** |

## Checks

| Check | Result |
|-------|--------|
| build | PASS |
| typecheck | PASS |
| route crawl | PASS |
| sitemap crawl | PASS — 81 URLs, all HTTP 200, zero redirects, zero legacy renamed hubs |
| canonical | PASS |
| redirect matrix | PASS — permanent **308**, one hop |
| OG / Twitter | PASS — page-specific |
| residual public phrases | PASS — zero hits |
| Services + mobile menu | PASS — `screenshots/merge-candidate/` |
| CTA matrix | PASS |
| preview `x-robots-tag: noindex` | PASS |

## Sitemap validation

| Metric | Value |
|--------|-------|
| URL count | 81 |
| HTTP 200 | 81 |
| 3xx / 4xx / 5xx | 0 |
| Legacy renamed hubs in sitemap | 0 |
| Banking supporting page present (200) | yes |

## Redirect validation

| Legacy | Final | Observed |
|--------|-------|----------|
| `/regulatory` | `/solutions/regulatory-structuring` | 308 → 200 (1 hop) |
| `/compliance` | `/solutions/compliance-risk` | 308 → 200 |
| `/corporate` | `/solutions/corporate-structuring` | 308 → 200 |
| `/audit` | `/solutions/remediation-readiness` | 308 → 200 |
| `/legal-architecture` | `/solutions/legal-structural-architecture` | 308 → 200 |
| Renamed six-Solution hubs | approved area URLs | 308 → 200 |
| `/solutions/banking-payments-infrastructure` | self | **200** |
| `/international-hub` | self | **200** |
| `/private-clients` | self | **200** |

## Residual-phrase search (rendered public HTML)

Zero occurrences of: `legacy alias`, `Related depth`, `depth →`, `standalone private-wealth`, `standalone catalogue`, `standalone service area`.

## Visual evidence

`visual_evidence_status: PASS` (agent scorecard — awaiting Rubio approval)
`screenshots/merge-candidate/`
