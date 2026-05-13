/** Canonical NAP and GBP-aligned business facts (single source of truth). */

export const BUSINESS_NAME =
  'Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy'

export const BUSINESS_NAME_SHORT = 'Sun City Summerlin 55+ Real Estate'

export const SITE_BRAND = 'Las Vegas 55+ Homes'

export const AGENT_NAME = 'Dr. Jan Duffy'

export const BROKERAGE = 'Berkshire Hathaway HomeServices Nevada Properties'

export const LICENSE = 'S.0197614.LLC'

export const BUSINESS_DESCRIPTION =
  'Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas. With over 25 years of experience in active adult communities, Dr. Duffy has helped countless retirees discover the perfect home to suit their lifestyle and needs. Sun City Summerlin offers a variety of beautiful options. This vibrant community is designed specifically for active adults, featuring world-class amenities such as golf courses, fitness centers, pools, walking trails, and social clubs. Dr. Duffy provides expert guidance and personalized service every step of the way, ensuring your transition into this exciting new chapter is seamless and stress-free. Start your journey toward a fulfilling and active retirement today!'

/** ~160 chars for default meta description */
export const SITE_META_DESCRIPTION =
  'Sun City Summerlin 55+ homes in Las Vegas — expert active adult real estate with Dr. Jan Duffy. Golf, fitness, pools, clubs & personalized service. Call (702) 718-0043.'

export const PHONE_DISPLAY = '(702) 718-0043'

export const PHONE_E164 = '+17027180043'

export const PHONE_TEL_HREF = 'tel:+17027180043'

export const SMS_HREF = 'sms:+17027180043'

export const EMAIL = 'DrJanSells@LasVegas55PlusHomes.com'

export const SITE_URL = 'https://lasvegas55plushomes.com'

/** Office pin (OSM Nominatim geocode for structured data; verify in GBP / Maps if needed). */
export const OFFICE_GEO = {
  latitude: 36.210548,
  longitude: -115.298405,
} as const

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  brokerage: `${SITE_URL}/#brokerage`,
  agent: `${SITE_URL}/#realestateagent`,
} as const

export const ADDRESS = {
  streetAddress: '9406 Del Webb Boulevard',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89134',
  addressCountry: 'US',
} as const

export const FOUNDING_DATE = '2013-09-20'

export const SERVICE_AREAS = [
  'Nevada, USA',
  'Henderson, NV, USA',
  'Las Vegas, NV, USA',
  'Clark County, NV, USA',
  'Henderson, NV 89052, USA',
  'Las Vegas, NV 89122, USA',
  'Las Vegas, NV 89135, USA',
  'Las Vegas, NV 89138, USA',
  'Las Vegas, NV 89166, USA',
  'North Las Vegas, NV, USA',
  'Meadows, Las Vegas, NV, USA',
  'North Las Vegas, NV 89084, USA',
  'Providence, Las Vegas, NV, USA',
  'Anthem, Henderson, NV 89052, USA',
  'MacDonald Ranch, Henderson, NV, USA',
  'Lake Las Vegas, Henderson, NV 89011, USA',
  'Sun City Summerlin, Las Vegas, NV 89134, USA',
] as const

export const SOCIAL_PROFILES = [
  'https://www.tiktok.com/@dr.janduffy',
  'https://www.youtube.com/@DrDuffy',
  'https://www.instagram.com/drjanduffy/',
  'https://x.com/drjanduffy',
  'https://www.linkedin.com/company/lvrmembers/',
  'https://www.pinterest.com/bhhsluxury/',
  'https://www.facebook.com/DrJanDuffyRealtorCentennialHills/',
] as const

export const LANGUAGES_OFFERED = [
  'English',
  'Spanish',
  'Arabic',
  'Cantonese',
  'American Sign Language',
  'Filipino',
] as const

export const COMMUNITY_FOCUS = [
  'Sun City Summerlin',
  'Del Webb North Ranch',
  'Heritage at Stonebridge',
  'Sun City Anthem',
  'Siena',
  'Trilogy Sunstone',
] as const

export const WEEKLY_HOURS = { opens: '06:00', closes: '21:00' } as const

/** Human-readable hours line (matches GBP) */
export const HOURS_PUBLIC_LINE = 'Open daily 6:00 AM–9:00 PM'

export const SPECIAL_CLOSED_DATES: ReadonlyArray<{ label: string; date: string }> = [
  { label: 'Easter', date: '2026-04-05' },
  { label: 'Memorial Day', date: '2026-05-25' },
  { label: '4th of July (Observed)', date: '2026-07-03' },
]

const SCHEMA_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export function weeklyOpeningHoursSpecification() {
  return SCHEMA_DAYS.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${day}`,
    opens: WEEKLY_HOURS.opens,
    closes: WEEKLY_HOURS.closes,
  }))
}

function realEstateAgentNode() {
  return {
    '@type': 'RealEstateAgent',
    '@id': SCHEMA_IDS.agent,
    name: BUSINESS_NAME,
    alternateName: [SITE_BRAND, AGENT_NAME],
    foundingDate: FOUNDING_DATE,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    description: BUSINESS_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICE_GEO.latitude,
      longitude: OFFICE_GEO.longitude,
    },
    worksFor: { '@id': SCHEMA_IDS.brokerage },
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: [
      ...COMMUNITY_FOCUS,
      'Real estate agency',
      'Retirement community',
      'Real estate consultant',
      'Veteran-owned business',
      'Women-owned business',
    ],
    availableLanguage: [...LANGUAGES_OFFERED],
    sameAs: [...SOCIAL_PROFILES],
    openingHoursSpecification: weeklyOpeningHoursSpecification(),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible entrance' },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible parking lot' },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible restroom' },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible seating' },
      { '@type': 'LocationFeatureSpecification', name: 'Gender-neutral restroom' },
      { '@type': 'LocationFeatureSpecification', name: 'Free parking lot' },
    ],
    identifier: `NV Real Estate License ${LICENSE}`,
  }
}

/**
 * Entity graph for Google: WebSite + Organization (brokerage) + RealEstateAgent,
 * with stable @id cross-links (recommended for Search / AI overviews alignment).
 */
export function buildSiteJsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': SCHEMA_IDS.website,
        url: SITE_URL,
        name: SITE_BRAND,
        description: SITE_META_DESCRIPTION,
        inLanguage: 'en-US',
        publisher: { '@id': SCHEMA_IDS.agent },
      },
      {
        '@type': 'Organization',
        '@id': SCHEMA_IDS.brokerage,
        name: BROKERAGE,
        url: SITE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.streetAddress,
          addressLocality: ADDRESS.addressLocality,
          addressRegion: ADDRESS.addressRegion,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.addressCountry,
        },
        telephone: PHONE_E164,
      },
      realEstateAgentNode(),
    ],
  }
}

export function formatAddressHtmlLines(): [string, string] {
  return [
    `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}`,
    ADDRESS.addressCountry === 'US' ? 'United States' : ADDRESS.addressCountry,
  ]
}
