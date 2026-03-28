import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { jurisdictions } from '@/data/services'

export const metadata: Metadata = {
  title: 'Regulatory Structuring',
  description: 'We design and execute licensing strategies across jurisdictions. iGaming, fintech, crypto, payments, Brazil SPA/MF.',
}

export default function RegulatoryPage() {
  return (
    <ServicePage
      tag="Module 01 — Core Service"
      headline="Licensing is not a transaction."
      subheadline="It is the foundation of your entire operation."
      sub="We design and execute licensing strategies across jurisdictions — from jurisdiction selection to full application management and post-license compliance."
      whenItems={[
        "You are entering a new regulated market and don't know which jurisdiction fits your model",
        "Your application has been delayed or rejected and you don't know why",
        "You have a license but banks won't open accounts",
        "You are expanding to a new jurisdiction and need a parallel structure",
        "You are operating under a sublicense and need your own",
        "You need to add domains to an existing license",
        "You are restructuring and need a defensible multi-jurisdiction setup",
      ]}
      forWhom={[
        "Operators entering a new regulated market for the first time",
        "Companies with active license but blocked banking",
        "Fintechs and crypto businesses requiring regulatory authorization",
        "Operators expanding from one jurisdiction to multiple",
      ]}
      whatWeDo="We design, execute and take responsibility for the regulatory structure behind your operation — from strategy to submission to post-approval. We build licensing together with banking viability and compliance from day one. Most licensing problems are not about the license. They are about structure."
      phases={[
        {
          title: "Jurisdiction Strategy",
          items: [
            "Licensing strategy memo with jurisdiction comparison",
            "Risk matrix: regulatory, banking, operational",
            "Jurisdiction recommendation with rationale",
            "Cost and timeline projections per option",
            "Domain and corporate structure requirements",
          ],
        },
        {
          title: "Corporate Structuring",
          items: [
            "Offshore company formation (Curaçao, UK, BVI, Cyprus, others)",
            "Resident director arrangement where required",
            "Registered address and operational structure",
            "UBO documentation and declaration",
            "Apostille and international certification of corporate documents",
          ],
        },
        {
          title: "Application Management",
          items: [
            "Full licensing dossier preparation",
            "AML/KYC policies for regulatory submission",
            "Business plan for banks and regulators",
            "Regulatory form completion and submission",
            "Direct coordination with licensing authority",
            "Response to regulatory requirements and queries",
          ],
        },
        {
          title: "Banking & Operational Setup",
          items: [
            "High-risk banking account opening (SEPA, SWIFT, crypto)",
            "Payment provider integration (PSPs, crypto rails)",
            "Platform policies: T&Cs, AML, responsible gaming, GDPR",
            "Post-license compliance deployment",
          ],
        },
      ]}
      outcomes={[
        "License approved and operational",
        "Banking structure in place",
        "Payment infrastructure connected",
        "Operation ready for audit",
        "Structure replicable to new markets",
      ]}
      industries={["iGaming & Betting", "Fintech", "Crypto", "Payments", "Public sector"]}
      jurisdictions={jurisdictions}
    />
  )
}
