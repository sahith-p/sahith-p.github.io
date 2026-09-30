// Blockchain at Berkeley project entry.
//
// The portfolio's projects live in Framer's hosted CMS, which can't be edited
// from this repo. The patched page modules next to this file (home.js,
// projects.js, work.js) merge this entry into the CMS results so the project
// renders through the exact same Framer components as every other project.
import { c as jsx, l as jsxs } from "https://framerusercontent.com/sites/orbq57jDWhYob2Rl8cF18/react.BtJvqsG_.mjs";

const SLUG = "blockchain-at-berkeley";
const CATEGORY = "bab-club-project";
const LIVE_URL = "https://blockchain.berkeley.edu";
const GOLD = "rgb(254, 203, 51)";

// Absolute URLs: Framer's image lightbox parses src with `new URL()`.
const asset = (file) => new URL(`../blockchain-at-berkeley/${file}`, import.meta.url).href;

const image = (file, pixelWidth, pixelHeight, alt = "") => ({
  src: asset(file),
  pixelWidth,
  pixelHeight,
  alt,
});

// Fields use the CMS collection's field ids (see shared-lib's schema).
const item = {
  id: "bab-blockchain-at-berkeley",
  hOirPTlDa: "blockchain at berkeley", // Title
  SYvt2h1be: SLUG, // Slug
  VN2LPxLHa: CATEGORY, // Category
  ILPCEpc8m: "2026", // Year
  IVgGgiTaT: "rgb(18, 18, 18)", // Card color
  Z2dE6vuAD: GOLD, // Card text color
  DraFyeEcZ: image("cover.jpg", 2400, 1520), // Title image
  R6qF3bnYe: "A new website for Blockchain at Berkeley, UC Berkeley's student-run blockchain organization", // Description
};

let detail;
function getDetail() {
  if (detail) return detail;
  // Same shape Framer's CMS hands RichText: one fragment of plain elements;
  // RichText adds the framer-text and style-preset classes itself.
  let key = 0;
  const el = (type, props) => jsx(type, props, String(key++));
  const strong = (text) => el("strong", { children: text });
  const link = (href, text) => el("a", { href, target: "_blank", rel: "noopener", children: strong(text) });
  const h3 = (children) => el("h3", { dir: "auto", children });
  const p = (children) => el("p", { dir: "auto", children });
  const img = (file, width, height) =>
    el("img", {
      alt: "",
      width: String(width / 2),
      height: String(height / 2),
      src: asset(file),
      className: "framer-image",
      style: { aspectRatio: `${width} / ${height}` },
    });
  const story = (...children) => jsxs(Symbol.for("react.fragment"), { children });

  detail = {
    ...item,
    IVgGgiTaT: GOLD, // Accent color on the project page
    dcue79jTa: "6 months", // Timeline
    wZpCkAO60: "Figma, Next.js, Three.js", // Tools
    Fs7yQqCjg:
      "Blockchain at Berkeley does a lot at once: consulting for companies like Ripple and Coinbase, original research, a DeCal, and a design branch. For prospective members and partners, the challenge was seeing all of that in one place, in a way that felt as technical as the work itself.", // Problem
    hK8KIMByS:
      "The new site is a dark, editorial home for the club built on B@B's black-and-gold identity. Live ASCII visuals made of hashes and block data give every section a crypto-native texture, while a simple structure takes visitors from curious to applying in a few scrolls.", // Solution
    smLRw0JBP: story(
      h3(link(LIVE_URL, "Live Developed Site Link")),
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
      { id: "bab-gallery-1", W_vjJFHnh: image("landing-hero.jpg", 2400, 1520, "Landing Page Hero") },
      { id: "bab-gallery-2", W_vjJFHnh: image("coffee-chats.jpg", 2400, 1520, "Recruitment & Coffee Chats") },
      { id: "bab-gallery-3", W_vjJFHnh: image("mobile.jpg", 1425, 1775, "Mobile") },
    ],
  };
  return detail;
}

/** Homepage card title on phones, where the full name breaks mid-word. */
export const PHONE_TITLE = "b@b";

/** Display name for the category enum; undefined defers to the CMS enum. */
export function cat(value) {
  return value === CATEGORY ? "Club Project" : undefined;
}

/** Stands in for a CMS query component, yielding just this project. */
export function Query({ children }) {
  return children([item]);
}

/** /projects list: newest first, so this project leads. */
export function list(rows) {
  return rows ? [item, ...rows.filter((row) => row.SYvt2h1be !== SLUG)] : rows;
}

/** "see also" on a project page: add this project unless it's the page being viewed. */
export function seeAlso(rows, currentTitle) {
  if (!rows || currentTitle === item.hOirPTlDa) return rows;
  return [item, ...rows];
}

/** Detail page data: the CMS has no row for this slug, so supply it here. */
export function detailRows(pathVariables, rows) {
  return pathVariables?.SYvt2h1be === SLUG ? [getDetail()] : rows;
}
