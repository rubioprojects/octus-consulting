import Link from "next/link";

export const metadata = {
  title: "Compliance & Risk — Octus Consulting",
  description:
    "Compliance structured to operate continuously — not just pass an audit. Octus designs, implements and coordinates compliance operations across regulatory, banking and risk environments.",
  robots: { index: false, follow: false },
};

export default function CompliancePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Compliance & Risk</span>
          <h1 className="heading-xl sp-headline">
            When compliance fails,
            <br />
            <span style={{ color: "var(--white-40)" }}>the structure was already broken.</span>
          </h1>
          <p className="body-lg sp-sub">
            Most compliance frameworks look correct. They fail when it matters —
            under audit, under regulatory pressure, or when a bank reviews your
            operation.
          </p>
          <p className="body-lg sp-sub" style={{ marginTop: "16px" }}>
            Octus structures and coordinates compliance frameworks designed to
            hold under real operational conditions.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Stabilize your compliance framework →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE COMPLIANCE FAILS ───────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">The real problem</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Compliance doesn&apos;t fail because companies don&apos;t try.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It fails because the structure was never built to hold.
            </span>
          </h2>
          <ul className="problem-list">
            {[
              "KYC process exists on paper — collapses when a PSP reviews the actual onboarding flow",
              "AML programme approved internally — rejected by the bank at account opening",
              "Due diligence documented but never tested against a real regulatory inquiry",
              "Compliance officer appointed — no operational framework running behind the role",
              "Certifications obtained but not embedded in daily operations",
              "Regulatory escalation starts because the framework looks right but doesn't run under pressure",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
          <p
            className="heading-sm"
            style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border)", color: "var(--white)" }}
          >
            A compliance framework that passes internal review but fails under
            real pressure is not a framework.{" "}
            <span style={{ color: "var(--blue-light)" }}>It is a liability.</span>
          </p>
        </div>
      </section>

      <section className="section-blue section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How we structure and operate</span>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Compliance is not a project.
            <br />
            <span style={{ color: "var(--blue-light)" }}>It is an operation.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "24px" }}>
            Most compliance engagements end when the framework is delivered.
            That is exactly when the real work begins.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            Octus structures compliance in four phases — each building on the
            previous and designed to lead to continuous operation:
          </p>
          <ul className="check-list" style={{ marginBottom: "32px" }}>
            <li>
              <strong>Diagnose</strong> — gap analysis, risk scoring and
              prioritized roadmap. Identifies what is broken before deciding
              what to build.
            </li>
            <li>
              <strong>Build</strong> — KYC/AML frameworks, policies, data
              protection, internal controls and onboarding processes. The
              infrastructure behind a functioning compliance operation.
            </li>
            <li>
              <strong>Operate</strong> — continuous monitoring, alert
              management, reporting, regulatory updates and DPO function.
              This is where compliance either holds or fails. It is also
              where the real value is generated.
            </li>
            <li>
              <strong>Certify</strong> — GLI, ISO and regulatory audit
              preparation. Evidence registers, mock audits and remediation.
              Certification as a consequence of an operation that already runs.
            </li>
          </ul>
          <p className="body">
            Compliance doesn&apos;t run in documents. It runs through systems,
            monitoring processes and integrated data flows — coordinated as a
            single operational layer inside the client&apos;s structure.
          </p>
          <p className="body" style={{ marginTop: "16px", color: "var(--white-40)" }}>
            Onboarding flows, risk logic, monitoring and evidence are built to
            run inside your operation — not to sit in documentation.
          </p>
        </div>
      </section>

      {/* ─── 3 BUCKETS ────────────────────────────────────────────── */}
      <section className="sp-what section-padded">
        <div className="container">
          <span className="label">What we build and operate</span>
          <h2 className="heading-lg sp-headline">
            Three compliance layers. One operational structure.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "72px" }}>
            We don&apos;t deliver policy documents. We structure, implement and
            coordinate the operation of compliance — built to run continuously
            under real regulatory conditions.
          </p>

          {[
            {
              bucket: "Core compliance operations",
              items: [
                {
                  title: "KYC & Onboarding",
                  body: "Customer identification, verification and risk classification — structured to satisfy regulators and payment providers simultaneously. An operational process, not just a policy.",
                },
                {
                  title: "AML Programme",
                  body: "Anti-money laundering controls built for the specific operation, jurisdiction and risk profile. Transaction monitoring, reporting lines and escalation — operationally embedded.",
                },
                {
                  title: "Due Diligence",
                  body: "Corporate and individual due diligence across jurisdictions. UBO identification, adverse media, PEP screening, sanctions — structured as an ongoing operational process.",
                },
              ],
            },
            {
              bucket: "Risk, governance & data protection",
              items: [
                {
                  title: "Compliance Officer as a Service",
                  body: "For operations that need a compliance function but aren't ready to build one internally. Octus coordinates the compliance officer role — with real accountability, not just a signature.",
                },
                {
                  title: "DPO as a Service",
                  body: "Data protection officer function for LGPD (Brazil), GDPR (EU) and equivalent frameworks. Operational, not nominal — coordinated as part of the wider compliance structure.",
                },
                {
                  title: "Internal Controls & Governance",
                  body: "Corporate policies, internal controls and governance frameworks — designed to pass regulatory review and run consistently inside the operation.",
                },
              ],
            },
            {
              bucket: "Technical & certification readiness",
              items: [
                {
                  title: "Technical Compliance & GLI Readiness",
                  body: "For operations facing laboratory certification. Gap analysis, evidence registers, readiness packs and direct coordination with GLI and equivalent bodies.",
                },
                {
                  title: "ISO & Certification Readiness",
                  body: "Preparation for ISO 27001, ISO 37001 and equivalent certifications. We coordinate the underlying process design — not just the documentation.",
                },
              ],
            },
          ].map((bucket) => (
            <div key={bucket.bucket} style={{ marginBottom: "64px" }}>
              <p className="label" style={{ marginBottom: "32px" }}>{bucket.bucket}</p>
              <div className="grid-3">
                {bucket.items.map((item) => (
                  <div key={item.title} className="card-lg">
                    <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                    <p className="body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">Real situations. Real outcomes.</span>
          <h2 className="heading-md" style={{ marginBottom: "56px" }}>Not theory.</h2>
          <div className="grid-3">
            {[
              {
                tag: "Compliance · Audit readiness",
                title: "GLI audit scheduled.\nNo evidence organized.",
                body: "Full gap analysis, evidence register and readiness pack delivered in 6 weeks. Client entered audit with complete documentation and zero critical findings.",
              },
              {
                tag: "AML · Banking",
                title: "AML framework rejected.\nAccount application denied.",
                body: "Operator with approved license unable to open banking. AML programme redesigned and aligned with three target banks simultaneously. Account operational in 11 weeks.",
              },
              {
                tag: "KYC · Fintech",
                title: "Onboarding failing.\nPSPs refusing to connect.",
                body: "KYC and onboarding framework rebuilt from the ground up. New framework passed PSP review in first submission. Integration completed without further escalation.",
              },
            ].map((c) => (
              <div key={c.tag} className="card-lg" style={{ display: "flex", flexDirection: "column" }}>
                <span className="case-tag">{c.tag}</span>
                <h3 className="heading-sm" style={{ margin: "16px 0", whiteSpace: "pre-line" }}>{c.title}</h3>
                <p className="body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container">
          <span className="label">Who we work with</span>
          <h2 className="heading-md" style={{ marginBottom: "48px" }}>
            Regulated operations where compliance is not optional.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                name: "iGaming & Betting",
                desc: "Licensing compliance, GLI readiness, AML and KYC for high-risk operations. Built for markets under active regulatory transition — including Brazil (SPA/MF).",
              },
              {
                name: "Fintech & Payments",
                desc: "AML, KYC and compliance frameworks for payment institutions and e-money operators entering or operating in regulated markets.",
              },
              {
                name: "Crypto & Digital Assets",
                desc: "Compliance for VASPs and crypto operators — structured to satisfy regulators and banking partners across jurisdictions with active crypto frameworks.",
              },
              {
                name: "High-risk cross-border groups",
                desc: "Multi-entity corporate structures with exposure across jurisdictions — UBO compliance, due diligence programmes and governance frameworks.",
              },
            ].map((ind) => (
              <div key={ind.name} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{ind.name}</h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">How we work with you</span>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            Most clients come in through a project.
          </h2>
          <p className="body-lg" style={{ marginBottom: "56px" }}>
            The real work starts when compliance becomes operational.
          </p>
          <div className="grid-3">
            {[
              {
                title: "Compliance setup",
                sub: "Entry point",
                body: "Gap analysis, framework design and full implementation. KYC, AML, data protection, internal controls — built as a functioning operational structure, not a document set.",
              },
              {
                title: "Ongoing compliance operations",
                sub: "Core engagement",
                body: "Continuous monitoring, alert management, regulatory updates, DPO function and reporting — operated as a permanent compliance layer inside your structure. This is where compliance holds or fails.",
              },
              {
                title: "Certification & audit readiness",
                sub: "Targeted scope",
                body: "GLI, ISO and regulatory audit preparation. Evidence registers, mock audits and remediation. For operations that need to pass formal scrutiny — inside or outside of an ongoing engagement.",
              },
            ].map((m) => (
              <div key={m.title} className="card-lg">
                <h3 className="heading-card">{m.title}</h3>
                <p
                  className="chip-blue"
                  style={{ display: "inline-block", margin: "8px 0 16px" }}
                >
                  {m.sub}
                </p>
                <p className="body">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="text-faint" style={{ textAlign: "center", marginTop: "24px" }}>
            All models include direct access to the Octus team — no account
            managers, no ticket systems.
          </p>
        </div>
      </section>


      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Compliance diagnostic", body: "We identify where the framework fails in practice — controls, monitoring, evidence and the gaps between documentation and operation." },
              { step: "02", title: "Framework design", body: "We structure the controls, flows, ownership and monitoring logic required for the operation to hold under scrutiny." },
              { step: "03", title: "Operational rollout", body: "We coordinate implementation so compliance runs inside the operation — not as a layer of documentation outside it." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Is this a one-time compliance project?", a: "Usually not. Most clients enter through a project, but the real value starts when compliance becomes operational and continuous. Setup without ongoing operation is incomplete." },
              { q: "What if we already have policies in place?", a: "Policies are not the same as an operating framework. We assess whether controls, monitoring and evidence actually hold under scrutiny — not just whether the documents exist." },
              { q: "Can compliance be structured before licensing is complete?", a: "Yes. In many cases it should be. Waiting too long creates avoidable operational gaps that become visible at the worst possible moment." },
              { q: "Do you act as the compliance team?", a: "Octus structures and coordinates the compliance layer required for the operation, working with the right execution model depending on the scope and jurisdiction." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--white)" }}>{item.q}</h3>
                <p className="body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your compliance framework needs to hold under real pressure —
          </p>
          <h2 className="heading-lg cta-block__title">
            Build compliance that actually operates.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Stabilize your compliance framework →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by identifying where the framework breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
