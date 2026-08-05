# Google Search Console Setup — Octus Consulting

**Production:** https://octusconsulting.com  
**Sitemap:** https://octusconsulting.com/sitemap.xml  
**Robots:** https://octusconsulting.com/robots.txt  
**Date:** 2026-08-05  

```text
SEARCH_CONSOLE:
READY_FOR_MANUAL_VERIFICATION
```

This pack does **not** claim Search Console is verified. Account access and verification are human-only.

---

## Pre-flight (already on production)

| Check | Expected |
|-------|----------|
| robots.txt | `User-agent: *` Allow; `Googlebot` Allow; Sitemap → production |
| sitemap.xml | Public routes only (~64 URLs; 16 Insights; no HOLD) |
| Canonicals | `https://octusconsulting.com/...` (not preview hosts) |
| Indexability | No production `x-robots-tag: noindex` |
| Structured data | Organization (site); Article (Insights); Person (Team) |
| Preview hosts | Remain `noindex, nofollow` |

---

## Verification method (manual)

Prefer **Domain property** for `octusconsulting.com`:

1. Google Search Console → Add property → Domain → `octusconsulting.com`
2. Add the DNS TXT record Google provides (or use an existing verified DNS provider flow)
3. Click Verify

Alternative (URL-prefix): HTML file or meta tag on the homepage — only if domain verification is blocked. Domain property is preferred so `www` and apex are covered together.

**Agent must not invent a verification token or mark verification complete.**

---

## Sitemap submission (manual)

After verification:

1. Sitemaps → Add: `https://octusconsulting.com/sitemap.xml`
2. Confirm discovery count matches public inventory
3. Watch for errors / excluded URLs for 7–14 days

---

## Priority pages — indexing sequence

Request indexing (URL Inspection) in this order:

1. `/`
2. `/solutions`
3. `/brazil`
4. `/markets`
5. `/jurisdictions`
6. `/international-hub`
7. `/insights`

Then Tier 1 service/industry children and public articles as capacity allows.

### Path notes

- Industries hub = `/markets` (legacy `/industries` redirects to `/markets`)
- International Hub = `/international-hub` (legacy `/solutions/international-hub` redirects)

---

## Manual steps remaining

1. Verify domain in GSC  
2. Submit sitemap  
3. Request indexing for the seven priority URLs  
4. Monitor Coverage / Pages weekly for the first month  

---

## Status line for handoffs

```text
SEARCH_CONSOLE: READY_FOR_MANUAL_VERIFICATION
```
