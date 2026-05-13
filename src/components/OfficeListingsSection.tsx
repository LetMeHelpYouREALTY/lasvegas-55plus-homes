import { REALSCOUT_OFFICE_LISTINGS_HTML } from '@/lib/realscout-widget'

type OfficeListingsSectionProps = {
  /** Optional extra classes on the outer `<section>`. */
  className?: string
}

/**
 * Office listings feed (embedded web component). Script is loaded once in the root layout.
 * Place immediately below each page hero per site UX requirements.
 */
export function OfficeListingsSection({ className = '' }: OfficeListingsSectionProps) {
  return (
    <section
      className={`border-t border-green-200 bg-gray-50 py-12 md:py-16 px-4 ${className}`.trim()}
      aria-labelledby="featured-office-listings-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="featured-office-listings-heading"
          className="text-2xl font-bold text-green-950 mb-2 text-center md:text-left"
        >
          Featured office listings
        </h2>
        <p className="text-gray-600 text-sm mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Las Vegas single-family homes for sale ($600k–$900k), newest first — updated as new listings hit the
          market.
        </p>
        <div
          className="office-listings-widget-host w-full min-h-[280px]"
          // Custom element upgrades this node after the shared module script loads.
          dangerouslySetInnerHTML={{ __html: REALSCOUT_OFFICE_LISTINGS_HTML }}
        />
      </div>
    </section>
  )
}
