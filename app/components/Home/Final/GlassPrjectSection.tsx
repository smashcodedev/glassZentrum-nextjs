"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function GlassProjectSection({
  eyebrow = "Learn More",
  title = "Plan your glass project\nwith us!",
  description = `From glass showers to cutting mirrors to repair glazing; from precisely fitting glass partitions to simple picture frame repairs — we will complete your order promptly and with first-class quality.\n\nVisit the Glass Center North in the Handwerkerhof Ottensen. You will find the glassworks right there on the ground floor. We would be happy to advise you on your next project.`,
  leftImage = "/images/plan-2.jpg",
  centerImage = "/images/plan-1.jpg",
  ctaHref = "#",
}) {
  return (
    <section className="w-full bg-[#f6f8fb] py-20 sm:pb-10 sm:py-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1250px] mx-auto relative">
        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden lg:grid grid-cols-12 items-start gap-10 lg:gap-10 relative">
          {/* LEFT IMAGES */}
          <motion.div
            className="lg:col-span-7 relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Upper image */}
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{ width: "100%", maxWidth: 440, height: 460 }}
            >
              <Image
                src={leftImage}
                alt="Technician working on glass"
                width={800}
                height={880}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>

            {/* Lower overlapping image */}
            <motion.div
              className="absolute z-20"
              style={{ right: 10, bottom: -160 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-[30px] bg-white pt-4 transition-transform transform hover:scale-[1.02]">
                <div
                  className="overflow-hidden rounded-[10px]"
                  style={{ width: 400, height: 440 }}
                >
                  <Image
                    src={centerImage}
                    alt="Man cleaning mirror"
                    width={800}
                    height={880}
                    className="w-full h-full object-cover"
                    sizes="400px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-start gap-8 text-left lg:max-w-[640px] xl:max-w-[700px] lg:-ml-8 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 lg:-ml-[14rem]">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0f1724] leading-tight whitespace-pre-line"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {title}
              </h2>

              <a
                href={ctaHref}
                className="inline-flex items-center gap-3 text-[#00A13A] font-semibold text-[17px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f9b40] rounded"
              >
                <span>{eyebrow}</span>
                <img className="w-5 h-5" src="/images/arrow.svg" />
              </a>
            </div>

            <div className="text-[#585c67c7] text-lg lg:text-[21px] leading-relaxed max-w-[640px] xl:max-w-[680px] mt-2">
              {description.split(/\n{2,}/).map((para, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#00A13A] text-white rounded-2xl px-12 py-7 shadow-[0_10px_40px_rgba(15,155,64,0.15)] w-fit transition-transform hover:scale-[1.03]">
                <h3 className="font-semibold text-xl mb-1 tracking-wide">
                  24/7 Support
                </h3>
                <p className="text-base opacity-90 max-w-[380px] leading-relaxed">
                  24/7 support refers to customer service or technical assistance available around the clock.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="flex flex-col lg:hidden items-center text-center gap-6 sm:gap-8 mt-4">
          {/* IMAGES IN A ROW */}
          <motion.div
            className="flex justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left image */}
            <div className="rounded-2xl overflow-hidden shadow-lg w-[50%] sm:w-[50%]">
              <Image
                src={leftImage}
                alt="Technician working on glass"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                sizes="45vw"
              />
            </div>

            {/* Center image */}
            <div className="rounded-2xl overflow-hidden shadow-lg w-[50%] sm:w-[50%]">
              <Image
                src={centerImage}
                alt="Man cleaning mirror"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                sizes="45vw"
              />
            </div>
          </motion.div>

          {/* TITLE */}
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#0f1724] leading-tight whitespace-pre-line px-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </h2>

          {/* CTA */}
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 text-[#00A13A] font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f9b40] rounded"
          >
            <span>{eyebrow}</span>
            <img className="w-5 h-5" src="/images/arrow.svg" />
          </a>

          {/* DESCRIPTION */}
          <div className="text-[#585c67c7] text-sm sm:text-base leading-relaxed px-6">
            {description.split(/\n{2,}/).map((para, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* SUPPORT CARD */}
          <motion.div
            className="bg-[#00A13A] text-white rounded-2xl px-8 py-6 shadow-[0_10px_30px_rgba(15,155,64,0.2)] w-[85%] max-w-[400px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-1 tracking-wide">
              24/7 Support
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              24/7 support refers to customer service or technical assistance
              available around the clock.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
