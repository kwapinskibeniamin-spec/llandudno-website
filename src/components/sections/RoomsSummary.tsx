import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

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
]

export default function RoomsSummary() {
  return (
    <section
      id="house"
      className="border-t border-[var(--color-hairline)] px-6 py-24 md:px-10 md:py-32"
      aria-label="The house, floor by floor"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            The house
          </p>
          <h2 className="mt-6 text-center font-[family-name:var(--font-display)] text-3xl leading-[1.15] md:text-4xl">
            A house on three floors,<br className="hidden md:inline" /> with the ground given to the guest.
          </h2>

          <div className="mt-20 space-y-16 md:space-y-20">
            {floors.map((floor) => (
              <article
                key={floor.label}
                className="grid grid-cols-1 gap-6 border-t border-[var(--color-hairline)] pt-10 md:grid-cols-[200px_1fr] md:gap-12 md:pt-12"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {floor.label}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-[1.2] md:text-3xl">
                    {floor.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
                  {floor.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/gallery"
              className="inline-block border-b border-[var(--color-ink)] pb-0.5 text-sm transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]"
            >
              Browse the full house
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
