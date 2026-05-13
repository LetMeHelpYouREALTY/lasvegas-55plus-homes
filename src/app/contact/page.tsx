import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { OfficeListingsSection } from '@/components/OfficeListingsSection'
import {
  ADDRESS,
  AGENT_NAME,
  EMAIL,
  HOURS_PUBLIC_LINE,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_META_DESCRIPTION,
  SITE_URL,
  SMS_HREF,
  SPECIAL_CLOSED_DATES,
} from '@/lib/business'

export const metadata: Metadata = {
  title: `Contact ${AGENT_NAME}`,
  description: SITE_META_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-green-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Let&apos;s Find Your Community</h1>
          <p className="text-green-200">
            Tell me what matters most — I&apos;ll match you to the right 55+ community.
          </p>
        </div>
      </section>
      <OfficeListingsSection />
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <ContactForm />
          <aside className="space-y-6">
            <div>
              <h3 className="font-bold text-green-950 mb-3">Direct contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={PHONE_TEL_HREF} className="text-green-700 hover:underline font-semibold">
                    📞 {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={SMS_HREF} className="text-green-700 hover:underline">
                    💬 Text {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="text-green-700 hover:underline">
                    ✉️ {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-950 mb-3">Sun City Summerlin office</h3>
              <address className="not-italic text-sm text-gray-600">
                {ADDRESS.streetAddress}
                <br />
                {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
              </address>
            </div>
            <div>
              <h3 className="font-bold text-green-950 mb-3">Hours</h3>
              <p className="text-sm text-gray-600">{HOURS_PUBLIC_LINE}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold text-green-900">Closed: </span>
                {SPECIAL_CLOSED_DATES.map((d) => `${d.date} (${d.label})`).join('; ')}.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-950 mb-3">Visit &amp; service options</h3>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Appointment not required · onsite services · online appointments available</li>
                <li>Free parking · wheelchair-accessible entrance, parking, seating &amp; restrooms</li>
                <li>Gender-neutral restroom · LGBTQ+ friendly · transgender safe space</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-sm text-green-900">
              <strong>What to bring to our conversation:</strong>
              <ul className="mt-2 space-y-1 text-green-800">
                <li>✓ Top 2–3 amenities you want</li>
                <li>✓ Your target monthly budget (incl. HOA)</li>
                <li>✓ Single-story requirement? Yes/No</li>
                <li>✓ Preferred area (NW Vegas, Henderson, N. LV)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
