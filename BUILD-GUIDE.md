# Build guide — Lion House website

The operating manual for this project. Every Claude Code session reads this first.

## Project overview

A direct-booking website for Lion House — a private 5-bedroom contemporary villa above Llandudno Beach, Cape Town. Owned by a Polish family who spend January through April there. The site markets the property to two distinct audiences for the rest of the year: long-stay tenants (1–6 months, May–November) and short-stay guests (1+ weeks, December peak season). Direct bookings only, no platform commissions.

## How to use this guide

At the start of every session, Claude Code should:

1. Read `BUILD-GUIDE.md` (this file) — for current step, conventions, decisions
2. Read `brand/BRAND.md` — for voice, fonts, colors, anti-patterns
3. Read `brand/research.md` — for strategic context behind design decisions

When a prompt com step:
- Tick the relevant checkbox in the build sequence below
- Add an entry to the decisions log if any non-trivial choice was made
- Note any deviation from this guide so the guide can be updated

## Always reference these files first

- `BUILD-GUIDE.md` — this file
- `brand/BRAND.md` — brand system
- `brand/research.md` — research findings

If a prompt's instructions conflict with these files, ask the user before proceeding.

## Architecture decisions (locked)

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4
- **Fonts:** Cormorant Garamond (display) and Inter (body), loaded via `next/font/google`
- **Email:** Resend, for inquiry form submissions
- **Hosting:** Cloudflare Pages or Vercel (decision deferred)
- **Pages (6 total):**
  - `/` — Homepage
  - `/gallery` — Interactive gallery (aerial diagram + editorial scroll)
  - `/about-llandudno` — Neighborhood guide (stub for v1, expanded later)
  - `/season` — Long-stay landing page
  - `/december` — Short-stay  `/contact` — Inquiry form
- **Content:** Lives in `content/` as Markdown files, separate from code
- **Photos:** `assets/` is the archive (raw masters), `public/images/` is what the site serves (web-optimized copies)
- **Brand summary:**
  - Cream background, deep ink text (never pure black)
  - No drop shadows, no gradients, no glassmorphism
  - Hairline borders only (0.5px or 1px)
  - No filled rectangle CTAs — text links with underlines
  - "Send inquiry," never "Book now"

## Naming conventions

- **Components:** PascalCase — `Hero.tsx`, `Navigation.tsx`, `OwnerStory.tsx`
- **Content files:** kebab-case Markdown — `property.md`, `owner.md`, `llandudno.md`
- **Photos in `public/`:** kebab-case descriptive — `hero-front-terrace.jpg`, `gallery-living-01.jpg`
- **URL paths:** kebab-case — `/about-llandudno`, never `/aboutLlandudno`
- **CSS variables:** already defined in `globals.css` as `--color-*` and `--font-*`

## File structure (target)

```
llandudno-website/
├── assets/            (not served)
│   ├── fonts/
│   ├── house-photos/
│   └── logo/
├── brand/                   brand source of truth
│   ├── BRAND.md
│   ├── tokens.json
│   └── research.md
├── content/                 site copy as Markdown
│   ├── property.md
│   ├── rooms.md
│   ├── amenities.md
│   ├── owner.md
│   ├── llandudno.md
│   ├── season.md
│   ├── december.md
│   └── faq.md
├── public/
│   └── images/
│       ├── hero/
│       ├── gallery/
│       ├── rooms/
│       ├── location/
│       └── logo/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── gallery/page.tsx
│   │   ├── about-llandudno/page.tsx
│   │   ├── season/page.tsx
│   │   ├── december/page.tsx
│   │   ├── contact/page.tsx
│   │tent/            (or keep at root — TBD)
│   ├── lib/                email.ts, schema.ts
│   └── types/
└── BUILD-GUIDE.md           this file
```

## Build sequence

### Phase 1 — Foundations (4 steps)

