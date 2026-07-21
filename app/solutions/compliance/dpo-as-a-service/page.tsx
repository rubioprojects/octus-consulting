import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";

export const metadata = {
  title: "DPO-as-a-Service — Octus Consulting",
  description:
    "A DPO is not a contact point. Octus operates the Data Protection Officer function as a continuous regulatory role: incident response, regulatory interaction and operational data protection.",
};

export default function DpoAsAServicePage() {
  return (
    <main>

      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions · Compliance · DPO-as-a-Service</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Appointing a DPO is easy.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Operating the function is not.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Most companies assign the role to meet a requirement. Regulators expect
            a DPO who can respond under pressure, justify decisions and manage
            incidents. The gap between designation and function is where data
            protection exposure lives.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">The structural problem</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Most DPO structures fail when tested.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The DPO carries real accountability. Decisions impact regulatory
            exposure. Poor execution creates legal and operational risk. Most
            companies assign the role without building the function.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            In many jurisdictions, the DPO role carries personal accountability.
            Poor execution is not just a business risk. It is a personal one.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            A name is assigned, but no process exists. Policies are drafted, but
            not enforced. Requests from regulators or data subjects are handled
            reactively, without a defined workflow.
          </p>
          <p className="body-lg">
            Data protection is not assessed on what is written. It is assessed on
            how incidents, requests and regulatory interactions are handled.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">The model</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            We do not provide a name. We operate the function.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            DPO-as-a-Service is the ongoing execution of the Data Protection Officer
            role. It ensures that data protection obligations are not only defined,
            but continuously managed across operations, systems and external
            interactions.
          </p>
          <p className="body-lg">
            Acting as the interface between your operation, regulators and internal
            teams.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Qualification</p>
          <h2 className="heading-section" style={{ marginBottom: "32px", maxWidth: "760px" }}>
            DPO-as-a-Service is not a universal requirement.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>When it makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "The company processes personal data at scale or across jurisdictions.",
                  "There is exposure to GDPR, LGPD or equivalent frameworks.",
                  "Banking, partners or regulators require a formal DPO function.",
                  "Internal teams cannot manage data protection consistently.",
                  "The business needs structured response capability for incidents or requests.",
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
                  "Data processing is minimal and low-risk.",
                  "There is no operational exposure to regulatory or partner scrutiny.",
                  "The company is not prepared to implement internal processes aligned with the DPO function.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body-sm mt-7 max-w-[760px] italic text-muted-foreground">
            <strong className="text-primary">Hard filter:</strong>
            {" "}This is not a formal appointment service. This is for companies that need real regulatory accountability.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The role is active, not nominal.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Data subject requests — intake, assessment, response and documentation.",
              "Regulatory interaction — communication with authorities when required.",
              "Incident response — coordination of data breaches and reporting obligations.",
              "Internal alignment — guidance to teams handling personal data.",
              "Policy enforcement — ensuring procedures are followed in practice.",
              "Record keeping — documentation required under GDPR/LGPD accountability principles.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Process</p>
          <h2 className="heading-section" style={{ marginBottom: "28px" }}>
            Three stages. Continuous operation.
          </h2>
          {[
            { step: "1", title: "Assessment", body: "Review of data flows, risk exposure and current compliance gaps." },
            { step: "2", title: "Structuring", body: "Definition of processes, responsibilities and documentation aligned with regulatory requirements." },
            { step: "3", title: "Ongoing operation", body: "Continuous execution of the DPO function, including monitoring, response and regulatory interaction." },
          ].map((s) => (
            <div key={s.step} style={{ marginBottom: "24px" }}>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>
                {s.step}. {s.title}
              </h3>
              <p className="body-text">{s.body}</p>
            </div>
          ))}
          <p className="body-sm text-muted-foreground">
            The DPO becomes part of the operational layer.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Architecture</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            The DPO function does not operate in isolation.
          </h2>
          <p className="body-lg" style={{ marginBottom: "24px" }}>
            Without an operational compliance system, the DPO function cannot
            perform. Data protection sits on top of the broader compliance
            architecture: AML controls, governance frameworks, internal policies
            and monitoring systems.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            That is why DPO-as-a-Service sits on top of our Compliance-as-a-Service
            layer. Together, they form a unified compliance function across
            operations.
          </p>
          <Link href="/solutions/compliance/compliance-as-a-service" style={{ color: "var(--blue-light)", fontSize: "15px" }}>
            Compliance-as-a-Service →
          </Link>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Engagement</p>
          <h2 className="heading-section" style={{ marginBottom: "20px" }}>
            Structured as a recurring engagement.
          </h2>
          <p className="body-text" style={{ marginBottom: "28px" }}>
            Scope depends on data volume, jurisdictions, regulatory exposure and
            operational complexity. This is not a one-time designation. It is a
            continuous regulatory function.
          </p>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Difference</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The difference is not designation. It is accountability.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="body-text">
              <strong className="text-primary">Nominal DPO</strong>
              {" "}— name assigned, limited involvement, no operational function.
            </p>
            <p className="body-text">
              <strong className="text-primary">Internal DPO</strong>
              {" "}— constrained by internal structure and conflicting roles.
            </p>
            <p className="body-text">
              <strong className="text-primary">Octus DPO</strong>
              {" "}— independent function with execution capability and regulatory alignment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Compliance-as-a-Service", desc: "The broader compliance operating layer", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Onboarding, monitoring and reporting architecture", href: "/solutions/compliance/aml-kyc" },
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
            Assigning responsibility without structure creates risk.
          </p>
          <h2 className="heading-lg cta-block__title">
            Make it operational before it is tested.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
