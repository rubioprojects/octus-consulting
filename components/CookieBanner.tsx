"use client";

import { useState, useEffect } from "react";

/**
 * Essential-cookie notice only.
 * Current site: static export + localStorage preference for this banner.
 * No advertising pixels or Meta trackers are loaded by this component.
 * Body class `cookie-banner-visible` is retained for diagnostics; Phase 2
 * WhatsApp geometry matches baseline 9q798dbg2 (no cookie-driven lift).
 */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("octus-cookies-accepted");
    if (!accepted) setShow(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("cookie-banner-visible", show);
    return () => {
      document.body.classList.remove("cookie-banner-visible");
    };
  }, [show]);

  const accept = () => {
    localStorage.setItem("octus-cookies-accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <p>
        This site uses essential cookies to operate.{" "}
        <a href="/cookies">Cookie Policy</a>
      </p>
      <button type="button" onClick={accept}>
        Continue
      </button>
    </div>
  );
}
