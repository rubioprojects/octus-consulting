# OCTUS SEVEN AREAS WEBSITE INTEGRATION PLAN V1

| Field | Value |
|-------|-------|
| **Status** | `HUMAN_APPROVED_FOR_IMPLEMENTATION_REFERENCE` |
| **Date** | 2026-08-02 |
| **Catalog SHA** | `5857c0a7f5a758e44fe3e3c3df0d47ef87739e28` |
| **Catalog gates** | `HUMAN_APPROVED` · `CONSUMABLE_BY_WEBSITE` |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority** | `docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.json` |
| **Pack type** | Documentation only (PR #16) |

## Hard rules

- Bind only the seven approved public area names below.
- Do **not** invent an eighth Banking or Tax area.
- Historical labels (`Ownership & UBO`, `Audit & Readiness`) may remain in redirects/metadata only.
- Private Clients canonical: `/private-clients` unless SEO evidence forces otherwise.
- Remediation & Readiness = service area; `/diagnostic` = intake path — connect, do not merge.
- International Hub: no provider-logo galleries; no endorsement / guaranteed availability / guaranteed onboarding claims.

## Target top navigation

`Services` · `Industries` · `Insights` · `About` · `Contact`

Expose the seven areas through an accessible Services menu (not seven long labels across the desktop bar).

## Approved areas

### Regulatory Structuring (`AREA-REG`)

| Field | Value |
|-------|-------|
| final_area_identity | Regulatory Structuring |
| one_sentence | Jurisdiction fit, licensing pathways and regulatory programmes for regulated operations. |
| proposed_canonical_route | `/solutions/regulatory-structuring` |
| preserve_from | `/solutions/regulatory-strategy-licensing` |
| legacy_route | `/regulatory` |
| website_hub_today (catalog) | `/solutions/regulatory-strategy-licensing` |
| content_clusters | CLUSTER-REGULATORY, CLUSTER-MARKET-ENTRY (licensing/jurisdiction/Brazil/market-entry depth) |
| treatment | Reuse licensing, jurisdiction-selection, Brazil regulatory and market-entry content. |

Representative services (5):

- Licensing strategy and pathway design — We design the licensing pathway and sequence before filings start.
- iGaming licensing programme — We run iGaming licensing as a full programme, not a standalone filing.
- Fintech, EMI and crypto licensing — We treat fintech and payments authorisation as an operable stack, not a paper exercise.
- Brazil SPA / MF regulatory support — We coordinate Brazil-facing regulatory workstreams for betting and related frameworks.
- Jurisdiction selection and risk mapping — We compare venue options for fit, timeline, banking access and operational risk.

### Compliance & Risk (`AREA-CMP`)

| Field | Value |
|-------|-------|
| final_area_identity | Compliance & Risk |
| one_sentence | Compliance frameworks, AML/KYC, DPO and controls that can run under real scrutiny. |
| proposed_canonical_route | `/solutions/compliance-risk` |
| preserve_from | `/solutions/compliance-risk-systems` |
| legacy_route | `/compliance` |
| website_hub_today (catalog) | `/solutions/compliance-risk-systems` |
| content_clusters | CLUSTER-COMPLIANCE |
| treatment | Reuse AML/KYC, DPO, Compliance-as-a-Service, governance, policies and certification-readiness content. |

Representative services (6):

- AML / KYC / CDD frameworks — We build identification, monitoring and due diligence frameworks that banks and regulators can test.
- Compliance-as-a-Service — We operate the compliance function inside the business as an ongoing service.
- DPO-as-a-Service — We operate the DPO role for LGPD and GDPR contexts as a working function.
- Internal controls and governance — We design controls and decision rights that run in day-to-day operations.
- Certification and lab readiness — We prepare evidence and readiness for laboratory and formal external review.
- Policies and due diligence packs — We produce policy suites and due diligence packs aligned to how the operation actually runs.

### Legal & Structural Architecture (`AREA-LEG`)

| Field | Value |
|-------|-------|
| final_area_identity | Legal & Structural Architecture |
| one_sentence | Legal and contractual frameworks for regulated operations, coordinated with counsel where needed. |
| proposed_canonical_route | `/solutions/legal-structural-architecture` |
| preserve_from | `/solutions/legal-contractual-architecture` |
| legacy_route | `/legal-architecture` |
| website_hub_today (catalog) | `/solutions/legal-contractual-architecture` |
| content_clusters | CLUSTER-LEGAL |
| treatment | Reuse contractual, legal-framework, opinions and counsel-coordination content. |

Representative services (4):

- Contractual architecture — We design contract frameworks across group, operator and commercial layers.
- Multi-jurisdiction legal frameworks — We coordinate legal coherence across jurisdictions with independent counsel where required.
- Counsel coordination — We act as the execution counterpart that sequences legal work with licensing, corporate and compliance programmes.
- Legal opinions and certifications support — We support legal opinions and related certification paperwork as part of a regulated programme.

### Corporate Structuring (`AREA-CORP`)

| Field | Value |
|-------|-------|
| final_area_identity | Corporate Structuring |
| one_sentence | Companies, holdings and group design for onshore, offshore and cross-border regulated operations. |
| proposed_canonical_route | `/solutions/corporate-structuring` |
| preserve_from | `/solutions/corporate-cross-border` |
| legacy_route | `/corporate` |
| website_hub_today (catalog) | `/solutions/corporate-cross-border` |
| content_clusters | CLUSTER-CORPORATE (+ banking readiness / tax-accounting coordination as services, not areas) |
| treatment | Reuse company formation, holdings, cross-border, reorganisations, banking readiness, corporate tax and accounting coordination. |

Representative services (7):

- Entity and holding architecture — We design holdings and group structures that stay coherent under licence and bank scrutiny.
- Company formation — We open entities inside a designed architecture — not as a standalone incorporation shop.
- Cross-border structuring — We design multi-venue organisation so the group holds together across jurisdictions.
- Corporate reorganisation — We reorganise when the current structure blocks licensing, banking or expansion.
- Banking readiness — We prepare ownership, documentation and compliance posture for real banking conversations. No promised accounts.
- Accounting and finance coordination — We sell and coordinate accounting and finance programmes under the Octus relationship.
- Corporate tax planning — We coordinate corporate tax planning for regulated groups under the Octus relationship.

### Private Clients (`AREA-PC`)

| Field | Value |
|-------|-------|
| final_area_identity | Private Clients |
| one_sentence | Personal and ownership structuring for founders, UBOs, executives and families tied to regulated operations. |
| proposed_canonical_route | `/private-clients` |
| preserve_from | `/private-clients` |
| legacy_route | `/private-clients` |
| website_hub_today (catalog) | `/private-clients` |
| content_clusters | CLUSTER-PRIVATE-CLIENTS |
| treatment | Preserve /private-clients as preferred canonical. Cover founders, UBOs, personal holdings, residency, personal banking readiness, personal tax coordination. |

Representative services (5):

- Ownership and UBO architecture — We structure ownership and UBO layers for the individuals behind regulated operations.
- Personal holding and asset organisation — We organise personal holdings and separate personal assets from operational assets where needed.
- Residency and personal international structuring — We coordinate residency and personal international structuring tied to regulated operations.
- Personal banking and individual KYC readiness — We prepare individuals for personal banking and KYC scrutiny linked to regulated operations.
- Personal tax coordination — We coordinate personal tax work for founders and UBOs under the Octus relationship.

### Remediation & Readiness (`AREA-REM`)

| Field | Value |
|-------|-------|
| final_area_identity | Remediation & Readiness |
| one_sentence | Diagnosis and fix when licensing, banking, compliance, corporate, finance or operations are already blocked or failing. |
| proposed_canonical_route | `/solutions/remediation-readiness` |
| preserve_from | `/solutions/operational-remediation-readiness` |
| legacy_route | `/audit` |
| website_hub_today (catalog) | `/solutions/operational-remediation-readiness` |
| content_clusters | CLUSTER-REMEDIATION |
| treatment | Keep as public area. Connect to /diagnostic as intake path only — do not merge concepts. Historical alias Audit & Readiness may remain in redirects/metadata only. |

Representative services (6):

- Crisis entry and structural assessment — A single intake when the operation is blocked, delayed, rejected or failing.
- Licensing delay remediation — We unblock stalled or conditioned licensing by fixing the structural causes.
- Banking or compliance gap remediation — We remediate when banking rejection or compliance gaps are the live constraint.
- Audit and readiness remediation — We close evidence and readiness gaps when formal review is imminent or already failing.
- Financial infrastructure remediation — When banking or payment infrastructure has already failed, we sequence recovery with the right layers.
- Tax and finance problem remediation — We coordinate tax recovery and finance problem programmes when the live issue is already a blockage.

### International Hub (`AREA-HUB`)

| Field | Value |
|-------|-------|
| final_area_identity | International Hub |
| one_sentence | Finding, connecting and coordinating the banks, PSPs, CSPs, labs, counsel and other specialists a regulated operation needs. |
| proposed_canonical_route | `/international-hub` |
| preserve_from | `/international-hub` |
| legacy_route | `/international-hub` |
| website_hub_today (catalog) | `/solutions/regulatory/market-entry` |
| content_clusters | CLUSTER-HUB (+ selected market-entry / partners seeds) |
| treatment | Rebuild Hub page: banks/PSPs, payment providers, CSPs, local directors, labs, certification, KYC/AML providers, tech platforms, local counsel, tax/other specialists. No logo galleries. No endorsement/availability/onboarding guarantees. |

Representative services (6):

- Market entry coordination — We coordinate entry into a new regulated market as one sequenced programme.
- Bank and PSP introductions — We identify and coordinate relevant banks and PSPs for the operation’s risk profile.
- Payment and PSP architecture — We design payment and PSP options matched to markets, settlement needs and risk.
- CSP, local director and formation partners — We connect and coordinate CSPs, local directors and formation partners required by the venue.
- Lab, certification and specialist network coordination — We identify and coordinate laboratories, certification providers and other specialists the programme needs.
- Counsel and tax specialist coordination — We identify and coordinate legal counsel and tax specialists required for the matter.

## Banking / Tax treatment (not areas)

| Theme | Placement |
|-------|-----------|
| Banking readiness (corporate) | Corporate Structuring service |
| Bank/PSP introductions & payment architecture | International Hub services |
| Banking/compliance gap remediation | Remediation & Readiness |
| Corporate tax planning / accounting coordination | Corporate Structuring services |
| Personal tax coordination | Private Clients |
| Tax/finance problem remediation | Remediation & Readiness |

## Implementation sequence (post-merge)

1. Clean branch from main (after PR #16 merge)
2. Public catalog → website data module (read-only consume; do not edit catalog)
3. Nav + Services index
4. Area pages + Hub rebuild
5. Homepage
6. Insights linking hygiene
7. Route migration map + redirects
8. Validate + Vercel preview
