import { useEffect, useId, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/specials', label: 'Specials' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
] as const

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" className="origin-center" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  )
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-slate-100 text-shop-ink'
      : 'text-shop-muted hover:bg-slate-50 hover:text-shop-ink',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
    isActive
      ? 'bg-orange-50 text-shop-accent'
      : 'text-shop-ink hover:bg-slate-50',
  ].join(' ')

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-shop-ink"
            onClick={() => setMenuOpen(false)}
          >
            AS Auto Shop
          </NavLink>

          <span className="flex-1" aria-hidden />

          <nav
            className="hidden flex-wrap items-center justify-end gap-0.5 md:flex lg:gap-1"
            aria-label="Main"
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={(p) =>
                  [navLinkClass(p), 'text-xs lg:text-sm'].join(' ')
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-shop-ink transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shop-accent md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile drawer: slides in from the right */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-900 transition-opacity duration-300 ease-out ${
            menuOpen ? 'opacity-40' : 'opacity-0'
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id={menuId}
          className={`absolute top-0 right-0 flex h-full w-[min(20rem,88vw)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <span className="text-sm font-semibold text-shop-ink">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-shop-muted hover:bg-slate-100 hover:text-shop-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shop-accent"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={mobileNavLinkClass}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-shop-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-shop-ink">AS Auto Shop</p>
              <p className="mt-2 text-sm text-shop-muted">
                Full-service maintenance and repair for cars, SUVs, and light
                trucks.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-shop-muted">
                Visit
              </p>
              <p className="mt-2 text-sm text-shop-muted">
                123 Motor Ave
                <br />
                Your City, ST 00000
              </p>
              <a
                href="https://maps.google.com/?q=123+Motor+Ave"
                className="mt-2 inline-block text-sm font-medium text-shop-accent hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-shop-muted">
                Hours
              </p>
              <p className="mt-2 text-sm text-shop-muted">
                Mon–Fri 7:30–6
                <br />
                Sat 8–2 · Sun closed
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-shop-muted">
                Call
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="tel:+15555550100"
                  className="font-medium text-shop-accent hover:underline"
                >
                  (555) 555-0100
                </a>
              </p>
              <p className="mt-1 text-xs text-shop-muted">
                Towing:{' '}
                <a href="tel:+15555550101" className="text-shop-ink hover:underline">
                  (555) 555-0101
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-slate-200/80 pt-8 text-xs text-shop-muted">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="hover:text-shop-ink"
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-shop-muted">
            © {new Date().getFullYear()} AS Auto Shop. ASE-certified technicians.
            Warranty on qualifying repairs—ask for details.
          </p>
        </div>
      </footer>
    </div>
  )
}
