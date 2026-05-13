import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { communities, getCommunity } from '@/lib/communities'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCommunity(slug)
  if (!c) return {}
  return {
    title: `${c.name} | Las Vegas 55+ Homes`,
    description: `${c.name} — ${c.tagline}. Homes ${c.priceRange}. Age 55+ required. HOA ${c.hoa.split('(')[0].trim()}. Dr. Jan Duffy · 702-222-1964.`,
    alternates: { canonical: `https://lasvegas55plushomes.com/communities/${slug}` },
  }
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params
  const c = getCommunity(slug)
  if (!c) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: `https://lasvegas55plushomes.com/communities/${slug}`,
    telephone: '702-222-1964',
    areaServed: c.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: c.zip,
      addressCountry: 'US',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="bg-green-950 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-yellow-400 text-sm font-semibold mb-2">Active Adult · 55+ Community</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{c.name}</h1>
            <p className="text-green-200 text-xl mb-2">{c.tagline}</p>
            <p className="text-3xl font-bold text-yellow-400">{c.priceRange}</p>
          </div>
        </section>

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
                <a href="tel:7022221964" className="block w-full bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition mb-3">
                  Call 702-222-1964
                </a>
                <a href="/contact" className="block w-full border border-yellow-400 text-yellow-400 font-semibold text-center py-3 rounded-lg hover:bg-green-800 transition">
                  Request Community Report
                </a>
                <p className="text-green-400 text-xs text-center mt-4">
                  Dr. Jan Duffy · NV #S.0197614.LLC<br />BHHS Nevada Properties
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t py-8 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a href="/communities" className="text-green-700 hover:underline font-medium">← All 55+ Communities</a>
            <a href="/contact" className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold">
              Free Community Comparison
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
