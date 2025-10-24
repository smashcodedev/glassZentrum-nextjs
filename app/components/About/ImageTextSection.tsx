// components/ImageTextSection.tsx
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
  paragraph = `We process flat glass in all its shapes and colors. We find professional solutions for every
challenge, which we implement with care and precision. If desired, we can also take care of the
subsequent assembly - be it in your private home or in your business premises.`,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
  imageSrc = "/images/building.jpg",
  imageAlt = "Modern glass building",
}) => {
  return (
    <section className="w-full bg-white px-6 sm:px-8 lg:px-12 py-12 relative">
      {/* Floating card - sibling to grid for scalable positioning */}
        <div className="hidden md:block absolute top-28 left-[24rem] right-0 z-10">
        <div className="bg-white w-[714px] h-[7.5rem] rounded-[20px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.08)] p-5 pl-8 max-w-[1250px] mx-auto flex items-center">
          <div>
            <div
              className="text-xl text-[#2D2E83] mb-2 font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {eyebrow}
            </div>
            <h3
              className="text-lg sm:text-xl md:text-4xl font-semibold text-[#0f1724]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="rounded-3xl overflow-hidden shadow-lg flex-shrink-0 w-[90%] max-w-[600px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover rounded-3xl w-full h-[260px] sm:h-[315px] md:h-[360px] lg:h-[520px]"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="order-first lg:order-last lg:pt-[13rem]">
          <div className="max-w-[540px] mx-auto lg:mx-0" style={{ fontFamily: "var(--font-inter)" }}>
            <p className="text-[#585C67] leading-relaxed text-base sm:text-lg lg:text-[22px] mb-6">
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

        {/* Mobile card */}
        <div className="md:hidden mt-4 w-full max-w-[520px] mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="text-xs text-[#6b6b6b] mb-1 font-medium">{eyebrow}</div>
            <h3 className="text-base font-semibold text-[#0f1724]">{title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
