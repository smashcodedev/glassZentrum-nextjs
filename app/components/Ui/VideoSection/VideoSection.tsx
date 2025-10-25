"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface VideoSectionProps {
  heading: string;
  imageSrc: string;
  imageAlt?: string;
  headingClassName?: string;
  imageHeight?: string;
  overlayOpacity?: string;
  className?: string;
  maxTextWidth?: string; // text width max
  imageWidth?: string; // image width
  borderRadius?: string; // image rounding
}

const VideoSection: React.FC<VideoSectionProps> = ({
  heading,
  imageSrc,
  imageAlt = "banner image",
  headingClassName,
  imageHeight = "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]",
  overlayOpacity,
  className,
  maxTextWidth = "max-w-full sm:max-w-[700px] md:max-w-[850px] lg:max-w-[950px] xl:max-w-[1100px]",
  imageWidth = "w-full sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%]",
  borderRadius = "rounded-[2.5rem]",
}) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col items-center justify-start text-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16",
        className
      )}
    >
      {/* Heading */}
      <h2
        className={cn(
          "font-semibold mb-6 sm:mb-8 md:mb-10 leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl",
          headingClassName,
          maxTextWidth
        )}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {heading}
      </h2>

      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          imageWidth,
          imageHeight,
          borderRadius
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        {overlayOpacity && <div className={cn("absolute inset-0", overlayOpacity)} />}
      </div>
    </section>
  );
};

export default VideoSection;
