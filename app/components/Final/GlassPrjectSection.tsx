"use client";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function GlassProjectSection({
  eyebrow = "Learn More",
  title = "Plan your glass project\nwith us!",
  description = `From glass showers to cutting mirrors to repair glazing; from precisely fitting glass partitions to simple picture frame repairs — we will complete your order promptly and with first-class quality.\n\nVisit the Glass Center North in the Handwerkerhof Ottensen. You will find the glassworks right there on the ground floor. We would be happy to advise you on your next project.`,
  leftImage = "/images/plan-2.jpg",
  centerImage = "/images/plan-1.jpg",
  ctaHref = "#",
}) {
  return (
    <section className="w-full bg-white py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1250px] mx-auto relative">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-10 lg:gap-10 relative">
          {/* LEFT IMAGES */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-start">
            {/* Upper image */}
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{
                width: "100%",
                maxWidth: 440, // reduced from 500 → gives better balance
                height: 460, // slightly reduced for proportions
              }}
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
            <div
              className="hidden lg:block absolute z-20"
              style={{
                right: 10,
                bottom: -160,
              }}
            >
              <div className="rounded-[30px] bg-white pt-4 transition-transform transform hover:scale-[1.02]">
                <div
                  className="overflow-hidden rounded-[10px]"
                  style={{
                    width: 400,
                    height: 440,
                  }}
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
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8 text-center lg:text-left lg:max-w-[640px] xl:max-w-[700px] lg:-ml-8 relative lg:ml-18">
            {/* Title + CTA beside upper image */}
            <div className="space-y-4  lg:-ml-[14rem]">
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
                <CircleArrowRight />
              </a>
            </div>

            {/* Description */}
            <div className="text-[#585c67c7] text-base sm:text-lg lg:text-[21px] leading-relaxed max-w-[640px] xl:max-w-[680px] mx-auto lg:mx-0 mt-2">
              {description.split(/\n{2,}/).map((para, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Support card */}
            <div className="mt-6  lg:self-start">
              <div className="bg-[#00A13A] text-white rounded-2xl px-12 py-7 shadow-[0_10px_40px_rgba(15,155,64,0.15)] w-fit transition-transform hover:scale-[1.03]">
                <h3 className="font-semibold text-xl mb-1 tracking-wide">
                  24/7 Support
                </h3>
                <p className="text-base opacity-90 max-w-[380px] leading-relaxed">
                  24/7 support refers to customer service or technical
                  assistance available around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE image */}
        <div className="lg:hidden mt-6 flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-[#eef3f8] p-1 bg-white shadow-md w-64">
            <Image
              src={centerImage}
              alt="Man cleaning mirror"
              width={600}
              height={700}
              className="w-full h-auto object-cover rounded-xl"
              sizes="80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
