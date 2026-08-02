import Link from "next/link";
import { PUBLIC_AREAS } from "../../lib/publicAreas";
import { CTA_ASSESS_LABEL, CTA_DISCUSS_LABEL, WHATSAPP_ASSESS_URL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";

export const metadata = {
  title: "Services — Seven public areas for regulated operations",
  description:
    "Seven public service areas: Regulatory Structuring, Compliance & Risk, Legal & Structural Architecture, Corporate Structuring, Private Clients, Remediation & Readiness, and International Hub.",
  alternates: { canonical: "https://octusconsulting.com/solutions" },
};

export default function ServicesIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Seven public areas."
        titleSecondLine="One accountable execution partner."
        description="Octus coordinates regulatory, compliance, legal, corporate, private-client, remediation and specialist-network layers as one structure — with a clear door when the operation is already failing."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Public service areas</p>
          <h2 className="heading-section mb-4 max-w-2xl">Approved catalog, plain language.</h2>
          <p className="body-large mb-12 max-w-2xl text-muted-foreground">
            Industries describe where we operate. These seven areas describe what we coordinate.
            Banking and tax are capabilities inside the architecture — not eighth public areas.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {PUBLIC_AREAS.map((area) => (
              <article
                key={area.id}
                className={`flex flex-col rounded-sm border p-6 md:p-8 ${
                  area.crisis
                    ? "border-primary/40 bg-primary/[0.03]"
                    : "border-border bg-background"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {area.num}
                  </span>
                  {area.crisis && (
                    <span className="rounded-sm bg-primary/10 px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-primary">
                      Crisis entry
                    </span>
                  )}
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
                  <Link href={area.href} className="text-inherit no-underline hover:text-primary">
                    {area.name}
                  </Link>
                </h3>
                <p className="mb-4 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                  {area.oneSentence}
                </p>
                <ul className="mb-6 list-none space-y-1.5">
                  {area.services.slice(0, 4).map((svc) => (
                    <li key={svc.id} className="font-sans text-xs text-muted-foreground">
                      · {svc.name}
                    </li>
                  ))}
                  {area.services.length > 4 && (
                    <li className="font-sans text-xs text-muted-foreground">
                      · +{area.services.length - 4} more
                    </li>
                  )}
                </ul>
                {area.legalBoundary && (
                  <p className="mb-4 font-sans text-xs leading-relaxed text-muted-foreground">
                    Not a law firm — legal structures for regulated operations.
                  </p>
                )}
                <Link
                  href={area.href}
                  className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open area →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="section-label mb-2 block">How we engage</p>
            <p className="body-large max-w-xl">
              Lead Contractor Programme and engagement models built for accountability.
            </p>
          </div>
          <CtaLink href="/how-we-engage" variant="primary">
            How we engage →
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
