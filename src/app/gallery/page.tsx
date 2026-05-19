import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalleryDesktop from "@/components/gallery/GalleryDesktop";
import GalleryMobile from "@/components/gallery/GalleryMobile";
import GalleryScrollDesktop from "@/components/gallery/GalleryScrollDesktop";
import GalleryScrollMobile from "@/components/gallery/GalleryScrollMobile";

export const metadata: Metadata = {
  title: "Gallery — Lion House",
  description:
    "Lion House room by room — the top-floor suites and study, the first-floor kitchen and pool deck, and the ground-floor guest suite.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        {/*
          Desktop / mobile splits are CSS-gated, not JS — both subtrees render,
          one is hidden by viewport. SectionNav is homepage-specific and absent.
        */}

        {/* Step 15 — interactive aerial diagram */}
        <div className="hidden lg:block">
          <GalleryDesktop />
        </div>
        <div className="lg:hidden">
          <GalleryMobile />
        </div>

        {/* Step 15c — scroll-explorer archive */}
        <section className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              All photographs
            </p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
              Browse the full archive, by area.
            </h2>
          </div>
        </section>

        <div className="hidden lg:block">
          <GalleryScrollDesktop />
        </div>
        <div className="lg:hidden">
          <GalleryScrollMobile />
        </div>
      </main>
      <Footer />
    </>
  );
}
