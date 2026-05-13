import { REALSCOUT_OFFICE_LISTINGS_HTML } from '@/lib/realscout-widget'

type RealScoutOfficeSectionProps = {
  /** Optional extra classes on the outer `<section>`. */
  className?: string
}

/**
 * Office listings widget (RealScout). Script is loaded once in the root layout.
 * Place immediately below each page hero per site UX requirements.
 */
export function RealScoutOfficeSection({ className = '' }: RealScoutOfficeSectionProps) {
  return (
    <section
      className={`border-t border-green-200 bg-gray-50 py-12 md:py-16 px-4 ${className}`.trim()}
      aria-labelledby="realscout-office-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="realscout-office-heading"
          className="text-2xl font-bold text-green-950 mb-2 text-center md:text-left"
        >
          Featured office listings
        </h2>
        <p className="text-gray-600 text-sm mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Las Vegas single-family homes for sale ($600k–$900k), newest first — powered by RealScout.
        </p>
        <div
          className="realscout-widget-host w-full min-h-[280px]"
          // Web component upgrades this node after the shared module script loads.
          dangerouslySetInnerHTML={{ __html: REALSCOUT_OFFICE_LISTINGS_HTML }}
        />
      </div>
    </section>
  )
}
