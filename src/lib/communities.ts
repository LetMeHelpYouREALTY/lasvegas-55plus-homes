export interface Community {
  slug: string
  name: string
  tagline: string
  priceRange: string
  description: string
  amenities: string[]
  ageRequirement: string
  hoa: string
  location: string
  zip: string
}

export const communities: Community[] = [
  {
    slug: 'sun-city-summerlin',
    name: 'Sun City Summerlin',
    tagline: "Las Vegas' original Del Webb 55+ community",
    priceRange: '$350K – $900K',
    description: `Sun City Summerlin is the original Del Webb active adult community in Las Vegas, built starting in 1988. With 7,800+ homes and four recreation centers, it remains the gold standard for 55+ living in the valley. Residents enjoy two 18-hole golf courses (Palm Valley and Highland Falls), indoor and outdoor pools, tennis, pickleball, fitness centers, and hundreds of clubs and activities. The location — just off the 215 in northwest Las Vegas — puts residents minutes from Summerlin shopping, the Las Vegas Strip, and Red Rock Canyon.`,
    amenities: ['4 recreation centers', '2 golf courses (Palm Valley & Highland Falls)', 'Indoor & outdoor pools', 'Tennis & pickleball', 'Fitness centers', '200+ clubs & activities', 'On-site restaurant'],
    ageRequirement: 'One resident must be 55+; no one under 18 may reside full-time',
    hoa: '~$185–$250/month (varies by sub-association)',
    location: 'Northwest Las Vegas near Summerlin',
    zip: '89134',
  },
  {
    slug: 'del-webb-north-ranch',
    name: 'Del Webb North Ranch',
    tagline: 'Skye Canyon\'s premier active adult address',
    priceRange: '$400K – $750K',
    description: `Del Webb North Ranch is the newest Del Webb community in the Las Vegas Valley, located in the Skye Canyon master plan in northwest Las Vegas. Opened in 2017, it offers a modern resort-style clubhouse, indoor and outdoor pools, pickleball, bocce ball, and a full activity calendar. The homes are newer construction with contemporary finishes, single-story floor plans, and energy-efficient features. Skye Canyon's surrounding amenities — including parks, trails, and a community center — are available to all residents.`,
    amenities: ['Resort-style clubhouse', 'Indoor & outdoor pools', 'Pickleball & bocce', 'Fitness center & yoga studio', 'Community garden', 'On-site lifestyle director'],
    ageRequirement: 'One resident must be 55+',
    hoa: '~$240–$290/month',
    location: 'Skye Canyon, northwest Las Vegas',
    zip: '89166',
  },
  {
    slug: 'heritage-stonebridge',
    name: 'Heritage at Stonebridge',
    tagline: 'Summerlin\'s boutique 55+ community by Lennar',
    priceRange: '$500K – $900K',
    description: `Heritage at Stonebridge is Lennar's 55+ enclave within the Stonebridge village of Summerlin West. This intimate gated community offers newer single-story homes with upscale finishes, an exclusive clubhouse, pool, and lifestyle programming — all while being steps from Summerlin's extensive trail system, Red Rock Canyon, and the amenities of Downtown Summerlin. With a smaller footprint than Sun City, Heritage offers a more private, neighborhood feel.`,
    amenities: ['Gated community', 'Exclusive clubhouse & pool', 'Fitness center', 'Summerlin trail access', 'Minutes from Downtown Summerlin', 'Newer construction (2018+)'],
    ageRequirement: 'One resident must be 55+',
    hoa: '~$350–$420/month (includes Summerlin master HOA)',
    location: 'Stonebridge village, Summerlin West',
    zip: '89138',
  },
  {
    slug: 'sun-city-anthem',
    name: 'Sun City Anthem',
    tagline: 'Henderson\'s landmark 55+ resort community',
    priceRange: '$400K – $1.2M',
    description: `Sun City Anthem in Henderson is a sprawling 55+ community of 7,000+ homes built by Del Webb from 1998 to 2007. The centerpiece is the 38,000-square-foot Anthem Center and the nearby Meridian clubhouse, together offering indoor pools, fitness facilities, art studios, a theater, and a full activity schedule. The community is adjacent to Sloan Canyon National Conservation Area, offering some of the best desert hiking in Nevada. Homes range from attached villas to custom single-story estates.`,
    amenities: ['Anthem Center (38,000 sq ft)', 'Meridian clubhouse', 'Indoor & outdoor pools', 'Art studio & theater', 'Sloan Canyon hiking access', 'Golf courses nearby'],
    ageRequirement: 'One resident must be 55+',
    hoa: '~$200–$275/month',
    location: 'South Henderson near Sloan Canyon',
    zip: '89052',
  },
  {
    slug: 'siena',
    name: 'Siena',
    tagline: 'Italian-inspired 55+ living in Summerlin',
    priceRange: '$400K – $800K',
    description: `Siena is a gated 55+ community in the Summerlin area with an Italian village design aesthetic. Built in the early 2000s, it features a clubhouse, fitness center, pools, tennis courts, and a variety of social clubs. The community has a strong social culture with regular events and a welcoming atmosphere. Its location near Summerlin Pkwy gives easy access to Red Rock Casino, Downtown Summerlin, and medical facilities.`,
    amenities: ['Gated community', 'Clubhouse & fitness center', 'Pools & tennis courts', 'Active social calendar', 'Close to Red Rock Casino', 'Near top medical centers'],
    ageRequirement: 'One resident must be 55+',
    hoa: '~$175–$225/month',
    location: 'West Las Vegas / Summerlin area',
    zip: '89135',
  },
  {
    slug: 'trilogy-sunstone',
    name: 'Trilogy Sunstone',
    tagline: "North Las Vegas' newest 55+ community",
    priceRange: '$350K – $600K',
    description: `Trilogy Sunstone by Shea Homes is the newest 55+ community in the Las Vegas Valley, located in North Las Vegas adjacent to the Sunstone master plan. The community features a modern clubhouse, resort pools, pickleball, and a lifestyle program designed around active living. As a newer community, buyers can still purchase from the builder with customization options, and resale prices remain highly competitive for buyers seeking newer construction at value-oriented price points.`,
    amenities: ['Modern resort clubhouse', 'Resort-style pools', 'Pickleball complex', 'Fitness & wellness center', 'New construction available', 'Competitive HOA'],
    ageRequirement: 'One resident must be 55+',
    hoa: '~$220–$260/month',
    location: 'North Las Vegas / Sunstone area',
    zip: '89084',
  },
]

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug)
}
