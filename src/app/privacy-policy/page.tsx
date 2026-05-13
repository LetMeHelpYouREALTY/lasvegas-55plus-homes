import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Las Vegas 55+ Homes',
  description: 'Privacy policy for lasvegas55plushomes.com.',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-green-950 mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: May 12, 2026</p>
      <div className="prose">
        <p>Las Vegas 55+ Homes (lasvegas55plushomes.com) is operated by Dr. Jan Duffy, NV License #S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.</p>
        <h2>Information We Collect</h2>
        <p>Contact form submissions collect name, email, phone, and message. Standard server logs collect IP address and browser type.</p>
        <h2>How We Use It</h2>
        <p>To respond to your inquiry. To send requested market updates. We do not sell your information.</p>
        <h2>Contact</h2>
        <p>Dr. Jan Duffy · 9406 Del Webb Blvd, Las Vegas NV 89134 · 702-500-1955 · janet.duffy@bhhsnv.com</p>
      </div>
    </main>
  )
}
