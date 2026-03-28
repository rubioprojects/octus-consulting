import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { jurisdictions } from '@/data/services'
export const metadata: Metadata = { title: 'Corporate Structuring', description: 'We build scalable and defensible corporate structures across multiple jurisdictions.' }
export default function CorporatePage() {
  return (
    <ServicePage
      tag="Module 04"
      headline="Corporate structure is not admin."
      subheadline="It is the foundation of everything else."
      sub="We design and build corporate structures that are defensible, scalable and aligned with regulatory requirements — from single entities to complex multi-jurisdiction groups."
      whenItems={["Corporate structure does not match operational or regulatory reality", "Governance is informal and creates regulatory or investor risk", "Holding structure is absent or inefficient for expansion", "Entities need to be opened, restructured or wound down", "Operation is growing and current structure won't scale"]}
      forWhom={["International groups building or restructuring", "Founders designing holding and operating entity architecture", "Businesses expanding into new jurisdictions", "Operations needing governance aligned with regulatory expectations"]}
      whatWeDo="We build corporate structures that work in practice — across jurisdictions, regulatory environments and operational realities. From company formation to full holding architecture, we design structures that are bancable, auditable and built to scale."
      phases={[
        { title: "Structural Diagnostic", items: ["Current structure review and gap analysis", "Regulatory and banking alignment assessment", "Governance risk mapping", "Restructuring roadmap"] },
        { title: "Entity Formation", items: ["Offshore company formation (Curaçao, UK, BVI, Cyprus, others)", "Onshore entity setup where required", "Resident director and registered address arrangements", "UBO documentation and regulatory declaration"] },
        { title: "Structural Architecture", items: ["Holding, operating and subsidiary design", "Multi-jurisdiction corporate framework", "Governance model and organizational structure", "Shareholder agreements and corporate bylaws"] },
        { title: "Maintenance & Evolution", items: ["Ongoing corporate compliance and annual filings", "Restructuring as operation evolves", "Entity liquidation and wind-down management", "Corporate documentation maintenance"] },
      ]}
      outcomes={["Corporate structure aligned with regulatory and banking requirements", "Governance model formalized and defensible", "Holding architecture ready for scale and investment", "Entity formation completed and documented"]}
      industries={["Any regulated sector", "Multi-jurisdiction groups", "Investment structures", "iGaming", "Fintech"]}
      jurisdictions={jurisdictions}
    />
  )
}
