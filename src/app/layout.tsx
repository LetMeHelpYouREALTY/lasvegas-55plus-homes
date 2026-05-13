import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiteJsonLd from '@/components/SiteJsonLd'
import {
  AGENT_NAME,
  BUSINESS_NAME,
  SITE_META_DESCRIPTION,
  SITE_BRAND,
  SITE_URL,
} from '@/lib/business'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION
const bingVerification = process.env.BING_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BUSINESS_NAME,
    template: `%s | ${SITE_BRAND}`,
  },
  description: SITE_META_DESCRIPTION,
  applicationName: SITE_BRAND,
  authors: [{ name: AGENT_NAME, url: SITE_URL }],
  creator: AGENT_NAME,
  keywords: [
    'Sun City Summerlin 55+',
    'Las Vegas 55+ homes',
    'Sun City Summerlin',
    'Del Webb Las Vegas',
    'active adult communities Las Vegas',
    'Dr. Jan Duffy',
    '55 plus homes Henderson',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_BRAND,
    title: SITE_BRAND,
    description: SITE_META_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_BRAND,
    description: SITE_META_DESCRIPTION,
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
        },
      }
    : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <SiteJsonLd />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
