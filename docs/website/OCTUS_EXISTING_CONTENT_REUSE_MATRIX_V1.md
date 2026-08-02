# OCTUS EXISTING CONTENT REUSE MATRIX V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority (pending)** | `docs/commercial/public-catalog/OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` |
| **Catalog status** | `REQUIRES_RUBIO_REVIEW` — do not consume six Solutions as final |
| **Terminal contribution** | Supports `OCTUS_WEBSITE_READY_TO_CONSUME_APPROVED_SEVEN_AREAS` |
| **Issue** | [octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |

## Scope and method

- Inventory from App Router `app/**/page.tsx` (≈55–58 routes depending on branch), `components/Nav.tsx`, `components/SiteFooter.tsx`, `lib/commercial.ts`, `lib/posts.ts`.
- **Do not** finalize area names. `AREA-01`…`AREA-07` are placeholders only.
- **Do not** delete, redirect, or rewrite routes in this pack.
- Visual quality is qualitative (pass/attention) from live page structure, not a new screenshot campaign.

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

### Scoring keys

- **SEO:** High / Medium / Low / N/A (redirect)
- **Factual:** Valid / Time-sensitive / Boundary-OK / Review
- **Visual:** Pass / Attention

---

## A. Redirect stubs (already live — do not expand yet)

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | AREA hint | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------|-------|--------|--------|
| /what-we-do | — | Legacy seven-module index | → /what-octus-does | N/A | Valid redirect | N/A | /what-octus-does | — | REDIRECT_AFTER_APPROVAL | Keep redirect; do not revive modules | No |
| /regulatory | — | Legacy pillar | → regulatory hub | N/A | Valid | N/A | Solutions hub | AREA-0? | REDIRECT_AFTER_APPROVAL | Keep until taxonomy remap | No |
| /compliance | — | Legacy pillar | → compliance hub | N/A | Valid | N/A | Solutions hub | AREA-0? | REDIRECT_AFTER_APPROVAL | Keep | No |
| /corporate | — | Legacy pillar | → corporate hub | N/A | Valid | N/A | Solutions hub | AREA-0? | REDIRECT_AFTER_APPROVAL | Keep | No |
| /audit | — | Legacy audit | → remediation hub | N/A | Valid | N/A | Remediation + GLI | AREA-0? (Remediation) | REDIRECT_AFTER_APPROVAL | Keep; protect remediation content | No |
| /legal-architecture | — | Legacy legal | → legal hub | N/A | Valid | N/A | Legal hub | AREA-0? | REDIRECT_AFTER_APPROVAL | Keep | No |
| /international-hub | — | Legacy hub product | → /solutions/regulatory/market-entry | N/A | Valid | N/A | Market entry; **not** public Hub area | Hub-related content scattered | REDIRECT_AFTER_APPROVAL | Do not treat as Hub area page; plan Hub separately | Yes — Hub IA |
| /solutions/regulatory/banking-payments | — | Path cleanup | → /solutions/banking/banking-payments | N/A | Valid | N/A | Banking deep | AREA-0? (Banking) | REDIRECT_AFTER_APPROVAL | Keep | No |

---

## B. Core / company

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | AREA hint | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------|-------|--------|--------|
| / | Premium Execution for Regulated Operations | Homepage | Hero; capability rail; failure modes; CTAs | High | Boundary-OK | Pass | /what-octus-does, /about | Index for all areas | REPOSITION_IN_NEW_ARCHITECTURE | Remap rail to approved seven after catalog; see homepage map | Yes |
| /what-octus-does | What Octus Does | Plain-language identity | Who/when/what; not law firm / shop / vendor | High | Valid | Pass | /about, / | Cross-cutting | KEEP_AS_IS | Preserve; link from nav | No |
| /about | About | Execution-layer identity | Lead contractor framing; when clients engage | Medium | Valid | Pass | /what-octus-does | Company | REPOSITION_IN_NEW_ARCHITECTURE | Clarify split vs What Octus Does | Yes |
| /team | Team | People | Leadership + specialists | High | Valid | Pass | About | Company | KEEP_AS_IS | Preserve people asset | No |
| /careers | Careers | Hiring | Roles / culture | Medium | Valid | Pass | — | Company | KEEP_AS_IS | Keep | No |
| /contact | Contact | Intake | WhatsApp + email | High | Valid | Pass | /diagnostic | Company | KEEP_AS_IS | Keep | No |
| /how-we-engage | How We Engage | Engagement models | Lead contractor + 4 models | High | Valid | Pass | About | Cross-cutting | KEEP_AS_IS | Keep; supports “how Octus works” | No |
| /partners | International Partners | Collaboration | Partner classes (counsel, CSPs, compliance, financial infra, technical) — **not** provider gallery | Medium | Boundary-OK | Pass | Future Hub area | Hub support | REPOSITION_IN_NEW_ARCHITECTURE | Seed for Hub; no endorsement language | Yes |
| /privacy | Privacy Policy | Legal | LLC privacy | Medium | Valid | Pass | Legal set | — | KEEP_AS_IS | Keep | No |
| /terms | Terms | Legal | Terms | Medium | Valid | Pass | Legal set | — | KEEP_AS_IS | Keep | No |
| /cookies | Cookie Policy | Legal | Cookies | Low | Valid | Pass | Legal set | — | KEEP_WITH_MINOR_EDIT | Add meta description later | No |
| /compliance-channel | Compliance Channel | Ethics reporting | Confidential channel | Medium | Valid | Pass | ≠ Compliance service area | — | KEEP_AS_IS | Keep in footer | No |

---

## C. Current Solutions face (not final taxonomy)

Treat as **reusable assets under temporary labels**. Do not publish as canonical seven.

| Route | Title | Purpose | Summary | SEO | Factual | Visual | Overlap | AREA hint | Class | Action | Human? |
|-------|-------|---------|---------|-----|---------|--------|---------|-----------|-------|--------|--------|
| /solutions | Solutions index | Capability index | Currently “six capabilities” language | High | Review (count) | Pass | All hubs | Index | REPOSITION_IN_NEW_ARCHITECTURE | Rebuild index from approved seven names only | Yes |
| /solutions/regulatory-strategy-licensing | Regulatory Strategy & Licensing | Hub | Pathways, licensing, market entry SAs | High | Valid | Pass | Deep licensing pages | AREA-0? Reg | REPOSITION_IN_NEW_ARCHITECTURE | Remap label/route after catalog | Yes |
| /solutions/banking-payments-infrastructure | Banking… Infrastructure | Hub | Bankability, PSP, infra remediation | High | Valid (no account promise) | Pass | Banking deep | AREA-0? Bank | REPOSITION_IN_NEW_ARCHITECTURE | Remap | Yes |
| /solutions/compliance-risk-systems | Compliance & Risk Systems | Hub | AML, CaaS, DPO, controls, GLI | High | Valid | Pass | Compliance deeps | AREA-0? Comp | REPOSITION_IN_NEW_ARCHITECTURE | Remap | Yes |
| /solutions/corporate-cross-border | Corporate & Cross-Border | Hub | Entity, holding, UBO, formation | High | Valid | Pass | Corporate deeps, /private-clients | AREA-0? Corp | REPOSITION_IN_NEW_ARCHITECTURE | Remap | Yes |
| /solutions/legal-contractual-architecture | Legal & Contractual | Hub | Contracts; counsel layer; not law firm | High | Boundary-OK | Pass | Thin vs others | AREA-0? Legal | REPOSITION_IN_NEW_ARCHITECTURE | Remap; deepen later if needed | Yes |
| /solutions/operational-remediation-readiness | Operational Remediation & Readiness | Hub | Crisis door; remediation streams | High | Valid | Pass | /diagnostic, /audit | AREA-0? Remediation | REPOSITION_IN_NEW_ARCHITECTURE | **Keep as public area**; do not demote | Yes |

---

## D. Solution deeps (preserve)

| Route | Title | Purpose | SEO | Overlap | AREA hint | Class | Action | Human? |
|-------|-------|---------|-----|---------|-----------|-------|--------|--------|
| /solutions/regulatory/igaming-licensing | iGaming Licensing | Programme deep | High | /markets/igaming | Reg | KEEP_WITH_MINOR_EDIT | Keep; retarget parent after taxonomy | No |
| /solutions/regulatory/fintech-licensing | Fintech Licensing | EMI/PI deep | High | /markets/fintech | Reg | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/regulatory/market-entry | Market Entry | Entry sequencing | High | legacy international-hub | Reg / Market Entry | KEEP_WITH_MINOR_EDIT | Keep; may support area covering entry | Yes if area split |
| /solutions/banking/banking-payments | Banking & Payments | Banking depth | High | Banking hub | Bank | CONSOLIDATE_WITH_ANOTHER_PAGE | Decide hub vs deep after taxonomy | Yes |
| /solutions/compliance/aml-kyc | AML & KYC | Frameworks | High | Comp hub | Comp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/compliance-as-a-service | Compliance-as-a-Service | Operated CO | High | Comp hub | Comp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/dpo-as-a-service | DPO-as-a-Service | Operated DPO | High | Comp hub | Comp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/internal-controls | Internal Controls | Controls | Medium | Comp hub | Comp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/compliance/gli-readiness | GLI & Certification Readiness | Lab/cert readiness | High | Remediation | Comp / Rem | KEEP_WITH_MINOR_EDIT | Keep; Hub may link labs without gallery | Yes |
| /solutions/corporate/company-formation | Company Formation | Formation in architecture | High | Corp hub | Corp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/corporate/holding-design | Holding Design | Holdings | High | Corp hub | Corp | KEEP_WITH_MINOR_EDIT | Keep | No |
| /solutions/corporate/offshore-structuring | Offshore Structuring | Cross-border | High | Rename candidate | Corp | REPOSITION_IN_NEW_ARCHITECTURE | Prefer cross-border label after approval | Yes |

---

## E. Intake, Private Clients, education

| Route | Title | Purpose | SEO | Factual | Overlap | AREA hint | Class | Action | Human? |
|-------|-------|---------|-----|---------|---------|-----------|-------|--------|--------|
| /diagnostic | Assess your situation | Crisis assessment form | High | Valid (no guarantees) | Remediation hub | Remediation | KEEP_AS_IS | Keep; primary remediation CTA | No |
| /private-clients | Ownership & UBO Architecture | Individuals behind ops | High | Valid; covers UBO, holdings, residency, personal banking exposure, tax alignment language | Corp hub | Private Clients segment / Corp | KEEP_WITH_MINOR_EDIT | **Preserve URL**; expand clarity for founders/UBO/succession/tax coordination after catalog — do not hide | Yes |
| /brazil | Brazil | BR education | High | Time-sensitive SPA content | Insights corpus | Reg + geo | KEEP_AS_IS | Keep education surface | No |
| /resources/igaming-operator-readiness | iGaming Operator Readiness Checklist | Educational checklist | High | Valid | iGaming market/solution | Reg + Rem | KEEP_AS_IS | Keep | No |

**Private Clients coverage check (existing page):** UBO disclosure · personal holdings · individual KYC · PEP/sanctions · residency/structure alignment · personal vs operational asset separation · banking exposure. Gaps to enrich later (not remove page): succession depth, personal banking as named module, tax coordination module clarity — `HUMAN_REVIEW_REQUIRED` for copy depth only.

---

## F. Markets

| Route | Title | Class | AREA hint | Action |
|-------|-------|-------|-----------|--------|
| /markets | Markets index | KEEP_WITH_MINOR_EDIT | Industries layer | Keep industries ≠ service areas |
| /markets/igaming | iGaming | KEEP_WITH_MINOR_EDIT | Industry | Keep |
| /markets/fintech | Fintech | KEEP_WITH_MINOR_EDIT | Industry | Keep |
| /markets/crypto | Crypto & Digital Assets | KEEP_WITH_MINOR_EDIT | Industry | Keep |
| /markets/high-risk | High-Risk Operations | KEEP_WITH_MINOR_EDIT | Industry | Keep |

---

## G. Jurisdictions

| Route | Class | Action |
|-------|-------|--------|
| /jurisdictions | KEEP_WITH_MINOR_EDIT | Keep index |
| /jurisdictions/malta | KEEP_AS_IS | Keep |
| /jurisdictions/isle-of-man | KEEP_AS_IS | Keep |
| /jurisdictions/curacao | KEEP_AS_IS | Keep |
| /jurisdictions/portugal | KEEP_AS_IS | Keep |
| /jurisdictions/uae | KEEP_AS_IS | Keep |
| /jurisdictions/anjouan | KEEP_AS_IS | Keep |

---

## H. Intelligence / Insights

| Route | Class | Action |
|-------|-------|--------|
| /intelligence | KEEP_WITH_MINOR_EDIT | Keep hub; do not merge with Insights |
| /insights | KEEP_AS_IS | Preserve library |
| /insights/[slug] | KEEP_AS_IS | Preserve posts; see blog plan |

---

## Hub-related content (scattered — no public Hub area page yet)

| Source | What it covers today | Gap for Hub area |
|--------|----------------------|------------------|
| /partners | Counsel, CSPs, compliance specialists, financial infrastructure providers, technical specialists | No banks/PSP/lab gallery; good non-endorsement tone |
| Banking hub + deep | PSPs, bankability | Must not become endorsement list |
| GLI readiness | Laboratories / certification readiness | Explain coordination, not provider shop |
| Intelligence / Insights | Market/provider signals in articles | Link selectively |
| Legacy /international-hub | Redirected to market-entry | **Not** the Hub area |

**Hub rule for later implementation:** explain Octus’ ability to identify and coordinate providers **without** promising acceptance, approval, or commercial availability; no provider gallery.

---

## Remediation consolidation (keep available)

| Asset | Role |
|-------|------|
| /solutions/operational-remediation-readiness | Public area candidate hub |
| /diagnostic | Crisis intake |
| Licensing/banking/compliance remediation SAs on hub | Workstreams |
| /solutions/compliance/gli-readiness | Audit/cert readiness overlap |
| /audit redirect | Legacy entry |

**Action after taxonomy approval:** consolidate under clearer Remediation area navigation; do not demote or remove.

---

## Counts

| Metric | Approx. |
|--------|--------:|
| Live content routes | ~50 |
| Redirect stubs | 8 |
| KEEP_* | majority of education/team/legal/insights |
| REPOSITION_* | Solutions index + 6 hubs + homepage + partners + about + offshore |
| CONSOLIDATE_* | Banking hub vs deep |
| HUMAN_REVIEW_REQUIRED rows | Taxonomy mapping, Hub IA, About split, Private Clients depth, banking consolidation |

## Immediate blockers

1. `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` not yet `HUMAN_APPROVED` / `CONSUMABLE_BY_WEBSITE`.
2. Must not finalize names or menu from this matrix alone.
3. Open PR stack mixes six-Solution IA with brand/conversion — see PR reconciliation.
