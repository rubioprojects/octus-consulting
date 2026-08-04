import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "UAE / Dubai",
  description:
    "Most companies fail in the UAE before they even choose the right authority. Octus structures operations aligned with the correct regulator, entity type and activity from day one.",
  path: "/jurisdictions/uae",
});

export default function JurisdictionsUaePage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.12em] text-white/65">Jurisdictions · UAE / Dubai</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Most companies fail in the UAE before they even choose the right authority.
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Not because the UAE is unclear. Because they treat it as a single jurisdiction. It is not.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The UAE is not one licensing regime. It is a landscape of overlapping authorities.
          </h2>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            This authority map is a high-level landscape overview. Octus is not
            affiliated with, or acting on behalf of, any UAE authority.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "VARA (Dubai) for virtual assets",
              "ADGM and DIFC for financial services",
              "Mainland structures for specific operational models",
              "Central bank for banking and payments",
              "SCA for securities and commodities",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text">
            Each comes with different expectations, timelines and levels of
            scrutiny. As a general UAE federal corporate-tax framing, a 9% rate
            may apply above AED 375,000, while qualifying free-zone income and
            other exceptions involve detailed conditions, substance and
            eligibility tests. This is not tax advice; verify current treatment
            against MOF and FTA guidance with a qualified adviser.
          </p>
          <p className="body-text" style={{ marginTop: "20px" }}>
            Choosing wrong does not delay your operation. It breaks it.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What this jurisdiction allows.
          </h2>
          <p className="body-text mb-4 font-semibold text-primary">The UAE enables:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Regulated crypto and virtual asset operations (VARA, ADGM FSRA)",
              "Payment, fintech and financial services structures",
              "International group structuring with operational presence",
              "A regional base from which separately authorised market strategies may be developed",
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
              "Not every activity fits every authority",
              "Not every licence supports real operations",
              "Authority approval does not assure banking access",
              "Free zone vs mainland creates operational scope limitations most operators discover too late",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            A licence in the UAE is not the outcome. A viable structure is.
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
              "They choose the authority based on speed, not fit.",
              "They assume \"Dubai licence\" is a single concept.",
              "They separate licensing from banking strategy.",
              "They build entities before defining the operating model.",
              "They underestimate substance and governance requirements.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "24px" }}>
            The result can be a wrong authority, misaligned structure, delayed
            or rejected application, or an approved entity that remains
            operationally constrained.
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
            Octus advises on regulatory-ready operating structures and the
            authority that appears applicable to the proposed activity. The
            relevant authority alone determines classification and approval.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "VARA vs ADGM vs DIFC vs mainland, based on actual activity. Licensing path aligned with product, geography and risk."],
              ["Entity and group architecture", "HoldCo / OpCo structuring where required. Separation of risk, ownership and operations. Free zone vs mainland aligned to operational scope."],
              ["Operational model", "Where the activity actually sits. How funds move. What is regulated and where."],
              ["Compliance infrastructure", "AML/KYC frameworks aligned with UAE Federal AML Law and authority-specific requirements. Governance that survives regulatory scrutiny."],
              ["Banking and payments strategy", "Designed in parallel with licensing readiness. Account access remains subject to each provider\u2019s eligibility rules, risk appetite and due diligence."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6 text-foreground">
            We structure first. Licensing follows.
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
                  "Building a regulated crypto or fintech operation with regional ambition.",
                  "Structuring an international group with real substance in the UAE.",
                  "Need credible jurisdiction positioning for partners and investors.",
                  "Understand that regulatory complexity is part of the build.",
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
                  "Looking for a fast or low-cost licence.",
                  "Want to test and adapt later.",
                  "Do not have a defined operating model.",
                  "Expect the licence to solve structural problems.",
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
            The UAE will not compensate for weak structure. It will expose it.
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
              "Apply to the wrong authority and restart the process.",
              "Build an entity that cannot support the activity.",
              "Receive authority approval but fail independent banking due diligence.",
              "Face regulatory friction before or after approval.",
              "Forced into costly restructures under pressure.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "20px" }}>
            Most of these failures happen before the application is submitted.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Fintech Licensing", desc: "How the licensing process is structured", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Banking & Payments", desc: "Why banking defines viability", href: "/solutions/banking-payments-infrastructure" },
              { title: "Offshore Structuring", desc: "How the UAE fits within a broader group", href: "/solutions/corporate/offshore-structuring" },
              { title: "Crypto", desc: "VASP regulation and structural consequences", href: "/markets/crypto" },
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
            Design for the right authority. Not for the right postcode.
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
