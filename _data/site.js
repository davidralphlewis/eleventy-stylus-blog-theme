module.exports = {
  meta: {
    title: "David Ralph Lewis",
    description: "Poet & Writer",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Latest posts from David Ralph Lewis",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "David Ralph Lewis",
    authorEmail: "contact@davidralphlewis.co.uk"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "David Ralph Lewis",
    description: "Poet & Writer"
  }
}