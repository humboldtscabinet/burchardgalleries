export const navItems = [
  { label: "Home", href: "/" },
  { label: "Browse auctions", href: "/auctions" },
  { label: "Departments", href: "/departments" },
  { label: "How to bid", href: "/bidders" },
  { label: "Consign", href: "/consign" },
  { label: "About", href: "/about" },
];

export const contact = {
  address: "2522 30th Avenue North, St. Petersburg, Florida 33713",
  phone: "727-821-1167",
  email: "mail@BurchardGalleries.com",
  license: "Florida License #AU322 / AB169",
};

export const externalLinks = {
  calendar: "https://www.burchardgalleries.com/fcalend.htm",
  mailingList: "http://www.burchardgalleries.com/femail.htm",
  archives: "http://www.burchardgalleries.com/fcatalog.htm",
  radio: "http://am860theanswer.com/",
};

export const auctionHighlights = [
  {
    title: "Auction Calendar & Catalogs",
    description:
      "Live and online gallery auctions featuring fine art, jewelry, estates, and mid-century design. Review catalogues and register to bid.",
    action: "View calendar & catalogs",
    href: externalLinks.calendar,
    tag: "Live & online bidding",
    image: "/placeholders/auction-room.svg",
  },
  {
    title: "Now Accepting Consignments",
    description:
      "Estate liquidation specialists for antiques, fine art, jewelry, and 20th century decorative arts. White-glove handling from valuation to settlement.",
    action: "Schedule a valuation",
    href: "#consign",
    tag: "Confidential & insured",
    image: "/placeholders/art-lot.svg",
  },
];

export const departments = [
  { name: "Watches & Clocks", description: "Fine timepieces, vintage watches, and precision instruments." },
  { name: "Furniture & Design", description: "Antique and modern furniture, lighting, and decorative pieces." },
  { name: "Fine Art & Paintings", description: "American, European, and contemporary paintings and sculptures." },
  { name: "Jewelry & Gems", description: "Estate diamonds, signed pieces, and gemological specimens." },
  { name: "Porcelain & Pottery", description: "Fine china, ceramics, and decorative earthenware." },
  { name: "Fashion & Vintage", description: "Designer clothing, accessories, and vintage fashion collectibles." },
  { name: "Books & Manuscripts", description: "Rare books, autographed editions, and historical documents." },
  { name: "Coins & Banknotes", description: "Numismatic collections, rare coins, and currency." },
  { name: "Asian Art", description: "Chinese ceramics, bronzes, screens, and works of art." },
  { name: "Decorative Arts", description: "Silver, glass, objets d'art, and period furnishings." },
  { name: "Music & Instruments", description: "Vintage instruments, audio equipment, and vinyl records." },
  { name: "Collectibles & Toys", description: "Toy collections, memorabilia, and specialized collections." },
];

export const services = [
  {
    title: "Estate & Collection Strategy",
    description: "Room-by-room review, fair-market guidance, and a custom auction plan for heirs, fiduciaries, and collectors.",
  },
  {
    title: "Cataloging & Presentation",
    description: "Professional photography, research-driven descriptions, and targeted marketing to qualified bidders.",
  },
  {
    title: "Licensed Auctioneers",
    description: "Florida licensed auction house with gallery, phone, absentee, and online bidding support.",
  },
  {
    title: "Appraisals & Valuations",
    description: "Insurance and estate valuations with clear reporting and settlement transparency.",
  },
  {
    title: "Logistics & Care",
    description: "Onsite packing, transport, climate-aware storage, and white-glove handling throughout consignment.",
  },
  {
    title: "Post-Sale Services",
    description: "Settlement statements, proceeds disbursement, and coordination of shipping or pickup with bidders.",
  },
];

export const bidderResources = [
  {
    title: "Register to Bid",
    description: "Bid in-gallery, by phone, absentee, or online. Contact the gallery to set up your bidding profile.",
    action: "Call to register",
    href: `tel:${contact.phone}`,
  },
  {
    title: "Preview & Condition",
    description: "Schedule previews at the St. Petersburg gallery. Written condition notes available on request.",
    action: "Email for details",
    href: `mailto:${contact.email}`,
  },
  {
    title: "Payments & Pickup",
    description: "We coordinate secure payment, packing, and release. Local and long-distance options arranged through trusted shippers.",
    action: "Plan logistics",
    href: "#contact",
  },
  {
    title: "Mailing List",
    description: "Receive upcoming auction announcements and catalog releases via email.",
    action: "Join mailing list",
    href: externalLinks.mailingList,
  },
  {
    title: "Auction Archives",
    description: "Browse past catalogues and realized results for reference across departments.",
    action: "View archives",
    href: externalLinks.archives,
  },
  {
    title: "Sunday Radio Show",
    description: "Listen live to the weekly antiques radio hour, Sundays 10–11 AM on WGUL 860 AM / WLSS 93.7 FM.",
    action: "Stream the show",
    href: externalLinks.radio,
  },
];

export const consignSteps = [
  {
    title: "Talk with the specialists",
    description: "Call or email with photos and a short list. We respond quickly with next steps and timing.",
  },
  {
    title: "Review & plan",
    description: "In-gallery or onsite review, valuation ranges, and a sale calendar tailored to your collection.",
  },
  {
    title: "Catalog & sell",
    description: "Photography, marketing, licensed auctioneers, and transparent settlement after the sale.",
  },
];

export const quickFacts = [
  "Estate liquidation specialists for antiques, fine art, jewelry, and 20th century decorative arts.",
  "Gallery and online bidding with phone and absentee options supported by the St. Petersburg team.",
  contact.license,
];
