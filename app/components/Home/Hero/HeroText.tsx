"use client";

import HeroButtons from "./HeroButtons";

export default function HeroText() {
  return (
    <div className="relative flex flex-col items-start justify-center gap-8  sm:gap-10 max-w-[600px] lg:pl-0 px-2 sm:px-4 ">
      {/* Decorative Background */}

      {/* Heading */}
      <h1
        className="font-semibold text-[#0E0E0E]
        text-[clamp(2rem,5vw,68px)] leading-[1.1] lg:leading-[73px]
        tracking-[0] max-w-[600px] " 
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Your service provider for showers and glass partitions
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:pt-10">
        <HeroButtons />
      </div>
    </div>
  );
}
