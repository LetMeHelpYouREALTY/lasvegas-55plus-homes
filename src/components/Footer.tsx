import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Las Vegas 55+ Homes</h3>
          <p className="text-green-200 text-sm mb-4">
            Your guide to active adult communities in Las Vegas, Henderson, and the surrounding valley.
          </p>
          <p className="text-green-300 text-xs">
            Dr. Jan Duffy | NV License #S.0197614.LLC<br />
            Berkshire Hathaway HomeServices Nevada Properties
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
              <li key={c.href}><Link href={c.href} className="hover:text-white transition">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-300">Contact Dr. Jan</h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li><a href="tel:7022221964" className="hover:text-white transition">📞 702-222-1964</a></li>
            <li><a href="sms:7022221964" className="hover:text-white transition">💬 Text 702-222-1964</a></li>
            <li><a href="mailto:janet.duffy@bhhsnv.com" className="hover:text-white transition">✉️ janet.duffy@bhhsnv.com</a></li>
          </ul>
          <div className="mt-4 text-xs text-green-300">
            <p>9406 Del Webb Blvd</p>
            <p>Las Vegas, NV 89134</p>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 py-4 px-4 text-center text-xs text-green-400">
        <p>© {new Date().getFullYear()} Las Vegas 55+ Homes · Dr. Jan Duffy · BHHS Nevada Properties ·{' '}
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
