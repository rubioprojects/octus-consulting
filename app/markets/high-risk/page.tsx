import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "High-Risk Operations",
  description:
    "High-risk is not a business problem. It is a classification that creates structural consequences for licensing, banking, compliance and partnerships. Octus structures operations to function within that classification.",
  path: "/markets/high-risk",
});

export default function MarketsHighRiskPage() {
  return (
    <main>

      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Markets · High-Risk Operations</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            High-risk is not a problem to solve.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It is a classification to structure around.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Banks, payment processors, regulators and partners use risk
            classifications to determine access. If your sector, jurisdiction or
            business model triggers a high-risk flag, every structural decision
            must account for it. Most operators discover this too late.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Definition</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            High-risk is not about what you do. It is about how institutions classify what you do.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Once the high-risk classification is applied, the consequences are
            immediate:
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Accounts are harder to open and easier to close. Payment processors
            impose limits or exit. Onboarding becomes restrictive. Compliance
            requirements increase under scrutiny.
          </p>
          <p className="body-lg">
            The business does not stop because it is illegal. It stops because it
            cannot operate.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">What breaks</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            The classification creates consequences at every layer.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "Banking access",
                body: "High-risk businesses face restricted access to banking. Standard banks decline or terminate. Specialist banks require evidence of compliance maturity that most operations cannot produce.",
              },
              {
                title: "Payment processing",
                body: "Acquirers and PSPs apply enhanced scrutiny, higher reserves and stricter monitoring. Operations without clean compliance documentation are rejected at onboarding.",
              },
              {
                title: "Licensing and regulatory treatment",
                body: "Regulators apply enhanced due diligence to high-risk applicants. Fit-and-proper assessments are more rigorous. Application timelines are longer. Post-approval supervision is more intensive.",
              },
              {
                title: "Partnerships and market access",
                body: "Software providers, platform partners and B2B relationships apply their own risk assessments. An operation classified as high-risk without a structured compliance and corporate framework is excluded before the conversation starts.",
              },
            ].map((c) => (
              <div key={c.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{c.title}</h3>
                <p className="body-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Growth exposure</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Most high-risk operations do not fail at setup. They fail under pressure.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Growth exposes structural weaknesses: payment dependency on a single
            provider, lack of jurisdictional separation, compliance that does not
            scale.
          </p>
          <p className="body-lg">
            What works at small scale breaks quickly. A single PSP termination
            can halt operations. A compliance gap that was invisible at low volume
            becomes a regulatory finding at scale.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We structure operations to function under constraint.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Jurisdictional design aligned with risk classification and banking access.",
              "Multi-layer banking and payment resilience across providers, jurisdictions and rails, so there is no single point of failure.",
              "Regulatory positioning across fragmented frameworks.",
              "Operational compliance that withstands scrutiny, not just satisfies onboarding.",
              "Risk containment across entities and flows.",
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
          <p className="label">Where the classification applies</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            High-risk is not one sector. It is a pattern.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The classification applies across industries that share regulatory
            sensitivity, transaction complexity and institutional caution:
          </p>
          <p className="body-text" style={{ marginBottom: "24px" }}>
            Institutions commonly apply enhanced scrutiny to sectors such as iGaming and betting, crypto and digital assets, and certain fintech or payment models. Other verticals may also trigger high-risk treatment depending on the institution&apos;s policy — classification is institution-specific, not a guarantee of coverage by Octus.
          </p>
          <p className="body-sm italic text-muted-foreground">
            The sector varies. The structural problem is the same: institutional
            access depends on how the operation is built, not what it sells.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Fit</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is for operations that take the classification seriously.
          </h2>
          <p className="label" style={{ marginBottom: "12px", color: "var(--blue-light)" }}>This is relevant if:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Banking has been declined or terminated based on your sector or transaction profile.",
              "Payment processors are rejecting your application or imposing excessive reserves.",
              "Licensing applications are facing enhanced scrutiny or delays.",
              "Partners or investors require compliance evidence your operation cannot currently produce.",
              "You are restructuring after a compliance failure, regulatory action or banking loss.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="label mb-3 text-muted-foreground">This is not relevant if:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "You are looking for a bank that does not ask questions.",
              "You want to avoid compliance requirements rather than meet them.",
              "Your model depends on regulatory arbitrage or short-term workarounds.",
              "The operation has no substance, no product and no real users.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                <p className="body-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-sm italic text-muted-foreground">
            We do not build structures for workarounds. If your model depends on
            &quot;finding a way around&quot;, this will not work. This is for
            operators who intend to run sustainable businesses under real
            constraints.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "iGaming & Betting", desc: "Where Octus built its high-risk expertise", href: "/markets/igaming" },
              { title: "Crypto & Digital Assets", desc: "Evolving regulation, structural consequences", href: "/markets/crypto" },
              { title: "Fintech & Payments", desc: "Adjacent regulatory and banking landscape", href: "/markets/fintech" },
              { title: "Compliance-as-a-Service", desc: "Continuous compliance for operations under scrutiny", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Compliance architecture for enhanced due diligence", href: "/solutions/compliance/aml-kyc" },
              { title: "iGaming Licensing", desc: "Licensing for regulated high-risk sectors", href: "/solutions/regulatory/igaming-licensing" },
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
          <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "8px" }}>
            High-risk operations do not fail at setup. They fail under pressure. Without continuous operation, it breaks.
          </p>
          <p className="body-sm" style={{ color: "var(--white-25)", marginBottom: "16px", fontStyle: "italic" }}>
            If your structure depends on approval, it will eventually break.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build for the scrutiny.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not around it.</span>
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Strategic intake via WhatsApp. Alternative:{" "}
            <Link href="/contact" className="underline underline-offset-2" style={{ color: "var(--white-60)" }}>Contact</Link>.
          </p>
        </div>
      </section>

    </main>
  );
}
