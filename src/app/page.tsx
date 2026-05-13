import type { Metadata } from 'next'
import Link from 'next/link'
import { communities } from '@/lib/communities'
import {
  AGENT_NAME,
  BUSINESS_DESCRIPTION,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_META_DESCRIPTION,
  SITE_URL,
  SMS_HREF,
} from '@/lib/business'

export const metadata: Metadata = {
  description: SITE_META_DESCRIPTION,
  alternates: { canonical: SITE_URL },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-950 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-3 uppercase tracking-wide">
            Sun City Summerlin &amp; Las Vegas Active Adult Communities
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect<br />
            <span className="text-yellow-400">55+ Community</span><br />
            in Las Vegas
          </h1>
          <p className="text-xl text-green-200 mb-4 max-w-2xl">
            Dream retirement living in Sun City Summerlin and the valley&apos;s top 55+ neighborhoods —
            with expert guidance at every step.
          </p>
          <p className="text-green-100/90 text-base mb-8 max-w-3xl leading-relaxed">
            {BUSINESS_DESCRIPTION}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/communities"
              className="bg-yellow-400 text-green-950 font-bold px-7 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Browse Communities
            </Link>
            <a
              href={PHONE_TEL_HREF}
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 text-white py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '25+', label: 'Years Active Adult Focus' },
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
                <p className="text-xs text-gray-500">
                  {c.location} · {c.zip}
                </p>
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
              {AGENT_NAME} brings 25+ years focused on Las Vegas active adult communities and has guided
              hundreds of families through Sun City Summerlin, Del Webb, Anthem, and beyond.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Find Your Ideal Community →
            </Link>
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
            <a
              href={PHONE_TEL_HREF}
              className="block mt-6 bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Get the Answers · {PHONE_DISPLAY}
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
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-green-950 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition text-lg"
          >
            Get a Free Community Comparison
          </Link>
          <p className="text-green-300 text-sm mt-4">
            Or call/text direct: {PHONE_DISPLAY} · {AGENT_NAME}
          </p>
          <p className="text-green-400 text-xs mt-2">
            <a href={SMS_HREF} className="underline hover:text-white">
              Text {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
