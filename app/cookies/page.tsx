import { pageSocialMeta } from "../../lib/pageMeta";
export const metadata = pageSocialMeta({
  title: "Cookie Policy",
  description:
    "Cookie and browser storage practices for the Octus Consulting public website.",
  path: "/cookies",
});
export default function CookiesPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Legal</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">Cookie Policy</h1>
          <p className="text-lg leading-relaxed text-white/75 max-w-2xl">Last updated: July 2026</p>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          {[
            {
              title: "What are cookies",
              body: "Cookies are small text files stored on your device when you visit a website. Similar browser storage (such as localStorage) may also be used for essential site functions.",
            },
            {
              title: "What we use today",
              body: "As of this update, the public site is a static export. The only first-party preference we set in the browser is a localStorage flag recording that you dismissed the essential-cookie notice. We do not load Meta Pixel, advertising SDKs, or other advertising trackers on this site.",
            },
            {
              title: "Analytics preparation",
              body: "We intend to enable Vercel Web Analytics and Google Search Console for aggregate performance and indexing. When those tools are activated in production, this policy will be updated to describe any cookies or similar technologies they set. This page does not invent legal conclusions about consent regimes; operators should confirm applicability for their jurisdictions before go-live.",
            },
            {
              title: "Managing preferences",
              body: "You can clear site data through your browser settings. Disabling storage may cause the cookie notice to reappear. Essential site pages remain available without advertising cookies.",
            },
            {
              title: "Contact",
              body: "For cookie-related enquiries: info@octusconsulting.com",
            },
          ].map((s) => (
            <div key={s.title} style={{ marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--border-solid)" }}>
              <h2 className="heading-sm" style={{ marginBottom: "12px" }}>{s.title}</h2>
              <p className="body-text">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
