import type { Metadata } from 'next'
import Link from 'next/link'
import { RealScoutOfficeSection } from '@/components/RealScoutOfficeSection'
import { getKcmPosts } from '@/lib/kcm'
import { AGENT_NAME, SITE_BRAND, SITE_URL } from '@/lib/business'

export const revalidate = 3600

export const metadata: Metadata = {
  title: `Market News | ${SITE_BRAND}`,
  description: `Las Vegas real estate market updates curated for 55+ buyers and sellers — rates, community news, and expert insights from ${AGENT_NAME}.`,
  alternates: { canonical: `${SITE_URL}/blog` },
  authors: [{ name: AGENT_NAME, url: SITE_URL }],
  creator: AGENT_NAME,
  publisher: AGENT_NAME,
}

export default async function BlogPage() {
  const posts = await getKcmPosts()
  const approved = posts.filter((p) => p.approved)

  return (
    <main>
      <section className="bg-green-950 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Market News & Insights</h1>
          <p className="text-green-200">Real estate updates curated for Las Vegas 55+ buyers and sellers.</p>
        </div>
      </section>
      <RealScoutOfficeSection />
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          {approved.length === 0 ? (
            <p className="text-gray-500 text-center py-10">Market updates coming soon — check back shortly.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approved.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="p-5">
                    <p className="text-xs text-green-700 font-semibold mb-2">{post.category}</p>
                    <h2 className="font-bold text-gray-900 group-hover:text-green-700 mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-3">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
