# Google Search Console — Post-Launch Readiness

**Production:** https://octusconsulting.com  
**Sitemap:** https://octusconsulting.com/sitemap.xml  
**Date:** 2026-08-05  

**Do not execute external account actions from the agent.** Human operators complete the steps below.

---

## Checklist

1. [ ] Add/verify domain property `octusconsulting.com` (DNS TXT or HTML file — prefer domain property).
2. [ ] Confirm www is covered (domain property) or add URL-prefix property if required by ops preference.
3. [ ] Submit sitemap: `https://octusconsulting.com/sitemap.xml`.
4. [ ] Confirm sitemap reports ~64 discovered URLs and 16 Insights paths.
5. [ ] Spot-check live robots.txt allows Googlebot and points at production sitemap.
6. [ ] Confirm live HTML responses do **not** include `x-robots-tag: noindex`.
7. [ ] Run URL Inspection + Request indexing for Tier 1 URLs (order below).
8. [ ] After 7–14 days, review Pages / Experience reports for soft-404 and redirect issues.

---

## Indexing priority list

### Tier 1 — inspect first

1. `https://octusconsulting.com/`
2. `https://octusconsulting.com/solutions`
3. `https://octusconsulting.com/brazil`
4. `https://octusconsulting.com/markets`
5. `https://octusconsulting.com/solutions/regulatory-structuring`
6. `https://octusconsulting.com/solutions/compliance-risk`
7. `https://octusconsulting.com/international-hub`
8. `https://octusconsulting.com/markets/igaming`
9. `https://octusconsulting.com/markets/fintech`
10. `https://octusconsulting.com/markets/crypto`

### Tier 2

11. `https://octusconsulting.com/jurisdictions`
12. Key jurisdiction children (Curaçao, Malta, Isle of Man, Brazil as applicable)
13. `https://octusconsulting.com/insights`
14. Highest-priority public articles (statute-anchored Brazil pieces first)
15. `https://octusconsulting.com/team`
16. `https://octusconsulting.com/about`

---

## Path reminders

- Industries hub = `/markets` (not `/industries`).
- International Hub = `/international-hub`.
