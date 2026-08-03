import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";
import DarkHeroAtmosphere from "../../../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "iGaming Licensing",
  description:
    "iGaming licensing strategy across jurisdictions. Octus structures the regulatory, corporate and compliance architecture that determines whether a licence gets approved, not merely submitted.",
  path: "/solutions/regulatory/igaming-licensing",
});

export default function SolutionsIGamingLicensingPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Services · Regulatory · iGaming Licensing</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Licensing does not fail at submission.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It fails before the application starts.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px" }}>
            Wrong jurisdiction. Wrong corporate structure. Wrong sequence. By the
            time most operators reach a regulator, the structural decisions that
            determine the outcome have already been made.
          </p>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Octus structures licensing strategies built to be approved, not just
            filed.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/markets/igaming"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              iGaming operations →
            </Link>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      {/* ─── POV ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Perspective</p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The jurisdiction is rarely the problem. The structure is.
          </p>
          <p className="body-lg">
            Choosing where to apply is easy. Designing how the operation will
            function after approval across licensing, banking, compliance and scale
            is where most fail.
          </p>
        </div>
      </section>

      {/* ─── WHERE LICENSING FAILS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">The structural problem</p>
          <h2 className="heading-section" style={{ marginBottom: "24px", maxWidth: "760px" }}>
            Most licensing failures are not regulatory. They are structural.
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", maxWidth: "760px" }}>
            Regulators do not reject applications because of paperwork. They
            reject applications because the underlying structure does not hold.
            The corporate design does not fit the jurisdiction. The compliance
            framework does not match the regulatory expectation. The banking
            path was not resolved before submission. The UBO structure is
            incompatible with the fit-and-proper assessment.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                title: "Jurisdiction mismatch",
                body: "The operation chose a jurisdiction for speed or cost, not for regulatory fit. Now the licence does not unlock banking, payment processing or market access.",
              },
              {
                title: "Structural sequencing failure",
                body: "Corporate structure, compliance architecture and banking were built in the wrong order. The regulator sees gaps that did not need to exist.",
              },
              {
                title: "Compliance built after the fact",
                body: "AML/KYC, responsible gambling and internal controls were designed to satisfy a checklist, not to pass operational scrutiny. Regulators see through this.",
              },
              {
                title: "Mid-process correction",
                body: "The operation changed direction during the application. Every change resets the clock and increases cost.",
              },
            ].map((c) => (
              <div key={c.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{c.title}</h3>
                <p className="body-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MULTI-JURISDICTION ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Jurisdiction strategy</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The jurisdiction is not a detail. It is the first structural decision.
          </h2>
          <p className="body-lg" style={{ marginBottom: "28px" }}>
            Jurisdiction is a strategic decision, not a checklist item. Every
            licensing strategy starts here: as a decision that determines
            approval probability, banking access, payment processing, market
            reach and long-term viability.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
            {[
              "Isle of Man. Tier-1 regulatory credential for institutional operators and B2B providers",
              "Malta. EU-regulated framework for scalable operations targeting regulated markets",
              "Curaçao. Structured offshore framework for growth-stage operators",
              "Brazil. Local regulatory pathway requiring direct alignment with SPA expectations",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-text mb-5">
            Additional jurisdictions are assessed case by case based on
            regulatory fit and operational design.
          </p>
          <p className="body-sm italic text-muted-foreground">
            Octus does not recommend jurisdictions based on speed or cost. The
            choice is driven by what allows the operation to function, not
            merely to launch.
          </p>
        </div>
      </section>

      {/* ─── WHAT OCTUS STRUCTURES ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            We design the structure behind the licence.
          </h2>
          <p className="body-lg" style={{ marginBottom: "28px" }}>
            Licensing is not a filing exercise. It is a coordinated build across
            multiple layers that must align before submission.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "Jurisdiction strategy: regulatory path, risk matrix, cost and timeline modelling.",
              "Corporate and operational architecture: entities, governance, UBO alignment, jurisdictional requirements.",
              "Compliance systems. AML/CFT, KYC, responsible gambling, internal controls. Built for ongoing supervision.",
              "Regulatory coordination: application, documentation, regulator interaction.",
              "Banking and payment readiness: from day one, not after approval.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="heading-sm border-t border-border pt-6 text-foreground">
            The licence is the output.{" "}
            <span className="text-primary">The structure determines whether it is granted.</span>
          </p>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              {
                tag: "Curaçao · iGaming",
                title: "Licence active. No banking.",
                body: "Compliance documentation did not meet banking standards. Octus restructured AML policies and coordinated with multiple institutions. Operational account secured within 11 weeks.",
              },
              {
                tag: "Brazil · Betting",
                title: "Cross-border operator entering a regulated market.",
                body: "Corporate structure redesigned for SPA compliance. Regulatory dossier prepared and submission coordinated. Authorization process managed end-to-end.",
              },
              {
                tag: "iGaming · Certification",
                title: "GLI audit scheduled. No evidence readiness.",
                body: "Full compliance gap analysis and evidence framework delivered. Client entered audit with complete documentation and zero critical findings.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">{m.tag}</span>
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "28px" }}>
            Three models. One standard.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "28px" }}>
            <p className="body-text">
              <strong className="font-semibold text-foreground">Full execution</strong>
              {" "}. End-to-end licensing and structuring. From jurisdiction selection to operational readiness.
            </p>
            <p className="body-text">
              <strong className="font-semibold text-foreground">Strategic intervention</strong>
              {" "}. Correction of existing structures, licensing processes or regulatory misalignment.
            </p>
            <p className="body-text">
              <strong className="font-semibold text-foreground">Advisory and mapping</strong>
              {" "}. Strategic assessment and regulatory pathway definition before execution.
            </p>
          </div>
          <p className="body-sm mb-6 text-muted-foreground">
            All engagements provide direct access to the Octus team. No
            intermediaries, no account layers.
          </p>
          <p className="body-text mb-7 border-l-[3px] border-l-primary bg-primary/5 p-5">
            <strong className="font-semibold text-foreground">Qualification:</strong>
            {" "}We do not support shortcut licensing strategies or fast-track
            approaches without structural backing. If your objective is speed
            over sustainability, we are not the right partner.
          </p>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Common questions</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                q: "How long does a licensing process take?",
                a: "Timelines are only reliable after the regulatory path is correctly defined.",
              },
              {
                q: "Can we start licensing before the corporate structure is ready?",
                a: "In some cases, steps run in parallel. In most cases, starting without the correct structure creates delays that cost more than proper sequencing.",
              },
              {
                q: "What if we are already mid-process?",
                a: "We assess whether the process can be corrected or needs restructuring. Both scenarios are common.",
              },
              {
                q: "Do you handle only the licence application?",
                a: "No. Licensing only works when corporate structure, compliance framework, banking path and operational model are aligned. Octus structures the full process.",
              },
              {
                q: "What is the difference between Octus and a law firm?",
                a: "Law firms focus on legal interpretation and documentation. Octus structures the full licensing pathway as an operating model: jurisdiction, corporate design, compliance architecture, banking alignment and regulatory coordination.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border-solid)" }}>
                <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{item.q}</h3>
                <p className="body-text">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Isle of Man (GSC)", desc: "Tier-1 credential with continuous regulatory scrutiny", href: "/jurisdictions/isle-of-man" },
              { title: "Malta (MGA)", desc: "EU-regulated framework with high compliance standards", href: "/jurisdictions/malta" },
              { title: "Curaçao", desc: "Established offshore framework undergoing reform", href: "/jurisdictions/curacao" },
              { title: "Compliance-as-a-Service", desc: "What keeps the operation compliant after licensing", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Compliance architecture for licensing and banking", href: "/solutions/compliance/aml-kyc" },
              { title: "iGaming Market", desc: "Sector overview and Octus positioning", href: "/markets/igaming" },
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

      {/* ─── CTA FINAL (CAS transition) ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "8px" }}>
            Getting licensed is the first step. Without continuous operation, it breaks.
          </p>
          <p className="body-sm" style={{ color: "var(--white-25)", marginBottom: "16px", fontStyle: "italic" }}>
            Most licensing failures are not visible at application. They appear when the operation goes live.
          </p>
          <h2 className="heading-lg cta-block__title">
            Get the structure right{" "}
            <span style={{ color: "var(--blue-light)" }}>before the regulator sees it.</span>
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Diagnostic call. We assess model, jurisdiction fit and structural readiness before recommending a path.
          </p>
        </div>
      </section>

    </main>
  );
}
