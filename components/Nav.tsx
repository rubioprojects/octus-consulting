'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { services } from '@/data/services'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className={`nav${scrolled || mobileOpen ? ' nav--scrolled' : ''}`}>
        <Link href="/" onClick={closeMobile} className="nav-logo">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="12" cy="16" r="10" fill="#2563EB" opacity="0.9"/>
            <circle cx="22" cy="16" r="7" fill="#3B82F6" opacity="0.7"/>
          </svg>
          <span className="nav-logo-text">
            Octus <span className="nav-logo-accent">Consulting</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="nav-links">
          <Link href="/about" className="nav-link">About</Link>
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <Link href="/what-we-do" className="nav-link nav-link--arrow">
              What we do
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </Link>
            {dropOpen && (
              <div className="nav-dropdown">
                <Link href="/what-we-do" className="nav-dropdown-overview">Overview — All services ↗</Link>
                <div className="nav-dropdown-divider" />
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="nav-dropdown-item">{s.title}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/insights" className="nav-link">Insights</Link>
          <Link href="/#contact" className="btn-primary nav-cta">Start a diagnostic →</Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen
            ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-mobile-drawer" role="dialog" aria-label="Navigation menu">
          <Link href="/about" className="nav-mobile-link" onClick={closeMobile}>About</Link>
          <Link href="/what-we-do" className="nav-mobile-link nav-mobile-featured" onClick={closeMobile}>What we do — Overview</Link>
          <div className="nav-mobile-section-label">Services</div>
          {services.map(s => (
            <Link key={s.href} href={s.href} className="nav-mobile-link nav-mobile-indent" onClick={closeMobile}>{s.title}</Link>
          ))}
          <Link href="/insights" className="nav-mobile-link" onClick={closeMobile}>Insights</Link>
          <div className="nav-mobile-cta">
            <Link href="/#contact" className="btn-primary nav-mobile-cta-btn" onClick={closeMobile}>Start a diagnostic →</Link>
          </div>
        </div>
      )}
    </>
  )
}
