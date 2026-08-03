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
    "Regulatory analysis, legal developments and operational intelligence from the Octus team: covering Brazil, iGaming, compliance and international structured markets.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Regulatory intelligence."
        titleSecondLine="From the field."
        description="Analysis, legal developments and operational intelligence from the Octus team, covering Brazil, iGaming, compliance and international regulated markets."
      />

      <Section>
        <Suspense
          fallback={
            <p className="text-sm text-muted-foreground">Loading intelligence index…</p>
          }
        >
          <InsightsHubClient posts={posts} />
        </Suspense>
      </Section>

      <Section surface="elevated" narrow>
        <div className="text-center">
          <h2 className="heading-section mb-4">Discuss a structural question.</h2>
          <p className="body-large mx-auto mb-8 max-w-xl">
            Intelligence without execution is commentary. If an article maps to a live
            operational constraint, start a conversation.
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
