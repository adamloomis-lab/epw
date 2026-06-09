import { org, faqs } from '../data/site'
import { devotions, getDevotion } from '../data/devotions'

// Production target domain. Canonicals, sitemap, OG and schema all point here so
// SEO value lands on the live host the moment DNS flips from the old Duda site.
// This site's domain is epwusa.org. (Giving is processed on the separate
// epworldwide.org/support/donate-funds page — see org.give.donate.)
export const SITE_URL = 'https://epwusa.org'

const OG_IMAGE = '/images/og-cover.jpg'

export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Netlify serves pages with a trailing slash; keep canonical/sitemap URLs aligned.
export const pageUrl = (path: string) =>
  abs(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)

function ngoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': `${SITE_URL}/#org`,
    name: org.name,
    alternateName: org.acronym,
    url: SITE_URL,
    logo: abs('/images/logo.png'),
    image: abs(OG_IMAGE),
    description: org.shortBlurb,
    slogan: org.tagline,
    knowsAbout: [
      'Pastor training',
      'Theological education',
      'Global South missions',
      'Bible translation',
      'Church leadership',
    ],
    areaServed: 'Global South',
    sameAs: [org.social.facebook, org.social.instagram, org.social.youtube].filter(Boolean),
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: org.name,
    publisher: { '@id': `${SITE_URL}/#org` },
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

function donateActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    recipient: { '@id': `${SITE_URL}/#org` },
    target: pageUrl('/give'),
  }
}

function blogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/devotions/#blog`,
    name: 'EPW Devotions',
    description: 'Short devotionals from the frontlines where EPW trains pastors to preach faithfully.',
    url: pageUrl('/devotions'),
    publisher: { '@id': `${SITE_URL}/#org` },
    blogPost: devotions.map((d) => ({
      '@type': 'BlogPosting',
      headline: d.title,
      url: pageUrl(`/devotions/${d.slug}`),
      datePublished: d.date,
    })),
  }
}

function blogPostingSchema(d: (typeof devotions)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: d.title,
    description: d.excerpt,
    image: abs(d.featuredImage),
    datePublished: d.date,
    dateModified: d.date,
    author: { '@type': 'Organization', name: d.author },
    publisher: { '@id': `${SITE_URL}/#org` },
    mainEntityOfPage: pageUrl(`/devotions/${d.slug}`),
    articleSection: d.category,
    citation: d.scriptureReference,
    isPartOf: { '@id': `${SITE_URL}/devotions/#blog` },
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  }
}

export type PageMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  jsonLd: object[]
}

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== '/' ? rawPath.replace(/\/$/, '') : '/'
  const ogImage = abs(OG_IMAGE)
  const base = ngoSchema()

  // Individual devotion posts (dynamic slug).
  if (path.startsWith('/devotions/')) {
    const slug = path.slice('/devotions/'.length)
    const d = getDevotion(slug)
    if (d) {
      return {
        title: `${d.title} | EPW Devotions`,
        description: d.excerpt,
        canonical: pageUrl(`/devotions/${d.slug}`),
        ogImage: abs(d.featuredImage),
        jsonLd: [
          base,
          blogPostingSchema(d),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Devotions', path: '/devotions' },
            { name: d.title, path: `/devotions/${d.slug}` },
          ]),
        ],
      }
    }
  }

  switch (path) {
    case '/':
      return {
        title: 'Equipping Pastors Worldwide | Equipping Shepherds, Strengthening the Church',
        description: org.shortBlurb,
        canonical: pageUrl('/'),
        ogImage,
        jsonLd: [base, websiteSchema(), donateActionSchema(), faqSchema()],
      }
    case '/about':
      return {
        title: 'Why EPW | The Mission to Equip Pastors Worldwide',
        description:
          'The Church in the Global South is growing fast, but most pastors have never been trained to preach the Bible. EPW meets them on the frontlines — teaching God’s Word faithfully in their own language.',
        canonical: pageUrl('/about'),
        ogImage,
        jsonLd: [base, breadcrumb([{ name: 'Home', path: '/' }, { name: 'Why EPW', path: '/about' }])],
      }
    case '/give':
      return {
        title: 'Ways to Give | Train a Pastor, Equip a Region | EPW',
        description:
          'Help equip pastors on the frontlines of the Global South. $100 trains a pastor, $1,000 equips ten at a conference, and monthly partners multiply the mission. Give today.',
        canonical: pageUrl('/give'),
        ogImage,
        jsonLd: [
          base,
          donateActionSchema(),
          faqSchema(),
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Ways to Give', path: '/give' }]),
        ],
      }
    case '/devotions':
      return {
        title: 'Devotions | Equipping Pastors Worldwide',
        description:
          'Short devotionals from the field — stories and Scripture from the frontlines where EPW trains pastors to preach God’s Word faithfully.',
        canonical: pageUrl('/devotions'),
        ogImage,
        jsonLd: [
          base,
          blogSchema(),
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Devotions', path: '/devotions' }]),
        ],
      }
    case '/contact':
      return {
        title: 'Contact | Equipping Pastors Worldwide',
        description:
          'Get in touch with Equipping Pastors Worldwide. Partner with the mission, ask a question, or learn how your church can help train pastors on the frontlines.',
        canonical: pageUrl('/contact'),
        ogImage,
        jsonLd: [
          base,
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: pageUrl('/contact'),
            about: { '@id': `${SITE_URL}/#org` },
          },
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
        ],
      }
    case '/privacy':
      return {
        title: 'Privacy Policy | Equipping Pastors Worldwide',
        description: 'How Equipping Pastors Worldwide collects, uses, and protects your information.',
        canonical: pageUrl('/privacy'),
        ogImage,
        jsonLd: [base],
      }
    case '/terms':
      return {
        title: 'Terms of Use | Equipping Pastors Worldwide',
        description: 'The terms that govern your use of the Equipping Pastors Worldwide website.',
        canonical: pageUrl('/terms'),
        ogImage,
        jsonLd: [base],
      }
    case '/accessibility':
      return {
        title: 'Accessibility Statement | Equipping Pastors Worldwide',
        description: 'Our commitment to making the Equipping Pastors Worldwide website accessible to everyone.',
        canonical: pageUrl('/accessibility'),
        ogImage,
        jsonLd: [base],
      }
    default:
      return {
        title: 'Page Not Found | Equipping Pastors Worldwide',
        description:
          'Sorry, we couldn’t find that page. Equipping Pastors Worldwide trains pastors on the frontlines of the Global South.',
        canonical: pageUrl(path),
        ogImage,
        jsonLd: [base],
      }
  }
}

export const ALL_ROUTES: string[] = [
  '/',
  '/about',
  '/give',
  '/devotions',
  ...devotions.map((d) => `/devotions/${d.slug}`),
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
]
