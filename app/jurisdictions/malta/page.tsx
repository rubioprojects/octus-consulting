import Link from "next/link";
import DarkHeroAtmosphere from "../../../components/system/DarkHeroAtmosphere";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";

export const metadata = {
  title: "Malta — EU Regulatory Seat for Regulated Operations | Octus",
  description:
    "Malta as an EU regulatory seat: MGA and MFSA frameworks, corporate substance, compliance infrastructure and banking coordination for regulated operations.",
};

export default function JurisdictionsMaltaPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Jurisdictions · Malta</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Malta — EU regulatory seat for regulated operations.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Not designed for speed-driven or low-cost setups.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            A structured EU regulatory framework for operators and B2B
            providers seeking credibility, scalability and access to regulated
            markets.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/how-we-engage"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              How we engage →
            </Link>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Malta is not an entry-level jurisdiction.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            It is a regulated European framework designed for companies that
            require credibility, operational structure and long-term market
            access. This licensing model is typically adopted by operators and
            B2B providers targeting regulated markets, institutional
            partnerships and scalable operations.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            Malta gives you MGA credibility, serious banking infrastructure
            and can support access to European markets within the right
            regulatory and operational structure. It also demands real
            compliance, real substance and real governance.
          </p>
          <p
            className="heading-sm text-foreground"
            style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "24px", marginTop: "8px" }}
          >
            If you&apos;re going to do Malta,{" "}
            <span className="text-primary">do it right.</span>
          </p>
        </div>
      </section>

      {/* ─── WHEN IT MAKES SENSE ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>When Malta makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Access to regulated European or international markets is required",
                  "Credibility with partners, platforms and regulators is critical",
                  "The operation needs a structured and scalable framework",
                  "The business is preparing for long-term growth or institutional exposure",
                  "Banking and payment stability are core requirements",
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
                  "Speed to market is the priority",
                  "Budget constraints limit regulatory and operational investment",
                  "The operation is still in early-stage validation",
                  "The focus is short-term deployment or arbitrage",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL IMPLICATIONS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Operational implications</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is not just a license.{" "}
            <span style={{ color: "var(--blue-light)" }}>It&apos;s a full operational framework.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "24px" }}>
            Choosing Malta impacts multiple layers of the operation:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Corporate structure, governance and local substance requirements",
              "Compliance infrastructure, reporting obligations and ongoing supervision",
              "Technical certification, systems audits and platform requirements",
              "Payment and banking relationships across EU markets",
              "Key personnel requirements and operational readiness",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE OPERATE ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Octus role</p>
          <h2 className="heading-section" style={{ marginBottom: "12px" }}>
            From strategy to operational license.
          </h2>
          <p className="body-text mb-10 max-w-[620px]">
            Engagements are structured as mandates due to regulatory complexity
            and execution requirements.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Strategic assessment & jurisdiction fit",
                body: "We assess the operation, commercial model and regulatory objectives. If Malta isn\u2019t the right fit, we tell you before you invest.",
              },
              {
                step: "02",
                title: "Licensing pathway & class selection",
                body: "B2C or B2B. Class 1 through 4. We select the right license class based on the operation, not the easiest one.",
              },
              {
                step: "03",
                title: "Corporate substance & governance",
                body: "Malta requires real substance. We structure the local entity, key personnel, governance framework and operational infrastructure.",
              },
              {
                step: "04",
                title: "Regulatory documentation & submission",
                body: "Complete MGA application: compliance framework, business plan, financial projections, systems documentation. Coordinated through Octus.",
              },
              {
                step: "05",
                title: "Compliance infrastructure",
                body: "AML/KYC, responsible gaming, GDPR/DPO, player protection, built as operational systems with audit trails.",
              },
              {
                step: "06",
                title: "Banking & payment coordination",
                body: "Malta-based banking, EU payment processors, multi-currency accounts. Structure aligned with banking requirements from day one.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "32px 0",
                  borderBottom: i < 5 ? "1px solid var(--border-solid)" : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unigeo), Unigeo64, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--blue-light)",
                    paddingTop: "4px",
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FACTS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Malta at a glance</p>
          <div className="grid-auto-lg">
            {[
              { label: "Gaming regulator", value: "Malta Gaming Authority (MGA)" },
              { label: "Financial regulator", value: "Malta Financial Services Authority (MFSA)" },
              { label: "License types", value: "B2C (Class 1-2), B2B (Class 3-4), VFA, EMI" },
              { label: "Substance", value: "Local key personnel, office, operational infrastructure" },
              { label: "Banking", value: "Strong EU banking infrastructure — tier-1 access" },
              { label: "Timeline", value: "6\u201312 months (MGA), 9\u201318 months (MFSA)" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "24px" }}>
                <p className="label" style={{ marginBottom: "8px", fontSize: "10px" }}>{item.label}</p>
                <p className="body-text">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates — Malta</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              {
                title: "B2C operator — full MGA licensing",
                body: "Complete licensing process from jurisdiction assessment to operational license. Corporate substance, compliance framework and EU banking coordination.",
              },
              {
                title: "Multi-brand group — B2B platform licensing",
                body: "Class 4 B2B license for platform provider serving multiple brands. Technical compliance, systems documentation and MGA coordination.",
              },
              {
                title: "Cross-jurisdiction — Malta + Curaçao dual structure",
                body: "Malta for EU markets, Curaçao for non-EU. Unified compliance framework with jurisdiction-specific adaptations and centralized banking.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARATIVE POSITIONING ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">How jurisdictions compare</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            {[
              { name: "Curaçao", role: "Speed and flexibility for entry-level or mid-market operations" },
              { name: "Malta", role: "Structured EU framework with scalability and regulatory credibility" },
              { name: "Isle of Man", role: "Institutional positioning with stronger banking alignment" },
            ].map((j) => (
              <div key={j.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--border-solid)" }}>
                <span className={`text-lg font-semibold font-sans text-[13px] ${j.name === "Malta" ? "text-primary" : "text-muted-foreground"}`}>{j.name}</span>
                <p className="body-sm text-muted-foreground">{j.role}</p>
              </div>
            ))}
          </div>
          <p className="body-sm mt-5 italic text-muted-foreground">
            The right choice depends on business model, capital structure and long-term objectives.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Curaçao Licensing", desc: "Structured entry framework for mid-market operations.", href: "/jurisdictions/curacao" },
              { title: "Full Licensing Process", desc: "End-to-end licensing execution.", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Compliance & Risk", desc: "The framework that supports your license.", href: "/solutions/compliance-risk-systems" },
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

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Malta is a strategic licensing decision with long-term implications.
          </p>
          <h2 className="heading-lg cta-block__title">
            A structured assessment is required{" "}
            <span style={{ color: "var(--blue-light)" }}>before proceeding.</span>
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
