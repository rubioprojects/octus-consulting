# Event dictionary

Single tracking layer: `lib/analytics/events.ts` (`trackEvent`) + document click capture + path view tracker.

Events fire only when **all** are true:

1. Hostname is `octusconsulting.com` or `www.octusconsulting.com`  
2. `NEXT_PUBLIC_GTM_ID` is a valid `GTM-*` value  
3. User granted analytics (`octus-consent-v2.analytics === true`)  

## Events

| Event | Trigger | Notes |
|-------|---------|-------|
| `whatsapp_click` | Any `wa.me` / WhatsApp API anchor click | Includes nav, home CTAs, float, footer, contact, diagnostic, service pages |
| `email_click` | Any `mailto:` click | Destination = mailbox only; never message body / PII from draft |
| `diagnostic_click` | Diagnostic conversion path WhatsApp CTAs | See dual-fire note below |
| `services_view` | `/solutions`, `/solutions/*` | Once per path (deduped) |
| `industry_view` | `/markets`, `/markets/*` | Once per path |
| `jurisdiction_view` | `/jurisdictions`, `/jurisdictions/*`, `/brazil` | Once per path |
| `insight_view` | `/insights`, `/insights/*` | Once per path |

## Parameters

| Param | When |
|-------|------|
| `page_path` | Always when available |
| `page_title` | Always when available |
| `cta_location` | Click events (`data-cta-location` or inferred landmark) |
| `cta_label` | Click events (trimmed label / aria-label) |
| `destination` | Click events (scheme+host+path or mailto mailbox; query stripped for WA base) |
| `content_type` | View events when slugable |
| `content_slug` | View events when slugable |
| `consent_state` | `granted` / `denied` analytics_storage mirror |
| `ga4_measurement_id` | Included only if `NEXT_PUBLIC_GA4_MEASUREMENT_ID` matches `G-*` |

## Dual-fire: `diagnostic_click` + `whatsapp_click`

When a WhatsApp CTA is on `/diagnostic`, marked `data-octus-event="diagnostic_click"`, or uses the assess/diagnostic WhatsApp URL, **both** events may fire on the same click:

- `whatsapp_click` — channel conversion (all WA CTAs)  
- `diagnostic_click` — funnel entry into diagnostic assessment  

GA4 reporting should treat them as complementary dimensions, not duplicates of the same metric. Do not dedupe across event names.

## Deduplication

View events use an in-memory last-fired key `event:pathname` to prevent double fire on React Strict Mode remount / same-path re-render. Full page reloads may fire once per load (expected).
