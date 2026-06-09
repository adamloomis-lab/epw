import { org } from '../data/site'

// The EPW mark (stacked lime/teal/navy layers) plus a two-line wordmark. On dark
// surfaces the navy bottom layer of the mark recedes, so `onDark` sits the mark
// on a soft light chip and switches the wordmark to white.
export default function Logo({
  className = 'h-12',
  onDark = false,
  showWordmark = true,
}: {
  readonly className?: string
  readonly onDark?: boolean
  readonly showWordmark?: boolean
}) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={
          onDark
            ? 'inline-flex items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-sm'
            : 'inline-flex'
        }
      >
        <img
          src="/images/logo.png"
          alt={`${org.name} logo`}
          className={`${className} w-auto`}
          width={480}
          height={434}
        />
      </span>
      {showWordmark && (
        <span className="hidden leading-tight sm:block">
          <span
            className={`font-display block text-[1.05rem] font-extrabold tracking-tight ${
              onDark ? 'text-white' : 'text-pine'
            }`}
          >
            Equipping Pastors
          </span>
          <span
            className={`font-display block text-[0.78rem] font-semibold uppercase tracking-[0.2em] ${
              onDark ? 'text-lime' : 'text-pine-bright'
            }`}
          >
            Worldwide
          </span>
        </span>
      )}
    </span>
  )
}
