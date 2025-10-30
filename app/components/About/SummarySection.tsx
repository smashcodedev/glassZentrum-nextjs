"use client";

import React from "react";
import Image from "next/image";
import QuoteBox from "./QuoteBox";
import { motion } from "framer-motion";

interface SummarySectionProps {
  title?: string;
  paragraphs?: string[];
  showDecorations?: boolean;
  topLeftSrc?: string;
  bottomRightSrc?: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  title = "In short",
  paragraphs = [],
  showDecorations = true,
  topLeftSrc = "/images/dots-1.svg",
  bottomRightSrc = "/images/dot-2.svg",
}) => {
  return (
    <section
      className="
        relative w-full flex justify-center 
        px-4 sm:px-6 lg:px-8 
        -translate-y-[12rem] 
        py-12 pb-0 sm:py-14 md:py-16 
        bg-[#f8f9ff] overflow-hidden 
        lg:-translate-y-14 lg:py-0 lg:pb-16
      "
    >
      {/* === Decorative Pattern — TOP LEFT === */}
      {showDecorations && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-6 sm:left-0 sm:top-8 xl:left-0 xl:top-10 opacity-80 hidden lg:block"
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={topLeftSrc}
            alt=""
            width={70}
            height={70}
            className="object-contain"
          />
        </motion.div>
      )}

      {/* === Decorative Pattern — BOTTOM RIGHT === */}
      {showDecorations && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-4 sm:right-0 sm:bottom-6 xl:right-0 xl:bottom-10 opacity-80 hidden lg:block"
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src={bottomRightSrc}
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>
      )}

      {/* === Main Content === */}
      <motion.div
        className="z-10 w-full max-w-[1100px] flex flex-col items-center text-center px-2 sm:px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Title */}
        <h2
          className="
            text-[22px] sm:text-[26px] md:text-3xl lg:text-4xl
            font-semibold text-[#171B26] mb-6 sm:mb-8 
            tracking-tight leading-snug
          "
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </h2>

        {/* Quote Box */}
        <QuoteBox paragraphs={paragraphs} />
      </motion.div>
    </section>
  );
};

export default SummarySection;
