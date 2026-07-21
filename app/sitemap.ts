import { MetadataRoute } from "next";
import { posts } from "../lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://octusconsulting.com";
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${base}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/markets`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/markets/fintech`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/markets/igaming`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/markets/crypto`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/markets/high-risk`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/malta`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/isle-of-man`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/curacao`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/anjouan`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/portugal`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/jurisdictions/uae`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/compliance/aml-kyc`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/compliance/compliance-as-a-service`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/compliance/dpo-as-a-service`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/compliance/gli-readiness`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/compliance/internal-controls`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/corporate/company-formation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/corporate/offshore-structuring`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/corporate/holding-design`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/regulatory/igaming-licensing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/regulatory/fintech-licensing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/regulatory/market-entry`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/solutions/regulatory/banking-payments`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/diagnostic`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/careers`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/insights`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/brazil`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/compliance-channel`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const insightPages = posts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...insightPages].map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
