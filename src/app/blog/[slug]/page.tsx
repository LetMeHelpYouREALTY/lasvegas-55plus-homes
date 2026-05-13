import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RealScoutOfficeSection } from '@/components/RealScoutOfficeSection'
import { getKcmPosts, getKcmPost } from '@/lib/kcm'
import { AGENT_NAME, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from '@/lib/business'

export const revalidate = 3600

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getKcmPosts()
  return posts.filter((p) => p.approved).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getKcmPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    authors: [{ name: AGENT_NAME, url: SITE_URL }],
    creator: AGENT_NAME,
    publisher: AGENT_NAME,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      authors: [AGENT_NAME],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getKcmPost(slug)
  if (!post || !post.approved) notFound()

  return (
    <main>
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-0">
        <p className="text-green-700 font-semibold text-sm mb-2">{post.category}</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      <RealScoutOfficeSection />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        {post.localContext && (
          <div className="border-l-4 border-green-600 bg-green-50 p-4 mb-8 rounded-r-lg">
            <p className="text-xs font-bold text-green-800 uppercase mb-1">Dr. Jan&apos;s Local Take</p>
            <p className="text-green-900 text-sm">{post.localContext}</p>
          </div>
        )}

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-10 bg-green-950 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Questions about what this means for you?</p>
          <p className="text-green-200 text-sm mb-4">
            Every market shift affects 55+ communities differently. Call and I&apos;ll tell you exactly
            what it means for your situation.
          </p>
          <a
            href={PHONE_TEL_HREF}
            className="inline-block bg-yellow-400 text-green-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Call {AGENT_NAME} · {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  )
}
