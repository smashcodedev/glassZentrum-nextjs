"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero-main.jpg",
  "/images/thumb-1.jpg",
  "/images/thumb-2.jpg",
  "/images/thumb-4.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = 3;

  // Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide only for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds per slide
      return () => clearInterval(interval);
    }
  }, [isMobile, current]);

  const nextSlide = () => {
    const next = (current + 1) % images.length;
    setCurrent(next);
    if (next >= startIndex + visibleCount) {
      setStartIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    const prev = (current - 1 + images.length) % images.length;
    setCurrent(prev);
    if (prev < startIndex) {
      setStartIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const visibleThumbnails = Array.from({ length: visibleCount }).map(
    (_, i) => images[(startIndex + i) % images.length]
  );

  return (
    <div className="relative w-full h-full overflow-visible">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails Row + Arrows (Desktop only) */}
      {!isMobile && (
        <div className="absolute top-[63%] md:top-[75%] lg:top-[65%] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-full px-8 md:px-16">
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="p-2 bg-white/90 hover:bg-gray-100 rounded-full shadow-md transition absolute left-4 md:left-[13rem] lg:left-28 top-1/2 -translate-y-1/2 z-30"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Thumbnails */}
          <div className="flex gap-3 mx-auto overflow-hidden w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px]">
            {visibleThumbnails.map((img, index) => {
              const actualIndex = (startIndex + index) % images.length;
              return (
                <button
                  key={img}
                  onClick={() => setCurrent(actualIndex)}
                  className={`relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] shrink-0 overflow-hidden border-2 ${
                    actualIndex === current
                      ? "border-[#2B237C]"
                      : "border-transparent"
                  } transition-all`}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${index}`}
                    fill
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="p-2 bg-white/90 hover:bg-gray-100 rounded-full shadow-md transition absolute right-4 md:right-[16rem] lg:right-28 top-1/2 -translate-y-1/2 z-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-black scale-110"
                : "bg-black/30 hover:bg-black/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
