import Link from 'next/link'
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
  SMS_HREF,
  SOCIAL_PROFILES,
  SPECIAL_CLOSED_DATES,
  HOURS_PUBLIC_LINE,
} from '@/lib/business'

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">{SITE_BRAND}</h3>
          <p className="text-green-200 text-sm mb-2">{BUSINESS_NAME}</p>
          <p className="text-green-200 text-sm mb-4">
            Veteran-owned · Women-owned · LGBTQ+ friendly · Languages: English, Spanish, Arabic,
            Cantonese, ASL &amp; Filipino
          </p>
          <p className="text-green-300 text-xs">
            {AGENT_NAME} | NV License #{LICENSE}
            <br />
            {BROKERAGE}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-300">55+ Communities</h4>
          <ul className="space-y-2 text-sm text-green-200">
            {[
              { name: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
              { name: 'Del Webb North Ranch', href: '/communities/del-webb-north-ranch' },
              { name: 'Heritage at Stonebridge', href: '/communities/heritage-stonebridge' },
              { name: 'Sun City Anthem', href: '/communities/sun-city-anthem' },
              { name: 'Siena', href: '/communities/siena' },
              { name: 'Trilogy Sunstone', href: '/communities/trilogy-sunstone' },
            ].map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white transition">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-300">Contact &amp; hours</h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>
              <a href={PHONE_TEL_HREF} className="hover:text-white transition">
                📞 {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={SMS_HREF} className="hover:text-white transition">
                💬 Text {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition">
                ✉️ {EMAIL}
              </a>
            </li>
          </ul>
          <div className="mt-4 text-xs text-green-300 space-y-1">
            <p>
              {ADDRESS.streetAddress}
              <br />
              {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
            </p>
            <p>
              {HOURS_PUBLIC_LINE}. Closed:{' '}
              {SPECIAL_CLOSED_DATES.map((d) => `${d.date} (${d.label})`).join('; ')}.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-green-400 mb-2">Social</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-green-200">
              {SOCIAL_PROFILES.map((href) => {
                const host = new URL(href).hostname.replace('www.', '')
                return (
                  <li key={href}>
                    <a href={href} className="hover:text-white underline" rel="me noopener noreferrer" target="_blank">
                      {host}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 py-4 px-4 text-center text-xs text-green-400">
        <p>
          © {new Date().getFullYear()} {SITE_BRAND} · {AGENT_NAME} · {BROKERAGE} ·{' '}
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}
