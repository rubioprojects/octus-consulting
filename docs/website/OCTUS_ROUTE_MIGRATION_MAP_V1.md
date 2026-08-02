# OCTUS ROUTE MIGRATION MAP V1

| Field | Value |
|-------|-------|
| **Status** | Implementation branch artifact |
| **Date** | 2026-08-02 |
| **Catalog SHA baseline** | `5857c0a` (planning merge `3d98346`) |
| **Hosting** | Vercel redirects in `vercel.json` + static client fallback pages |

## Migration table

| Existing route | Final route | Action | Redirect | Canonical | Internal links affected | SEO risk |
|----------------|-------------|--------|----------|-----------|-------------------------|----------|
| `/solutions` | `/solutions` | REPOSITION — Services index (7 areas) | — | self | Nav, footer, homepage | Low |
| `/services` | `/solutions` | ALIAS | 301 → `/solutions` | `/solutions` | New | Low |
| `/solutions/regulatory-strategy-licensing` | `/solutions/regulatory-structuring` | RENAME | 301 | new | Nav/footer/home/sitemap | Medium |
| `/solutions/compliance-risk-systems` | `/solutions/compliance-risk` | RENAME | 301 | new | Nav/footer/home/sitemap | Medium |
| `/solutions/legal-contractual-architecture` | `/solutions/legal-structural-architecture` | RENAME | 301 | new | Nav/footer/home/sitemap | Medium |
| `/solutions/corporate-cross-border` | `/solutions/corporate-structuring` | RENAME | 301 | new | Nav/footer/home/sitemap | Medium |
| `/solutions/operational-remediation-readiness` | `/solutions/remediation-readiness` | RENAME | 301 | new | Nav/footer/home/sitemap | Medium |
| `/solutions/banking-payments-infrastructure` | `/international-hub` | DEMOTE peer area | 301 → Hub | Hub | Former Solution 02 | Medium-High |
| `/private-clients` | `/private-clients` | KEEP canonical | — | self | Services menu | Low |
| `/international-hub` | `/international-hub` | REBUILD content | — | self | Services menu, banking demote | Medium |
| `/diagnostic` | `/diagnostic` | KEEP intake | — | self | Remediation area CTA | Low |
| `/partners` | `/partners` | KEEP; linked from Hub | — | self | Hub related | Low |
| `/markets` | `/markets` | KEEP; nav label Industries | — | self | Nav | Low |
| `/insights/*` | `/insights/*` | KEEP; linking hygiene | — | self | Enrichment only | Low |
| `/regulatory` | (existing legacy) | KEEP until host redirect review | TBD | Regulatory area | Legacy | Medium |
| `/compliance` | (existing legacy) | KEEP until host redirect review | TBD | Compliance area | Legacy | Medium |
| `/corporate` | (existing legacy) | KEEP until host redirect review | TBD | Corporate area | Legacy | Medium |
| `/audit` | (existing legacy) | KEEP; historical Audit & Readiness alias | TBD | Remediation area | Legacy | Medium |
| `/legal-architecture` | (existing legacy) | KEEP related depth | TBD | Legal area | Legacy | Medium |

## Historical labels (metadata / redirects only)

| Historical | Approved public label |
|------------|------------------------|
| Ownership & UBO | Private Clients |
| Audit & Readiness | Remediation & Readiness |

These must **not** replace approved public labels in nav, Services index, or area H1s.

## Banking / Tax

| Theme | Not a public area | Lives under |
|-------|-------------------|-------------|
| Banking readiness | Yes | Corporate Structuring |
| Bank/PSP introductions & payment architecture | Yes | International Hub |
| Banking/compliance gap remediation | Yes | Remediation & Readiness |
| Corporate tax / accounting coordination | Yes | Corporate Structuring |
| Personal tax coordination | Yes | Private Clients |
