import Link from "next/link";
import { Fragment } from "react";
import HomeModulesAccordion from "../components/HomeModulesAccordion";
import { CtaLink } from "../components/system/CtaButton";
import Eyebrow from "../components/system/Eyebrow";
import OctusIcon from "../components/icons/OctusIcon";
import OctusStripSeparatorIcon from "../components/OctusStripSeparatorIcon";
import { ENGAGEMENT_MODELS } from "../lib/commercial";
import { OCTUS_WHAT_WE_DO, PUBLIC_AREAS } from "../lib/publicAreas";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../lib/cta";

const AUTHORITY_STRIP = PUBLIC_AREAS.map((a) => a.name);

const areaRows = PUBLIC_AREAS.map((area) => ({
  num: area.num,
  title: area.name,
  href: area.href,
  featured: area.services.slice(0, 3).map((s) => ({ label: s.name, href: area.href })),
}));

export const metadata = {
  title: "Premium Execution for Regulated Operations",
  description: OCTUS_WHAT_WE_DO,
  alternates: { canonical: "https://octusconsulting.com/" },
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Identity */}
      <section className="home-hero relative flex min-h-[88vh] items-center overflow-hidden pt-24 surface-dark px-4 sm:px-6 lg:px-8 md:pt-28">
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <Eyebrow tone="dark" className="mb-8 md:mb-10">
            Octus Consulting
          </Eyebrow>
          <h1 className="font-heading text-[2.35rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            Regulated operations don&apos;t fail randomly.
            <br />
            <span className="text-white/85">They fail structurally.</span>
          </h1>
          <p className="mt-8 mb-12 max-w-2xl text-base leading-[1.7] text-white/75 sm:text-lg md:mt-10 md:mb-14">
            {OCTUS_WHAT_WE_DO}
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
            <CtaLink href="/solutions" variant="on-dark-secondary">
              Explore services →
            </CtaLink>
          </div>
        </div>
      </section>

      <section
        className="authority-strip w-full border-b border-white/[0.06]"
        style={{ backgroundColor: "#0B1220" }}
        aria-label="Public service areas"
      >
        <div className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-14 min-w-full w-max items-center justify-center gap-x-4 px-6 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 sm:gap-x-6 sm:px-10 sm:text-[12px] md:h-16">
            {AUTHORITY_STRIP.map((label, i) => (
              <Fragment key={label}>
                {i > 0 && (
                  <OctusStripSeparatorIcon className="h-3 w-3 shrink-0 text-white/25" />
                )}
                <span className="pointer-events-none select-none whitespace-nowrap">{label}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What Octus does */}
      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <p className="section-label mb-4 block">What Octus does</p>
              <h2 className="heading-section mb-6">
                Structure regulated operations so they can hold under scrutiny.
              </h2>
              <p className="body-large text-muted-foreground">{OCTUS_WHAT_WE_DO}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="font-heading text-3xl font-bold text-primary">15+</span>
                <span className="mt-2 block font-sans text-sm text-muted-foreground">jurisdictions</span>
              </div>
              <div>
                <span className="font-heading text-3xl font-bold text-primary">2019</span>
                <span className="mt-2 block font-sans text-sm text-muted-foreground">operating since</span>
              </div>
              <div>
                <span className="font-heading text-3xl font-bold text-primary">7</span>
                <span className="mt-2 block font-sans text-sm text-muted-foreground">public areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seven public areas */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Services</p>
            <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/solutions" className="font-sans text-sm text-primary no-underline hover:text-primary/80">
                All services →
              </Link>
            </div>
            <h2 className="heading-section mb-6">Seven public areas. One execution partner.</h2>
            <p className="body-large text-muted-foreground">
              Banking readiness and tax coordination sit inside these areas — they are not eighth
              public pillars.
            </p>
          </div>
          <HomeModulesAccordion modules={areaRows} />
        </div>
      </section>

      {/* 4. Industries */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Industries</p>
            <h2 className="heading-section mb-6">Where we operate.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              ["iGaming & Betting", "Licensing, compliance, banking readiness, post-license operations", "/markets/igaming"],
              ["Fintech & Payments", "EMI pathways, payment infrastructure, cross-border compliance", "/markets/fintech"],
              ["Crypto & Digital Assets", "CASP/VASP pathways, MiCA readiness, banking access", "/markets/crypto"],
              ["High-Risk Operations", "Banking resilience, enhanced compliance, institutional access", "/markets/high-risk"],
            ].map(([title, desc, href]) => (
              <Link
                key={title}
                href={href}
                className="group relative block rounded-lg border border-transparent bg-secondary/30 p-6 transition-all duration-300 hover:border-border md:p-8"
              >
                <h3 className="mb-2 pr-10 font-sans text-lg font-semibold text-primary">{title}</h3>
                <p className="body-text mb-3">{desc}</p>
                <span className="font-sans text-sm text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Octus works */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
            <div className="max-w-2xl">
              <p className="section-label mb-4 block">How Octus works</p>
              <h2 className="heading-section">Accountability scales with the mandate.</h2>
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

      {/* 6. Trust / team */}
      <section className="border-y border-border bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <div>
              <p className="section-label mb-4 block">Trust evidence</p>
              <h2 className="heading-section mb-4">Operators, not a brochure wall.</h2>
              <p className="body-large mb-6 text-muted-foreground">
                Built in iGaming and applied across fintech, digital assets and other regulated
                sectors. Certified data protection capability (EXIN DPO). Proof is operational —
                not a certificate gallery.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink href="/team">Meet the team →</CtaLink>
                <CtaLink href="/about" variant="secondary">
                  About Octus →
                </CtaLink>
              </div>
            </div>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              {[
                "One accountable coordination layer",
                "No guaranteed licensing or banking outcomes",
                "No partner-logo endorsement galleries",
                "Crisis entry via Remediation & Readiness / diagnostic",
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

      {/* 7. Contact */}
      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.15em] text-white/55">
            Contact
          </p>
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl">
            If the structure is stuck, blocked or exposed — talk to Octus.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
            Discuss a live situation, or start with diagnostic intake when remediation is the door.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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
            <CtaLink href="/contact" variant="on-dark-secondary">
              Contact page →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
