"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  contentMetaForPath,
  trackEvent,
  viewEventForPath,
} from "../../lib/analytics/events";
import { readConsentPreferences } from "../../lib/analytics/consent";

/**
 * Fires content view events once per path (hydration + client navigations).
 * Dedupes Strict Mode double-mount and same-path re-renders.
 */
export default function ViewEventTracker() {
  const pathname = usePathname();
  const lastFired = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    const eventName = viewEventForPath(pathname);
    if (!eventName) {
      lastFired.current = pathname;
      return;
    }
    const key = `${eventName}:${pathname}`;
    if (lastFired.current === key) return;
    lastFired.current = key;

    const prefs = readConsentPreferences();
    const meta = contentMetaForPath(pathname);
    trackEvent(
      eventName,
      {
        page_path: pathname,
        page_title: typeof document !== "undefined" ? document.title : undefined,
        ...meta,
      },
      prefs
    );
  }, [pathname]);

  return null;
}
