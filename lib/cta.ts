/** Shared conversion CTAs: high-ticket conversation paths (no website forms). */

export const OCTUS_WHATSAPP_E164 = "5511974273000";

export const WA_DISCUSS_OPERATION_TEXT =
  "Hello Octus team, I would like to discuss my operation and understand how you can help.";

/** Secondary CTA: advisory assessment language (not form/lead-gen "diagnostic"). */
export const WA_ASSESS_SITUATION_TEXT =
  "Hello Octus team, I would like to assess my regulated operation and understand how you can help.";

export const WHATSAPP_DISCUSS_URL = `https://wa.me/${OCTUS_WHATSAPP_E164}?text=${encodeURIComponent(WA_DISCUSS_OPERATION_TEXT)}`;

export const WHATSAPP_ASSESS_URL = `https://wa.me/${OCTUS_WHATSAPP_E164}?text=${encodeURIComponent(WA_ASSESS_SITUATION_TEXT)}`;

export const OCTUS_EMAIL = "info@octusconsulting.com";
export const MAILTO_INFO = `mailto:${OCTUS_EMAIL}`;
/** Institutional discuss path — same mailbox as MAILTO_INFO. */
export const MAILTO_DISCUSS = MAILTO_INFO;

export const CTA_DISCUSS_LABEL = "Discuss your operation →";
export const CTA_WORKSTREAM_LABEL = "Discuss this workstream →";
export const CTA_EMAIL_LABEL = "Email Octus →";
export const CTA_ASSESS_LABEL = "Assess your situation →";
export const CTA_WHATSAPP_ASSESS_LABEL = "WhatsApp assessment →";
/** Canonical diagnostic intake route (current IA). */
export const ASSESS_PATH = "/diagnostic";

/** Partnership intake: human-approved for Wave 3 public copy. */
export const WA_PARTNERSHIP_TEXT =
  "Hello Octus team. I would like to discuss a potential partnership or collaboration on regulated operations.";

export const WHATSAPP_PARTNERSHIP_URL = `https://wa.me/${OCTUS_WHATSAPP_E164}?text=${encodeURIComponent(WA_PARTNERSHIP_TEXT)}`;

export const CTA_PARTNERSHIP_LABEL = "Discuss partnership →";

/** @deprecated Use WHATSAPP_ASSESS_URL / CTA_ASSESS_LABEL */
export const WA_REQUEST_DIAGNOSTIC_TEXT = WA_ASSESS_SITUATION_TEXT;
/** @deprecated Use WHATSAPP_ASSESS_URL */
export const WHATSAPP_DIAGNOSTIC_URL = WHATSAPP_ASSESS_URL;
/** @deprecated Use CTA_ASSESS_LABEL */
export const CTA_DIAGNOSTIC_LABEL = CTA_ASSESS_LABEL;
