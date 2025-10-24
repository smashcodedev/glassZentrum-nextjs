"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/hero-main.jpg",
  "/images/thumb-1.jpg",
  "/images/thumb-2.jpg",
  "/images/thumb-2.jpg",
];

export default function HeroImage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden">
      <Image
        src={images[current]}
        alt="Hero image"
        fill
        className="object-cover transition-all duration-500"
        priority
      />

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setCurrent(index)}
            className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
              index === current ? "border-[#2B237C]" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumb ${index}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
