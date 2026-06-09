import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { org } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Why EPW' },
  { href: '/give', label: 'Ways to Give' },
  { href: '/devotions', label: 'Devotions' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()
  const scrolled = useScrolled(20)

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_4px_22px_-14px_rgba(8,42,68,0.5)]' : ''
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center" aria-label={`${org.name} home`}>
          <Logo
            className={`transition-all duration-300 ease-out ${
              scrolled ? 'h-11 md:h-12' : 'h-12 md:h-14'
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = location === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-display rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    active ? 'text-pine' : 'text-ink-soft hover:text-pine'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/give" className="btn btn-navy !px-5 !py-3 !text-sm">
            Join the Mission <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-1">
              <Link href="/give" onClick={() => setOpen(false)} className="btn btn-lime w-full">
                Join the Mission <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
