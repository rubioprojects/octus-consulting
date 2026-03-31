import Link from "next/link";

export const metadata = {
  title: "Internal Controls & Governance — Octus Consulting",
  description:
    "Controls that exist on paper do not exist at all. Octus designs governance frameworks and control systems that function under real operational pressure.",
};

export default function InternalControlsPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Compliance · Internal Controls & Governance</span>
          <h1 className="heading-xl sp-headline">
            Controls that exist on paper
            <br />
            <span style={{ color: "var(--white-40)" }}>do not exist at all.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "660px" }}>
            Regulators, auditors and banking partners evaluate internal controls
            by how they function. Most compliance failures trace back to
            controls that were defined but never operationalised.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a governance assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Problem</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Compliance officer designated but has no authority. Risk committee exists but does not meet.",
              "Transaction limits and risk thresholds defined in policy but not implemented in systems.",
              "Escalation procedures point to people who do not know they are responsible.",
              "Controls designed for a small operation collapse when volume, team or jurisdictions increase.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            Documentation is not governance. When something goes wrong, the framework does not activate.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">What we actually build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Control framework", "Policies, procedures and controls aligned to regulatory requirements and operational reality."],
              ["Roles and accountability", "Clear assignment of responsibilities, reporting lines and decision authority. No ambiguity."],
              ["Escalation architecture", "Defined triggers, paths and response procedures that activate when thresholds are breached."],
              ["Monitoring systems", "Risk indicators, alerts and reporting cycles built into operations. Not bolted on."],
              ["Board governance", "Composition, meeting structure, minutes and decision documentation designed for regulatory credibility."],
              ["Review cycle", "Controls are not static. Scheduled review ensures the framework evolves with the operation."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Regulatory inspection reveals controls that exist only on paper.",
              "Audit findings that could have been prevented with operational governance.",
              "Banking partners question oversight and decision-making.",
              "Compliance failure escalates because nobody knew the escalation path.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Qualification</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Regulators or auditors have flagged governance weaknesses.",
              "Controls exist in documentation but are not operational.",
              "Operation scaling and control framework has not kept up.",
              "Preparing for inspection, review or certification.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="heading-card" style={{ marginBottom: "12px" }}>Not for you if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Pre-launch with no existing framework.",
              "Looking for template policies without implementation.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                <p className="body" style={{ color: "var(--white-40)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Compliance-as-a-Service", desc: "Operational layer", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "GLI Readiness", desc: "Depends on controls", href: "/solutions/compliance/gli-readiness" },
              { title: "AML/KYC", desc: "Controls regulators evaluate first", href: "/solutions/compliance/aml-kyc" },
              { title: "Compliance & Risk", desc: "Full pillar", href: "/compliance" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{item.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If controls do not activate under pressure, they do not exist.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build governance that operates. Not governance that documents.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a governance assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
