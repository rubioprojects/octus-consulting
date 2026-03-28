import Link from 'next/link'
import { services } from '@/data/services'

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/what-we-do', label: 'What we do' },
  { href: '/brazil', label: 'Brazil' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/compliance-channel', label: 'Compliance Channel' },
]

// Social links — update X handle when recovered
const socialLinks = [
  { href: 'https://www.linkedin.com/company/octusconsulting/', label: 'in', aria: 'LinkedIn' },
  { href: 'https://www.instagram.com/octusconsulting/', label: 'ig', aria: 'Instagram' },
  // X/Twitter: update href when account is recovered
  // { href: 'https://x.com/octusconsulting', label: '𝕏', aria: 'X / Twitter' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="12" cy="16" r="10" fill="#2563EB" opacity="0.9"/>
                <circle cx="22" cy="16" r="7" fill="#3B82F6" opacity="0.7"/>
              </svg>
              <span className="footer-logo-text">Octus <span className="footer-logo-accent">Consulting</span></span>
            </Link>
            <p className="footer-tagline">
              We structure, license and stabilize operations in highly regulated markets.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-list">
              {services.map(s => (
                <li key={s.href}><Link href={s.href} className="footer-link">{s.shortTitle}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-list">
              {companyLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-list">
              {legalLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <div>© 2025 Octus Consulting. All rights reserved.</div>
            <div>Octus Technology LLC · 900 Foulk Rd Suite 201 · Wilmington, DE 19803</div>
            <div>info@octusconsulting.com · octusconsulting.com</div>
          </div>
          <div className="footer-socials">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.aria}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
