import Link from "next/link";
import { getAllPosts, getAllCategories } from "../../lib/posts";

export const metadata = {
  title: "Insights — Octus Consulting",
  description: "Regulatory analysis, legal developments and operational intelligence from the Octus team — covering Brazil, iGaming, compliance and international structured markets.",
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const [featured, ...rest] = posts;

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Insights</span>
          <h1 className="heading-xl sp-headline">
            Regulatory intelligence.<br />
            <span style={{ color: "var(--white-40)" }}>From the field.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "560px" }}>
            Analysis, legal developments and operational intelligence from the
            Octus team — covering Brazil, iGaming, compliance and international
            regulated markets.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-padded" style={{ padding: "0 40px 80px" }}>
        <div className="container">
          <Link href={`/insights/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                padding: "48px",
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "32px",
                alignItems: "start",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span className="label">{featured.category}</span>
                  <span className="body-sm" style={{ color: "var(--white-25)" }}>{fmt(featured.date)}</span>
                </div>
                <h2 className="heading-md" style={{ marginBottom: "16px", maxWidth: "720px" }}>
                  {featured.title}
                </h2>
                <p className="body" style={{ color: "var(--white-60)", maxWidth: "640px" }}>
                  {featured.excerpt}
                </p>
              </div>
              <span style={{ color: "var(--white-25)", fontSize: "24px", flexShrink: 0 }}>↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-dark section-padded">
        <div className="container">
          <div className="grid-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="card-lg"
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span className="label">{post.category}</span>
                    <span style={{ color: "var(--white-25)", fontSize: "16px" }}>↗</span>
                  </div>
                  <h3 className="heading-card" style={{ marginBottom: "12px", flexGrow: 1 }}>
                    {post.title}
                  </h3>
                  <p className="body-sm" style={{ color: "var(--white-60)", marginBottom: "16px" }}>
                    {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + "…" : post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="body-sm" style={{ color: "var(--white-25)", fontSize: "11px" }}>
                      {fmt(post.date)}
                    </span>
                    {post.author && (
                      <span className="body-sm" style={{ color: "var(--white-25)", fontSize: "11px" }}>
                        {post.author}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">
            Questions about how a regulatory development affects your operation?
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Discuss your operation →
          </Link>
        </div>
      </section>
    </main>
  );
}
