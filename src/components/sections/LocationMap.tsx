import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const distances = [
  { time: "8 min", direction: "north along the coast", to: "Camps Bay" },
  { time: "10 min", direction: "south through the pass", to: "Hout Bay" },
  { time: "12 min", direction: "south", to: "Chapman's Peak Drive" },
  { time: "25 min", direction: "north-east", to: "Cape Town city centre" },
  { time: "35 min", direction: "east", to: "Cape Town international airport" },
  { time: "45 min", direction: "south", to: "Cape of Good Hope" },
];

export default function LocationMap() {
  return (
    <section
      id="location"
      className="border-t border-[var(--color-hairline)] px-6 py-16 md:px-10 md:py-20"
      aria-label="Where Lion House sits"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-[var(--color-ink)] md:text-5xl">
            Where It Sits
          </h2>
          <p className="mt-4 text-center font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
            A protected cove, ten minutes from anywhere.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Llandudno is Cape Town's quietest residential beach. There is no through traffic, no shops, no restaurants — the cove is protected on three sides by granite. Camps Bay sits five minutes north along the coast, Hout Bay ten minutes south through the pass.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            {/* Map placeholder */}
            <div
              className="relative overflow-hidden border border-[var(--color-hairline)] bg-[var(--color-mist-blue)]"
              style={{ aspectRatio: "4 / 3" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Custom map
                </p>
                <p className="mt-3 max-w-xs px-6 text-sm text-[var(--color-muted)]">
                  A styled Mapbox view of the cove and surrounds will live here once the API key is in place.
                </p>
              </div>
            </div>

            {/* Distances */}
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Drive times from Lion House
              </p>
              <ul className="mt-6 space-y-5">
                {distances.map((d) => (
                  <li
                    key={d.to}
                    className="flex items-baseline gap-4 border-b border-[var(--color-hairline)] pb-5 last:border-b-0"
                  >
                    <span className="font-[family-name:var(--font-display)] text-xl text-[var(--color-ink)] md:text-2xl">
                      {d.time}
                    </span>
                    <div className="flex-1 text-sm text-[var(--color-ink)]">
                      <span className="block font-medium">{d.to}</span>
                      <span className="text-[var(--color-muted)]">
                        {d.direction}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/about-llandudno"
              className="inline-block border-b border-[var(--color-ink)] pb-0.5 text-sm transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
            >
              Read the Llandudno guide
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
