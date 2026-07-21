import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";

export const metadata = {
  title: "Regulatory Structuring",
  description:
    "Regulatory structuring across iGaming, betting, fintech, crypto, VASP, forex and other regulated models. Octus structures licensing strategies, jurisdiction fit and operational readiness — before the application starts.",
};

export default function RegulatoryPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Regulatory Structuring</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            When licensing fails,
            <br />
            <span style={{ color: "var(--white-40)" }}>
              the structure was already wrong.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl">
            Wrong jurisdiction. Wrong structure. Wrong sequence. By the time
            most operations reach a regulator, the structural decisions that
            determine the outcome have already been made.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Octus structures regulatory pathways across iGaming, betting,
            payments, fintech, crypto, VASP, forex and other high-risk or
            emerging regulated models — from jurisdiction selection to full
            operational readiness.
          </p>
          <div style={{ marginTop: "48px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      {/* ─── WHERE REGULATORY FAILS ───────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Where licensing breaks</span>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Most licensing failures are not regulatory.
            <br />
            <span className="text-muted-foreground">
              They are structural decisions made too early or too late.
            </span>
          </h2>
          <ul className="problem-list">
            {[
              "Application submitted before the banking and payment path was resolved — license approved, operation blocked",
              "Jurisdiction selected based on cost, not on the operation's actual business model and regulatory fit",
              "Corporate structure built for the holding — incompatible with the licensing jurisdiction's UBO and ownership requirements",
              "Legal, banking and compliance setup started in sequence — each step waiting for the previous, timeline lost",
              "Mid-process jurisdiction change after regulator signals rejection — cost and timeline reset to zero",
              "Documentation prepared without regulatory logic — gaps identified only after submission, process stalled",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
          <p
            className="heading-sm text-foreground"
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid var(--border-solid)",
            }}
          >
            A licensing process that starts with the wrong structure will not
            be saved by a good application.{" "}
            <span className="text-primary">
              Structure first. Application second.
            </span>
          </p>
        </div>
      </section>

      {/* ─── APPROACH ─────────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How we work</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We don&apos;t manage applications.
            <br />
            <span style={{ color: "var(--blue-light)" }}>
              We design the structure before the application starts.
            </span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus enters before the process — mapping the regulatory
            environment, selecting the right jurisdiction, aligning the
            corporate and compliance structure, and building the operational
            framework required for approval and post-approval operation.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            Banking access, compliance readiness and regulatory filing run in
            parallel — not in sequence. By the time an application is
            submitted, the structure is already built to hold.
          </p>
          <p className="body-text">
            This is not advisory. It is pre-licensing structure, licensing
            path design, regulator interface and operational readiness —
            coordinated as a single execution layer.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE STRUCTURE ────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">What we structure</span>
          <h2 className="heading-lg sp-headline">
            Regulatory pathways, structured end-to-end.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            From the first regulatory map to the moment the license becomes
            operational — Octus coordinates every layer.
          </p>

          <div className="grid-auto-lg">
            {[
              {
                title: "Jurisdiction Selection & Risk Mapping",
                body: "Systematic analysis of the regulatory landscape across target jurisdictions — including timeline, cost, operational requirements, banking access and risk exposure. We select where to license, not just how.",
              },
              {
                title: "Licensing Strategy Design",
                body: "Full licensing strategy — onshore or offshore — structured around the operation's actual commercial model, ownership structure and banking requirements. Not generic. Built for the specific operation.",
              },
              {
                title: "Corporate Structure Alignment",
                body: "The legal entity behind the license must match what the regulator expects and what the bank will accept. We align corporate structure, UBO disclosure and governance before submission.",
              },
              {
                title: "Regulatory Filing Coordination",
                body: "End-to-end coordination of the regulatory process — documentation, filing, response management and escalation. We manage the process and the regulatory interface, not just the paperwork.",
              },
              {
                title: "Regulator Interaction & Representation",
                body: "Direct coordination with regulatory authorities — questions, clarification requests, additional documentation and formal submissions. Octus manages regulatory communication as the operational layer.",
              },
              {
                title: "Brazil Regulatory Framework (SPA/MF)",
                body: "Specialist execution for the Brazilian sports betting regulatory process — corporate structuring, regulatory dossier preparation and direct interaction with SPA and Ministry of Finance authorities.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p className="body-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Jurisdiction strategy</span>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Jurisdiction strategy is not about geography.
            <br />
            <span style={{ color: "var(--blue-light)" }}>It&apos;s about fit.</span>
          </h2>
          <p className="body-lg text-muted-foreground" style={{ marginBottom: "56px", maxWidth: "640px" }}>
            The right jurisdiction depends on the operation&apos;s commercial model,
            risk profile, banking requirements and expansion path — not on cost
            or convenience.
          </p>
          <div className="grid-3">
            {[
              {
                layer: "Offshore frameworks",
                desc: "Speed and structural flexibility for early-stage operations and complex offshore setups. Curaçao, Anjouan and equivalent frameworks — selected based on operational fit, not default.",
              },
              {
                layer: "Regulated environments",
                desc: "Full regulatory compliance in established markets. Brazil (SPA/MF), UK, Malta, Italy and other jurisdictions requiring direct regulatory interaction and structural alignment.",
              },
              {
                layer: "Emerging markets",
                desc: "Market entry strategy in LATAM and Africa — including Peru, Nigeria and other markets in active regulatory transition. Entry structured before the framework is final.",
              },
            ].map((t) => (
              <div key={t.layer} className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{t.layer}</h3>
                <p className="body-text">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="body-sm text-muted-foreground mt-8">
            Each jurisdiction is selected based on operational design, not convenience.
            The right jurisdiction is the one your operation can actually run on.
          </p>
        </div>
      </section>

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Real situations. Real outcomes.</span>
          <h2 className="heading-section" style={{ marginBottom: "56px" }}>
            Not theory.
          </h2>
          <div className="grid-3">
            {[
              {
                tag: "iGaming · Curaçao",
                title: "License active.\nNo bank account.",
                body: "Active Curaçao license for 6 months. No operational account. Corporate documentation restructured, AML policies aligned and three banks coordinated simultaneously. Account open in 11 weeks.",
              },
              {
                tag: "Betting · Brazil",
                title: "Cross-border operator.\nSPA/MF authorization.",
                body: "International group entering the Brazilian sports betting market. Corporate structure redesigned for SPA compliance, entity sequencing aligned across jurisdictions, regulatory dossier prepared and SPA/MF interaction managed directly. Authorization process coordinated end-to-end.",
              },
              {
                tag: "Licensing · Jurisdiction",
                title: "Wrong jurisdiction.\nApplication stalled.",
                body: "Operator mid-application in a jurisdiction incompatible with their actual business model. Regulatory path remapped, corporate layer restructured, process relaunched in the correct framework.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">
                  {c.tag}
                </span>
                <h3 className="mb-4 whitespace-pre-line font-sans text-lg font-semibold text-primary">
                  {c.title}
                </h3>
                <p className="body-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Who this is for</span>
          <h2 className="heading-section" style={{ marginBottom: "48px" }}>
            Operations where licensing is not optional.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                name: "iGaming & Betting",
                desc: "Offshore and onshore licensing across established and newly regulated markets. Including full execution of the Brazilian SPA/MF authorization process.",
              },
              {
                name: "Fintech & Payments",
                desc: "Payment institution and e-money licensing across regulated jurisdictions — structured alongside banking and compliance from the start.",
              },
              {
                name: "Crypto & Digital Assets",
                desc: "VASP licensing and regulatory registration across jurisdictions with active crypto frameworks — Europe, offshore and emerging regulated markets.",
              },
              {
                name: "High-risk cross-border operations",
                desc: "Multi-jurisdiction licensing strategies for groups operating across borders — jurisdiction selection, structure alignment and parallel regulatory processes.",
              },
            ].map((ind) => (
              <div key={ind.name} className="card">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>
                  {ind.name}
                </h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">How we work with you</span>
          <h2 className="heading-section" style={{ marginBottom: "12px" }}>
            Every licensing process requires a different scope.
          </h2>
          <p className="body-lg" style={{ marginBottom: "56px" }}>
            Choose what fits.
          </p>
          <div className="grid-3">
            {[
              {
                title: "Full licensing execution",
                sub: "End-to-end",
                body: "From jurisdiction selection to license in hand. Octus coordinates every layer — structure, application, regulator interaction and banking alignment.",
              },
              {
                title: "Strategic intervention",
                sub: "Targeted scope",
                body: "For processes already underway that need structural correction. We identify the gap, redesign the approach and take over execution at the right point.",
              },
              {
                title: "Advisory & mapping",
                sub: "Pre-decision support",
                body: "For operators evaluating markets before committing to a licensing process. Jurisdiction mapping, risk analysis and regulatory framework assessment.",
              },
            ].map((m) => (
              <div key={m.title} className="rounded-lg bg-secondary p-6 text-center md:p-8">
                <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="mb-3 font-sans text-xs text-muted-foreground">{m.sub}</p>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="text-faint" style={{ textAlign: "center", marginTop: "24px" }}>
            All models include direct access to the Octus team — no account
            managers, no ticket systems.
          </p>
        </div>
      </section>

      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Regulatory diagnostic", body: "We assess the operation, target markets and structural constraints. No licensing path is defined until the full picture is mapped." },
              { step: "02", title: "Regulatory path design", body: "We select the right jurisdiction, define the sequencing and structure the filing logic around operational fit — not speed or convenience." },
              { step: "03", title: "Coordination & execution", body: "We coordinate the process end-to-end: documentation, regulatory interaction, banking alignment and corporate structure, running in parallel." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border-solid)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "How long does a licensing process take?", a: "It depends on jurisdiction, structure and sequencing. We do not commit to timelines before the regulatory path is mapped correctly — starting without that map is usually what causes delays." },
              { q: "Can we start licensing before the corporate structure is fully ready?", a: "In some cases, yes. In most serious cases, structure and licensing need to move in parallel. Starting too early without the right structure usually creates delays that cost more to fix than getting it right from the start." },
              { q: "What happens if we are already mid-process in the wrong jurisdiction?", a: "That is one of the most common situations we work on. The first step is to assess whether the process can be corrected or needs to be restructured. The cost depends on how far the process has advanced." },
              { q: "Do you only work with iGaming licenses?", a: "No. We structure regulatory pathways across multiple regulated and high-risk models — including betting, payments, fintech, crypto, VASP, forex and other cross-border operations." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border-solid)" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.q}</h3>
                <p className="body-text">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your licensing strategy needs to hold under regulatory scrutiny —
          </p>
          <h2 className="heading-lg cta-block__title">
            Structure it before you submit it.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p
            className="body-sm cta-block__note"
            style={{ color: "var(--white-25)" }}
          >
            Initial diagnostic call. We start by mapping where the structure breaks.
          </p>
        </div>
      </section>

    </main>
  );
}

