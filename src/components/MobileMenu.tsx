import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import { X, ArrowRight, Heart, Mail, Globe } from 'lucide-react'
import Logo from './Logo'
import { org } from '../data/site'

export interface MobileMenuProps {
  readonly open: boolean
  readonly onClose: () => void
  readonly links: ReadonlyArray<{ readonly href: string; readonly label: string }>
}

// Full-screen, high-trust mobile navigation: a backdrop-blurred panel that
// slides in from the right with a lime glow, a pulsing mission trust line,
// staggered uppercase links with an arrow nudge, and a prominent Give CTA.
export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const [shown, setShown] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const id = requestAnimationFrame(() => setShown(true))
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        cancelAnimationFrame(id)
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    }
    setShown(false)
    document.body.style.overflow = ''
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="lg:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-navy-deep/55 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`depth-navy relative ml-auto h-full w-full max-w-sm overflow-y-auto text-white shadow-[0_0_60px_rgba(140,191,46,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative flex min-h-full flex-col px-7 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} aria-label={`${org.name} home`}>
              <Logo className="h-10" onDark showWordmark={false} />
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-lime-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-ink animate-pulse-soft" /> Equipping the Global South
          </span>

          <nav className="mt-6 flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className={`group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold uppercase tracking-tight text-white/90 transition-all duration-500 hover:text-lime-bright ${
                  shown ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                {l.label}
                <ArrowRight
                  size={20}
                  className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-lime-bright"
                />
              </Link>
            ))}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${120 + links.length * 70 + 60}ms` }}
          >
            <a
              href={org.give.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-lime px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-lime-ink shadow-[0_12px_28px_-12px_rgba(140,191,46,0.85)]"
            >
              <Heart size={18} /> Give to the Mission
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy"
            >
              Contact EPW
            </Link>
          </div>

          <div className="mt-auto space-y-3 pt-10 font-body text-sm text-white/70">
            <p className="flex items-center gap-3">
              <Globe size={18} className="shrink-0 text-lime-bright" /> Training pastors where truth costs the most.
            </p>
            <Link href="/contact" onClick={onClose} className="flex items-center gap-3 hover:text-white">
              <Mail size={18} className="shrink-0 text-lime-bright" /> Reach the EPW team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
