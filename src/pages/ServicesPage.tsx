import { serviceCategories } from '../data/serviceCatalog'
import { ServiceCard } from '../components/ServiceCard'

export function ServicesPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 bg-gradient-to-b from-shop-surface to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="max-w-2xl border-l-4 border-shop-accent pl-5 sm:pl-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-shop-accent">
              Service menu
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
              Services
            </h1>
            <p className="mt-3 text-base leading-relaxed text-shop-muted sm:text-lg">
              Maintenance, diagnostics, and repairs for most makes and models—
              with clear estimates and technicians who walk you through what your
              vehicle needs.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-shop-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-center text-sm text-shop-muted">
            Domestic, Asian, and European vehicles welcome. Don&apos;t see what you
            need?{' '}
            <a
              href="tel:+15555550100"
              className="font-medium text-shop-accent hover:underline"
            >
              Call us
            </a>
            —we may still help or refer you to a partner we trust.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
