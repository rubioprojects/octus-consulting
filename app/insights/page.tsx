import { Suspense } from "react";
import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { getAllPosts } from "../../lib/posts";
import PageHero from "../../components/system/PageHero";
import Section from "../../components/system/Section";
import InsightsHubClient from "../../components/system/InsightsHubClient";
import { CtaLink } from "../../components/system/CtaButton";

export const metadata = {
  title: "Insights",
  description:
    "Published articles and analysis from Octus — regulatory developments, market infrastructure and operational risk across regulated markets.",
  openGraph: {
    title: "Insights | Octus Consulting",
    description:
      "Published analysis from the Octus Intelligence system — Brazil, iGaming, compliance and international regulated markets.",
    url: "https://octusconsulting.com/insights",
  },
  alternates: {
    canonical: "https://octusconsulting.com/insights",
  },
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Published analysis."
        titleSecondLine="From the field."
        description={
          <>
            Articles and regulatory analysis from the Octus team. Insights is the published library
            inside{" "}
            <Link href="/intelligence" className="text-white underline-offset-4 hover:underline">
              Octus Intelligence
            </Link>
            — the broader knowledge system for regulated decisions.
          </>
        }
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
