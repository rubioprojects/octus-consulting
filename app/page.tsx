import Link from "next/link";
import { Fragment } from "react";
import HomeModulesAccordion from "../components/HomeModulesAccordion";
import OctusStripSeparatorIcon from "../components/OctusStripSeparatorIcon";

/**
 * Authority strip copy: aligned with homepage language.
 * Today the site UI is English-only (`app/layout.tsx` → `lang="en"`).
 * When the homepage is fully translated to PT, set `homeAuthorityLocale` to `"pt"`.
 */
const AUTHORITY_STRIP = {
  en: {
    aria: "Core services",
    items: [
      "Licensing",
      "Regulatory Structuring",
      "Compliance",
      "Banking & Payments",
      "Market Entry",
      "High-Risk Operations",
    ],
  },
  pt: {
    aria: "Serviços centrais",
    items: [
      "Licenciamento",
      "Estruturação regulatória",
      "Compliance",
      "Banking e pagamentos",
      "Entrada em mercado",
      "Operações de alto risco",
    ],
  },
} as const;

const homeAuthorityLocale: keyof typeof AUTHORITY_STRIP = "en";

export const metadata = {
  title: "Octus Consulting — Regulatory & Operational Structuring",
  description:
    "We design and operate regulatory infrastructure for high-risk and regulated businesses.",
};

