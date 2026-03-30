import Link from "next/link";

export const metadata = {
  title: "Curaçao Gaming License — Structured Entry Framework | Octus",
  description:
    "Licensing, corporate structuring and banking coordination for iGaming operators in Curaçao. Structured framework under the evolving regulatory landscape.",
};

export default function JurisdictionsCuracaoPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Jurisdictions · Curaçao</span>
          <h1 className="heading-xl sp-headline">
            Curaçao Gaming License.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Suitable for scalable operations, not short-term setups.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            A structured and evolving licensing framework for operators seeking
            a balance between speed, cost and regulatory positioning. Not a
            shortcut. A strategic entry point.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request strategic assessment →
            </Link>
            <Link href="/markets/igaming" className="btn-ghost">
              iGaming operations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REGULATORY EVOLUTION ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Curaçao is no longer just a fast-entry jurisdiction.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Curaçao has transitioned into a more structured regulatory framework
            under recent reforms, introducing stronger oversight, clearer
            licensing processes and higher compliance expectations.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            This evolution positions Curaçao as a more credible and sustainable
            option compared to purely flexible or alternative frameworks. It is
            increasingly used by operators seeking a balanced approach between
            operational flexibility and regulatory structure, particularly in
            mid-market or growth-stage scenarios.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            It is not a zero-compliance environment.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not anymore.</span>
          </p>
        </div>
      </section>

      {/* ─── WHEN / WHEN NOT ─── */}
      <section className="section-padded">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>When Curaçao makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Speed to market is important, but not the only priority",
                  "The operation requires a structured licensing environment",
                  "Budget constraints exist, but credibility still matters",
                  "The business is in a growth or scaling phase",
                  "There is a potential future migration to higher-tier jurisdictions",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p className="body-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--white-40)" }}>When it does not</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "The operation requires strong institutional positioning from day one",
                  "Banking and payment relationships demand top-tier regulatory frameworks",
                  "The business targets strictly regulated markets",
                  "The strategy requires maximum credibility and regulatory depth",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                    <p className="body-sm" style={{ color: "var(--white-40)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Octus role</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            From application to operational bank account.
          </h2>
          <p className="body" style={{ marginBottom: "40px", maxWidth: "620px", color: "var(--white-60)" }}>
            Engagements are structured based on scope and operational complexity.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Strategic assessment",
                body: "We assess the operation, target markets and regulatory requirements. If Curaçao isn\u2019t the right jurisdiction, we tell you before you waste six months.",
              },
              {
                step: "02",
                title: "Entity & corporate design",
                body: "We structure the Curaçao entity: ownership, UBO disclosure, governance. Built for both the regulator and the banking layer.",
              },
              {
                step: "03",
                title: "Licensing under the updated framework",
                body: "Full application package: regulatory documentation, compliance framework, AML policies, technical requirements. Coordinated directly with the regulator.",
              },
              {
                step: "04",
                title: "Compliance structure",
                body: "KYC/AML framework, responsible gaming policies, DPO setup, internal controls. Built to survive audit, not just to exist on paper.",
              },
              {
                step: "05",
                title: "Banking & payment coordination",
                body: "We align the corporate and compliance structure with bank requirements and coordinate directly with banking partners and PSPs.",
              },
              {
                step: "06",
                title: "Post-license stabilization",
                body: "License granted is the beginning. We stabilize compliance cycles, banking relationships and regulatory reporting.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "32px 0",
                  borderBottom: i < 5 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>
                  {s.step}
                </span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FACTS ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Curaçao at a glance</p>
          <div className="grid-auto-lg">
            {[
              { label: "Regulator", value: "Curaçao Gaming Control Board (GCB)" },
              { label: "License types", value: "iGaming, sports betting, lottery, games of chance" },
              { label: "Entity required", value: "Curaçao-registered N.V. or B.V." },
              { label: "Compliance", value: "Full AML/KYC, responsible gaming, DPO mandatory" },
              { label: "Banking", value: "Operational accounts available — requires aligned structure" },
              { label: "Timeline", value: "3\u20136 months (application to license, structure-dependent)" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "24px" }}>
                <p className="label" style={{ marginBottom: "8px", fontSize: "10px" }}>{item.label}</p>
                <p className="body" style={{ color: "var(--white)" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates — Curaçao</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "Licensed for 6 months. No bank account.",
                body: "Active Curaçao license, rejected by three banks. We restructured the corporate layer, rebuilt AML policies, aligned UBO disclosure and coordinated with three banks simultaneously. Operational account open in 11 weeks.",
              },
              {
                title: "New operator — full setup from zero",
                body: "Entity formation, licensing dossier, compliance framework and banking, delivered as a single coordinated project. License granted, bank account operational before launch.",
              },
              {
                title: "Compliance remediation under regulatory pressure",
                body: "Existing operator flagged by the regulator for compliance gaps. Full KYC/AML rebuild, responsible gaming framework and evidence register delivered in 6 weeks.",
              },
            ].map((m, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>{m.title}</h3>
                <p className="body" style={{ color: "var(--white-60)" }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARATIVE POSITIONING ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">How jurisdictions compare</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            {[
              { name: "Anjouan", role: "Speed-driven and highly flexible alternative framework" },
              { name: "Curaçao", role: "Structured and evolving framework for scalable operations" },
              { name: "Malta", role: "EU-based framework with higher regulatory depth and credibility" },
              { name: "Isle of Man", role: "Institutional positioning with strong banking alignment" },
            ].map((j) => (
              <div key={j.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                <span className="heading-card" style={{ fontSize: "13px", color: j.name === "Curaçao" ? "var(--blue-light)" : "var(--white-40)" }}>{j.name}</span>
                <p className="body-sm" style={{ color: "var(--white-60)" }}>{j.role}</p>
              </div>
            ))}
          </div>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "20px", fontStyle: "italic" }}>
            Jurisdiction selection should align with business stage, capital structure and long-term objectives.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Malta Licensing", desc: "EU framework for higher regulatory positioning.", href: "/jurisdictions/malta" },
              { title: "iGaming Operations", desc: "Market-level view of how we work with operators.", href: "/markets/igaming" },
              { title: "Company Formation", desc: "Entity design for regulated operations.", href: "/solutions/corporate/company-formation" },
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
            Curaçao can be a strategic entry point, or part of a broader
            jurisdictional strategy.
          </p>
          <h2 className="heading-lg cta-block__title">
            The right approach depends on where{" "}
            <span style={{ color: "var(--blue-light)" }}>your operation is heading.</span>
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request strategic assessment →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
