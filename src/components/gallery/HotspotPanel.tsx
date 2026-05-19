"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Hotspot } from "./galleryData";

interface HotspotPanelProps {
  /** The hotspot to show, or null when the panel is closed. */
  hotspot: Hotspot | null;
  /** Called on ×, ESC, or scrim click. */
  onClose: () => void;
}

/*
 * Slide-in dialog for a single hotspot. Always mounted; open/closed is driven
 * by the `hotspot` prop so the slide-out animates. While open it traps focus,
 * closes on ESC, and locks body scroll. When closed it is `inert`, removing it
 * from the tab order and the accessibility tree.
 */
export default function HotspotPanel({ hotspot, onClose }: HotspotPanelProps) {
  const open = hotspot !== null;
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  /*
   * Keep the last hotspot on screen through the slide-out so the content
   * doesn't flash empty mid-transition. Updated only when a hotspot is set.
   */
  const displayedRef = useRef<Hotspot | null>(hotspot);
  if (hotspot) displayedRef.current = hotspot;
  const displayed = displayedRef.current;

  // ESC to close, Tab focus trap, and body scroll lock — only while open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* Scrim — faint, no shadow; doubles as a click-to-close target */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[rgba(31,42,45,0.15)] transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hotspot-panel-label"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(480px,38vw)] flex-col border-l border-[var(--color-hairline)] bg-[var(--color-cream)] motion-safe:transition-transform motion-safe:duration-[320ms] motion-safe:ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end border-b border-[var(--color-hairline)] px-6 py-4">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-xs)] border border-[var(--color-hairline)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M1 1 L13 13 M13 1 L1 13"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>

        {displayed && (
          <div className="flex-1 overflow-y-auto px-8 py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {displayed.location}
            </p>
            <h2
              id="hotspot-panel-label"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[1.15]"
            >
              {displayed.label}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
              {displayed.description}
            </p>

            {displayed.photos.length > 0 ? (
              <div className="mt-8 space-y-4">
                {displayed.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="480px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex items-center justify-center border border-[var(--color-hairline)] px-6 py-20">
                <p className="text-center text-sm italic text-[var(--color-muted)]">
                  Photographs of this space are being prepared.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
