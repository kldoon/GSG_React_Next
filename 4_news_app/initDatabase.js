/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require('better-sqlite3');

// To run this file (only run it one time), use node ./initDatabase.js

const db = sql('news.db');

const dummyArticles = [
  {
    id: 1,
    title: 'Local Election Results Announced',
    slug: 'local-election-results-2025',
    image: '/images/election.jpg',
    summary: 'Final results from the 2025 local elections show surprising shifts in voter preferences.',
    content: `
    The local elections concluded yesterday with a turnout of 68%. 
    Key winners include Jane Doe for mayor and several new council members. 
    Full breakdown available on the official city website.
  `,
    author: 'Sarah Miller',
    author_email: 'sarahmiller@example.com',
    date: 1740787200000, // March 1, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 2,
    title: 'New Tech Hub Opens Downtown',
    slug: 'tech-hub-opening',
    image: '/images/tech-hub.jpg',
    summary: 'A state-of-the-art technology center opened today, promising 500 new jobs.',
    content: `
    The ribbon-cutting ceremony took place at 10 AM, attended by local officials. 
    The hub will focus on AI and green tech innovations.
  `,
    author: 'Tom Wilson',
    author_email: 'tomwilson@example.com',
    date: 1740700800000, // Feb 28, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 3,
    title: 'Weather Alert: Storm Approaching',
    slug: 'storm-alert-march-2025',
    image: '/images/storm.jpg',
    summary: 'Meteorologists warn of heavy rain and winds expected this weekend.',
    content: `
    Residents are advised to prepare for potential flooding. 
    Emergency services are on standby.
  `,
    author: 'Lisa Chen',
    author_email: 'lisachen@example.com',
    date: 1740787200000, // March 1, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 4,
    title: 'Breakthrough in Renewable Energy',
    slug: 'renewable-energy-breakthrough',
    image: '/images/solar.jpg',
    summary: 'Scientists unveil a new solar panel design with 30% higher efficiency.',
    content: `
    The innovation could revolutionize the renewable energy sector. 
    Testing begins next month with commercial rollout planned for 2026.
  `,
    author: 'Dr. Emily Rogers',
    author_email: 'emilyrogers@example.com',
    date: 1740614400000, // Feb 27, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 5,
    title: 'City Marathon Sets New Record',
    slug: 'city-marathon-2025',
    image: '/images/marathon.jpg',
    summary: 'Over 10,000 runners participated in the annual city marathon.',
    content: `
    The event raised $500,000 for local charities. 
    Winner John Smith finished in a record-breaking 2:15:32.
  `,
    author: 'Mike Johnson',
    author_email: 'mikejohnson@example.com',
    date: 1740528000000, // Feb 26, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 6,
    title: 'New Art Gallery Opens',
    slug: 'art-gallery-opening',
    image: '/images/gallery.jpg',
    summary: 'A modern art gallery featuring local artists debuted today.',
    content: `
    The opening exhibition showcases 50 works across various mediums. 
    Free entry for the first week attracts large crowds.
  `,
    author: 'Clara Evans',
    author_email: 'claraevans@example.com',
    date: 1740873600000, // March 2, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 7,
    title: 'Stock Market Hits All-Time High',
    slug: 'stock-market-record',
    image: '/images/stocks.jpg',
    summary: 'The national index soared past 40,000 points yesterday.',
    content: `
    Tech and energy sectors led the surge. 
    Analysts predict cautious optimism for the coming months.
  `,
    author: 'Robert Lee',
    author_email: 'robertlee@example.com',
    date: 1740700800000, // Feb 28, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 8,
    title: 'Rare Bird Spotted in National Park',
    slug: 'rare-bird-sighting',
    image: '/images/bird.jpg',
    summary: 'Birdwatchers flock to see a species not seen here in decades.',
    content: `
    The sighting of the elusive azure-winged hawk has excited ornithologists. 
    Park officials urge visitors to respect wildlife habitats.
  `,
    author: 'Anna Patel',
    author_email: 'annapatel@example.com',
    date: 1740960000000, // March 3, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 9,
    title: 'New Public Transit Line Approved',
    slug: 'transit-line-approval',
    image: '/images/transit.jpg',
    summary: 'City council greenlights a $200M subway extension project.',
    content: `
    The new line will connect downtown to the eastern suburbs. 
    Construction is set to begin in Q3 2025.
  `,
    author: 'David Kim',
    author_email: 'davidkim@example.com',
    date: 1740614400000, // Feb 27, 2025 00:00:00 UTC
    category: 'global'
  },
  {
    id: 10,
    title: 'Annual Film Festival Kicks Off',
    slug: 'film-festival-2025',
    image: '/images/film.jpg',
    summary: 'The 25th annual film festival opens with a star-studded gala.',
    content: `
    Over 100 films will be screened over the next 10 days. 
    Highlights include a retrospective of director Mia Torres’ work.
  `,
    author: 'Sophie Brown',
    author_email: 'sophiebrown@example.com',
    date: 1740873600000, // March 2, 2025 00:00:00 UTC
    category: 'global'
  },
];

const insertData = () => {
  const insertCommand = db.prepare(`
    INSERT INTO articles VALUES (
      @id,
      @slug,
      @title,
      @image,
      @summary,
      @content,
      @author,
      @author_email,
      @date
      @category
    )`);

  for (const article of dummyArticles) {
    insertCommand.run(article);
  }
}

const prepNews = () => {
  db.prepare(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    author_email TEXT NOT NULL,
    date INTEGER NOT NULL
    category TEXT NOT NULL
  ) `).run();

  insertData();
}

const prepUsers = () => {
  db.prepare(`
      CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      displayName TEXT NOT NULL
  );
`).run();

  db.prepare(`
  INSERT INTO users (email, password, role, displayName) VALUES
    ('admin@example.com', '1234', 'admin', 'Khaldoun Khaled'),
    ('editor@example.com', '1234', 'editor', 'Waleed Jameel'),
    ('sub1@example.com', '1234', 'subscriber', 'Ahmad Saeed');

    `).run();
}

prepUsers();