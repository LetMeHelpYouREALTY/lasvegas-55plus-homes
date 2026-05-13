import { MetadataRoute } from 'next'
import { communities } from '@/lib/communities'

const BASE = 'https://lasvegas55plushomes.com'
const lastmod = process.env.BUILD_DATE_ISO ?? new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  const static_pages = ['', '/about', '/contact', '/blog', '/communities', '/privacy-policy'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: lastmod,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }))

  const community_pages = communities.map((c) => ({
    url: `${BASE}/communities/${c.slug}`,
    lastModified: lastmod,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...static_pages, ...community_pages]
}
