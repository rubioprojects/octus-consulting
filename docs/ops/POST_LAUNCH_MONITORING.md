# Post-Launch Monitoring — Octus Consulting

**Production:** https://octusconsulting.com  
**Deployment baseline:** `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3` @ `28eb2ec` (promote newer SHAs only with approval)  
**Date:** 2026-08-05  

---

## Daily — first 7 days

| Check | How | Pass signal |
|-------|-----|-------------|
| Uptime | Curl apex + www → 200 | Both 200, SSL valid |
| Vercel errors | Vercel project → Deployments / Logs | No spike in 5xx |
| 404 | Spot-check random Insights + GSC later | No unexpected soft-404 on Tier 1 |
| Search Console coverage | GSC Pages (after verify) | No mass exclusions |
| Sitemap errors | GSC Sitemaps + `sitemap.xml` fetch | Fetch 200; URL count stable |
| Indexation | URL Inspection on priority URLs | Discovered/indexed progressing |
| Preview noindex | `*.vercel.app` response headers | `x-robots-tag: noindex` present |
| Production indexable | Apex response headers | No production `noindex` |

Suggested daily curl:

```bash
curl -sSI https://octusconsulting.com/ | rg -i 'HTTP/|x-robots|strict-transport'
curl -sS https://octusconsulting.com/robots.txt | head -20
curl -sS -o /dev/null -w '%{http_code}\n' https://octusconsulting.com/sitemap.xml
```

---

## Weekly

| Check | Notes |
|-------|-------|
| Organic traffic | GSC performance + GA4 (when installed) |
| Conversions | `whatsapp_click`, `diagnostic_click` (when GA4 live) |
| Top pages | `/`, `/solutions`, `/brazil`, `/markets`, Insights |
| Insights performance | Impressions/clicks per article |
| Redirect health | `/industries` → `/markets`; `/solutions/international-hub` → `/international-hub` (one hop) |
| Lighthouse mobile | Spot-check `/` LCP trend |

---

## Escalation

- Production `noindex` appears → treat as P0  
- Sitemap HOLD leak → treat as P0  
- SSL / DNS failure → treat as P0 (DNS changes still require Rubio)  
- Mobile LCP regresses > previous baseline after image work → backlog P2  

---

## Related

- `docs/seo/GOOGLE_SEARCH_CONSOLE_SETUP.md`  
- `docs/analytics/GA4_IMPLEMENTATION_PLAN.md`  
- `docs/ops/POST_LAUNCH_BACKLOG.md`  
