"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

type Photo = { src: string; alt: string; caption: string };
type Tab = {
  id: string;
  label: string;
  blurb: string;
  clickable: boolean;
  photos: Photo[];
};

const tabs: Tab[] = [
  {
    id: "set-apart",
    label: "Ground floor",
    blurb: "A self-contained guest suite, the garage, and a private outdoor space at ground level.",
    clickable: false,
    photos: [
      {
        src: "/images/areas/apart-guest.jpg",
        alt: "The ground-floor guest suite with its own entrance.",
        caption: "A private guest suite with its own entrance from the garden.",
      },
      {
        src: "/images/areas/apart-garage.jpg",
        alt: "The three-car garage with workshop space.",
        caption: "Three-car garage, with workshop space and room for a golf cart.",
      },
      {
        src: "/images/areas/apart-outdoor.jpg",
        alt: "The outdoor shower and private garden access for the guest suite.",
        caption: "An outdoor shower, and direct access to the lawn.",
      },
    ],
  },
  {
    id: "main-floor",
    label: "Main floor",
    blurb: "Pool, kitchen, lounge — the level where the day unfolds.",
    clickable: true,
    photos: [
      {
        src: "/images/areas/main-pool.jpg",
        alt: "The lap pool on the front terrace with the ocean beyond.",
        caption: "The lap pool runs the length of the front terrace.",
      },
      {
        src: "/images/areas/main-kitchen.jpg",
        alt: "The open-plan kitchen with a timber island and concrete ceiling.",
        caption: "A chef's kitchen, with a pantry and scullery behind.",
      },
      {
        src: "/images/areas/main-living.jpg",
        alt: "The lounge opening through full-width glass to the deck and ocean.",
        caption: "The lounge opens through full-width glass to the deck.",
      },
    ],
  },
  {
    id: "bedrooms",
    label: "The bedrooms",
    blurb: "Five bedrooms on the upper floor, the master facing the ocean.",
    clickable: true,
    photos: [
      {
        src: "/images/areas/bed-master.jpg",
        alt: "The master bedroom with full-width glass on two sides.",
        caption: "From the master bedroom, the ocean wraps around two sides.",
      },
      {
        src: "/images/areas/bed-room.jpg",
        alt: "A sea-facing bedroom with sliding doors to the shared deck.",
        caption: "Two bedrooms share a deck with hanging swings over the cove.",
      },
      {
        src: "/images/areas/bed-back.jpg",
        alt: "The rear deck with the jacuzzi set among granite boulders.",
        caption: "At the rear, the jacuzzi sits among the granite boulders.",
      },
    ],
  },
];

export default function AreasOfTheHouse() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section
      id="areas"
      className="border-t border-[var(--color-hairline)] px-6 py-16 md:px-10 md:py-20"
      aria-label="Around the house"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-[100rem]">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-[var(--color-ink)] md:text-5xl">
              Around the House
            </h2>
            <p className="mt-4 font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
              Three floors, at a glance.
            </p>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Areas of the house"
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-12"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`relative pb-2 text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-full bg-[var(--color-atlantic-blue)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Blurb */}
          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            {active.blurb}
          </p>

          {/* Photos */}
          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {active.photos.map((photo) => {
              const figure = (
                <figure>
                  <div
                    className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                    style={{ aspectRatio: "3 / 2" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover transition-transform duration-700 ease-out ${
                        active.clickable ? "group-hover:scale-[1.02]" : ""
                      }`}
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm italic text-[var(--color-muted)]">
                    {photo.caption}
                  </figcaption>
                </figure>
              );

              return active.clickable ? (
                <Link key={photo.src} href="/gallery" className="group block">
                  {figure}
                </Link>
              ) : (
                <div key={photo.src}>{figure}</div>
              );
            })}
          </div>

          {/* Gallery link */}
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
