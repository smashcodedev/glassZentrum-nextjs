"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CardCarouselProps {
  title?: string;
  items: {
    image: string;
    date: string;
    headline: string;
    description: string;
    link?: string;
  }[];
}

export default function CardCarousel({
  title = "Our Latest News",
  items,
}: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of visible cards
  const visibleCount = 3;

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    if (currentIndex + visibleCount >= items.length) return;
    setCurrentIndex((prev) =>
      Math.min(prev + visibleCount, items.length - visibleCount)
    );
  };

  // Responsive: show 1 card on mobile, 2 on tablet
  const [cardsPerView, setCardsPerView] = useState(visibleCount);
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="w-full flex flex-col items-center py-10 px-4 sm:px-6 lg:px-12 bg-[#f9fbff]">
      {title && (
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#1e2447]">
          {title}
        </h2>
      )}

      <div className="relative w-full max-w-[1250px]">
        {/* AnimatePresence for smooth fade/slide */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex} // triggers animation on index change
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {visibleItems.map((item, i) => (
              <motion.div
                key={item.headline + i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#2D2E83] text-white px-4 py-1 rounded-lg text-sm font-medium">
                    {item.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.headline}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href={item.link || "#"}
                    className="inline-flex items-center text-[#2D2E83] font-medium hover:underline"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 bg-white border rounded-full shadow hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= items.length}
            className="p-3 bg-[#2D2E83] text-white rounded-full shadow hover:bg-[#222374] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
