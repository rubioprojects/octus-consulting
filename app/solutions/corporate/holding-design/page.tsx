import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";
import DarkHeroAtmosphere from "../../../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Holding Design",
  description:
    "Holding structures for regulated operations require architecture that separates risk, aligns governance and satisfies institutional scrutiny across jurisdictions.",
  path: "/solutions/corporate/holding-design",
});

export default function HoldingDesignPage() {
  return (
    <main>
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Services · Corporate · Holding Design</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            A holding structure is not an org chart.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is risk architecture.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "660px" }}>
            For regulated operations, holding design determines how risk is
            contained, how entities relate, and how regulators and banks
            evaluate the group. Built for ownership convenience, it fails under
            institutional scrutiny.
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
              "Operating entities, licensing entities and holding entities are conflated. A regulatory issue in one contaminates the group.",
              "Inter-company agreements are missing or generic. Decision authority is unclear.",
              "Payments between entities have no contractual basis. An audit exposes structural weakness.",
              "What works at one-entity scale breaks at group level across jurisdictions.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">What we actually build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Holding entity design", "Jurisdiction, type, governance and purpose defined by operational and regulatory requirements."],
              ["Entity separation", "Operating, licensing, IP and treasury entities structured to contain risk and satisfy regulatory boundaries."],
              ["Governance framework", "Board composition, decision authority, reporting lines designed for institutional credibility."],
              ["Inter-company architecture", "Agreements, service contracts, licensing arrangements documented and defensible."],
              ["Flow of funds", "Treasury management, transfer pricing and payment flows designed for compliance and audit readiness."],
            ].map(([title, body]) => (
              <div key={title}>
                <h2 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h2>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6">
            If the holding structure does not contain risk, it creates it.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Regulatory issue in one entity cascades across the group.",
              "Banking partner reviews the group structure and declines the operating entity.",
              "Auditors flag inter-company transactions without contractual basis.",
              "Expansion requires restructuring the entire group instead of adding an entity.",
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
              "Operating through multiple entities across jurisdictions.",
              "Expanding and need group architecture that scales.",
              "Regulators or banks questioning governance or ownership.",
              "Restructuring after a compliance finding or banking issue.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>Not relevant if</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Single entity, single jurisdiction, no group complexity.",
              "Looking for incorporation without structural depth.",
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
            Where group structures are typically anchored:{" "}
            <Link href="/jurisdictions/portugal" className="underline underline-offset-2" style={{ color: "var(--blue-light)" }}>Portugal</Link>
            {" · "}
            <Link href="/jurisdictions/uae" className="underline underline-offset-2" style={{ color: "var(--blue-light)" }}>UAE</Link>
          </p>
          <div className="grid-auto-lg">
            {[
              { title: "Offshore Structuring", desc: "Offshore Structuring", href: "/solutions/corporate/offshore-structuring" },
              { title: "Company Formation", desc: "Company Formation", href: "/solutions/corporate/company-formation" },
              { title: "Private Clients", desc: "Ownership and UBO architecture for founders and operators.", href: "/private-clients" },
              { title: "Banking & Payments", desc: "Banking & Payments", href: "/solutions/banking-payments-infrastructure" },
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
          <h2 className="heading-lg cta-block__title">
            Design the group for regulation. Not for convenience.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">Continue this discussion →</a>
        </div>
      </section>
    </main>
  );
}
