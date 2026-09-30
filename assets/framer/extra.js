// Projects added outside Framer.
//
// The portfolio's projects live in Framer's hosted CMS, which can't be edited
// from this repo. The patched page modules next to this file (home.js,
// projects.js, work.js) merge these entries into the CMS results so they
// render through the exact same Framer components as every other project.
// Fields use the CMS collection's field ids (see shared-lib's schema).
import { c as jsx, l as jsxs } from "https://framerusercontent.com/sites/orbq57jDWhYob2Rl8cF18/react.BtJvqsG_.mjs";

// Category ids: a CMS enum id shows that option's name; the others are ours.
const UI_UX = "sxgtoDYb1";
const CATEGORY_NAMES = { "extra-startup": "Startup", "extra-club-project": "Club Project" };

// Absolute URLs: Framer's image lightbox parses src with `new URL()`.
const asset = (dir, file) => new URL(`../${dir}/${file}`, import.meta.url).href;

const image = (dir, file, pixelWidth, pixelHeight, alt = "") => ({
  src: asset(dir, file),
  pixelWidth,
  pixelHeight,
  alt,
});

// Rich text in the shape Framer's CMS hands RichText: one fragment of plain
// elements. RichText adds the framer-text and style-preset classes itself.
function richText(dir) {
  let key = 0;
  const el = (type, props) => jsx(type, props, String(key++));
  const strong = (text) => el("strong", { children: text });
  return {
    strong,
    link: (href, text) => el("a", { href, target: "_blank", rel: "noopener", children: strong(text) }),
    h3: (children) => el("h3", { dir: "auto", children }),
    p: (children) => el("p", { dir: "auto", children }),
    img: (file, width, height) =>
      el("img", {
        alt: "",
        width: String(width / 2),
        height: String(height / 2),
        src: asset(dir, file),
        className: "framer-image",
        style: { aspectRatio: `${width} / ${height}` },
      }),
    story: (...children) => jsxs(Symbol.for("react.fragment"), { children }),
  };
}

