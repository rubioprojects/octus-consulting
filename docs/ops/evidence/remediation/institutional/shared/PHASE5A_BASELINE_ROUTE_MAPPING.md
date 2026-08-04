# Phase 5A — Baseline route mapping

Visual source of truth: https://octus-consulting-9q798dbg2-axle1.vercel.app  
Deployment: `dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`

| Phase 5A route | Baseline equivalent | Mapping |
|---|---|---|
| `/about` | `/about` | Direct |
| `/how-we-engage` | `/how-we-engage` | Direct |
| `/contact` | `/contact` | Direct |
| `/diagnostic` | `/diagnostic` (or assessment CTA surfaces) | Direct if present; else closest commercial intake dark/light rhythm from Contact |
| `/partners` | `/partners` | Direct |
| `/careers` | `/careers` | Direct |

Aliases derived from app routing + redirects during Phase 5A inventory: **none** for the six mandatory paths (no next.config / middleware / vercel.json redirect into these routes from alternate institutional slugs). Nav/footer labels resolve to the same pathnames.

`NO_DIRECT_BASELINE_ROUTE`: none for the six mandatory paths.

Closest-template rationale for composition (not factual copy):

- Institutional authority (About) ↔ Homepage editorial denseness + PageHero dark rhythm
- Engagement model (How We Engage) ↔ Services chapter cards without restoring service catalogue facts
- Commercial intake (Contact / Diagnostic) ↔ WhatsApp-primary CTA hierarchy from accepted Homepage/Services
- Network / talent (Partners / Careers) ↔ elevated surface cards + honest EOI posture

Stale baseline facts are not restored.
