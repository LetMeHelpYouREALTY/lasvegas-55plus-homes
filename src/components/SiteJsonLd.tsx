import { buildRealEstateAgentJsonLd } from '@/lib/business'

export default function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildRealEstateAgentJsonLd()) }}
    />
  )
}
