import type { ChangeEvent } from 'react'

// Shared "fluid" form controls for EPW, tuned for the light card surface:
// floating-label fields (pine underline that draws center-out + focus glow) and
// the animated drawn-checkmark used by the personalized thank-you state.
// Brand: lime #8cbf2e, teal #005b52, pine #1d5c43, navy #082a44, ink #11261d.

interface FloatFieldProps {
  readonly name: string
  readonly label: string
  readonly type?: string
  readonly required?: boolean
  readonly textarea?: boolean
  readonly rows?: number
  readonly autoComplete?: string
  readonly idPrefix?: string
  readonly onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function FloatField({
  name,
  label,
  type = 'text',
  required,
  textarea,
  rows = 5,
  autoComplete,
  idPrefix = 'f',
  onChange,
}: FloatFieldProps) {
  const id = `${idPrefix}-${name}`
  const input =
    'peer w-full bg-transparent px-4 pt-6 pb-2 font-body text-base text-ink placeholder-transparent outline-none'
  const labelCls =
    'pointer-events-none absolute left-4 top-4 origin-left font-body text-base text-muted transition-all duration-200 ' +
    'peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-pine ' +
    'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em] peer-[:not(:placeholder-shown)]:text-muted'
  return (
    <div className="group relative rounded-xl border border-line bg-cream transition-all duration-300 focus-within:border-pine/60 focus-within:bg-white focus-within:shadow-[0_12px_32px_-16px_rgba(29,92,67,0.55)]">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder=" "
          onChange={onChange}
          className={`${input} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          onChange={onChange}
          className={input}
        />
      )}
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-teal">*</span>}
      </label>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-[calc(100%-2rem)] -translate-x-1/2 scale-x-0 bg-pine transition-transform duration-300 peer-focus:scale-x-100"
      />
    </div>
  )
}

// Animated drawn checkmark for the personalized thank-you state.
export function SuccessCheck() {
  return (
    <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden="true">
      <circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke="var(--color-pine)"
        strokeWidth="3"
        strokeDasharray="151"
        strokeDashoffset="151"
        style={{ animation: 'draw-check 0.6s ease forwards' }}
      />
      <path
        d="M15 27 l7 7 l15 -16"
        fill="none"
        stroke="var(--color-pine)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
        style={{ animation: 'draw-check 0.4s 0.5s ease forwards' }}
      />
    </svg>
  )
}
