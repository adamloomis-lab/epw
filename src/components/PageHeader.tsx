// Compact hero band for inner pages. Navy background with an optional faint
// field photo, an eyebrow, title, and intro line.
export default function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  readonly eyebrow: string
  readonly title: string
  readonly intro?: string
  readonly image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] text-white">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          loading="eager"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(8,42,68,0.82) 0%, rgba(4,32,47,0.95) 100%)' }}
        aria-hidden="true"
      />
      <div className="container-x relative py-16 md:py-20">
        <span className="eyebrow eyebrow-lime">{eyebrow}</span>
        <h1 className="font-display mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/85">{intro}</p>}
      </div>
    </section>
  )
}
