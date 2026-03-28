import { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
export const metadata: Metadata = { title: 'Private Clients & UBO', description: 'We structure the individuals behind complex regulated operations.' }
export default function PrivateClientsPage() {
  return (
    <ServicePage
      tag="Module 05"
      headline="Behind every regulated operation is a person."
      subheadline="That person also needs a structure."
      sub="We structure the individuals behind complex operations — from UBO compliance and PEP management to international wealth structuring and tax residency."
      whenItems={["You are the UBO of a complex regulated structure and need personal compliance", "You are a PEP requiring specific structuring and documentation", "Your personal assets are exposed through your business structure", "You are relocating or establishing tax residency internationally", "Banking is refusing due to personal KYC or UBO declaration issues"]}
      forWhom={["Founders and ultimate beneficial owners of regulated businesses", "PEPs and politically exposed individuals in complex structures", "High-net-worth individuals requiring international planning", "Individuals behind multi-jurisdiction corporate groups"]}
      whatWeDo="We handle the personal layer that most firms ignore — the structure behind the structure. UBO compliance, PEP management, personal holding design and international residency planning, coordinated with the business structure we manage."
      phases={[
        { title: "Personal Diagnostic", items: ["UBO and beneficial ownership assessment", "PEP classification and risk mapping", "Personal exposure and liability audit", "Residency and tax situation review"] },
        { title: "Compliance & Documentation", items: ["UBO declaration and regulatory compliance", "KYC documentation package preparation", "PEP compliance and documentation", "International document certification and apostille"] },
        { title: "Personal Structuring", items: ["Personal holding company design", "International wealth structuring", "Investment account structuring", "Tax residency planning and visa coordination"] },
        { title: "Ongoing Support", items: ["Personal compliance monitoring", "Banking and account management support", "Annual regulatory and tax coordination", "Document maintenance and renewal"] },
      ]}
      outcomes={["UBO compliance resolved and documented", "Personal structure aligned with business architecture", "Banking access restored or established", "Residency and tax situation structured internationally"]}
      industries={["Any regulated sector", "High-net-worth individuals", "Investment groups", "Founders of regulated businesses"]}
    />
  )
}
