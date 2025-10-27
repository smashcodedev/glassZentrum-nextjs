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

  // 🔹 New features
  layout?: "horizontal" | "vertical"; // controls section direction
  containerClassName?: string; // optional outer container customization
  contentWrapperClassName?: string; // optional inner wrapper customization
  sectionSpacing?: string; // custom margin around the main container
  fontScale?: "sm" | "md" | "lg" | "xl"; // controls typography scale
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  subtitle,
  highlight,
  ctaLabel,
  onCta,

  // Default Styles
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

  // Typography Classes
  titleClassName = "",
  subtitleClassName = "",
  highlightClassName = "",
  buttonClassName = "",

  // 🔹 New Controls
  layout = "horizontal",
  containerClassName = "",
  contentWrapperClassName = "",
  sectionSpacing = "my-8 sm:my-12 lg:my-16",
  fontScale = "md",
}) => {
  // 🔹 Responsive text scaling
  const fontScaleMap = {
    sm: {
      title: "text-xl sm:text-2xl lg:text-3xl",
      subtitle: "text-sm sm:text-base lg:text-lg",
      highlight: "text-sm sm:text-base lg:text-lg",
      button: "text-sm sm:text-base lg:text-lg",
    },
    md: {
      title: "text-2xl sm:text-3xl lg:text-4xl",
      subtitle: "text-base sm:text-lg lg:text-xl",
      highlight: "text-base sm:text-lg lg:text-xl",
      button: "text-base sm:text-lg lg:text-xl",
    },
    lg: {
      title: "text-3xl sm:text-4xl lg:text-5xl",
      subtitle: "text-lg sm:text-xl lg:text-2xl",
      highlight: "text-lg sm:text-xl lg:text-2xl",
      button: "text-lg sm:text-xl lg:text-2xl",
    },
    xl: {
      title: "text-4xl sm:text-5xl lg:text-6xl",
      subtitle: "text-xl sm:text-2xl lg:text-3xl",
      highlight: "text-xl sm:text-2xl lg:text-3xl",
      button: "text-xl sm:text-2xl lg:text-3xl",
    },
  };

  return (
    <div
      className={`w-full flex justify-center ${sectionSpacing} ${containerClassName}`}
    >
      <div
        className={`relative w-full max-w-[1250px] ${borderRadius} ${shadow} ${paddingY} ${paddingX} ${gap}
          flex ${layout === "vertical" ? "flex-col" : "flex-col lg:flex-row"} 
          items-center justify-between transition-all duration-300 ${contentWrapperClassName}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {/* Left (Text) Section */}
        <div
          className={`flex-1 flex flex-col gap-2 sm:gap-3 
            ${
              textAlign === "center"
                ? "items-center text-center"
                : textAlign === "right"
                ? "items-end text-right"
                : "items-start text-left"
            }`}
        >
          {title && (
            <h2
              className={`${fontScaleMap[fontScale].title} font-semibold ${titleClassName}`}
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p
              className={`${fontScaleMap[fontScale].subtitle} font-normal opacity-90 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}

          {highlight && (
            <p
              className={`${fontScaleMap[fontScale].highlight} font-semibold ${highlightClassName}`}
            >
              {highlight}
            </p>
          )}
        </div>

        {/* Right (Button) Section */}
        {ctaLabel && (
          <div
            className={`flex ${
              layout === "vertical"
                ? "justify-center items-center mt-6 sm:mt-8"
                : "lg:flex-1 justify-center lg:justify-end items-center mt-4 lg:mt-0"
            } w-full lg:w-auto`}
          >
            <button
              onClick={onCta}
              className={`px-6 py-3 rounded-full font-semibold ${fontScaleMap[fontScale].button} transition duration-300 hover:opacity-90 ${buttonClassName}`}
              style={{
                backgroundColor: ctaBgColor,
                color: ctaTextColor,
              }}
            >
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
