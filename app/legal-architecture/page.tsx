import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
export const metadata: Metadata = { title: 'Legal & Structural Architecture', description: 'We design the legal backbone behind complex regulated operations.' }
export default function LegalPage() {
  return (
    <ServicePage
      tag="Module 03"
      headline="Legal architecture is not contracts."
      subheadline="It is the backbone your operation depends on."
      sub="We design the legal infrastructure behind complex cross-border operations — from contract architecture to multi-jurisdiction documentation frameworks."
      whenItems={["Contracts with providers or partners are weak or missing", "Legal documentation is inconsistent across jurisdictions", "Regulatory submissions require legal opinion or certified documentation", "Operation involves multiple entities across different legal systems", "You need legal architecture that scales with your structure"]}
      forWhom={["Cross-border operations with multiple legal touchpoints", "Complex groups with platform and provider agreements", "Companies preparing for regulatory submission or due diligence", "Operations restructuring for scale or compliance"]}
      whatWeDo="We build the legal backbone behind your operation — designing contract architecture, structuring multi-jurisdiction documentation and providing legal opinions that regulators and banks accept."
      phases={[
        { title: "Legal Diagnostic", items: ["Contract inventory and gap analysis", "Cross-jurisdiction risk mapping", "Documentation inconsistency audit", "Legal architecture assessment"] },
        { title: "Contract Architecture", items: ["Platform and technology agreements", "Reseller, licensing and distribution contracts", "Service agreements, NDAs and IP arrangements", "Affiliate and sponsorship agreements"] },
        { title: "Regulatory Documentation", items: ["Legal opinions for regulatory submissions", "International certification of documents (OA/PT)", "Apostille and notarization coordination", "Sworn translation (EN, PT, ES)"] },
        { title: "Ongoing Legal Support", items: ["Contract negotiation and review on demand", "Legal monitoring across active jurisdictions", "KYC and due diligence with stakeholders", "Compliance and document certification"] },
      ]}
      outcomes={["Contract architecture aligned with regulatory requirements", "Legal documentation consistent across jurisdictions", "Regulatory submissions supported by legal opinion", "Legal infrastructure ready for audit or expansion"]}
      industries={["iGaming", "Fintech", "Payments", "Cross-border operations", "Any regulated sector"]}
    />
  )
}
