import { Link } from 'wouter'
import { Facebook, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { org, photos } from '../data/site'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Why EPW' },
  { href: '/give', label: 'Ways to Give' },
  { href: '/devotions', label: 'Devotions' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: org.social.facebook, Icon: Facebook, label: 'Facebook' },
  { href: org.social.instagram, Icon: Instagram, label: 'Instagram' },
  { href: org.social.youtube, Icon: Youtube, label: 'YouTube' },
].filter((s) => s.href)

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-[var(--color-navy)] text-white/75">
      <img
        src={photos.congregation}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(8,42,68,0.86) 0%, rgba(4,32,47,0.96) 100%)' }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="h-12" onDark />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed">{org.shortBlurb}</p>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-lime hover:text-lime"
                  aria-label={`${org.name} on ${label}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-lg font-bold text-white">Partner with the mission</h3>
          <p className="mt-4 text-[15px] leading-relaxed">
            Every gift helps equip pastors to preach faithfully and strengthen their churches.
          </p>
          <Link
            href="/contact"
            className="mt-5 flex items-center gap-3 text-[15px] hover:text-white"
          >
            <Mail size={18} className="shrink-0 text-lime" />
            <span>Send us a message</span>
          </Link>
          <Link href="/give" className="btn btn-lime mt-6 !py-3 !text-sm">
            Join the Mission <ArrowRight size={15} />
          </Link>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-lg font-bold text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-white/55 sm:flex-row">
          <span>
            © {year} {org.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
          <span>
            Website by{' '}
            <a
              href="https://adamloomismarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-lime"
            >
              Adam Loomis Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
