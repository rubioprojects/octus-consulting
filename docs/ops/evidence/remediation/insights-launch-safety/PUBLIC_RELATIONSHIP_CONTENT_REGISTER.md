# Public Relationship Content Register

Mission: PR #17 Launch Safety Repair  
Review baseline: 2026-08-04  
Scope: named relationship / partner / client-adjacent content on the public site that could imply a verified commercial relationship or case study.

## Classification key

| Status | Meaning |
| --- | --- |
| PUBLIC_CONFIRMED | Already publicly disclosed; relationship and outcome accurately framed; safe to keep public with historical qualification where needed |
| CONSENT_REQUIRED | Named relationship content that should not expand or be presented as a client case study without documented consent |
| HOLD | Do not present as public relationship proof; remove from public surfaces or keep source-only |

## Inventory

### Quinel Limited (certifying entity credentialing)

- Surface: `/insights/quinel-credentialed-certifying-entity-brazil-ministry-finance`
- Publication status: `PUBLISH_HISTORICAL_WITH_UPDATE`
- Classification: **PUBLIC_CONFIRMED**
- Basis: Public SPA/MF credentialing announcement (2024) with Octus legal support disclosed in the article itself; historical label applied; current SPA/MF register must be verified by readers
- Constraints: Do not imply ongoing exclusive status, ranking, award, or regulator relationship. Do not present as a live credential roster.

### Webinar guests / invited expert contributors

- Surface: Insights hub copy referencing future webinars and invited expert contributions
- Classification: **CONSENT_REQUIRED** (for any named guest when published)
- Rule: A webinar guest or contributor is **not** an Octus client by implication. Named guests require explicit publication framing as contributor/guest, not client case study.
- Current state: No named webinar guest case-study block is live on Insights as of this repair. Placeholder copy only.

### Generic "clients" / "partners" language in structural commentary

- Surfaces: structural Insights articles (`why-licensing-fails-post-approval`, `banking-for-high-risk-operations`, `compliance-as-a-service-vs-internal-teams`) and service-adjacent copy
- Classification: **PUBLIC_CONFIRMED** for generic institutional language only
- Rule: Generic references to clients, banking partners, or operators are commentary patterns, not named case studies. Forbidden expansions: "largest operators", "major players", unsupported success metrics, anonymous results presented as verified case studies.

### Confidential client names / logos

- Classification: **HOLD**
- Rule: Do not add confidential client names or logos. None added in this repair.

## Forbidden content check (this repair)

| Pattern | Result |
| --- | --- |
| Confidential client names | Not added |
| Confidential client logos | Not added |
| "largest operators" | Not introduced |
| "major players" | Not introduced |
| Unsupported success metrics | Not introduced |
| Anonymous verified case studies | Not introduced |
| Webinar guest implied as client | Not present |

## Residual

No HOLD relationship rows require content deletion beyond Insights `HOLD_NOT_PUBLIC` articles already preserved out of public index.
