import Link from 'next/link'
import { OfficeListingsSection } from '@/components/OfficeListingsSection'

export default function NotFound() {
  return (
    <main>
      <section className="bg-green-950 text-white py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-green-200 mb-6">That URL doesn&apos;t exist on this site.</p>
        <Link href="/" className="text-yellow-400 font-semibold underline hover:text-yellow-300">
          Back to home
        </Link>
      </section>
      <OfficeListingsSection />
    </main>
  )
}
