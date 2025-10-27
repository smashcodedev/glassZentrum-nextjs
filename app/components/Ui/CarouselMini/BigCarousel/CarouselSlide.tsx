"use client";

import React from "react";

interface CarouselSlideProps {
  src: string;
  alt?: string;
  isActive?: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  src,
  alt = "",
  isActive = false,
}) => {
  return (
    <div
      // className={`relative transition-all duration-700 ease-in-out transform ${
      //   isActive
      //     ? "scale-105 opacity-100 z-20"
      //     : "scale-[0.85] opacity-60 z-10 blur-[2px]"
      // }`}
      className={`transition-all duration-700 ease-in-out transform ${
        isActive
          ? "scale-100 opacity-100 z-20"
          : "scale-[0.85] opacity-60 z-10 blur-[1px]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-[70vh] object-cover rounded-3xl shadow-2xl transition-transform duration-700`}
      />

      {/* Optional dark overlay for depth */}
      {!isActive && (
        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
      )}
    </div>
  );
};
