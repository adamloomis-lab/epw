import { Link } from 'wouter'
import { ArrowLeft, ArrowRight, Quote, HandHeart, BookOpen, Calendar } from 'lucide-react'
import { getDevotion, formatDevotionDate } from '../data/devotions'
import NotFound from './NotFound'

export default function DevotionPost({ params }: { readonly params?: { slug?: string } }) {
  const devotion = params?.slug ? getDevotion(params.slug) : undefined
  if (!devotion) return <NotFound />

  const d = devotion

  return (
    <article>
      {/* Featured image */}
      <figure className="relative">
        <img
          src={d.featuredImage}
          alt={d.featuredImageCaption}
          className="h-[42vh] min-h-[280px] w-full object-cover md:h-[52vh]"
          loading="eager"
        />
        <figcaption className="container-x py-3 text-sm text-muted">{d.featuredImageCaption}</figcaption>
      </figure>

      <div className="container-x mx-auto max-w-3xl pb-16 md:pb-24">
        {/* Back link + meta */}
        <Link
          href="/devotions"
          className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-teal hover:gap-2.5"
        >
          <ArrowLeft size={16} /> All devotions
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wide text-pine-bright">
            <BookOpen size={15} /> {d.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={15} /> {formatDevotionDate(d.date)}
          </span>
          <span>By {d.author}</span>
        </div>

        <h1 className="h-section mt-4">{d.title}</h1>

        {/* Scripture callout */}
        <blockquote className="mt-8 rounded-2xl border-l-4 border-lime bg-cream p-6">
          <Quote size={22} className="text-pine" />
          <p className="font-display mt-2 text-xl font-semibold leading-snug text-pine">
            “{d.scriptureText}”
          </p>
          <cite className="mt-3 block text-sm font-semibold not-italic text-teal">
            {d.scriptureReference}
          </cite>
        </blockquote>

        {/* Body */}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {d.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Prayer */}
        <section className="mt-10 rounded-2xl border border-line bg-surface p-7 shadow-[var(--shadow-card)]">
          <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-pine">
            <HandHeart size={22} className="text-pine-bright" /> Prayer
          </h2>
          <p className="mt-4 text-[17px] italic leading-relaxed text-ink-soft">{d.prayer}</p>
        </section>

        {/* Take Action */}
        <section className="relative mt-8 overflow-hidden rounded-2xl bg-[var(--color-navy)] p-7 text-white md:p-9">
          <h2 className="font-display text-2xl font-bold">Take Action</h2>
          <p className="mt-3 leading-relaxed text-white/85">{d.takeAction}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/give" className="btn btn-lime">
              Partner with EPW <ArrowRight size={18} />
            </Link>
            <Link href="/devotions" className="btn btn-ghost-light">
              More devotions
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
