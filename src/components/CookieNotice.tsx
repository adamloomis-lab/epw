import { useEffect, useState } from 'react'
import { Link } from 'wouter'

// Dismissible cookie-consent banner (agency standard). Remembers accept/decline
// in localStorage so it shows once per visitor.
const KEY = 'cookie-consent'

export default function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setShow(true)
      } catch {
        /* storage blocked — don't nag */
      }
    }, 700)
    return () => clearTimeout(delay)
  }, [])

  if (!show) return null

  const respond = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-surface/98 p-4 shadow-[var(--shadow-lift)] backdrop-blur md:bottom-4"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          This site uses cookies to keep things running smoothly. We never sell your data.{' '}
          <Link href="/privacy" className="font-medium text-teal underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => respond('declined')}
            className="rounded-lg border border-line px-4 py-2 text-sm text-ink-soft transition-colors hover:border-navy hover:text-navy"
          >
            No Thanks
          </button>
          <button
            type="button"
            onClick={() => respond('accepted')}
            className="btn btn-navy !px-5 !py-2 !text-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  )
}
