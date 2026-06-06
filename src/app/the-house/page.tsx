import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The House — Lion House",
  description:
    "Lion House floor by floor — the ground-floor guest suite, the main living level, and the bedrooms above — with the service and comfort that keep the house running.",
};

const floors = [
  {
    label: "Ground floor",
    title: "The guest suite",
    body: "The lowest level is given over to a substantial guest suite — the largest single room in the house, open-plan with bedroom and lounge, a private entrance directly from the garden, an en suite with double basin and a granite rock feature in the wall. There is an outdoor shower, and the suite has its own access to the lawn. Used as part of the house, or kept entirely separate. The garage and laundry sit on this level too.",
  },
  {
    label: "First floor",
    title: "The main living",
    body: "The middle level is the heart of the house. An open-plan living room with a wood-burning fireplace, a kitchen with separate pantry and scullery, and a dining area for eight. Full-width sliding doors open onto the front terrace — the lap pool, the built-in braai, the deck running edge to ocean. A home gym sits on the deck's left side, outdoors and apart from the rest.",
  },
  {
    label: "Second floor",
    title: "Four bedrooms and a study",
    body: "The top level holds four bedrooms. The master suite faces the ocean — walk-in closet, air-conditioning, en suite with bath and shower. Three further bedrooms: one with its own bathroom, two sharing another. The two sea-facing bedrooms open onto a shared deck with hanging swings. A study sits at the rear, leading out to a private indigenous garden, a jacuzzi, and the granite boulder that anchors the home.",
  },
];

const details = [
  {
    label: "Service",
    title: "A team that runs the house",
    body: "A dedicated housekeeper looks after the house day-to-day. Two cleaners, a regular garden and pool service, full security with camera coverage. The villa is managed to the standard the owners themselves expect when they're in residence.",
  },
  {
    label: "Comfort",
    title: "Built for long days at home",
    body: "Air-conditioning throughout. Fibre internet through the whole house. Full inverter backup — the power doesn't go out here, regardless of load-shedding. A wood-burning fireplace anchors the lounge for cooler evenings. Fully furnished, fully equipped, with the texture of a lived-in home rather than a rental.",
  },
  {
    label: "Practical",
    title: "The things you'd otherwise miss",
    body: "Three-car garage with workshop space and room for a golf cart. Separate laundry room. A home gym on the upper deck. Outdoor shower for the guest suite. Motion-sensor lighting in the bathrooms. Smart TV. The deck is set up for entertaining — built-in braai, outdoor dining for eight, several seating areas.",
  },
];

export default function TheHousePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Three-floor walkthrough */}
        <section className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-[var(--color-ink)] md:text-6xl">
              The House
            </h1>
            <p className="mt-4 font-[family-name:var(--font-display)] text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
              A house on three floors, with the ground given to the guest.
            </p>

            <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
              {floors.map((floor) => (
                <article
                  key={floor.label}
                  className="grid grid-cols-1 gap-6 border-t border-[var(--color-hairline)] pt-10 md:grid-cols-[200px_1fr] md:gap-12 md:pt-12"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {floor.label}
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-[1.2] md:text-3xl">
                      {floor.title}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
                    {floor.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service / Comfort / Practical detail */}
        <section className="border-t border-[var(--color-hairline)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
            {details.map((detail) => (
              <article
                key={detail.label}
                className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-12"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {detail.label}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-[1.2] md:text-3xl">
                    {detail.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
                  {detail.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
