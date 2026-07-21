import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";

export const metadata = {
  title: "Anjouan",
  description:
    "Anjouan is fast and affordable. That is also the risk. Octus structures offshore operations that work beyond the licence — banking, payments and transition to stronger jurisdictions.",
};

export default function JurisdictionsAnjouanPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Jurisdictions · Anjouan</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Anjouan is fast and affordable.
            <br />
            <span style={{ color: "var(--white-40)" }}>That is also the risk.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Most operators choose Anjouan for speed. Few understand what they
            are actually building.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            An offshore jurisdiction designed for accessibility. Not for permanence.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Anjouan is an offshore licensing regime that works as a starting
            point or as a component within a broader structure. It fails as a
            shortcut to avoid building real operations.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "Licensed through AOFA (Anjouan Offshore Finance Authority) and ALSI.",
              "Single licence covering casino, sports, poker, lottery, B2C and B2B.",
              "Annual fee approximately EUR17,800. No GGR tax. No corporate income tax on IBCs.",
              "Processing: 2-6 weeks with complete documentation.",
              "Crypto payments permitted.",
              "B2B Recognition Certificates introduced in 2025.",
              "Over 850 licences issued, supporting 2,000+ active websites.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text">
            Speed and cost are real advantages. But they do not eliminate the
            structural work. They reduce the regulatory barrier to entry. The
            operational barriers — banking, payments, compliance quality,
            institutional credibility — remain exactly the same.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What this jurisdiction allows.
          </h2>
          <p className="body-text mb-4 font-semibold text-primary">Anjouan enables:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "iGaming licensing with fast turnaround.",
              "Entry into operations without high upfront regulatory burden.",
              "Flexible structuring for early-stage and crypto-native operators.",
              "B2C and B2B operations under a single authorisation.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text mb-4 font-semibold text-primary">But:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Recognition is limited compared to Tier-1 jurisdictions.",
              "Banking access is restricted. Tier-1 acquirers generally do not accept Anjouan.",
              "Restricted territories: EU, UK, US, Australia and others.",
              "Long-term scalability depends entirely on how the structure evolves.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            A licence in Anjouan is not the strategy. It is a piece of it.
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
              "They choose Anjouan only for speed and cost.",
              "They assume the licence alone enables operations.",
              "They ignore banking and payment constraints.",
              "They build no upgrade path to stronger jurisdictions.",
              "They treat offshore as an endpoint, not a phase.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            The result: unbankable structures, operational instability, need for
            full restructuring later, reputational limitations with institutional partners.
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
            We do not sell offshore licences. We design offshore structures that
            support real operations and future transitions.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "Anjouan within a broader jurisdiction strategy. Defined upgrade or expansion path where needed."],
              ["Entity and group architecture", "Separation between offshore operations and core business. Structures that can evolve into stronger jurisdictions."],
              ["Operational model", "Clear definition of activities and risk allocation. Integration with payment and platform infrastructure. Geoblocking for restricted jurisdictions."],
              ["Compliance infrastructure", "AML/KYC and responsible gaming frameworks aligned with operational reality, not just the application. Preparation for future regulatory upgrades."],
              ["Banking and payments strategy", "Designed despite offshore constraints. Crypto rails, mid-tier PSPs, specialist acquirers. No false promises about Tier-1 banking access."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6 text-foreground">
            Anjouan works when it is used correctly. Most operators do not.
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
                  "You need a fast entry point with a roadmap to grow.",
                  "Crypto-native operation where alternative payment rails are primary.",
                  "Early-stage operator with budget constraints and a transition plan.",
                  "B2B supplier needing recognised authorisation.",
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
                  "You want a long-term standalone solution.",
                  "You expect Tier-1 banking access from day one.",
                  "You are avoiding building real compliance.",
                  "You have no upgrade or transition plan.",
                  "You are targeting EU, UK or other restricted markets.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body-text" style={{ marginTop: "32px", maxWidth: "760px" }}>
            Anjouan is a starting point. Not a destination.
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
              "Licensed in weeks. Banking blocked for months.",
              "Payment processors decline because compliance documentation is insufficient.",
              "Operating in restricted jurisdictions because geoblocking was not implemented.",
              "Locked into an offshore structure with no pathway to Tier-1.",
              "Forced to rebuild the entire operation when growth demands institutional credibility.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "20px" }}>
            Most of these issues are structural. Not regulatory.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Offshore Structuring", desc: "How offshore fits into the group", href: "/solutions/corporate/offshore-structuring" },
              { title: "Banking & Payments", desc: "The real constraint of offshore operations", href: "/solutions/regulatory/banking-payments" },
              { title: "iGaming Licensing", desc: "How licensing strategy evolves", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Isle of Man", desc: "The Tier-1 upgrade path", href: "/jurisdictions/isle-of-man" },
              { title: "Curaçao", desc: "Established offshore with higher acceptance", href: "/jurisdictions/curacao" },
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
            Build for where you are going. Not just where you start.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "16px" }}>
            We assess whether Anjouan fits your strategy, define how it should
            be structured and map the steps beyond licensing. If it is not the
            right path, we will tell you upfront.
          </p>
        </div>
      </section>
    </main>
  );
}
