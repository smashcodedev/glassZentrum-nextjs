"use client";

import HeroText from "./HeroText";
import HeroCarousel from "./HeroCarousel";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_6fr] 
                 items-center px-4 sm:px-8 md:px-12 lg:px-20 gap-10 lg:gap-12 
                 overflow-hidden min-h-[80vh] lg:min-h-[calc(100vh-80px)] lg:pr-0 lg:mr-0"
    >
      {/* Left Side */}
      <div className="flex justify-center lg:justify-start items-center lg:-translate-y-0">
        <HeroText />
      </div>

      {/* Right Side */}
      <div className="relative w-full h-[400px] sm:h-[420px] md:h-[600px] lg:h-[720px] overflow-hidden ">
        <HeroCarousel />
        <SocialIcons />
      </div>
    </section>
  );
}
