"use client";

import React from "react";

interface QuoteBoxProps {
  paragraphs?: string[];
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ paragraphs = [] }) => {
  return (
    <div className="relative w-full">
      <div
        className="mx-auto w-full max-w-[950px] bg-[#009636] text-white rounded-[36px] shadow-lg px-6 py-8 sm:px-10 sm:py-12"
        style={{ zIndex: 1 }}
      >
        {/* Quote icon aligned left on large screens, centered on small */}
        <div className="flex justify-start sm:justify-start mb-4">
          <img
            src="/images/quote.svg"
            alt="quote"
            className="w-8 h-8 sm:w-8 sm:h-8 text-white"
          />
        </div>

        <div className="text-[15px] sm:text-[16px] leading-[26px] font-[Inter] font-normal space-y-4 text-left sm:text-center">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="opacity-95 text-left"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
