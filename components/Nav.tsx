"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const whatWeDoLinks = [
  { label: "Markets", href: "/markets" },
  { label: "Jurisdictions", href: "/jurisdictions" },
  { label: "Solutions", href: "/solutions" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
          <Link href="/about" className="nav-link">About</Link>

          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="nav-link nav-link--arrow"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onClick={() => setDropdownOpen((p) => !p)}
            >
              What we do <span style={{ fontSize: "10px", opacity: 0.5 }}>▾</span>
            </button>
            {dropdownOpen && (
              <div className="nav-dropdown">
                {whatWeDoLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/insights" className="nav-link">Insights</Link>
          <Link href="/contact" className="btn-primary nav-cta">
            Discuss your structure →
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
          <Link href="/about" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/markets" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Markets</Link>
          <Link href="/jurisdictions" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Jurisdictions</Link>
          <Link href="/solutions" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link href="/insights" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Insights</Link>

          <div className="nav-mobile-cta">
            <Link href="/contact" className="btn-primary nav-mobile-cta-btn" onClick={() => setMobileOpen(false)}>
              Discuss your structure →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
