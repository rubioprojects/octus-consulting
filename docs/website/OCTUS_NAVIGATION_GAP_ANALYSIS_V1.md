# OCTUS NAVIGATION GAP ANALYSIS V1

| Field | Value |
|-------|-------|
| **Status** | `HUMAN_APPROVED_FOR_IMPLEMENTATION_REFERENCE` |
| **Date** | 2026-08-02 |
| **Catalog SHA** | `5857c0a7f5a758e44fe3e3c3df0d47ef87739e28` |
| **Target IA** | Services · Industries · Insights · About · Contact |

## Current state (pre-implementation)

| Item | Today |
|------|-------|
| Primary nav | Solutions · Markets · How we engage · Intelligence · About · Contact |
| Capability model | Six Solution hubs in `lib/commercial.ts` |
| Industries routes | `/markets` (+ verticals) |
| Insights | `/insights` (+ `/intelligence` shell) |

## Target state

| Nav item | Route | Notes |
|----------|-------|-------|
| Services | `/solutions` (index; label Services) | Accessible dropdown/disclosure listing seven areas — do not crowd desktop bar with seven long labels |
| Industries | `/markets` | Keep route; rename nav label Markets → Industries |
| Insights | `/insights` | Preserve Intelligence shell as supporting, not top-nav required |
| About | `/about` | Keep |
| Contact | `/contact` | Keep |

## Services menu bindings

| Order | Area | Menu label | Href |
|------:|------|------------|------|
| 1 | Regulatory Structuring | Regulatory Structuring | `/solutions/regulatory-structuring` |
| 2 | Compliance & Risk | Compliance & Risk | `/solutions/compliance-risk` |
| 3 | Legal & Structural Architecture | Legal & Structural Architecture | `/solutions/legal-structural-architecture` |
| 4 | Corporate Structuring | Corporate Structuring | `/solutions/corporate-structuring` |
| 5 | Private Clients | Private Clients | `/private-clients` |
| 6 | Remediation & Readiness | Remediation & Readiness | `/solutions/remediation-readiness` |
| 7 | International Hub | International Hub | `/international-hub` |

Also link “All services” → `/solutions`.

## Gaps to close in implementation

| ID | Gap |
|----|-----|
| N-01 | Replace Solutions label and six-hub footer list with seven approved areas |
| N-02 | Add accessible Services menu (keyboard + screen reader) |
| N-03 | Demote Banking hub from peer area; redistribute into Corp / Hub / Remediation |
| N-04 | Elevate Private Clients and International Hub into Services menu |
| N-05 | Keep Remediation in Services; keep Diagnostic as intake CTA, not a peer area |
| N-06 | Rename Markets → Industries in primary nav |

## Open human decisions

| ID | Question |
|----|----------|
| N-H1 | Whether `/intelligence` remains in footer / secondary nav after Insights elevation |
| N-H2 | Whether `/how-we-engage` stays in footer only or gains homepage prominence |
