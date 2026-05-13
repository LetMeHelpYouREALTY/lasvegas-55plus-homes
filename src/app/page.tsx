import type { Metadata } from 'next'
import Link from 'next/link'
import { communities } from '@/lib/communities'

export const metadata: Metadata = {
  title: 'Las Vegas 55+ Homes | Active Adult Communities Expert',
  description: 'Find your perfect Las Vegas 55+ community — Sun City Summerlin, Del Webb, Heritage Stonebridge, Anthem. Expert guidance from Dr. Jan Duffy, BHHS Nevada Properties.',
  alternates: { canonical: 'https://lasvegas55plushomes.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Jan Duffy — Las Vegas 55+ Homes Specialist',
  url: 'https://lasvegas55plushomes.com',
  telephone: '702-222-1964',
  description: '55+ active adult community specialist. Sun City Summerlin, Del Webb, Heritage Stonebridge, Anthem, Siena, Trilogy Sunstone.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9406 Del Webb Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89134',
    addressCountry: 'US',
  },
  areaServed: 'Las Vegas, NV',
  knowsAbout: ['Sun City Summerlin', 'Del Webb North Ranch', 'Heritage at Stonebridge', 'Sun City Anthem', 'Siena', 'Trilogy Sunstone'],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* Hero */}
        <section className="bg-green-950 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-green-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              Las Vegas Active Adult Communities
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect<br />
              <span className="text-yellow-400">55+ Community</span><br />
              in Las Vegas
            </h1>
            <p className="text-xl text-green-200 mb-8 max-w-2xl">
              Six world-class active adult communities. One local expert who knows every floor plan,
              HOA fee, and resale trend.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/communities" className="bg-yellow-400 text-green-950 font-bold px-7 py-3 rounded-lg hover:bg-yellow-300 transition">
                Browse Communities
              </a>
              <a href="tel:7022221964" className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-green-800 transition">
                Call 702-222-1964
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-green-800 text-white py-6 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: '35+', label: 'Years Las Vegas' },
              { n: '500+', label: 'Families Helped' },
              { n: '6', label: '55+ Communities' },
              { n: '$127M+', label: 'Career Sales' },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-3xl font-bold text-yellow-400">{s.n}</div>
                <div className="text-green-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Communities Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-green-950 text-center mb-3">
              Las Vegas 55+ Communities
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Each community has its own personality, price point, and lifestyle. Here&apos;s what sets them apart.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/communities/${c.slug}`}
                  className="group border-2 rounded-xl p-6 hover:border-green-600 hover:shadow-lg transition"
                >
                  <div className="text-xs font-semibold text-green-700 uppercase mb-2">Active Adult · 55+</div>
                  <h3 className="text-xl font-bold text-green-950 group-hover:text-green-700 mb-1">
                    {c.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{c.tagline}</p>
                  <p className="text-green-800 font-bold text-lg mb-3">{c.priceRange}</p>
                  <p className="text-xs text-gray-500">{c.location} · {c.zip}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dr. Jan */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-950 mb-4">
                Why Work With a 55+ Specialist?
              </h2>
              <p className="text-gray-600 mb-4">
                Not every agent understands the nuances of active adult communities — HOA age
                verification, resale restrictions, transfer fees, and the lifestyle amenities that
                matter most to buyers 55 and over.
              </p>
              <p className="text-gray-600 mb-6">
                Dr. Jan Duffy has guided 500+ Las Vegas families through real estate decisions.
                She knows which community has the best pickleball courts, which HOA is best run,
                and which floor plans hold value best on resale.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Find Your Ideal Community →
              </a>
            </div>
            <div className="bg-green-950 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">What Clients Ask</h3>
              {[
                'Which community has the best amenities for my lifestyle?',
                'What are the real HOA fees — all-in?',
                'Can I rent my home? What are the restrictions?',
                'Which communities are closest to good medical centers?',
                'What floor plans have the best resale value?',
              ].map((q, i) => (
                <div key={i} className="flex gap-3 mb-3 text-sm text-green-100">
                  <span className="text-yellow-400 mt-0.5">✦</span>
                  <span>{q}</span>
                </div>
              ))}
              <a href="tel:7022221964" className="block mt-6 bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition">
                Get the Answers · 702-222-1964
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">
              Ready to Find Your Perfect 55+ Community?
            </h2>
            <p className="text-green-200 mb-6">
              Let&apos;s match your lifestyle, budget, and location preferences to the right community.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-green-950 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition text-lg"
            >
              Get a Free Community Comparison
            </a>
            <p className="text-green-300 text-sm mt-4">
              Or call/text direct: 702-222-1964 · Dr. Jan Duffy
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
