import type { Metadata } from 'next'
import Link from 'next/link'
import { OfficeListingsSection } from '@/components/OfficeListingsSection'
import { communities } from '@/lib/communities'
import { SITE_BRAND, SITE_URL } from '@/lib/business'

export const metadata: Metadata = {
  title: `All 55+ Communities | ${SITE_BRAND}`,
  description: 'Compare all 6 Las Vegas 55+ communities — Sun City Summerlin, Del Webb North Ranch, Heritage Stonebridge, Anthem, Siena, Trilogy Sunstone. Prices, amenities, HOA fees.',
  alternates: { canonical: `${SITE_URL}/communities` },
}

export default function CommunitiesPage() {
  return (
    <main>
      <section className="bg-green-950 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Las Vegas 55+ Communities</h1>
          <p className="text-green-200 text-lg">Compare all six active adult communities side by side.</p>
        </div>
      </section>
      <OfficeListingsSection />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {communities.map((c) => (
            <Link key={c.slug} href={`/communities/${c.slug}`}
              className="group flex flex-col md:flex-row gap-6 border-2 rounded-xl p-6 hover:border-green-600 hover:shadow transition"
            >
              <div className="flex-1">
                <div className="text-xs text-green-700 font-semibold uppercase mb-1">{c.location}</div>
                <h2 className="text-2xl font-bold text-green-950 group-hover:text-green-700 mb-1">{c.name}</h2>
                <p className="text-gray-500 text-sm mb-2">{c.tagline}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{c.description.slice(0, 160)}…</p>
              </div>
              <div className="md:text-right md:min-w-[160px] space-y-2">
                <p className="text-2xl font-bold text-green-800">{c.priceRange}</p>
                <p className="text-xs text-gray-500">HOA: {c.hoa.split('(')[0].trim()}</p>
                <p className="text-xs font-semibold text-green-700">View Community →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
