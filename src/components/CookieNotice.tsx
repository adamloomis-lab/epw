import { useEffect, useState } from 'react'
import { Link } from 'wouter'

// Dismissible cookie-consent banner (agency standard). Purely informational —
// the site sets no tracking cookies beyond what's essential — and remembers the
// dismissal in localStorage so it shows once.
const KEY = 'epw-cookie-consent'

export default function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true)
    } catch {
      /* storage blocked — don't nag */
    }
  }, [])

  if (!show) return null

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-surface/98 p-4 shadow-[var(--shadow-lift)] backdrop-blur md:bottom-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          We use essential cookies to make this site work and to understand how it’s used. See our{' '}
          <Link href="/privacy" className="font-medium text-teal underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="button" onClick={dismiss} className="btn btn-navy shrink-0 !px-5 !py-2.5 !text-sm">
          Got it
        </button>
      </div>
    </div>
  )
}
