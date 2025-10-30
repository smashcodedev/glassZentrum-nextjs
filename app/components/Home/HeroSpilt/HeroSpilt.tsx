"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface HeroSplitProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
  imageSrc?: string;
}

const HeroSplit: React.FC<HeroSplitProps> = ({
  title = "You Don't Want Off-The-Shelf Glass, But Rather An Individual Production With Cleverness And Quality?",
  description = "Do you have an unusual idea or are you planning a more complex project? Then come join us. We put every project into action.",
  ctaLabel = "Contact Us",
  onCta,
  imageSrc = "/images/hero-glass.jpg",
}) => {
  return (
    <section className="w-full bg-[#f9f9fb] py-16 md:py-24">
      <div className="max-w-[1250px] mx-auto px-6 sm:px-8 xl:px-0 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="flex-[0.9] text-center lg:text-left max-w-[2xl]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Title */}
          <motion.h2
            className="font-semibold text-[#0E0E2C] text-[26px] lg:text-[42px] leading-tight lg:leading-[52px] capitalize mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className=" font-normal text-[#585C67] text-[18px] leading-[30px] mb-8 max-w-[600px] mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-inter)" }}
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={onCta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00A13A] text-white font-medium font-[Inter] text-[16px] py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#009136] focus:outline-none focus:ring-2 focus:ring-[#00A13A]/40"
            style={{ fontFamily: "var(--font-inter)" }}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {ctaLabel}
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-[0.65] w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Glass production"
              width={600}
              height={480}
              className="w-full h-auto object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSplit;
