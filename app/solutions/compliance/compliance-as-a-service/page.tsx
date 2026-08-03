import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";
import DarkHeroAtmosphere from "../../../../components/system/DarkHeroAtmosphere";

export const metadata = {
  title: "Compliance-as-a-Service",
  description:
    "Compliance is not a document. Octus builds and operates compliance as a continuous function: AML/KYC, controls, monitoring and regulatory alignment embedded in the business.",
};

export default function ComplianceAsAServicePage() {
  return (
    <main>

      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Services · Compliance · Compliance-as-a-Service</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Compliance is not documentation.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It is an operational system.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Most companies have policies. Few have compliance that actually
            functions. The difference surfaces when a bank asks questions, a
            regulator requests evidence, or a partner runs due diligence.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">The structural problem</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Most compliance programmes fail in practice.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Policies exist but are not enforced. Teams do not know what to apply.
            Controls are defined but not monitored. Audits expose gaps that were
            always there. Compliance becomes reactive instead of operational.
          </p>
          <p className="body-lg">
            Banks, payment providers and regulators do not assess what is written.
            They assess what is executed.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">The model</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            We do not deliver compliance documents. We build and operate compliance systems.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Compliance-as-a-Service is the ongoing design, implementation and
            operation of your compliance function. It replaces fragmented internal
            efforts with a structured system that aligns policies, controls,
            reporting and regulatory expectations into a single operational layer.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Embedded into your operation, not external to it.
          </p>
          <p className="body-text">
            Once implemented, compliance becomes part of how the business operates,
            not something that can be turned off.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Qualification</p>
          <h2 className="heading-section" style={{ marginBottom: "32px", maxWidth: "760px" }}>
            Compliance-as-a-Service is not for every company.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>When it makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You operate in a regulated or high-risk sector.",
                  "Banking or payment relationships depend on compliance quality.",
                  "Internal teams cannot maintain regulatory standards consistently.",
                  "The business is scaling and compliance complexity is increasing.",
                  "You need to respond to audits, partners or regulators with evidence, not promises.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p className="body-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label mb-4 text-muted-foreground">When it does not</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You are still testing a business model with no operational exposure.",
                  "Compliance is treated as a formality rather than a function.",
                  "There is no internal ownership or accountability for compliance.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body-sm mt-7 max-w-[760px] italic text-muted-foreground">
            <strong className="text-primary">Hard filter:</strong>
            {" "}This is not for companies looking for one-off compliance documentation.
            This is for operations that need ongoing regulatory control.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Octus operates compliance as a system, not a service.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "AML/KYC: onboarding flows, transaction monitoring, SAR processes.",
              "Policies and controls: aligned with regulatory and banking expectations.",
              "Ongoing monitoring: risk indicators, alerts, reporting cycles.",
              "Regulatory interaction: responses, audits, documentation requests.",
              "Internal governance: roles, responsibilities, escalation frameworks.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            This is built to function under real scrutiny, not to exist on paper.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Process</p>
          <h2 className="heading-section" style={{ marginBottom: "28px" }}>
            Three stages. Continuous execution.
          </h2>
          {[
            { step: "1", title: "Assessment", body: "Review of current structure, risks and gaps." },
            { step: "2", title: "Build", body: "Design and implementation of compliance architecture aligned to operations." },
            { step: "3", title: "Operate", body: "Ongoing execution, monitoring and regulatory alignment." },
          ].map((s) => (
            <div key={s.step} style={{ marginBottom: "24px" }}>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>
                {s.step}. {s.title}
              </h3>
              <p className="body-text">{s.body}</p>
            </div>
          ))}
          <p className="body-sm" style={{ color: "var(--white-40)", marginTop: "8px" }}>
            Compliance becomes a continuous operational layer, not a periodic intervention.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Integration</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Compliance sits at the centre of every regulated operation.
          </h2>
          <p className="body-lg">
            Compliance-as-a-Service operates at the intersection of licensing
            processes, banking and payment onboarding, regulatory audits and
            cross-border operations. Without an operational compliance layer,
            these processes fail or become unstable.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="body-lg" style={{ marginBottom: "16px" }}>
            Systems require ownership. Compliance architecture needs a function
            responsible for data protection, regulatory interaction and incident
            response.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            That is where the DPO function comes in.
          </p>
          <Link href="/solutions/compliance/dpo-as-a-service" style={{ color: "var(--blue-light)", fontSize: "15px" }}>
            DPO-as-a-Service →
          </Link>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Engagement</p>
          <h2 className="heading-section" style={{ marginBottom: "20px" }}>
            Structured as an ongoing engagement.
          </h2>
          <p className="body-text" style={{ marginBottom: "28px" }}>
            Scope is defined based on regulatory exposure, transaction volume,
            jurisdictions and operational complexity. This is not a one-time
            delivery. It is a continuous function embedded in the business.
          </p>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Difference</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The difference is not documentation. It is execution.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="body-text">
              <strong className="text-primary">Internal teams</strong>
              {" "}often lack regulatory depth or consistency across jurisdictions.
            </p>
            <p className="body-text">
              <strong className="text-primary">One-off consultants</strong>
              {" "}deliver documents, not operations.
            </p>
            <p className="body-text">
              <strong className="text-primary">Octus</strong>
              {" "}builds and operates compliance as a continuous system: policies,
              controls, monitoring and regulatory interaction running inside the
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "AML/KYC", desc: "Onboarding, monitoring and reporting architecture", href: "/solutions/compliance/aml-kyc" },
              { title: "DPO-as-a-Service", desc: "Data protection as an operational function", href: "/solutions/compliance/dpo-as-a-service" },
              { title: "iGaming Licensing", desc: "Licensing strategy across jurisdictions", href: "/solutions/regulatory/igaming-licensing" },
              { title: "High-Risk Operations", desc: "Compliance for sectors under pressure", href: "/markets/high-risk" },
              { title: "Crypto & Digital Assets", desc: "Regulatory structuring for digital operations", href: "/markets/crypto" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "16px", fontStyle: "italic" }}>
            Most compliance failures do not come from lack of rules. They come from lack of execution.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build it before it is tested.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
