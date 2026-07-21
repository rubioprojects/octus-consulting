"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../lib/cta";

const primaryLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Markets", href: "/markets" },
  { label: "How we engage", href: "/how-we-engage" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const supportingLinks = [
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Jurisdictions", href: "/jurisdictions" },
];

const linkClass =
  "font-sans text-[13px] tracking-wide text-muted-foreground no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-sm";

const ctaClass =
  "inline-flex items-center rounded-sm bg-primary px-5 py-2.5 font-sans text-[13px] font-medium tracking-[0.04em] text-primary-foreground no-underline transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-6 md:text-sm";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className="site-header fixed left-0 right-0 top-0 z-50 flex h-[4.25rem] items-center border-b border-border/50 bg-background/92 backdrop-blur-md md:h-[4.75rem]"
        aria-label="Main"
      >
        <div className="site-header__brand-rule" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="Octus Consulting home"
          >
            <img
              src="/logo-nav.png"
              alt=""
              width={200}
              height={52}
              decoding="async"
              className="site-header__logo h-8 w-auto md:h-9"
              style={{ imageRendering: "auto" }}
            />
          </Link>

          <div className="hidden items-center gap-8 lg:gap-10 md:flex">
            {primaryLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} min-h-11`}
            >
              {CTA_DISCUSS_LABEL}
            </a>
          </div>

          <button
            type="button"
            className="flex rounded-md border-0 bg-transparent p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-background px-4 pb-12 pt-2 sm:px-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block border-b border-border py-4 font-sans text-base text-foreground no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <p className="pt-6 pb-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            More
          </p>
          {supportingLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block border-b border-border py-3 font-sans text-sm text-muted-foreground no-underline transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-6">
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} w-full justify-center`}
              onClick={() => setMobileOpen(false)}
            >
              {CTA_DISCUSS_LABEL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
