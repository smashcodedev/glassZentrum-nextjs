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
}) => {
  return (
    <section className={`w-full bg-white ${paddingClass} ${sectionClass}`}>
      <div className="max-w-[1250px] mx-auto flex flex-col  gap-10 text-center items-start">
        <div className="w-full overflow-hidden rounded-2xl flex items-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1250}
            height={700}
            className={`w-full h-auto object-cover ${imageClass}`}
            priority
          />
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[1250px] text-left">
          {paragraphs.map((text, i) => (
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              key={i}
              className={`text-gray-700 text-base sm:text-lg leading-relaxed ${paragraphClass}`}
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
