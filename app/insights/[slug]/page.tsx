import Link from "next/link";
import { getPost } from "../../../lib/posts";
import {
  enrichPostForPublic,
  getPublicPosts,
  isEditorialCommentary,
  isHistoricalInsight,
  isPublicInsight,
} from "../../../lib/insightsPublication";
import { brandedDocumentTitle, normalizeEditorialTitle } from "../../../lib/insightTitles";
import {
  resolveIndustryLinks,
  resolveJurisdictionLinks,
  resolvePostAuthor,
  resolveServiceAreaLinks,
} from "../../../lib/insightEnrichment";
import { notFound } from "next/navigation";
import { pageSocialMeta } from "../../../lib/pageMeta";

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return getPublicPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!isPublicInsight(params.slug)) return {};
  const post = getPost(params.slug);
  if (!post) return {};
  const clean = normalizeEditorialTitle(post.title);
  const branded = brandedDocumentTitle(clean);
  return pageSocialMeta({
    title: branded,
    description: post.excerpt,
    path: `/insights/${params.slug}`,
    absoluteTitle: true,
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  if (!isPublicInsight(params.slug)) notFound();
  const raw = getPost(params.slug);
  if (!raw) notFound();

  const post = enrichPostForPublic(raw);
  const published = fmtDate(post.date);
  const lastReviewed = fmtDate(post.lastReviewed);
  const isHistorical = isHistoricalInsight(params.slug);
  const isEditorial = isEditorialCommentary(params.slug);
  const statusLabel = isHistorical
    ? "Historical analysis"
    : isEditorial
      ? "Editorial commentary"
      : "Current analysis";
  const contentBlocks = post.content
    .replace(/^###\s+.+\n\n/, "")
    .split("\n\n");

  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "32px", flexWrap: "wrap" }}>
            <Link
              href="/insights"
              className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 no-underline hover:text-white"
            >
              ← Insights
            </Link>
            <span className="mb-0 block text-xs font-medium uppercase tracking-[0.12em] text-white/65">
              {post.category}
            </span>
            <span className="mb-0 block text-xs font-medium uppercase tracking-[0.12em] text-white/80">
              {statusLabel}
            </span>
          </div>
          <h1
            className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.78)" }}
          >
            Published {published} · Last reviewed {lastReviewed} · {resolvePostAuthor(post)}
          </p>
          {isHistorical && (
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.72)" }}
            >
              Historical analysis. This article records the regulatory position as of its original
              publication date. It was last reviewed on {lastReviewed}.{" "}
              {post.currentStatusNote ||
                "Current requirements may have changed; consult the cited primary sources and obtain advice for the specific operation."}
            </p>
          )}
          {isEditorial && (
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.72)" }}
            >
              Editorial commentary. This article presents Octus operational analysis rather than a
              statement of current law. Where a mandate depends on regulatory requirements, the
              applicable primary instruments must be verified separately.
            </p>
          )}
          {!isHistorical && !isEditorial && (
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.72)" }}
            >
              Editorial note: unless a primary statute or ordinance is cited, treat analysis as
              commentary. Verify current primary sources before relying on regulatory statements.
            </p>
          )}
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container post-body" style={{ maxWidth: "800px" }}>
          {contentBlocks.map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**") && !para.slice(2, -2).includes("\n")) {
              return (
                <h2 key={i} className="heading-sm" style={{ marginTop: "48px", marginBottom: "16px" }}>
                  {para.replace(/\*\*/g, "")}
                </h2>
              );
            }
            const formatted = para
              .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
              .replace(/\*([^*]+)\*/g, "<em>$1</em>");
            if (para.startsWith("- ") || para.includes("\n- ")) {
              const items = para.split("\n- ").map((s) => s.replace(/^- /, ""));
              return (
                <ul key={i} style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                  {items.map((item, j) => (
                    <li key={j} className="body-text" style={{ marginBottom: "8px" }}
                      dangerouslySetInnerHTML={{ __html: item.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") }}
                    />
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="body-text"
                style={{ marginBottom: "20px", lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: formatted }}
              />
            );
          })}

          {isEditorial && (
            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border-solid)",
              }}
            >
              <h2 className="heading-sm" style={{ marginBottom: "16px" }}>
                Editorial basis
              </h2>
              <p className="body-text" style={{ marginBottom: "20px", lineHeight: 1.8 }}>
                This article presents Octus operational analysis rather than a statement of current
                law. Where a mandate depends on regulatory requirements, the applicable primary
                instruments must be verified separately.
              </p>
            </div>
          )}

          {!isEditorial && post.primarySources.length > 0 && (
            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border-solid)",
              }}
            >
              <h2 className="heading-sm" style={{ marginBottom: "16px" }}>
                Sources
              </h2>
              <ul style={{ paddingLeft: "24px" }}>
                {post.primarySources.map((src) => (
                  <li key={src.href} className="body-text" style={{ marginBottom: "8px" }}>
                    <a href={src.href} target="_blank" rel="noopener noreferrer">
                      {src.label}
                    </a>
                    {src.date ? ` (${src.date})` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {(() => {
          const serviceLinks = resolveServiceAreaLinks(post);
          const industryLinks = resolveIndustryLinks(post);
          const jurisdictionLinks = resolveJurisdictionLinks(post);
          const related = post.related || [];
          const show =
            related.length > 0 ||
            serviceLinks.length > 0 ||
            industryLinks.length > 0 ||
            jurisdictionLinks.length > 0 ||
            post.cta;
          if (!show) return null;
          return (
            <div
              className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
              style={{
                maxWidth: "800px",
                marginTop: "64px",
                paddingTop: "40px",
                borderTop: "1px solid var(--border-solid)",
              }}
            >
              {[
                { title: "Service areas", items: serviceLinks },
                { title: "Industries", items: industryLinks },
                { title: "Jurisdictions", items: jurisdictionLinks },
                { title: "Related", items: related },
              ]
                .filter((g) => g.items.length > 0)
                .map((group) => (
                  <div key={group.title} style={{ marginBottom: "24px" }}>
                    <p className="body-sm mb-3.5 text-muted-foreground">{group.title}</p>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      {group.items.map((item) => (
                        <Link
                          key={`${group.title}-${item.href}`}
                          href={item.href}
                          className="chip-juris-link"
                          style={{ textDecoration: "none" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              {post.cta && (
                <>
                  <p className="body-sm mb-4 text-muted-foreground">{post.cta.label}</p>
                  <Link href={post.cta.href} className="btn-primary">
                    Request assessment →
                  </Link>
                </>
              )}
            </div>
          );
        })()}
      </section>
    </main>
  );
}
