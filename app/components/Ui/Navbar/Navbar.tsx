"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  {
    name: "The Glassworks",
    href: "#",
    dropdown: [
      { name: "Sub Item 1", href: "#" },
      { name: "Sub Item 2", href: "#" },
    ],
  },
  {
    name: "By Glass",
    href: "#",
    dropdown: [
      { name: "Sub Item 1", href: "#" },
      { name: "Sub Item 2", href: "#" },
    ],
  },
  {
    name: "Accessories",
    href: "#",
    dropdown: [
      { name: "Sub Item 1", href: "#" },
      { name: "Sub Item 2", href: "#" },
    ],
  },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white pt-2 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="w-full max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-2 sm:px-4 md:px-6 lg:px-24 py-3">
        {/* Logo */}
         <div className="shrink-0">
          <Image src="/images/log.svg" alt="Logo" width={180} height={50} />
        </div>
       

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#2B237C] transition duration-300 font-[var(--font-inter)] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[24px]">
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen === link.name && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 sm:left-auto sm:right-0 mt-0 bg-white shadow-lg rounded-lg py-2 w-52 flex flex-col gap-1 origin-top z-50"
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:text-[#2B237C] hover:bg-gray-50 transition font-[var(--font-inter)] text-sm sm:text-[15px]"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-[#2B237C] transition duration-300 font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] font-[var(--font-inter)]"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2E83] text-white rounded-full font-[var(--font-inter)] font-medium text-[14px] sm:text-[16px] leading-[24px] transition duration-300 hover:brightness-110 shadow-md"
          >
            Get to the shop
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800 ml-2" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden z-40"
            >
              <div className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-6">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col gap-1">
                      <button
                        className="flex items-center justify-between w-full text-gray-700 font-[var(--font-inter)] font-medium text-[14px] sm:text-[15px] leading-[24px] hover:text-[#2B237C] transition duration-300"
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === link.name ? null : link.name
                          )
                        }
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            mobileDropdownOpen === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.name && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col pl-4 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-gray-700 py-2 block text-sm sm:text-[15px] break-words hover:text-[#2B237C] transition"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 font-[var(--font-inter)] font-medium text-[14px] sm:text-[15px] py-2 break-words hover:text-[#2B237C] transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Link
                  href="#"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2E83] text-white rounded-full font-[var(--font-inter)] font-medium text-[14px] sm:text-[16px] leading-[24px] transition duration-300 hover:brightness-110 shadow-md text-center w-full"
                >
                  Get to the shop
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
