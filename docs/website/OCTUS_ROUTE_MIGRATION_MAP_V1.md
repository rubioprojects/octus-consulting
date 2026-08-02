# OCTUS ROUTE MIGRATION MAP V1

| Field | Value |
|-------|-------|
| **Status** | Merge-candidate artifact (H-02 redirects validated) |
| **Date** | 2026-08-02 |
| **Hosting** | Vercel redirects in `vercel.json` (observed permanent HTTP **308**) + static client fallback pages for renamed hubs |

## Migration table

| Existing route | Final route | Action | Redirect | Canonical | Internal links affected | SEO risk |
|----------------|-------------|--------|----------|-----------|-------------------------|----------|
| `/solutions` | `/solutions` | REPOSITION — Services index (7 areas) | — | self | Nav, footer, homepage | Low |
| `/services` | `/solutions` | ALIAS | permanent **308** → `/solutions` | `/solutions` | New | Low |
| `/solutions/regulatory-strategy-licensing` | `/solutions/regulatory-structuring` | RENAME | permanent **308** | new | Nav/footer/home (not sitemap) | Medium |
| `/solutions/compliance-risk-systems` | `/solutions/compliance-risk` | RENAME | permanent **308** | new | Nav/footer/home (not sitemap) | Medium |
| `/solutions/legal-contractual-architecture` | `/solutions/legal-structural-architecture` | RENAME | permanent **308** | new | Nav/footer/home (not sitemap) | Medium |
| `/solutions/corporate-cross-border` | `/solutions/corporate-structuring` | RENAME | permanent **308** | new | Nav/footer/home (not sitemap) | Medium |
| `/solutions/operational-remediation-readiness` | `/solutions/remediation-readiness` | RENAME | permanent **308** | new | Nav/footer/home (not sitemap) | Medium |
| `/solutions/banking-payments-infrastructure` | **same URL** | SUPPORTING routing page HTTP **200** (not an eighth area; not Hub redirect) | — | self | Linked from Related services | Medium |
| `/private-clients` | `/private-clients` | KEEP canonical | — | self | Services menu | Low |
| `/international-hub` | `/international-hub` | REBUILD content | — | self | Services menu | Medium |
| `/diagnostic` | `/diagnostic` | KEEP assessment entry | — | self | Remediation CTA | Low |
| `/partners` | `/partners` | KEEP; linked from Hub | — | self | Hub related | Low |
| `/markets` | `/markets` | KEEP; nav label Industries | — | self | Nav | Low |
| `/insights/*` | `/insights/*` | KEEP; linking hygiene | — | self | Enrichment only | Low |
| `/regulatory` | `/solutions/regulatory-structuring` | REDIRECT | permanent (308) | new area | Legacy pillar | Low |
| `/compliance` | `/solutions/compliance-risk` | REDIRECT | permanent (308) | new area | Legacy pillar | Low |
| `/corporate` | `/solutions/corporate-structuring` | REDIRECT | permanent (308) | new area | Legacy pillar | Low |
| `/audit` | `/solutions/remediation-readiness` | REDIRECT | permanent (308) | new area | Legacy pillar | Low |
| `/legal-architecture` | `/solutions/legal-structural-architecture` | REDIRECT | permanent (308) | new area | Legacy pillar | Low |

## Banking & Payments supporting treatment (H-03)

`/solutions/banking-payments-infrastructure` is **not** redirected to International Hub.

It is a supporting routing page that explains Banking & Payments work through:

1. **Corporate Structuring** — banking readiness, ownership/documentation, corporate/tax structure, institutional bankability  
2. **International Hub** — bank/PSP identification, payment-provider coordination, introductions, payment architecture  
3. **Remediation & Readiness** — rejected applications, blocked accounts, failed payment infrastructure, remediation  

It must **not** appear in primary nav, Services index, or homepage area list as a peer area. It **does** remain in the sitemap as a canonical HTTP 200 supporting page.

## Historical labels (metadata / redirects / docs only)

| Historical | Approved public label |
|------------|------------------------|
| Ownership & UBO | Private Clients |
| Audit & Readiness | Remediation & Readiness |

These must **not** render on public pages.
