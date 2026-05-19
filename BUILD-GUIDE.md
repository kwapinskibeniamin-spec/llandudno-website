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

- **Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4
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
- [x] 7. Three featured photos section
- [x] 8. Two paths section (December / Season)
- [x] 9. Rooms summary section
- [x] 10. Gallery teaser section
- [x] 11. Amenities section (prose, three groups)
- [x] 12. Map + location section (placeholder map for v1)
- [x] 12.5. SectionNav — floating left-side homepage section navigation
- [~] 13. Owner story section — SKIPPED for v1, may revisit
- [x] 14. Inquiry CTA section

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
