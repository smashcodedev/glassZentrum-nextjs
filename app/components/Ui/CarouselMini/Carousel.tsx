"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useCarousel } from "./hooks/useCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CarouselProps {
  items: React.ReactNode[];
  slidesPerView?: {
    base: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  loop?: boolean;
  autoPlay?: boolean;
  delay?: number;
  className?: string;
  itemClassName?: string;
  arrowColor?: string;
  arrowBg?: string;
  showArrows?: boolean;
  gap?: string; // Tailwind spacing class, e.g. "px-4"
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  slidesPerView = { base: 1, sm: 2, md: 3, lg: 4 },
  loop = false,
  autoPlay = false,
  delay = 3000,
  className = "",
  itemClassName = "",
  arrowColor = "#fff",
  arrowBg = "#2D2E83",
  showArrows = true,
  gap = "px-4",
}) => {
  const { emblaRef, emblaApi } = useCarousel(
    { loop, align: "start", skipSnaps: false },
    autoPlay,
    delay
  );

  const [slideWidth, setSlideWidth] = useState(100 / slidesPerView.base);

  const updateSlideWidth = useCallback(() => {
    const w = window.innerWidth;
    let widthPercent = 100 / slidesPerView.base;

    if (w >= 1536 && slidesPerView.xl) widthPercent = 100 / slidesPerView.xl;
    else if (w >= 1280 && slidesPerView.lg)
      widthPercent = 100 / slidesPerView.lg;
    else if (w >= 1024 && slidesPerView.md)
      widthPercent = 100 / slidesPerView.md;
    else if (w >= 640 && slidesPerView.sm)
      widthPercent = 100 / slidesPerView.sm;

    setSlideWidth(widthPercent);
  }, [slidesPerView]);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, [updateSlideWidth]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Show arrows only if more slides exist than visible
  const displayArrows =
    showArrows && items.length > (slidesPerView.lg || 4);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div ref={emblaRef} className="overflow-visible">
        <div className={`flex touch-pan-y`}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${gap} ${itemClassName}`}
              style={{
                flex: `0 0 ${slideWidth}%`,
                boxSizing: "border-box",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {displayArrows && (
        <div className="flex gap-3 justify-center items-center mt-6">
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md transition hover:opacity-80"
            style={{ backgroundColor: arrowBg }}
          >
            <ArrowLeft color={arrowColor} size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md transition hover:opacity-80"
            style={{ backgroundColor: arrowBg }}
          >
            <ArrowRight color={arrowColor} size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