// Newest first; this is also their order on the homepage and /projects.
const PROJECTS = [
  {
    dir: "toolqit",
    item: {
      id: "extra-toolqit",
      hOirPTlDa: "toolqit", // Title
      SYvt2h1be: "toolqit", // Slug
      VN2LPxLHa: "extra-startup", // Category
      ILPCEpc8m: "2026", // Year
      IVgGgiTaT: "rgb(246, 245, 240)", // Card color
      Z2dE6vuAD: "rgb(15, 15, 15)", // Card text color
      DraFyeEcZ: image("toolqit", "cover.jpg", 2400, 1520), // Title image
      R6qF3bnYe: "An AI workspace for managed IT service providers, from the product console to toolqit.ai", // Description
    },
    detail: ({ strong, link, h3, p, img, story }) => ({
      IVgGgiTaT: "rgb(192, 138, 110)", // Accent color on the project page
      dcue79jTa: "", // Timeline (empty hides it)
      wZpCkAO60: "Figma, Next.js, Tailwind", // Tools
      Fs7yQqCjg:
        "MSP technicians juggle a PSA, an RMM, documentation, and a pile of vendor portals to close a single ticket. Every tab switch costs context, and every new tech has to learn where everything lives.", // Problem
      hK8KIMByS:
        "Toolqit pulls tickets, devices, docs, and workflows into one console, with AI that triages each ticket and drafts the workflow to resolve it. I worked on the product's new interface and on the marketing site that shows it off.", // Solution
      smLRw0JBP: story(
        h3(link("https://www.toolqit.ai", "Live Developed Site Link")),
        h3(
          "Toolqit's promise is that techs never open another tab, so the interface has to carry a lot without feeling heavy. I worked on the new UI across the console (tickets, dashboards, workflows, and sign-in) and then on toolqit.ai, where the hero plays the real console instead of a static screenshot.",
        ),
        img("workflows.jpg", 2400, 1500),
        p([
          "The ",
          strong("product"),
          " moved to a calmer, flatter system: a plum accent, light and dark themes, loading skeletons shaped like the page they stand in for, and one command palette shared by the technician and MSP views.",
        ]),
        img("operations.jpg", 2400, 1500),
        p([
          "On the ",
          strong("landing page"),
          ", each technician tab (Triage, Workflows, Documentation, and Ask) animates through a real task, and the product windows scale to fit phones and tablets instead of shrinking into a thumbnail.",
        ]),
        img("integrations.jpg", 2400, 1500),
        p([
          "I built the site with a teammate in Next.js and Tailwind, adding the integrations dial, the booking dialog, and the legal pages along the way.",
        ]),
      ),
      XT4RwU7If: [
        { id: "toolqit-gallery-1", W_vjJFHnh: image("toolqit", "landing-hero.jpg", 2400, 1520, "Landing Page Hero") },
        { id: "toolqit-gallery-2", W_vjJFHnh: image("toolqit", "triage.jpg", 2400, 1520, "Ticket Triage") },
        { id: "toolqit-gallery-3", W_vjJFHnh: image("toolqit", "mobile.jpg", 1425, 1775, "Mobile") },
      ],
    }),
  },
  {
    dir: "blockchain-at-berkeley",
    // The phone card's title column is ~226px at 64px type; the full name
    // would break mid-word there.
    phoneTitle: "b@b",
    item: {
      id: "extra-blockchain-at-berkeley",
      hOirPTlDa: "blockchain at berkeley",
      SYvt2h1be: "blockchain-at-berkeley",
      VN2LPxLHa: "extra-club-project",
      ILPCEpc8m: "2026",
      IVgGgiTaT: "rgb(18, 18, 18)",
      Z2dE6vuAD: "rgb(254, 203, 51)",
      DraFyeEcZ: image("blockchain-at-berkeley", "cover.jpg", 2400, 1520),
      R6qF3bnYe: "A new website for Blockchain at Berkeley, UC Berkeley's student-run blockchain organization",
    },
    detail: ({ strong, link, h3, p, img, story }) => ({
      IVgGgiTaT: "rgb(254, 203, 51)",
      dcue79jTa: "6 months",
      wZpCkAO60: "Figma, Next.js, Three.js",
      Fs7yQqCjg:
        "Blockchain at Berkeley does a lot at once: consulting for companies like Ripple and Coinbase, original research, a DeCal, and a design branch. For prospective members and partners, the challenge was seeing all of that in one place, in a way that felt as technical as the work itself.",
      hK8KIMByS:
        "The new site is a dark, editorial home for the club built on B@B's black-and-gold identity. Live ASCII visuals made of hashes and block data give every section a crypto-native texture, while a simple structure takes visitors from curious to applying in a few scrolls.",
      smLRw0JBP: story(
        h3(link("https://blockchain.berkeley.edu", "Live Developed Site Link")),
        h3(
          "The goal with the new Blockchain at Berkeley site was to make a ten-year-old club feel as technical as the work its members ship. I kept B@B's black-and-gold identity and built the visual language around the thing every blockchain runs on: hashes.",
        ),
        img("about.jpg", 2400, 1500),
        p([
          "The ",
          strong("landing page"),
          " was the biggest piece. The B@B mark and the Campanile are real 3D models rendered with Three.js, then redrawn as live ASCII glyphs sampled from their brightness, so the hero is literally built out of churning hex hashes, nonces, and block keywords.",
        ]),
        img("clients.jpg", 2400, 1500),
        p([
          "For ",
          strong("recruitment"),
          ", the priority was making it easy to talk to real people. The apply page lays out the Fall 2026 timeline next to a wall of coffee-chat cards that pull live from the club's Notion roster through a Cloudflare Worker, with a saved snapshot as a fallback so the page never shows up empty.",
        ]),
        img("timeline.jpg", 2400, 1500),
        p([
          "Under the hood it's a static Next.js export that deploys to Berkeley's Open Computing Facility on every push. I led the design and most of the front-end, with a few other B@B members contributing department pages and pieces of the apply flow.",
        ]),
      ),
      XT4RwU7If: [
        { id: "bab-gallery-1", W_vjJFHnh: image("blockchain-at-berkeley", "landing-hero.jpg", 2400, 1520, "Landing Page Hero") },
        { id: "bab-gallery-2", W_vjJFHnh: image("blockchain-at-berkeley", "coffee-chats.jpg", 2400, 1520, "Recruitment & Coffee Chats") },
        { id: "bab-gallery-3", W_vjJFHnh: image("blockchain-at-berkeley", "mobile.jpg", 1425, 1775, "Mobile") },
      ],
    }),
  },
  {
    dir: "vrchat",
    item: {
      id: "extra-vrchat",
      hOirPTlDa: "vrchat",
      SYvt2h1be: "vrchat",
      VN2LPxLHa: UI_UX,
      ILPCEpc8m: "2026",
      IVgGgiTaT: "rgb(170, 29, 245)",
      Z2dE6vuAD: "rgb(255, 255, 255)",
      DraFyeEcZ: image("vrchat", "cover.jpg", 2400, 1520),
      R6qF3bnYe: "A redesign concept for VRChat's website, from the marketing page to finding worlds and events",
    },
    detail: ({ strong, h3, p, img, story }) => ({
      IVgGgiTaT: "rgb(191, 85, 247)",
      dcue79jTa: "",
      wZpCkAO60: "Figma",
      Fs7yQqCjg:
        "VRChat has millions of players and endless worlds, but getting in is the hard part. New players don't know where to start, and regulars rely on word of mouth to find the worlds and events worth their time.",
      hK8KIMByS:
        "A redesign built around discovery. The marketing page walks new players from download to their first event in four steps, and new Experiences and Events pages turn the catalog into something you can browse by mood, see what friends are playing, and RSVP to.",
      smLRw0JBP: story(
        h3(
          "VRChat's community is its best feature, so I wanted the site to feel like the worlds people build there: loud, colorful, and full of people. Every section leans on real in-game scenes, with chat bubbles from the kind of conversations you actually hear in VRChat.",
        ),
        img("steps.jpg", 2400, 1540),
        p([
          "The ",
          strong("marketing page"),
          " is a guided on-ramp: four steps from download to your first event, then sections on avatars, worlds, and communities, each paired with the device it happens on.",
        ]),
        img("identity.jpg", 2400, 1349),
        p([
          "For ",
          strong("Experiences"),
          " and ",
          strong("Events"),
          ", the priority was browsing. Categories like Shooter, Horror, and Chill sit up top, recommended picks get a full description, and Roll the Dice drops you somewhere random when you can't decide.",
        ]),
        img("worlds.jpg", 2400, 1249),
        p([
          "Events add a personal calendar with one-tap RSVP and sharing, plus community pages for finding your people, whether that's anime, goth, or Among Us.",
        ]),
      ),
      XT4RwU7If: [
        { id: "vrchat-gallery-1", W_vjJFHnh: image("vrchat", "marketing-page.jpg", 2400, 1520, "Marketing Page") },
        { id: "vrchat-gallery-2", W_vjJFHnh: image("vrchat", "experiences.jpg", 2400, 1520, "Experiences") },
        { id: "vrchat-gallery-3", W_vjJFHnh: image("vrchat", "events.jpg", 1425, 1775, "Events") },
      ],
    }),
  },
];

