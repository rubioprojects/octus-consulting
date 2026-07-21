"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../lib/cta";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
];

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

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center border-b border-border/60 bg-background/95 backdrop-blur-md md:h-20"
        aria-label="Main"
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center no-underline" aria-label="Octus Consulting">
            <img
              src="/logo-nav-light.png"
              alt="Octus Consulting"
              width={200}
              height={48}
              decoding="async"
              className="h-8 w-auto md:h-10"
              style={{ imageRendering: "auto" }}
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-muted-foreground no-underline transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-medium text-primary-foreground no-underline transition-colors hover:bg-primary/90"
            >
              {CTA_DISCUSS_LABEL}
            </a>
          </div>

          <button
            type="button"
            className="flex border-0 bg-transparent p-2 text-foreground md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
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
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background px-4 pb-12 pt-4 sm:px-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block border-b border-border py-4 font-sans text-sm text-foreground no-underline transition-colors hover:text-primary"
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
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-medium text-primary-foreground no-underline transition-colors hover:bg-primary/90"
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
