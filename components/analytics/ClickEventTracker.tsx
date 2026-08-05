"use client";

import { useEffect } from "react";
import { trackEvent } from "../../lib/analytics/events";
import { readConsentPreferences } from "../../lib/analytics/consent";
import {
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DIAGNOSTIC_URL,
} from "../../lib/cta";

function closestAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  return target.closest("a");
}

function inferCtaLocation(anchor: HTMLAnchorElement): string {
  const explicit = anchor.getAttribute("data-cta-location");
  if (explicit) return explicit;
  if (anchor.classList.contains("wa-float")) return "floating_whatsapp";
  if (anchor.closest("nav") || anchor.closest("[data-site-nav]")) return "navigation";
  if (anchor.closest("footer") || anchor.closest(".site-footer")) return "footer";
  if (anchor.closest("main")) return "page_body";
  return "unknown";
}

function isWhatsAppHref(href: string): boolean {
  return /wa\.me\//i.test(href) || /api\.whatsapp\.com/i.test(href);
}

function isMailtoHref(href: string): boolean {
  return href.toLowerCase().startsWith("mailto:");
}

function isDiagnosticWhatsApp(href: string, pathname: string): boolean {
  if (pathname === "/diagnostic" && isWhatsAppHref(href)) return true;
  const assess = WHATSAPP_ASSESS_URL.split("?")[0];
  const diag = WHATSAPP_DIAGNOSTIC_URL.split("?")[0];
  const base = href.split("?")[0];
  if (base === assess || base === diag) return true;
  return (
    href.includes(encodeURIComponent("assess my regulated")) ||
    href.includes(encodeURIComponent("diagnostic"))
  );
}

/**
 * Document-level CTA capture — single layer for wa.me / mailto.
 * diagnostic_click may fire alongside whatsapp_click when definitions match
 * (documented in EVENT_DICTIONARY.md).
 */
export default function ClickEventTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = closestAnchor(e.target);
      if (!anchor) return;
      const href = anchor.href || anchor.getAttribute("href") || "";
      if (!href) return;

      const prefs = readConsentPreferences();
      const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
      const label =
        anchor.getAttribute("data-cta-label") ||
        (anchor.textContent || "").trim().slice(0, 120) ||
        anchor.getAttribute("aria-label") ||
        undefined;
      const location = inferCtaLocation(anchor);
      const destination = href.split("?")[0];

      if (isWhatsAppHref(href)) {
        trackEvent(
          "whatsapp_click",
          {
            cta_location: location,
            cta_label: label,
            destination,
            page_path: pathname,
          },
          prefs
        );

        const explicitDiag =
          anchor.getAttribute("data-octus-event") === "diagnostic_click";
        if (explicitDiag || isDiagnosticWhatsApp(href, pathname)) {
          trackEvent(
            "diagnostic_click",
            {
              cta_location: location,
              cta_label: label,
              destination,
              page_path: pathname,
            },
            prefs
          );
        }
      } else if (isMailtoHref(href)) {
        // Destination is scheme + mailbox only — never message body.
        const mailbox = href.replace(/^mailto:/i, "").split("?")[0];
        trackEvent(
          "email_click",
          {
            cta_location: location,
            cta_label: label,
            destination: `mailto:${mailbox}`,
            page_path: pathname,
          },
          prefs
        );
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
