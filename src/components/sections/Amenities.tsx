import {
  Waves,
  WifiHigh,
  Lightning,
  Sparkle,
  Fire,
  Bathtub,
  Garage,
  Path,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

const heroAmenities = [
  { Icon: Waves, label: "Lap pool" },
  { Icon: WifiHigh, label: "Fibre internet" },
  { Icon: Lightning, label: "Inverter backup" },
  { Icon: Sparkle, label: "Housekeeper" },
  { Icon: Fire, label: "Fireplace" },
  { Icon: Bathtub, label: "Jacuzzi" },
  { Icon: Garage, label: "Three-car garage" },
  { Icon: Path, label: "Beach access" },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="border-t border-[var(--color-hairline)] px-6 py-16 md:px-10 md:py-20"
      aria-label="What's at Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-[var(--color-ink)] md:text-5xl">
            What's Included
          </h2>
          <p className="mt-4 text-center font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
            Set up for the way you'd actually live here.
          </p>

          {/* Hero amenity strip */}
          <ul className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 md:grid-cols-8 md:gap-x-4">
            {heroAmenities.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  weight="thin"
                  size={42}
                  color="var(--color-ink)"
                  aria-hidden="true"
                />
                <span className="mt-4 text-xs leading-tight text-[var(--color-ink)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* Link through to the full house detail */}
          <div className="mt-20 text-center">
            <Link
              href="/the-house"
              className="inline-block border-b border-[var(--color-ink)] pb-0.5 text-sm transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
            >
              More about the house →
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
