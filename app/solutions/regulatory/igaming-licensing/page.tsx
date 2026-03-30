import Link from "next/link";

export const metadata = {
  title: "iGaming Licensing Execution — From Application to Bank Account | Octus",
  description:
    "Full licensing execution for iGaming and betting operators. Jurisdiction selection, regulatory dossier, compliance structure, banking coordination and post-license stabilization.",
};

export default function SolutionsIGamingLicensingPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Regulatory · iGaming Licensing</span>
          <h1 className="heading-xl sp-headline">
            Getting an iGaming license is not the problem.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Getting one that actually works is.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            A license without the right corporate structure, compliance
            framework and banking access is a piece of paper. We deliver the
            full structure — not just the application.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Fix your structure before you scale →
            </Link>
            <Link href="/markets/igaming" className="btn-ghost">
              iGaming operations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Why most licensing projects fail.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Operators hire a lawyer to file the application. The lawyer files
            it. Six months later, the license is approved — and the operator
            discovers they can&apos;t open a bank account, their compliance
            framework doesn&apos;t meet real audit standards, and their
            corporate structure is incompatible with the payment processors
            they need.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The license worked. Everything around it didn&apos;t.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            Licensing is not a legal task.{" "}
            <span style={{ color: "var(--blue-light)" }}>It&apos;s a structural one.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DELIVER ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">What Octus delivers</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Full licensing execution.
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", maxWidth: "620px", color: "var(--white-60)" }}>
            From jurisdiction selection to post-license stabilization. One
            point of contact. One coordinated structure.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Jurisdiction selection & risk mapping",
                body: "We assess your operation, target markets, ownership structure and commercial objectives. We select the jurisdiction that fits — or tell you why your current choice doesn\u2019t.",
              },
              {
                step: "02",
                title: "Regulatory strategy & licensing roadmap",
                body: "We design the regulatory path — timeline, milestones, entity requirements, compliance obligations. No ambiguity on what needs to happen and when.",
              },
              {
                step: "03",
                title: "Corporate & entity structuring",
                body: "The entity behind the license must be designed for both the regulator and the banking layer. We structure ownership, governance and UBO disclosure to pass both reviews.",
              },
              {
                step: "04",
                title: "Full licensing dossier",
                body: "We prepare the complete regulatory application — documentation, compliance framework, AML policies, technical requirements, business plan, financial projections.",
              },
              {
                step: "05",
                title: "Regulatory coordination & submission",
                body: "We handle the submission and manage the relationship with the regulator. Questions, amendments, additional requirements — all coordinated through Octus.",
              },
              {
                step: "06",
                title: "Compliance structure (pre-launch)",
                body: "Before the license is active, the compliance framework must be operational. KYC/AML, responsible gaming, DPO, internal controls — built to survive real scrutiny.",
              },
              {
                step: "07",
                title: "Banking & payment coordination",
                body: "We align the corporate and compliance structure with banking requirements and coordinate with banks and payment providers. Licensed and bankable.",
              },
              {
                step: "08",
                title: "Lab & certification readiness",
                body: "GLI, BMM, iTech Labs — we prepare the technical compliance layer. Gap analysis, evidence register, coordination with testing laboratories.",
              },
              {
                step: "09",
                title: "Post-license stabilization",
                body: "License approved is the beginning. We stabilize compliance cycles, regulatory reporting, banking maintenance and operational readiness.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "28px 0",
                  borderBottom: i < 8 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unigeo), Unigeo64, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--blue-light)",
                    paddingTop: "4px",
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "Curaçao — license + banking in one process",
                body: "Full licensing dossier, entity structuring, compliance framework and banking coordination delivered as a single project. License approved and bank account operational before launch.",
              },
              {
                title: "Brazil (SPA/MF) — sports betting authorization",
                body: "Complete regulatory dossier, corporate structuring and direct interaction with SPA/MF authorities for the Brazilian sports betting authorization process.",
              },
              {
                title: "Multi-jurisdiction — 3 licenses, unified structure",
                body: "Coordinated licensing across Curaçao, Malta and Brazil with harmonized compliance framework and centralized banking strategy.",
              },
              {
                title: "GLI audit — zero critical findings",
                body: "Full gap analysis, evidence register and readiness pack delivered in 6 weeks. Client entered GLI audit with complete documentation and zero critical findings.",
              },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <h3 className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>
                  {m.title}
                </h3>
                <p className="body" style={{ color: "var(--white-60)" }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JURISDICTIONS ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Active iGaming licensing jurisdictions</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Where we execute.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                jurisdiction: "Brazil (SPA/MF)",
                desc: "Sports betting authorization under the new regulatory framework. Full structuring for the Brazilian market.",
                timeline: "6–12 months",
              },
              {
                jurisdiction: "Curaçao",
                desc: "iGaming and betting licensing under the new GCB framework. Entity, compliance and banking in one coordinated process.",
                timeline: "3–6 months",
              },
              {
                jurisdiction: "Malta (MGA)",
                desc: "B2C and B2B licensing. Full regulatory dossier, compliance framework and operational setup for the European market.",
                timeline: "6–12 months",
              },
              {
                jurisdiction: "Anjouan",
                desc: "Fast-track licensing for operators targeting specific markets. Corporate structuring and compliance alignment included.",
                timeline: "2–4 months",
              },
              {
                jurisdiction: "Isle of Man",
                desc: "Tier-1 jurisdiction for operators requiring premium regulatory positioning. Full structuring and banking coordination.",
                timeline: "6–12 months",
              },
              {
                jurisdiction: "Gibraltar",
                desc: "B2B and B2C licensing. Structured for operators with European and UK-facing operations.",
                timeline: "6–12 months",
              },
            ].map((j) => (
              <div key={j.jurisdiction} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{j.jurisdiction}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{j.desc}</p>
                <p className="label" style={{ fontSize: "10px" }}>Typical timeline: {j.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOT JUST LEGAL ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            This is not a legal service.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            A lawyer files applications. We structure operations.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            The difference is that when you work with Octus, the licensing
            process is coordinated with the corporate structure, the compliance
            framework, the banking layer and the payment infrastructure — from
            day one. Not as separate workstreams managed by different providers.
            As one integrated structure.
          </p>
          <p className="body">
            Your point of contact is always Octus. We coordinate everything
            behind the structure — regulatory, legal, compliance, banking. You
            fix the operation. We make sure it&apos;s built right.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "iGaming Operations", desc: "Market-level view of how we work with iGaming operators.", href: "/markets/igaming" },
              { title: "Curaçao Licensing", desc: "How we structure operations in Curaçao specifically.", href: "/jurisdictions/curacao" },
              { title: "Audit & Readiness", desc: "Prepared for scrutiny before it arrives.", href: "/audit" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If your operation depends on an iGaming license —
          </p>
          <h2 className="heading-lg cta-block__title">
            Don&apos;t just get licensed.{" "}
            <span style={{ color: "var(--blue-light)" }}>Get structured.</span>
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Understand what&apos;s broken →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
