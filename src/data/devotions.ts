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
    title: 'When Barriers Become Doors',
    slug: 'when-barriers-become-doors',
    date: '2026-09-30',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Isaiah 43:19b (ESV)',
    scriptureText: 'I will make a way in the wilderness and rivers in the desert.',
    featuredImage: '/images/devotions/barriers-become-doors-bhutan.jpg',
    featuredImageCaption: 'EPW',
    excerpt:
      'In Bhutan, outside teaching requires a government-approved chaperone in the room at all times. Pastor Aaron saw an opportunity. What could have been a restriction became a doorway.',
    body: [
      'In the mountain kingdom of Bhutan, known as the land of the “People of the White Dragon”, sharing the gospel is not straightforward. There are no official church buildings. Access to Christian resources is limited, with only the New Testament available in the local language. And for those seeking to bring in outside teaching, the barriers are significant: high daily visa costs, strict regulations, and the requirement that a government-approved chaperone be present at all times.',
      'At first glance, it might seem almost impossible to provide meaningful Bible training in such a context. But Pastor Aaron saw an opportunity.',
      'In Bhutan, education is free. So he began encouraging young believers in his fellowship to pursue education, not only for their own future, but with a greater purpose in mind. Some of them became qualified to serve as official chaperones. And that changed everything.',
      'Now, when training is organised, those same believers can legally fulfil the government’s requirements by sitting in the room as accredited chaperones while also receiving and supporting gospel teaching.',
      'What could have been a restriction became a doorway.',
      'Through this creative and courageous approach, Bible training is now taking place in full compliance with the law, yet with eternal impact. Those who have been equipped are not keeping the message to themselves. They are travelling out into remote villages, carrying the gospel to places where it has rarely been heard.',
      'In a nation where the space for Christian ministry is tightly limited, Pastor Aaron’s vision is helping raise up a new generation of gospel workers, from within the country, for the country.',
      'Sometimes the greatest breakthroughs don’t come by overcoming barriers, but by reimagining them.',
    ],
    prayer:
      'Lord of the nations, You open doors that no one can shut. Thank You for Pastor Aaron’s vision to see opportunity where others see only barriers. Protect the believers of Bhutan as they study, serve, and carry Your Word into remote villages. Speed the day when they hold the whole Bible in their own language. And teach us to ask You for wisdom before we assume a door is closed. In Jesus’ name, Amen.',
    takeAction:
      'Pray for the church in Bhutan by name this week. Then visit EPWUSA.org to support Bible training in places where access is hardest and need is greatest. Your partnership helps raise up gospel workers from within the country, for the country. Give today.',
  },
  {
    title: 'Weeping at the End',
    slug: 'weeping-at-the-end',
    date: '2026-09-01',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Psalm 90:12 (ESV)',
    scriptureText: 'Teach us to number our days that we may get a heart of wisdom.',
    featuredImage: '/images/devotions/weeping-at-the-end-darjeeling.jpg',
    featuredImageCaption: 'Darjeeling 2023',
    excerpt:
      'At EPW’s first training in Darjeeling, a pastor in his eighties stood and wept: “I wish I had received this training at the beginning of my ministry, not at the end.”',
    body: [
      'At EPW’s first-ever training in Darjeeling, an elderly pastor in his eighties stood to speak, and the room fell quiet.',
      'He began with a memory from childhood. As a boy he carried tea in a plantation office, serving an English manager. The manager was a Christian, and he took time to tell the tea boy about Jesus. The boy believed. The manager kept going, preaching through the plantation villages, planting a small church. And when the day came to sail home to the UK, he turned to the young man, sixteen years old, and said, “You are now the pastor.”',
      'That was the whole of his preparation. One sentence.',
      'Decades followed. He served that church faithfully. He never attended Bible college. He never received formal theological training. And God used him anyway.',
      'Then he paused, and his voice changed. “I have been weeping,” he said. “Weeping with joy because I have heard the Bible explained so clearly and helpfully.”',
      'Then it broke.',
      '“And I have also been weeping with sadness. I wish I had received this training at the beginning of my ministry, not at the end. It would have helped me so much.”',
      'He looked out at the younger men in the room. “You must listen. You must learn.”',
      'Sit with that. A faithful man, used by God for sixty years, weeping over four days he received too late. Not bitter. Grateful. But grieving. And the honest question isn’t whether God can use untrained men; He plainly does. The question is what we do about the ones who find out at the end what they needed at the beginning. There are rooms full of them, in every country where EPW works. Most will never get four days.',
    ],
    prayer:
      'Father, thank You for men who served You faithfully with almost nothing. Thank You for the manager who told a tea boy about Jesus and then trusted him with a church. Forgive us for the abundance we sit on while others go without. Do not let another generation of pastors reach the end of their ministry weeping over what they were never given. Send the training now, while there is still time. In Jesus’ name, Amen.',
    takeAction:
      'Give at EPWUSA.org. Four days of training changed how an eighty-year-old man reads his Bible. Imagine what it does for a man at twenty-five. Fund a training event today.',
  },
  {
    title: 'The Man in the Back Row',
    slug: 'the-man-in-the-back-row',
    date: '2026-08-05',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Philippians 3:7 (ESV)',
    scriptureText: 'But whatever gain I had, I counted as loss for the sake of Christ.',
    featuredImage: '/images/devotions/man-in-the-back-row-soroti.jpg',
    featuredImageCaption: 'Soroti, July 2025',
    excerpt:
      'For years, Rev Richard sat near the back at EPW’s conferences in Soroti and rarely spoke. Then one evening he asked to speak privately. He could no longer preach the prosperity gospel.',
    body: [
      'For years, Rev Richard sat near the back at EPW’s training conferences in Soroti. He was always present and rarely spoke. To anyone scanning the room, he was one more face among many.',
      'But the Word was doing its slow work. Conference after conference, as the Bible was taught and the gospel came into focus, something shifted in him that no one could see. Then one evening at the final session, he asked to speak privately. What he said had been building for years: he was serving in a prosperity gospel church, and he now understood that what he had been preaching was not the true gospel. He could not stay.',
      'He knew exactly what leaving would cost. The prosperity gospel is not only bad theology. In much of the Global South, it is a livelihood. Walking away meant losing his financial support, his standing, and his security, with nothing certain waiting on the other side. He did not ask for an easier path. He asked for prayer for the courage to take the right one.',
      'Today Richard serves as an evangelist in Soroti. Many have come to faith through his preaching, including women driven into prostitution by poverty, the people the prosperity gospel had nothing to offer but blame. Hope has taken root where there was little before. It began with a quiet man in the back row who heard the true gospel, counted the cost, and paid it.',
      'We tend to measure a training conference by the men who speak up. God measures it by the men who go home changed.',
    ],
    prayer:
      'Father, thank You for the quiet ones: the men in the back rows whose hearts You are changing while no one is watching. Give them courage when the truth costs them something. Provide for those who walk away from false gospels with empty hands. And make us the kind of people who will stand behind them. In Jesus’ name, Amen.',
    takeAction:
      'Support EPW at EPWUSA.org. Every training conference fills a room with men like Richard, some ready to speak, some still listening. You never know which one is about to count the cost. Partner in this work today.',
  },
  {
    title: 'The Weight She Didn’t Know She Was Carrying',
    slug: 'the-weight-she-didnt-know-she-was-carrying',
    date: '2026-07-22',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: 'Ephesians 2:8 (ESV)',
    scriptureText:
      'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.',
    featuredImage: '/images/devotions/weight-she-didnt-know-darjeeling.jpg',
    featuredImageCaption: 'EPW training in Darjeeling, similar to events in Hyderabad.',
    excerpt:
      'Cheryl was a pastor’s daughter and a worship leader. At EPW’s training in Hyderabad she said it plainly: “I realised that I was not actually a Christian.”',
    body: [
      'When Cheryl came to EPW’s training in Hyderabad, something wasn’t right. As a pastor’s daughter and worship leader, she was deeply embedded in church life. But behind the activity was a heaviness. Her face carried more weariness than joy.',
      'She had done everything right, or so she thought. She had performed the role of a Christian with sincerity and diligence. What she had never understood was that performing the role and receiving the gift are not the same thing.',
      'As the week of teaching unfolded and the gospel was preached with clarity, something in Cheryl began to shift. By the end of the training, she said it plainly: “I realised that I was not actually a Christian. I thought the Christian life was about doing the right activities. Your preaching helped me to see that I was not saved. Now I see that it is about what Jesus has done.”',
      'The heaviness lifted. In its place came joy: real, visible, and overflowing.',
      'But it didn’t stop with her. When the next training came around, Cheryl made a decision that said everything about the reality of her new faith: she missed a family wedding to return. And this time, she didn’t come alone. She brought her nieces, longing for them to hear what she had heard.',
      'From misery to joy. From religion to faith. From attending alone to bringing others.',
      'This is what EPW’s training does in places like Hyderabad and across Pakistan: not merely sharpen ministry skills, but preach the gospel so clearly that even those who have been inside the church for years finally hear it for the first time. Cheryl was already in the building. She just needed someone to open the Word.',
    ],
    prayer:
      'Father, how many Cheryls are sitting in our churches right now, faithful in attendance, hollow in assurance? Send Your Word with such clarity that the performing stops and the receiving begins. Let the gospel do what only the gospel can do: bring the dead to life. Amen.',
    takeAction:
      'Some of the most unreached people in the world are sitting in church pews. EPW trains pastors to preach the gospel with the clarity that transforms religion into faith. Support that work at EPWUSA.org.',
  },
  {
    title: 'The Multiplication Effect',
    slug: 'the-multiplication-effect',
    date: '2026-07-09',
    author: 'Equipping Pastors Worldwide',
    category: 'Devotions',
    scriptureReference: '2 Timothy 2:2 (ESV)',
    scriptureText:
      'What you have heard from me... entrust to faithful men, who will be able to teach others also.',
    featuredImage: '/images/devotions/multiplication-effect-uganda.jpg',
    featuredImageCaption: 'Ema Magambo, preaching workshop, Uganda',
    excerpt:
      'Twenty years ago, one UK trainer partnered with Emmanuel Magambo in Uganda. Today Uganda hosts 15 to 20 EPW training events a year, and nearly all of them are led by Ugandans.',
    body: [
      'Twenty years ago, one UK trainer partnered with Emmanuel Magambo in Uganda to train pastors. Today, Uganda hosts 15-20 EPW training events annually, but only two involve international trainers. The rest? Ugandan brothers trained by Emmanuel now training others. This is 2 Timothy 2:2 in action.',
      'Last week, 53 pastors gathered near Kampala. Three Ugandan trainers, all products of EPW’s investment, taught them to preach through narratives and combat the prosperity gospel. Emmanuel now receives invitations from the DRC, where entire denominations say: “Your teaching is electric. We’ve never heard anything like this. Please come.” One partnership, two decades ago, is now reaching across borders and multiplying exponentially.',
      'This is how the Kingdom advances. Not through Western dependency, but through equipped local leaders who train faithful men who teach others also. Pastor Miga in Zambia learned expositional preaching, went home, preached through Mark’s Gospel, and planted a church. The pattern repeats: one trained pastor feeds a congregation, disciples leaders, and multiplies the work. Your investment doesn’t just help one man. It creates a pipeline of faithful preachers for generations.',
    ],
    prayer:
      'Father, thank You for the multiplication of Your Word. Bless those training others to train others. May every dollar, every prayer, every partnership create exponential Kingdom impact. Raise up more Emmanuels. In Jesus’ name, Amen.',
    takeAction:
      'Partner with EPW at EPWUSA.org. Adopt a training program and watch one investment multiply across regions, generations, and eternity. Give now.',
  },
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
