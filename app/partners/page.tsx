import {
  CTA_DISCUSS_LABEL,
  CTA_PARTNERSHIP_LABEL,
  WHATSAPP_DISCUSS_URL,
  WHATSAPP_PARTNERSHIP_URL,
} from "../../lib/cta";
import { PARTNER_CLASSES } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "International Partners",
  description:
    "Collaborate with Octus as lead contractor for regulated operations. CSPs, counsel, advisors and specialists.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partners"
        title="Collaboration infrastructure."
        titleSecondLine="Not competition. Not a staff directory."
        description="Octus works with counsel, CSPs, advisors and specialists as an execution partner for highly regulated operations, with clear accountability when we lead."
        primaryCta={{
          href: WHATSAPP_PARTNERSHIP_URL,
          label: CTA_PARTNERSHIP_LABEL,
          external: true,
        }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How we collaborate</p>
          <h2 className="heading-section mb-6">Referral and co-delivery</h2>
          <p className="body-large mb-4">
            Partners bring client relationships, local counsel, corporate services or specialist
            depth. Octus brings multi-layer coordination when the operation needs a single
            execution owner.
          </p>
          <p className="body-text text-muted-foreground">
            Partner names and logos appear only with explicit approval.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Partner classes</p>
          <h2 className="heading-section mb-10 max-w-2xl">Who this is for</h2>
          <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_CLASSES.map((label) => (
              <li
                key={label}
                className="rounded-sm border border-border bg-background px-5 py-4 font-sans text-sm text-foreground"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <CtaLink
            href={WHATSAPP_PARTNERSHIP_URL}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA_PARTNERSHIP_LABEL}
          </CtaLink>
          <p className="mt-6">
            <Link href="/how-we-engage" className="font-sans text-sm text-primary no-underline hover:text-primary/80">
              How we engage →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
