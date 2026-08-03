import { pageSocialMeta } from "../../lib/pageMeta";
export const metadata = pageSocialMeta({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Octus Technology LLC, operating as Octus Consulting.",
  path: "/terms",
});

const sections = [
  {
    title: "About these terms",
    body: `These Terms and Conditions ("Terms") govern the use of the Octus Consulting website (octusconsulting.com) and the engagement of services provided by Octus Technology LLC, operating as Octus Consulting ("Octus", "we", "us"), a company incorporated in the State of Delaware, United States.\n\nBy accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "Services",
    body: `Octus Consulting provides regulatory structuring, compliance coordination, legal architecture, corporate structuring, audit readiness and related advisory services to businesses operating in regulated markets.\n\nAll services are subject to separate engagement letters or service agreements, which take precedence over these Terms in the event of any conflict. Nothing on this website constitutes legal, regulatory or financial advice, and no client relationship is established until a formal engagement is confirmed in writing.`,
  },
  {
    title: "Website use",
    body: `You may use our website for lawful purposes only. You agree not to:\n\n• Use the website in any way that violates applicable local, national or international laws or regulations.\n• Transmit unsolicited commercial communications.\n• Attempt to gain unauthorised access to any part of our systems or infrastructure.\n• Reproduce, distribute or republish any content from this website without our prior written consent.\n\nWe reserve the right to restrict or terminate access to the website at any time and without notice.`,
  },
  {
    title: "Intellectual property",
    body: `All content on this website: including text, copy, structure, design, logos, graphics and brand assets: is the property of Octus Technology LLC and is protected by applicable intellectual property law.\n\nNo content may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any form without our prior written permission. The Octus name, logo and symbol are trademarks of Octus Technology LLC.`,
  },
  {
    title: "No professional advice",
    body: `The information provided on this website is for general informational purposes only. It does not constitute legal, regulatory, financial, tax or compliance advice and should not be relied upon as such.\n\nReaders should seek appropriate professional advice before taking or refraining from any action based on the content of this website. Octus Consulting accepts no liability for any loss or damage arising from reliance on website content without a formal engagement in place.`,
  },
  {
    title: "Limitation of liability",
    body: `To the maximum extent permitted by applicable law, Octus Technology LLC and its personnel shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to use of this website or our services, including loss of profits, data or business opportunities.\n\nOur total aggregate liability in connection with services rendered under any engagement shall be limited to the fees paid by the client for the specific engagement giving rise to the claim, unless otherwise agreed in writing.`,
  },
  {
    title: "Third-party links",
    body: `Our website may contain links to third-party websites for reference purposes. We have no control over the content, privacy practices or availability of third-party sites, and their inclusion does not constitute endorsement. We accept no responsibility for any loss or damage arising from your use of third-party websites.`,
  },
  {
    title: "Privacy",
    body: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use and protect your personal data.`,
  },
  {
    title: "Governing law",
    body: `These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.\n\nAny disputes arising out of or in connection with these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of the State of Delaware, unless otherwise required by applicable mandatory law in your jurisdiction.`,
  },
  {
    title: "Changes to these terms",
    body: `We reserve the right to update these Terms at any time. Material changes will be reflected in an updated date at the top of this page. Continued use of the website following any update constitutes acceptance of the revised Terms.`,
  },
  {
    title: "Contact",
    body: `For questions regarding these Terms:\n\nOctus Technology LLC\n900 Foulk Rd Suite 201\nWilmington, DE 19803\nUnited States\n\nEmail: info@octusconsulting.com`,
  },
];

export default function TermsPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Legal</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">Terms & Conditions</h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          {sections.map((s, i) => (
            <div
              key={s.title}
              style={{
                marginBottom: "40px",
                paddingBottom: "40px",
                borderBottom: i < sections.length - 1 ? "1px solid var(--border-solid)" : "none",
              }}
            >
              <h2 className="heading-sm" style={{ marginBottom: "16px" }}>
                {s.title}
              </h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} className="body-text" style={{ marginBottom: "12px", whiteSpace: "pre-line" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
