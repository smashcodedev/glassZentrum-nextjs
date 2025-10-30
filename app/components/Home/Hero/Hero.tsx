"use client";

import HeroText from "./HeroText";
import HeroCarousel from "./HeroCarousel";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      className="relative max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_6fr]
             items-center px-4 sm:px-8 md:px-12 lg:px-0 gap-10 lg:gap-12
             overflow-hidden lg:max-w-[1250px]
             mr-auto xl:mr-0 xl2:mr-0 xl2:grid-cols-[5fr_6fr] xl2:max-w-[1536px] xl2:ml-[8rem] 3xl:max-w-[1250px]  3xl:ml-auto 3xl:mr-auto"
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
