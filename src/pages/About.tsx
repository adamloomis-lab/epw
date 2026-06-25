import { Link } from 'wouter'
import { ArrowRight, Globe2, Languages, Sparkles, BookOpen, Cross } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { need, whyEpw, photos } from '../data/site'

const whyIcons = [Globe2, Languages, Sparkles]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Why EPW"
        title="We go where others can’t."
        intro="Equipping Pastors Worldwide meets pastors on the frontlines of the Global South, training them to preach God’s Word faithfully, in their own language, right where they serve."
        image={photos.whyEpw}
      />

      {/* The need */}
      <section className="py-16 md:py-24">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="reveal-left">
            <span className="eyebrow">The Need</span>
            <h2 className="h-section mt-3">{need.heading}</h2>
            <span className="lime-rule mt-6" />
            {need.body.map((p) => (
              <p
                key={p}
                className={`mt-5 text-lg leading-relaxed ${p === 'That’s where you come in.' ? 'font-display font-semibold text-pine' : 'text-ink-soft'}`}
              >
                {p}
              </p>
            ))}
          </div>
          <div className="reveal-right">
            <div className="overflow-hidden rounded-[26px] shadow-[var(--shadow-lift)]">
              <img
                src={photos.conference1}
                alt="Pastors seated together at an EPW regional training conference"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="depth-soft border-y border-line py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">{whyEpw.heading}</span>
            <h2 className="h-section mt-3">{whyEpw.tagline}</h2>
            <p className="mt-5 text-lg text-ink-soft">{whyEpw.body}</p>
          </div>
          <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
            {whyEpw.points.map((pt, i) => {
              const Icon = whyIcons[i] ?? Globe2
              return (
                <div key={pt.title} className="card p-7" style={{ '--i': i } as React.CSSProperties}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-pine">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-pine">{pt.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{pt.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="h-section mt-3">From a single gift to a strengthened Church</h2>
          </div>
          <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: BookOpen,
                step: '01',
                title: 'Train',
                body: 'Pastors gather at regional conferences to receive solid biblical instruction and translated resources in their own language.',
              },
              {
                Icon: Globe2,
                step: '02',
                title: 'Equip',
                body: 'They take that teaching, and trusted materials, back to the communities they serve, often in hidden, high-risk places.',
              },
              {
                Icon: Cross,
                step: '03',
                title: 'Multiply',
                body: 'Every equipped pastor strengthens a whole congregation, so faithful truth spreads from the inside out.',
              },
            ].map((s, i) => (
              <div key={s.title} className="card p-7" style={{ '--i': i } as React.CSSProperties}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine text-white">
                    <s.Icon size={22} />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-line">{s.step}</span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-pine">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] text-white">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to help train a pastor?</h2>
            <p className="mt-2 text-white/80">Your partnership reaches the frontlines where it’s needed most.</p>
          </div>
          <Link href="/give" className="btn btn-lime shrink-0">
            Join the Mission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
