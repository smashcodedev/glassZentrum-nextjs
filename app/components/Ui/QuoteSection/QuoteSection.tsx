"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface QuoteSectionProps {
  text: string;
  author?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  text,
  author,
  borderColor = "#2D2E83",
  bgColor = "transparent",
  textColor = "#333333",
  className,
}) => {
  return (
    <section
      className={cn("w-full px-6 sm:px-8 lg:px-12 py-12 md:py-16", className)}
      style={{ backgroundColor: bgColor, fontFamily: "var(--font-inter)" }}
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="border-l-4 pl-6 sm:pl-8 py-4" style={{ borderColor }}>
          <p
            className="text-lg sm:text-xl md:text-xl leading-relaxed"
            style={{
              color: textColor,
              fontFamily: "var(--font-inter)",
            }}
          >
            {text}
          </p>

          {author && (
            <p
              className="mt-4 text-sm sm:text-base text-gray-500 font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              — {author}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
