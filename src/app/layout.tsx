import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://lasvegas55plushomes.com'),
  title: {
    default: 'Las Vegas 55+ Homes | Sun City, Del Webb & Active Adult Communities',
    template: '%s | Las Vegas 55+ Homes',
  },
  description: 'Expert guide to Las Vegas 55+ active adult communities — Sun City Summerlin, Del Webb North Ranch, Heritage at Stonebridge, Anthem. Dr. Jan Duffy, BHHS Nevada Properties.',
  keywords: ['Las Vegas 55+ homes', 'Sun City Summerlin', 'Del Webb Las Vegas', 'active adult communities Las Vegas', 'Heritage Stonebridge', '55 plus homes Henderson'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lasvegas55plushomes.com',
    siteName: 'Las Vegas 55+ Homes',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
