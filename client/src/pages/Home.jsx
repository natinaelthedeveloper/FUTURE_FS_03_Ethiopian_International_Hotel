import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutPreview from "../components/AboutPreview";
import RoomsPreview from "../components/RoomsPreview";
import DiningPreview from "../components/DiningPreview";
import FacilitiesPreview from "../components/FacilitiesPreview";
import OffersPreview from "../components/OffersPreview";
import TestimonialsPreview from "../components/TestimonialsPreview";
import GalleryPreview from "../components/GalleryPreview";
import BookingCTA from "../components/BookingCTA";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutPreview />
      <RoomsPreview />
      <DiningPreview />
      <FacilitiesPreview />
      <OffersPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <BookingCTA />
    </main>
  );
}

export default Home;
