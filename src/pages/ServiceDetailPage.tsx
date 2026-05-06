import { Link, Navigate, useParams } from 'react-router-dom'
import { ContentImage } from '../components/ContentImage'
import { getServiceById } from '../data/serviceCatalog'

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = serviceId ? getServiceById(serviceId) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-shop-surface">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-shop-muted">
              <li>
                <Link
                  to="/services"
                  className="font-medium text-shop-accent hover:underline"
                >
                  All services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-shop-ink">{service.title}</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-shop-muted">{service.summary}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80 lg:sticky lg:top-24">
            <ContentImage
              src={service.image}
              alt={service.imageAlt}
              aspect="video"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-shop-ink">
              What we can help with
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
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
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+15555550100"
                className="inline-flex items-center justify-center rounded-xl bg-shop-accent px-5 py-3 text-sm font-semibold text-white hover:bg-shop-accent-hover"
              >
                Call (555) 555-0100
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-shop-ink hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
