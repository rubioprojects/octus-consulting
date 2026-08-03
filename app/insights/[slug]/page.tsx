import Link from "next/link";
import { getAllPosts, getPost } from "../../../lib/posts";
import {
  resolveIndustryLinks,
  resolveJurisdictionLinks,
  resolvePostAuthor,
  resolveServiceAreaLinks,
} from "../../../lib/insightEnrichment";
import { notFound } from "next/navigation";
import { pageSocialMeta } from "../../../lib/pageMeta";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageSocialMeta({
    title: `${post.title} | Octus Consulting`,
    description: post.excerpt,
    path: `/insights/${params.slug}`,
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
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
              style={{
                fontFamily: "var(--font-unigeo), 'Unigeo64', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--white-40)",
                textDecoration: "none",
              }}
            >
              ← Insights
            </Link>
            <span className="label">{post.category}</span>
          </div>
          <h1
            className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ color: "var(--white-40)" }}>
            {date} · {resolvePostAuthor(post)}
          </p>
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
