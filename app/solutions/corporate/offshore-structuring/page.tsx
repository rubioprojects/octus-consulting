import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";
import DarkHeroAtmosphere from "../../../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Offshore Structuring",
  description:
    "Offshore structuring for regulated operations is not about tax. It is about corporate architecture that passes regulatory, banking and institutional scrutiny.",
  path: "/solutions/corporate/offshore-structuring",
});

export default function OffshoreStructuringPage() {
  return (
    <main>
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Services · Corporate · Offshore Structuring</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Offshore is not a destination.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is an architectural decision.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "660px" }}>
            A structure built for one purpose alone (tax, speed or privacy) fails when
            tested by regulators, banks and institutional counterparties.
            Offshore structuring for regulated operations requires design that
            satisfies all three simultaneously.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Problem</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "The entity exists on paper but has no operational substance. Regulators reject this.",
              "The offshore jurisdiction triggers enhanced due diligence at every banking touchpoint.",
              "What works for one entity breaks when the operation expands across jurisdictions.",
              "Nominee directors, virtual offices and mailbox registrations create flags that compound.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            Structures built for incorporation fail under scrutiny. The structure
            that was supposed to enable the operation becomes the reason it stalls.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">What we actually build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Jurisdiction selection", "Offshore, onshore and hybrid structures assessed against regulatory requirements, banking access and institutional acceptance."],
              ["Entity design", "Holding, operating and special purpose entities structured for the operation's actual needs. Not shelf companies."],
              ["Governance and substance", "Director appointments, management structure, operational presence designed to satisfy regulatory and banking scrutiny."],
              ["UBO and ownership", "Beneficial ownership alignment across entities and jurisdictions. Transparent, defensible, audit-ready."],
              ["Cross-border coordination", "Inter-company agreements, transfer pricing, flow of funds designed for compliance across jurisdictions."],
            ].map(([title, body]) => (
              <div key={title}>
                <h2 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h2>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6">
            Offshore structuring is not about where you incorporate. It is about whether the structure holds when institutions test it.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Banking refused because the jurisdiction or structure creates unacceptable risk.",
              "Licensing delayed or rejected due to insufficient substance.",
              "Regulatory action when supervisors question who controls the operation.",
              "Forced restructuring under pressure: always more expensive than doing it right.",
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
              "Operating across multiple jurisdictions with regulatory exposure.",
              "Current structure creating problems at banking, licensing or due diligence.",
              "Restructuring from a formation-of-convenience to a defensible design.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>Not for you if</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Purpose is tax avoidance without operational substance.",
              "Looking for the cheapest jurisdiction with no scrutiny requirements.",
              "No intention to satisfy regulatory or banking standards.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <p className="body-sm text-muted-foreground mb-5">
            Where offshore structures are anchored:{" "}
            <Link href="/jurisdictions/anjouan" style={{ color: "var(--blue-light)" }}>Anjouan</Link>
            {" · "}
            <Link href="/jurisdictions/uae" style={{ color: "var(--blue-light)" }}>UAE</Link>
          </p>
          <div className="grid-auto-lg">
            {[
              { title: "Company Formation", desc: "Company Formation", href: "/solutions/corporate/company-formation" },
              { title: "Holding Design", desc: "Holding Design", href: "/solutions/corporate/holding-design" },
              { title: "Banking & Payments", desc: "Banking & Payments", href: "/solutions/banking-payments-infrastructure" },
              { title: "Market Entry", desc: "Market Entry", href: "/solutions/regulatory/market-entry" },
              { title: "High-Risk Operations", desc: "High-Risk Operations", href: "/markets/high-risk" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h2 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{item.title}</h2>
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
            If your structure was built for incorporation, it will fail under regulation.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build it for scrutiny. Not for convenience.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
