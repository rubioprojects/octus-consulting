# OCTUS ROUTE MIGRATION MAP V1

| Field | Value |
|-------|-------|
| **Status** | Implementation branch artifact (hygiene patch) |
| **Date** | 2026-08-02 |
| **Hosting** | Vercel redirects in `vercel.json` + static client fallback pages for renamed hubs |

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
| `/solutions/banking-payments-infrastructure` | **same URL** | SUPPORTING routing page (not an eighth area) | — | self | Linked from depth / legacy | Medium |
| `/private-clients` | `/private-clients` | KEEP canonical | — | self | Services menu | Low |
| `/international-hub` | `/international-hub` | REBUILD content | — | self | Services menu | Medium |
| `/diagnostic` | `/diagnostic` | KEEP assessment entry | — | self | Remediation CTA | Low |
| `/partners` | `/partners` | KEEP; linked from Hub | — | self | Hub related | Low |
| `/markets` | `/markets` | KEEP; nav label Industries | — | self | Nav | Low |
| `/insights/*` | `/insights/*` | KEEP; linking hygiene | — | self | Enrichment only | Low |
| `/regulatory` | TBD after route-by-route testing | H-02 APPROVED WITH VALIDATION | permanent after validation | Regulatory area | Legacy | Medium |
| `/compliance` | TBD after route-by-route testing | H-02 APPROVED WITH VALIDATION | permanent after validation | Compliance area | Legacy | Medium |
| `/corporate` | TBD after route-by-route testing | H-02 APPROVED WITH VALIDATION | permanent after validation | Corporate area | Legacy | Medium |
| `/audit` | TBD after route-by-route testing | H-02 APPROVED WITH VALIDATION | permanent after validation | Remediation area | Legacy | Medium |
| `/legal-architecture` | KEEP related depth for now | H-02 pending per-route test | TBD | Legal area | Legacy | Medium |

## Banking & Payments supporting treatment (H-03)

`/solutions/banking-payments-infrastructure` is **not** redirected to International Hub.

It is a supporting routing page that explains Banking & Payments work through:

1. **Corporate Structuring** — banking readiness, ownership/documentation, corporate/tax structure, institutional bankability  
2. **International Hub** — bank/PSP identification, payment-provider coordination, introductions, payment architecture  
3. **Remediation & Readiness** — rejected applications, blocked accounts, failed payment infrastructure, remediation  

It must **not** appear in primary nav, Services index, homepage area list, or sitemap area taxonomy as a peer area.

## Historical labels (metadata / redirects / docs only)

| Historical | Approved public label |
|------------|------------------------|
| Ownership & UBO | Private Clients |
| Audit & Readiness | Remediation & Readiness |

These must **not** render on public pages.
