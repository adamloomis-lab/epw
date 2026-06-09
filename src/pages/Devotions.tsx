import { Link } from 'wouter'
import { ArrowRight, BookOpen } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { devotions, formatDevotionDate } from '../data/devotions'
import { photos } from '../data/site'

export default function Devotions() {
  return (
    <>
      <PageHeader
        eyebrow="Devotions"
        title="From the Word, for the Church."
        intro="Short devotionals from the field — stories and Scripture from the frontlines where EPW trains pastors to preach God’s Word faithfully."
        image={photos.congregation}
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal-group grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {devotions.map((d, i) => (
              <article
                key={d.slug}
                className="card lift flex flex-col overflow-hidden"
                style={{ '--i': i } as React.CSSProperties}
              >
                <Link href={`/devotions/${d.slug}`} className="block overflow-hidden">
                  <img
                    src={d.featuredImage}
                    alt={d.featuredImageCaption}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-pine-bright">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={14} /> {d.category}
                    </span>
                    <span className="text-muted">{formatDevotionDate(d.date)}</span>
                  </div>
                  <h2 className="font-display mt-3 text-2xl font-bold text-pine">
                    <Link href={`/devotions/${d.slug}`} className="hover:underline">
                      {d.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm font-medium italic text-teal">{d.scriptureReference}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{d.excerpt}</p>
                  <Link
                    href={`/devotions/${d.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 font-display font-semibold text-teal hover:gap-2.5"
                  >
                    Read devotion <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] text-white">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Equip pastors to preach the Word faithfully.
            </h2>
            <p className="mt-2 text-white/80">Your partnership reaches the frontlines where truth costs the most.</p>
          </div>
          <Link href="/give" className="btn btn-lime shrink-0">
            Join the Mission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
