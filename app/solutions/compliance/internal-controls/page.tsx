import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";

export const metadata = {
  title: "Internal Controls & Governance",
  description:
    "Controls that exist on paper do not exist at all. Octus designs governance frameworks and control systems that function under real operational pressure.",
};

export default function InternalControlsPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions · Compliance · Internal Controls & Governance</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Controls that exist on paper
            <br />
            <span style={{ color: "var(--white-40)" }}>do not exist at all.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "660px" }}>
            Regulators, auditors and banking partners evaluate internal controls
            by how they function. Most compliance failures trace back to
            controls that were defined but never operationalised.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Problem</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Compliance officer designated but has no authority. Risk committee exists but does not meet.",
              "Transaction limits and risk thresholds defined in policy but not implemented in systems.",
              "Escalation procedures point to people who do not know they are responsible.",
              "Controls designed for a small operation collapse when volume, team or jurisdictions increase.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            Documentation is not governance. When something goes wrong, the framework does not activate.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
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
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
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
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
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
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>Not for you if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Pre-launch with no existing framework.",
              "Looking for template policies without implementation.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Compliance-as-a-Service", desc: "Operational layer", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "GLI Readiness", desc: "Depends on controls", href: "/solutions/compliance/gli-readiness" },
              { title: "AML/KYC", desc: "Controls regulators evaluate first", href: "/solutions/compliance/aml-kyc" },
              { title: "Compliance & Risk", desc: "Full pillar", href: "/compliance" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{item.title}</h3>
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
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If controls do not activate under pressure, they do not exist.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build governance that operates. Not governance that documents.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
