import Link from "next/link";
import PageHero from "../../../components/system/PageHero";
import { CtaLink } from "../../../components/system/CtaButton";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Banking & Payments",
  description:
    "Octus coordinates the corporate, compliance, provider and remediation workstreams required for banking and payment operations in regulated markets.",
  path: "/solutions/banking-payments-infrastructure",
});

const routes = [
  {
    title: "Corporate Structuring",
    href: "/solutions/corporate-structuring",
    focus: [
      "Banking readiness",
      "Ownership and documentation",
      "Corporate and tax structure",
      "Institutional bankability",
    ],
  },
  {
    title: "International Hub",
    href: "/international-hub",
    focus: [
      "Bank and PSP identification",
      "Payment-provider coordination",
      "Introductions",
      "Payment architecture",
    ],
  },
  {
    title: "Remediation & Readiness",
    href: "/solutions/remediation-readiness",
    focus: [
      "Rejected applications",
      "Blocked accounts",
      "Failed payment infrastructure",
      "Remediation of existing problems",
    ],
  },
];

export default function BankingPaymentsRoutingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Supporting guidance"
        title="Banking & Payments"
        titleSecondLine="Prepare the structure, identify the right providers and resolve existing banking or payment constraints."
        description="Octus coordinates the corporate, compliance, provider and remediation workstreams required for banking and payment operations in regulated markets."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: "/contact", label: "Contact Octus →" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How we can help</p>
          <h2 className="heading-section mb-4 max-w-2xl">Choose the support you need</h2>
          <p className="body-large mb-12 max-w-2xl text-muted-foreground">
            Select the path that matches your situation — readiness, provider coordination, or
            remediation when banking or payments are already blocked.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {routes.map((route) => (
              <article
                key={route.href}
                className="flex flex-col rounded-sm border border-border bg-background p-6 md:p-8"
              >
                <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
                  <Link href={route.href} className="text-inherit no-underline hover:text-primary">
                    {route.title}
                  </Link>
                </h3>
                <ul className="mb-6 flex-1 list-none space-y-2">
                  {route.focus.map((item) => (
                    <li key={item} className="font-sans text-sm text-muted-foreground">
                      · {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={route.href}
                  className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open {route.title} →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaLink href="/solutions/regulatory/banking-payments" variant="secondary">
              Banking &amp; Payments depth →
            </CtaLink>
            <CtaLink href="/solutions" variant="secondary">
              Explore related services →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
