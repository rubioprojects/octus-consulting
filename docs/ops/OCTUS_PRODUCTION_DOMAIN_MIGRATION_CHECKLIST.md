# Octus production domain migration checklist

**Status:** DOCUMENT ONLY — do not execute DNS or production promotion without Rubio confirmation.  
**PR:** #17 · branch `feat/seven-areas-website-architecture`

## Current state

- Application ships as Next.js `output: 'export'` static site on Vercel.
- Preview deployments use `*.vercel.app` hosts.
- Metadata / canonical / OG / sitemap already target `https://octusconsulting.com`.
- Preview should send `X-Robots-Tag: noindex, nofollow` (configured in `vercel.json` host match).
- Production must **not** noindex.

## Steps (Rubio / Sol execute)

1. **Add domains in Vercel project**
   - `octusconsulting.com`
   - `www.octusconsulting.com`
2. **Configure DNS** (registrar)
   - Apex: A / ALIAS per Vercel instructions
   - `www`: CNAME to Vercel
3. **Enable SSL** (automatic once DNS verifies)
4. **Promote approved SHA** to Production (Vercel Production deploy of the approved commit — not preview)
5. **Verify after cutover**
   - `https://octusconsulting.com` and `www` → HTTPS 200
   - Canonical tags = production URLs
   - `robots.txt` Allow + Sitemap line
   - `/sitemap.xml` public routes only
   - OG `og:url` / images on production origin
   - Response headers: **no** `X-Robots-Tag: noindex` on production host
6. **Keep preview noindex** for future PR previews

## Explicit non-actions in this pack

- No DNS mutation by agent
- No production deploy by agent
- No merge of PR #17 by agent
