import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";

export const metadata = {
  title: "Market Entry",
  description:
    "Market entry is not a business decision. It is a structural project. Octus coordinates jurisdiction, corporate, licensing and banking for regulated market entry.",
};

export default function MarketEntryPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions · Regulatory · Market Entry</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Market entry is not a business decision.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is a structural project.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px" }}>
            The target market is chosen. The product is ready. But the entity is
            in the wrong jurisdiction. The licensing pathway does not match the
            model. Banking is inaccessible for the chosen structure.
          </p>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Most market entries fail after the decision. Not before.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Where market entry fails</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The decision is easy. The execution is where it breaks.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Jurisdiction selected for tax or speed, not for regulatory fit or banking access.",
              "Corporate, licensing and compliance built sequentially instead of in parallel. Every misalignment compounds.",
              "Banking treated as the last step. In practice, banking depends on decisions made before the application.",
              "Compliance designed for the target market's checklist, not its supervision standards.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            The operation enters the market. And discovers the structure does not hold.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            From decision to operational presence. Everything in parallel.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Jurisdiction assessment", "Regulatory fit, banking access, cost structure, substance requirements. Not preference — operational logic."],
              ["Corporate design", "Entity formation aligned to licensing and banking requirements. Governance, directors, substance."],
              ["Licensing coordination", "Application strategy, regulatory pathway, documentation, regulator interaction."],
              ["Compliance build", "AML/CFT, KYC, internal controls designed for the target jurisdiction from day one. Not retrofitted."],
              ["Banking and payment access", "Coordinated in parallel with corporate and licensing. Not after."],
              ["Operational readiness", "Policies, systems, reporting, team. Ready to operate on day one of authorisation."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            Market entry is a coordination problem. Sequential execution creates
            delays that compound. Parallel execution requires someone who has done it.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "6-12 months of delays before generating revenue.",
              "Corporate restructuring mid-process, resetting timelines.",
              "Banking refusal forcing jurisdiction change.",
              "Compliance gaps discovered by the regulator, not by you.",
              "Costs that double because the sequence was wrong.",
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
          <p className="label">Fit</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is for operators entering regulated markets with real commitment.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Expanding into EU, UK, Brazil, UAE or other regulated markets.",
              "Need the right jurisdiction for the business model, not the cheapest.",
              "Corporate, licensing, compliance and banking need to move together.",
              "Have budget and timeline aligned to a real regulatory process.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>Not relevant if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Testing whether a market is viable before committing.",
              "Looking for the cheapest entry regardless of sustainability.",
              "Expecting to launch without building compliance.",
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
              { title: "Fintech Licensing", desc: "EMI/PI authorisation", href: "/solutions/regulatory/fintech-licensing" },
              { title: "iGaming Licensing", desc: "Gaming market entry", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Banking & Payments", desc: "Access as entry constraint", href: "/solutions/regulatory/banking-payments" },
              { title: "Company Formation", desc: "Jurisdiction-aligned entities", href: "/solutions/corporate/company-formation" },
              { title: "Jurisdictions", desc: "Where we structure operations", href: "/jurisdictions" },
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
            The market does not wait for your structure to catch up.
          </p>
          <h2 className="heading-lg cta-block__title">
            Design the entry around the regulation. Not around the product.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
