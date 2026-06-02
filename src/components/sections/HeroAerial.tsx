import Image from "next/image";
import Link from "next/link";

/*
 * Full-bleed, fixed, dimmed aerial hero. This is the fixed z-0 layer the rest
 * of the page scrolls over (see app/page.tsx). No interactivity, so it stays a
 * server component. The id="villa" anchor lives on the spacer in page.tsx, not
 * here.
 */
export default function HeroAerial() {
  return (
    <section
      aria-label="Lion House"
      className="fixed inset-0 z-0 h-screen w-full overflow-hidden"
    >
      <Image
        src="/images/hero/hero-aerial.jpg"
        alt="Aerial view of Lion House above Llandudno Beach at golden hour, the cove and granite boulders below."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dimming scrim — ink at 45%, hardcoded rgba */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(31,42,45,0.45)" }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-[var(--color-cream)] md:text-7xl">
          Lion House
        </h1>
        <p className="mt-6 max-w-xl text-base text-[var(--color-cream)] opacity-90 md:text-lg">
          A house above the boulders, the beach, the ocean.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-block border border-[var(--color-cream)] px-8 py-4 text-sm uppercase tracking-[0.16em] text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] md:text-base"
        >
          Send inquiry
        </Link>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-cream)] motion-safe:animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
