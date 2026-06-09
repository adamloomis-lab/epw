import { Link } from 'wouter'
import {
  ArrowRight,
  BookOpen,
  MapPin,
  HeartHandshake,
  Check,
  Repeat,
  Mail,
  Church,
  HelpCircle,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { tiers, faqs, org, photos } from '../data/site'

const tierIcons: Record<string, typeof BookOpen> = { BookOpen, MapPin, HeartHandshake }

// Real external giving link if configured; otherwise route people to contact.
const giveIsLive = org.give.donate.startsWith('http')
const giveHref = giveIsLive ? org.give.donate : '/contact'
const giveProps = giveIsLive
  ? { href: giveHref, target: '_blank', rel: 'noopener noreferrer' }
  : { href: giveHref }

function GiveButton({ label, className }: { readonly label: string; readonly className: string }) {
  // Wrap in either an <a> (live) or a wouter <Link> (fallback to /contact).
  return giveIsLive ? (
    <a {...(giveProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={className}>
      {label} <ArrowRight size={18} />
    </a>
  ) : (
    <Link href={giveHref} className={className}>
      {label} <ArrowRight size={18} />
    </Link>
  )
}

export default function Give() {
  return (
    <>
      <PageHeader
        eyebrow="Ways to Give"
        title="Equip a pastor. Strengthen the Church."
        intro="Pastors across the Global South are leading in danger, often without training or support. Your gift brings them the truth, tools, and teaching they need to stand firm."
        image={photos.give}
      />

      {/* Tiers */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal-group grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => {
              const Icon = tierIcons[t.icon] ?? BookOpen
              const featured = i === 1
              return (
                <div
                  key={t.id}
                  className={`card lift relative flex flex-col p-7 ${featured ? 'ring-2 ring-lime' : ''}`}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  {featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-lime px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-lime-ink">
                      Most impact
                    </span>
                  )}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-pine">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-pine">{t.title}</h3>
                  <div className="mt-1 font-display text-3xl font-extrabold text-ink">{t.amount}</div>
                  <p className="mt-3 font-display text-[15px] font-semibold italic text-ink">{t.lead}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
                  <GiveButton
                    label={featured ? 'Equip a Region' : 'Give Now'}
                    className={`btn mt-6 w-full ${featured ? 'btn-lime' : 'btn-navy'}`}
                  />
                </div>
              )
            })}
          </div>

          {!giveIsLive && (
            <p className="reveal mx-auto mt-8 max-w-2xl rounded-xl bg-cream px-5 py-4 text-center text-sm text-ink-soft">
              Secure online giving is being finalized. In the meantime,{' '}
              <Link href="/contact" className="font-semibold text-teal underline">
                contact us
              </Link>{' '}
              and we’ll help you give today.
            </p>
          )}
        </div>
      </section>

      {/* What your gift provides */}
      <section className="depth-soft border-y border-line py-16 md:py-24">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="reveal-left">
            <div className="overflow-hidden rounded-[26px] shadow-[var(--shadow-lift)]">
              <img
                src={photos.conference2}
                alt="Pastors taking notes during biblical instruction at an EPW conference"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal-right">
            <span className="eyebrow">What Your Gift Provides</span>
            <h2 className="h-section mt-3">Real tools, in their own language</h2>
            <ul className="mt-6 space-y-4">
              {[
                'Biblical training at regional pastor conferences',
                'Trusted, translated resources pastors can keep and teach from',
                'Travel, materials, and logistics so training actually reaches the field',
                'Long-term partnership that multiplies across whole congregations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-lime-ink">
                    <Check size={15} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">More Ways to Partner</span>
            <h2 className="h-section mt-3">Other ways to give</h2>
          </div>
          <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Repeat,
                title: 'Give monthly',
                body: 'Become a monthly partner and fuel long-term impact — more books translated, more languages reached, more pastors trained.',
              },
              {
                Icon: Church,
                title: 'Through your church',
                body: 'Mobilize your congregation or missions committee to sponsor a conference or adopt a region of pastors.',
              },
              {
                Icon: Mail,
                title: 'By mail or in person',
                body: 'Prefer to give another way? Reach out and our team will help you partner however works best for you.',
              },
            ].map((c, i) => (
              <div key={c.title} className="card p-7" style={{ '--i': i } as React.CSSProperties}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-pine">
                  <c.Icon size={24} />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-pine">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="depth-soft border-y border-line py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <div className="reveal text-center">
            <HelpCircle size={32} className="mx-auto text-pine" />
            <h2 className="h-section mt-3">Questions about giving</h2>
          </div>
          <div className="reveal-group mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="card group p-5"
                style={{ '--i': i } as React.CSSProperties}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
                  {f.q}
                  <span className="text-pine transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] text-white">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Every gift helps a pastor stand firm.
            </h2>
            <p className="mt-2 text-white/80">Join the mission and strengthen the Church, one pastor at a time.</p>
          </div>
          <GiveButton label="Join the Mission" className="btn btn-lime shrink-0" />
        </div>
      </section>
    </>
  )
}
