import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Portugal",
  description:
    "Portugal licensing advisory for application readiness, operating structure and ongoing compliance under SRIJ and applicable European requirements.",
  path: "/jurisdictions/portugal",
});

export default function JurisdictionsPortugalPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.12em] text-white/65">Jurisdictions · Portugal</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Portugal is not fast.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is defensible.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Most companies underestimate what it takes to operate under a
            European regulatory framework. Portugal does not.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            A regulated EU market with real barriers to entry.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Portugal sits inside the EU regulatory perimeter. That means
            alignment with European directives, regulatory oversight with real
            enforcement, and higher expectations on compliance, governance and substance.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "Regulator: SRIJ (Servico de Regulacao e Inspecao de Jogos), under Turismo de Portugal.",
              "Legal framework: Decree-Law 66/2015 (RJO).",
              "Mandatory local incorporation (Portuguese entity or EU/EEA branch).",
              "Bond, fee and tax-security requirements must be verified against current SRIJ rules.",
              "Processing time varies with application scope, completeness, technical review and regulator workload.",
              "Licensing does not provide EU-wide passporting or authorise activity outside approved markets.",
              "Payment methods, including any virtual-asset use, must be checked against current law and provider requirements.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text">
            It is not a shortcut jurisdiction. It is a jurisdiction for
            operators who want credibility, access and long-term defensibility.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What this jurisdiction allows.
          </h2>
          <p className="body-text mb-4 font-semibold text-primary">Portugal enables:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Licensed iGaming operations under national regulation.",
              "Fintech and payment structures aligned with EU frameworks.",
              "Potential access to banking providers, subject to independent eligibility and due diligence.",
              "A nationally regulated framework for counterparties to assess independently.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text mb-4 font-semibold text-primary">Constraints</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Licensing is slow and documentation-heavy.",
              "Compliance is ongoing, not a one-off.",
              "Banking access depends on structure, not licence alone.",
              "SRIJ licences cover Portugal only: no EU-wide passporting.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            Operating in Portugal is not about entry. It is about sustaining operations under scrutiny.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What most people get wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "They underestimate timelines and regulatory depth.",
              "They treat EU licensing as a checkbox.",
              "They assume approval means the operation is ready to run.",
              "They ignore ongoing compliance burden.",
              "They build for approval, not for operation.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            The result: delayed launches, compliance failures post-approval,
            banking friction, structures that do not scale.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What we actually structure.
          </h2>
          <p className="body-text" style={{ marginBottom: "28px" }}>
            Octus advises clients on application readiness and operating
            structures for Portuguese regulatory oversight. Licence decisions
            remain solely with SRIJ.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "Alignment with Portuguese and EU frameworks. Licensing strategy based on actual activity."],
              ["Entity and group architecture", "Portuguese company or EU/EEA branch. Governance aligned with SRIJ expectations. Structures that support EU operations."],
              ["Operational model", "Clear definition of regulated vs non-regulated activities. Flow of funds, responsibilities and risk allocation."],
              ["Compliance infrastructure", "AML/KYC, responsible gambling, advertising compliance, self-exclusion integration. Aligned with SRIJ and EU standards. Ongoing, not static."],
              ["Banking and payments", "Banking and payment-provider readiness for the Portuguese market. Permitted methods, including treatment of virtual assets, must be verified under current rules and provider policies."],
              ["Technical certification", "Client-authorised coordination with independent testing laboratories where accepted by SRIJ. Certification and regulator acceptance are not promised."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6 text-foreground">
            We build for operation. Not just approval.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>Makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You want a credible EU-regulated operation.",
                  "You are building for long-term scale, not short-term entry.",
                  "You have defined the specific markets in which you intend to operate and understand that permissions are territorial.",
                  "You have capital for the security deposits and operational setup required under current SRIJ rules.",
                  "You understand regulatory burden is part of the model.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p className="body-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label mb-4 text-muted-foreground">Does not</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You need a fast or low-cost licence.",
                  "You are testing a model without defined structure.",
                  "Your business relies on crypto payments.",
                  "You want minimal compliance overhead.",
                  "You expect approval to solve operational gaps.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body-text" style={{ marginTop: "32px" }}>
            Portugal rewards strong structures. It exposes weak ones.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Capital committed before discovering the structure does not meet current requirements.",
              "An extended application process without a favourable regulator decision.",
              "Licensed but unable to connect to Portuguese payment methods.",
              "Compliance failures discovered during SRIJ supervisory review.",
              "Advertising sanctions because marketing was not aligned with SRIJ rules.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "20px" }}>
            Structural and compliance gaps can create problems before or after
            any licence decision.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Fintech Licensing", desc: "How EU licensing paths are structured", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Banking & Payments", desc: "Why banking defines operational viability", href: "/solutions/banking-payments-infrastructure" },
              { title: "Holding Design", desc: "How EU operations fit into group structure", href: "/solutions/corporate/holding-design" },
              { title: "iGaming", desc: "Sector overview", href: "/markets/igaming" },
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
          <h2 className="heading-lg cta-block__title">
            Build for the regulator&apos;s standard. Not for your timeline.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{"Continue on WhatsApp →"}</a>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "16px" }}>
            WhatsApp is the primary strategic intake. Prefer another channel?{" "}
            <Link href="/contact" className="underline underline-offset-4">Contact us here.</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
