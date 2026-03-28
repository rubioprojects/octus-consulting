import CTABlock from '@/components/CTABlock'
export default function Page() {
  return (
    <>
      <section className="page-hero section-padded">
        <div className="container">
          <h1 className="heading-xl simple-page-title">Compliance Channel</h1>
          <p className="body-lg simple-page-body">Our confidential channel for reporting compliance concerns.</p>
          <p className="body simple-page-contact">For any queries, contact us at <a href="mailto:info@octusconsulting.com" className="simple-page-link">info@octusconsulting.com</a></p>
        </div>
      </section>
      <CTABlock />
    </>
  )
}
