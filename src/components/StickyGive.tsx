import { ArrowRight, Heart } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { org } from '../data/site'

// Desktop-only floating "Give" pill, revealed once the visitor scrolls past the
// hero. A glowing, sheened brand-lime capsule linking to EPW's real donation
// page so a giving CTA is always within reach.
export default function StickyGive() {
  const show = useScrolled(560)

  return (
    <a
      href={org.give.donate}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Give to Equipping Pastors Worldwide"
      className={`group fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-lime px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-lime-ink ring-1 ring-white/30 animate-glow-pulse transition-all duration-300 hover:scale-[1.04] lg:flex ${
        show
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 blur-md group-hover:[animation:sheen_1s_ease]"
      />
      <Heart size={18} /> Give
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
