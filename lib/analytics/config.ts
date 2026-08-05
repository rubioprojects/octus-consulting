/**
 * Analytics configuration — env-gated, no invented IDs.
 * Absent vars → site works; tracking stays inert.
 */

export const GTM_ID = (process.env.NEXT_PUBLIC_GTM_ID || "").trim();
export const GA4_MEASUREMENT_ID = (
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || ""
).trim();
export const GOOGLE_SITE_VERIFICATION = (
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""
).trim();

export function hasGtmId(): boolean {
  return /^GTM-[A-Z0-9]+$/i.test(GTM_ID);
}

export function hasGa4Id(): boolean {
  return /^G-[A-Z0-9]+$/i.test(GA4_MEASUREMENT_ID);
}

export function hasSiteVerification(): boolean {
  return GOOGLE_SITE_VERIFICATION.length > 0;
}

/** True only when orchestration IDs required for live tagging are configured. */
export function analyticsConfigured(): boolean {
  return hasGtmId();
}
