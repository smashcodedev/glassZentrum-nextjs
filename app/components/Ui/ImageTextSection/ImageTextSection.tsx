/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ImageTextSectionProps {
  // Optional text props
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageHeight?: string; // e.g., "h-[400px]" or "360px"
  imageWidth?: string; // e.g., "w-full" or "600px"

  // Custom content for more flexibility
  imageNode?: React.ReactNode; // can be an img, logo, carousel, etc.
  textNode?: React.ReactNode; // custom text/content component
  floatingCardNode?: React.ReactNode; // custom floating card
  mobileCardNode?: React.ReactNode; // custom mobile card

  // Layout & styling
  reverse?: boolean; // swap image/text positions
  imageClassName?: string;
  textClassName?: string;
  floatingCardClassName?: string;
  mobileCardClassName?: string;
  sectionClassName?: string;
  bgColor?: string;
  paddingY?: string;
  paddingX?: string;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  eyebrow,
  title = "In our glassworks in Altona",
  paragraph = `We process flat glass in all its shapes and colors. We find professional solutions for every challenge, which we implement with care and precision.`,
  ctaLabel,
  imageHeight,
  imageWidth,
  ctaHref,
  imageNode,
  textNode,
  floatingCardNode,
  mobileCardNode,
  reverse = false,
  imageClassName = "",
  textClassName = "",
  floatingCardClassName = "",
  mobileCardClassName = "",
  sectionClassName = "",
  bgColor = "bg-white",
  paddingY = "py-12",
  paddingX = "px-6 sm:px-8 lg:px-12",
  imageSrc,
}) => {
  return (
    <section
      className={`w-full ${bgColor} ${paddingY} ${paddingX} relative ${sectionClassName}`}
    >
      {/* Floating Card (Desktop) */}
      {floatingCardNode !== null && (
        <div
          className={`hidden md:block absolute top-28 left-[24rem] right-0 z-10 ${floatingCardClassName}`}
        >
          {floatingCardNode ?? (
            <div
              className={cn(
                "bg-white w-[714px] h-[7.5rem] rounded-[20px] shadow-lg p-[6rem] pl-8 max-w-[1250px] mx-auto flex items-center"
              )}
            >
              <div>
                {eyebrow && (
                  <div
                    className="text-xl text-[#2D2E83] mb-2 font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {eyebrow}
                  </div>
                )}
                {title && (
                  <h3
                    className="text-lg sm:text-xl md:text-4xl font-semibold text-[#0f1724]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {title}
                  </h3>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Grid */}
      <div
        className={`max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0`}
      >
        {/* Image / Left */}
        <div
          className={`flex justify-center lg:justify-start ${
            reverse ? "order-last" : "order-first"
          }`}
        >
          <div
            className={`flex-shrink-0 ${
              imageWidth ?? "w-[90%] max-w-[600px]"
            } ${imageClassName}`}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title ?? "Default Image"}
                className={`object-cover rounded-3xl ${
                  imageHeight ??
                  "h-[260px] sm:h-[315px] md:h-[360px] lg:h-[520px]"
                } w-full`}
                loading="lazy"
              />
            ) : (
              <img
                src="/images/building.jpg"
                alt="Default Image"
                className={`object-cover rounded-3xl ${
                  imageHeight ??
                  "h-[260px] sm:h-[315px] md:h-[360px] lg:h-[520px]"
                } w-full`}
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Text / Right */}
        <div className={`${reverse ? "order-first" : "order-last"}`}>
          <div
            className="max-w-[540px] mx-auto lg:mx-0 lg:my-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {textNode ?? (
              <>
                {paragraph && (
                  <p
                    className={`text-[#585C67] leading-relaxed text-base sm:text-lg lg:text-[18px] ${textClassName}`}
                  >
                    {paragraph}
                  </p>
                )}
                {ctaLabel && ctaHref && (
                  <Link
                    href={ctaHref}
                    className="inline-block bg-[#0bb04f] text-white font-medium px-6 py-3 mt-6 rounded-full shadow hover:shadow-md transition"
                  >
                    {ctaLabel}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Card */}
        {mobileCardNode !== null && (
          <div
            className={`md:hidden mt-4 w-full max-w-[520px] mx-auto ${mobileCardClassName}`}
          >
            {mobileCardNode ?? (
              <div className="bg-white rounded-2xl shadow-md p-4">
                {eyebrow && (
                  <div className="text-xs text-[#6b6b6b] mb-1 font-medium">
                    {eyebrow}
                  </div>
                )}
                {title && (
                  <h3 className="text-base font-semibold text-[#0f1724]">
                    {title}
                  </h3>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageTextSection;
