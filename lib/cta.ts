/** Shared conversion CTAs — high-ticket conversation paths (no website forms). */

export const OCTUS_WHATSAPP_E164 = "5511974273000";

export const WA_DISCUSS_OPERATION_TEXT =
  "Hello Octus team, I would like to discuss my operation and understand how you can help.";

export const WA_REQUEST_DIAGNOSTIC_TEXT =
  "Hello Octus team, I would like to request a diagnostic regarding my regulated operation.";

export const WHATSAPP_DISCUSS_URL = `https://wa.me/${OCTUS_WHATSAPP_E164}?text=${encodeURIComponent(WA_DISCUSS_OPERATION_TEXT)}`;

export const WHATSAPP_DIAGNOSTIC_URL = `https://wa.me/${OCTUS_WHATSAPP_E164}?text=${encodeURIComponent(WA_REQUEST_DIAGNOSTIC_TEXT)}`;

export const MAILTO_INFO = "mailto:info@octusconsulting.com";

export const CTA_DISCUSS_LABEL = "Discuss your operation →";
export const CTA_DIAGNOSTIC_LABEL = "Request a diagnostic →";
