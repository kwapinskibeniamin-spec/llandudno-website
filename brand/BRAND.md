# Lion House — brand system

The source of truth for typography, color, voice, photography, and visual rules. When something here changes, update `brand/tokens.json` to match — the codebase reads from tokens, not from this document.

## The property

**Lion House** is a contemporary 5-bedroom villa in an elevated position above Llandudno Beach, Cape Town. Privately owned, directly let. Available May through November for stays of 1–6 months; available in December for stays of one week or longer.

The property is the home of a Polish family who chose Cape Town as a second home — drawn by the climate, the family connections, the ocean, and the active lifestyle. The villa is rented to guests who resonate with the same values: an appreciation for design, the outdoors, and the rhythm of life along the Atlantic Seaboard.

## Owner he site speaks in the first person, from the owners. Not from a property manager. Not from a brand voice. The pronoun is "we." Guests are addressed as people, not customers.

## Voice and tone

Quiet, confident, specific. Describe what is actually there.

**Forbidden words.** Do not use: *luxury, exclusive, exquisite, stunning, boasts, nestled, oasis, retreat, sanctuary, paradise, breathtaking, unparalleled, world-class, ultimate, perfect.*

**Forbidden phrases.** Do not use: *welcome to, escape to, your home away from home, the perfect getaway, an unforgettable experience, indulge in.*

**Always.** Sentence case for headings. Numbers as figures (5, not five) for property facts. No exclamation marks. CTAs say "Send inquiry" never "Book now," "Check availability" never "Reserve."

**Test.** If a sentence could appear unchanged on any other rental site, rewrite it.

## Typography

Two families. No third unless absolutely necessary.

- **Display** — Cormorant Garamond, weights 400 and 500, for headlines and e property name
- **Body** — Inter, weights 400 and 500, for navigation, body copy, UI, anything under 18px

Loaded via `next/font/google`. Backup `.ttf` files in `assets/fonts/`.

## Color palette

A coastal palette of muted blues, soft sage, and warm creams. Page background is cream; sage and warm beige are accent surfaces; the two blues are reserved for highlights and details. Text uses deep ink — never pure black.

| Token | Hex | Use |
|---|---|---|
| Atlantic blue | `#BFCCD0` | Primary accent. Links, focus rings, small details. |
| Mist blue | `#DEE8E9` | Hover states, subtle surfaces. |
| Soft sage | `#DEE9B9` | Section accents, callouts. |
| Cream | `#EFEADD` | Page background. |
| Warm beige | `#E8D7C7` | Card surfaces, section breaks. |
| Deep ink | `#1F2A2D` | All text. Replaces pure black. |
| Muted text | `#6E7A7E` | Secondary text, captions, metadata. |
| Hairline | `#C9D1D3` | Borders, dividers (always 0.5px or 1px). |

## Logo

The Lion House logo (lion mark) appears:
- Top-left of navign, ~32px tall
- Footer, ~48px tall
- Favicon, derived from the mark
- Open Graph image, alongside the property name

Clear space around the logo: minimum equal to the height of the lion mark itself. Never apply drop shadows, color filters, or recolor the mark. The logo is in `assets/logo/lion-house-logo.png`; web-optimized variants live in `public/images/logo/`.

## Photography rules

Treat photographs as the primary content of the site.

**Exterior shots.** Golden hour or blue hour only. Twelve Apostles mountain range visible in frame where the angle allows — this is a defining visual identifier of the Atlantic Seaboard.

**Interior shots.** Daylight, curtains and doors open. The Atlantic light through the glass is part of the brand. No HDR processing. No flash.

**Drone shots.** Maximum 3 across the site. Use one wide aerial showing the cove and Twelve Apostles, one approach angle, one twilight shot with interior lights on. Never the overhead "swimming pool floorplan" shot.

**Lifestyle.** Maximum 2–4oss the site. Editorial only — a person working at a desk with the sea view, a couple on the terrace at sunset. No casual occupancy photography.

**Gallery sequence.** Lead with an interior (living room or master suite), not the exterior. The hero already establishes the exterior; the gallery serves conversion.

**Forbidden.** Stock photography of any kind. Generic "Cape Town" cityscapes. Wine-glass-and-sunset photography. Photos that could be of any villa anywhere.

## Visual rules

- **Borders.** Hairline only — 0.5px or 1px. Never heavier.
- **Corners.** 0–4px radius maximum. No pills, no large rounded rectangles.
- **Buttons.** Text with thin underline or 1px border. No solid filled rectangles. No gradient buttons.
- **Shadows.** None. No drop shadows, no glassmorphism.
- **Gradients.** None.
- **Motion.** Subtle. Fade-in on scroll for image blocks. Slow parallax on the hero is acceptable. Nothing bouncing, sliding, or auto-playing.
- **Maps.** Custom-styled Mapbox or illustrated. Never default Goaps with the blue pin.

## Anti-patterns

Things that immediately downgrade perceived value. Do not do.

- Stock photography of any kind
- Auto-playing video or auto-rotating carousels
- Pop-ups, exit-intent modals, newsletter signup overlays
- Solid filled CTA buttons with high-contrast colors
- Three-font typography systems
- Drop shadows, gradients, glassmorphism
- "Welcome to Lion House" as the hero headline
- "Book now" as CTA language
- Star ratings or fake review badges
- Cluttered amenity icon grids
- Generic "about the area" copy that could describe any beach town
- Bullet lists of amenities (use prose instead)
- Playfair Display, Lato, or Raleway as typefaces
- Bright teal or aqua accent colors
- "As seen on Airbnb / Booking.com" trust bars
- Loading animations that delay first contentful paint past 1.5 seconds
- Auto-playing music or ambient sound

## Page-architecture summary

| Route | Purpose | Audience |
|---|---|---|
| `/` | Homepage. Establishes the property, splits into two paths. | Both |
| `/season` | Long-stay page. May–November, monthly rate visible. | Remote-working professionals, families, 1–6 month stays |
| `/december` | Short-stay page. Peak season, weekly rate. | Holiday guests comparing against Camps Bay/Clifton, 1+ week |
| `/llandudno` | Neighborhood guide. SEO and trust. | Pre-decision guests researching the area |
| `/contact` | Inquiry form. Response within 4 hours promised. | Both |

## CTA vocabulary

| Don't write | Write |
|---|---|
| Book Now | Send inquiry |
| Reserve | Check availability |
| Get Started | View the gallery |
| Learn More | Continue reading |
| Submit | Send inquiry |
| Sign up | (no newsletter signup in v1) |
