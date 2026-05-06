import { Link } from 'react-router-dom'
import { ContentImage } from '../components/ContentImage'
import { siteImages } from '../data/siteImages'

const values = [
  {
    title: 'Transparency',
    body: 'Digital inspections, photos, and plain-language explanations so you can decide with confidence.',
  },
  {
    title: 'Quality parts',
    body: 'OEM or trusted aftermarket components matched to how you drive and what you want to spend.',
  },
  {
    title: 'Respect for your time',
    body: 'Accurate time estimates, proactive updates, and options when your schedule is tight.',
  },
]

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Fills viewport below sticky header so the next section stays off-screen until scroll */}
      <section className="flex min-h-[calc(100dvh-4rem)] w-full flex-col justify-start border-b border-slate-100 px-4 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
            About AS Auto Shop
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-shop-muted">
            Locally owned and operated, we have built our reputation the old-
            fashioned way—honest recommendations, skilled repairs, and customers
            who come back for years.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80">
              <ContentImage
                src={siteImages.reception}
                alt="Clean customer waiting area and service desk"
                aspect="video"
              />
            </div>
            <div className="space-y-6 text-shop-muted">
              <p>
                Our team believes an auto shop should feel approachable. Whether
                you are here for a quick oil change or a complex drivability
                concern, you will get the same careful diagnosis and upfront
                communication.
              </p>
              <p>
                We invest in modern diagnostic equipment and ongoing training—
                because vehicles today are more connected and more precise than
                ever. That is how we deliver repairs that last, not just quick
                patches.
              </p>
              <p>
                We combine neighborhood service with professional standards—digital
                inspections, warranty-backed repairs when applicable, and a full menu
                of maintenance and repair so you can handle most needs in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="rounded-2xl border border-slate-200 bg-shop-surface p-8 sm:p-10">
          <h2 className="text-xl font-bold text-shop-ink sm:text-2xl">
            Certifications &amp; assurance
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-semibold text-shop-ink">ASE-certified techs</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Ongoing training across engine, brakes, electrical, and more.
              </p>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-semibold text-shop-ink">Warranty coverage</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Limited warranty on qualifying repairs—ask your advisor for
                details.
              </p>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-semibold text-shop-ink">Digital inspections</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Photos and notes so you can see what we see, even if you are not
                in the bay.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section
        aria-labelledby="about-values-heading"
        className="scroll-mt-24 w-full border-y border-slate-200 bg-shop-surface py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="about-values-heading"
            className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl lg:text-5xl"
          >
            What we stand for
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-shop-muted sm:text-xl">
            The principles that guide how we treat every customer and every
            repair.
          </p>
          <ul className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-14">
            {values.map((v) => (
              <li key={v.title}>
                <h3 className="text-xl font-semibold text-shop-ink sm:text-2xl lg:text-3xl">
                  {v.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-shop-muted sm:text-lg lg:text-xl">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mt-2 flex flex-col items-start gap-4 rounded-2xl bg-shop-ink px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-slate-200">
            Ready to experience the difference? Book an appointment or stop by—
            we would love to meet you.
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-shop-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-shop-accent-hover"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
