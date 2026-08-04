import { Suspense } from "react";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { getAllPosts } from "../../lib/posts";
import PageHero from "../../components/system/PageHero";
import Section from "../../components/system/Section";
import InsightsHubClient from "../../components/system/InsightsHubClient";
import { CtaLink } from "../../components/system/CtaButton";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Insights",
  description:
    "Published regulatory analysis, legal developments and operational insight from Octus: Brazil, iGaming, compliance and international regulated markets. Articles are commentary unless they cite a primary instrument.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Field analysis for regulated operations."
        titleSecondLine="Published Insights."
        description="Articles and analysis from the Octus team covering Brazil, iGaming, compliance and international regulated markets. Read as practical insight: verify primary sources for current regulatory claims."
      />

      <Section>
        <Suspense
          fallback={
            <p className="text-sm text-muted-foreground">Loading Insights index…</p>
          }
        >
          <InsightsHubClient posts={posts} />
        </Suspense>
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
