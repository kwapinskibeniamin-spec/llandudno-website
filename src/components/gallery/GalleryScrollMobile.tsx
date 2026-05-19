"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategories } from "./galleryScrollData";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

/*
 * Mobile scroll-explorer (Step 15c) — a horizontally scrollable strip of
 * category pills, sticky to the top of the viewport, above a single-column
 * stack of photo sections. The active pill tracks scroll position. Visible
 * below 1024px; GalleryScrollDesktop covers wider widths.
 *
 * Anchor ids are namespaced (archive-mobile-<id>) to avoid colliding with
 * GalleryMobile and GalleryScrollDesktop, which share category slugs.
 */

const SECTION_PREFIX = "archive-mobile-";

export default function GalleryScrollMobile() {
  const [activeId, setActiveId] = useState<string>(galleryCategories[0].id);
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const firstRun = useRef(true);

  useEffect(() => {
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

  // Keep the active pill within view in the horizontal strip (skip on mount).
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    pillRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

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
    <div>
      {/* Sticky category pill strip */}
      <nav
        aria-label="Gallery categories"
        className="sticky top-0 z-30 border-b border-[var(--color-hairline)] bg-[var(--color-cream)]"
      >
        <div className="flex gap-2 overflow-x-auto px-6 py-3">
          {galleryCategories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <a
                key={cat.id}
                ref={(el) => {
                  pillRefs.current[cat.id] = el;
                }}
                href={`#${SECTION_PREFIX}${cat.id}`}
                onClick={(e) => handleClick(e, cat.id)}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap border px-3 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-[var(--color-atlantic-blue)] text-[var(--color-ink)]"
                    : "border-[var(--color-hairline)] text-[var(--color-muted)]"
                }`}
              >
                {cat.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Photo sections — single-column, full-width photos */}
      {galleryCategories.map((cat) => (
        <FadeInOnScroll key={cat.id}>
          <section
            id={`${SECTION_PREFIX}${cat.id}`}
            className="border-t border-[var(--color-hairline)] px-6 py-20"
          >
            <h3 className="font-[family-name:var(--font-display)] text-3xl leading-[1.15]">
              {cat.label}
            </h3>
            {cat.description && (
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                {cat.description}
              </p>
            )}
            <div className="mt-8">
              {cat.photos.length > 0 ? (
                <div className="space-y-4">
                  {cat.photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-[4/3] overflow-hidden border border-[var(--color-hairline)]"
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
                <div className="flex aspect-[4/3] items-center justify-center border border-[var(--color-hairline)]">
                  <p className="px-6 text-center text-sm italic text-[var(--color-muted)]">
                    Photographs of this area are being prepared.
                  </p>
                </div>
              )}
            </div>
          </section>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
