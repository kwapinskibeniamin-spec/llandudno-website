"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryPhoto } from "./galleryScrollData";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

/*
 * Desktop scroll-explorer (Step 15c) — sticky category sidebar on the left,
 * a long vertical scroll of photos grouped by category on the right. The
 * sidebar tracks the active section via IntersectionObserver (same pattern as
 * SectionNav). Hidden below 1024px; GalleryScrollMobile covers narrow widths.
 *
 * Anchor ids are namespaced (archive-desktop-<id>) to avoid colliding with
 * GalleryMobile and GalleryScrollMobile, which share category slugs.
 */

const SECTION_PREFIX = "archive-desktop-";

type PhotoRow = { type: "full" | "pair"; photos: GalleryPhoto[] };

/*
 * Editorial rhythm: a lead full-width image, then alternating pairs and
 * fulls. Two photos are a special case (a single pair). A trailing odd photo
 * is rendered full-width.
 */
function buildRows(photos: GalleryPhoto[]): PhotoRow[] {
  if (photos.length === 2) return [{ type: "pair", photos }];

  const rows: PhotoRow[] = [];
  let i = 0;
  let wantFull = true;
  while (i < photos.length) {
    if (wantFull || i + 1 >= photos.length) {
      rows.push({ type: "full", photos: [photos[i]] });
      i += 1;
    } else {
      rows.push({ type: "pair", photos: [photos[i], photos[i + 1]] });
      i += 2;
    }
    wantFull = !wantFull;
  }
  return rows;
}

function CategoryPhotos({ photos }: { photos: GalleryPhoto[] }) {
  // One placeholder per empty section — no real photos yet (v1).
  if (photos.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center border border-[var(--color-hairline)]">
        <p className="px-6 text-center text-sm italic text-[var(--color-muted)]">
          Photographs of this area are being prepared.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {buildRows(photos).map((row) =>
        row.type === "full" ? (
          <div
            key={row.photos[0].src}
            className="relative aspect-[16/10] overflow-hidden border border-[var(--color-hairline)]"
          >
            <Image
              src={row.photos[0].src}
              alt={row.photos[0].alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div key={row.photos[0].src} className="grid grid-cols-2 gap-4">
            {row.photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden border border-[var(--color-hairline)]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default function GalleryScrollDesktop() {
  const [activeId, setActiveId] = useState<string>(galleryCategories[0].id);

  useEffect(() => {
    // Track the category currently in view — same approach as SectionNav.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((closest, entry) =>
            entry.boundingClientRect.top < closest.boundingClientRect.top
              ? entry
              : closest
          );
          setActiveId(topMost.target.id.replace(SECTION_PREFIX, ""));
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    galleryCategories.forEach(({ id }) => {
      const el = document.getElementById(SECTION_PREFIX + id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(SECTION_PREFIX + id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-10 pb-24">
      <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-16">
        {/* Sticky category sidebar */}
        <nav
          aria-label="Gallery categories"
          className="sticky top-24 self-start"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Browse by area
          </p>
          <ul className="mt-6 space-y-4 border-l border-[var(--color-hairline)] py-2">
            {galleryCategories.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <li key={cat.id} className="relative">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1px] top-0 h-full w-px bg-[var(--color-atlantic-blue)]"
                    />
                  )}
                  <a
                    href={`#${SECTION_PREFIX}${cat.id}`}
                    onClick={(e) => handleClick(e, cat.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block py-1 pl-5 text-xs transition-colors ${
                      isActive
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {cat.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Photo sections */}
        <div>
          {galleryCategories.map((cat) => (
            <FadeInOnScroll key={cat.id}>
              <section
                id={`${SECTION_PREFIX}${cat.id}`}
                className="border-t border-[var(--color-hairline)] py-24 md:py-32"
              >
                <h3 className="font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
                  {cat.label}
                </h3>
                {cat.description && (
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
                    {cat.description}
                  </p>
                )}
                <div className="mt-10">
                  <CategoryPhotos photos={cat.photos} />
                </div>
              </section>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
