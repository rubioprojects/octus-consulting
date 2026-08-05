# Analytics / Search Console insertion points (credentials not available)

**Policy:** GTM is the orchestration layer; GA4 installs through GTM. Do not invent IDs.

## Status

| Asset | Status |
|-------|--------|
| GTM container ID | **Unavailable** — do not install placeholder |
| GA4 Measurement ID | **Unavailable** — do not invent |
| Search Console domain property | Manual Rubio verification required for `octusconsulting.com` |
| Consent Mode v2 | Deferred to GOOGLE_ANALYTICS_AND_CONSENT pack (CookieBanner is essential-only today) |

## Manual Rubio actions (external)

1. Create GTM web container for `octusconsulting.com`; provide Container ID.
2. Create GA4 property + web data stream; provide Measurement ID; wire via GTM.
3. Verify Search Console domain property; submit `https://octusconsulting.com/sitemap.xml`.
4. Approve Consent Mode v2 + Accept / Reject / Manage preferences before non-essential tags.

## Code insertion points (when IDs confirmed)

- `app/layout.tsx` — GTM snippet in `<head>` / `<body>` only after ID + consent architecture.
- No Meta / LinkedIn pixels in this remediation.

Mobile remediation does **not** depend on these credentials.
