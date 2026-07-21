import Link from "next/link";
import { Fragment } from "react";
import HomeModulesAccordion from "../components/HomeModulesAccordion";
import { CtaLink } from "../components/system/CtaButton";
import Eyebrow from "../components/system/Eyebrow";
import OctusIcon from "../components/icons/OctusIcon";
import OctusStripSeparatorIcon from "../components/OctusStripSeparatorIcon";
import { ENGAGEMENT_MODELS, SOLUTION_HUBS } from "../lib/commercial";
import { BRAND } from "../lib/brand";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../lib/cta";

/**
 * Authority strip copy: aligned with homepage language.
 * Today the site UI is English-only (`app/layout.tsx` → `lang="en"`).
 * When the homepage is fully translated to PT, set `homeAuthorityLocale` to `"pt"`.
 */
const AUTHORITY_STRIP = {
  en: {
    aria: "Core solutions",
    items: [
      { label: "Regulatory Strategy", icon: "regulatory" as const },
      { label: "Banking & Payments", icon: "banking" as const },
      { label: "Compliance & Risk", icon: "compliance" as const },
      { label: "Corporate Structure", icon: "corporate" as const },
      { label: "Legal Architecture", icon: "licensing" as const },
      { label: "Remediation", icon: "remediation" as const },
    ],
  },
  pt: {
    aria: "Soluções centrais",
    items: [
      { label: "Estratégia regulatória", icon: "regulatory" as const },
      { label: "Banking e pagamentos", icon: "banking" as const },
      { label: "Compliance e risco", icon: "compliance" as const },
      { label: "Estrutura societária", icon: "corporate" as const },
      { label: "Arquitetura jurídica", icon: "licensing" as const },
      { label: "Remediação", icon: "remediation" as const },
    ],
  },
} as const;

const homeAuthorityLocale: keyof typeof AUTHORITY_STRIP = "en";

export const metadata = {
  title: "Premium Execution for Regulated Operations",
  description:
    "Octus is a premium international execution partner for highly regulated operations — licensing, banking, compliance, structure and remediation under one accountable layer.",
};

const solutionRows = SOLUTION_HUBS.map((hub) => ({
  num: hub.num,
  title: hub.title,
  href: hub.href,
  featured: hub.relatedDeep.slice(0, 3),
}));

