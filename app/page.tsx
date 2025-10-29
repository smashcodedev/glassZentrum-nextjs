"use client";

import ClaimAndGallery from "./components/Home/About/ClaimAndGallery";
import ImageTextSection from "./components/Home/About/ImageTextSection";
import EmergencyBanner from "./components/Home/Banner/EmergencyBanner";
import GlassProjectSection from "./components/Home/Final/GlassPrjectSection";
import Hero from "./components/Home/Hero/Hero";
import HeroSplit from "./components/Home/HeroSpilt/HeroSpilt";
import Services from "./components/Home/Services/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <section className="bg-[#f8f9ff] min-h-screen">
        <EmergencyBanner
          onCta={() => {
            console.log("emergency cta");
          }}
        />

        <HeroSplit imageSrc="/images/home/shelf.png" />
      </section>

      <section className="bg-white">
        <ImageTextSection imageSrc="/images/building.jpg" />
      </section>
      <ClaimAndGallery heading="Custom-made glass – our claim and promise" />
      <GlassProjectSection />
    </>
  );
}
