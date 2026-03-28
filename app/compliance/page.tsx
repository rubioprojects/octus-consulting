import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
export const metadata: Metadata = { title: 'Compliance & Risk', description: 'We implement compliance that holds under regulatory pressure.' }
export default function CompliancePage() {
  return (
    <ServicePage
      tag="Module 02"
      headline="Compliance is not a document."
      subheadline="It is a system that must work under pressure."
      sub="We design and implement compliance frameworks that pass regulatory scrutiny — from KYC/AML to ISO certifications and ongoing monitoring."
      whenItems={[
        "Compliance was built ad hoc and is not aligned with regulatory requirements",
        "Regulator has escalated requirements or issued warnings",
        "Audit is imminent and documentation is disorganized",
        "PSPs or banks are requiring compliance evidence you don't have",
        "Operation is growing and compliance doesn't scale with it",
        "You need a DPO or Compliance Officer but don't want to hire full-time",
      ]}
      forWhom={["Regulated businesses in operation", "Companies preparing for regulatory audit", "Groups under active regulatory scrutiny", "Businesses expanding into new regulated jurisdictions"]}
      whatWeDo="We build compliance systems that actually hold — not just documentation that looks right on paper. We align KYC, AML, data protection and corporate policies into a single operational framework that regulators accept and your operation can sustain."
      phases={[
        { title: "Compliance Diagnostic", items: ["Full compliance gap analysis", "Risk assessment: regulatory, operational, reputational", "Documentation and policy audit", "Compliance maturity scoring"] },
        { title: "Framework Design", items: ["KYC and onboarding procedures", "AML/CFT policy and transaction monitoring", "Corporate compliance policies", "Data protection framework (GDPR/LGPD)", "Responsible gaming policies"] },
        { title: "Certification & Readiness", items: ["ISO 37301, ISO 27001, ISO 27701 coordination", "GLI audit readiness preparation", "Evidence register and documentation pack", "Pre-audit simulation and gap closure"] },
        { title: "Ongoing Compliance", items: ["DPO as a Service", "Compliance Officer as a Service", "Regulatory monitoring and update alerts", "Periodic compliance reviews"] },
      ]}
      outcomes={["Compliance framework aligned with applicable regulations", "Documentation ready for regulatory inspection", "KYC/AML processes operational and auditable", "ISO or GLI certification track initiated", "Ongoing compliance without internal headcount"]}
      industries={["iGaming & Betting", "Fintech", "Payments", "Crypto", "Any regulated sector"]}
    />
  )
}
