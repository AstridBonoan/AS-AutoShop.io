import { Link } from 'react-router-dom'
import { ContentImage } from '../components/ContentImage'
import { siteImages } from '../data/siteImages'

const specials = [
  {
    title: 'Oil change & filter package',
    price: '$39.99',
    detail:
      'Conventional oil change with filter, lube, and complimentary multi-point inspection. Synthetic and diesel priced separately.',
    code: 'OIL39',
  },
  {
    title: 'Brake service credit',
    price: '$25 off',
    detail:
      'Take $25 off brake pad and rotor replacement when both axles are serviced together. Present coupon at drop-off.',
    code: 'BRAKE25',
  },
  {
    title: 'Cooling system wellness',
    price: '$89.99',
    detail:
      'Pressure test, coolant strength check, and up to 2 gallons of coolant. Specialty coolants extra.',
    code: 'COOL89',
  },
  {
    title: 'Four tires + alignment',
    price: 'Free alignment',
    detail:
      'Purchase and install four qualifying tires and receive a complimentary four-wheel alignment.',
    code: 'TIRE4',
  },
  {
    title: 'Transmission fluid service',
    price: '$30 off',
    detail:
      'Discount on approved transmission fluid exchange or pan service. Not valid with other offers.',
    code: 'TRANS30',
  },
  {
    title: 'Peace-of-mind inspection',
    price: '$95',
    detail:
      'Road test with you (when possible), fluid & leak check, and initial computer scan. Great for used-car buyers too.',
    code: 'INSPECT95',
  },
]

export function SpecialsPage() {
  return (
    <div className="bg-shop-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.oilChange}
              alt="Oil change service in progress"
              aspect="video"
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.brakes}
              alt="Brake service closeup"
              aspect="video"
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.tires}
              alt="Tire and wheel service"
              aspect="video"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
          Specials &amp; coupons
        </h1>
        <p className="mt-3 max-w-3xl text-shop-muted">
          Offers change seasonally—mention the coupon code when you book or at
          vehicle drop-off. One coupon per visit unless noted. Cannot combine
          with other discounts unless we say so.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {specials.map((s) => (
            <li
              key={s.code}
              className="flex flex-col rounded-2xl border-2 border-dashed border-shop-accent/40 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-bold text-shop-ink">{s.title}</h2>
                <span className="text-xl font-bold text-shop-accent">
                  {s.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-shop-muted">
                {s.detail}
              </p>
              <p className="mt-4 font-mono text-sm font-semibold text-shop-ink">
                Code: <span className="text-shop-accent">{s.code}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-shop-ink px-6 py-8 text-center sm:px-10">
          <p className="text-slate-200">
            Questions about eligibility?{' '}
            <a
              href="tel:+15555550100"
              className="font-semibold text-orange-300 hover:underline"
            >
              Call (555) 555-0100
            </a>
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Get directions &amp; hours
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.toolWall}
              alt="Tool wall inside the mechanic shop"
              aspect="video"
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <ContentImage
              src={siteImages.waitingRoom}
              alt="Customer waiting room"
              aspect="video"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
