"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import CTAButton from "./CtaButton";
import ContactItem from "./ContactItem";
import { Variants } from "framer-motion";

type FooterProps = {
  logoSrc?: string;
  logoAlt?: string;
  joinText?: string;
  infoLinks?: { label: string; href: string }[];
  copyrightText?: string;
};

export default function Footer({
  logoSrc = "/images/flog.svg",
  logoAlt = "Glasszentrum Nord",
  joinText = "Join us on our mission to improve quality of life through routine and affordable chiropractic care.",
  infoLinks = [
    { label: "Contact", href: "#" },
    { label: "Conditions", href: "#" },
    { label: "Data Protection", href: "#" },
    { label: "Delivery & Shipping", href: "#" },
    { label: "Job", href: "#" },
    { label: "Partner", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Imprint", href: "#" },
  ],
  copyrightText = `© ${new Date().getFullYear()} Glass Center North. All rights reserved.`,
}: FooterProps) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer className="bg-[#0B0B0B] text-gray-300 border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 items-start">
          {/* LOGO + SOCIAL + ABOUT */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-7">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={220}
                height={60}
                className="object-contain"
              />
            </div>

            <SocialIcons className="mb-7" />

            <p
              className="text-gray-300 text-[15px] leading-7 max-w-[360px] opacity-75"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {joinText}
            </p>

            <div className="mt-6">
              <CTAButton href="/requests">Send a Request</CTAButton>
            </div>
          </motion.div>

          {/* INFO LINKS */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:ml-12"
          >
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">
              Info
            </h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              {infoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 opacity-80 hover:opacity-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONFIGURATOR */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:max-w-[220px]"
          >
            <h4
              className="text-[#FBFBFB] font-semibold text-lg mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Configurator
            </h4>

            <div className="flex flex-col gap-3 text-gray-300 text-base leading-7">
              <p className="opacity-80">
                You can easily get the glass you need.
              </p>
              <p className="opacity-80">
                Design and customize your glass project effortlessly.
              </p>
              <p className="opacity-80">
                Get instant estimates and professional support.
              </p>
            </div>
          </motion.div>

          {/* CONTACT / GLASSWORKS */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">
              The Glassworks
            </h4>
            <div className="flex flex-col gap-4">
              <ContactItem
                icon={
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/images/phone.svg"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                }
                label={
                  <>
                    Call:{" "}
                    <span className="font-medium text-gray-100">
                      040 398 999 30
                    </span>
                  </>
                }
              />
              <ContactItem
                icon={
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/images/email.svg"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>
                }
                label={
                  <>
                    Email:{" "}
                    <span className="font-medium text-gray-100">
                      info@glasszentrum.de
                    </span>
                  </>
                }
              />
              <ContactItem
                icon={
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/images/location.svg"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                }
                label={
                  <>
                    <span className="font-medium text-gray-100">Location:</span>
                    <br />
                    22765 Hamburg <br />
                    GZN Glaszentrum Nord GmbH <br />
                    Bahrenfelder Straße 321
                  </>
                }
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-6">
          <div className="text-center text-gray-500 text-sm tracking-wide">
            {copyrightText}
          </div>
        </div>
      </div>
    </footer>
  );
}
