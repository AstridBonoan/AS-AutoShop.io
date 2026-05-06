import { ContentImage } from '../components/ContentImage'
import { siteImages } from '../data/siteImages'

const reviews = [
  {
    name: 'Melanie R.',
    quote:
      'I have been coming here for years. They stand behind the work and treat you like family—not something you find everywhere.',
    vehicle: 'SUV',
  },
  {
    name: 'Katrina B.',
    quote:
      'Professional, friendly, and they only recommended what was actually needed. I will be back for maintenance.',
    vehicle: 'Sedan',
  },
  {
    name: 'Christian E.',
    quote:
      'They diagnosed a tricky electrical issue quickly and even handled a small fix at no charge. Highly recommend.',
    vehicle: 'Crossover',
  },
  {
    name: 'Steven B.',
    quote:
      'Knowledgeable staff, clean shop, plenty of parking. They laid out options clearly and the price was fair.',
    vehicle: 'Truck',
  },
  {
    name: 'Ahmed M.',
    quote:
      'Great communication and warranty on the repair. Peace of mind is worth a lot—this shop delivers.',
    vehicle: 'Hybrid',
  },
  {
    name: 'Jean O.',
    quote:
      'They brought an older car back to life with patience and skill. I trust them with anything mechanical.',
    vehicle: 'Coupe',
  },
]

export function ReviewsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.layoutReviewsLift}
              alt="Mechanic working in the service bay"
              aspect="video"
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.layoutReviewsDiagnostics}
              alt="Close-up of a car engine compartment"
              aspect="video"
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.layoutReviewsEngineRoom}
              alt="Classic performance cars — automotive exterior view"
              aspect="video"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
          Reviews
        </h1>
        <p className="mt-3 max-w-3xl text-shop-muted">
          We are proud of the relationships we build. Here is what customers say
          about their experience working with our team.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-shop-surface/50 p-6"
            >
              <p className="text-amber-500" aria-hidden>
                ★★★★★
              </p>
              <blockquote className="mt-3 text-shop-ink">
                “{r.quote}”
              </blockquote>
              <footer className="mt-4 text-sm">
                <p className="font-semibold text-shop-ink">{r.name}</p>
                <p className="text-shop-muted">{r.vehicle} owner</p>
              </footer>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-shop-muted">
          Prefer to leave feedback? Mention your service advisor or ask for a
          survey link after your visit.
        </p>
      </div>
    </div>
  )
}
