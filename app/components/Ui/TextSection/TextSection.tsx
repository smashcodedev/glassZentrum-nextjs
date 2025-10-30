"use client";

import React from "react";
import { motion } from "framer-motion";

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
  textSectionWide?: boolean;
  paddingLarge?: boolean;
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
  textSectionWide,
  paddingLarge,
}) => {
  return (
    <section className={`w-full bg-white ${paddingClass} ${sectionClass}`}>
      <div
        className={`max-w-[1250px] mx-auto grid grid-cols-1 ${
          textSectionWide
            ? "md:grid-cols-[1.5fr_1fr]"
            : "md:grid-cols-[1fr_1fr]"
        } items-center gap-10 lg:gap-18`}
      >
        {/* Title */}
        <motion.div
          className="flex justify-center items-center text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`text-4xl sm:text-5xl lg:text-5xl font-semibold text-[#0B1024] leading-tight ${titleClass}`}
          >
            {title}
          </h2>
        </motion.div>

        {/* Paragraph + Button */}
        <motion.div
          className={`flex flex-col justify-center items-center md:items-start text-left gap-6 w-full ${
            paddingLarge ? "lg:pl-[10rem]" : "lg:pl-20 "
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p
            className={`text-gray-600 text-base sm:text-lg leading-relaxed text-center md:text-left w-full ${paragraphClass}`}
          >
            {paragraph}
          </p>

          <motion.button
            onClick={onButtonClick}
            className={`bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 ${buttonClass}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TextSection;
