import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";

export const metadata = {
  title: "Compliance & Risk — Octus Consulting",
  description:
    "Compliance structured to operate continuously — not just pass an audit. Octus designs, implements and coordinates compliance operations across regulatory, banking and risk environments.",
};

export default function CompliancePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Compliance & Risk</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            When compliance fails,
            <br />
            <span style={{ color: "var(--white-40)" }}>the structure was already broken.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl">
            Most compliance frameworks look correct. They fail when it matters —
            under audit, under regulatory pressure, or when a bank reviews your
            operation.
          </p>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ marginTop: "16px" }}>
            Octus structures and coordinates compliance frameworks designed to
            hold under real operational conditions.
          </p>
          <div style={{ marginTop: "48px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      {/* ─── WHERE COMPLIANCE FAILS ───────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">The real problem</span>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Compliance doesn&apos;t fail because companies don&apos;t try.
            <br />
            <span className="text-muted-foreground">
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
            className="heading-sm text-foreground"
            style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border-solid)" }}
          >
            A compliance framework that passes internal review but fails under
            real pressure is not a framework.{" "}
            <span className="text-primary">It is a liability.</span>
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How we structure and operate</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Compliance is not a project.
            <br />
            <span style={{ color: "var(--blue-light)" }}>It is an operation.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "24px" }}>
            Most compliance engagements end when the framework is delivered.
            That is exactly when the real work begins.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
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
          <p className="body-text">
            Compliance doesn&apos;t run in documents. It runs through systems,
            monitoring processes and integrated data flows — coordinated as a
            single operational layer inside the client&apos;s structure.
          </p>
          <p className="body-text mt-4 text-muted-foreground">
            Onboarding flows, risk logic, monitoring and evidence are built to
            run inside your operation — not to sit in documentation.
          </p>
        </div>
      </section>

      {/* ─── 3 BUCKETS ────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
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
                  <div key={item.title} className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border">
                    <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                    <p className="body-text">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Real situations. Real outcomes.</span>
          <h2 className="heading-section" style={{ marginBottom: "56px" }}>Not theory.</h2>
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
              <div
                key={c.tag}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">{c.tag}</span>
                <h3 className="mb-4 whitespace-pre-line font-sans text-lg font-semibold text-primary">{c.title}</h3>
                <p className="body-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Who we work with</span>
          <h2 className="heading-section" style={{ marginBottom: "48px" }}>
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
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{ind.name}</h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">How we work with you</span>
          <h2 className="heading-section" style={{ marginBottom: "12px" }}>
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
              <div key={m.title} className="rounded-lg bg-secondary p-6 text-center md:p-8">
                <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="mb-3 font-sans text-xs text-muted-foreground">{m.sub}</p>
                <p className="body-text">{m.body}</p>
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
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Compliance diagnostic", body: "We identify where the framework fails in practice — controls, monitoring, evidence and the gaps between documentation and operation." },
              { step: "02", title: "Framework design", body: "We structure the controls, flows, ownership and monitoring logic required for the operation to hold under scrutiny." },
              { step: "03", title: "Operational rollout", body: "We coordinate implementation so compliance runs inside the operation — not as a layer of documentation outside it." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border-solid)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Is this a one-time compliance project?", a: "Usually not. Most clients enter through a project, but the real value starts when compliance becomes operational and continuous. Setup without ongoing operation is incomplete." },
              { q: "What if we already have policies in place?", a: "Policies are not the same as an operating framework. We assess whether controls, monitoring and evidence actually hold under scrutiny — not just whether the documents exist." },
              { q: "Can compliance be structured before licensing is complete?", a: "Yes. In many cases it should be. Waiting too long creates avoidable operational gaps that become visible at the worst possible moment." },
              { q: "Do you act as the compliance team?", a: "Octus structures and coordinates the compliance layer required for the operation, working with the right execution model depending on the scope and jurisdiction." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border-solid)" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.q}</h3>
                <p className="body-text">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your compliance framework needs to hold under real pressure —
          </p>
          <h2 className="heading-lg cta-block__title">
            Build compliance that actually operates.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by identifying where the framework breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
