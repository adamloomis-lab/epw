// Devotions — EPW's blog/devotional library. Add new entries to the top of the
// array; routing, the index page, sitemap, and JSON-LD all derive from this.

export type Devotion = {
  title: string
  slug: string
  date: string // ISO yyyy-mm-dd
  author: string
  category: string
  scriptureReference: string
  scriptureText: string
  featuredImage: string
  featuredImageCaption: string
  excerpt: string
  body: string[] // main devotional, paragraph by paragraph
  prayer: string
  takeAction: string
}

export const devotions: Devotion[] = [
  {
    title: 'Jesus Only',
    slug: 'jesus-only',
    date: '2026-04-15',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Mark 9:7 (ESV)',
    scriptureText: 'This is my beloved Son; listen to him.',
    featuredImage: '/images/devotions/dave-holdt-south-africa-2026.jpg',
    featuredImageCaption: 'Dave Holdt teaching in South Africa, April 2026',
    excerpt:
      'A sangoma walked into pastor training wearing the skins of a witch doctor. One year later he returned, the attire gone, declaring the only thing that had changed him: Jesus only.',
    body: [
      'A pastor in Southern Africa came to EPW training wearing the attire of a sangoma, a witch doctor. Sunday mornings he preached in church. Monday through Saturday he threw bones and called on ancestors for power. This was syncretism in the flesh: Jesus plus something else.',
      'During the training, Dave Holdt taught from Mark 9, the Transfiguration. Peter, overwhelmed by seeing Jesus with Moses and Elijah, asked: “Shall we build tents?” He wanted to accommodate all three. But God the Father spoke from heaven with devastating clarity: “This is my beloved Son; listen to him.” The lesson was unmistakable. Accommodation is for one and one only. Not Jesus plus Moses. Not Jesus plus Elijah. Not Jesus plus the ancestors. Jesus only.',
      'Dave looked at the sangoma and said: “Jesus plus the ancestors is death. It is Jesus only.” The man muttered under his breath: “Never.” Dave repeated: “Jesus only.” Again: “Never.” At lunch, Dave sat beside him. “Vusi, ‘never’ to Jesus only is death, not life. It is Jesus only.” Vusi said nothing. But at week’s end, he stood before the other pastors and said: “Men, we’ve been here the whole week. We need to listen to what we’ve heard.”',
      'One year later, Vusi returned to the same training. The animal skins were gone. The sangoma attire was gone. Dave asked him privately: “Do you remember what we spoke about?” Vusi answered: “I do remember. It is Jesus only.” When the Word is rightly handled, the Spirit does what only He can do. He strips away every rival and leaves Christ alone enthroned.',
    ],
    prayer:
      'Father, expose every place where we accommodate rivals to Your Son. Whether ancestors or ambition, tradition or self-righteousness, show us where we’ve added to Christ. Strip away what competes for His supremacy. Give us pastors across the Global South who will stand and declare: Jesus only. In His name, Amen.',
    takeAction:
      'Support EPW at EPWUSA.org. When you equip one pastor to preach “Jesus only,” entire congregations are freed from syncretism and false teaching. Partner in this work today.',
  },
]

export const getDevotion = (slug: string) => devotions.find((d) => d.slug === slug)

export const formatDevotionDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
