import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas 55+ Homes Specialist',
  description: '35+ years guiding Las Vegas 55+ buyers. Sun City Summerlin specialist. 500+ families, $127M+ career sales. Dr. Jan Duffy, BHHS Nevada Properties.',
  alternates: { canonical: 'https://lasvegas55plushomes.com/about' },
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-green-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">About Dr. Jan Duffy</h1>
          <p className="text-green-200 text-xl">Las Vegas 55+ Community Specialist · BHHS Nevada Properties</p>
        </div>
      </section>
      <section className="py-14 px-4 max-w-4xl mx-auto prose">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2>Your 55+ Community Expert</h2>
            <p>
              Dr. Jan Duffy has spent 35+ years helping Las Vegas families find their perfect home —
              and for a significant portion of those clients, that&apos;s meant navigating the unique
              world of 55+ active adult communities.
            </p>
            <p>
              She knows every community from the inside: the HOA boards, the lifestyle directors,
              which clubs are active, which floor plans show best, and which resale properties
              offer the best value right now. That ground-level knowledge is what separates a
              specialist from a generalist.
            </p>
            <h2>Sun City Summerlin — Her Home Community</h2>
            <p>
              Dr. Jan&apos;s Sun City Summerlin office (9406 Del Webb Blvd) puts her at the heart of Las
              Vegas&apos; original 55+ community every single day. She&apos;s watched the market here for
              decades — through rate cycles, inventory crunches, and booming appreciation — and
              she brings that longitudinal perspective to every buyer consultation.
            </p>
            <h2>The 55+ Transaction Is Different</h2>
            <p>
              Age verification requirements, resale caps, HOA transfer fees, rental restrictions,
              capital contribution fees — active adult community transactions have layers that
              general agents often miss. Dr. Jan has navigated hundreds of these transactions and
              knows where the surprises hide.
            </p>
          </div>
          <aside>
            <div className="bg-green-950 text-white rounded-xl p-6 sticky top-24 not-prose">
              <h3 className="font-bold text-yellow-400 text-lg mb-4">By the Numbers</h3>
              {[
                { n: '35+', l: 'Years in Las Vegas' },
                { n: '500+', l: 'Families Helped' },
                { n: '$127M+', l: 'Career Sales' },
                { n: '6', l: '55+ Communities' },
              ].map((s) => (
                <div key={s.n} className="border-b border-green-800 pb-3 mb-3">
                  <div className="text-3xl font-bold text-yellow-400">{s.n}</div>
                  <div className="text-green-200 text-sm">{s.l}</div>
                </div>
              ))}
              <a href="tel:7022221964" className="block w-full bg-yellow-400 text-green-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition mt-4">
                Call 702-222-1964
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
