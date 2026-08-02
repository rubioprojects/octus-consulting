import Link from "next/link";
import PageHero from "../../../components/system/PageHero";
import { CtaLink } from "../../../components/system/CtaButton";
import {
  CTA_DISCUSS_LABEL,
  CTA_ASSESS_LABEL,
  WHATSAPP_DISCUSS_URL,
  WHATSAPP_ASSESS_URL,
} from "../../../lib/cta";

export const metadata = {
  title: "Banking & Payments — How Octus coordinates the work",
  description:
    "Banking and payments for regulated operations are coordinated through Corporate Structuring, International Hub and Remediation & Readiness — not as a standalone service area.",
  // Supporting routing page — preserve SEO URL; self-canonical.
  alternates: {
    canonical: "https://octusconsulting.com/solutions/banking-payments-infrastructure",
  },
};

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
        titleSecondLine="Coordinated across the structure — not a standalone catalogue item."
        description="When banking or payments is the pressure point, Octus routes the work through the service areas that actually carry readiness, introductions and remediation."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Where the work sits</p>
          <h2 className="heading-section mb-4 max-w-2xl">Three coordinated paths.</h2>
          <p className="body-large mb-12 max-w-2xl text-muted-foreground">
            Choose the path that matches your situation. Depth pages on banking and payments remain
            available where useful.
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
              All services →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
