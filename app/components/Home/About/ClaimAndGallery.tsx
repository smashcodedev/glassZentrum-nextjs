"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ClaimAndGalleryProps {
  heading?: string;
  paragraph?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string; // Single composed image instead of multiple collage pieces
  imageAlt?: string;
}

const ClaimAndGallery: React.FC<ClaimAndGalleryProps> = ({
  heading = "Custom-made glass – our claim and promise",
  paragraph = `We run our glassworks as a master company. For us that means: solid craftsmanship based on years of experience, an extensive glass warehouse and a large workshop with the latest state-of-the-art technology. Here we use various glass processing machines to bring glass and mirrors into top shape.`,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
  imageSrc = "/images/benefits.png",
  imageAlt = "Our team working on custom glass pieces",
}) => {
  return (
    <section className="w-full bg-[#f6f8fb] px-6 sm:px-8 lg:px-12 py-10 lg:py-12 relative">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Side - Left */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0f1724] leading-snug mb-5"
           style={{ fontFamily: "var(--font-inter)" }}
          >
            {heading}
          </h2>
          <p
            className="text-[#585C67] font-normal text-base lg:text-[19px] sm:text-lg mb-7 max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {paragraph}
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-[#00A13A] text-white font-medium text-[16px] py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#009136] focus:outline-none focus:ring-2 focus:ring-[#00A13A]/40"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Image Side - Right */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:pr-4">
          <div className=" overflow-hidden  w-[450px] sm:w-[450px] md:w-[460px] lg:w-[520px] flex-shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={960}
              height={720}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimAndGallery;
