import Link from "next/link";
import { getAllPosts, getPost } from "../../../lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Octus Consulting`,
    description: post.excerpt,
  };
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
      <section className="page-hero section-padded">
        <div className="container" style={{ maxWidth: "800px" }}>
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
            className="heading-xl sp-headline"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)", lineHeight: 1.2 }}
          >
            {post.title}
          </h1>
          <p className="body-lg sp-sub" style={{ color: "var(--white-40)" }}>
            {date}{post.author ? ` · ${post.author}` : ""}
          </p>
        </div>
      </section>

      <section className="section-padded" style={{ padding: "0 40px 130px" }}>
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
                    <li key={j} className="body" style={{ marginBottom: "8px" }}
                      dangerouslySetInnerHTML={{ __html: item.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") }}
                    />
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="body"
                style={{ marginBottom: "20px", lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: formatted }}
              />
            );
          })}
        </div>

        {(post.related || post.cta) && (
          <div
            className="container"
            style={{
              maxWidth: "800px",
              marginTop: "64px",
              paddingTop: "40px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {post.related && post.related.length > 0 && (
              <div style={{ marginBottom: post.cta ? "32px" : "0" }}>
                <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "14px" }}>
                  Related
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {post.related.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="chip-juris-link"
                      style={{ textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {post.cta && (
              <>
                <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
                  {post.cta.label}
                </p>
                <Link href={post.cta.href} className="btn-primary">
                  Request assessment →
                </Link>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
