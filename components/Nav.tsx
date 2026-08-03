"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../lib/cta";
import { PUBLIC_AREAS } from "../lib/publicAreas";
import BrandLockup from "./BrandLockup";

/** Desktop priorities: Services → Industries → How we engage → Intelligence → About → Contact → Discuss */
const primaryLinks = [
  { label: "Industries", href: "/markets" },
  { label: "How we engage", href: "/how-we-engage" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileInstitutionalLinks = [
  { label: "How we engage", href: "/how-we-engage" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "/team" },
  { label: "Jurisdictions", href: "/jurisdictions" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [overDarkHero, setOverDarkHero] = useState(false);
  const menuId = useId();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [servicesOpen]);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(".home-hero, .octus-dark-hero");
      if (!hero) {
        setOverDarkHero(false);
        return;
      }
      const headerH = 84;
      setOverDarkHero(hero.getBoundingClientRect().bottom > headerH);
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
    ? "font-sans text-[12px] tracking-[0.02em] text-[color:var(--text-secondary-on-dark)] no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[12.5px]"
    : "font-sans text-[12px] tracking-[0.02em] text-[color:var(--text-secondary)] no-underline transition-colors hover:text-[color:var(--text-link)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-[12.5px]";

  const ctaClass =
    "inline-flex items-center rounded-sm bg-primary px-4 py-2 font-sans text-[12px] font-medium tracking-[0.03em] text-primary-foreground no-underline transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-5 md:text-[12.5px] min-h-11";

  return (
    <>
      <nav
        className={
          overDarkHero
            ? "site-header site-header--on-dark fixed left-0 right-0 top-0 z-50 flex h-[4.75rem] items-center border-b border-white/10 bg-[#0B1220] md:h-[5.25rem]"
            : "site-header fixed left-0 right-0 top-0 z-50 flex h-[4.75rem] items-center border-b border-border/50 bg-background md:h-[5.25rem]"
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
              className="site-header__logo h-8 w-auto md:h-9"
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 lg:gap-6 md:flex">
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className={linkClass + " inline-flex items-center gap-1.5"}
                aria-expanded={servicesOpen}
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="opacity-70">
                  <path d="M3 4.5L6 7.5L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  id={menuId}
                  role="menu"
                  aria-label="Services areas"
                  className="absolute left-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] rounded-sm border border-border bg-background p-2 shadow-lg"
                >
                  <Link
                    href="/solutions"
                    role="menuitem"
                    className="mb-1 block rounded-sm px-3 py-2 font-sans text-sm font-medium text-foreground no-underline hover:bg-secondary"
                    onClick={() => setServicesOpen(false)}
                  >
                    All services
                  </Link>
                  <ul className="m-0 list-none p-0">
                    {PUBLIC_AREAS.map((area) => (
                      <li key={area.id}>
                        <Link
                          href={area.href}
                          role="menuitem"
                          className="block rounded-sm px-3 py-2 font-sans text-sm text-muted-foreground no-underline hover:bg-secondary hover:text-foreground"
                          onClick={() => setServicesOpen(false)}
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {primaryLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
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
          className="fixed inset-0 z-40 bg-background pt-[4.75rem] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col gap-1 overflow-y-auto px-4 pb-10">
            <p className="mb-2 mt-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Services
            </p>
            <Link
              href="/solutions"
              className="rounded-sm px-3 py-3 font-sans text-base text-foreground no-underline"
              onClick={() => setMobileOpen(false)}
            >
              All services
            </Link>
            {PUBLIC_AREAS.map((area) => (
              <Link
                key={area.id}
                href={area.href}
                className="rounded-sm px-3 py-3 font-sans text-base text-muted-foreground no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {area.name}
              </Link>
            ))}
            <div className="my-4 h-px bg-border" />
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Industries
            </p>
            <Link
              href="/markets"
              className="rounded-sm px-3 py-3 font-sans text-base text-foreground no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Markets
            </Link>
            <div className="my-4 h-px bg-border" />
            {mobileInstitutionalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-sm px-3 py-3 font-sans text-base text-foreground no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass + " mt-6 justify-center"}
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
