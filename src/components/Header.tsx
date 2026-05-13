'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  AGENT_NAME,
  BUSINESS_NAME_SHORT,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_BRAND,
} from '@/lib/business'

const communities = [
  { name: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
  { name: 'Del Webb North Ranch', href: '/communities/del-webb-north-ranch' },
  { name: 'Heritage at Stonebridge', href: '/communities/heritage-stonebridge' },
  { name: 'Sun City Anthem', href: '/communities/sun-city-anthem' },
  { name: 'Siena', href: '/communities/siena' },
  { name: 'Trilogy Sunstone', href: '/communities/trilogy-sunstone' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 min-h-16 py-2 flex items-center justify-between gap-3">
        <Link href="/" className="font-bold text-green-900 leading-tight text-sm sm:text-base">
          <span className="block text-green-950">{BUSINESS_NAME_SHORT}</span>
          <span className="block text-xs sm:text-sm font-semibold text-green-700">
            {SITE_BRAND} · {AGENT_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div
            className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-green-800">
              Communities <span className="text-xs">▾</span>
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border rounded-lg shadow-lg py-2 mt-1">
                {communities.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-800"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="text-gray-700 hover:text-green-800">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-800">
            Market News
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-800">
            Contact
          </Link>
          <a
            href={PHONE_TEL_HREF}
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-sm">
          <p className="font-semibold text-gray-500 uppercase text-xs tracking-wide">Communities</p>
          {communities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block text-gray-700 hover:text-green-800 pl-2"
              onClick={() => setMobileOpen(false)}
            >
              {c.name}
            </Link>
          ))}
          <hr />
          <Link
            href="/about"
            className="block text-gray-700 hover:text-green-800"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block text-gray-700 hover:text-green-800"
            onClick={() => setMobileOpen(false)}
          >
            Market News
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-green-800"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href={PHONE_TEL_HREF}
            className="block bg-green-800 text-white text-center py-2 rounded-lg"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  )
}
