import { Link } from 'react-router-dom'
import type { ServiceCategory } from '../data/serviceCatalog'
import { ContentImage } from './ContentImage'

type ServiceCardProps = {
  service: ServiceCategory
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <li className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[4/3] overflow-hidden">
        <ContentImage
          src={service.image}
          alt={service.imageAlt}
          aspect="auto"
          className="!aspect-auto min-h-[11rem]"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-shop-ink">{service.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-shop-muted">
          {service.summary}
        </p>
        <Link
          to={`/services/${service.id}`}
          className="mt-3 inline-block text-sm font-medium text-shop-accent hover:underline"
        >
          Learn more
        </Link>
      </div>
    </li>
  )
}
