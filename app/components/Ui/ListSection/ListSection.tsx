"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

interface ListSectionProps {
  heading?: string;
  headingPosition?: "left" | "center";
  items: string[];
  iconColor?: string;
  paddingClass?: string;

  sectionClass?: string;
  headingClass?: string;
  itemBoxClass?: string;
  textClass?: string;
}

const ListSection: React.FC<ListSectionProps> = ({
  heading,
  headingPosition = "left",
  items,
  iconColor = "text-purple-600",
  paddingClass = "py-16 px-6 sm:px-10 lg:px-20",
  sectionClass = "",
  headingClass = "",
  itemBoxClass = "",
  textClass = "",
}) => {
  return (
    <section className={`w-full bg-white ${paddingClass} ${sectionClass}`}>
      <div className="max-w-[1250px] mx-auto flex flex-col gap-10">
        {heading && (
          <h2
            className={`text-3xl sm:text-4xl font-bold text-gray-900 ${
              headingPosition === "center" ? "text-center" : "text-left"
            } ${headingClass}`}
          >
            {heading}
          </h2>
        )}

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 ${itemBoxClass}`}
            >
              <CheckCircle className={`w-6 h-6 ${iconColor}`} />
              <p
                className={`text-gray-700 text-base sm:text-lg leading-relaxed ${textClass}`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
