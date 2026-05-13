import type { Metadata } from 'next'
import { RealScoutOfficeSection } from '@/components/RealScoutOfficeSection'
import {
  ADDRESS,
  AGENT_NAME,
  BROKERAGE,
  BUSINESS_NAME,
  EMAIL,
  LICENSE,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_BRAND,
  SITE_URL,
} from '@/lib/business'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for lasvegas55plushomes.com.',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-0">
        <h1 className="text-3xl font-bold text-green-950 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 13, 2026</p>
      </div>

      <RealScoutOfficeSection />

      <div className="max-w-3xl mx-auto px-4 pb-16 prose">
        <p>
          {SITE_BRAND} ({SITE_URL.replace('https://', '')}) is operated as {BUSINESS_NAME} by {AGENT_NAME},
          NV License #{LICENSE}, {BROKERAGE}.
        </p>
        <h2>Information We Collect</h2>
        <p>
          Contact form submissions collect name, email, phone, and message. Standard server logs collect IP
          address and browser type.
        </p>
        <h2>How We Use It</h2>
        <p>To respond to your inquiry. To send requested market updates. We do not sell your information.</p>
        <h2>Contact</h2>
        <p>
          {AGENT_NAME} · {ADDRESS.streetAddress}, {ADDRESS.addressLocality} {ADDRESS.addressRegion}{' '}
          {ADDRESS.postalCode} · <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a> · {EMAIL}
        </p>
      </div>
    </main>
  )
}
