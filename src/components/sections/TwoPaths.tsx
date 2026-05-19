import Image from "next/image";
import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const paths = [
  {
    href: "/december",
    label: "A week in December",
    period: "Peak season · minimum 1 week",
    description:
      "Long days at the pool, the deck dressed for dinner with eight, the southeaster softening at sunset. Lion House is available in December for stays of one week or longer.",
    image: "/images/paths/path-december.jpg",
    imageAlt: "The shared upper-deck balcony with hanging swings, looking down to Llandudno Beach and the mountain beyond.",
  },
  {
    href: "/season",
    label: "Your season in Cape Town",
    period: "Off-season · 1 to 6 months",
    description:
      "May through November, when the cove quiets and the light turns sharp. The villa is set up for working from home — fibre, a dedicated study, full backup power. Stays from one month upward.",
    image: "/images/paths/path-season.jpg",
    imageAlt: "The open-plan kitchen with concrete ceiling, the dining area and ocean visible through full-width sliding doors.",
  },
];

export default function TwoPaths() {
  return (
    <section
      id="stays"
      className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32"
      aria-label="Stays at Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Two ways to stay
          </p>
          <h2 className="mt-6 text-center font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
            The villa keeps two seasons.
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
            {paths.map((path) => (
              <article key={path.href} className="flex flex-col">
                <Link
                  href={path.href}
                  className="group block"
                  aria-label={`Read more about ${path.label}`}
                >
                  <div
                    className="relative w-full overflow-hidden border border-[var(--color-hairline)]"
                    style={{ aspectRatio: "4 / 5" }}
                  >
                    <Image
                      src={path.image}
                      alt={path.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {path.period}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[1.1] md:text-4xl">
                    {path.label}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className="mt-6 inline-block border-b border-[var(--color-ink)] pb-0.5 text-sm transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
