"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const whatWeDoLinks = [
  { label: "Regulatory Structuring", href: "/regulatory" },
  { label: "Compliance & Risk", href: "/compliance" },
  { label: "Legal & Structural Architecture", href: "/legal-architecture" },
  { label: "Corporate Structuring", href: "/corporate" },
  { label: "Ownership & UBO", href: "/private-clients" },
  { label: "Audit & Readiness", href: "/audit" },
  { label: "International Hub", href: "/international-hub" },
  { label: "Team", href: "/team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWwdOpen, setMobileWwdOpen] = useState(false);

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
            height={28}
            style={{ height: "28px", width: "auto", display: "block" }}
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
                <Link href="/what-we-do" className="nav-dropdown-overview" onClick={() => setDropdownOpen(false)}>
                  Overview →
                </Link>
                <div className="nav-dropdown-divider" />
                {whatWeDoLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/brazil" className="nav-link">Brazil</Link>
          <Link href="/insights" className="nav-link">Insights</Link>
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
          <Link href="/about" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>

          <button
            className="nav-mobile-link"
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--white)", fontSize: "15px", padding: "14px 0", borderBottom: "1px solid var(--border-light)" }}
            onClick={() => setMobileWwdOpen((p) => !p)}
          >
            What we do
            <span style={{ fontSize: "10px", opacity: 0.5 }}>{mobileWwdOpen ? "▲" : "▾"}</span>
          </button>

          {mobileWwdOpen && (
            <>
              <div className="nav-mobile-section-label">Services</div>
              {whatWeDoLinks.map((l) => (
                <Link key={l.href} href={l.href} className="nav-mobile-link nav-mobile-indent" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </>
          )}

          <Link href="/brazil" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Brazil</Link>
          <Link href="/insights" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Insights</Link>

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
