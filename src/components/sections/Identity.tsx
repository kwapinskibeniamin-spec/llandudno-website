import { UsersThree, Ruler, Bed, Shower } from "@phosphor-icons/react/dist/ssr";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";
import IdentityCarousel from "@/components/sections/IdentityCarousel";

const stats = [
  { Icon: UsersThree, value: "12", label: "Guests" },
  { Icon: Ruler, value: "450", label: "m²" },
  { Icon: Bed, value: "5", label: "Bedrooms" },
  { Icon: Shower, value: "5", label: "Bathrooms" },
];

export default function Identity() {
  return (
    <section
      id="identity"
      className="overflow-x-clip border-t border-[var(--color-hairline)] px-6 py-16 md:px-10 md:py-20"
      aria-label="About Lion House"
    >
      <FadeInOnScroll>
        <div className="mx-auto grid max-w-[100rem] grid-cols-1 items-center gap-12 lg:grid-cols-[32fr_68fr] lg:gap-16">
          {/* Left column — heading, paragraph, stats */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-[var(--color-ink)] md:text-5xl">
              Your Future Stay
            </p>
            <p className="mt-10 font-[family-name:var(--font-display)] text-2xl leading-[1.4] text-[var(--color-ink)]">
              A contemporary five-bedroom home in an elevated position above
              Llandudno Beach. Exposed concrete and warm timber, full-width
              sliding glass and a long lap pool on the deck
            </p>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon
                    weight="thin"
                    size={40}
                    color="var(--color-ink)"
                    aria-hidden="true"
                  />
                  <div>
                    <dd className="font-[family-name:var(--font-display)] text-[2rem] text-[var(--color-ink)]">
                      {value}
                    </dd>
                    <dt className="text-[1.2rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {label}
                    </dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — overlapping, looping photo carousel */}
          <IdentityCarousel />
        </div>
      </FadeInOnScroll>
    </section>
  );
}
