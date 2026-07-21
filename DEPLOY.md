# Deploy — Octus Consulting (single source of truth)

**Host:** Vercel only  
**App:** Next.js App Router (`output: 'export'` — static export)  
**Repo:** rubioprojects/octus-consulting  

## Why static export is valid

Website forms and `/api/diagnostic` were removed. Conversion is WhatsApp + mailto.  
No server routes are required for go-live.

## Environment variables

None required for production site behavior after form removal.  
Do **not** rely on `RESEND_*` for the public site.

## Deploy flow

1. Push to `main` (or connected production branch)  
2. Vercel builds `next build` → static `out/`  
3. Preview URLs for PRs; Production for `main`  

## Domain cutover (human — not automated here)

1. Add `octusconsulting.com` (+ www) in Vercel project domains  
2. Update DNS at registrar  
3. Retire Framer apex / set 301s  
4. Verify WhatsApp CTA + mailto on apex  

## Local

```bash
npm install
npm run build
npm run start   # or serve `out/`
```

## Rollback

Vercel → Deployments → Promote previous production deployment.
