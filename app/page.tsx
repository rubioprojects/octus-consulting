import Link from "next/link";

export const metadata = {
  title: "Octus Consulting — Regulatory & Operational Structuring",
  description:
    "We design and operate regulatory infrastructure for high-risk and regulated businesses.",
};

const moduleRows = [
  {
    num: "01",
    title: "Regulatory Structuring",
    href: "/regulatory",
    featured: [
      { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
      { label: "Fintech Licensing", href: "/solutions/regulatory/fintech-licensing" },
      { label: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
    ],
  },
  {
    num: "02",
    title: "Compliance & Risk",
    href: "/compliance",
    featured: [
      { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
      { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
      { label: "AML/KYC", href: "/solutions/compliance/aml-kyc" },
      { label: "GLI Readiness", href: "/solutions/compliance/gli-readiness" },
    ],
  },
  { num: "03", title: "Legal Architecture", href: "/legal-architecture", featured: [] },
  {
    num: "04",
    title: "Corporate Structuring",
    href: "/corporate",
    featured: [
      { label: "Company Formation", href: "/solutions/corporate/company-formation" },
      { label: "Offshore Structuring", href: "/solutions/corporate/offshore-structuring" },
      { label: "Holding Design", href: "/solutions/corporate/holding-design" },
    ],
  },
  { num: "05", title: "Ownership & UBO Architecture", href: "/private-clients", featured: [] },
  { num: "06", title: "Audit & Readiness", href: "/audit", featured: [] },
  { num: "07", title: "International Hub", href: "/international-hub", featured: [] },
];

const testimonials = [
  {
    quote:
      "Octus restructured what three other firms could not. Banking resolved in weeks, after months of failed attempts.",
    name: "Available on request",
    sector: "iGaming operator",
  },
  {
    quote:
      "The diagnostic exposed structural gaps we were about to submit with. Fixing them avoided a failed licensing process.",
    name: "Available on request",
    sector: "Fintech founder",
  },
  {
    quote:
      "We thought we had compliance. We had documentation. Octus built an operational system.",
    name: "Available on request",
    sector: "Crypto platform",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <span className="tag-blue">Regulated Operations</span>
          <h1 className="heading-xl hero-headline">
            <span>We design and operate regulatory infrastructure</span>
            <br />
            <span className="hero-headline-dim">for high-risk and regulated businesses.</span>
          </h1>
          <p className="body-lg hero-sub" style={{ maxWidth: "760px", marginBottom: "12px" }}>
            Licensing, compliance and banking don&apos;t fail in isolation.
            They break when the structure behind them does not hold.
          </p>
          <p className="body-lg hero-sub" style={{ color: "var(--white)", fontWeight: 500 }}>
            We fix that. Structurally.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Discuss your structure →
            </Link>
            <Link href="/diagnostic" className="btn-ghost">
              Run a regulatory diagnostic →
            </Link>
          </div>
        </div>
      </section>

      <div className="authority-strip">
        <div className="authority-strip__inner">
          <span className="authority-strip__item"><strong>15+</strong> jurisdictions</span>
          <span className="authority-strip__sep" />
          <span className="authority-strip__item">Operating since <strong>2019</strong></span>
          <span className="authority-strip__sep" />
          <span className="authority-strip__item"><strong>48h</strong> first response</span>
          <span className="authority-strip__sep" />
          <span className="authority-strip__item"><strong>7</strong> operational modules</span>
        </div>
      </div>

      <section className="problem-cards-section">
        <div className="container">
          <p className="label">What we fix</p>
          <h2 className="heading-md problem-cards-title">What we fix.</h2>
          <div style={{ maxWidth: "760px", marginBottom: "40px" }}>
            <p className="body-lg" style={{ marginBottom: "18px" }}>
              Licences get approved but banking fails. Compliance exists but does not function. Payment providers exit. Growth exposes structural weaknesses.
            </p>
            <p className="body">
              Operations don&apos;t break because of regulation. They break because they are not built to operate under it.
            </p>
          </div>
          <div className="grid-auto-lg">
            {[
              {
                tag: "Licensing",
                title: "Licensing approved. Banking blocked.",
                desc: "The licence exists but no bank will onboard the operation. Corporate structure and compliance documentation do not meet banking requirements.",
              },
              {
                tag: "Compliance",
                title: "Compliance exists on paper.",
                desc: "Policies are drafted but not operational. Audits expose gaps. Regulators ask questions the team cannot answer.",
              },
              {
                tag: "Payments",
                title: "Payment infrastructure fails under growth.",
                desc: "Single PSP dependency. No redundancy. One termination halts operations.",
              },
              {
                tag: "Expansion",
                title: "Structure does not scale across jurisdictions.",
                desc: "What worked in one market breaks in the next. Corporate design, compliance and banking are not coordinated across borders.",
              },
            ].map((c) => (
              <div key={c.title} className="card problem-card">
                <span className="chip-blue" style={{ marginBottom: "16px", display: "inline-block" }}>
                  {c.tag}
                </span>
                <h3 className="heading-card problem-card-q">{c.title}</h3>
                <p className="body problem-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-blue">
        <div className="container">
          <p className="label">How we work</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            A structural approach to regulated operations.
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", color: "var(--white-60)" }}>
            This is how we approach regulated operations.
          </p>
          <div className="grid-3">
            {[
              {
                title: "Structuring",
                body: "Licensing, jurisdiction and corporate design aligned with regulatory exposure.",
                links: [
                  { label: "Regulatory", href: "/regulatory" },
                  { label: "Corporate", href: "/corporate" },
                  { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
                ],
              },
              {
                title: "Regulatory Operations",
                body: "Compliance systems that operate continuously, not periodically.",
                links: [
                  { label: "Compliance", href: "/compliance" },
                  { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
                  { label: "AML/KYC", href: "/solutions/compliance/aml-kyc" },
                ],
              },
              {
                title: "Control",
                body: "Execution of critical regulatory functions, including DPO and oversight roles.",
                links: [
                  { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
                  { label: "Audit", href: "/audit" },
                ],
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm" style={{ marginBottom: "18px" }}>{item.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 14px" }}>
                  {item.links.map((link) => (
                    <Link key={link.href} href={link.href} style={{ color: "var(--blue-light)", fontSize: "12px", textDecoration: "none" }}>
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <div className="container">
          <p className="label">Industries</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>Where we operate.</h2>
          <div className="grid-auto-lg">
            {[
              ["iGaming & Betting", "Licensing, compliance, banking, post-license operations", "/markets/igaming"],
              ["Fintech & Payments", "EMI licensing, payment infrastructure, cross-border compliance", "/markets/fintech"],
              ["Crypto & Digital Assets", "CASP/VASP licensing, MiCA compliance, banking access", "/markets/crypto"],
              ["High-Risk Operations", "Banking resilience, enhanced compliance, institutional access", "/markets/high-risk"],
            ].map(([title, desc, href]) => (
              <Link key={title} href={href} className="card-grid" style={{ padding: "28px", textDecoration: "none" }}>
                <h3 className="heading-card" style={{ marginBottom: "10px" }}>{title}</h3>
                <p className="body-sm" style={{ marginBottom: "14px" }}>{desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "12px" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <p className="label">Outcomes</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>What this structure allows.</h2>
          <div className="grid-2" style={{ gap: "20px 40px" }}>
            {[
              "Banking continuity under pressure",
              "Regulatory positioning across jurisdictions",
              "Scalable operations without structural failure",
              "Reduced dependency on single providers",
            ].map((item) => (
              <div key={item} style={{ paddingBottom: "16px", borderBottom: "1px solid var(--border)" }}>
                <p className="body" style={{ color: "var(--white)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modules-section">
        <div className="container">
          <p className="label">Explore</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 16px", marginBottom: "20px" }}>
            {[
              { label: "Markets", href: "/markets" },
              { label: "Jurisdictions", href: "/jurisdictions" },
              { label: "Solutions", href: "/solutions" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ color: "var(--blue-light)", fontSize: "12px", textDecoration: "none" }}>
                {item.label} →
              </Link>
            ))}
          </div>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>Seven operational modules.</h2>
          <div className="home-module-list">
            {moduleRows.map((module) => (
              <div key={module.num} className="home-module-row">
                <div className="home-module-main">
                  <span className="label" style={{ color: "var(--blue-light)" }}>{module.num}</span>
                  <Link href={module.href} className="home-module-link">
                    {module.title} →
                  </Link>
                </div>
                {module.featured.length > 0 && (
                  <div className="home-module-featured">
                    {module.featured.map((item, index) => (
                      <span key={item.href}>
                        {index > 0 && <span style={{ color: "var(--white-25)" }}> · </span>}
                        <Link href={item.href} className="home-module-featured-link">
                          {item.label}
                        </Link>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="operate-section">
        <div className="container">
          <div className="operate-grid">
            <div>
              <p className="label">How we operate</p>
              <h2 className="heading-md operate-title">Execution, not advisory.</h2>
              <p className="body-lg operate-body">
                Octus acts as the execution layer behind your operation. We align licensing, compliance, banking and structure under one point of contact.
              </p>
              <p className="body operate-body" style={{ marginTop: "16px" }}>
                Built in iGaming and applied across fintech, crypto and other regulated sectors since 2019.
              </p>
            </div>
            <div>
              <div className="grid-2 operate-stats" style={{ gap: "1px", background: "var(--border)", borderRadius: "12px", overflow: "hidden" }}>
                {[
                  { num: "15+", label: "Jurisdictions" },
                  { num: "2019", label: "Operating since" },
                  { num: "48h", label: "First response" },
                  { num: "7", label: "Operational modules" },
                ].map((s) => (
                  <div key={s.num} className="card operate-stat" style={{ borderRadius: "0", border: "none" }}>
                    <p className="stat-num">{s.num}</p>
                    <p className="stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="juris-strip operate-juris" style={{ marginTop: "16px" }}>
                <p className="juris-strip-label">Active jurisdictions</p>
                <div className="chip-row">
                  <span className="chip-juris">Brazil (SPA/MF)</span>
                  <span className="chip-juris">UK</span>
                  <Link href="/jurisdictions/malta" className="chip-juris chip-juris-link">Malta (MGA)</Link>
                  <span className="chip-juris">Cyprus</span>
                  <span className="chip-juris">BVI</span>
                  <Link href="/jurisdictions/portugal" className="chip-juris chip-juris-link">Portugal</Link>
                  <Link href="/jurisdictions/curacao" className="chip-juris chip-juris-link">Curaçao (GCB)</Link>
                  <Link href="/jurisdictions/uae" className="chip-juris chip-juris-link">UAE</Link>
                  <span className="chip-juris">Cayman Islands</span>
                  <span className="chip-juris">Mexico</span>
                  <span className="chip-juris">Panama</span>
                  <Link href="/jurisdictions/isle-of-man" className="chip-juris chip-juris-link">Isle of Man</Link>
                  <span className="chip-juris">Gibraltar</span>
                  <span className="chip-juris-more">+more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="cases-section">
        <div className="container">
          <p className="label cases-eyebrow">Selected mandates.</p>
          <h2 className="heading-md cases-title">Selected mandates.</h2>
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

      <section className="models-outer">
        <div className="container">
          <p className="label">How we work with you</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Every operation requires a different level of involvement.
          </h2>
          <div className="home-engagement-list">
            {[
              ["Project", "Fixed scope for licensing or market entry"],
              ["Ongoing", "Continuous regulatory and compliance coverage"],
              ["Hour Package", "Pre-paid hours for recurring demands"],
            ].map(([title, body]) => (
              <div key={title} className="home-engagement-row">
                <p className="body"><strong>{title}</strong> — {body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Trusted where structure matters</p>
          <div className="grid-3">
            {testimonials.map((item) => (
              <div
                key={item.quote}
                className="card-lg"
                style={{
                  padding: "32px",
                  background: "rgba(11, 15, 22, 0.92)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="body-lg"
                  style={{
                    marginBottom: "20px",
                    fontStyle: "italic",
                    color: "var(--white)",
                    lineHeight: 1.7,
                  }}
                >
                  "{item.quote}"
                </p>
                <p className="body-sm" style={{ marginBottom: "4px", color: "var(--white)" }}>
                  {item.name}
                </p>
                <p className="body-sm" style={{ color: "var(--white-40)" }}>
                  {item.sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "20px" }}>This is not for everyone.</h2>
          <p className="body-lg" style={{ marginBottom: "16px" }}>
            We don&apos;t work on short-term strategies, regulatory arbitrage or experimental setups.
          </p>
          <p className="body" style={{ marginBottom: "12px" }}>
            If you are looking for a workaround, this will not work.
          </p>
          <p className="body" style={{ marginBottom: "12px", color: "var(--white)" }}>
            If you are building something real, it will.
          </p>
          <p className="body">
            This is for operators building real businesses under regulatory and operational constraints.
          </p>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body cta-block__sub" style={{ color: "var(--white-40)" }}>
            If your business depends on approval, it will eventually fail.
            <br />
            If it is designed to operate, it can scale.
          </p>
          <h2 className="heading-lg cta-block__title">
            If your structure breaks, your operation stops.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Discuss your structure →
          </Link>
        </div>
      </section>
    </main>
  );
}
