import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://octusconsulting.com";
  const now = new Date().toISOString();

  const pages = [
    { url: `${base}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/what-we-do`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/regulatory`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/compliance`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/legal-architecture`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/corporate`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/private-clients`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/audit`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/international-hub`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/insights`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/brazil`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/compliance-channel`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
