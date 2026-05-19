"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  hotspots,
  AERIAL_SRC,
  AERIAL_ALT,
  AERIAL_ASPECT,
} from "./galleryData";
import HotspotPanel from "./HotspotPanel";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

/*
 * Desktop gallery — the aerial of Lion House overlaid with nine interactive
 * hotspots. Hover or focus a hotspot to reveal its label on a hairline line;
 * click to open the slide-in panel. Owns the single piece of state — which
 * panel is open — and remembers the triggering button so focus can return.
 */
export default function GalleryDesktop() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const activeHotspot = hotspots.find((spot) => spot.id === activeId) ?? null;

  const openHotspot = (id: string, button: HTMLButtonElement) => {
    triggerRef.current = button;
    setActiveId(id);
  };

  const closePanel = () => {
    setActiveId(null);
    triggerRef.current?.focus();
  };

  return (
    <section className="px-10 py-24" aria-label="Interactive plan of Lion House">
      <FadeInOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              The house
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[1.1]">
              Room by room.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
              An interactive plan of Lion House — select an area to see its
              photographs and a short description.
            </p>
          </div>

          {/* Aerial with positioned hotspots */}
          <div
            className="relative mt-16 w-full overflow-hidden border border-[var(--color-hairline)]"
            style={{ aspectRatio: AERIAL_ASPECT }}
          >
            <Image
              src={AERIAL_SRC}
              alt={AERIAL_ALT}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
              priority
            />

            {hotspots.map((spot) => {
              const isActive = activeId === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  aria-label={`${spot.label} — ${spot.location}`}
                  aria-haspopup="dialog"
                  aria-expanded={isActive}
                  onClick={(e) => openHotspot(spot.id, e.currentTarget)}
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 p-3"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className="relative block h-3 w-3 rounded-full border border-[var(--color-atlantic-blue)] bg-[var(--color-cream)]"
                  >
                    {/* Inner dot — pulses on hover/focus (motion-safe only) */}
                    <span className="absolute inset-[2px] rounded-full bg-[var(--color-atlantic-blue)] motion-safe:group-hover:animate-pulse motion-safe:group-focus-visible:animate-pulse" />

                    {/* Label + connector line — shown on hover/focus/active */}
                    <span
                      className={`pointer-events-none absolute bottom-full left-1/2 flex -translate-x-1/2 flex-col items-center transition-opacity duration-300 ease-out ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                      }`}
                    >
                      <span className="mb-1 whitespace-nowrap border border-[var(--color-hairline)] bg-[var(--color-cream)] px-2.5 py-1 text-xs text-[var(--color-ink)]">
                        {spot.label}
                      </span>
                      <span className="h-2.5 w-px bg-[var(--color-atlantic-blue)]" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm italic text-[var(--color-muted)]">
            Nine areas across three floors. Hover to name them, select to look closer.
          </p>
        </div>
      </FadeInOnScroll>

      {/*
        HotspotPanel is kept outside FadeInOnScroll: the fade wrapper applies a
        transform, and a transformed ancestor would break the panel's
        position:fixed (it would anchor to the wrapper, not the viewport).
      */}
      <HotspotPanel hotspot={activeHotspot} onClose={closePanel} />
    </section>
  );
}
