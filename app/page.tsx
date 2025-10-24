"use client";

import ClaimAndGallery from "./components/About/ClaimAndGallery";
import ImageTextSection from "./components/About/ImageTextSection";
import EmergencyBanner from "./components/Banner/EmergencyBanner";
import GlassProjectSection from "./components/Final/GlassPrjectSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroSplit from "./components/HeroSpilt/HeroSpilt";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <section className="bg-[#f8f9ff] min-h-screen">
        <EmergencyBanner
          onCta={() => {
            console.log("emergency cta");
          }}
        />

        <HeroSplit />
      </section>

      <section className="bg-white">
        <ImageTextSection
          imageSrc="/images/building.jpg"
        />

        <ClaimAndGallery heading="Custom-made glass – our claim and promise" />
      </section>

      <GlassProjectSection />
      <Footer />
    </>
  );
}
