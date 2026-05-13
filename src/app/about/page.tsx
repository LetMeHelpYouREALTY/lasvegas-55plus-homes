import type { Metadata } from 'next'
import { RealScoutOfficeSection } from '@/components/RealScoutOfficeSection'
import {
  ADDRESS,
  AGENT_NAME,
  BUSINESS_DESCRIPTION,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_META_DESCRIPTION,
  SITE_URL,
} from '@/lib/business'

export const metadata: Metadata = {
  title: `About ${AGENT_NAME}`,
  description: SITE_META_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-green-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">About {AGENT_NAME}</h1>
          <p className="text-green-200 text-xl">
            Sun City Summerlin 55+ real estate · Berkshire Hathaway HomeServices Nevada Properties
          </p>
        </div>
      </section>
      <RealScoutOfficeSection />
      <section className="py-14 px-4 max-w-4xl mx-auto prose">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2>Your Sun City Summerlin &amp; 55+ specialist</h2>
            <p>{BUSINESS_DESCRIPTION}</p>
            <h2>Sun City Summerlin — home base</h2>
            <p>
              {AGENT_NAME}&apos;s office at {ADDRESS.streetAddress} in {ADDRESS.addressLocality} keeps her
              steps from Sun City Summerlin — Las Vegas&apos; original Del Webb active adult community. She
              tracks resale trends, HOA health, and floor-plan demand across the valley&apos;s six major 55+
              neighborhoods.
            </p>
            <h2>The 55+ transaction is different</h2>
            <p>
              Age verification, resale caps, HOA transfer fees, rental restrictions, and capital
              contributions — active adult deals have layers generalists often miss. {AGENT_NAME} has
              navigated hundreds of these transactions and knows where the surprises hide.
            </p>
          </div>
          <aside>
            <div className="bg-green-950 text-white rounded-xl p-6 sticky top-24 not-prose">
              <h3 className="font-bold text-yellow-400 text-lg mb-4">By the numbers</h3>
              {[
                { n: '25+', l: 'Years active adult focus' },
                { n: '500+', l: 'Families helped' },
                { n: '$127M+', l: 'Career sales' },
                { n: '6', l: '55+ communities' },
              ].map((s) => (
                <div key={s.n} className="border-b border-green-800 pb-3 mb-3">
                  <div className="text-3xl font-bold text-yellow-400">{s.n}</div>
                  <div className="text-green-200 text-sm">{s.l}</div>
                </div>
              ))}
              <a
                href={PHONE_TEL_HREF}
                className="block w-full bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition mt-4"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
