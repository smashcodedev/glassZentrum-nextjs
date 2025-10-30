"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "./Carousel";

interface BrandCarouselProps {
  title?: string;
  logos: { src: string; alt?: string }[];
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({
  title = "Brand Products",
  logos,
}) => {
  const slides = logos.map((logo, i) => (
    <motion.div
      key={i}
      className="flex items-center justify-center w-full h-[120px] sm:h-[140px] md:h-[160px] rounded-xl shadow-sm bg-white border border-gray-100 transition-all duration-300 hover:shadow-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
    >
      <img
        src={logo.src}
        alt={logo.alt || "Brand logo"}
        className="object-contain w-[70%] sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-[50%] max-h-[100px]"
        loading="lazy"
      />
    </motion.div>
  ));

  return (
    <motion.section
      aria-label={`${title} carousel`}
      className="w-full flex flex-col items-center py-10 px-4 sm:px-6 lg:px-12 bg-[#f6f9ff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}

      <div className="w-full max-w-[1250px] mx-auto">
        <Carousel
          items={slides}
          slidesPerView={{ base: 2, sm: 3, md: 4, lg: 4, xl: 4 }}
          loop={logos.length > 4}
          autoPlay={logos.length > 4}
          delay={4000}
          arrowBg="#2D2E83"
          arrowColor="#fff"
          className="mx-auto"
          itemClassName="px-2"
        />
      </div>
    </motion.section>
  );
};
