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
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
          About AS Auto Shop
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-shop-muted">
          Locally owned and operated, we have built our reputation the old-
          fashioned way—honest recommendations, skilled repairs, and customers
          who come back for years.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
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
              Like leading shops such as{' '}
              <a
                href="https://essentialautocare.com/"
                className="font-medium text-shop-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Essential Auto Care
              </a>{' '}
              and full-service centers such as{' '}
              <a
                href="https://www.hollisleemyles.com/"
                className="font-medium text-shop-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Lee Myles Hollis
              </a>
              , we combine neighborhood service with professional standards—
              inspections, warranties, and a wide menu of repairs under one roof.
            </p>
          </div>
        </div>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-shop-surface p-8 sm:p-10">
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

        <section className="mt-16">
          <h2 className="text-xl font-bold text-shop-ink sm:text-2xl">
            What we stand for
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <li key={v.title}>
                <h3 className="font-semibold text-shop-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shop-muted">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-shop-ink px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
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
