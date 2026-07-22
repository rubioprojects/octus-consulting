import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import { ENGAGEMENT_MODELS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "How We Engage",
  description:
    "Lead Contractor programme and engagement models for regulated operations — accountability, coordination and execution.",
};

export default function HowWeEngagePage() {
  return (
    <main>
      <PageHero
        eyebrow="How we engage"
        title="Lead contractor."
        titleSecondLine="Not one more provider."
        description="Octus assumes coordination across regulatory, compliance, banking and corporate layers — so you are not managing a fragmented stack of advisors."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Accountability</p>
          <h2 className="heading-section mb-6">What lead contractor means</h2>
          <p className="body-large mb-4">
            Most regulated operations fail because licensing, legal, compliance and banking move as
            separate workstreams with no single owner of the whole.
          </p>
          <p className="body-text mb-4">
            As lead contractor, Octus coordinates the structure that needs to hold — and stays
            accountable for the execution mandate you agree. We do not promise regulator approvals,
            bank decisions or outcomes outside that mandate.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Engagement models</p>
          <h2 className="heading-section mb-12 max-w-2xl">How engagement scales</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ENGAGEMENT_MODELS.map((m) => (
              <article key={m.num} className="rounded-sm border border-border bg-background p-6 md:p-8">
                <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {m.num}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{m.title}</h3>
                <p className="body-text text-muted-foreground">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="body-large max-w-xl">
            Crisis or blocked operation? Start with Operational Remediation.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/solutions/operational-remediation-readiness" variant="secondary">
              Remediation →
            </CtaLink>
            <CtaLink href={MAILTO_DISCUSS} variant="secondary">
              {CTA_EMAIL_LABEL}
            </CtaLink>
            <Link
              href="/what-octus-does"
              className="inline-flex items-center font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              What Octus does →
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              Partner with Octus →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
