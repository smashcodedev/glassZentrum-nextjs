"use client";

import React, { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEmblaCenterFocus } from "../hooks/useEmblaCenteredFocus";
import { CarouselSlide } from "./CarouselSlide";

interface CenterFocusCarouselProps {
  images: { src: string; alt?: string }[];
  autoPlay?: boolean;
  delay?: number;
  arrowBg?: string;
  arrowColor?: string;
}

export const CenterFocusCarousel: React.FC<CenterFocusCarouselProps> = ({
  images,
  autoPlay = true,
  delay = 4000,
  arrowBg = "#2D2E83",
  arrowColor = "#fff",
}) => {
  const { emblaRef, emblaApi, selectedIndex } = useEmblaCenterFocus(
    { loop: true, align: "center", skipSnaps: false },
    autoPlay,
    delay
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-[#f6f9ff] overflow-hidden">
      <div className="relative w-full overflow-visible" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              // className="flex-[0_0_80%] md:flex-[0_0_80%] lg:flex-[0_0_80%]"
              className={`flex-[0_0_70%] sm:flex-[0_0_70%] md:flex-[0_0_70%] lg:flex-[0_0_70%]`}
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <CarouselSlide
                src={img.src}
                alt={img.alt}
                isActive={selectedIndex === i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows pinned to active image edges */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-[15%] top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all"
        style={{ backgroundColor: arrowBg }}
      >
        <ArrowLeft color={arrowColor} size={24} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-[15%] top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all"
        style={{ backgroundColor: arrowBg }}
      >
        <ArrowRight color={arrowColor} size={24} />
      </button>
    </section>
  );
};
