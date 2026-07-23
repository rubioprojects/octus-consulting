import Link from "next/link";
import {
  ASSESS_PATH,
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_DISCUSS_URL,
} from "../../../lib/cta";
import OctusSymbolMarker from "../../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../../components/system/OctusEditorialDivider";

export const metadata = {
  title: "iGaming Operator Readiness Checklist",
  description:
    "Educational checklist for iGaming operators preparing market entry, licensing, banking, compliance and launch — jurisdiction-neutral, not legal advice.",
  openGraph: {
    title: "iGaming Operator Readiness Checklist | Octus",
    description:
      "Identify missing workstreams before licensing, banking and launch. Educational only — not a regulatory determination.",
    url: "https://octusconsulting.com/resources/igaming-operator-readiness",
    images: [
      {
        url: "https://octusconsulting.com/brand/social/octus-og-default.png",
        width: 1200,
        height: 630,
        alt: "Octus Consulting",
      },
    ],
  },
  alternates: {
    canonical: "https://octusconsulting.com/resources/igaming-operator-readiness",
  },
};

const SECTIONS: { n: string; title: string; items: string[] }[] = [
  {
    n: "01",
    title: "Business model",
    items: [
      "B2C operator, B2B supplier, hybrid or affiliate-led model defined",
      "Products/games and geographies in scope documented",
      "Revenue and payment flows mapped at a high level",
    ],
  },
  {
    n: "02",
    title: "Target jurisdiction",
    items: [
      "Primary market(s) selected with rationale",
      "Regulatory body and authorization type identified",
      "Local presence / representation requirements understood (varies by market)",
    ],
  },
  {
    n: "03",
    title: "Corporate structure",
    items: [
      "Operating entity vs holding design agreed",
      "Cross-border entity map drafted if multi-jurisdiction",
      "Governance and decision rights clear",
    ],
  },
  {
    n: "04",
    title: "Ownership and UBO documentation",
    items: [
      "Ultimate beneficial owners identified and documentable",
      "Source-of-funds / source-of-wealth narrative prepared for banking and licensing",
      "Shareholder agreements and cap table consistent with filings",
    ],
  },
  {
    n: "05",
    title: "Licensing",
    items: [
      "License class and application pathway defined",
      "Dossier owners and evidence register assigned",
      "Timeline realism checked against structural readiness (not hopes)",
    ],
  },
  {
    n: "06",
    title: "Tax coordination",
    items: [
      "Tax workstream owner named (often local adviser)",
      "Entity and payment design reviewed for tax dependencies",
      "Octus/local counsel roles clarified — no assumption that one firm covers all reserved tax advice",
    ],
  },
  {
    n: "07",
    title: "Banking",
    items: [
      "Target bank profile and risk appetite understood",
      "Corporate and AML pack aligned to bank questions",
      "Contingency if primary bank declines",
    ],
  },
  {
    n: "08",
    title: "Payments and PSPs",
    items: [
      "Primary and backup PSP strategy",
      "Settlement, currency and chargeback handling designed",
      "Single-provider dependency avoided where possible",
    ],
  },
  {
    n: "09",
    title: "AML and KYC",
    items: [
      "Customer due diligence programme designed for real volumes",
      "Monitoring, escalation and SAR/STR pathways defined as required locally",
      "Policies matched to operating procedures — not shelfware",
    ],
  },
  {
    n: "10",
    title: "Responsible gaming",
    items: [
      "Player protection measures appropriate to the market",
      "Self-exclusion / limits / advertising rules considered",
      "Evidence that RG is operational, not only declared",
    ],
  },
  {
    n: "11",
    title: "Platform and suppliers",
    items: [
      "Critical suppliers listed (platform, games, KYC, hosting)",
      "Contracts allocate regulatory and security responsibilities",
      "B2B supplier licensing duties checked where applicable",
    ],
  },
  {
    n: "12",
    title: "Laboratories and technical certification",
    items: [
      "Lab / certification path identified (where required)",
      "Evidence pack and gap analysis planned before audit dates",
      "Change-management for certified components understood",
    ],
  },
  {
    n: "13",
    title: "Cybersecurity and data",
    items: [
      "Security ownership and incident response defined",
      "Personal data / player data obligations mapped (e.g. local privacy law)",
      "Vendor access and logging adequate for audits",
    ],
  },
  {
    n: "14",
    title: "Commercial contracts",
    items: [
      "Player T&Cs / B2B MSAs consistent with license and bank story",
      "Marketing and affiliate agreements controlled",
      "IP and branding rights clear across entities",
    ],
  },
  {
    n: "15",
    title: "Reporting and ongoing compliance",
    items: [
      "Regulatory reporting calendar drafted",
      "Internal compliance owner post-license named",
      "Board / management reporting cadence defined",
    ],
  },
  {
    n: "16",
    title: "Launch sequencing",
    items: [
      "License, bank, PSP, certification and go-live order agreed",
      "No soft launch that violates authorization conditions",
      "Rollback / pause criteria if a dependency slips",
    ],
  },
  {
    n: "17",
    title: "Remediation readiness",
    items: [
      "Known gaps logged with owners",
      "Plan if regulator, bank or PSP issues an adverse notice",
      "When to escalate to an Assess conversation with Octus",
    ],
  },
];

