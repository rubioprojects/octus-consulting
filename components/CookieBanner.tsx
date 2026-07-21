"use client";

import { useState, useEffect } from "react";

/**
 * Essential-cookie notice only.
 * Card presentation (legacy principle) — bottom-left so it does not cover WhatsApp (bottom-right).
 * No advertising pixels or Meta trackers.
 */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("octus-cookies-accepted");
    if (!accepted) setShow(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.cookieBanner = show ? "open" : "closed";
    return () => {
      delete document.documentElement.dataset.cookieBanner;
    };
  }, [show]);

  const accept = () => {
    localStorage.setItem("octus-cookies-accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie notice"
    >
      <p className="cookie-banner__title">Essential cookies</p>
      <p className="cookie-banner__body">
        This site uses essential cookies to operate.{" "}
        <a href="/cookies">Cookie Policy</a>
      </p>
      <div className="cookie-banner__actions">
        <button type="button" onClick={accept} className="cookie-banner__accept">
          Continue
        </button>
      </div>
    </div>
  );
}
