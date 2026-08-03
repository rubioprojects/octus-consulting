"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { Post } from "../../lib/posts";
import {
  mapPostToIntelligenceCategory,
  type IntelligenceCategoryId,
} from "../../lib/intelligence";
import ContentCard from "./ContentCard";
import InsightCategoryRail, { INTELLIGENCE_CATEGORIES } from "./InsightCategoryRail";

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsHubClient({ posts }: { posts: Post[] }) {
  const params = useSearchParams();
  const hub = (params.get("hub") || "all") as IntelligenceCategoryId | "all";

  const filtered = useMemo(() => {
    if (hub === "all") return posts;
    return posts.filter((p) => mapPostToIntelligenceCategory(p.category) === hub);
  }, [posts, hub]);

  const [featured, ...rest] = filtered.length ? filtered : posts;
  const grid = filtered.length > 1 ? filtered.slice(1) : rest;

  const activeLabel =
    hub === "all"
      ? null
      : INTELLIGENCE_CATEGORIES.find((c) => c.id === hub)?.label;

  return (
    <>
      <InsightCategoryRail active={hub === "all" ? "all" : hub} />
      {activeLabel && (
        <p className="mb-8 text-sm text-muted-foreground">
          Showing <span className="text-foreground">{activeLabel}</span>: mapped from
          existing article categories (full Hub taxonomy ships in Wave 4).
        </p>
      )}

      {featured && (
        <Link
          href={`/insights/${featured.slug}`}
          className="mb-16 block no-underline"
        >
          <div className="rounded-md border border-border bg-[var(--card-bg)] p-8 md:p-12">
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="label">{featured.category}</span>
              <span className="body-sm text-muted-foreground">{fmt(featured.date)}</span>
            </div>
            <h2 className="heading-section mb-4 max-w-3xl">{featured.title}</h2>
            <p className="body-text max-w-2xl">{featured.excerpt}</p>
          </div>
        </Link>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {grid.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/insights/${post.slug}`}
            eyebrow={<span className="label">{post.category}</span>}
            meta={<span className="body-sm text-muted-foreground">{fmt(post.date)}</span>}
            title={post.title}
          >
            {post.excerpt}
          </ContentCard>
        ))}
      </div>
    </>
  );
}
