import { ContentImage } from '../components/ContentImage'
import { serviceCategories } from '../data/serviceCatalog'
import { siteImages } from '../data/siteImages'

export function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="page-section relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBay}
            alt=""
            className="size-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shop-ink/95 via-shop-ink/85 to-shop-ink/40" />
        </div>
        <div className="page-section-content relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-orange-300">
            Full-service auto repair
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Services for nearly every make & model
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            From oil changes to diagnostics and transmission work—clear estimates,
            quality parts, and technicians who explain what your car needs and
            why.
          </p>
        </div>
      </section>

      <nav
        aria-label="Service categories"
        className="sticky top-[3.25rem] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm md:top-[3.5rem]"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-shop-muted">
            Jump to
          </p>
          <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {serviceCategories.map((c) => (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-shop-ink transition-colors hover:border-shop-accent hover:bg-orange-50 hover:text-shop-accent sm:text-sm"
                >
                  {c.title.split('&')[0].trim()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-shop-ink sm:text-3xl">
            What we work on
          </h2>
          <p className="mt-3 text-shop-muted">
            Domestic, Asian, and European vehicles welcome. If you do not see
            something listed, call us—we may still be able to help or refer you
            to a trusted partner.
          </p>
        </div>

        <ul className="mt-14 space-y-20">
          {serviceCategories.map((cat, i) => (
            <li
              key={cat.id}
              id={cat.id}
              className="scroll-mt-36 border-b border-slate-100 py-10 last:border-0 sm:py-14 min-h-[calc(100dvh-5.5rem)] flex items-center"
            >
              <div
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
                  <ContentImage
                    src={cat.image}
                    alt={cat.imageAlt}
                    aspect="video"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-shop-ink sm:text-2xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-shop-muted">{cat.summary}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex gap-2 text-sm text-shop-ink"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-shop-accent"
                          aria-hidden
                        />
                        <span>
                          <span className="font-medium">{item.name}</span>
                          {item.detail ? (
                            <span className="text-shop-muted">
                              {' '}
                              — {item.detail}
                            </span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
