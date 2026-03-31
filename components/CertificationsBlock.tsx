"use client";

import { useMemo, useState } from "react";

type Certification = {
  seal: string;
  title: string;
  issuer?: string;
  description?: string;
  image?: string;
};

const certifications: Certification[] = [
  {
    seal: "/seal-exin-dpo.png",
    title: "EXIN Certified Data Protection Officer",
    issuer: "Issued by EXIN",
    description:
      "Certification validates expertise in EU data protection regulation and GDPR compliance frameworks.",
  },
  {
    seal: "/seal-gdpr.png",
    title: "GDPR Certification",
    image: "/cert-gdpr.jpg",
  },
  {
    seal: "/seal-lgpd.png",
    title: "LGPD Framework Alignment",
    issuer: "Issued for data protection readiness",
    description:
      "Recognition of capability in Brazilian data protection structure, governance and operational compliance workflows.",
  },
  {
    seal: "/seal-esg.png",
    title: "ESG Readiness",
    issuer: "Issued for governance and ESG alignment",
    description:
      "Signals structured governance, policy discipline and institutional alignment expected in regulated environments.",
  },
  {
    seal: "/seal-mulher.png",
    title: "Women-Led Business Recognition",
    image: "/cert-mulher.jpg",
  },
];

export default function CertificationsBlock() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = useMemo(
    () => (selectedIndex === null ? null : certifications[selectedIndex]),
    [selectedIndex]
  );

  return (
    <>
      <section className="certifications-block">
        <div className="container">
          <p className="label">Certifications & Credentials</p>
          <div className="certifications-row">
            {certifications.map((item, index) => (
              <button
                key={item.seal}
                type="button"
                className="certifications-seal"
                onClick={() => setSelectedIndex(index)}
                aria-label={item.title}
              >
                <img src={item.seal} alt={item.title} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="cert-modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div
            className="cert-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close certification details"
            >
              ×
            </button>

            {selected.image ? (
              <img
                src={selected.image}
                alt={selected.title}
                className="cert-modal-image"
              />
            ) : (
              <div className="cert-modal-badge">
                <img src={selected.seal} alt={selected.title} />
              </div>
            )}

            <h3 className="heading-sm" style={{ marginBottom: "12px" }}>
              {selected.title}
            </h3>
            {selected.description && (
              <p className="body" style={{ marginBottom: selected.issuer ? "12px" : 0 }}>
                {selected.description}
              </p>
            )}
            {selected.issuer && (
              <p className="body-sm" style={{ color: "var(--text-muted)" }}>
                {selected.issuer}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
