"use client";
import { motion } from "framer-motion";

import React from "react";

interface EmergencyBannerProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  title = "Emergency Service",
  subtitle = "Whether it's a break-in, storm damage or another cause, just call (040) 32 04 20 00 and we'll come.",
  highlight = "This service is available to you 24/7",
  ctaLabel = "Learn More",
  onCta,
}) => {
  // Smooth green radial gradient (center glow, no white)
  const bgStyle = {
    background: `
      radial-gradient(
        circle at center,
        #00A13A 0%,
        #009636 35%,
        #008431 65%,
        #006F2A 85%,
        #005D23 100%
      )
    `,
  } as React.CSSProperties;

  return (
    <section className="w-full px-6 sm:px-8">
      <div
        className="mx-auto max-w-[1250px] rounded-[36px] py-12 sm:py-14 lg:py-16 px-6 sm:px-10 text-white"
        style={bgStyle}
        role="region"
        aria-label="Emergency service"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-[980px] mx-auto text-center">
            {/* Title */}
            <h3
              className="
              font-inter
              font-semibold
              text-[32px] sm:text-[38px] md:text-[46px]
              leading-[54px]
              text-white
              mb-4
            "
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h3>

            {/* Subtitle */}
            <p
              className="
              font-inter
              font-normal
              text-[16px]
              leading-[26px]
              text-white/90
              opacity-80"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {subtitle}
            </p>

            {/* Highlight */}
            <p
              className="font-inter opacity-90 font-semibold text-sm sm:text-lg text-white  mb-6  leading-[26px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {highlight}
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                onClick={onCta}
                className="inline-block  bg-white text-black font-medium px-14 py-3 rounded-full shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
