# AGENTS.md — maintaining the multi-page Arcadia site (this `alt/` folder)

You are an AI agent (Antigravity or similar) helping **John Wesley Chisholm**
(owner, Arcadia Entertainment) maintain this website. Read this file before
editing anything, and follow it. It is written for you, not for him.

## What this is

A static, multi-page marketing site for Arcadia Entertainment, an independent
factual television production company in Halifax, Nova Scotia. It is the
multi-page alternative to the single-page site at the repository root
(`../index.html`). This folder is self-contained: its own `css/`, `js/` and
`assets/`. There is **no build step and there must never be one** — plain
HTML/CSS/JS only, editable and publishable as-is (GitHub Pages or any static
host). Do not introduce npm, bundlers, frameworks, or preprocessors.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home. The only page with the cinematic preloader/intro. Teasers link into the other pages. |
| `work.html` | Featured shows + the full catalogue grid (rendered from `js/shows-data.js`). |
| `work/<show>.html` | One page per flagship show (6 exist). Detail, meta, enquiry CTA, related titles. |
| `about.html` | Company story, stats, team. |
| `library.html` | What we do + Library & Rights (IP, library development, AI, rights). |
| `partnerships.html` | Production services, CNN video, capabilities A–D, contact CTA. |
| `contact.html` | Contact card (email only — no form backend exists). |

## Hard rules

1. **Never invent facts.** No broadcast years, broadcasters, episode counts,
   awards, or credit details unless John provides them. If a page feels thin,
   ask him for material rather than filling it in. Copy tone: plain language,
   confident, warm; no marketing puffery, no em dashes in new copy.
2. **The nav and footer are duplicated in every page's HTML.** If you change
   a link, a label, or the menu, you must apply the same change to all
   `.html` files in this folder and `work/`. There is no templating on
   purpose. After any nav/footer edit, grep the change across all pages.
3. **Every page shares an identical head block** (CSS links, fonts, boot
   script) and an identical script list at the bottom. Copy them verbatim
   from any existing page. The script list must stay complete on every page:
   `main.js` initialises all modules and expects them present (a missing
   script silently disables animations site-wide).
4. **Relative paths matter.** Pages in `work/` use `../css/`, `../js/`,
   `../assets/`, `../work.html`. Pages at this level use `css/`, `js/`, etc.
5. **Images** go in `assets/img/` (cards in `assets/img/cards/`). Reuse what
   exists; only add files John supplies. Keep `width`/`height` attributes on
   `<img>` so the page doesn't jump while loading.
6. **Accessibility**: keep `aria-current="page"` on the current page's nav
   link (desktop and mobile menu), keep `alt` text on meaningful images,
   keep the skip-link and heading order (one `h1` per page).

## Common tasks

**Add a catalogue title to the Work page:** edit `js/shows-data.js`, add one
entry to the list (`id`, `title`, `genre`, `img` — image path is relative to
`assets/img/`). Done; `work.html` renders it automatically. Optionally add
`contain: true` for wide stills.

**Give a show its own page:** 1) copy the closest existing page in `work/`
(e.g. `work/ghost-ships.html`), 2) replace title/meta description/OG tags,
eyebrow genre, `h1`, lead, image, meta list, body copy, the mailto subject,
and the three "More from the catalogue" cards, 3) add `href: "work/<file>.html"`
to its entry in `shows-data.js`, 4) optionally feature it in the slate on
`work.html` and the home teaser on `index.html`. Keep enquiry CTAs as
`mailto:jwc@arcadiatv.com?subject=<Show> enquiry`.

**Edit company copy:** the source of truth for wording is John. The original
single-page site at the repo root has the same copy — if the two ever
disagree, ask which is right rather than guessing.

**Change fonts:** typography is set by two custom properties at the top of
`css/pages.css` (Fraunces for display, Archivo for body) plus the Google
Fonts `<link>` in each page head. The root single-page site uses Cormorant
Garamond + Plus Jakarta Sans; this folder deliberately differs. Change both
together (CSS vars + the fonts link) or neither.

## Testing and publishing

- Local preview: from the repository root run `python3 -m http.server 8000`
  and open `http://localhost:8000/alt/`. Click every nav link and one show
  page before calling an edit done.
- Publishing: any static host. On GitHub Pages, either set the publish
  directory to `/alt` or move this folder's contents to where the host
  serves from. No build command exists or is needed.
- The intro/preloader plays only on `index.html`, once per browser session
  (sessionStorage key `arcadia:intro-seen`). Subpages skip it by design —
  do not "fix" this.

## Pointers

- Root of the repo: the original single-page mockup (`../index.html`) —
  leave it working; it is the comparison alternative.
- Cross-machine project notes (for agents): `IDE Agent Notes` on
  Google Drive — `projects/arcadia-website.md`.
