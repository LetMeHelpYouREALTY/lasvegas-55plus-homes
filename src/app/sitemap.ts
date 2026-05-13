import type { MetadataRoute } from 'next'
import { communities } from '@/lib/communities'
import { getKcmPosts } from '@/lib/kcm'
import { SITE_URL } from '@/lib/business'

const lastmod = process.env.BUILD_DATE_ISO ?? new Date().toISOString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ['', '/about', '/contact', '/blog', '/communities']
  const static_pages = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastmod,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }))

  const community_pages = communities.map((c) => ({
    url: `${SITE_URL}/communities/${c.slug}`,
    lastModified: lastmod,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const posts = await getKcmPosts()
  const blog_pages = posts
    .filter((p) => p.approved)
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: lastmod,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))

  return [...static_pages, ...community_pages, ...blog_pages]
}
