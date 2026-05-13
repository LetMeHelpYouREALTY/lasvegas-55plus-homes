import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiteJsonLd from '@/components/SiteJsonLd'
import { BUSINESS_NAME, SITE_META_DESCRIPTION, SITE_BRAND, SITE_URL } from '@/lib/business'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BUSINESS_NAME,
    template: `%s | ${SITE_BRAND}`,
  },
  description: SITE_META_DESCRIPTION,
  keywords: [
    'Sun City Summerlin 55+',
    'Las Vegas 55+ homes',
    'Sun City Summerlin',
    'Del Webb Las Vegas',
    'active adult communities Las Vegas',
    'Dr. Jan Duffy',
    '55 plus homes Henderson',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_BRAND,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <SiteJsonLd />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
