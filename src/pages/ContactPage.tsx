export function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-shop-ink sm:text-4xl">
          Contact &amp; hours
        </h1>
        <p className="mt-3 max-w-3xl text-shop-muted">
          Visit us for drop-off, pick up parts we ordered for you, or just to
          meet the team. Towing and after-hours options below.
        </p>

        <div className="mt-10">
          <dl className="grid gap-6 text-sm sm:grid-cols-2 sm:text-base">
            <div>
              <dt className="font-semibold text-shop-ink">Shop address</dt>
              <dd className="mt-1 text-shop-muted">
                123 Motor Ave, Your City, ST 00000
              </dd>
              <dd className="mt-2">
                <a
                  href="https://maps.google.com/?q=123+Motor+Ave"
                  className="text-sm font-medium text-shop-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">Service &amp; tires</dt>
              <dd className="mt-1">
                <a
                  href="tel:+15555550100"
                  className="text-shop-accent underline-offset-4 hover:underline"
                >
                  (555) 555-0100
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">Towing hotline</dt>
              <dd className="mt-1 text-shop-muted">
                Need a tow? Call our partner dispatch—mention AS Auto Shop for
                priority routing.
              </dd>
              <dd className="mt-1">
                <a
                  href="tel:+15555550101"
                  className="font-medium text-shop-accent underline-offset-4 hover:underline"
                >
                  (555) 555-0101
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">Hours</dt>
              <dd className="mt-1 text-shop-muted">Mon–Fri 7:30 AM – 6:00 PM</dd>
              <dd className="text-shop-muted">Sat 8:00 AM – 2:00 PM</dd>
              <dd className="text-shop-muted">Sun — Closed</dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">After-hours</dt>
              <dd className="mt-1 text-shop-muted">
                Secure key drop and labeled parking spots—ask your advisor for
                instructions.
              </dd>
            </div>
          </dl>
        </div>

        <section className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-bold text-shop-ink sm:text-2xl">
            Frequently asked questions
          </h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-shop-ink">
                What is the best way to schedule?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-shop-muted">
                Call our service advisors for the fastest booking, or stop by
                for same-week availability. Online scheduling can be added when
                you connect a provider.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">
                Do you offer a warranty?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-shop-muted">
                Yes—limited warranty on qualifying repairs. Your advisor will
                explain coverage and exclusions before we start work.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">
                How long do repairs take?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-shop-muted">
                It depends on the job and parts availability. We provide realistic
                time estimates and updates if anything changes.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-shop-ink">
                Is there a waiting area?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-shop-muted">
                Yes—Wi-Fi, charging, and refreshments. For longer jobs, ask about
                shuttle or ride coordination.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  )
}
