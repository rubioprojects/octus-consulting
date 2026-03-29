import Link from "next/link";

export const metadata = {
  title: "What We Do — Octus Consulting",
  description: "Seven operational modules. One working structure. Regulatory structuring, compliance, legal architecture, corporate design, ownership, audit and international hub.",
  robots: { index: false, follow: false },
};

const services = [
  { num: "01", title: "Regulatory Structuring", desc: "Jurisdiction selection, licensing strategy and regulatory pathway design for regulated operations.", href: "/regulatory" },
  { num: "02", title: "Compliance & Risk", desc: "Compliance framework design, operational rollout and ongoing compliance management.", href: "/compliance" },
  { num: "03", title: "Legal & Structural Architecture", desc: "Legal architecture coordinated across jurisdictions — ownership, governance and contractual frameworks.", href: "/legal-architecture" },
  { num: "04", title: "Corporate Structuring", desc: "Corporate architecture for regulated operations — onshore, offshore and cross-border.", href: "/corporate" },
  { num: "05", title: "Ownership & UBO", desc: "Ownership architecture and UBO structuring for individuals behind regulated operations.", href: "/private-clients" },
  { num: "06", title: "Audit & Readiness", desc: "Preparation for regulatory audit, certification and external review. Readiness before scrutiny starts.", href: "/audit" },
  { num: "07", title: "International Hub", desc: "Market entry coordination and cross-border expansion for regulated businesses.", href: "/international-hub" },
];

export default function WhatWeDoPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">What we do</span>
          <h1 className="heading-xl sp-headline">
            Seven operational modules.<br />
            <span style={{ color: "var(--white-40)" }}>One working structure.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "560px" }}>
            Octus structures and coordinates regulated operations across seven
            interconnected layers — each one designed to hold under real
            regulatory and operational pressure.
          </p>
        </div>
      </section>
      <section className="section-padded" style={{ padding: "0 40px 130px" }}>
        <div className="container">
          {services.map((s, i) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 40px", gap: "32px", alignItems: "center", padding: "32px 0", borderBottom: "1px solid var(--border)", cursor: "pointer" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)" }}>{s.num}</span>
                <div>
                  <h2 className="heading-sm" style={{ marginBottom: "6px" }}>{s.title}</h2>
                  <p className="body-sm" style={{ color: "var(--white-40)" }}>{s.desc}</p>
                </div>
                <span style={{ color: "var(--white-25)", fontSize: "18px" }}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2 className="heading-md" style={{ marginBottom: "20px" }}>Not sure where your operation fits?</h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>Start with a diagnostic. We map the structure before defining the scope.</p>
          <Link href="/contact" className="btn-primary btn-primary-lg">Request a diagnostic →</Link>
        </div>
      </section>
    </main>
  );
}
