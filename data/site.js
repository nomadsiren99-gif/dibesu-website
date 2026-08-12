// ============================================================
//  SITE CONTENT — edit everything here.
//  name:       shown in the nav / logo
//  projects:   your portfolio. image → /public/images/projects/<file>
//  Each project can hold: story (the meaning behind the work),
//  challenge, approach, timeline and a gallery.
// ============================================================

export const site = {
  name: "Dibesu",
  metaTitle: "Dibesu — Brand & Graphic Designer",
  metaDescription:
    "Brand & graphic designer crafting bold identities, packaging, and visual systems that make brands unforgettable.",
  email: "hello@yourdomain.com",
  phone: "+1 (555) 123-4567",
  location: "Kathmandu, Nepal",
  available: "Available for freelance — 2026",
  tagline: "Brand & Graphic Designer",

  heroLines: ["I Transform", "Brands to"],
  heroWords: ["An Icon", "Story"],

  // Drop your showreel mp4 into public/videos/ and it plays here.
  // The section overlaps the hero bottom half and slides fully into
  // view as you scroll.
  showreel: {
    video: "/videos/showreel.mp4",
    poster: "/images/projects/project-2.svg",
    year: "2026",
    caption:
      "A 60-second cut of recent work — identity, packaging, and print.",
  },

  marquee: [
    "Brand Identity",
    "Logo Design",
    "Packaging",
    "Art Direction",
    "Typography",
    "Print Design",
    "Illustration",
    "Brand Strategy",
  ],

  about: {
    eyebrow: "About me",
    heading: "I believe good design is <em>felt</em>, not just seen.",
    body: "I'm a brand and graphic designer with [X] years of experience helping startups and established companies find their voice. I turn strategy into visual language — building identities, packaging, and campaigns that people remember.<br/><br/>Every project starts with a question: what does this brand want people to feel? The answer becomes a system — typography, color, form — that works across every touchpoint.",
    stats: [
      { value: "8+", label: "Years designing" },
      { value: "120", label: "Projects shipped" },
      { value: "40+", label: "Happy clients" },
      { value: "6", label: "Design awards" },
    ],
    process: [
      { step: "01", name: "Discover", desc: "Research, interviews and brand audits. I dig into what makes you different before touching a canvas." },
      { step: "02", name: "Define", desc: "Strategy, moodboards and concept direction. We agree on the feeling before the visuals." },
      { step: "03", name: "Design", desc: "Logos, type, color and systems. Iterative exploration until every choice earns its place." },
      { step: "04", name: "Deliver", desc: "Full guidelines, assets and hand-off files — ready for real-world application." },
    ],
    services: [
      { name: "Brand Strategy", desc: "Positioning, naming, messaging & story" },
      { name: "Visual Identity", desc: "Logos, color systems, typography & guidelines" },
      { name: "Packaging", desc: "Shelf-ready design that sells" },
      { name: "Art Direction", desc: "Campaigns, photography & content direction" },
      { name: "Print Design", desc: "Editorial, posters & collateral" },
    ],
  },

  // Logo files → put your coloured logos in public/images/clients/
  // (e.g. client-01.svg). They show greyscale and become coloured on hover.
  clients: [
    { name: "Client 01", logo: "/images/clients/client-01.svg" },
    { name: "Client 02", logo: "/images/clients/client-02.svg" },
    { name: "Client 03", logo: "/images/clients/client-03.svg" },
    { name: "Client 04", logo: "/images/clients/client-04.svg" },
    { name: "Client 05", logo: "/images/clients/client-05.svg" },
    { name: "Client 06", logo: "/images/clients/client-06.svg" },
    { name: "Client 07", logo: "/images/clients/client-07.svg" },
    { name: "Client 08", logo: "/images/clients/client-08.svg" },
  ],

  socials: [
    { label: "Instagram", url: "https://instagram.com/dibesu.s" },
    { label: "Behance", url: "https://behance.com/dibesu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dibesu/" },
  ],

  // image → put the file inside public/images/projects/
  // Cards keep a consistent 4:3 crop automatically.
  // slug → becomes the case-study URL /work/<slug>
  // story   → array of paragraphs: the meaning behind the work
  // timeline → [ { period, title, body } ] — how the work unfolded
  // gallery → extra images shown on the case-study page
  projects: [
    {
      title: "Project One",
      slug: "project-one",
      category: "Brand Identity",
      sector: "Fashion",
      year: "2026",
      featured: true,
      image: "project-1.svg",
      description: "Full identity system — logo, palette, type, collateral.",
      intro: "An identity system built on the confidence of clean geometry and bold color.",
      story: [
        "Project One started with a simple question: how do you make a fashion label feel both timeless and electric? The answer lived in contrast — a strict, engineered grid paired with a saturated, unapologetic accent color.",
        "Every element of the system was built to flex. The logo scales from a garment tag to a storefront; the palette carries campaigns, packaging and digital equally. Nothing was added without asking what it communicates.",
      ],
      challenge: {
        title: "The challenge",
        body: "The brand had grown faster than its identity. Materials from three different agencies meant five fonts, four blues and no coherent voice. We needed one system that could hold it all together — and still feel alive.",
      },
      approach: {
        title: "The approach",
        body: "We distilled the brand down to three words — precise, electric, human — and let those drive every decision. Typography was reduced to two families, color to one hero hue with a neutral support system, and a modular grid that keeps every application consistent without feeling repetitive.",
      },
      services: ["Brand Strategy", "Visual Identity", "Art Direction", "Guidelines"],
      timeline: [
        { period: "Week 1", title: "Discovery", body: "Stakeholder interviews and a full brand audit across every touchpoint." },
        { period: "Week 2–3", title: "Direction", body: "Three concept routes explored on moodboards, narrowed to one by instinct and data." },
        { period: "Week 4–6", title: "Design", body: "Logo system, type scale, color ramp and layout grids built out." },
        { period: "Week 7–8", title: "Delivery", body: "Guidelines document, asset packs and rollout across packaging and digital." },
      ],
      gallery: ["project-1-2.svg", "project-1.svg"],
    },
    {
      title: "Project Two",
      slug: "project-two",
      category: "Packaging",
      sector: "Food & Beverage",
      year: "2025",
      featured: true,
      image: "project-2.svg",
      description: "Shelf packaging system for a craft coffee roaster.",
      intro: "Packaging that tells the story of the bean — before you even read the label.",
      story: [
        "Coffee is bought with the eyes first. Project Two was about turning a crowded supermarket shelf into a quiet, confident moment for the brand.",
        "The label system uses a single structure that scales across nine blends, each distinguished by a hand-drawn motif referencing its origin. The palette is raw, warm and paper-toned — closer to the roasting shed than the boardroom.",
      ],
      challenge: {
        title: "The challenge",
        body: "Nine blends, nine origins, one brand. The client needed packaging that celebrated each coffee's story without losing a unified shelf presence.",
      },
      approach: {
        title: "The approach",
        body: "A rigid label grid creates the family; origin motifs and a secondary color code the individual blends. Materials were chosen to feel honest — uncoated stock, soy inks, minimal embellishment.",
      },
      services: ["Packaging", "Illustration", "Print Design"],
      timeline: [
        { period: "Week 1", title: "Shelf audit", body: "Reviewed 200+ SKUs on the same shelf to find the gap." },
        { period: "Week 2–4", title: "Label system", body: "Modular label architecture with origin motifs for all nine blends." },
        { period: "Week 5", title: "Prototyping", body: "Mockups printed on real stock and tested under shop lighting." },
      ],
      gallery: ["project-2-2.svg", "project-2.svg"],
    },
    {
      title: "Project Three",
      slug: "project-three",
      category: "Logo",
      sector: "Tech",
      year: "2025",
      featured: true,
      image: "project-3.svg",
      description: "Wordmark + mark explorations for a SaaS startup.",
      intro: "A wordmark engineered for screens as small as a favicon and as wide as a billboard.",
      story: [
        "For a SaaS startup, the logo is the handshake. Project Three explored 40+ directions before landing on a wordmark that lives beautifully in every context the product touches.",
        "The final mark is drawn on a strict grid with optically-tuned spacing. A subtle kinetic cut in the letterforms nods to the product's core promise — speed without friction.",
      ],
      challenge: {
        title: "The challenge",
        body: "The name is long, the app is minimal, and the logo has to survive a 16px favicon and a stadium screen with equal grace.",
      },
      approach: {
        title: "The approach",
        body: "Type-first thinking: a custom-tuned wordmark over a pictorial symbol. Weight, counter-spacing and terminals were all engineered for small screens first, then scaled up.",
      },
      services: ["Logo Design", "Typography"],
      timeline: [
        { period: "Week 1–2", title: "Exploration", body: "40+ sketches and digital directions across type-led and symbol-led routes." },
        { period: "Week 3", title: "Refinement", body: "Three finalists engineered for legibility and distinctiveness." },
        { period: "Week 4", title: "System", body: "Clearance rules, color-on-color logic and favicon tile." },
      ],
      gallery: ["project-3-2.svg", "project-3.svg"],
    },
    {
      title: "Project Four",
      slug: "project-four",
      category: "Print Design",
      sector: "Editorial",
      year: "2024",
      image: "project-4.svg",
      description: "Editorial layout & poster campaign.",
      intro: "An editorial system that lets typography carry the argument.",
      story: [
        "Great editorial design is invisible infrastructure — the reader should feel the argument, not the layout. Project Four built a typographic system where hierarchy does all the talking.",
        "A display face sized in huge, confident steps pairs with a quiet text face. White space becomes a design material as important as ink.",
      ],
      challenge: {
        title: "The challenge",
        body: "Dense, wordy content that had to feel light and inviting — and a print budget that forbade color on every page.",
      },
      approach: {
        title: "The approach",
        body: "A strict baseline grid, a two-family type system, and a monochrome palette with one accent used only for key moments. Posters extended the identity beyond the page.",
      },
      services: ["Print Design", "Typography", "Art Direction"],
      timeline: [
        { period: "Week 1", title: "Grid study", body: "Custom baseline grid designed around the content density." },
        { period: "Week 2–4", title: "Layouts", body: "Master pages, folios and template set for the full issue." },
        { period: "Week 5", title: "Campaign", body: "Poster series adapted from the editorial identity." },
      ],
      gallery: ["project-4-2.svg", "project-4.svg"],
    },
    {
      title: "Project Five",
      slug: "project-five",
      category: "Brand Identity",
      sector: "Beauty",
      year: "2024",
      image: "project-5.svg",
      description: "Elevated skincare brand system.",
      intro: "Skin-first design — minimal, tactile, and quietly luxurious.",
      story: [
        "Beauty packaging lives on emotion and touch. Project Five traded the category's clinical clichés for warmth — soft ceramic tones, rounded type and generous negative space.",
        "The system extends from the jar to the shelf, always letting the product and its texture do the talking.",
      ],
      challenge: {
        title: "The challenge",
        body: "A saturated market of 'clinical white' brands. The client needed to feel premium without copying the giants.",
      },
      approach: {
        title: "The approach",
        body: "A warm, considered palette and a serif with real personality. Every asset — from label to social template — shares one grammar.",
      },
      services: ["Brand Strategy", "Visual Identity", "Packaging"],
      timeline: [
        { period: "Week 1", title: "Feeling audit", body: "Sensory workshops to define how the brand should feel in the hand." },
        { period: "Week 2–4", title: "Identity", body: "Logo, palette and packaging direction." },
        { period: "Week 5–6", title: "Rollout", body: "Campaign art direction and launch assets." },
      ],
      gallery: ["project-5-2.svg", "project-5.svg"],
    },
    {
      title: "Project Six",
      slug: "project-six",
      category: "Packaging",
      sector: "Beverage",
      year: "2023",
      image: "project-6.svg",
      description: "Labeling and can design for a craft brewery.",
      intro: "Can art that respects the liquid inside — and the culture around it.",
      story: [
        "Craft beer cans are a gallery wall. Project Six gave each brew its own bold illustration while a shared label structure kept the six-pack family instantly recognizable.",
        "The artwork leans into local visual culture with a modern hand — bold shapes, loud type, and a wink in every detail.",
      ],
      challenge: {
        title: "The challenge",
        body: "Six distinct brews, one fridge door. Each can had to be individual yet obviously part of the same family.",
      },
      approach: {
        title: "The approach",
        body: "A fixed label skeleton with a per-brew illustration core. Color codes the strength and style, so regulars can find their beer at a glance.",
      },
      services: ["Packaging", "Illustration"],
      timeline: [
        { period: "Week 1–2", title: "Brew stories", body: "Sat with the brewers to understand each beer's personality." },
        { period: "Week 3–5", title: "Can art", body: "Illustration system across all six SKUs." },
        { period: "Week 6", title: "Production", body: "Spot-UV and matte varnish proofs approved." },
      ],
      gallery: ["project-6-2.svg", "project-6.svg"],
    },
    {
      title: "Project Seven",
      slug: "project-seven",
      category: "Illustration",
      sector: "Music",
      year: "2023",
      image: "project-7.svg",
      description: "Album artwork and merch illustration.",
      intro: "Cover art that sounds as loud as the record.",
      story: [
        "An album cover is a promise about the music before a single note plays. Project Seven translated the record's central image — a city at 3am — into layered, neon-edged illustration.",
        "The artwork recurs across merch, vinyl and streaming canvas, keeping the world of the record consistent everywhere it appears.",
      ],
      challenge: {
        title: "The challenge",
        body: "One image needed to survive as a thumbnail on streaming platforms and as a 12-inch vinyl sleeve.",
      },
      approach: {
        title: "The approach",
        body: "Bold composition and high-contrast color that reads at any size, built around a central symbol that also anchors the merch line.",
      },
      services: ["Illustration", "Art Direction"],
      timeline: [
        { period: "Week 1", title: "Listening", body: "Sessions with the artist to map the record's visual language." },
        { period: "Week 2–4", title: "Cover", body: "Composition, palette and final illustration." },
        { period: "Week 5", title: "Merch", body: "Tee, vinyl and digital canvas adaptations." },
      ],
      gallery: ["project-7-2.svg", "project-7.svg"],
    },
    {
      title: "Project Eight",
      slug: "project-eight",
      category: "Art Direction",
      sector: "Campaign",
      year: "2022",
      image: "project-8.svg",
      description: "360° campaign across print and social.",
      intro: "One idea, every surface — a campaign system built to be remixed.",
      story: [
        "The best campaigns are systems, not posters. Project Eight built a modular idea — a single gesture repeated — that flexed across billboards, social and even in-store.",
        "Each application reused the same components in new arrangements, so the campaign never looked the same twice but always felt like one voice.",
      ],
      challenge: {
        title: "The challenge",
        body: "A limited budget across many channels. The creative had to be cheap to produce and instantly recognizable.",
      },
      approach: {
        title: "The approach",
        body: "One strong, repeatable visual device; typographic rules that allow infinite layouts; templates so every touchpoint ships fast.",
      },
      services: ["Art Direction", "Campaign", "Print Design"],
      timeline: [
        { period: "Week 1", title: "Idea", body: "Creative concept and single-frame film still." },
        { period: "Week 2–3", title: "System", body: "Modular layouts and channel templates." },
        { period: "Week 4", title: "Rollout", body: "OOH, print, social and in-store delivered." },
      ],
      gallery: ["project-8-2.svg", "project-8.svg"],
    },
  ],
};

export const categories = ["All", ...new Set(site.projects.map((p) => p.category))];
