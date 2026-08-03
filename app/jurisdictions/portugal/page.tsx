import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Portugal",
  description:
    "Portugal is not fast. It is defensible. Octus structures EU-ready operations that survive the SRIJ licensing process and sustain operations under European regulatory oversight.",
  path: "/jurisdictions/portugal",
});

export default function JurisdictionsPortugalPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Jurisdictions · Portugal</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
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
              "Guarantee deposits: EUR500,000 (compliance) + EUR100,000 (tax).",
              "Processing time: 9-15 months.",
              "18 licensed operators currently hold 31 licences.",
              "Online GGR exceeds EUR300 million annually.",
              "Virtual assets not permitted for gambling activities.",
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
              "Access to European banking infrastructure.",
              "Credibility with institutional partners and investors.",
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
              "They assume approval guarantees operational readiness.",
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
            We do not apply for licences in Portugal. We build EU-ready
            operations that survive regulatory oversight.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "Alignment with Portuguese and EU frameworks. Licensing strategy based on actual activity."],
              ["Entity and group architecture", "Portuguese company or EU/EEA branch. Governance aligned with SRIJ expectations. Structures that support EU operations."],
              ["Operational model", "Clear definition of regulated vs non-regulated activities. Flow of funds, responsibilities and risk allocation."],
              ["Compliance infrastructure", "AML/KYC, responsible gambling, advertising compliance, self-exclusion integration. Aligned with SRIJ and EU standards. Ongoing, not static."],
              ["Banking and payments", "Local banking arrangements. Payment methods aligned to Portuguese market (Multibanco, MB Way, cards). Fiat only: no crypto."],
              ["Technical certification", "Coordination with independent testing laboratories recognised by SRIJ. Platform certification, RNG validation."],
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
                  "You need access to European markets and banking infrastructure.",
                  "You have capital for EUR600,000+ in guarantee deposits and operational setup.",
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
              "EUR600,000+ committed before discovering the structure does not qualify.",
              "Application rejected after 12+ months of process.",
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
            Most failures in Portugal happen after approval. Not before.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Fintech Licensing", desc: "How EU licensing paths are structured", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Banking & Payments", desc: "Why banking defines operational viability", href: "/solutions/regulatory/banking-payments" },
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
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "16px" }}>
            We evaluate your intended operation, define whether Portugal is the
            right jurisdiction and structure the path accordingly. If it is not
            the right fit, we will tell you upfront.
          </p>
        </div>
      </section>
    </main>
  );
}
