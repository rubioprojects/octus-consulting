import Link from "next/link";
import type { SolutionHub } from "../../lib/commercial";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "./PageHero";
import { CtaLink } from "./CtaButton";

export default function SolutionHubPage({ hub }: { hub: SolutionHub }) {
  const primaryHref = hub.primaryCta === "assess" ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = hub.primaryCta === "assess" ? CTA_ASSESS_LABEL : CTA_DISCUSS_LABEL;

  return (
    <main>
      <PageHero
        eyebrow={hub.crisis ? "Strategic priority · Crisis entry" : `Solution ${hub.num}`}
        title={hub.title}
        titleSecondLine={hub.problem}
        description={hub.role}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={
          hub.primaryCta === "assess"
            ? { href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }
            : { href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }
        }
      />

      {hub.legalBoundary && (
        <section className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Legal work is delivered or coordinated through qualified counsel according to the
              jurisdiction and scope of the matter. This page covers legal and contractual
              architecture for regulated operations — coordination, frameworks and structural
              requirements.
            </p>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="section-label mb-4 block">When clients need this</p>
            <ul className="flex list-none flex-col gap-3">
              {hub.whenNeeded.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-primary/30 pl-4 font-sans text-base leading-relaxed text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label mb-4 block">What Octus coordinates</p>
            <ul className="flex list-none flex-col gap-3">
              {hub.coordinates.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-border pl-4 font-sans text-base leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How engagement generally works</p>
          <p className="body-large">{hub.engagement}</p>
          <p className="mt-6 body-text text-muted-foreground">
            We do not guarantee licensing approvals, banking outcomes or regulator decisions. Octus
            owns coordination and structural execution within the agreed mandate.
          </p>
          <p className="mt-8">
            <Link
              href="/how-we-engage"
              className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              How we engage →
            </Link>
          </p>
        </div>
      </section>

      {(hub.markets.length > 0 || hub.relatedDeep.length > 0) && (
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {hub.markets.length > 0 && (
              <div className="mb-12">
                <p className="section-label mb-4 block">Related markets</p>
                <div className="flex flex-wrap gap-3">
                  {hub.markets.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      className="rounded-sm border border-border px-4 py-2 font-sans text-sm text-foreground no-underline transition-colors hover:border-primary hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {hub.relatedDeep.length > 0 && (
              <div>
                <p className="section-label mb-4 block">Related services</p>
                <ul className="flex list-none flex-col gap-2">
                  {hub.relatedDeep.map((d) => (
                    <li key={d.href}>
                      <Link
                        href={d.href}
                        className="font-sans text-sm text-primary no-underline hover:text-primary/80"
                      >
                        {d.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white md:text-3xl">
            Next action
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaLink href={primaryHref} variant="on-dark" target="_blank" rel="noopener noreferrer">
              {primaryLabel}
            </CtaLink>
            <CtaLink href="/solutions" variant="on-dark-secondary">
              All solutions →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
