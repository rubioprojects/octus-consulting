import CTABlock from '@/components/CTABlock'
export default function Page() {
  return (
    <>
      <section className="page-hero section-padded">
        <div className="container">
          <h1 className="heading-xl simple-page-title">Work with Octus</h1>
          <p className="body-lg simple-page-body">We are always looking for sharp, execution-focused people to join the team.</p>
          <p className="body simple-page-contact">For any queries, contact us at <a href="mailto:info@octusconsulting.com" className="simple-page-link">info@octusconsulting.com</a></p>
        </div>
      </section>
      <CTABlock />
    </>
  )
}
