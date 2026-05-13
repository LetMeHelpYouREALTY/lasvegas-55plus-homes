import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { OfficeListingsSection } from '@/components/OfficeListingsSection'
import { communities, getCommunity } from '@/lib/communities'
import { AGENT_NAME, BROKERAGE, LICENSE, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_BRAND, SITE_URL } from '@/lib/business'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCommunity(slug)
  if (!c) return {}
  return {
    title: `${c.name} | ${SITE_BRAND}`,
    description: `${c.name} — ${c.tagline}. Homes ${c.priceRange}. Age 55+ required. HOA ${c.hoa.split('(')[0].trim()}. ${AGENT_NAME} · ${PHONE_DISPLAY}.`,
    alternates: { canonical: `${SITE_URL}/communities/${slug}` },
  }
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params
  const c = getCommunity(slug)
  if (!c) notFound()

  return (
    <main>
        <section className="bg-green-950 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-yellow-400 text-sm font-semibold mb-2">Active Adult · 55+ Community</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{c.name}</h1>
            <p className="text-green-200 text-xl mb-2">{c.tagline}</p>
            <p className="text-3xl font-bold text-yellow-400">{c.priceRange}</p>
          </div>
        </section>

        <OfficeListingsSection />

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 prose">
              <h2>About {c.name}</h2>
              <p>{c.description}</p>
              <h2>Community Amenities</h2>
              <ul>{c.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
              <h2>Age Requirement</h2>
              <p>{c.ageRequirement}</p>
              <h2>HOA Fees</h2>
              <p>{c.hoa}</p>
            </div>
            <aside>
              <div className="bg-green-950 text-white rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-yellow-400 text-lg mb-3">Interested in {c.name}?</h3>
                <p className="text-green-200 text-sm mb-5">
                  I track every sale and floor plan here. Let me pull current availability and honest
                  HOA details before you visit.
                </p>
                <a href={PHONE_TEL_HREF} className="block w-full bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition mb-3">
                  Call {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="block w-full border border-yellow-400 text-yellow-400 font-semibold text-center py-3 rounded-lg hover:bg-green-800 transition">
                  Request Community Report
                </Link>
                <p className="text-green-400 text-xs text-center mt-4">
                  {AGENT_NAME} · NV #{LICENSE}
                  <br />
                  {BROKERAGE}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t py-8 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/communities" className="text-green-700 hover:underline font-medium">
              ← All 55+ Communities
            </Link>
            <Link href="/contact" className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold">
              Free Community Comparison
            </Link>
          </div>
        </section>
      </main>
  )
}
