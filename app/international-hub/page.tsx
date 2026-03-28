import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { jurisdictions } from '@/data/services'
export const metadata: Metadata = { title: 'International Hub', description: 'We enable execution across jurisdictions — market entry, coordination, cross-border operations.' }
export default function HubPage() {
  return (
    <ServicePage
      tag="Module 07"
      headline="International expansion fails at execution."
      subheadline="Not at strategy."
      sub="We enable cross-border execution — jurisdiction mapping, local partner coordination, market entry structuring and operational setup across multiple regulated markets."
      whenItems={["You are entering a new country and need local execution support", "Expansion is underway but coordination between jurisdictions is fragmented", "You need reliable local partners in a jurisdiction you don't know", "You are managing multi-jurisdiction operations without a central coordination layer"]}
      forWhom={["Companies entering new regulated markets", "Multi-jurisdiction groups needing coordination across markets", "Businesses seeking execution partners in specific jurisdictions", "Operations expanding from one market to multiple simultaneously"]}
      whatWeDo="We act as the execution layer across jurisdictions — connecting jurisdiction strategy to on-the-ground reality. We coordinate regulators, local counsel, certification bodies, banks and providers in every market where you operate."
      phases={[
        { title: "Jurisdiction Mapping", items: ["Target market regulatory analysis", "Entry requirements and timeline assessment", "Local infrastructure and partner mapping", "Risk and opportunity matrix"] },
        { title: "Entry Structuring", items: ["Legal and corporate entry structure design", "Local entity or branch setup coordination", "Regulatory pre-filing and liaison", "Banking and payment infrastructure setup"] },
        { title: "Partner Coordination", items: ["Platform and technology provider connections", "Payment method and PSP introduction", "Data, odds and content provider connections", "Certification laboratory coordination"] },
        { title: "Operational Setup", items: ["Local compliance and regulatory alignment", "Cross-border invoicing and financial structure", "Ongoing multi-jurisdiction monitoring", "Expansion to additional markets"] },
      ]}
      outcomes={["New market entered with full regulatory and operational setup", "Local partners and providers connected", "Cross-jurisdiction operations coordinated through single layer", "Infrastructure ready for scale in new market"]}
      industries={["iGaming", "Fintech", "Payments", "Crypto", "Any regulated sector"]}
      jurisdictions={jurisdictions}
    />
  )
}
