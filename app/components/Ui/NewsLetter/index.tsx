"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NewsletterSection({
  heading = "We Train",
  description = "We are a training company and a member of the Hamburg Glass Guild. Anyone interested in a training position related to the material can apply to :",
  bgColor = "#30373E",
  email = "info@glaszentrum-nord.de",
}) {
  return (
    <section
      className=" w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
        {/* 🟩 Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left w-full md:w-[60%] space-y-4 sm:space-y-5"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white leading-snug sm:leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {heading}
          </h2>

          <p
            className="text-[#D1D5DB] text-sm sm:text-base md:text-[16px] leading-relaxed max-w-[700px] mx-auto md:mx-0 px-2 sm:px-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {description} <b>{email}</b>
          </p>
        </motion.div>

        {/* 🟩 Right Email Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-[45%] flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[420px] flex justify-center sm:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[95%] placeholder:font-black placeholder:text-black sm:w-[90%] py-3.5 sm:py-4 pl-5 sm:pl-6 pr-[120px] sm:pr-[135px] 
                         rounded-full bg-[#F5F5F5] focus:outline-none text-gray-700 
                         text-sm sm:text-base shadow-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            />
            <button
              className="absolute right-[14px] lg:right-[5px] sm:right-[4px] top-1/2 -translate-y-1/2 
                         bg-green-600 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full 
                         text-sm sm:text-base font-medium hover:bg-green-700 transition-all"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
