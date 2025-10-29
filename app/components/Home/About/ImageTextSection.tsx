/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

export interface ImageTextSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  eyebrow = "Information",
  title = "In our glassworks in Altona",
  paragraph = `We process flat glass in all its shapes and colors. We find professional solutions for every challenge, which we implement with care and precision. If desired, we can also take care of the subsequent assembly - be it in your private home or in your business premises. `,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
  imageSrc = "/images/building.jpg",
  imageAlt = "Modern glass building",
}) => {
  return (
    <section className="w-full bg-white px-6 sm:px-8 lg:px-12 py-12 relative">
      {/* Floating Card (Desktop) */}
      <div className="absolute z-10 justify-center w-full px-3 sm:px-4 pointer-events-none hidden md:flex top-[5rem] sm:top-[7rem] lg:top-[8rem] left-[60%] -translate-x-1/2">
        <div
          className="
      bg-white 
      rounded-2xl sm:rounded-[24px] md:rounded-[30px]
      shadow-[0px_8px_16px_rgba(0,0,0,0.08)]
      p-2 sm:p-2 md:p-8 
      w-[90%] sm:w-[85%] md:w-full 
      max-w-[720px]
      hidden lg:flex flex-col items-start
      scale-75 lg:scale-100
      
    "
        >
          <div>
            <div
              className="text-base sm:text-base md:text-xl text-[#2D2E83] mb-2 font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {eyebrow}
            </div>
            <h3
              className="text-lg sm:text-2xl md:text-4xl font-semibold text-[#0f1724]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative rounded-3xl overflow-hidden shadow-lg flex-shrink-0 w-full lg:w-[90%] max-w-full lg:max-w-[600px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover rounded-3xl w-full h-[260px] sm:h-[315px] md:h-[360px] lg:h-[520px]"
              loading="lazy"
            />
            {/* Floating Card (Mobile Only) */}
            <div
              className="
    absolute 
    z-10 
    flex md:hidden 
    justify-center 
    w-full 
    pointer-events-none 
    top-[2.5rem]
    left-1/2 -translate-x-[60%]
  "
            >
              <div
                className="
      bg-white 
      rounded-xl sm:rounded-2xl 
      shadow-[0px_6px_12px_rgba(0,0,0,0.08)] 
      px-4 sm:px-6 py-3 sm:py-4 
      w-[88%] sm:w-[85%] 
      max-w-[480px] 
      flex flex-col items-start 
      scale-[0.95] sm:scale-100 
      pointer-events-auto
      transition-all duration-300
    "
              >
                <div>
                  <div
                    className="text-sm sm:text-base text-[#2D2E83] mb-1 sm:mb-2 font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {eyebrow}
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-semibold text-[#0f1724] leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="order-last lg:order-last lg:pt-[15rem] -translate-x-10">
          <div
            className="max-w-[580px] lg:max-w-[540px] mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <p className="text-[#585C67] leading-[32px] text-base sm:text-lg lg:text-[22px] mb-8">
              {paragraph}
            </p>

            <Link
              href={ctaHref}
              className="inline-block bg-[#0bb04f] text-white font-medium px-6 py-3 mt-6 rounded-full shadow hover:shadow-md transition"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* Mobile Card */}
      </div>
    </section>
  );
};

export default ImageTextSection;
