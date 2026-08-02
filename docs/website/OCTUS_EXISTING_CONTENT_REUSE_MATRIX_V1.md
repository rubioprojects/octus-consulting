# OCTUS EXISTING CONTENT REUSE MATRIX V1

| Field | Value |
|-------|-------|
| **Status** | `HUMAN_APPROVED_FOR_IMPLEMENTATION_REFERENCE` |
| **Date** | 2026-08-02 |
| **Catalog SHA** | `5857c0a7f5a758e44fe3e3c3df0d47ef87739e28` |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority** | Approved public catalog (`HUMAN_APPROVED` / `CONSUMABLE_BY_WEBSITE`) |

## Cluster → approved area mapping

| Content cluster | Approved area / role | Notes |
|-----------------|----------------------|-------|
| CLUSTER-REGULATORY | Regulatory Structuring | Licensing, jurisdiction, Brazil regulatory depth |
| CLUSTER-MARKET-ENTRY | Regulatory Structuring (primary) + International Hub (coordination) | Do not create standalone Market Entry area |
| CLUSTER-COMPLIANCE | Compliance & Risk | AML/KYC, DPO, CaaS, controls, certification readiness |
| CLUSTER-LEGAL | Legal & Structural Architecture | Contracts, frameworks, opinions, counsel coordination |
| CLUSTER-CORPORATE | Corporate Structuring | Formation, holdings, cross-border, reorg |
| CLUSTER-BANKING | Split — not a public area | Banking readiness → Corporate; introductions/PSP → Hub; failures → Remediation |
| CLUSTER-TAX-FINANCE | Split — not a public area | Corporate tax/accounting → Corporate; personal tax → Private Clients; problems → Remediation |
| CLUSTER-PRIVATE-CLIENTS | Private Clients | Prefer keep `/private-clients`; historical “Ownership & UBO” alias OK in metadata |
| CLUSTER-REMEDIATION | Remediation & Readiness | Keep public area; `/diagnostic` remains intake; historical “Audit & Readiness” alias OK in redirects/metadata |
| CLUSTER-HUB | International Hub | Rebuild hub page; partners seeds; no logo gallery |
| CLUSTER-INDUSTRY | Site layer (Industries) | `/markets` — not a service area |
| CLUSTER-GEO | Site layer (Jurisdictions) | Keep |
| CLUSTER-COMPANY | Site layer (About/Team/Careers) | Keep |
| CLUSTER-KNOWLEDGE | Insights | Preserve posts; controlled linking only |

## Approved area cards (services index requirements)

Each area card must include: approved name · plain-language description · representative services · area-page link.

| Regulatory Structuring | Jurisdiction fit, licensing pathways and regulatory programmes for regulated operations. | Licensing strategy and pathway design, iGaming licensing programme, Fintech, EMI and crypto licensing, Brazil SPA / MF regulatory support… | `/solutions/regulatory-structuring` |
| Compliance & Risk | Compliance frameworks, AML/KYC, DPO and controls that can run under real scrutiny. | AML / KYC / CDD frameworks, Compliance-as-a-Service, DPO-as-a-Service, Internal controls and governance… | `/solutions/compliance-risk` |
| Legal & Structural Architecture | Legal and contractual frameworks for regulated operations, coordinated with counsel where needed. | Contractual architecture, Multi-jurisdiction legal frameworks, Counsel coordination, Legal opinions and certifications support… | `/solutions/legal-structural-architecture` |
| Corporate Structuring | Companies, holdings and group design for onshore, offshore and cross-border regulated operations. | Entity and holding architecture, Company formation, Cross-border structuring, Corporate reorganisation… | `/solutions/corporate-structuring` |
| Private Clients | Personal and ownership structuring for founders, UBOs, executives and families tied to regulated operations. | Ownership and UBO architecture, Personal holding and asset organisation, Residency and personal international structuring, Personal banking and individual KYC readiness… | `/private-clients` |
| Remediation & Readiness | Diagnosis and fix when licensing, banking, compliance, corporate, finance or operations are already blocked or failing. | Crisis entry and structural assessment, Licensing delay remediation, Banking or compliance gap remediation, Audit and readiness remediation… | `/solutions/remediation-readiness` |
| International Hub | Finding, connecting and coordinating the banks, PSPs, CSPs, labs, counsel and other specialists a regulated operation needs. | Market entry coordination, Bank and PSP introductions, Payment and PSP architecture, CSP, local director and formation partners… | `/international-hub` |

## Priority route actions (implementation)

| Existing route | Final route | Action | Redirect |
|----------------|-------------|--------|----------|
| /solutions | /solutions | REPOSITION — seven-area Services index | — |
| /solutions/regulatory-strategy-licensing | /solutions/regulatory-structuring | REPOSITION + preserve | old → new (or alias) |
| /solutions/compliance-risk-systems | /solutions/compliance-risk | REPOSITION + preserve | old → new |
| /solutions/legal-contractual-architecture | /solutions/legal-structural-architecture | REPOSITION + preserve | old → new |
| /solutions/corporate-cross-border | /solutions/corporate-structuring | REPOSITION + preserve | old → new |
| /solutions/operational-remediation-readiness | /solutions/remediation-readiness | REPOSITION + preserve | old → new |
| /solutions/banking-payments-infrastructure | Corporate + Hub + Remediation deep links | DEMOTE peer area | → corporate-structuring or hub (document choice) |
| /private-clients | /private-clients | KEEP canonical | — |
| /international-hub | /international-hub | REBUILD content | — |
| /diagnostic | /diagnostic | KEEP intake | Link from Remediation |
| /partners | Supporting Hub content | REPOSITION | Link from International Hub |
| /markets | Industries | KEEP routes; nav label Industries | — |
| /insights/* | /insights/* | KEEP; linking hygiene only | — |

Full migration table ships with the implementation PR.
