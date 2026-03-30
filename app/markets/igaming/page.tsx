import Link from "next/link";

export const metadata = {
  title: "iGaming Licensing & Regulatory Structuring | Octus",
  description:
    "End-to-end regulatory structuring, licensing execution and banking coordination for iGaming and betting operators across jurisdictions.",
};

export default function MarketsIGamingPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Markets · iGaming & Betting</span>
          <h1 className="heading-xl sp-headline">
            Most iGaming operations don&apos;t fail
            <br />
            <span style={{ color: "var(--white-40)" }}>
              because of regulation.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            They fail because the structure behind the operation was wrong from
            day one. Wrong jurisdiction. Wrong entity. Wrong compliance layer.
            By the time the regulator asks questions, the damage is already done.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Get a structural diagnosis →
            </Link>
            <Link href="/solutions/regulatory/igaming-licensing" className="btn-ghost">
              See full licensing process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            The iGaming industry has a structural problem
            <br />
            <span style={{ color: "var(--blue-light)" }}>disguised as a regulatory one.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Operators spend months chasing licenses in the wrong jurisdiction.
            They get licensed — then can&apos;t open a bank account. They build
            compliance frameworks that collapse under the first real audit.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The problem is never the regulation itself. It&apos;s the gap between
            what the operator built and what the regulator, the bank, and the
            payment processor actually require.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            That gap is structural.{" "}
            <span style={{ color: "var(--blue-light)" }}>We close it.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">What Octus does for iGaming operators</p>
          <h2 className="heading-md" style={{ marginBottom: "40px" }}>
            End-to-end structuring.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not advisory.</span>
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "Licensing strategy & execution",
                desc: "We select the jurisdiction, design the structure, prepare the dossier and coordinate with the regulator. From first filing to approved license.",
              },
              {
                title: "Banking & payment access",
                desc: "Licensed but no bank account? We restructure AML documentation, align the corporate layer and coordinate directly with banks and PSPs.",
              },
              {
                title: "Compliance that holds",
                desc: "KYC, AML, responsible gaming, DPO — built to survive real scrutiny. Not a policies folder. A working compliance structure.",
              },
              {
                title: "Corporate & entity design",
                desc: "Onshore, offshore, holding structures — designed for the operation, not for the accountant. Defensible under regulatory and banking review.",
              },
              {
                title: "Lab certification readiness",
                desc: "GLI, BMM, iTech Labs — we prepare the operation for technical certification. Gap analysis, evidence register, audit coordination.",
              },
              {
                title: "Post-license stabilization",
                desc: "License approved is not the end. We stabilize the operation — compliance cycles, banking maintenance, regulatory reporting.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
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
                title: "iGaming operator — Curaçao",
                body: "Full licensing + corporate structuring + banking setup. Operational bank account open in 11 weeks after 6 months of failed attempts with previous advisors.",
              },
              {
                title: "Multi-brand sportsbook — 3 jurisdictions",
                body: "Cross-border restructuring across Brazil, Curaçao and Malta. Entity realignment, compliance harmonization and unified banking strategy.",
              },
              {
                title: "Affiliate-led betting operation",
                body: "Compliance remediation after regulatory inquiry. AML framework rebuild, evidence register reconstruction and payment processor recovery.",
              },
              {
                title: "Sports betting operator — Brazil (SPA/MF)",
                body: "Full regulatory dossier, corporate structuring and direct coordination with SPA/MF authorities for the Brazilian sports betting authorization process.",
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
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Where we operate</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Active across the jurisdictions that matter.
          </h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>
            We don&apos;t list jurisdictions to impress. We work in the markets
            where iGaming operators actually build and scale.
          </p>
          <div className="chip-row" style={{ gap: "10px", flexWrap: "wrap" }}>
            {["Brazil (SPA/MF)", "Curaçao", "Malta (MGA)", "Anjouan", "Isle of Man", "Gibraltar", "Cyprus", "UK", "Portugal", "Cayman Islands", "BVI"].map((j) => (
              <span key={j} className="chip-juris">{j}</span>
            ))}
          </div>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/jurisdictions/curacao" className="btn-ghost">
              Curaçao licensing →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SITUATIONS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Situations we resolve</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            If this sounds familiar, we can help.
          </h2>
          <div className="grid-3">
            {[
              {
                tag: "Licensing",
                title: "License stuck for months",
                body: "Application filed, no movement. Usually a structural gap in the dossier or entity setup — not regulatory hostility.",
              },
              {
                tag: "Banking",
                title: "Licensed but no bank account",
                body: "Active license, zero operational accounts. The bank\u2019s risk model doesn\u2019t match your corporate and compliance structure.",
              },
              {
                tag: "Expansion",
                title: "Entering a new market blind",
                body: "Expanding to Brazil, Malta or another jurisdiction without a clear structural path. Wrong entity, wrong compliance, wrong timeline.",
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

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Curaçao Licensing", desc: "How we structure iGaming operations in Curaçao.", href: "/jurisdictions/curacao" },
              { title: "Full Licensing Process", desc: "End-to-end licensing execution across jurisdictions.", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Compliance & Risk", desc: "The compliance framework that supports your license.", href: "/compliance" },
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
            Your iGaming operation is only as strong as the structure behind it.
          </p>
          <h2 className="heading-lg cta-block__title">
            Fix the structure before you scale.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Understand what&apos;s broken →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Diagnostic call — not a sales pitch. We start by identifying where your structure breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
