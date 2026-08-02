# OCTUS EXISTING CONTENT REUSE MATRIX V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Correction** | Content clusters only — **not** six-plus-one area binding |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority (pending)** | `docs/commercial/public-catalog/OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` |
| **Catalog status** | `REQUIRES_RUBIO_REVIEW` — do not consume six Solutions as final |
| **Terminal** | Supports `OCTUS_WEBSITE_NEUTRAL_INTEGRATION_SHELL_READY` |
| **Issue** | [octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |

## Scope and method

- Inventory from App Router `app/**/page.tsx`, `components/Nav.tsx`, `components/SiteFooter.tsx`, `lib/commercial.ts`, `lib/posts.ts`.
- **Do not** finalize area names. `AREA-01`…`AREA-07` are neutral slots elsewhere — **not** assigned in this matrix.
- Column `content_cluster` names a **reusable content cluster**, never a final public area identity.
- **Do not** delete, redirect, or rewrite routes in this pack.

### Classification legend

| Code | Meaning |
|------|---------|
| KEEP_AS_IS | Preserve; no structural change needed for seven-area prep |
| KEEP_WITH_MINOR_EDIT | Keep route; later copy/meta/link hygiene only |
| REPOSITION_IN_NEW_ARCHITECTURE | Keep asset; change nav/parent/label after approved taxonomy |
| CONSOLIDATE_WITH_ANOTHER_PAGE | Merge narrative with peer after approval |
| REWRITE_BECAUSE_UNCLEAR | Content unclear for public use (rare) |
| REDIRECT_AFTER_APPROVAL | Already redirects or may redirect after taxonomy approval |
| ARCHIVE | Keep out of nav; retain URL if SEO value |
| REMOVE_ONLY_IF_OBSOLETE_OR_INCORRECT | Last resort; not recommended from this audit |
| HUMAN_REVIEW_REQUIRED | Rubio/Cris/Milla decision before action |

### Content cluster ids (not areas)

`CLUSTER-REGULATORY` · `CLUSTER-BANKING` · `CLUSTER-COMPLIANCE` · `CLUSTER-CORPORATE` · `CLUSTER-LEGAL` · `CLUSTER-REMEDIATION` · `CLUSTER-HUB` · `CLUSTER-PRIVATE-CLIENTS` · `CLUSTER-TAX-FINANCE` · `CLUSTER-MARKET-ENTRY` · `CLUSTER-INDUSTRY` · `CLUSTER-GEO` · `CLUSTER-COMPANY` · `CLUSTER-KNOWLEDGE` · `—` (none / cross-cutting)

Mapping cluster → `AREA-0N` or non-area role = catalog only.

---

## A. Redirect stubs (already live — do not expand yet)

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | content_cluster | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------------|-------|--------|--------|
| /what-we-do | — | Legacy module index | → /what-octus-does | N/A | Valid redirect | N/A | /what-octus-does | — | REDIRECT_AFTER_APPROVAL | Keep redirect; do not revive legacy modules as areas | No |
| /regulatory | — | Legacy pillar | → current regulatory hub path | N/A | Valid | N/A | Temporary Solutions face | CLUSTER-REGULATORY | REDIRECT_AFTER_APPROVAL | Keep until catalog remap | No |
| /compliance | — | Legacy pillar | → current compliance hub path | N/A | Valid | N/A | Temporary Solutions face | CLUSTER-COMPLIANCE | REDIRECT_AFTER_APPROVAL | Keep | No |
| /corporate | — | Legacy pillar | → current corporate hub path | N/A | Valid | N/A | Temporary Solutions face | CLUSTER-CORPORATE | REDIRECT_AFTER_APPROVAL | Keep | No |
| /audit | — | Legacy audit face | → current remediation hub path | N/A | Valid | N/A | Remediation + GLI content | CLUSTER-REMEDIATION | REDIRECT_AFTER_APPROVAL | Keep; protect remediation content | No |
| /legal-architecture | — | Legacy legal face | → current legal hub path | N/A | Valid | N/A | Temporary Solutions face | CLUSTER-LEGAL | REDIRECT_AFTER_APPROVAL | Keep | No |
| /international-hub | — | Legacy product name | → market-entry deep | N/A | Valid | N/A | Market-entry deep; not Hub role | CLUSTER-MARKET-ENTRY | REDIRECT_AFTER_APPROVAL | Do not treat as approved Hub page | Yes — role pending |
| /solutions/regulatory/banking-payments | — | Path cleanup | → banking deep | N/A | Valid | N/A | Banking deep | CLUSTER-BANKING | REDIRECT_AFTER_APPROVAL | Keep | No |

---

## B. Core / company

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | content_cluster | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------------|-------|--------|--------|
| / | Premium Execution for Regulated Operations | Homepage | Hero; capability rail; failure modes; CTAs | High | Boundary-OK | Pass | /what-octus-does, /about | — | REPOSITION_IN_NEW_ARCHITECTURE | Remap capability section to approved seven after catalog | Yes |
| /what-octus-does | What Octus Does | Plain-language identity | Who/when/what | High | Valid | Pass | /about, / | CLUSTER-COMPANY | KEEP_AS_IS | Preserve | No |
| /about | About | Identity | Lead contractor framing | Medium | Valid | Pass | /what-octus-does | CLUSTER-COMPANY | REPOSITION_IN_NEW_ARCHITECTURE | Clarify split vs What Octus Does | Yes |
| /team | Team | People | Leadership + specialists | High | Valid | Pass | About | CLUSTER-COMPANY | KEEP_AS_IS | Preserve | No |
| /careers | Careers | Hiring | Roles / culture | Medium | Valid | Pass | — | CLUSTER-COMPANY | KEEP_AS_IS | Keep | No |
| /contact | Contact | Intake | WhatsApp + email | High | Valid | Pass | /diagnostic | CLUSTER-COMPANY | KEEP_AS_IS | Keep | No |
| /how-we-engage | How We Engage | Engagement models | Lead contractor + models | High | Valid | Pass | About | CLUSTER-COMPANY | KEEP_AS_IS | Keep | No |
| /partners | International Partners | Collaboration | Partner classes — not provider gallery | Medium | Boundary-OK | Pass | Hub cluster seeds | CLUSTER-HUB | REPOSITION_IN_NEW_ARCHITECTURE | Preserve; role `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Yes |
| /privacy | Privacy Policy | Legal | LLC privacy | Medium | Valid | Pass | Legal set | — | KEEP_AS_IS | Keep | No |
| /terms | Terms | Legal | Terms | Medium | Valid | Pass | Legal set | — | KEEP_AS_IS | Keep | No |
| /cookies | Cookie Policy | Legal | Cookies | Low | Valid | Pass | Legal set | — | KEEP_WITH_MINOR_EDIT | Add meta description later | No |
| /compliance-channel | Compliance Channel | Ethics reporting | Confidential channel | Medium | Valid | Pass | ≠ service cluster | — | KEEP_AS_IS | Keep in footer | No |

---

## C. Temporary Solutions face (content clusters under temporary labels)

Treat as **reusable clusters**. Do **not** map 1:1 to AREA-01…AREA-06.

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | content_cluster | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------------|-------|--------|--------|
| /solutions | Solutions index | Temporary capability index | Currently “six capabilities” language | High | Review (count) | Pass | All temporary hubs | — | REPOSITION_IN_NEW_ARCHITECTURE | Rebuild from approved seven only — not six-plus-one | Yes |
| /solutions/regulatory-strategy-licensing | Regulatory Strategy & Licensing | Temporary hub | Pathways, licensing, market entry SAs | High | Valid | Pass | Licensing deeps | CLUSTER-REGULATORY | REPOSITION_IN_NEW_ARCHITECTURE | Remap after catalog | Yes |
| /solutions/banking-payments-infrastructure | Banking… Infrastructure | Temporary hub | Bankability, PSP, infra remediation | High | Valid | Pass | Banking deep | CLUSTER-BANKING | REPOSITION_IN_NEW_ARCHITECTURE | Remap after catalog | Yes |
| /solutions/compliance-risk-systems | Compliance & Risk Systems | Temporary hub | AML, CaaS, DPO, controls, GLI | High | Valid | Pass | Compliance deeps | CLUSTER-COMPLIANCE | REPOSITION_IN_NEW_ARCHITECTURE | Remap after catalog | Yes |
| /solutions/corporate-cross-border | Corporate & Cross-Border | Temporary hub | Entity, holding, UBO, formation | High | Valid | Pass | Corporate deeps, /private-clients | CLUSTER-CORPORATE | REPOSITION_IN_NEW_ARCHITECTURE | Remap after catalog | Yes |
| /solutions/legal-contractual-architecture | Legal & Contractual | Temporary hub | Contracts; counsel layer | High | Boundary-OK | Pass | Thin deep set | CLUSTER-LEGAL | REPOSITION_IN_NEW_ARCHITECTURE | Remap after catalog | Yes |
| /solutions/operational-remediation-readiness | Operational Remediation & Readiness | Temporary hub | Crisis door; remediation streams | High | Valid | Pass | /diagnostic, /audit | CLUSTER-REMEDIATION | REPOSITION_IN_NEW_ARCHITECTURE | Preserve content; role pending — do not demote/delete | Yes |

---

## D. Deep pages (preserve as cluster depth)

| Route | Title | Purpose | SEO | Overlap | content_cluster | Class | Action | Human? |
|-------|-------|---------|-----|---------|-----------------|-------|--------|--------|
| /solutions/regulatory/igaming-licensing | iGaming Licensing | Programme deep | High | /markets/igaming | CLUSTER-REGULATORY | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/regulatory/fintech-licensing | Fintech Licensing | EMI/PI deep | High | /markets/fintech | CLUSTER-REGULATORY | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/regulatory/market-entry | Market Entry | Entry sequencing | High | legacy international-hub | CLUSTER-MARKET-ENTRY | KEEP_WITH_MINOR_EDIT | Keep; role pending | Yes |
| /solutions/banking/banking-payments | Banking & Payments | Banking depth | High | Banking hub | CLUSTER-BANKING | CONSOLIDATE_WITH_ANOTHER_PAGE | Hub vs deep after catalog | Yes |
| /solutions/compliance/aml-kyc | AML & KYC | Frameworks | High | Compliance hub | CLUSTER-COMPLIANCE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/compliance-as-a-service | Compliance-as-a-Service | Operated CO | High | Compliance hub | CLUSTER-COMPLIANCE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/dpo-as-a-service | DPO-as-a-Service | Operated DPO | High | Compliance hub | CLUSTER-COMPLIANCE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/internal-controls | Internal Controls | Controls | Medium | Compliance hub | CLUSTER-COMPLIANCE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/gli-readiness | GLI & Certification Readiness | Lab/cert readiness | High | Remediation overlap | CLUSTER-COMPLIANCE (+ Hub seed) | KEEP_WITH_MINOR_EDIT | Keep; coordination language only | Yes |
| /solutions/corporate/company-formation | Company Formation | Formation in architecture | High | Corporate hub | CLUSTER-CORPORATE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/corporate/holding-design | Holding Design | Holdings | High | Corporate hub | CLUSTER-CORPORATE | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/corporate/offshore-structuring | Offshore Structuring | Cross-border | High | Rename candidate | CLUSTER-CORPORATE | REPOSITION_IN_NEW_ARCHITECTURE | Label after approval | Yes |

---

## E. Intake, Private Clients, education

| Route | Title | Purpose | SEO | Factual | Overlap | content_cluster | Class | Action | Human? |
|-------|-------|---------|-----|---------|---------|-----------------|-------|--------|--------|
| /diagnostic | Assess your situation | Crisis assessment form | High | Valid | Remediation cluster | CLUSTER-REMEDIATION | KEEP_AS_IS | Preserve; role pending | No |
| /private-clients | Ownership & UBO Architecture | Individuals behind ops | High | Valid | Corporate UBO language | CLUSTER-PRIVATE-CLIENTS | KEEP_WITH_MINOR_EDIT | Preserve URL; role `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Yes |
| /brazil | Brazil | BR education | High | Time-sensitive | Insights | CLUSTER-GEO (+ regulatory/market-entry overlap) | KEEP_AS_IS | Keep education surface | No |
| /resources/igaming-operator-readiness | iGaming Operator Readiness Checklist | Educational checklist | High | Valid | iGaming market + regulatory/remediation themes | CLUSTER-KNOWLEDGE | KEEP_AS_IS | Keep | No |

**Private Clients coverage (existing page, cluster only):** UBO · holdings · individual KYC · PEP/sanctions · residency alignment · personal vs operational assets · banking exposure. Enrichment (succession, personal banking, tax coordination clarity) is copy depth — not hierarchy decision.

**Tax / Accounting / Audit:** no dedicated public cluster pages equivalent to the temporary Solutions hubs — `CLUSTER-TAX-FINANCE` may need new or recovered pages after catalog. Do not invent now.

---

## F. Markets

| Route | Title | Class | content_cluster | Action |
|-------|-------|-------|-----------------|--------|
| /markets | Markets index | KEEP_WITH_MINOR_EDIT | CLUSTER-INDUSTRY | Keep industries ≠ approved areas |
| /markets/igaming | iGaming | KEEP_WITH_MINOR_EDIT | CLUSTER-INDUSTRY | Keep |
| /markets/fintech | Fintech | KEEP_WITH_MINOR_EDIT | CLUSTER-INDUSTRY | Keep |
| /markets/crypto | Crypto & Digital Assets | KEEP_WITH_MINOR_EDIT | CLUSTER-INDUSTRY | Keep |
| /markets/high-risk | High-Risk Operations | KEEP_WITH_MINOR_EDIT | CLUSTER-INDUSTRY | Keep |

---

## G. Jurisdictions

| Route | Class | content_cluster | Action |
|-------|-------|-----------------|--------|
| /jurisdictions | KEEP_WITH_MINOR_EDIT | CLUSTER-GEO | Keep index |
| /jurisdictions/* children | KEEP_AS_IS | CLUSTER-GEO | Keep |

---

## H. Intelligence / Insights

| Route | Class | content_cluster | Action |
|-------|-------|-----------------|--------|
| /intelligence | KEEP_WITH_MINOR_EDIT | CLUSTER-KNOWLEDGE | Keep; do not merge with Insights |
| /insights | KEEP_AS_IS | CLUSTER-KNOWLEDGE | Preserve library |
| /insights/[slug] | KEEP_AS_IS | CLUSTER-KNOWLEDGE | Preserve posts; see blog plan |

---

## Role-pending themes (preserve; do not hierarchy-decide)

| Theme | Status | Cluster | Duty |
|-------|--------|---------|------|
| Private Clients | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | CLUSTER-PRIVATE-CLIENTS | Preserve |
| Hub / Networking | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | CLUSTER-HUB | Preserve seeds; no gallery |
| Remediation | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | CLUSTER-REMEDIATION | Preserve; do not demote |
| Tax / Accounting / Audit | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | CLUSTER-TAX-FINANCE | No invented pages yet |
| Market Entry | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | CLUSTER-MARKET-ENTRY | Preserve deep |

---

## Counts

| Metric | Approx. |
|--------|--------:|
| Live content routes | ~50 |
| Redirect stubs | 8 |
| KEEP_* | majority of education/team/legal/insights |
| REPOSITION_* | temporary Solutions index + hubs + homepage + partners + about + offshore |
| CONSOLIDATE_* | Banking hub vs deep |

## Immediate blockers

1. `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` not yet consumable.
2. Must not finalize names/menu from this matrix.
3. Must not assume six temporary Solutions + one extra = original seven.
4. Open PR stack risk — see PR reconciliation.
