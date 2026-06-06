"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  {
    src: "/images/hero/hero-1-lounge.jpg",
    alt: "Living room with concrete ceiling and full-width sliding doors open to the granite boulders and ocean at sunset.",
  },
  {
    src: "/images/hero/hero-2-deck.jpg",
    alt: "The wooden deck with lap pool and ocean view at golden hour.",
  },
  {
    src: "/images/hero/hero-3-dining.jpg",
    alt: "Open-plan dining looking through full-width sliders to the pool deck and Atlantic Ocean at golden hour.",
  },
];

const DURATION = 450;

// Role 0 = active/centre (big, bright, on top), 1 = next (peeks right, behind),
// 2 = previous (peeks left, behind). Side cards are scaled to ~80% so they read
// as shorter, and offset just enough to peek out from behind the centre card —
// the maths keeps everything inside 0–100% of the viewport so there is never a
// horizontal scrollbar (centre spans 21–79%, sides reach ~3% / ~97%).
const ROLE_STYLE: Record<
  number,
  { transform: string; opacity: number; zIndex: number }
> = {
  0: { transform: "translate(-50%, -50%) scale(1)", opacity: 1, zIndex: 30 },
  1: { transform: "translate(-8.6%, -50%) scale(0.8)", opacity: 0.5, zIndex: 10 },
  2: { transform: "translate(-91.4%, -50%) scale(0.8)", opacity: 0.5, zIndex: 10 },
};

export default function IdentityCarousel() {
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const move = (dir: 1 | -1) =>
    setActive((a) => (a + dir + photos.length) % photos.length);

  const transition = reduce
    ? "none"
    : `transform ${DURATION}ms ease-out, opacity ${DURATION}ms ease-out`;

  return (
    <div
      role="group"
      aria-label="Featured photos of Lion House"
      className="flex items-center gap-1 sm:gap-2"
    >
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => move(-1)}
        className="relative z-40 shrink-0 p-2 text-[var(--color-ink)] transition-opacity hover:opacity-50 sm:p-3"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Layered viewport */}
      <div className="relative w-full overflow-hidden">
        {/* Invisible sizer reserves the centre photo's height for the absolutely
            positioned layers above it. */}
        <div aria-hidden="true" className="invisible mx-auto aspect-[3/2] w-[58%]" />

        {photos.map((photo, i) => {
          const role = (i - active + photos.length) % photos.length;
          const style = ROLE_STYLE[role];
          return (
            <div
              key={photo.src}
              className="absolute left-1/2 top-1/2 aspect-[3/2] w-[58%] overflow-hidden border border-[var(--color-hairline)]"
              style={{
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                transition,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Next photo"
        onClick={() => move(1)}
        className="relative z-40 shrink-0 p-2 text-[var(--color-ink)] transition-opacity hover:opacity-50 sm:p-3"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