export default function IgamingOperatorReadinessPage() {
  return (
    <main className="authority-asset">
      <article className="authority-asset__doc">
        <header className="authority-asset__hero surface-dark">
          <div className="authority-asset__inner">
            <OctusSymbolMarker tone="white" size={20} />
            <p className="label text-white/70">Authority asset · Checklist</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
              iGaming Operator Readiness Checklist
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              A jurisdiction-neutral checklist to spot missing workstreams before licensing, banking
              and launch — for operators, founders, market-entry teams and compliance leads.
            </p>
            <p className="authority-asset__print-hint mt-4 font-sans text-xs text-white/45 print:hidden">
              Tip: Print → Save as PDF for internal circulation.
            </p>
          </div>
        </header>

        <div className="authority-asset__inner authority-asset__body bg-background py-16 md:py-20">
          <aside className="authority-asset__notice mb-12 rounded-sm border border-border bg-secondary/40 p-5">
            <h2 className="font-sans text-sm font-semibold text-primary">Important</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm text-muted-foreground">
              <li>Requirements vary by jurisdiction.</li>
              <li>This checklist is educational.</li>
              <li>It is not legal advice or a regulatory determination.</li>
              <li>It does not certify readiness or promise licensing, banking or approval success.</li>
              <li>It does not produce an automated score.</li>
            </ul>
          </aside>

          <p className="body-large mb-10 max-w-2xl">
            Use this to prepare internal discussion and to approach Octus with clearer context —
            not as a substitute for jurisdiction-specific advice.
          </p>

          {SECTIONS.map((sec, i) => (
            <section key={sec.n} className="authority-asset__section mb-12">
              {i > 0 && <OctusEditorialDivider className="mb-10 ml-0 mr-auto" />}
              <div className="flex items-baseline gap-3">
                <span className="editorial-numeral editorial-numeral--sm">{sec.n}</span>
                <h2 className="heading-sm">{sec.title}</h2>
              </div>
              <ul className="mt-5 flex list-none flex-col gap-3">
                {sec.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-border/60 pb-3 font-sans text-sm text-foreground last:border-0"
                  >
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 rounded-sm border border-primary/40"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="authority-asset__cta mt-14 border-t border-border pt-10 print:hidden">
            <h2 className="heading-sm mb-3">Talk to Octus</h2>
            <p className="body-text mb-6 max-w-xl">
              If gaps are structural — licensing, banking, compliance or launch sequencing — discuss
              the operation or request an assessment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_DISCUSS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {CTA_DISCUSS_LABEL}
              </a>
              <a
                href={ASSESS_PATH}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-base font-medium text-primary transition-colors hover:bg-secondary no-underline"
              >
                {CTA_ASSESS_LABEL}
              </a>
              <a
                href={MAILTO_DISCUSS}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-base font-medium text-primary transition-colors hover:bg-secondary"
              >
                {CTA_EMAIL_LABEL}
              </a>
            </div>
            <p className="mt-6 font-sans text-sm">
              <Link href="/markets/igaming" className="text-primary no-underline hover:underline">
                iGaming market →
              </Link>
              {" · "}
              <Link href="/what-octus-does" className="text-primary no-underline hover:underline">
                What Octus does →
              </Link>
              {" · "}
              <Link href="/intelligence" className="text-primary no-underline hover:underline">
                Intelligence →
              </Link>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
