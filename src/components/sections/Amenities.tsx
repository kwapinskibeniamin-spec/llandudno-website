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
      className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32"
      aria-label="What's at Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            What's included
          </p>
          <h2 className="mt-6 text-center font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
            Set up for the way you'd actually live here.
          </h2>

          {/* Hero amenity strip */}
          <ul className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 md:grid-cols-8 md:gap-x-4">
            {heroAmenities.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  weight="thin"
                  size={40}
                  color="var(--color-atlantic-blue)"
                  aria-hidden="true"
                />
                <span className="mt-4 text-xs leading-tight text-[var(--color-ink)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* Prose paragraphs */}
          <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Service
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl md:text-2xl">
                A team that runs the house
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]">
                A dedicated housekeeper looks after the house day-to-day. Two cleaners, a regular garden and pool service, full security with camera coverage. The villa is managed to the standard the owners themselves expect when they're in residence.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Comfort
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl md:text-2xl">
                Built for long days at home
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]">
                Air-conditioning throughout. Fibre internet through the whole house. Full inverter backup — the power doesn't go out here, regardless of load-shedding. A wood-burning fireplace anchors the lounge for cooler evenings. Fully furnished, fully equipped, with the texture of a lived-in home rather than a rental.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Practical
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl md:text-2xl">
                The things you'd otherwise miss
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]">
                Three-car garage with workshop space and room for a golf cart. Separate laundry room. A home gym on the upper deck. Outdoor shower for the guest suite. Motion-sensor lighting in the bathrooms. Smart TV. The deck is set up for entertaining — built-in braai, outdoor dining for eight, several seating areas.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
