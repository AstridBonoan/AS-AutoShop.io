import { Link } from 'react-router-dom'
import { ContentImage } from '../components/ContentImage'
import { serviceCategories } from '../data/serviceCatalog'
import { siteImages } from '../data/siteImages'

const highlights = [
  {
    title: 'ASE-certified technicians',
    body: 'Experienced techs who stay current with modern systems and tooling.',
  },
  {
    title: 'Nationwide warranty',
    body: 'Ask about our limited warranty on qualifying repairs—drive with confidence.',
  },
  {
    title: 'Transparent estimates',
    body: 'We explain findings, priorities, and options before the work begins.',
  },
  {
    title: 'Convenient extras',
    body: 'Shuttle / ride coordination, after-hours drop-off, and fleet programs.',
  },
]

const previewServices = serviceCategories.slice(0, 6)

const testimonials = [
  {
    quote:
      'They showed me photos of the worn parts and prioritized safety items first. No pressure—just honest advice.',
    name: 'Jordan M.',
    location: 'Local driver',
  },
  {
    quote:
      'Diagnostics were thorough and the car was ready when promised. This is our family shop now.',
    name: 'Priya S.',
    location: 'Minivan owner',
  },
  {
    quote:
      'Fair pricing and they stood behind the repair. Communication over text made scheduling easy.',
    name: 'Marcus T.',
    location: 'Fleet customer',
  },
]

const makes = [
  'Honda',
  'Toyota',
  'Ford',
  'Chevrolet',
  'Jeep',
  'Nissan',
  'Hyundai',
  'Subaru',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Audi',
]

export function HomePage() {
  return (
    <div>
      <section className="page-section relative overflow-hidden bg-shop-ink">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBay}
            alt=""
            className="size-full object-cover opacity-40"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-shop-ink/20 to-shop-ink" />
        </div>
        <div className="page-section-content relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wide text-orange-300">
              Your neighborhood full-service shop
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Auto repair & maintenance you can trust
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Brakes, tires, A/C, engine diagnostics, transmission service, state
              inspections, and more—served with clear communication and quality
              workmanship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+15555550100"
                className="inline-flex items-center justify-center rounded-xl bg-shop-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-shop-accent-hover"
              >
                Call (555) 555-0100
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Schedule / directions
              </Link>
              <Link
                to="/specials"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View specials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-b border-slate-200 bg-white">
        <div className="page-section-content mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-shop-ink sm:text-3xl">
              Why drivers choose AS Auto Shop
            </h2>
            <p className="mt-3 text-shop-muted">
              Like the best shops in our area, we combine technical skill with
              hospitality—so you always know what is going on with your vehicle.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h.title}>
                  <h3 className="font-semibold text-shop-ink">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-shop-muted">
                    {h.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80 lg:order-2">
            <ContentImage
              src={siteImages.technician}
              alt="Technician performing vehicle inspection"
              aspect="video"
            />
          </div>
        </div>
      </section>

      <section className="page-section bg-shop-surface">
        <div className="page-section-content mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-shop-ink sm:text-3xl">
                Popular services
              </h2>
              <p className="mt-2 max-w-2xl text-shop-muted">
                A snapshot of what we do every day—see the full list on our
                services page.
              </p>
            </div>
            <Link
              to="/services"
              className="shrink-0 text-sm font-semibold text-shop-accent hover:underline"
            >
              All services →
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((s) => (
              <li
                key={s.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ContentImage
                    src={s.image}
                    alt={s.imageAlt}
                    aspect="auto"
                    className="!aspect-auto min-h-[11rem]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-shop-ink">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-shop-muted">
                    {s.summary}
                  </p>
                  <Link
                    to={`/services#${s.id}`}
                    className="mt-3 inline-block text-sm font-medium text-shop-accent hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section border-y border-slate-200 bg-white">
        <div className="page-section-content mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-shop-ink sm:text-3xl">
            We service most makes & models
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-shop-muted">
            Asian, domestic, and European vehicles—cars, SUVs, and light trucks.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {makes.map((make) => (
              <li
                key={make}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-shop-ink sm:text-sm"
              >
                {make}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-shop-muted">
            Don’t see your brand?{' '}
            <a href="tel:+15555550100" className="font-medium text-shop-accent">
              Call us
            </a>{' '}
            — we likely still service it.
          </p>
        </div>
      </section>

      <section className="page-section bg-shop-surface">
        <div className="page-section-content mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-shop-ink sm:text-3xl">
                What our customers say
              </h2>
              <p className="mt-2 text-shop-muted">
                Real feedback from people who rely on us for daily transportation.
              </p>
            </div>
            <Link
              to="/reviews"
              className="shrink-0 text-sm font-semibold text-shop-accent hover:underline"
            >
              Read more reviews →
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-amber-500" aria-hidden>
                  ★★★★★
                </p>
                <p className="mt-3 text-sm leading-relaxed text-shop-ink">
                  “{t.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold text-shop-ink">
                  {t.name}
                </p>
                <p className="text-xs text-shop-muted">{t.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section bg-shop-ink">
        <div className="page-section-content mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Save on seasonal maintenance
              </h2>
              <p className="mt-3 text-slate-300">
                Oil change bundles, brake specials, alignment packages, and more—
                updated regularly.
              </p>
            </div>
            <Link
              to="/specials"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-shop-ink transition-colors hover:bg-slate-100"
            >
              View current specials
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
