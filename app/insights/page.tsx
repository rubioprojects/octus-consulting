import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Insights",
  description: "Regulatory analysis, legal developments and operational intelligence from the Octus team — covering Brazil, iGaming, compliance and international structured markets.",
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Insights</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Regulatory intelligence.<br />
            <span className="text-white/80">From the field.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75" style={{ maxWidth: "560px" }}>
            Analysis, legal developments and operational intelligence from the
            Octus team — covering Brazil, iGaming, compliance and international
            regulated markets. Ready for the future Octus Intelligence Hub.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Link href={`/insights/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                padding: "48px",
                background: "var(--card-bg)",
                border: "1px solid var(--border-solid)",
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
                  <span className="body-sm text-muted-foreground">{fmt(featured.date)}</span>
                </div>
                <h2 className="heading-section" style={{ marginBottom: "16px", maxWidth: "720px" }}>
                  {featured.title}
                </h2>
                <p className="body-text max-w-[640px]">
                  {featured.excerpt}
                </p>
              </div>
              <span className="shrink-0 text-2xl text-muted-foreground">↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border"
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span className="label">{post.category}</span>
                    <span className="text-base text-muted-foreground">↗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px", flexGrow: 1 }}>
                    {post.title}
                  </h3>
                  <p className="body-sm mb-4 text-muted-foreground">
                    {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + "…" : post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="body-sm text-[11px] text-muted-foreground">
                      {fmt(post.date)}
                    </span>
                    {post.author && (
                      <span className="body-sm text-[11px] text-muted-foreground">
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
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
