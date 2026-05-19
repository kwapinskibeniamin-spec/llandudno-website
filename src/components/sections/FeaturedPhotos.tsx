import Image from "next/image";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const photos = [
  {
    src: "/images/featured/featured-1.jpg",
    alt: "The master bedroom with full-width glass on two sides, the ocean and granite boulders visible outside.",
    caption: "From the master bedroom, the ocean wraps around two sides.",
  },
  {
    src: "/images/featured/featured-2.jpg",
    alt: "The back terrace with jacuzzi set into a wooden deck, granite boulders rising alongside.",
    caption: "At the rear, the granite boulders meet the deck — and the jacuzzi sits among them.",
  },
  {
    src: "/images/featured/featured-3.jpg",
    alt: "The lap pool with Llandudno Beach below and Lion's Head mountain in the background.",
    caption: "The lap pool above Llandudno Beach, Lion's Head behind.",
  },
];

export default function FeaturedPhotos() {
  return (
    <section
      id="featured"
      className="px-6 py-24 md:px-10 md:py-32"
      aria-label="Featured photographs of Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-5xl space-y-20 md:space-y-28">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <div
                className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                style={{ aspectRatio: "16 / 10" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 text-center text-sm italic text-[var(--color-muted)]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  );
}
