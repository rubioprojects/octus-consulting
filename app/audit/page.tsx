import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
export const metadata: Metadata = { title: 'Audit & Readiness', description: 'We prepare operations for scrutiny before scrutiny arrives.' }
export default function AuditPage() {
  return (
    <ServicePage
      tag="Module 06"
      headline="Audit failures are not surprises."
      subheadline="They are gaps that were never closed."
      sub="We prepare operations for regulatory scrutiny before it arrives — gap analysis, evidence organization, GLI readiness and full pre-audit preparation."
      whenItems={["Audit or regulatory inspection is scheduled or expected", "Evidence is disorganized and documentation is incomplete", "Previous audit found gaps that need closing", "Operation is growing and readiness hasn't kept pace", "You are preparing for certification or investment due diligence"]}
      forWhom={["Companies facing imminent regulatory audit", "Operations preparing for GLI or similar certification", "Businesses preparing for investment due diligence", "Groups restructuring compliance after regulatory pressure"]}
      whatWeDo="We simulate the audit before the audit happens. We map every gap, organize every piece of evidence, and build the documentation pack that gives regulators and auditors nothing to find."
      phases={[
        { title: "Readiness Assessment", items: ["Scope mapping against applicable audit framework", "Documentation and evidence inventory", "Control testing and gap identification", "Risk prioritization and remediation roadmap"] },
        { title: "Gap Closure", items: ["Documentation creation and alignment", "Policy and procedure remediation", "Evidence organization and register", "Internal control strengthening"] },
        { title: "Pre-Audit Preparation", items: ["Full evidence pack organized by audit category", "Mock audit simulation", "Team preparation for auditor interaction", "Last-mile gap closure"] },
        { title: "Post-Audit Support", items: ["Finding response and remediation planning", "Corrective action documentation", "Follow-up audit preparation", "Ongoing compliance maintenance"] },
      ]}
      outcomes={["Operation enters audit with zero critical documentation gaps", "Evidence organized by audit requirement", "Team prepared for auditor interaction", "Remediation plan in place for identified gaps"]}
      industries={["iGaming (GLI)", "Fintech", "Payments", "Any regulated sector"]}
    />
  )
}
