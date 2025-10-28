"use client";

import React from "react";

interface TextSectionProps {
  title: string;
  paragraph: string;
  buttonText: string;
  onButtonClick?: () => void;
  paddingClass?: string;
  sectionClass?: string;
  titleClass?: string;
  paragraphClass?: string;
  buttonClass?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraph,
  buttonText,
  onButtonClick,
  paddingClass = "py-16 px-6 sm:px-10 lg:px-20",
  sectionClass = "",
  titleClass = "",
  paragraphClass = "",
  buttonClass = "",
}) => {
  return (
    <section className={`w-full bg-white ${paddingClass} ${sectionClass}`}>
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center gap-10 lg:gap-18">
        <div className="flex justify-center items-center text-center md:text-left">
          <h2
            className={`text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight ${titleClass}`}
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start gap-6 w-full lg:pl-20">
          <p
            className={`text-gray-600 text-base sm:text-lg leading-relaxed text-center md:text-left w-full ${paragraphClass}`}
          >
            {paragraph}
          </p>

          <button
            onClick={onButtonClick}
            className={`bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 ${buttonClass}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
