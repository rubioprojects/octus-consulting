import { Suspense } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { getAllPosts } from "../../lib/posts";
import PageHero from "../../components/system/PageHero";
import Section from "../../components/system/Section";
import InsightsHubClient from "../../components/system/InsightsHubClient";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import { CtaLink } from "../../components/system/CtaButton";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Insights",
  description:
    "One destination for Octus analysis: regulatory developments, market movement and operational perspectives for regulated operations, with webinars and invited expert contributions published here as they are scheduled.",
  path: "/insights",
});

const STREAMS: { title: string; body: string; icon: OctusIconName }[] = [
  {
    title: "Regulatory analysis",
    icon: "regulatory",
    body: "Rules, authorities and jurisdiction shifts, framed by what they change for filings, banking pressure and operating posture.",
  },
  {
    title: "Market developments",
    icon: "markets",
    body: "Sector movement in iGaming, payments, digital assets and adjacent regulated markets, read for structural consequence rather than news value.",
  },
  {
    title: "Operational perspectives",
    icon: "compliance",
    body: "Failure modes and execution patterns observed in mandate work: where controls, evidence and ownership presentation break under scrutiny.",
  },
  {
    title: "Ownership and governance",
    icon: "corporate",
    body: "Founder, ownership and governance questions that decide what a regulated structure can do next.",
  },
];

const FROM_ANALYSIS_TO_STRUCTURE = [
  {
    n: "01",
    t: "Frame the pressure",
    b: "Identify which regulatory, banking, tax, legal or operational constraint actually governs the next decision.",
  },
  {
    n: "02",
    t: "Translate into architecture",
    b: "Convert that pressure into jurisdiction fit, ownership, compliance and commercial sequencing the operation can hold.",
  },
  {
    n: "03",
    t: "Execute with accountability",
    b: "Connect published analysis to a mandate with clear owners, paths and review points.",
  },
];

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Analysis for regulated operations."
        titleSecondLine="One destination."
        description="Regulatory analysis, market developments and operational perspectives from the Octus team, published in a single place. Read as practical insight: verify primary sources for current regulatory claims."
      />

      <Section narrow>
        <OctusSymbolMarker size={18} />
        <p className="section-label mb-4 block">How this is organised</p>
        <h2 className="heading-section mb-4">What you will find here.</h2>
        <p className="body-large mb-8">
          Insights is the reading library behind mandate work: analysis written so it connects to
          structures, controls and decisions that have to hold under scrutiny. It is not a generic
          content hub or an awards wall.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {STREAMS.map((stream) => (
            <article key={stream.title} className="rounded-sm border border-border p-5">
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-primary">
                <OctusIcon name={stream.icon} size={18} />
              </span>
              <h3 className="font-sans text-base font-semibold text-primary">{stream.title}</h3>
              <p className="body-sm mt-2">{stream.body}</p>
            </article>
          ))}
        </div>
        <p className="body-text mt-8">
          Webinars and invited expert contributions will be published in this same library as they
          are scheduled, alongside the written analysis. There is no separate destination to follow.
        </p>
      </Section>

      <Section surface="elevated">
        <Suspense
          fallback={
            <p className="text-sm text-muted-foreground">Loading Insights index…</p>
          }
        >
          <InsightsHubClient posts={posts} />
        </Suspense>
      </Section>

      <Section narrow>
        <p className="section-label mb-4 block">From analysis to structure</p>
        <h2 className="heading-section mb-6">How published analysis becomes executable.</h2>
        <ol className="flex list-none flex-col gap-6">
          {FROM_ANALYSIS_TO_STRUCTURE.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[48px_1fr] gap-6 border-b border-border pb-6 last:border-0"
            >
              <span className="font-heading text-xs font-bold tracking-widest text-primary">
                {step.n}
              </span>
              <div>
                <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{step.t}</h3>
                <p className="body-text">{step.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section surface="elevated" narrow>
        <div className="text-center">
          <h2 className="heading-section mb-4">Discuss a structural question.</h2>
          <p className="body-large mx-auto mb-8 max-w-xl">
            Insight without execution is commentary. If an article maps to a live operational
            constraint, start a conversation. Response times are not promised on this page.
          </p>
          <CtaLink
            href={WHATSAPP_DISCUSS_URL}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA_DISCUSS_LABEL}
          </CtaLink>
        </div>
      </Section>
    </main>
  );
}
