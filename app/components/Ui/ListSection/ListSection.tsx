"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className={`text-3xl sm:text-4xl font-bold text-gray-900 ${
              headingPosition === "center" ? "text-center" : "text-left"
            } ${headingClass}`}
          >
            {heading}
          </motion.h2>
        )}

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: i * 0.1 },
              }}
            >
              <div
                className={`flex items-start gap-3 sm:gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 ${itemBoxClass}`}
              >
                <div className="flex-shrink-0 mt-[2px]">
                  <CheckCircle
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColor}`}
                  />
                </div>
                <p
                  className={`text-gray-700 text-[0.95rem] sm:text-lg leading-snug sm:leading-relaxed ${textClass}`}
                >
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
