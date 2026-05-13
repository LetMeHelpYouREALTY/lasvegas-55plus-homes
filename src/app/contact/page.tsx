import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas 55+ Homes',
  description: 'Contact Dr. Jan Duffy for expert guidance on Las Vegas 55+ communities. Sun City Summerlin, Del Webb, Heritage Stonebridge, Anthem, Siena, Trilogy.',
  alternates: { canonical: 'https://lasvegas55plushomes.com/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-green-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Let&apos;s Find Your Community</h1>
          <p className="text-green-200">Tell me what matters most — I&apos;ll match you to the right 55+ community.</p>
        </div>
      </section>
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <ContactForm />
          <aside className="space-y-6">
            <div>
              <h3 className="font-bold text-green-950 mb-3">Direct Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:7022221964" className="text-green-700 hover:underline font-semibold">📞 702-222-1964</a></li>
                <li><a href="sms:7022221964" className="text-green-700 hover:underline">💬 Text 702-222-1964</a></li>
                <li><a href="mailto:janet.duffy@bhhsnv.com" className="text-green-700 hover:underline">✉️ janet.duffy@bhhsnv.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-950 mb-3">Sun City Summerlin Office</h3>
              <address className="not-italic text-sm text-gray-600">
                9406 Del Webb Blvd<br />Las Vegas, NV 89134
              </address>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-sm text-green-900">
              <strong>What to Bring to Our Conversation:</strong>
              <ul className="mt-2 space-y-1 text-green-800">
                <li>✓ Top 2–3 amenities you want</li>
                <li>✓ Your target monthly budget (incl. HOA)</li>
                <li>✓ Single-story requirement? Yes/No</li>
                <li>✓ Preferred area (NW Vegas, Henderson, N. LV)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
