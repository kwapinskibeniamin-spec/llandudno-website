import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionNav from "@/components/layout/SectionNav";
import HeroAerial from "@/components/sections/HeroAerial";
import Triptych from "@/components/sections/Triptych";
import Identity from "@/components/sections/Identity";
import AreasOfTheHouse from "@/components/sections/AreasOfTheHouse";
import TwoPaths from "@/components/sections/TwoPaths";
import RoomsSummary from "@/components/sections/RoomsSummary";
import Amenities from "@/components/sections/Amenities";
import LocationMap from "@/components/sections/LocationMap";
import InquiryCta from "@/components/sections/InquiryCta";

export default function Home() {
  return (
    <>
      <Navigation transparentOverHero />
      <SectionNav />

      {/* Fixed, full-screen dimmed aerial. The content below scrolls over it. */}
      <HeroAerial />

      {/* Reserves the first viewport so the hero is fully visible on load and
          carries the "villa" anchor for the nav. */}
      <div id="villa" className="h-screen" aria-hidden="true" />

      {/* Opaque cream layer that scrolls over and hides the fixed hero. */}
      <main className="relative z-10 bg-[var(--color-cream)]">
        <Triptych />
        <Identity />
        <AreasOfTheHouse />
        <TwoPaths />
        <RoomsSummary />
        <Amenities />
        <LocationMap />
        <InquiryCta />
      </main>

      {/* Footer shares the opaque layer so it covers the fixed hero at the
          bottom of the page rather than letting the photo show through. */}
      <div className="relative z-10 bg-[var(--color-cream)]">
        <Footer />
      </div>
    </>
  );
}
