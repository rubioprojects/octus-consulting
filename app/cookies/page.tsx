export const metadata = { title: "Cookie Policy — Octus Consulting" };
export default function CookiesPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Legal</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">Cookie Policy</h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          {[
            { title: "What are cookies", body: "Cookies are small text files stored on your device when you visit a website. They help the site function correctly and allow us to understand how visitors use it." },
            { title: "Cookies we use", body: "We use only essential and analytical cookies. Essential cookies are required for the website to operate. Analytical cookies help us understand aggregate usage patterns — no personal identification is involved." },
            { title: "Third-party cookies", body: "Our website may use third-party services (such as analytics providers) that set their own cookies. These are governed by the respective third-party privacy policies." },
            { title: "Managing cookies", body: "You can control cookies through your browser settings. Disabling cookies may affect certain website functionality. Most browsers allow you to refuse or delete cookies." },
            { title: "Contact", body: "For cookie-related enquiries: info@octusconsulting.com" },
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
