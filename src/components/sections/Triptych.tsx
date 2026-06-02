import Image from "next/image";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const photos = [
  {
    src: "/images/hero/hero-3-dining.jpg",
    alt: "Open-plan dining looking through full-width sliders to the pool deck and Atlantic Ocean at golden hour.",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/hero/hero-1-lounge.jpg",
    alt: "Living room with concrete ceiling and full-width sliding doors open to the granite boulders and ocean at sunset.",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/hero/hero-2-deck.jpg",
    alt: "The wooden deck with lap pool and ocean view at golden hour.",
    width: 2400,
    height: 1600,
  },
]

export default function Triptych() {
  return (
    <section
      id="featured"
      className="px-6 py-24 md:px-10 md:py-32"
      aria-label="Inside the house"
    >
      <FadeInOnScroll>
        {/* The three layered photos */}
        <div className="relative mx-auto w-full max-w-6xl">
          {/* Mobile: simple vertical stack */}
          <div className="flex flex-col gap-3 md:hidden">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                style={{ aspectRatio: "3 / 2" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop: layered triptych */}
          <div className="relative hidden h-[640px] md:block lg:h-[720px]">
            {/* Back-left photo */}
            <div
              className="absolute left-0 top-12 w-[42%] overflow-hidden border border-[var(--color-hairline)]"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(min-width: 1024px) 42vw, 42vw"
                className="object-cover"
              />
            </div>

            {/* Front-center photo (the strongest, on top) */}
            <div
              className="absolute left-1/2 top-0 z-10 w-[52%] -translate-x-1/2 overflow-hidden border border-[var(--color-hairline)] shadow-[0_0_0_0.5px_rgba(31,42,45,0.05)]"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="(min-width: 1024px) 52vw, 52vw"
                className="object-cover"
              />
            </div>

            {/* Back-right photo */}
            <div
              className="absolute right-0 top-24 w-[42%] overflow-hidden border border-[var(--color-hairline)]"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="(min-width: 1024px) 42vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
