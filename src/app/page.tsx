import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionNav from "@/components/layout/SectionNav";
import Hero from "@/components/sections/Hero";
import Identity from "@/components/sections/Identity";
import FeaturedPhotos from "@/components/sections/FeaturedPhotos";
import TwoPaths from "@/components/sections/TwoPaths";
import RoomsSummary from "@/components/sections/RoomsSummary";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import Amenities from "@/components/sections/Amenities";
import LocationMap from "@/components/sections/LocationMap";
import InquiryCta from "@/components/sections/InquiryCta";

export default function Home() {
  return (
    <>
      <Navigation />
      <SectionNav />
      <main>
        <Hero />
        <Identity />
        <FeaturedPhotos />
        <TwoPaths />
        <RoomsSummary />
        <GalleryTeaser />
        <Amenities />
        <LocationMap />
        <InquiryCta />
      </main>
      <Footer />
    </>
  );
}
