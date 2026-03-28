import Link from "next/link";

export const metadata = {
  title: "Octus Consulting — Regulatory & Operational Structuring",
  description:
    "We identify what is broken — and fix it. Regulatory, licensing and banking structuring for highly regulated markets.",
};

export default function HomePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <span className="tag-blue">Regulatory · Compliance · Structuring</span>
          <h1 className="heading-xl hero-headline">
            <span>Regulated operations don&apos;t fail randomly.</span>
            <br />
            <span className="hero-headline-dim">They fail structurally.</span>
          </h1>
          <p className="body-lg hero-sub">
            We identify what is broken — and fix it.
          </p>
          <p className="body hero-sub" style={{ marginTop: "0", marginBottom: "0" }}>
            Regulatory, licensing and banking structuring for businesses operating
            in highly regulated markets — from market entry to full-scale operation.
          </p>
          <div className="hero-actions" style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Discuss your operation →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request a diagnostic →
            </Link>
          </div>
          <p className="body-sm" style={{ marginTop: "20px", color: "var(--white-25)", fontStyle: "italic" }}>
            Diagnostic call. No generic advice. We start by identifying where
            your structure breaks.
          </p>
        </div>
      </section>

      {/* ─── PROBLEM REFRAME ──────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Most operations don&apos;t have a regulatory problem.
            <br />They have a structural one.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Licensing delays, banking failures and compliance issues are rarely
            isolated events. They are symptoms of a broken structure.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            Structural failures don&apos;t create friction.{" "}
            <span style={{ color: "var(--blue-light)" }}>They create losses.</span>
          </p>
        </div>
      </section>

      {/* ─── WE FIX ───────────────────────────────────────────────── */}
      <section className="fix-section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">What we do</p>
          <h2 className="heading-lg fix-statement">
            We fix the structure.{" "}
            <span className="fix-accent">Not just the symptom.</span>
          </h2>
          <p className="body-lg fix-body">
            We are brought in when things are already not working — licensing
            delays, banking failures, structural inconsistencies, regulatory
            pressure.
          </p>
          <p className="body fix-strong">
            We design, execute and take responsibility for the structure behind
            your operation. Your point of contact is always Octus.
          </p>
        </div>
      </section>

      {/* ─── LEAD CONTRACTOR ──────────────────────────────────────── */}
      <section className="section-blue">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "20px" }}>
            You don&apos;t need more providers.{" "}
            <span style={{ color: "var(--blue-light)" }}>You need structure.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "16px" }}>
            We act as lead contractor — coordinating the entire regulatory and
            operational structure end-to-end.
          </p>
          <p className="body">
            You don&apos;t manage multiple advisors. You fix the operation.
          </p>
        </div>
      </section>

      {/* ─── WHAT BROKEN LOOKS LIKE — 4 CARDS ────────────────────── */}
      <section className="problem-cards-section">
        <div className="container">
          <p className="label">What broken looks like in practice</p>
          <h2 className="heading-md problem-cards-title">
            Four situations. One root cause.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                tag: "Licensing",
                title: "Licensing is stuck",
                desc: "Delays, rejections or endless back-and-forth — usually structural gaps, not regulatory hostility.",
                cta: "Fix your licensing",
              },
              {
                tag: "Banking",
                title: "Banking is failing",
                desc: "Accounts rejected, closed or unstable. Structural misalignment between your operation and the bank's risk model.",
                cta: "Fix your banking",
              },
              {
                tag: "Compliance",
                title: "Compliance is not holding",
                desc: "Frameworks exist but collapse under real regulatory pressure or audit.",
                cta: "Stabilize your operation",
              },
              {
                tag: "Structure",
                title: "Structure is misaligned",
                desc: "Cross-border setup doesn't support the operation — entities, ownership and jurisdiction are out of sync.",
                cta: "Fix the structure",
              },
            ].map((c) => (
              <Link key={c.tag} href="/contact" className="card problem-card">
                <span className="chip-blue" style={{ marginBottom: "16px", display: "inline-block" }}>
                  {c.tag}
                </span>
                <h3 className="heading-card problem-card-q">{c.title}</h3>
                <p className="body problem-card-desc">{c.desc}</p>
                <span className="problem-card-link">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7 MODULES ────────────────────────────────────────────── */}
      <section className="modules-section">
        <div className="container">
          <p className="label">What we actually fix</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Seven operational modules.
          </h2>
          <p className="body-lg modules-sub">One working structure.</p>
          <div className="tile-grid grid-auto modules-grid">
            {[
              { num: "01", title: "Regulatory Structuring", desc: "We design and execute licensing strategies across jurisdictions.", tags: ["iGaming", "Fintech", "Crypto", "Payments"], href: "/regulatory" },
              { num: "02", title: "Compliance & Risk", desc: "We implement compliance that holds under regulatory pressure.", tags: ["KYC", "AML", "DPO", "GLI"], href: "/compliance" },
              { num: "03", title: "Legal & Structural Architecture", desc: "We design the legal backbone behind complex operations.", tags: ["Contracts", "Multi-jurisdiction"], href: "/legal-architecture" },
              { num: "04", title: "Corporate Structuring", desc: "We build scalable and defensible corporate structures.", tags: ["Onshore", "Offshore", "Governance"], href: "/corporate" },
              { num: "05", title: "Private Clients & UBO", desc: "We structure the individuals behind complex operations.", tags: ["UBO", "PEP", "KYC", "Residency"], href: "/private-clients" },
              { num: "06", title: "Audit & Readiness", desc: "We prepare operations for scrutiny before scrutiny arrives.", tags: ["Gap analysis", "Pre-audit"], href: "/audit" },
              { num: "07", title: "International Hub", desc: "We enable execution across jurisdictions.", tags: ["Market entry", "Cross-border"], href: "/international-hub" },
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

      {/* ─── HOW WE OPERATE ───────────────────────────────────────── */}
      <section className="operate-section">
        <div className="container">
          <div className="operate-grid">
            <div>
              <p className="label">How we operate</p>
              <h2 className="heading-md operate-title">
                Execution, not advisory.
              </h2>
              <p className="body-lg operate-body">
                Octus acts as the execution layer behind your operation —
                designing, building and stabilizing everything required for it
                to work.
              </p>
              <p className="body operate-body" style={{ marginTop: "16px" }}>
                Built in one of the most complex regulated environments —
                high-risk sectors including iGaming, fintech and crypto. We
                have been inside regulatory transitions, laboratory
                certifications, banking structures and cross-border operations
                since 2019.
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
                  {["Curaçao", "Malta", "Isle of Man", "Gibraltar", "UK", "Cyprus", "BVI", "Brazil", "Kahnawake", "Belize", "Mexico", "Panama", "Cayman"].map((j) => (
                    <span key={j} className="chip-juris">{j}</span>
                  ))}
                  <span className="chip-juris-more">+more</span>
                </div>
              </div>
            </div>
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
                tag: "iGaming · GLI",
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

      {/* ─── ENGAGEMENT MODELS ────────────────────────────────────── */}
      <section className="models-outer">
        <div className="container">
          <p className="label">How we work with you</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Every operation requires a different level of involvement.
          </h2>
          <p className="body-lg models-sub-home">Choose what fits.</p>
          <div className="grid-3 models-grid-home">
            {[
              {
                icon: "◈",
                title: "Project-based",
                sub: "Defined scope",
                body: "Fixed scope, defined deliverables and clear timeline. For licensing, market entry and corporate structuring.",
              },
              {
                icon: "◉",
                title: "Ongoing support",
                sub: "Continuous coverage",
                body: "Continuous regulatory and compliance coverage. For operations that need permanent structure — without building an internal team.",
              },
              {
                icon: "◌",
                title: "Hour package",
                sub: "Flexible access",
                body: "Pre-paid or post-paid hours. For recurring and predictable demands.",
              },
            ].map((m) => (
              <div key={m.title} className="card-lg model-card-home">
                <div className="model-icon-home">{m.icon}</div>
                <h3 className="heading-card">{m.title}</h3>
                <p className="chip-blue model-sub-home">{m.sub}</p>
                <p className="body">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="text-faint models-note-home">
            All models include direct access to the Octus team — no account
            managers, no ticket systems.
          </p>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body cta-block__sub" style={{ color: "var(--white-40)" }}>
            If your operation depends on regulatory approval, compliance
            integrity and structural stability —
          </p>
          <p className="body" style={{ color: "var(--white-60)", marginBottom: "24px" }}>
            You don&apos;t need more providers.
          </p>
          <h2 className="heading-lg cta-block__title">
            Your operation is blocked for a reason.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Discuss your operation →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
cd C:\Users\user\Desktop\Octus-site
git add .
git commit -m "Force rebuild — clear Netlify cache"
git push origin main


