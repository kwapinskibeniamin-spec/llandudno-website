/*
 * Data for the /gallery scroll-explorer (Step 15c). Ten photo categories;
 * every photos array is empty for v1 — the mechanism ships first, curation
 * follows.
 *
 * PHOTO CURATION FOLLOW-UP (deferred): copy and optimise photos from
 * assets/house-photos/<folder> into public/images/gallery-scroll/<category-id>/
 * with sequential naming (01.jpg, 02.jpg, ...). Source folders per category:
 *
 *   master-suite     main-room, main-room-bathroom
 *   bedrooms         room-1, room-2, room-3, middle-balcony
 *   the-kitchen      kitchen, scullery
 *   living-spaces    living-room, dining-area
 *   office-hallways  office, hallway, upper-floor-hallway
 *   pool-deck        pool, front-terrace
 *   back-terrace     back-terrace, bottom-garden
 *   guest-suite      downstairs-room, entrance, bathroom-1
 *   aerial           aerial-photos, views
 *   at-sunset        (source folder garbled in the brief — confirm with owner)
 */

export interface GalleryPhoto {
  src: string; // e.g. "/images/gallery-scroll/master-suite/01.jpg"
  alt: string; // brand-voice alt text
}

export interface GalleryCategory {
  /*
   * Slug, React key, and data identity. NOTE: this is not used verbatim as a
   * DOM id — anchor ids are namespaced per component (archive-desktop-<id> /
   * archive-mobile-<id>) so the desktop and mobile scroll components, and the
   * existing GalleryMobile, do not collide on shared ids like "master-suite".
   */
  id: string;
  label: string; // shown in the sidebar/pills and as the section header
  description?: string; // optional one-line muted text under the header
  photos: GalleryPhoto[]; // empty for v1; populated in follow-up curation
}

export const galleryCategories: GalleryCategory[] = [
  { id: "master-suite", label: "Master suite", photos: [] },
  { id: "bedrooms", label: "Bedrooms", photos: [] },
  { id: "the-kitchen", label: "The kitchen", photos: [] },
  { id: "living-spaces", label: "Living spaces", photos: [] },
  { id: "office-hallways", label: "Office & hallways", photos: [] },
  { id: "pool-deck", label: "Pool deck", photos: [] },
  { id: "back-terrace", label: "Back terrace & garden", photos: [] },
  { id: "guest-suite", label: "Guest suite & entrance", photos: [] },
  { id: "aerial", label: "Aerial & context", photos: [] },
  { id: "at-sunset", label: "At sunset", photos: [] },
];
