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
    title: 'We Thought We Knew',
    slug: 'we-thought-we-knew',
    date: '2026-04-22',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: '1 Corinthians 8:2 (ESV)',
    scriptureText: 'If anyone thinks he knows anything, he does not yet know as he ought to know.',
    featuredImage: '/images/devotions/we-thought-we-knew-nigeria.jpg',
    featuredImageCaption: 'Studying the texts, Nigeria, October 2024',
    excerpt:
      'After EPW’s training, a pastor in southern Nigeria stood before his congregation and confessed: “We thought we knew what the church is and how to build a healthy church. We did not know.”',
    body: [
      'After completing EPW’s training, a pastor in southern Nigeria stood before his congregation with a confession that should haunt us: “We thought we knew what the church is and how to build a healthy church. We did not know.”',
      'Consider the weight of that admission. This man had been shepherding God’s flock: preaching, baptizing, burying the dead, marrying couples. He was sincere. He was devoted. But he had never been taught to rightly divide the Word of truth. His people were spiritually malnourished under his care, and he didn’t know it. Across the Global South, 85% of pastors face this same reality: leading churches with empty hands, mixing Scripture with tradition because no one ever showed them the difference.',
      'The transformation came through EPW’s training in biblical exposition and sound doctrine. His church is now strong, grounded in God’s Word. But think of the thousands who remain where he was, faithful men with hungry congregations, unaware of how much they don’t know. This isn’t a matter of intelligence or zeal. It’s access to training we take for granted. We have 800 English Bible translations, seminary libraries, and podcasts. They have one worn Bible and no framework to understand it.',
    ],
    prayer:
      'Lord, forgive us for taking biblical training for granted. Burden our hearts for pastors who shepherd faithfully but have never been equipped. Raise up workers to train them. Use us to close the gap between their hunger and our abundance. For Your Church’s sake, Amen.',
    takeAction:
      'Visit EPWUSA.org and adopt a pastor or training program. Your partnership equips shepherds who will feed Christ’s flock for generations. Give today.',
  },
  {
    title: 'Jesus Only',
    slug: 'jesus-only',
    date: '2026-04-15',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Mark 9:7 (ESV)',
    scriptureText: 'This is my beloved Son; listen to him.',
    featuredImage: '/images/devotions/dave-holdt-south-africa-2026-v2.jpg',
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