- [x] 1. Update `layout.tsx` to load Cormorant Garamond and Inter via `next/font/google`, expose as CSS variables
- [x] 2. Update `globals.css` with full brand tokens (`@theme` block + base layer)
- [x] 3. Create `Navigation.tsx` component (logo left, nav links right, hairline border)
- [x] 4. Create `Footer.tsx` component (minimal, brand, contact, disclosure)

### Phase 2 — Homepage (10 steps)

- [x] 5. Hero section + place hero photo in `public/images/hero/`
- [x] 6. Identity section (one-paragraph intro)
- [~] 7. Featured photos section — REMOVED 2026-06-02 (replaced by AreasOfTheHouse)
- [x] 8. Two paths section (December / Season)
- [x] 9. Rooms summary section
- [~] 10. Gallery teaser section — REMOVED 2026-06-02 (replaced by AreasOfTheHouse)
- [x] 11. Amenities section (prose, three groups)
- [x] 12. Map + location section (placeholder map for v1)
- [x] 12.5. SectionNav — floating left-side homepage section navigation
- [~] 13. Owner story section — SKIPPED for v1, may revisit
- [x] 14. Inquiry CTA section
- [x] 14.5. AreasOfTheHouse — three-tab floor browser (replaces Steps 7 + 10)

### Phase 3 — Other pages (6 steps)

- [x] 15. `/gallery` page with interactive diagram (desktop) and editorial scroll (mobile)
- [x] 15c. Gallery scroll-explorer with category sidebar (extends /gallery page)
- [ ] 16. `/about-llandudno` page (stub)
- [ ] 17. `/season` page
- [ ] 18. `/december` page
- [ ] 19. `/contact` page with form
- [ ] 20. Form submission endpoint via Resend

### Phase 4 — Polish (5 steps)

- [ ] 21. SEO meta tags + VacationRental structured data
- [ ] 22. OG image + favicon
- [x] 23. Animations (fade-in on scroll, gentle parallax on hero)
- [ ] 24. Mobile review and fixes
- [ ] 25. Performance pass + deploy

## Decisions log

Append entries at the bottom. Format: `YYYY-MM-DD — decision — rationale`.

