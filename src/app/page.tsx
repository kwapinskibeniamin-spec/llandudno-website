import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionNav from "@/components/layout/SectionNav";
import HeroAerial from "@/components/sections/HeroAerial";
import Identity from "@/components/sections/Identity";
import AreasOfTheHouse from "@/components/sections/AreasOfTheHouse";
import TwoPaths from "@/components/sections/TwoPaths";
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

      {/* Opaque cream layer that scrolls over and hides the fixed hero. The
          Footer lives inside this same layer so its mt-32 stays an internal
          margin over the cream background — keeping the fixed hero fully
          covered down to the bottom of the page (no transparent gap that would
          let the aerial show through above the footer). */}
      <main className="relative z-10 bg-[var(--color-cream)]">
        <Identity />
        <AreasOfTheHouse />
        <TwoPaths />
        <Amenities />
        <LocationMap />
        <InquiryCta />
        <Footer />
      </main>
    </>
  );
}
