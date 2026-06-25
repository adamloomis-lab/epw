// Single source of truth for EPW (Equipping Pastors Worldwide) facts, used
// across pages, footer, and JSON-LD schema. Copy is transcribed from the live
// EPW (Duda) landing page. Items marked TODO need confirmation from the client.

export const org = {
  name: 'Equipping Pastors Worldwide',
  shortName: 'EPW',
  acronym: 'EPW',
  tagline: 'Equipping Shepherds. Strengthening the Church.',
  ein: '', // TODO: confirm 501(c)(3) EIN with EPW
  shortBlurb:
    'Equipping Pastors Worldwide trains and resources pastors on the frontlines of the Global South, so they can preach God’s Word faithfully, in their own language, right where they serve.',
  founded: 0, // TODO: confirm founding year
  // No public email shown on the site by request — visitors reach EPW via the
  // /contact form. (Form submissions still notify an inbox via Netlify Forms;
  // that recipient is backend-only and not displayed anywhere on the website.)
  email: '',
  emailHref: '',
  phone: '', // TODO: confirm phone (optional)
  // TODO: confirm mailing address for checks / 501(c)(3) record.
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  addressOneLine: '',
  social: {
    // TODO: confirm official EPW profiles. Video on the site is from the
    // "Missions:Together" YouTube channel.
    facebook: '',
    instagram: '',
    youtube: '',
  },
  give: {
    // EPW's live online-giving page (confirmed by client).
    donate: 'https://epworldwide.org/support/donate-funds/',
    monthly: 'https://epworldwide.org/support/donate-funds/',
  },
  // "Preaching Under Pressure | Faithful Pastors Respond" — Missions:Together.
  videoId: 'Ljd4F-HUAHY',
} as const

// Hero / mission framing pulled verbatim from the live landing page.
export const hero = {
  eyebrow: 'Equipping Pastors Worldwide',
  title: ['Equipping Shepherds.', 'Strengthening the Church.'],
  lead: 'Pastors across the Global South are leading in danger, often without training or support.',
  sub: 'Your partnership brings them the truth, tools, and teaching they need to stand firm and lead faithfully.',
  cta: 'Join the Mission',
  pullquote:
    'Where the Church grows fastest, truth is under fire. EPW trains pastors to stand firm and lead faithfully.',
} as const

// The "growing fast, but truth is being lost" problem section.
export const need = {
  heading: 'The Church is growing fast, but truth is being lost.',
  body: [
    'In the Global South, thousands are coming to faith every day, yet most pastors have never been trained to preach the Bible. Without guidance, false gospels spread and whole communities lose sight of truth.',
    'That’s where you come in.',
    'You can help strengthen the Church from the inside out, one pastor at a time.',
  ],
} as const

// The three giving tiers (the Duda cards).
export const tiers = [
  {
    id: 'train-a-pastor',
    icon: 'BookOpen',
    title: 'Train a Pastor',
    amount: '$100',
    lead: '$100 helps provide biblical training and translated resources.',
    body: 'Many pastors lead entire congregations with no formal instruction. Your support helps EPW bring faithful teaching and trusted materials in their own language, right where they serve.',
  },
  {
    id: 'equip-a-region',
    icon: 'MapPin',
    title: 'Equip a Region',
    amount: '$1,000',
    lead: '$1,000 helps train 10 pastors at an EPW conference.',
    body: 'A full conference costs around $3,500 to run. Your gift helps cover training, materials, and logistics so pastors can receive solid biblical instruction and take it back to their churches.',
  },
  {
    id: 'multiply-the-mission',
    icon: 'HeartHandshake',
    title: 'Multiply the Mission',
    amount: 'Monthly',
    lead: 'Become a monthly partner.',
    body: 'Your ongoing support fuels long-term impact: more books translated, more languages reached, and more pastors trained in the world’s hardest places.',
  },
] as const

// "WHY EPW?" band.
export const whyEpw = {
  heading: 'Why EPW?',
  tagline: 'We go where others can’t, and train those others overlook.',
  body: 'EPW meets pastors on the frontlines of the Global South, teaching them to preach God’s Word faithfully in their own language. These are men and women serving in hidden, high-risk places where false teaching spreads fastest and truth costs the most.',
  points: [
    {
      title: 'Frontline access',
      body: 'We train pastors in hidden, high-risk regions most ministries never reach.',
    },
    {
      title: 'In their own language',
      body: 'Faithful teaching and translated resources delivered in the language they preach in.',
    },
    {
      title: 'Built to multiply',
      body: 'Every pastor we equip goes home to teach and strengthen their whole congregation.',
    },
  ],
} as const

// Headline impact framing. Numbers describe the giving model on the live site
// ($100/pastor, 10 pastors per $1,000, ~$3,500 per conference).
// TODO: replace with EPW's confirmed totals (pastors trained, conferences, countries).
export const stats = [
  { value: '$100', label: 'trains one pastor with biblical resources' },
  { value: '10', label: 'pastors equipped for every $1,000 given' },
  { value: '~$3.5K', label: 'funds a full regional training conference' },
  { value: 'Global South', label: 'where the Church grows fastest and truth costs the most' },
] as const

export const faqs = [
  {
    q: 'Where does my gift go?',
    a: 'Your gift funds biblical training, translated resources, and the conferences where pastors are equipped. $100 helps train a pastor; $1,000 helps train ten at an EPW conference.',
  },
  {
    q: 'Who does EPW train?',
    a: 'Pastors and church leaders on the frontlines of the Global South, many leading entire congregations with no formal instruction, often in hidden, high-risk places.',
  },
  {
    q: 'How is the training delivered?',
    a: 'Through regional conferences and translated materials, EPW teaches pastors to preach God’s Word faithfully in their own language, then sends them back to strengthen their churches.',
  },
  {
    q: 'What does it mean to become a monthly partner?',
    a: 'Monthly partners provide steady support that fuels long-term impact: more books translated, more languages reached, and more pastors trained in the world’s hardest places.',
  },
  {
    q: 'Is my donation tax-deductible?',
    a: 'EPW is a faith-based nonprofit ministry. Please contact us for current giving and tax-receipt details.',
  },
] as const

// Photo library (real EPW field photos provided by the client).
export const photos = {
  hero: '/images/hero.webp',
  give: '/images/give.webp',
  whyEpw: '/images/why-epw.webp',
  congregation: '/images/congregation.webp',
  group: '/images/group.webp',
  conference1: '/images/conference-1.webp',
  conference2: '/images/conference-2.webp',
  conference3: '/images/conference-3.webp',
  conference4: '/images/conference-4.webp',
} as const
