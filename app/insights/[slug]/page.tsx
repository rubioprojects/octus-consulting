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
          {post.content.split("\n\n").map((para, i) => {
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

        <div className="container" style={{ maxWidth: "800px", marginTop: "64px", paddingTop: "40px", borderTop: "1px solid var(--border)" }}>
          <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Questions about how this affects your operation?
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss your operation →
          </Link>
        </div>
      </section>
    </main>
  );
}
