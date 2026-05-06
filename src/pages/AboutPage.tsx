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

const pagePad =
  'w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20'

export function AboutPage() {
  return (
    <div className="w-full bg-white">
      <section
        className={`${pagePad} flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-10 sm:py-12 lg:py-16`}
      >
        <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl lg:text-5xl">
          About AS Auto Shop
        </h1>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-shop-muted sm:text-xl">
          Locally owned and operated, we have built our reputation the old-
          fashioned way—honest recommendations, skilled repairs, and customers
          who come back for years.
        </p>

        <div className="mt-10 grid w-full items-stretch gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-h-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80 lg:min-h-[min(58vh,36rem)]">
            <ContentImage
              src={siteImages.reception}
              alt="Clean customer waiting area and service desk"
              aspect="auto"
              className="!rounded-none h-full min-h-[16rem] w-full object-cover lg:min-h-full"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center space-y-6 text-base leading-relaxed text-shop-muted sm:text-lg">
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
      </section>

      <section className={`${pagePad} pb-14 pt-4 sm:pb-16 lg:pb-20`}>
        <div className="w-full rounded-2xl border border-slate-200 bg-shop-surface p-8 sm:p-10 lg:p-12">
          <h2 className="text-xl font-bold text-shop-ink sm:text-2xl">
            Certifications &amp; assurance
          </h2>
          <ul className="mt-6 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 lg:p-5">
              <h3 className="font-semibold text-shop-ink">ASE-certified techs</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Ongoing training across engine, brakes, electrical, and more.
              </p>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 lg:p-5">
              <h3 className="font-semibold text-shop-ink">Warranty coverage</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Limited warranty on qualifying repairs—ask your advisor for
                details.
              </p>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 lg:p-5">
              <h3 className="font-semibold text-shop-ink">Digital inspections</h3>
              <p className="mt-2 text-sm text-shop-muted">
                Photos and notes so you can see what we see, even if you are not
                in the bay.
              </p>
            </li>
          </ul>
        </div>

        <section className="mt-14 w-full sm:mt-16 lg:mt-20">
          <h2 className="text-xl font-bold text-shop-ink sm:text-2xl">
            What we stand for
          </h2>
          <ul className="mt-8 grid w-full gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-12">
            {values.map((v) => (
              <li key={v.title}>
                <h3 className="font-semibold text-shop-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shop-muted sm:text-base">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex w-full flex-col items-start gap-4 rounded-2xl bg-shop-ink px-6 py-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12 lg:py-10">
          <p className="max-w-3xl text-slate-200">
            Ready to experience the difference? Book an appointment or stop by—
            we would love to meet you.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 rounded-xl bg-shop-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-shop-accent-hover"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}
