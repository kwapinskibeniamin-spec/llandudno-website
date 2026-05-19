import Image from "next/image";
import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const photos = [
  {
    src: "/images/gallery-teaser/teaser-1.jpg",
    alt: "Architectural aerial of the rear of the house, showing the deck, the pool, and the granite boulders below.",
    span: "tall",
  },
  {
    src: "/images/gallery-teaser/teaser-2.jpg",
    alt: "The dining area with full-width sliders open to the deck and mountain beyond.",
    span: "regular",
  },
  {
    src: "/images/gallery-teaser/teaser-3.jpg",
    alt: "A quiet bedroom on the upper floor with sliding doors open to the mountain view.",
    span: "regular",
  },
  {
    src: "/images/gallery-teaser/teaser-4.jpg",
    alt: "The upper-floor study with high windows and a long timber desk.",
    span: "regular",
  },
  {
    src: "/images/gallery-teaser/teaser-5.jpg",
    alt: "Open-plan ground floor looking from the staircase through to the dining area, concrete ceiling above.",
    span: "wide",
  },
  {
    src: "/images/gallery-teaser/teaser-6.jpg",
    alt: "Wide aerial of Llandudno cove at golden hour, the house in the foreground, the beach and granite headlands beyond.",
    span: "regular",
  },
];

export default function GalleryTeaser() {
  return (
    <section
      id="gallery"
      className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32"
      aria-label="Gallery preview"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              In photographs
            </p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
              A glimpse of the house.
            </h2>
          </div>

          {/*
            Asymmetric editorial grid.
            Desktop: 12-column layout.
              Row 1: tall image (cols 1–7, spans 2 rows in row group A) + regular (cols 8–12, row 1 only)
              Row 2: regular (cols 8–12, row 2 only)
              Row 3: regular (cols 1–6) + regular (cols 7–12)
              Row 4: wide (cols 1–8) + regular (cols 9–12)
            We use Tailwind's grid utilities and explicit row spans.
            Mobile: single column, photos stacked at consistent aspect ratio.
          */}
          <div className="mt-16 grid grid-cols-1 gap-3 md:mt-20 md:grid-cols-12 md:gap-4">
            {/* Photo 1 — tall, 7 cols, spans 2 rows */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-7 md:row-span-2"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Photo 2 — 5 cols, row 1 */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-5"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Photo 3 — 5 cols, row 2 */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-5"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Photo 4 — 6 cols */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-6"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Photo 5 — 6 cols */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-6"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={photos[4].src}
                alt={photos[4].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Photo 6 — 12 cols, wide */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] md:col-span-12"
              style={{ aspectRatio: "21 / 9" }}
            >
              <Image
                src={photos[5].src}
                alt={photos[5].alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="inline-block border-b border-[var(--color-ink)] pb-0.5 text-sm transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
            >
              View the full gallery
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
