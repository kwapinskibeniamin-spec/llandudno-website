import Image from "next/image";
import { hotspots } from "./galleryData";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

/*
 * Mobile / narrow-viewport gallery — a vertical editorial scroll, one section
 * per area. No diagram, no hotspots, no interactivity. The content is server-
 * rendered; FadeInOnScroll wraps it for the scroll-in fade, and the layout.tsx
 * <noscript> rule keeps it visible if JavaScript is disabled (progressive
 * enhancement — the mobile gallery remains usable with JS off).
 */
export default function GalleryMobile() {
  return (
    <div>
      <FadeInOnScroll>
        <section className="px-6 pb-12 pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            The house
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.1]">
            Room by room.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
            Lion House across three floors — the top-floor suites and study, the
            first-floor living and pool deck, the guest suite on the ground.
          </p>
        </section>

        {hotspots.map((spot) => (
          <section
            key={spot.id}
            id={spot.id}
            className="border-t border-[var(--color-hairline)] px-6 py-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {spot.location}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[1.15]">
              {spot.label}
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-[var(--color-muted)]">
              {spot.description}
            </p>

            {spot.photos.length > 0 ? (
              <div className="mt-8 space-y-4">
                {spot.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                    style={{ aspectRatio: "16 / 10" }}
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
            ) : (
              <div className="mt-8 flex items-center justify-center border border-[var(--color-hairline)] px-6 py-16">
                <p className="text-center text-sm italic text-[var(--color-muted)]">
                  Photographs of this space are being prepared.
                </p>
              </div>
            )}
          </section>
        ))}
      </FadeInOnScroll>
    </div>
  );
}
