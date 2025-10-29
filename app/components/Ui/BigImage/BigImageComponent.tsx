"use client";

import React from "react";
import Image from "next/image";

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt?: string;
  paragraphs: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  paddingClass?: string;

  sectionClass?: string;
  imageClass?: string;
  paragraphClass?: string;
  buttonClass?: string;

  isBanner?: boolean;
  bannerBgColor?: string; // e.g. "bg-gray-50" or "#F8FAFC"
  bannerTextColor?: string; // tailwind class or color string
  bannerPaddingClass?: string; // custom padding for banner mode

  imageWidth?: number | string; // control image width
  imageHeight?: number | string; // control image height
  heading?: string; // optional heading
  headingClass?: string; // optional custom style for heading
  paragraphAlign?: "left" | "center" | "right" | "justify"; // control paragraph alignment
}

const BigImageComponent: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  imageAlt = "section image",
  paragraphs,
  buttonText,
  onButtonClick,
  paddingClass = "py-6 lg:pb-10 px-6 sm:px-10 lg:px-20",
  sectionClass = "",
  imageClass = "",
  paragraphClass = "",
  buttonClass = "",
  isBanner = false,
  bannerBgColor = "bg-[#F8FAFC]",
  bannerTextColor = "text-gray-700",
  bannerPaddingClass = "p-6 sm:p-8 lg:p-10",
  imageWidth = 1250,
  imageHeight = 700,
  heading,
  headingClass = "text-2xl sm:text-3xl font-semibold text-gray-900",
  paragraphAlign = "left",
}) => {
  const outerClasses = isBanner
    ? `w-full flex justify-center items-center ${paddingClass} ${sectionClass}`
    : `w-full bg-white ${paddingClass} ${sectionClass}`;

  const innerClasses = isBanner
    ? `max-w-[1250px] w-full rounded-2xl shadow-md border border-gray-200 ${bannerBgColor} ${bannerPaddingClass}`
    : `max-w-[1250px] mx-auto`;

  const textColorClass = isBanner ? bannerTextColor : "text-gray-700";
  return (
    <section className={outerClasses}>
      {/* <div className="max-w-[1250px] mx-auto flex flex-col  gap-10 text-center items-start"> */}
      <div
        className={`flex flex-col gap-10 text-center items-start ${innerClasses}`}
      >
        <div className="w-full overflow-hidden rounded-2xl flex items-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={Number(imageWidth)}
            height={Number(imageHeight)}
            className={`object-cover w-full ${imageClass}`}
            style={{
              height: imageHeight ? `${imageHeight}px` : "auto",
            }}
            priority
          />
        </div>

        <div className={`flex flex-col gap-6 w-full text-${paragraphAlign}`}>
          {/* 🏷️ Optional heading */}
          {heading && (
            <h2
              style={{ fontFamily: "var(--font-inter)" }}
              className={headingClass}
            >
              {heading}
            </h2>
          )}

          {/* Paragraphs */}
          {paragraphs.map((text, i) => (
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              key={i}
              className={`${textColorClass} text-base sm:text-lg leading-relaxed ${paragraphClass}`}
            >
              {text}
            </p>
          ))}
        </div>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className={`bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 ${buttonClass}`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default BigImageComponent;
