"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface TwoColumnSectionProps {
  textSectionHeight?: string;
  textSectionWidth?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  heading?: string;
  headingClassName?: string; // optional custom heading styles
  paragraph?: string;
  paragraphClassName?: string; // optional custom paragraph styles
  subParagraphs?: string[]; // optional array of additional paragraphs
  subParagraphClassName?: string; // optional class for sub paragraphs
  ctaLabel?: string;
  ctaHref?: string;
  ctaClassName?: string; // optional custom button styles
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // if true → image left, text right
  bgColor?: string;
  imageWidth?: string; // Tailwind width e.g. "lg:w-[600px]"
  children?: ReactNode; // custom text section content
  imageContent?: ReactNode; // custom image section content
  className?: string; // overall section className
  imageHeight?: string;
  list?: boolean;
  listItem?: string[];
  listIcon?: ReactNode;
  imageClassName?: string;
  borderRaduisImage?: string;
  imageClass?: string;
  noNextImage?: boolean;
  paddingTop?: boolean;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  eyebrow,
  eyebrowClassName,
  heading,
  headingClassName,
  paragraph,
  paragraphClassName,
  subParagraphs,
  subParagraphClassName,
  textSectionHeight,
  textSectionWidth,
  ctaLabel,
  ctaHref,
  ctaClassName,
  imageSrc,
  imageAlt,
  reverse = false,
  bgColor = "bg-[#f6f9ff]",
  imageWidth = "w-[370px] sm:w-[550px] md:w-[580px] lg:w-[600px]",
  children,
  imageContent,
  className,
  imageHeight,
  list,
  listItem,
  listIcon,
  imageClassName,
  imageClass,
  noNextImage,
  paddingTop,
}) => {
  return (
    <section
      className={cn(
        "w-full px-6 sm:px-8 lg:px-12 py-12 md:py-20 lg:pb-0",
        bgColor,
        className
      )}
    >
      <div
        className={cn(
          "max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center gap-12",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          paddingTop ? "pt-20" : ""
        )}
      >
        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {imageContent ? (
            <>{imageContent}</>
          ) : imageSrc ? (
            <div
              className={cn(
                "overflow-hidden flex-shrink-0 rounded-6xl bg-transparent",
                imageWidth,
                imageHeight,
                imageClassName
              )}
            >
              {noNextImage ? (
                <img
                  src={imageSrc}
                  alt={imageAlt || "section image"}
                  className={cn("object-contain w-full h-full", imageClass)}
                />
              ) : (
                <Image
                  src={imageSrc}
                  alt={imageAlt || "section image"}
                  width={960}
                  height={720}
                  className={cn("object-contain w-full h-full", imageClass)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              )}
            </div>
          ) : null}
        </div>

        {/* Text Section */}
        <div
          className={cn(
            "flex-1 text-center lg:text-left",
            textSectionHeight,
            textSectionWidth
          )}
        >
          {children ? (
            children
          ) : (
            <>
              {eyebrow && (
                <p
                  className={cn(
                    "font-semibold mb-2 tracking-wide uppercase text-xs",
                    eyebrowClassName
                  )}
                  style={{
                    color: "#3D424D",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {eyebrow}
                </p>
              )}

              {heading && (
                <h2
                  className={cn(
                    "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-5",
                    headingClassName
                  )}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {heading}
                </h2>
              )}

              {paragraph && (
                <p
                  className={cn(
                    "text-[#585C67] font-normal text-base sm:text-lg lg:text-[19px] mb-5 max-w-[800px] lg:max-w-[600px] mx-auto lg:mx-0 leading-relaxed",
                    paragraphClassName
                  )}
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {paragraph}
                </p>
              )}

              {/* Multiple sub paragraphs */}
              {subParagraphs &&
                subParagraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={cn(
                      "text-[#585C67] font-normal text-base sm:text-lg lg:text-[19px] mb-5 max-w-[600px] mx-auto lg:mx-0 leading-relaxed",
                      subParagraphClassName
                    )}
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {p}
                  </p>
                ))}

              {list && listItem && listItem.length > 0 && (
                <div className="mt-10 mb-10 space-y-3">
                  {listItem.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-6 max-w-[600px] mx-auto lg:mx-0 bg-white p-4 rounded-2xl"
                    >
                      <div className="text-[#2D2E83] flex-shrink-0 mt-[2px]">
                        {listIcon}
                      </div>
                      <p
                        className="text-[#585C67] text-base sm:text-lg leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className={cn(
                    "inline-block bg-[#2D2E83] text-white font-medium text-[16px] py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#252661] focus:outline-none focus:ring-2 focus:ring-[#2D2E83]/40",
                    ctaClassName
                  )}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {ctaLabel}
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
