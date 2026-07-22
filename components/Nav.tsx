"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../lib/cta";
import BrandLockup from "./BrandLockup";

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

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  /** True while sticky header overlaps a dark hero — use blue+white lockup + light nav. */
  const [overDarkHero, setOverDarkHero] = useState(false);

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

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(".home-hero, .octus-dark-hero");
      if (!hero) {
        setOverDarkHero(false);
        return;
      }
      const headerH = 88;
      const bottom = hero.getBoundingClientRect().bottom;
      setOverDarkHero(bottom > headerH);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const linkClass = overDarkHero
    ? "font-sans text-[12px] tracking-[0.02em] text-white/70 no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[12.5px]"
    : "font-sans text-[12px] tracking-[0.02em] text-foreground/65 no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-[12.5px]";

  const ctaClass =
    "inline-flex items-center rounded-sm bg-primary px-4 py-2 font-sans text-[12px] font-medium tracking-[0.03em] text-primary-foreground no-underline transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-5 md:text-[12.5px]";

  return (
    <>
      <nav
        className={
          overDarkHero
            ? "site-header site-header--on-dark fixed left-0 right-0 top-0 z-50 flex h-[5rem] items-center border-b border-white/10 bg-[#0B1220] md:h-[5.5rem]"
            : "site-header fixed left-0 right-0 top-0 z-50 flex h-[5rem] items-center border-b border-border/50 bg-background md:h-[5.5rem]"
        }
        aria-label="Main"
        data-over-dark-hero={overDarkHero ? "true" : "false"}
      >
        <div className="site-header__brand-rule" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className={`site-header__brand flex shrink-0 items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
              overDarkHero ? "focus-visible:outline-white" : "focus-visible:outline-primary"
            }`}
            aria-label="Octus Consulting home"
          >
            <BrandLockup
              variant={overDarkHero ? "on-dark" : "on-light"}
              className="site-header__logo h-11 w-auto md:h-12"
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 lg:gap-6 md:flex">
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
            className={`flex rounded-md border-0 bg-transparent p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden ${
              overDarkHero
                ? "text-white focus-visible:outline-white"
                : "text-foreground focus-visible:outline-primary"
            }`}
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
          className="fixed inset-0 z-40 bg-background pt-[5rem] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 px-4 py-6">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-sm px-3 py-3 font-sans text-base text-foreground no-underline hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="my-3 border-t border-border" />
            {supportingLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-sm px-3 py-3 font-sans text-sm text-muted-foreground no-underline hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} mt-4 justify-center`}
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