export default function HomePage() {
  const authority = AUTHORITY_STRIP[homeAuthorityLocale];

  return (
    <main>
      <section className="home-hero relative flex min-h-[88vh] items-center overflow-hidden pt-28 surface-dark px-4 sm:px-6 lg:px-8 md:pt-32">
        <div className="home-hero__atmosphere" aria-hidden="true" />
        <div className="home-hero__mesh" aria-hidden="true" />
        <div
          className="octus-dark-hero__arcs"
          aria-hidden="true"
          style={{ backgroundImage: `url('${BRAND.motifs.arcSecondary}')` }}
        />
        <div className="relative z-10 mx-auto w-full max_w-[56rem]">
          <Eyebrow tone="dark" className="mb-8 md:mb-10">
            Regulated Operations
          </Eyebrow>
          <h1 className="font-heading text-[2.35rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem] lg:leading-[1.08]">
            Regulated operations don&apos;t fail randomly.
            <br />
            <span className="text-white/85">They fail structurally.</span>
          </h1>
          <p className="mt-8 mb-12 max-w-[38rem] text-base leading-[1.7] text-white/75 sm:text-lg md:mt-10 md:mb-14">
            Complex regulated problems need an accountable execution partner — licensing, banking,
            compliance and structure coordinated so the operation can hold under scrutiny.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <CtaLink
              href={WHATSAPP_DISCUSS_URL}
              variant="on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_DISCUSS_LABEL}
            </CtaLink>
            <CtaLink
              href={WHATSAPP_ASSESS_URL}
              variant="on-dark-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_ASSESS_LABEL}
            </CtaLink>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section
        className="authority-strip w-full border-b border-white/[0.06]"
        style={{ backgroundColor: "#0B1220" }}
        aria-label="Practice areas"
      >
        <div className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-14 min-w-full w-max items-center justify-center gap-x-5 px-6 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 sm:gap-x-7 sm:px-10 sm:text-[12px] md:h-16">
            {authority.items.map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && (
                  <OctusStripSeparatorIcon className="h-2.5 w-2.5 shrink-0 text-white/22" />
                )}
                <span className="pointer-events-none inline-flex select-none items-center gap-2.5 whitespace-nowrap">
                  <OctusIcon name={item.icon} size={13} className="text-white/45 opacity-90" />
                  {item.label}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-0">
            <div className="flex flex-col items-center text-center sm:border-r sm:border-border">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">15+</span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">jurisdictions</span>
            </div>
            <div className="flex flex-col items-center text-center sm:border-r sm:border-border">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">2019</span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">Operating since</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">6</span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">solutions</span>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center font-sans text-sm leading-relaxed text-muted-foreground">
            Certified data protection capability (EXIN DPO). Proof is operational — not a certificate wall.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">The regulated problem</p>
            <h2 className="heading-section mb-6">What we fix.</h2>
            <p className="body-large mb-4">
              Licences get approved but banking fails. Compliance exists but does not function. Payment providers exit. Growth exposes structural weaknesses.
            </p>
            <p className="body-text">
              Operations don&apos;t break because of regulation. They break because they are not built to operate under it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                tag: "Licensing",
                title: "Licensing approved. Banking blocked.",
                desc: "The licence exists but no bank will onboard the operation. Corporate structure and compliance documentation do not meet banking requirements.",
              },
              {
                tag: "Compliance",
                title: "Compliance exists on paper.",
                desc: "Policies are drafted but not operational. Audits expose gaps. Regulators ask questions the team cannot answer.",
              },
              {
                tag: "Payments",
                title: "Payment infrastructure fails under growth.",
                desc: "Single PSP dependency. No redundancy. One termination halts operations.",
              },
              {
                tag: "Expansion",
                title: "Structure does not scale across jurisdictions.",
                desc: "What worked in one market breaks in the next. Corporate design, compliance and banking are not coordinated across borders.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-transparent bg-background p-6 transition-all duration-300 hover:border-border md:p-8"
              >
                <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {c.tag}
                </span>
                <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{c.title}</h3>
                <p className="body-text">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">How we work</p>
            <h2 className="heading-section mb-6">A structural approach to regulated operations.</h2>
            <p className="body-large">This is how we approach regulated operations.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Structuring",
                body: "Licensing, jurisdiction and corporate design aligned with regulatory exposure.",
                links: [
                  { label: "Regulatory", href: "/regulatory" },
                  { label: "Corporate", href: "/corporate" },
                  { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
                ],
              },
              {
                title: "Regulatory Operations",
                body: "Compliance systems that operate continuously, not periodically.",
                links: [
                  { label: "Compliance", href: "/compliance" },
                  { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
                  { label: "AML/KYC", href: "/solutions/compliance/aml-kyc" },
                ],
              },
              {
                title: "Control",
                body: "Execution of critical regulatory functions, including DPO and oversight roles.",
                links: [
                  { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
                  { label: "Audit", href: "/audit" },
                ],
              },
            ].map((item, stepIndex) => (
              <div
                key={item.title}
                className="flex flex-col border-border md:border-r md:px-2 md:last:border-r-0"
              >
                <div className="font-heading text-4xl font-light text-primary/20">
                  {String(stepIndex + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 mt-4 font-sans text-lg font-semibold text-primary">{item.title}</h3>
                <p className="body-text mb-4">{item.body}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-sans text-sm text-primary no-underline transition-colors hover:text-primary/80"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Industries</p>
            <h2 className="heading-section mb-6">Where we operate.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              ["iGaming & Betting", "Licensing, compliance, banking, post-license operations", "/markets/igaming"],
              ["Fintech & Payments", "EMI licensing, payment infrastructure, cross-border compliance", "/markets/fintech"],
              ["Crypto & Digital Assets", "CASP/VASP licensing, MiCA compliance, banking access", "/markets/crypto"],
              ["High-Risk Operations", "Banking resilience, enhanced compliance, institutional access", "/markets/high-risk"],
            ].map(([title, desc, href]) => (
              <Link
                key={title}
                href={href}
                className="group relative block rounded-lg border border-transparent bg-background p-6 transition-all duration-300 hover:border-border md:p-8"
              >
                <svg
                  className="absolute right-6 top-6 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <h3 className="mb-2 pr-10 font-sans text-lg font-semibold text-primary transition-colors group-hover:text-primary/80">
                  {title}
                </h3>
                <p className="body-text mb-3">{desc}</p>
                <span className="font-sans text-sm text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "900px" }}>
          <p className="label">Outcomes</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>What this structure allows.</h2>
          <div className="grid-2" style={{ gap: "20px 40px" }}>
            {[
              "Banking continuity under pressure",
              "Regulatory positioning across jurisdictions",
              "Scalable operations without structural failure",
              "Reduced dependency on single providers",
            ].map((item) => (
              <div key={item} style={{ paddingBottom: "16px", borderBottom: "1px solid var(--border-solid)" }}>
                <p className="body" style={{ color: "var(--white)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Pressure patterns</p>
            <h2 className="heading-section mb-6">Where regulated operations stall.</h2>
            <p className="body-large">
              Illustrative situations — not case studies, guarantees or claimed outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                tag: "Banking · Licensed operator",
                title: "License in place.\nInfrastructure blocked.",
                body: "The regulatory layer advanced while banking and payments rejected the operating reality. Structure, compliance and payment readiness need to move as one programme.",
              },
              {
                tag: "Market entry · New venue",
                title: "Expansion planned.\nPathway unclear.",
                body: "Entering a regulated market requires sequencing of licensing, corporate architecture and banking readiness — not parallel vendors without a single accountable layer.",
              },
              {
                tag: "Remediation · Under pressure",
                title: "Audit or rejection.\nEvidence not operable.",
                body: "Policies exist on paper while operational evidence, controls and ownership presentation cannot survive scrutiny. Remediation starts with assessment, not a catalogue.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">
                  {c.tag}
                </span>
                <h3 className="mb-4 whitespace-pre-line font-sans text-lg font-semibold text-primary">{c.title}</h3>
                <p className="body-text flex-1">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl">
            If your operation is stuck, blocked or exposed, we can fix it.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
            We don&apos;t consult on theory. We step into live operations and restructure what isn&apos;t working.
          </p>
          <CtaLink
            href={WHATSAPP_ASSESS_URL}
            variant="on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA_ASSESS_LABEL}
          </CtaLink>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Solutions</p>
            <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: "All solutions", href: "/solutions" },
                { label: "Markets", href: "/markets" },
                { label: "How we engage", href: "/how-we-engage" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-primary no-underline transition-colors hover:text-primary/80"
                >
                  {item.label} →
                </Link>
              ))}
            </div>
            <h2 className="heading-section mb-6">Six solutions. One execution partner.</h2>
            <p className="body-large text-muted-foreground">
              Complex regulated problem → Octus assumes coordination → regulatory and operational
              execution → stable operation.
            </p>
          </div>
          <HomeModulesAccordion modules={solutionRows} />
        </div>
      </section>

      <section className="border-y border-border bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <div>
              <p className="section-label mb-4 block">Crisis entry</p>
              <h2 className="heading-section mb-4">
                Operational Remediation &amp; Readiness
              </h2>
              <p className="body-large mb-6 text-muted-foreground">
                When licensing is delayed, banking rejects the structure, compliance gaps surface, or
                market entry is blocked — start here. Assessment before catalogue.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href={WHATSAPP_ASSESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CTA_ASSESS_LABEL}
                </CtaLink>
                <Link
                  href="/solutions/operational-remediation-readiness"
                  className="inline-flex items-center font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open remediation hub →
                </Link>
              </div>
            </div>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              {[
                "Licensing delay or stalled filings",
                "Banking rejection or payment instability",
                "Compliance gaps under scrutiny",
                "Audit readiness problems",
                "Blocked market entry or regulatory exposure",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border/60 pb-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="operate-section">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="operate-grid">
            <div>
              <p className="label">How we operate</p>
              <h2 className="heading-md operate-title">Accountable execution.</h2>
              <p className="body-lg operate-body">
                Octus is the coordination and execution layer behind regulated operations — licensing,
                compliance, banking and structure under one point of accountability.
              </p>
              <p className="body operate-body" style={{ marginTop: "16px" }}>
                Built in iGaming and applied across fintech, digital assets and other regulated
                sectors. We do not guarantee licensing, banking or outcomes outside Octus control.
              </p>
              <Link
                href="/how-we-engage"
                className="mt-6 inline-flex font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
              >
                How we engage →
              </Link>
            </div>
            <div>
              <div className="juris-strip operate-juris">
                <p className="juris-strip-label">Markets &amp; jurisdictions</p>
                <div className="chip-row">
                  <Link href="/markets/igaming" className="chip-juris chip-juris-link">iGaming</Link>
                  <Link href="/markets/fintech" className="chip-juris chip-juris-link">Fintech</Link>
                  <Link href="/markets/crypto" className="chip-juris chip-juris-link">Digital Assets</Link>
                  <Link href="/markets/high-risk" className="chip-juris chip-juris-link">High-Risk</Link>
                  <Link href="/jurisdictions/malta" className="chip-juris chip-juris-link">Malta</Link>
                  <Link href="/jurisdictions/portugal" className="chip-juris chip-juris-link">Portugal</Link>
                  <Link href="/jurisdictions/curacao" className="chip-juris chip-juris-link">Curaçao</Link>
                  <Link href="/jurisdictions/uae" className="chip-juris chip-juris-link">UAE</Link>
                  <Link href="/jurisdictions" className="chip-juris chip-juris-link">All jurisdictions →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
            <div className="max-w-2xl">
              <p className="section-label mb-4 block">How we engage</p>
              <h2 className="heading-section">
                Accountability scales with the mandate.
              </h2>
            </div>
            <Link
              href="/how-we-engage"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              Full engagement models
              <OctusIcon name="arrow" size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.num} className="border-t border-border pt-6">
                <span className="mb-3 block font-sans text-xs font-medium text-muted-foreground">
                  {model.num}
                </span>
                <h3 className="mb-3 font-sans text-base font-semibold text-primary">{model.title}</h3>
                <p className="body-text text-sm">{model.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="section-label mb-4 block">Intelligence</p>
              <h2 className="heading-section">Authority for operators who need structure.</h2>
              <p className="body-large mt-4">
                Regulatory intelligence, market signals, operational insights and executive
                perspectives — bridged to the existing Insights library.
              </p>
            </div>
            <Link
              href="/intelligence"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              Open Intelligence
              <OctusIcon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="heading-section mb-4">This is not for everyone.</h2>
          <p className="body-large mx-auto mb-4 max-w-2xl">
            We don&apos;t work on short-term strategies, regulatory arbitrage or experimental setups.
          </p>
          <p className="body-large mx-auto mb-4 max-w-2xl">
            If you are looking for a workaround, this will not work.
          </p>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-lg font-medium text-foreground">
            If you are building something real, it will.
          </p>
          <p className="body-large mx-auto mb-12 max-w-2xl">
            This is for operators building real businesses under regulatory and operational constraints.
          </p>
          <p className="mx-auto mb-10 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
            If your business depends on approval, it will eventually fail.
            If it is designed to operate, it can scale.
          </p>
          <a
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {CTA_DISCUSS_LABEL}
          </a>
        </div>
      </section>
    </main>
  );
}