const ITEMS = PROJECTS.map((project) => project.item);
const details = new Map();

function detailFor(project) {
  if (!details.has(project)) {
    details.set(project, { ...project.item, ...project.detail(richText(project.dir)) });
  }
  return details.get(project);
}

/** Display name for a category we added; undefined defers to the CMS enum. */
export function cat(value) {
  return CATEGORY_NAMES[value];
}

/** Homepage card title on phones. */
export function phoneTitle(title) {
  return PROJECTS.find((project) => project.item.hOirPTlDa === title)?.phoneTitle ?? title;
}

/** Stands in for a homepage card's CMS query, yielding one of our projects. */
export function Query({ index, children }) {
  return children([ITEMS[index]]);
}

/** /projects list. */
export function list(rows) {
  if (!rows) return rows;
  const slugs = new Set(ITEMS.map((item) => item.SYvt2h1be));
  return [...ITEMS, ...rows.filter((row) => !slugs.has(row.SYvt2h1be))];
}

/** "see also" on a project page: every other project. */
export function seeAlso(rows, currentTitle) {
  if (!rows) return rows;
  return [...ITEMS.filter((item) => item.hOirPTlDa !== currentTitle), ...rows];
}

/** Project page data: the CMS has no rows for these slugs. */
export function detailRows(pathVariables, rows) {
  const project = PROJECTS.find((p) => p.item.SYvt2h1be === pathVariables?.SYvt2h1be);
  return project ? [detailFor(project)] : rows;
}