const moduleRows = [
  {
    num: "01",
    title: "Regulatory Structuring",
    href: "/regulatory",
    featured: [
      { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
      { label: "Fintech Licensing", href: "/solutions/regulatory/fintech-licensing" },
      { label: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
    ],
  },
  {
    num: "02",
    title: "Compliance & Risk",
    href: "/compliance",
    featured: [
      { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
      { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
      { label: "AML/KYC", href: "/solutions/compliance/aml-kyc" },
      { label: "GLI Readiness", href: "/solutions/compliance/gli-readiness" },
    ],
  },
  { num: "03", title: "Legal Architecture", href: "/legal-architecture", featured: [] },
  {
    num: "04",
    title: "Corporate Structuring",
    href: "/corporate",
    featured: [
      { label: "Company Formation", href: "/solutions/corporate/company-formation" },
      { label: "Offshore Structuring", href: "/solutions/corporate/offshore-structuring" },
      { label: "Holding Design", href: "/solutions/corporate/holding-design" },
    ],
  },
  { num: "05", title: "Ownership & UBO Architecture", href: "/private-clients", featured: [] },
  { num: "06", title: "Audit & Readiness", href: "/audit", featured: [] },
  { num: "07", title: "International Hub", href: "/international-hub", featured: [] },
];

const testimonials = [
  {
    quote:
      "Octus restructured what three other firms could not. Banking resolved in weeks, after months of failed attempts.",
    name: "Available on request",
    sector: "iGaming operator",
  },
  {
    quote:
      "The diagnostic exposed structural gaps we were about to submit with. Fixing them avoided a failed licensing process.",
    name: "Available on request",
    sector: "Fintech founder",
  },
  {
    quote:
      "We thought we had compliance. We had documentation. Octus built an operational system.",
    name: "Available on request",
    sector: "Crypto platform",
  },
];

export default function HomePage() {
  const authority = AUTHORITY_STRIP[homeAuthorityLocale];

  return (
    <main>
      <section className="home-hero relative flex min-h-[90vh] items-center overflow-hidden pt-20 surface-dark px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <div className="mb-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            Regulated Operations
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            We fix that.
            <br />
            <span className="text-white/50 italic">Structurally.</span>
          </h1>
          <p className="mb-12 max-w-xl text-lg leading-relaxed text-white/60">
            Licensing, compliance and banking don&apos;t fail in isolation.
            They break when the structure behind them does not hold.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              Discuss your structure →
            </Link>
            <Link
              href="/diagnostic"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Run a regulatory diagnostic →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="w-full border-b border-white/[0.06]"
        style={{ backgroundColor: "#0F172A" }}
        aria-label={authority.aria}
      >
        {/* min-w-full + w-max: center when it fits; on narrow screens scroll without “cropped center” */}
        <div className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-[52px] min-h-[48px] max-h-[60px] w-max min-w-full items-center justify-center gap-x-3 px-5 font-sans text-[13px] font-medium tracking-wide text-white sm:gap-x-4 sm:px-6 sm:text-sm md:px-8 md:text-[15px]">
            {authority.items.map((label, i) => (
              <Fragment key={label}>
                {i > 0 && (
                  <OctusStripSeparatorIcon className="h-4 w-4 shrink-0 text-white opacity-70" />
                )}
                <span className="whitespace-nowrap">{label}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
            <div className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-r-0">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
                <strong>15+</strong>
              </span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">jurisdictions</span>
            </div>
            <div className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-r-0">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
                <strong>2019</strong>
              </span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">Operating since</span>
            </div>
            <div className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-r-0">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
                <strong>48h</strong>
              </span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">first response</span>
            </div>
            <div className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-r-0">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
                <strong>7</strong>
              </span>
              <span className="mt-2 font-sans text-sm text-muted-foreground">operational modules</span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:gap-12">
            <div className="flex max-w-md flex-col items-center gap-3 sm:flex-row sm:items-start">
              <img
                src="/seal-exin-dpo.png"
                alt="EXIN Data Protection Officer Certified"
                className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 md:h-20"
              />
              <p className="text-center text-sm text-muted-foreground sm:text-left">
                Certified data protection capability (EXIN)
              </p>
            </div>
            <div className="flex w-full max-w-2xl flex-col items-center gap-4 sm:items-start">
              <p className="text-center text-xs text-muted-foreground sm:text-left">
                Aligned with regulatory and compliance frameworks
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <img
                  src="/seal-gdpr.png"
                  alt="GDPR"
                  className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 md:h-20"
                />
                <img
                  src="/seal-lgpd.png"
                  alt="LGPD"
                  className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 md:h-20"
                />
                <img
                  src="/seal-esg.png"
                  alt="ESG"
                  className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 md:h-20"
                />
                <img
                  src="/seal-mulher.png"
                  alt="Women-Led Business Recognition"
                  className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 md:h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">What we fix</p>
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
            <p className="section-label mb-4 block">Selected mandates.</p>
            <h2 className="heading-section mb-6">Selected mandates.</h2>
            <p className="body-large">Real operations under pressure.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                tag: "iGaming · Curaçao",
                title: "License active.\nNo bank account.",
                body: "Active Curaçao license for 6 months, no operational account. We restructured the documentation, aligned AML policies and coordinated with three banks simultaneously. Account open in 11 weeks.",
              },
              {
                tag: "Fintech · Brazil",
                title: "International operator.\nNew regulated market.",
                body: "We coordinated full corporate structuring, regulatory dossier and direct interaction with SPA/MF authorities for the Brazilian sports betting authorization process.",
              },
              {
                tag: "Compliance · Audit readiness",
                title: "GLI audit scheduled.\nNo evidence organized.",
                body: "Full gap analysis, evidence register and readiness pack delivered in 6 weeks. Client entered audit with complete documentation and zero critical findings.",
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
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            We don&apos;t consult on theory. We step into live operations and restructure what isn&apos;t working.
          </p>
          <Link
            href="/diagnostic"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
          >
            Request assessment →
          </Link>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Explore</p>
            <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: "Markets", href: "/markets" },
                { label: "Jurisdictions", href: "/jurisdictions" },
                { label: "Solutions", href: "/solutions" },
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
            <h2 className="heading-section mb-6">Seven operational modules.</h2>
          </div>
          <HomeModulesAccordion modules={moduleRows} />
        </div>
      </section>

      <section className="operate-section">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="operate-grid">
            <div>
              <p className="label">How we operate</p>
              <h2 className="heading-md operate-title">Execution, not advisory.</h2>
              <p className="body-lg operate-body">
                Octus acts as the execution layer behind your operation. We align licensing, compliance, banking and structure under one point of contact.
              </p>
              <p className="body operate-body" style={{ marginTop: "16px" }}>
                Built in iGaming and applied across fintech, crypto and other regulated sectors since 2019.
              </p>
            </div>
            <div>
              <div className="grid-2 operate-stats" style={{ gap: "1px", background: "var(--border-solid)", borderRadius: "12px", overflow: "hidden" }}>
                {[
                  { num: "15+", label: "Jurisdictions" },
                  { num: "2019", label: "Operating since" },
                  { num: "48h", label: "First response" },
                  { num: "7", label: "Operational modules" },
                ].map((s) => (
                  <div key={s.num} className="card operate-stat" style={{ borderRadius: "0", border: "none" }}>
                    <p className="stat-num">{s.num}</p>
                    <p className="stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="juris-strip operate-juris" style={{ marginTop: "16px" }}>
                <p className="juris-strip-label">Active jurisdictions</p>
                <div className="chip-row">
                  <span className="chip-juris">Brazil (SPA/MF)</span>
                  <span className="chip-juris">UK</span>
                  <Link href="/jurisdictions/malta" className="chip-juris chip-juris-link">Malta (MGA)</Link>
                  <span className="chip-juris">Cyprus</span>
                  <span className="chip-juris">BVI</span>
                  <Link href="/jurisdictions/portugal" className="chip-juris chip-juris-link">Portugal</Link>
                  <Link href="/jurisdictions/curacao" className="chip-juris chip-juris-link">Curaçao (GCB)</Link>
                  <Link href="/jurisdictions/uae" className="chip-juris chip-juris-link">UAE</Link>
                  <span className="chip-juris">Cayman Islands</span>
                  <span className="chip-juris">Mexico</span>
                  <span className="chip-juris">Panama</span>
                  <Link href="/jurisdictions/isle-of-man" className="chip-juris chip-juris-link">Isle of Man</Link>
                  <span className="chip-juris">Gibraltar</span>
                  <span className="chip-juris-more">+more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">How we work with you</p>
            <h2 className="heading-section">
              Every operation requires a different level of involvement.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              ["Project", "Fixed scope for licensing or market entry"],
              ["Ongoing", "Continuous regulatory and compliance coverage"],
              ["Hour Package", "Pre-paid hours for recurring demands"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg bg-secondary p-6 text-center md:p-8">
                <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Trusted where structure matters</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {testimonials.map((item) => (
              <div
                key={item.quote}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <p className="mb-6 font-sans text-base leading-relaxed text-foreground">&quot;{item.quote}&quot;</p>
                <p className="font-sans text-sm text-muted-foreground">— {item.name}</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">— {item.sector}</p>
              </div>
            ))}
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
          <p className="mx-auto mb-12 max-w-2xl font-sans text-lg font-medium text-foreground">
            If you are building something real, it will.
          </p>
          <p className="body-large mx-auto mb-12 max-w-2xl">
            This is for operators building real businesses under regulatory and operational constraints.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Discuss your structure →
          </Link>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body cta-block__sub" style={{ color: "var(--white-40)" }}>
            If your business depends on approval, it will eventually fail.
            <br />
            If it is designed to operate, it can scale.
          </p>
          <h2 className="heading-lg cta-block__title">
            If your structure breaks, your operation stops.
          </h2>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Discuss your structure →
          </Link>
        </div>
      </section>
    </main>
  );
}
