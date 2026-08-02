import Link from "next/link";
import type { PublicArea } from "../../lib/publicAreas";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "./PageHero";
import { CtaLink } from "./CtaButton";

export default function AreaHubPage({ area }: { area: PublicArea }) {
  const primaryHref = area.primaryCta === "assess" ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = area.primaryCta === "assess" ? CTA_ASSESS_LABEL : CTA_DISCUSS_LABEL;

  return (
    <main>
      <PageHero
        eyebrow={area.crisis ? "Service area · Crisis entry" : `Service area ${area.num}`}
        title={area.name}
        titleSecondLine={area.oneSentence}
        description={area.summary}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={
          area.primaryCta === "assess"
            ? { href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }
            : { href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }
        }
      />

      {area.legalBoundary && (
        <section className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Boundary: </span>
              Octus is not a law firm. This area covers legal and structural{" "}
              <em>architecture</em> for regulated operations — coordination, frameworks and
              structural requirements — working with independent counsel where appropriate.
            </p>
          </div>
        </section>
      )}

      {area.historicalAlias && (
        <section className="border-b border-border py-6">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-xs text-muted-foreground">
              Historical label (metadata / redirects only): {area.historicalAlias}
            </p>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="section-label mb-4 block">When clients need this</p>
            <ul className="flex list-none flex-col gap-3">
              {area.whenNeeded.map((item) => (
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
            <p className="section-label mb-4 block">Representative services</p>
            <ul className="flex list-none flex-col gap-4">
              {area.services.map((svc) => (
                <li key={svc.id} className="border-l-2 border-border pl-4">
                  <p className="font-sans text-base font-medium text-foreground">{svc.name}</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {svc.oneSentence}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {area.providerClasses && area.providerClasses.length > 0 && (
        <section className="surface-elevated py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-label mb-4 block">Specialist coordination classes</p>
            <h2 className="heading-section mb-4 max-w-2xl">
              Classes of counterparties — not a partner gallery.
            </h2>
            <p className="body-large mb-10 max-w-2xl text-muted-foreground">
              Octus coordinates introductions and sequencing across specialist classes. Listing a
              class does not imply endorsement, guaranteed availability, or guaranteed onboarding.
            </p>
            <ul className="grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {area.providerClasses.map((cls) => (
                <li
                  key={cls}
                  className="rounded-sm border border-border bg-background px-4 py-3 font-sans text-sm text-foreground"
                >
                  {cls}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {area.intakeHref && (
        <section className="border-y border-border bg-primary/[0.03] py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div>
              <p className="section-label mb-2 block">Intake path</p>
              <p className="body-large max-w-xl">
                Remediation &amp; Readiness is the service area. Diagnostic is the intake path —
                they are connected, not the same thing.
              </p>
            </div>
            <CtaLink href={area.intakeHref} variant="primary">
              {area.intakeLabel || "Open diagnostic"} →
            </CtaLink>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label mb-4 block">Industries</p>
              <ul className="flex list-none flex-wrap gap-2">
                {area.markets.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      className="inline-flex rounded-sm border border-border px-3 py-1.5 font-sans text-sm text-foreground no-underline hover:border-primary hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-4 block">Related depth</p>
              <ul className="flex list-none flex-col gap-2">
                {area.relatedDeep.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                    >
                      {r.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-12 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground">
            We do not guarantee licensing approvals, banking outcomes, certification results or
            regulator decisions. Octus coordinates structure and execution within what it controls.
          </p>
          <div className="mt-8">
            <CtaLink href="/solutions" variant="secondary">
              All services →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
