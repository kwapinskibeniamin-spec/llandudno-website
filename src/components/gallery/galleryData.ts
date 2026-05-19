/*
 * Gallery data — the single source of truth for the /gallery page.
 * Consumed by GalleryDesktop (interactive aerial) and GalleryMobile
 * (editorial scroll). No "use client" — importable from server and
 * client components alike.
 */

export interface HotspotPhoto {
  /** Path under /public, e.g. "/images/gallery/master-suite-01.jpg" */
  src: string;
  /** Descriptive, brand-voice alt text */
  alt: string;
}

export interface Hotspot {
  /** Stable slug — React key, DOM id on mobile, aria target */
  id: string;
  /** Short name, e.g. "Master suite" */
  label: string;
  /** Floor + orientation qualifier, e.g. "Top floor, ocean-facing" */
  location: string;
  /** 1–3 sentences of brand-voice prose */
  description: string;
  /** Horizontal position of the dot on the aerial, 0–100 (% from left) */
  x: number;
  /** Vertical position of the dot on the aerial, 0–100 (% from top) */
  y: number;
  /** Curated photographs. Empty for v1 — curation is a follow-up pass. */
  photos: HotspotPhoto[];
}

export const AERIAL_SRC = "/images/gallery/aerial.jpg";

export const AERIAL_ALT =
  "Drone view of Lion House — three floors of glass and timber above Llandudno, the pool deck mid-frame.";

/*
 * Native aspect ratio of aerial.jpg (2000 × 1125). Hotspot x/y percentages
 * are calibrated to this exact image. If the aerial is ever replaced,
 * recheck both this ratio and every hotspot position.
 */
export const AERIAL_ASPECT = "16 / 9";

/*
 * Ordered top floor → first floor → ground floor. This order is also the
 * keyboard tab order on desktop and the scroll order on mobile.
 *
 * Positions are first-pass guesses eyeballed against the aerial and will be
 * iterated after seeing the render. the-study and jacuzzi-garden are at the
 * rear of the house and not truly visible on this front-facade shot — their
 * dots are placed near the roofline as approximations; the labels carry the
 * meaning.
 */
export const hotspots: Hotspot[] = [
  {
    id: "master-suite",
    label: "Master suite",
    location: "Top floor, ocean-facing",
    description:
      "The ocean end of the top floor. Sliding glass opens to a private balcony, and the bed is placed to wake to the water.",
    x: 38,
    y: 36,
    photos: [],
  },
  {
    id: "sea-facing-bedroom",
    label: "Sea-facing bedroom",
    location: "Top floor, shared deck",
    description:
      "A second bedroom on the top floor, opening onto the deck it shares with the suite alongside. The view runs straight out to the Atlantic.",
    x: 55,
    y: 35,
    photos: [],
  },
  {
    id: "sunset-bedroom",
    label: "Sunset bedroom",
    location: "Top floor, quieter",
    description:
      "Set toward the western end of the top floor, away from the deck. It holds the late afternoon light, and the evening sun, longest.",
    x: 70,
    y: 37,
    photos: [],
  },
  {
    id: "the-study",
    label: "The study",
    location: "Top floor rear, opens to jacuzzi garden",
    description:
      "A room to work in at the back of the top floor. A door opens directly onto the jacuzzi garden and the granite behind the house.",
    x: 80,
    y: 30,
    photos: [],
  },
  {
    id: "jacuzzi-garden",
    label: "The jacuzzi garden",
    location: "Top floor rear, granite boulder",
    description:
      "A sheltered garden at the rear, built around a single granite boulder. The jacuzzi is set into the deck, out of the wind.",
    x: 88,
    y: 26,
    photos: [],
  },
  {
    id: "the-kitchen",
    label: "The kitchen",
    location: "First floor, heart of the house",
    description:
      "Open to the dining area and the deck, the kitchen runs the centre of the first floor. It is where the house gathers.",
    x: 50,
    y: 52,
    photos: [],
  },
  {
    id: "pool-deck",
    label: "The pool deck",
    location: "First floor, front terrace",
    description:
      "A lap pool runs the front edge of the deck, with loungers set back against the glass. The deck is the social centre of the house.",
    x: 33,
    y: 60,
    photos: [],
  },
  {
    id: "home-gym",
    label: "Home gym",
    location: "First floor, left side of deck",
    description:
      "A dedicated room off the left side of the deck, glazed to the same view. A few steps from the pool.",
    x: 18,
    y: 58,
    photos: [],
  },
  {
    id: "entrance-guest-suite",
    label: "Entrance & guest suite",
    location: "Ground floor",
    description:
      "Arrival is on the ground floor, where a self-contained guest suite sits alongside the garage and laundry — the floor given over to the guest.",
    x: 28,
    y: 76,
    photos: [],
  },
];
