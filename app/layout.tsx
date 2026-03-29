import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Nav from "../components/Nav";
import CookieBanner from "../components/CookieBanner";
import "../styles/globals.css";

const unigeo = localFont({
  src: [
    { path: "../public/fonts/Unigeo64-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Unigeo64-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Unigeo64-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Unigeo64-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Unigeo64-Extrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-unigeo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Octus Consulting — Regulatory & Operational Structuring",
    template: "%s — Octus Consulting",
  },
  description:
    "We structure and operate regulated businesses across jurisdictions. Licensing, compliance, corporate architecture and operational execution for complex international markets.",
  metadataBase: new URL("https://octusconsulting.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Octus Consulting — Regulatory & Operational Structuring",
    description: "We structure and operate regulated businesses across jurisdictions. Licensing, compliance, corporate architecture and operational execution for complex international markets.",
    url: "https://octusconsulting.com",
    siteName: "Octus Consulting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Octus Consulting" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octus Consulting",
    description: "We structure and operate regulated businesses across jurisdictions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unigeo.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}

        {/* ─── WHATSAPP FLOATING CTA ─── */}
        <a
          href="https://wa.me/5511974273000?text=Hello%2C%20I%27d%20like%20an%20initial%20strategic%20assessment%20regarding%20a%20regulated%20or%20cross-border%20operation."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Talk on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="wa-float__label">Talk on WhatsApp</span>
        </a>

        <CookieBanner />
        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo" aria-label="Octus Consulting">
                <img
                  src="/logo-nav.png"
                  alt="Octus Consulting"
                  height={24}
                  style={{ height: "24px", width: "auto", display: "block" }}
                />
              </a>
              <p className="footer-tagline">
                Structuring, coordinating and operating regulated businesses
                across jurisdictions.
              </p>
              <div className="footer-socials" style={{ marginTop: "8px", display: "flex", gap: "12px" }}>
                <a href="https://www.linkedin.com/company/octusconsulting/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--white-40)", display: "flex", alignItems: "center" }} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/octusconsulting/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--white-40)", display: "flex", alignItems: "center" }} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <p className="footer-col-title">Explore</p>
              <ul className="footer-list">
                {[
                  { label: "Markets", href: "/markets" },
                  { label: "Jurisdictions", href: "/jurisdictions" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "About", href: "/about" },
                  { label: "Team", href: "/team" },
                  { label: "Insights", href: "/insights" },
                  { label: "Careers", href: "/careers" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Solutions</p>
              <ul className="footer-list">
                {[
                  { label: "Regulatory & Licensing", href: "/solutions" },
                  { label: "Compliance & Risk", href: "/solutions" },
                  { label: "Corporate Structuring", href: "/solutions" },
                  { label: "Operational Implementation", href: "/solutions" },
                  { label: "Request an assessment", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Legal</p>
              <ul className="footer-list">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Use", href: "/terms" },
                  { label: "Cookie Policy", href: "/cookies" },
                  { label: "Compliance Channel", href: "/compliance-channel" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <div className="footer-legal">
              <p>© 2026 Octus Consulting. All rights reserved.</p>
              <p style={{ marginTop: "4px" }}>
                Octus Technology LLC · 900 Foulk Rd Suite 201 · Wilmington, DE 19803
              </p>
              <p style={{ marginTop: "4px" }}>
                <a href="mailto:info@octusconsulting.com" className="footer-link" style={{ display: "inline" }}>
                  info@octusconsulting.com
                </a>{" "}
                ·{" "}
                <a
                  href="https://wa.me/5511974273000?text=Hello%2C%20I%27d%20like%20to%20start%20a%20diagnostic%20with%20Octus%20regarding%20a%20regulated%20operation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: "inline" }}
                >
                  WhatsApp
                </a>{" "}
                ·{" "}
                <a href="https://octusconsulting.com" className="footer-link" style={{ display: "inline" }}>
                  octusconsulting.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
