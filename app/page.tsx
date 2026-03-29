import Link from "next/link";

export const metadata = {
  title: "Octus Consulting — Regulatory & Operational Structuring",
  description:
    "We structure and operate regulated businesses across jurisdictions. Licensing, compliance, corporate architecture and operational execution for complex international markets.",
};

export default function HomePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <img src="/logo-symbol.png" alt="" className="hero-watermark" aria-hidden="true" />
        <div className="hero-inner">
          <span className="tag-blue">Regulatory · Compliance · Structuring</span>
          <h1 className="heading-xl hero-headline">
            <span>Execution layer for regulated</span>
            <br />
            <span className="hero-headline-dim">and cross-border operations.</span>
          </h1>
          <p className="body-lg hero-sub">
            Licensing, compliance and operational structuring across multiple jurisdictions.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a diagnostic →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AUTHORITY + CREDENTIALS (unified block) ──────────────── */}
      <div className="authority-block">
        <div className="authority-strip">
          <div className="authority-strip__inner">
            <span className="authority-strip__item">Active across <strong>15+</strong> jurisdictions</span>
            <span className="authority-strip__sep" />
            <span className="authority-strip__item">Structured operations since <strong>2019</strong></span>
            <span className="authority-strip__sep" />
            <span className="authority-strip__item">First assessment within <strong>48h</strong></span>
          </div>
        </div>
        <div className="credential-block">
          <div className="credential-block__inner">
            <div className="credential-primary">
              <img src="/seals/exin-dpo.png" alt="EXIN Data Protection Officer Certified" className="credential-primary__img" />
              <p className="credential-primary__label">Certified data protection capability (EXIN)</p>
            </div>
            <div className="credential-secondary">
              <p className="credential-secondary__label">Aligned with regulatory and compliance frameworks</p>
              <div className="credential-secondary__row">
                <img src="/seals/gdpr.png" alt="GDPR" className="credential-secondary__img" />
                <img src="/seals/lgpd.png" alt="LGPD" className="credential-secondary__img" />
                <img src="/seals/esg.png" alt="ESG" className="credential-secondary__img" />
                <img src="/seals/diversity.png" alt="Diversity & Inclusion" className="credential-secondary__img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MARKETS ─────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <p className="label">Where we operate</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Markets where regulation defines viability.
          </h2>
          <p className="body-lg" style={{ marginBottom: "56px", maxWidth: "640px" }}>
            We operate where licensing, banking, compliance and corporate
            structure directly affect whether a business can function.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                market: "iGaming",
                desc: "Licensing, certification readiness, PSP structure, post-license governance and cross-border operations.",
                tags: ["Licensing", "GLI", "PSP", "Governance"],
              },
              {
                market: "Fintech",
                desc: "Licensing strategy, payment rails, compliance framework, corporate design and regulatory coordination.",
                tags: ["Licensing", "Payments", "Compliance", "Bacen"],
              },
              {
                market: "Crypto & VASP",
                desc: "VASP registration, AML structuring, corporate architecture and banking access for digital asset operations.",
                tags: ["VASP", "AML", "Corporate", "Banking"],
              },
              {
                market: "Cross-border Structures",
                desc: "Multi-jurisdiction corporate design, ownership structuring, tax alignment and operational coordination.",
                tags: ["Corporate", "UBO", "Multi-jurisdiction"],
              },
            ].map((m) => (
              <Link key={m.market} href="/markets" className="card market-card">
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--white)" }}>{m.market}</h3>
                <p className="body-sm" style={{ marginBottom: "16px" }}>{m.desc}</p>
                <div className="chip-row">
                  {m.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED JURISDICTIONS ──────────────────────────────── */}
      <section className="section-dark" style={{ position: "relative", overflow: "hidden" }}>
        <img src="/logo-symbol.png" alt="" className="section-watermark section-watermark--right" aria-hidden="true" />
        <div className="container">
          <p className="label">Strategic jurisdictions</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Jurisdictions are not paperwork.{" "}
            <span style={{ color: "var(--blue-light)" }}>They are strategic infrastructure.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "56px", maxWidth: "680px" }}>
            The right jurisdiction shapes licensing pathways, banking access,
            compliance obligations, ownership logic and operational resilience.
          </p>
          <div className="grid-3 juris-featured-grid">
            {[
              { name: "Curaçao", thesis: "Gaming licensing, post-licensing, supplier structures", caps: ["Licensing", "Post-license", "Banking"] },
              { name: "Malta (MGA)", thesis: "EU-regulated gaming, corporate governance, compliance", caps: ["MGA licensing", "Compliance", "Corporate"] },
              { name: "UAE / Dubai", thesis: "Corporate setup, group structuring, regional access", caps: ["Corporate setup", "VASP", "Market entry"] },
              { name: "Delaware / US", thesis: "Holding structures, corporate architecture, governance", caps: ["Corporate", "Governance", "Structuring"] },
              { name: "Portugal", thesis: "EU market access, residency, corporate structuring", caps: ["Licensing", "EU access", "Corporate"] },
              { name: "Brazil", thesis: "Licensing under SPA/MF, regulatory transition, operational readiness", caps: ["SPA/MF", "Compliance", "Corporate"] },
            ].map((j) => (
              <Link key={j.name} href="/jurisdictions" className="card juris-card">
                <h3 className="heading-card" style={{ marginBottom: "6px" }}>{j.name}</h3>
                <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "14px", fontStyle: "italic" }}>{j.thesis}</p>
                <div className="chip-row">
                  {j.caps.map((c) => (
                    <span key={c} className="chip-blue" style={{ fontSize: "10px", padding: "3px 10px" }}>{c}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/jurisdictions" className="btn-ghost">
              Explore all jurisdictions →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LEAD CONTRACTOR ──────────────────────────────────────── */}
      <section className="section-blue">
        <div className="container">
          <div className="lead-contractor-grid">
            <div>
              <p className="label">How we operate</p>
              <h2 className="heading-md" style={{ marginBottom: "20px" }}>
                One operation. Multiple layers.{" "}
                <span style={{ color: "var(--blue-light)" }}>One control point.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                Octus acts as lead contractor — coordinating the entire regulatory
                and operational structure end-to-end.
              </p>
              <p className="body">
                You don&apos;t manage multiple advisors. You fix the operation.
              </p>
            </div>
            <div className="lead-contractor-visual">
              <div className="lead-contractor-layer">
                <span className="lead-contractor-dot lead-contractor-dot--active" />
                <span className="body-sm" style={{ color: "var(--white)" }}>Octus — single point of contact</span>
              </div>
              <div className="lead-contractor-branch">
                <div className="lead-contractor-layer">
                  <span className="lead-contractor-dot" />
                  <span className="body-sm">Regulatory layer</span>
                </div>
                <div className="lead-contractor-layer">
                  <span className="lead-contractor-dot" />
                  <span className="body-sm">Compliance layer</span>
                </div>
                <div className="lead-contractor-layer">
                  <span className="lead-contractor-dot" />
                  <span className="body-sm">Legal layer</span>
                </div>
                <div className="lead-contractor-layer">
                  <span className="lead-contractor-dot" />
                  <span className="body-sm">Banking &amp; corporate layer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ────────────────────────────────────────────── */}
      <section className="modules-section">
        <div className="container">
          <p className="label">Execution capabilities</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Four pillars. One working structure.
          </h2>
          <p className="body-lg modules-sub">
            Consolidated capabilities across every regulated operation.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                num: "01",
                title: "Regulatory & Licensing",
                desc: "We design and execute licensing strategies across jurisdictions — from application to post-license operations.",
                tags: ["iGaming", "Fintech", "Crypto", "Payments"],
                href: "/solutions",
              },
              {
                num: "02",
                title: "Compliance & Risk",
                desc: "We structure compliance that holds under regulatory pressure, audit and real operational scrutiny.",
                tags: ["KYC", "AML", "DPO", "GLI", "GDPR"],
                href: "/solutions",
              },
              {
                num: "03",
                title: "Corporate Structuring",
                desc: "We build scalable and defensible corporate structures — onshore, offshore and cross-border.",
                tags: ["Governance", "UBO", "Multi-jurisdiction"],
                href: "/solutions",
              },
              {
                num: "04",
                title: "Operational Implementation",
                desc: "We coordinate banking, payment infrastructure and operational readiness across markets.",
                tags: ["Banking", "PSP", "Market entry"],
                href: "/solutions",
              },
            ].map((m) => (
              <Link key={m.num} href={m.href} className="card-grid module-card">
                <p className="label module-num">{m.num}</p>
                <h3 className="heading-card module-title">{m.title}</h3>
                <p className="body-sm module-desc">{m.desc}</p>
                <div className="chip-row module-chips">
                  {m.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <span className="module-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="cases-section">
        <div className="container">
          <p className="label cases-eyebrow">Real situations. Real outcomes.</p>
          <h2 className="heading-md cases-title">Not theory.</h2>
          <p className="body-lg cases-sub">Real operations under pressure.</p>
          <div className="grid-3 cases-grid">
            {[
              {
                tag: "iGaming · Curaçao",
                title: "License active.\nNo bank account.",
                body: "Active Curaçao license for 6 months, no operational account. We restructured the documentation, aligned AML policies and coordinated with three banks simultaneously. Account open in 11 weeks.",
              },
              {
                tag: "Fintech · Brazil",
                title: "International operator.\nNew regulated market.",
                body: "We coordinated full corporate structuring, regulatory dossier and direct interaction with SPA/MF authorities for the Brazilian sports betting authorization process.",
              },
              {
                tag: "Compliance · Audit readiness",
                title: "GLI audit scheduled.\nNo evidence organized.",
                body: "Full gap analysis, evidence register and readiness pack delivered in 6 weeks. Client entered audit with complete documentation and zero critical findings.",
              },
            ].map((c) => (
              <div key={c.tag} className="card-lg case-card">
                <span className="case-tag">{c.tag}</span>
                <h3 className="heading-sm case-title">{c.title}</h3>
                <p className="body case-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">
            Discuss your structure before it becomes a bottleneck.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a diagnostic →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