- 2026-05-08 — Skipped Claude Design, building directly in Cursor with Claude Code — owner already comfortable with Cursor workflow, Claude Design felt like overhead for a single marketing site
- 2026-05-08 — Chose Next.js over Astro — owner wanted a more dynamic feel and didn't want to learn a new framework when familiar with React
- 20rty name finalized as "Lion House" — based on existing logo
- 2026-05-08 — Owner story uses first-person plural ("we") — research finding: owner story is highest-leverage trust signal, must be in owner voice not manager voice
- 2026-05-08 — December rate set to "Rates on request" for v1 — owner has not finalized the peak-season rate; will update when set
- 2026-05-08 — `/about-llandudno` shipped as stub for v1 — full neighborhood guide content will be written later, page exists for SEO and navigation completeness
- 2026-05-08 — Interactive house diagram on `/gallery` uses aerial photo with hairline atlantic-blue lines, not red arrows — to maintain brand register vs real-estate-listing aesthetic
- 2026-05-08 — Mobile fallback for gallery diagram is editorial vertical scroll — diagram does not work on narrow viewports
- 2026-05-08 — No filled CTA buttons anywhere — research finding: hurts perceived luxury at this price point
- 2026-05-08 — No price shown on homepage hero — researbehavior, hurts conversion
- 2026-05-08 — Two-paths section labels: "A week in December" and "Your season in Cape Town" — aspirational not functional ("Long stay" / "Short stay" rejected)
- 2026-05-08 — Navigation v1: logo + 4 links (The villa, Gallery, Llandudno, Inquire). Not sticky on scroll for v1 — revisit if needed. Mobile: simple toggle menu, no animation.
- 2026-05-08 — Logo optimized from 580KB → 104KB via `sips --resampleHeight 256` (macOS built-in). Transparency preserved.
- 2026-05-08 — Logo swapped to `lion-house-logo.png` (92KB) per owner preference. No resize needed.
- 2026-05-08 — Footer v1: three columns desktop / stacked mobile. No social icons (none exist yet). Construction disclosure visible in bottom bar — research finding: address briefly, don't hide. Placeholder email hello@lionhouse.co.za to be replaced when real inbox is set up.
- 2026-05-08 — Hero v1: layered triptych (Option C). Three photos from sunset-images/, optimized to ~2400px and saved as hero-1-lounge.jpg, hero-2-deck.jpg, hero-3-dining.jpg in public/images/hero/. Mobile fallback is vertical stack. Tagline: "A house above the boulders, the beach, the ocean." If layered triptych doesn't land visually, fallback option is clean side-by-side (Option A) — components ready to swap.
- 2026-05-08 — Hero photos optimized via sharp + mozjpeg. hero-1-lounge.jpg @ q76 (485KB), hero-2-deck.jpg @ q76 (496KB), hero-3-dining.jpg @ q72 (477KB). All 2400×1600, all under the 500KB v1 budget.
- 2026-05-08 — Front-center hero photo uses `box-shadow: 0 0 0 0.5px rgba(31,42,45,0.05)` to give a slightly more defined edge than the side panels. Technically a shadow, but functionally a 5%-opacity hairline outline (no blur, no offset). Flagged against BRAND.md "no shadows" rule — if owner wants strict adherence, strip from Hero.tsx.
- 2026-05-08 — Identity v1: single paragraph below hero, set in display font at large size for emphasis. Eyebrow label "The villa" in muted small caps above. Copy is a draft — to be refined as content/property.md gets populated.
- 2026-05-08 — Identity copy uses "five-bedroom" instead of "5-bedroom". Flagged against BRAND.md "Numbers as figures (5, not five) for property facts" — owner to confirm whether to keep spelled-out form (more editorial) or convert to figures per the rule.
- 2026-05-08 — Featured photos v1: three large photos stacked vertically, italic muted captions below each. Step 7 complete. Photos sourced from: main-room/22LeeukoppieRoad-31.jpg, back-terrace/22LeeukoppieRoadSunset-1.jpg, pool/22LeeukoppieRoad-25.jpg. Captions rewritten to match what's actually visible in each frame. Sizes: featured-1 368KB (q82), featured-2 479KB (q75), featured-3 474KB (q75).
- 2026-05-08 — TwoPaths v1: section header "The villa keeps two seasons" above two cards. Each card has a 4:5 portrait photo, period label in muted small caps, headline in display font, description paragraph, and "Read more" text link with hairline underline. Card images animate subtle 1.02× scale on hover. Step 8 complete. Photos chosen: middle-balcony/22LeeukoppieRoad-45.jpg (December — hanging swings + beach view) and kitchen/22LeeukoppieRoad-3.jpg (Season — open-plan kitchen). Alt text updated to match actual content. Owner overrode initial recommendation to use a more "long-stay specific" photo for the Season card; kitchen photo signals home/cooking/architecture. Sizes: path-december 385KB, path-season 389KB (both q82).
- 2026-05-08 — RoomsSummary v1 revised after correction. House is three floors not two. Layout changed from two columns to three vertical rows: ground (guest suite + garage + laundry), first (main living + pool deck + gym), second (four bedrooms + study + jacuzzi garden). Headline updated to "A house on three floors, with the ground given to the guest." Two-column desktop layout per row: small label/title on left, prose on right. Stacks fully on mobile.
- 2026-05-08 — GalleryTeaser v1: asymmetric 6-photo editorial grid on desktop (12-col, mixed sizes, one tall, two paired rows, one wide), single-column stack on mobile. No captions on teaser — full gallery handles those. Hover scale 1.02× consistent with TwoPaths. "View the full gallery" text link routes to /gallery.
- 2026-05-09 — Step 10 complete. Six photos placed: aerial-photos/Aerial-7 (slot 1, dominant square), dining-area/22-5 (slot 2), room-3/22-47 (slot 3), upper-floor-hallway/22-38 (slot 4), hallway/22-27 (slot 5, wide), aerial-photos/Aerial-5 (slot 6, panoramic finale at golden hour). Alt text written to match each photo's actual content. Story arc: architecture → lived-in → quiet → spine → context. Sizes: teaser-1 443KB (q76), teaser-2 497KB, teaser-3 342KB, teaser-4 260KB, teaser-5 365KB, teaser-6 463KB (all 2000px max, q82 except teaser-1).
- 2026-05-09 — Amenities v1: hybrid icon strip + prose paragraphs. 8 Phosphor "thin" weight icons in atlantic-blue at top (lap pool, fibre, inverter, housekeeper, fireplace, jacuzzi, garage, beach access). Three prose paragraphs below grouped Service / Comfort / Practical. Headline "Set up for the way you'd actually live here." Phosphor Icons (@phosphor-icons/react v2.1.10) added as dependency. Full amenity reference list in content/amenities-source.md, deeper amenity treatment will appear on /season and /december pages.
- 2026-05-09 — Phosphor `HotTub` icon swapped to `Bathtub` — `HotTub` does not exist in @phosphor-icons/react (verified by inspecting dist/ssr). `Bathtub` is the closest fit for the Jacuzzi label. Owner can substitute another icon (e.g., `Drop`, `Waves`) if preferred.
- 2026-05-10 — LocationMap v1: section header "Where it sits" + "A protected cove, ten minutes from anywhere." Map area is placeholder for now (mist-blue panel) — to be replaced with custom-styled Mapbox image once API key is set up. Six drive-time facts paired alongside the map (Camps Bay 8min, Hout Bay 10min, Chapman's Peak 12min, City 25min, Airport 35min, Cape of Good Hope 45min). Mobile-stacks layout, side-by-side on desktop. "Read the Llandudno guide" text link routes to /about-llandudno.
- 2026-05-10 — Inconsistency to reconcile in LocationMap copy: prose paragraph says "Camps Bay sits five minutes north along the coast" while the distances list shows Camps Bay at 8 min. Owner to confirm which is correct.
- 2026-05-10 — SectionNav added between Steps 12 and 13. Floating left panel with 7 section links, appears after 600px scroll, tracks active section via IntersectionObserver, hairline atlantic-blue active indicator. Hidden below 1024px viewport. As more sections are added (owner story Step 13, inquiry Step 14, gallery Step 15+), the sections array in SectionNav.tsx must be updated to include them.
- 2026-05-10 — `id="identity"` added to Identity section per instructions, but Identity is intentionally NOT in the SectionNav `sections` array — "The villa" link covers hero + identity thematically. If owner wants Identity as its own nav entry, add `{ id: "identity", label: "..." }` to the array in SectionNav.tsx.
- 2026-05-09 — Skipped Step 13 (Owner story) for v1. Research recommends it as a high-leverage trust signal for direct-booking sites, but owner has chosen to omit. Section ID 'owner' was reserved in earlier planning but no component built. Can be added back in v2 if inquiry conversion suggests trust is a bottleneck.
- 2026-05-09 — Audit found InquiryCta was prompted in conversation but never built in code. Created InquiryCta.tsx, wired into page.tsx, added Step 14 line to build guide. Phase 2 (homepage) now genuinely complete.
- 2026-05-19 — Step 15 complete. `/gallery` page built. Structure: new `src/components/gallery/` folder (page-specific, kept separate from reusable homepage `sections/`) holding `galleryData.ts` (shared data + `Hotspot` interface), `GalleryDesktop.tsx`, `GalleryMobile.tsx`, `HotspotPanel.tsx`; route at `src/app/gallery/page.tsx`. Page renders Navigation + Footer but not SectionNav (SectionNav is homepage-specific).
- 2026-05-19 — Gallery desktop/mobile split is CSS-gated (`hidden lg:block` / `lg:hidden`), not a JS viewport hook — avoids hydration mismatch and first-paint flash, matches the SectionNav pattern. Both subtrees render to the DOM; revisit if duplicate image requests become a concern once photos are added.
- 2026-05-19 — Desktop gallery shows the aerial with 9 hotspots: hover/focus reveals a label on a hairline atlantic-blue connector line + a pulsing dot (`animate-pulse`, gated `motion-safe:` so `prefers-reduced-motion` users get none); click opens a right slide-in panel (320ms ease-out, faint `rgba(31,42,45,0.15)` scrim, hairline left border, no shadow). Panel: `role="dialog"` + `aria-modal`, focus trap, ESC to close, body scroll lock, focus restored to the triggering hotspot, `inert` when closed. No new dependencies — focus trap is hand-rolled.
- 2026-05-19 — Aerial image: `public/images/gallery-teaser/teaser-1.jpg` copied to `public/images/gallery/aerial.jpg` (2000×1125, 16:9). Decouples hotspot x/y calibration from the homepage teaser — if teaser-1 is ever re-cropped, the gallery diagram does not silently misalign.
- 2026-05-19 — Gallery hotspot x/y positions are first-pass guesses eyeballed against the aerial — expect to iterate after seeing the render. teaser-1 is a front-facade oblique shot, so `the-study` and `jacuzzi-garden` (both rear of the house) are not truly visible; their dots are placed near the roofline as approximations and the labels carry the meaning. Per owner decision: keep all 9 hotspots, accept the visual inaccuracy for v1, do not source a new aerial.
- 2026-05-19 — Gallery hotspot descriptions are first-draft brand-voice copy written during the build — draft, for owner refinement (same status as the homepage Identity/Featured copy).
- 2026-05-19 — Gallery v1 ships the mechanism only: every hotspot's `photos` array is empty. Panel and mobile sections render a designed empty state ("Photographs of this space are being prepared."). Per-area photo curation is a follow-up task.
- 2026-05-19 — Gallery mobile editorial scroll (`GalleryMobile.tsx`) is a pure server component — renders fully without JavaScript (progressive enhancement; usable with JS disabled). The desktop interactive diagram requires JS by nature.
- 2026-05-19 — Considered deep-linking for the gallery (e.g. `/gallery#master-suite` opens the panel on load) — deferred to a later iteration. Mobile sections already carry `id` anchors; desktop panel-on-load is the deferred part.
- 2026-05-19 — Animations (Step 23) pulled forward from polish phase. Created FadeInOnScroll utility component (CSS + IntersectionObserver, no new dependencies). Wrapped all 8 homepage sections (except Hero) and both gallery components. 700ms ease-out, opacity 0→1 + translate-y 20px→0. Triggers once per element. Respects prefers-reduced-motion. SSR-safe via 'use client' and initial state.
- 2026-05-19 — FadeInOnScroll deviations from the supplied snippet, all flagged: (1) the snippet rendered content at opacity-0 with no JS fallback — without JavaScript the observer never runs and the whole site below the hero (including the GalleryMobile no-JS guarantee from Step 15) would stay invisible. Fixed with a `<noscript>` rule in `app/layout.tsx` that forces every `[data-fade]` element visible when scripting is off. (2) The snippet's reduced-motion branch left `transition-all` applied, so reduced-motion users still animated; fixed with a `noAnimation` state that renders visible with no transition class. (3) Added an `IntersectionObserver` support guard. (4) Fixed two typos in the snippet (`numbeal stagger` → `number`, `disnnect` → `disconnect`). FadeInOnScroll now depends on the layout.tsx `<noscript>` rule — keep the `[data-fade]` attribute and that rule in sync.
- 2026-05-19 — GalleryDesktop: HotspotPanel is deliberately kept OUTSIDE its FadeInOnScroll wrapper. The fade applies a CSS transform, and a transformed ancestor changes the containing block for `position:fixed` descendants — wrapping the panel would break its fixed positioning.
- 2026-05-19 — Step 15c complete. Gallery scroll-explorer appended below the interactive diagram on `/gallery`. New files: `galleryScrollData.ts` (10 categories), `GalleryScrollDesktop.tsx`, `GalleryScrollMobile.tsx`; both wired into `gallery/page.tsx` below an "All photographs / Browse the full archive, by area." divider. Desktop is a sticky-sidebar layout (240px category nav, `sticky top-24`, atlantic-blue active indicator — typography matched to SectionNav) beside a long photo scroll. Mobile is a sticky horizontal strip of category pills above stacked single-column photos. Active category tracked by IntersectionObserver (`-20% 0px -60% 0px`, same as SectionNav); sidebar/pill clicks smooth-scroll. Each category section wrapped in FadeInOnScroll.
- 2026-05-19 — Step 15c categories (10): master-suite, bedrooms, the-kitchen, living-spaces, office-hallways, pool-deck, back-terrace, guest-suite, aerial, at-sunset. Each maps to one or more source folders under `assets/house-photos/` (mapping documented in `galleryScrollData.ts`). The brief's source-folder list for `at-sunset` was garbled — left unspecified, to confirm with owner.
- 2026-05-19 — Step 15c editorial photo rhythm (desktop only): 1 photo = full-width; 2 = side-by-side pair; 3 = full + pair; 4 = full + pair + full; 5+ = lead full then alternating pair/full, a trailing odd photo rendered full-width. Mobile is always single full-width photos. v1 ships every category with an empty photos array — each empty section renders one placeholder (`aspect-[4/3]` hairline box, muted italic "Photographs of this area are being prepared.").
- 2026-05-19 — Step 15c photo curation is the deferred follow-up task: copy + optimise photos from `assets/house-photos/<folder>` into `public/images/gallery-scroll/<category-id>/` with sequential naming (01.jpg, 02.jpg, ...), then populate the `photos` arrays in `galleryScrollData.ts`. The mechanism ships now; curation is separate.
- 2026-05-19 — Step 15c deviation from brief: the spec said section `id={category.id}`, but `master-suite`, `the-kitchen` and `pool-deck` are already DOM ids in GalleryMobile, and the desktop + mobile scroll components both render in the DOM at once — using the raw slug would produce duplicate ids (invalid HTML, broken `getElementById`/anchor scrolling). Anchor ids are namespaced per component instead: `archive-desktop-<slug>` and `archive-mobile-<slug>`. The `id` field in `galleryScrollData.ts` remains the plain slug for data/keys. SSR-safe: components are client components but render deterministically (first category active); observers run in `useEffect`. Accessibility: real `<a>` links, `<nav aria-label>`, `aria-current` on the active item, semantic `<h3>` headers under the page's `<h2>` archive divider.

- 2026-06-02 — Homepage restructure (Le Collectionist–inspired). Removed FeaturedPhotos (Step 7) and GalleryTeaser (Step 10) sections. Added AreasOfTheHouse: a three-tab interactive section organised by floor — "The main floor" (pool/kitchen/living), "The bedrooms" (master/sea-facing/back), "Set apart" (guest suite/garage/outdoor). Tabs A and B photos link to /gallery; tab C is display-only per owner direction. Sits directly below Identity. Captions are draft copy for owner refinement.
- 2026-06-02 — InquiryCta CTA restyled from plain underline link to hairline atlantic-blue outline rectangle (border only, no fill) for visibility, per owner request. Still brand-compliant (no filled CTA).
- 2026-06-02 — SectionNav updated: removed "Featured" and "Gallery" entries, added "Areas". Now 7 items.
- 2026-06-02 — Orphaned folders public/images/featured/ and public/images/gallery-teaser/ left in place; flagged for cleanup in a later pass.
- 2026-06-02 — Hero redesigned to full-bleed scroll-over pattern (lecollectionist-inspired). New HeroAerial.tsx: fixed full-screen dimmed aerial (hero-aerial.jpg from 22LeeukoppieRoadAerial-2, ink scrim at 45%), centered "Lion House" + tagline + cream-outline "Send inquiry" CTA + scroll cue. Page content sits on an opaque cream z-10 layer that scrolls over the fixed hero. 100vh spacer (id="villa") reserves the first screen.
- 2026-06-02 — Old Hero.tsx split and deleted: triptych extracted to Triptych.tsx (section id="featured", preserved verbatim, now wrapped in FadeInOnScroll); title/tagline/aerial absorbed into HeroAerial.
- 2026-06-02 — Navigation made scroll-aware via transparentOverHero prop (homepage only). Transparent + cream text/whitened logo over the hero; solid cream + ink text + hairline border once scrolled past ~1 viewport. Other pages pass no prop and keep existing solid behavior. Non-breaking.
- 2026-06-02 — SectionNav: added "Inside" (id="featured") entry for the Triptych section.
- 2026-06-03 — Corrected stale stack note: project is on Next 16 (Turbopack) / React 19, not Next 15. (`next ^16.2.5`, `react 19.0.0` per package.json.)
- 2026-06-03 — Added scroll-scrubbed assembly animation to the homepage Triptych and Identity, desktop (≥1024px) only. Dependency: `framer-motion@^12` (installed 12.40.0; peer `react ^18 || ^19`, satisfies React 19). Uses `useScroll`/`useTransform`/`useMotionTemplate`. New files: `TriptychAssembly.tsx` (3 photos float in — left from left, right from right, center drops from top and lands last, on top), `IdentityText.tsx` ("The villa" paragraph split into 4 segments that scatter/converge), and `useDesktopMotion.ts` (the gating hook + shared `EXIT_FACTOR`).
- 2026-06-03 — Animation is scroll-SCRUBBED with an explicit still/legible rest band while the section is centered (REST_START/REST_END constants per component); motion only on enter and exit. Exit motion (gentle re-scatter) is governed by a single shared `EXIT_FACTOR` (0.6) in `useDesktopMotion.ts` — set to 0 to disable ALL exit motion in one place. Per-element settle/exit stagger via STAGGER/SEG_STAGGER. Easing `cubicBezier(0.22,1,0.36,1)` (soft decel) for the "floating into place" feel.
- 2026-06-03 — Desktop-only gating via `useDesktopMotion()`: returns false on the server AND first client render (so SSR HTML = today's static markup → no hydration mismatch), then flips to true in an effect only when `min-width:1024px` && not `prefers-reduced-motion`. The Framer Motion children mount only when true, so no scroll listeners/motion values run on mobile or reduced-motion. Below 1024px / reduced-motion / no-JS all render the unchanged static Triptych + Identity (verified: SSR HTML carries the single static `<p>`, the `-translate-x-1/2` static center photo, the `id="featured"`/`id="identity"` anchors, and 11 `data-fade` wrappers so the existing noscript rule still applies).
- 2026-06-03 — BRAND DEVIATION (flagged, like the hero hairline): soft drop shadows added to the triptych photos, animating soft+diffuse while floating → tighter+deeper on landing. Deep-ink only (`rgba(31,42,45, …)`), max opacity 0.11 — subtle, desktop-only, motion-tied. BRAND.md says "Shadows: none." Owner approved this exception for the assembly; revert by removing the `SHADOW`/`boxShadow` usage in `TriptychAssembly.tsx` if strict adherence is wanted. The center photo keeps its existing 0.5px hairline ring alongside.
- 2026-06-03 — Text fragmentation technique: each of the 4 segments is rendered WORD-by-word, every word an inline-block `motion.span` (words grouped by segment share transform values). Word-level atomicity matches how normal text breaks, so at rest (all transforms 0,0) the paragraph wraps line-for-line identically to the original single `<p>` — VERIFIED in headless Chrome with the real Cormorant font at the 672px column (7 lines, identical). Segment-level inline-blocks were rejected: a segment narrower than the column computes shrink-to-fit against the container and drops to its own line, breaking the paragraph.
- 2026-06-03 — No-layout-shift: animates only transform/opacity (no layout properties); transforms don't affect flow so the page scroll height is unchanged. Added `overflow-x-clip` to both the Triptych and Identity sections — the dispersed photos/segments travel beyond the edges during assembly and would otherwise create a horizontal scrollbar (verified: scrollWidth == clientWidth at 1280px after the fix). The animated children drop their `FadeInOnScroll` wrapper (the scrub is the reveal; a transformed fade-ancestor would fight the children's transforms); the static/mobile paths keep it.
- 2026-06-03 — Triptych assembly RETUNED to constant motion (supersedes the rest-plateau model above, which still applies to IdentityText). Photos no longer hold still at center: each photo maps x/y across a continuous 5-stop curve over the full scroll range (`[0,0.25,0.5,0.75,1]`, interior stops shifted per photo by `STAGGER`), sweeping in from far off the sides/top, passing through a near-assembled-but-still-moving state at center, and drifting out the far side as the section exits. No flat segment anywhere (verified: center translateY differs at progress 0.45/0.50/0.55). Travel raised hard for visibility: `ENTER_X` 140→420, `ENTER_Y` 120→280 (intentionally over-scaled this round, to pull back later). `REST_START`/`REST_END`/`exitOf`/`EXIT_OPACITY` removed from TriptychAssembly; `EXIT_FACTOR` (still 0.6, still shared with IdentityText) now scales the far-side exit endpoint.
- 2026-06-03 — Triptych shadow CHANGED from animated `box-shadow` (the original `useMotionTemplate` build) to a separate opacity-animated layer: a sibling `motion.div` (absolute inset-0, behind the image box, outside its `overflow-hidden`) carries a STATIC settled box-shadow `0px 6px 18px rgba(31,42,45,0.11)`, and only its OPACITY animates (0.3 dispersed → 1.0 assembled at center). Keeps the shadow off the per-frame paint path now that motion runs every frame. Center photo keeps its static 0.5px hairline ring on the image box. Net: the triptych now animates ONLY transform + opacity; `will-change` limited to the wrapper (transform,opacity) and the shadow layer (opacity). Still a flagged brand deviation (max shadow opacity 0.11).
- 2026-06-03 — Triptych source images (`hero-1-lounge` 497KB, `hero-2-deck` 508KB, `hero-3-dining` 488KB; all 2400×1600 masters) are downscaled at runtime by next/image to ~537–665px variants for the ~455–575px display boxes, so constant motion has no oversized-decode stutter risk; no downscaling action needed. (Headless retina/DPR2 srcset selection looked identical to DPR1 — worth an eyeball check on a real retina display, but not a runtime concern.)
- 2026-06-06 — Reverted the scroll-scrubbed assembly experiment (Framer Motion triptych + four-segment text). Tried constant-motion and settle-on-scroll variants; neither earned its place — motion read as gimmicky / hurt readability. Removed `TriptychAssembly.tsx`, `IdentityText.tsx`, `Triptych.tsx`, `useDesktopMotion.ts`. Identity restored to a plain static paragraph (server component wrapped in `FadeInOnScroll`, same `id="identity"`/`aria-label`/copy). Triptych section removed from the homepage entirely (hero → Identity → AreasOfTheHouse) and its "Inside" (`id="featured"`) entry removed from SectionNav. `framer-motion` uninstalled (nothing else imported it). `hero-1-lounge.jpg`/`hero-2-deck.jpg`/`hero-3-dining.jpg` retained as cleanup candidates. Supersedes the 2026-06-02/06-03 triptych + assembly entries above.

## What "done" means for v1

The site is ready to share when:

- All 6 pages reachable from navigation
- All sections on homepage render with real content
- Inquiry form sends to the configured email
- Lighthouse score ≥ 90 on Performance, Accessibility, SEO
- No console errors in browser dev tools
- Photos web-optimized, all under 500KB
- SEO meta tags present on every page
- VacationRental schema markup on `/`, `/season`, `/december`
- Mobile layout tested at 375px, 768px viewport widths
- Owner has reviewed all copy
- Domain pointed at the deployed site
