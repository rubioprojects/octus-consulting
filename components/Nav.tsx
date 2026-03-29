"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Markets", href: "/markets" },
    { label: "Jurisdictions", href: "/jurisdictions" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <Link href="/" className="nav-logo" aria-label="Octus Consulting">
          <img
            src="/logo-nav.png"
            alt="Octus Consulting"
            height={32}
            style={{ height: "32px", width: "auto", display: "block" }}
          />
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <Link href="/contact" className="btn-primary nav-cta">
            Discuss your operation →
          </Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile-drawer">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="nav-mobile-cta">
            <Link href="/contact" className="btn-primary nav-mobile-cta-btn" onClick={() => setMobileOpen(false)}>
              Discuss your operation →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
