import { Link } from 'wouter'
import {
  ArrowRight,
  BookOpen,
  MapPin,
  HeartHandshake,
  Cross,
  Quote,
  Globe2,
  Languages,
  Sprout,
  Play,
} from 'lucide-react'
import { hero, need, tiers, whyEpw, stats, photos, org } from '../data/site'
import YouTubeEmbed from '../components/YouTubeEmbed'

const tierIcons: Record<string, typeof BookOpen> = {
  BookOpen,
  MapPin,
  HeartHandshake,
}

const whyIcons = [Globe2, Languages, Sprout]

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="reveal-left">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="h-display mt-4">
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">{hero.lead}</p>
            <p className="mt-3 max-w-xl text-lg text-ink-soft">{hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/give" className="btn btn-lime">
                {hero.cta} <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn btn-outline">
                Why EPW
              </Link>
            </div>
          </div>

          <div className="reveal-right relative">
            <div className="overflow-hidden rounded-[26px] shadow-[var(--shadow-lift)]">
              <img
                src={photos.hero}
                alt="Pastors gathered around a table studying Scripture together at an EPW training"
                className="aspect-[4/3] w-full object-cover"
                width={1600}
                height={1200}
                loading="eager"
              />
            </div>
            <div className="relative z-10 -mt-10 ml-auto max-w-xs rounded-2xl bg-lime p-6 shadow-[var(--shadow-lift)] md:-mt-12 md:mr-[-1rem]">
              <Cross size={26} className="text-lime-ink" />
              <p className="mt-3 font-display text-[15px] font-semibold leading-snug text-lime-ink">
                {hero.pullquote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE NEED ---------- */}
      <section className="depth-soft border-y border-line">
        <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="reveal md:col-span-7">
            <h2 className="h-section">{need.heading}</h2>
            <span className="lime-rule mt-6" />
          </div>
          <div className="reveal md:col-span-5 md:pt-2">
            {need.body.map((p) => (
              <p
                key={p}
                className={`text-lg leading-relaxed text-ink-soft ${p === 'That’s where you come in.' ? 'mt-5 font-display font-semibold text-pine' : 'mt-5 first:mt-0'}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GIVING TIERS ---------- */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">Ways to Help</span>
            <h2 className="h-section mt-3">Three ways your gift goes to work</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Every level of partnership puts faithful teaching directly into a pastor’s hands.
            </p>
          </div>

          <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => {
              const Icon = tierIcons[t.icon] ?? BookOpen
              return (
                <div
                  key={t.id}
                  className="card lift flex flex-col p-7"
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-pine">
                    <Icon size={24} />
                  </span>
                  <div className="mt-5 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-pine">{t.title}</h3>
                    <span className="font-display text-lg font-bold text-lime-ink/80">{t.amount}</span>
                  </div>
                  <p className="mt-3 font-display text-[15px] font-semibold italic text-ink">{t.lead}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
                  <Link
                    href="/give"
                    className="mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-teal hover:gap-2.5"
                  >
                    Give now <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- EVERY GIFT (split with photo) ---------- */}
      <section className="depth-soft border-y border-line">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24">
          <div className="reveal-left order-2 md:order-1">
            <span className="eyebrow">Your Partnership</span>
            <h2 className="h-section mt-3 text-pine">
              Every gift helps equip pastors to preach faithfully.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Whether you help train one pastor or support a group of ten, your generosity makes this
              work possible, strengthening churches from the inside out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/give" className="btn btn-lime">
                Help Train Pastors Today <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Partner with us
              </Link>
            </div>
          </div>
          <div className="reveal-right order-1 md:order-2">
            <div className="overflow-hidden rounded-[26px] shadow-[var(--shadow-lift)]">
              <img
                src={photos.give}
                alt="An EPW partner delivering boxes of translated biblical books to a pastor in the field"
                className="aspect-[4/3] w-full object-cover"
                width={1400}
                height={1050}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY EPW (image band) ---------- */}
      <section className="relative overflow-hidden bg-[var(--color-pine)] text-white">
        <img
          src={photos.whyEpw}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
          data-parallax="-0.06"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(29,92,67,0.92) 0%, rgba(8,42,68,0.94) 100%)' }}
          aria-hidden="true"
        />
        <div className="container-x relative py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="reveal">
              <span className="eyebrow eyebrow-lime">{whyEpw.heading}</span>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                {whyEpw.tagline}
              </h2>
            </div>
            <div className="reveal md:pt-2">
              <p className="text-lg leading-relaxed text-white/85">{whyEpw.body}</p>
            </div>
          </div>

          <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
            {whyEpw.points.map((pt, i) => {
              const Icon = whyIcons[i] ?? Globe2
              return (
                <div
                  key={pt.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <Icon size={26} className="text-lime" />
                  <h3 className="font-display mt-4 text-xl font-bold text-white">{pt.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/80">{pt.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section className="bg-surface py-14 md:py-16">
        <div className="container-x reveal-group grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center" style={{ '--i': i } as React.CSSProperties}>
              <div className="font-display text-4xl font-extrabold text-pine md:text-5xl">{s.value}</div>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- VIDEO / STORY ---------- */}
      <section className="depth-soft border-y border-line py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">From the Field</span>
            <h2 className="h-section mt-3">Preaching Under Pressure</h2>
            <p className="mt-4 text-lg text-ink-soft">
              See what it means to preach God’s Word faithfully where truth costs the most, and how
              your partnership reaches the pastors standing firm.
            </p>
          </div>

          <div className="reveal mx-auto mt-10 max-w-4xl">
            {org.videoId ? (
              <YouTubeEmbed id={org.videoId} title="Preaching Under Pressure | Faithful Pastors Respond" />
            ) : (
              <div className="relative aspect-video w-full overflow-hidden rounded-[26px] shadow-[var(--shadow-lift)]">
                <img
                  src={photos.congregation}
                  alt="A gathered congregation in the Global South"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[rgba(8,42,68,0.55)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime text-lime-ink shadow-lg">
                    <Play size={28} className="ml-1" />
                  </span>
                  <p className="font-display mt-4 text-xl font-bold [text-shadow:0_2px_14px_rgba(8,42,68,0.8)]">
                    Preaching Under Pressure
                  </p>
                  <p className="mt-1 text-sm text-white/80">Faithful Pastors Respond · Missions:Together</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="relative overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="container-x relative py-16 text-center md:py-24">
          <Quote size={40} className="mx-auto text-lime" />
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            Help strengthen the Church from the inside out, one pastor at a time.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/give" className="btn btn-lime">
              Join the Mission <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
