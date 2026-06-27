import { Link } from 'wouter'
import { Mail, Heart } from 'lucide-react'
import { org } from '../data/site'

// Elevated floating action bar for mobile: a blurred navy capsule that stands
// off the edge with a big soft shadow. A glassy "Contact" link and a glowing
// brand-lime "Give" primary (the real EPW donation page).
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-navy/85 p-2 shadow-[0_16px_44px_rgba(8,42,68,0.5)] backdrop-blur-xl">
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all active:scale-95"
        >
          <Mail size={18} className="text-lime-bright" /> Contact
        </Link>
        <a
          href={org.give.donate}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-lime py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-ink animate-glow-pulse transition-all active:scale-95"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 blur-md group-hover:[animation:sheen_0.9s_ease]"
          />
          <Heart size={18} /> Give
        </a>
      </div>
    </nav>
  )
}
