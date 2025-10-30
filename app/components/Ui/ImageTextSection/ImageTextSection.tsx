/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  titleClassName?: string;
  floatingClass?: string;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  eyebrow,
  title = "In our glassworks in Altona",
  paragraph = `We process flat glass in all its shapes and colors. We find professional solutions for every challenge, which we implement with care and precision.`,
  ctaLabel,
  imageHeight,
  imageWidth,
  ctaHref,
  textNode,
  floatingCardNode,
  reverse = false,
  imageClassName = "",
  textClassName = "",
  floatingCardClassName = "",
  sectionClassName = "",
  bgColor = "bg-white",
  paddingY = "py-12",
  paddingX = "px-6 sm:px-8 lg:px-12",
  imageSrc,
  titleClassName,
  floatingClass,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
                `bg-white w-[714px] h-[7.5rem] rounded-[20px] shadow-lg p-[6rem] pl-8 max-w-[1250px] mx-auto flex items-center ${floatingClass}`
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
                    className={`text-lg sm:text-xl md:text-4xl font-semibold text-[#0f1724] ${titleClassName}`}
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
        {/* <div
          className={`flex justify-center lg:justify-start ${
            reverse ? "order-last" : "order-first"
          }`}
        >
          <div
            className={`flex-shrink-0 relative ${
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

            <div
              className="
    absolute 
    z-20 
    flex md:hidden 
    justify-start 
    w-full 
    pointer-events-none 
    top-[1.5rem] sm:top-[2rem] 
    left-[1rem] sm:left-[1.5rem]
  "
            >
              <div
                tabIndex={0}
                className="
      bg-white 
      rounded-xl sm:rounded-2xl 
      shadow-[0px_6px_12px_rgba(0,0,0,0.08)] 
      px-4 sm:px-6 py-3 sm:py-4 
      w-[85%] sm:w-[70%] 
      max-w-[360px] 
      flex flex-col items-start 
      pointer-events-auto 
      transition-transform duration-300 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D2E83]
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
        </div> */}
        {/* 🌐 Desktop / Laptop version */}
        <div
          className={`hidden lg:flex justify-center lg:justify-start ${
            reverse ? "order-last" : "order-first"
          }`}
        >
          <div
            className={`flex-shrink-0 relative ${
              imageWidth ?? "w-[90%] max-w-[600px]"
            } ${imageClassName}`}
          >
            <motion.div
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={imageSrc || "/images/building.jpg"}
                alt={title ?? "Default Image"}
                className={`object-cover rounded-3xl ${
                  imageHeight ??
                  "h-[260px] sm:h-[315px] md:h-[360px] lg:h-[520px]"
                } w-full`}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* 📱 Mobile / Tablet version */}
        {/* 📱 Mobile / Tablet version */}
        <div
          className={`flex lg:hidden justify-center ${
            reverse ? "order-last" : "order-first"
          }`}
        >
          <div className="flex-shrink-0 relative w-[100%] sm:w-[95%] md:w-[92%] max-w-[760px]">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={imageSrc || "/images/building.jpg"}
                alt={title ?? "Default Image"}
                className="object-cover rounded-[1rem] w-full h-[clamp(400px,80vw,600px)]"
                loading="lazy"
              />
            </motion.div>
            {/* Floating Info Box (Mobile only) */}
            <div
              className="
        absolute 
        z-20 
        flex 
        justify-start 
        w-full 
        pointer-events-none 
        top-[2rem] sm:top-[2.5rem] 
        left-[1.5rem] sm:left-[2rem]
      "
            >
              <div
                tabIndex={0}
                className="
          bg-white 
          rounded-2xl sm:rounded-3xl 
          shadow-[0px_8px_16px_rgba(0,0,0,0.12)] 
          px-5 sm:px-7 py-4 sm:py-5 
          w-[90%] sm:w-[75%] 
          max-w-[420px] 
          flex flex-col items-start 
          pointer-events-auto 
          transition-transform duration-300 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D2E83]
        "
              >
                <div>
                  <div
                    className="text-base sm:text-lg text-[#2D2E83] mb-1 sm:mb-2 font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {eyebrow}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-[#0f1724] leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text / Right */}
        <div className={`${reverse ? "order-first" : "order-last"}`}>
          <div
            className="max-w-[540px] mx-auto lg:mx-0 lg:my-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: reverse ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
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
            </motion.div>
          </div>
        </div>

        {/* Mobile Card */}
        {/* {mobileCardNode !== null && (
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
                  <h3 className={`text-base font-semibold text-[#0f1724]`}>
                    {title}
                  </h3>
                )}
              </div>
            )}
          </div>
        )} */}
      </div>
    </motion.section>
  );
};

export default ImageTextSection;
