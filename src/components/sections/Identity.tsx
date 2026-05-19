import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

export default function Identity() {
  return (
    <section
      id="identity"
      className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32"
      aria-label="About Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            The villa
          </p>
          <p className="mt-8 font-[family-name:var(--font-display)] text-2xl leading-[1.4] text-[var(--color-ink)] md:text-3xl">
            A contemporary five-bedroom home in an elevated position above
            Llandudno Beach. Exposed concrete and warm timber, full-width
            sliding glass, a long lap pool on the deck, and a wood-burning
            fireplace for the cooler evenings. A natural granite boulder
            frames a private outdoor space at the rear of the home — the kind
            of detail that makes a house belong to where it is.
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
