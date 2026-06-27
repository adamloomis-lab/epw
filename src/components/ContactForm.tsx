import { useState } from 'react'
import { Send, HandHelping, Heart, Mail, Users, MessageCircle, Phone } from 'lucide-react'
import { FloatField, SuccessCheck } from './FluidField'

// Netlify Forms. The prerendered (SSG) HTML ships this exact static
// <form name="contact" data-netlify="true" netlify-honeypot="bot-field"> so
// Netlify's build-time bot detects it; this live form submits the same fields
// via an AJAX POST so we can show an inline, personalized success state without
// a full-page redirect.
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

// Single-select reason cards. value strings are preserved exactly from the
// original <select> so the Netlify "role" field receives identical data.
const reasons = [
  { value: 'Donor / partner', label: 'Partner / Give', Icon: HandHelping },
  { value: 'General question', label: 'General question', Icon: Mail },
  { value: 'Prayer', label: 'Prayer', Icon: Heart },
  { value: 'Volunteer', label: 'Volunteer', Icon: Users },
  { value: 'Other', label: 'Something else', Icon: MessageCircle },
] as const

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [firstName, setFirstName] = useState('')
  const [reason, setReason] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as unknown as Iterable<[string, string]>)
    if (data['bot-field']) return // honeypot tripped
    // Capture first name before the form resets, for the personalized thank-you.
    const captured = String(data.name || '').trim().split(/\s+/)[0]
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      setFirstName(captured)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center sm:p-10">
        <div className="mx-auto flex justify-center">
          <SuccessCheck />
        </div>
        <h3 className="font-display mt-4 text-2xl font-bold text-pine">
          {firstName ? `Thank You, ${firstName}!` : 'Thank You!'}
        </h3>
        <p className="mt-2 text-ink-soft">
          Your message reached us. Someone from EPW will be in touch soon. Thank you for standing
          with pastors on the frontlines.
        </p>
        <a
          href="https://epworldwide.org/support/donate-funds/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lime mt-6 inline-flex"
        >
          <Heart size={17} /> Give to the Mission
        </a>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Carries the selected reason card into the Netlify submission. */}
      <input type="hidden" name="role" value={reason} />
      <p hidden>
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <FloatField name="name" label="Your name" required autoComplete="name" />
        <FloatField name="email" label="Email" type="email" required autoComplete="email" />
      </div>

      <div className="mt-4">
        <FloatField name="phone" label="Phone (optional)" type="tel" autoComplete="tel" />
      </div>

      <fieldset className="mt-6">
        <legend className="font-display text-sm font-semibold text-ink">
          What brings you here? <span className="text-muted">(optional)</span>
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
          {reasons.map(({ value, label, Icon }) => {
            const active = reason === value
            return (
              <button
                type="button"
                key={value}
                onClick={() => setReason(active ? '' : value)}
                aria-pressed={active}
                className={`group flex flex-col items-center gap-2 rounded-xl border px-2 py-3.5 text-center transition-all duration-200 active:scale-95 ${
                  active
                    ? 'border-lime bg-lime text-lime-ink shadow-[0_12px_28px_-14px_rgba(140,191,46,0.9)]'
                    : 'border-line bg-cream text-ink-soft hover:border-pine/50 hover:bg-white'
                }`}
              >
                <Icon size={20} className={active ? 'text-lime-ink' : 'text-pine'} />
                <span className="font-display text-[12px] font-semibold leading-tight">{label}</span>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <FloatField name="message" label="Your message" required textarea rows={5} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-navy px-6 py-4 font-display text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(8,42,68,0.65)] transition-all active:scale-[0.99] disabled:opacity-70"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[420%]"
        />
        <Send size={17} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <Phone size={13} className="text-pine" /> We read every message and reply personally.
      </p>

      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-teal">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  )
}
