"use client";

import React from "react";

export interface InfoBannerProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  ctaLabel?: string;
  onCta?: () => void;

  // Style Props
  bgColor?: string;
  textColor?: string;
  ctaBgColor?: string;
  ctaTextColor?: string;
  borderRadius?: string;
  shadow?: string;
  paddingY?: string;
  paddingX?: string;
  gap?: string;

  // Typography
  titleClassName?: string;
  subtitleClassName?: string;
  highlightClassName?: string;
  buttonClassName?: string;

  // Layout
  textAlign?: "left" | "center" | "right";
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  subtitle,
  highlight,
  ctaLabel,
  onCta,
  bgColor = "#2D2E83",
  textColor = "white",
  ctaBgColor = "white",
  ctaTextColor = "#2D2E83",
  borderRadius = "rounded-3xl",
  shadow = "shadow-xl",
  paddingY = "py-8 sm:py-10 lg:py-12",
  paddingX = "px-6 sm:px-12 lg:px-16 xl:px-20",
  gap = "gap-4",
  textAlign = "left",
  titleClassName = "",
  subtitleClassName = "",
  highlightClassName = "",
  buttonClassName = "",
}) => {
  return (
    <div
      className={`w-full flex justify-center my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-10 xl:px-20`}
    >
      <div
        className={`relative w-full max-w-[1250px] ${bgColor} text-${textColor} ${borderRadius} ${shadow} flex flex-col lg:flex-row items-center justify-between ${gap} ${paddingY} ${paddingX}`}
      >
        {/* Left Column */}
        <div
          className={`flex-1 flex flex-col gap-2 sm:gap-3 ${
            textAlign === "center"
              ? "items-center text-center"
              : textAlign === "right"
              ? "items-end text-right"
              : "items-start text-left"
          }`}
        >
          {title && (
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${titleClassName}`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`text-base sm:text-lg lg:text-xl font-normal opacity-90 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}
          {highlight && (
            <p
              className={`text-base sm:text-lg font-semibold ${highlightClassName}`}
            >
              {highlight}
            </p>
          )}
        </div>

        {/* Right Column */}
        {ctaLabel && (
          <div className="flex lg:flex-1 justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <button
              onClick={onCta}
              className={`px-6 py-3 rounded-full font-semibold text-base sm:text-lg lg:text-xl ${ctaBgColor} ${ctaTextColor} hover:opacity-90 transition ${buttonClassName}`}
            >
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
