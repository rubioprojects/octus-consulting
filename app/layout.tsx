import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Octus Consulting — Regulated Operations, Structured.',
    template: '%s — Octus Consulting',
  },
  description: 'We fix regulatory, licensing and banking problems in highly regulated markets. iGaming, fintech, crypto, payments.',
  metadataBase: new URL('https://octusconsulting.com'),
  openGraph: {
    title: 'Octus Consulting',
    description: 'We fix regulatory, licensing and banking problems in highly regulated markets.',
    url: 'https://octusconsulting.com',
    siteName: 'Octus Consulting',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
