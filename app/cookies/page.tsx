export const metadata = { title: "Cookie Policy — Octus Consulting" };
export default function CookiesPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Legal</span>
          <h1 className="heading-xl sp-headline">Cookie Policy</h1>
          <p className="body-lg sp-sub">Last updated: March 2026</p>
        </div>
      </section>
      <section className="section-padded" style={{ padding: "0 40px 130px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          {[
            { title: "What are cookies", body: "Cookies are small text files stored on your device when you visit a website. They help the site function correctly and allow us to understand how visitors use it." },
            { title: "Cookies we use", body: "We use only essential and analytical cookies. Essential cookies are required for the website to operate. Analytical cookies help us understand aggregate usage patterns — no personal identification is involved." },
            { title: "Third-party cookies", body: "Our website may use third-party services (such as analytics providers) that set their own cookies. These are governed by the respective third-party privacy policies." },
            { title: "Managing cookies", body: "You can control cookies through your browser settings. Disabling cookies may affect certain website functionality. Most browsers allow you to refuse or delete cookies." },
            { title: "Contact", body: "For cookie-related enquiries: info@octusconsulting.com" },
          ].map((s) => (
            <div key={s.title} style={{ marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--border)" }}>
              <h2 className="heading-sm" style={{ marginBottom: "12px" }}>{s.title}</h2>
              <p className="body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
