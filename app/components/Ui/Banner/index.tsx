"use client";

import React from "react";

export interface BannerProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  highlight?: string;
  subParagraphs?: string[];
  ctaLabel?: string;
  onCta?: () => void;

  // Style Props
  bgColor?: string;
  bgGradient?: string;
  textColor?: string;
  ctaBgColor?: string;
  ctaTextColor?: string;
  borderRadius?: string;
  borderRadiusPx?: string;
  padding?: string;
  maxWidth?: string;
  textAlign?: "center" | "left" | "right";
  shadow?: string;

  // Typography Props
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;

  // Custom Class Props
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;

  // Logic Props
  showCta?: boolean;

  className?: string;
}

const radiusMap: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  highlight,
  subParagraphs = [],
  ctaLabel,
  onCta,

  // Defaults
  bgColor = "bg-white",
  bgGradient,
  textColor = "text-black",
  ctaBgColor = "bg-green-600",
  ctaTextColor = "text-white",
  borderRadius = "rounded-2xl",
  borderRadiusPx,
  padding = "py-10 px-6 sm:px-10",
  maxWidth = "max-w-[1100px]",
  textAlign = "center",
  shadow = "shadow-md",

  // Typography defaults
  fontFamily = "font-[Inter]",
  fontWeight = "font-normal",
  fontStyle = "not-italic",
  fontSize = "text-[16px]",
  lineHeight = "leading-[26px]",
  letterSpacing = "tracking-normal",

  // Custom element classes
  titleClassName,
  subtitleClassName,
  paragraphClassName,

  showCta = true,
  className,
  children
}) => {
  const normalizedRadiusClass = (() => {
    if (!borderRadius) return "rounded-2xl";
    const key = borderRadius.replace(/^rounded-/, "");
    return radiusMap[key] || borderRadius;
  })();

  const containerStyle: React.CSSProperties = {
    background: bgGradient || undefined,
    ...(borderRadiusPx ? { borderRadius: borderRadiusPx } : {}),
  };

  return (
    <div
      className={`w-full flex justify-center px-4 sm:px-6 ${className || ""}`}
    >
      <div
        className={[
          "relative w-full transition-all duration-300",
          maxWidth,
          borderRadiusPx ? "" : normalizedRadiusClass,
          padding,
          shadow,
          bgGradient ? "" : bgColor,
          textColor,
          fontFamily,
          fontWeight,
          fontStyle,
          fontSize,
          lineHeight,
          letterSpacing,
          "rounded-2xl",
        ]
          .filter(Boolean)
          .join(" ")}
        style={containerStyle}
      >
        <div
          className={[
            "flex flex-col gap-3 sm:gap-4",
            textAlign === "center"
              ? "items-center text-center"
              : textAlign === "right"
              ? "items-end text-right"
              : "items-start text-left",
          ].join(" ")}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {/* Title */}
          {title && (
            <h2
              className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight break-words ${
                titleClassName || ""
              }`}
            >
              {title}
            </h2>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`text-sm sm:text-base md:text-md text-gray-700 ${
                subtitleClassName || ""
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {subtitle}
            </p>
          )}

          {/* Highlight */}
          {highlight && (
            <p
              className="text-xs sm:text-sm md:text-md font-semibold text-green-600"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {highlight}
            </p>
          )}

          {/* Sub Paragraphs */}
          {subParagraphs.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {subParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm sm:text-base md:text-md text-gray-600 leading-relaxed break-words ${
                    paragraphClassName || ""
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* CTA */}
          {showCta && ctaLabel && (
            <button
              onClick={onCta}
              className={`${ctaBgColor} ${ctaTextColor} px-5 py-2 mt-5 w-fit rounded-full text-sm sm:text-base md:text-lg font-medium hover:opacity-90 transition`}
            >
              {ctaLabel}
            </button>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
