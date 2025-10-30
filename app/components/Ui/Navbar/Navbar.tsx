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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white pt-2 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-24 py-4">
        {/* Logo */}
        <div className="shrink-0">
          <Image src="/images/logo.jpg" alt="Logo" width={180} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#2B237C] transition duration-300 font-[var(--font-inter)] font-medium text-[16px] leading-[24px]">
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
                        className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 w-52 flex flex-col gap-1 origin-top"
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:text-[#2B237C] hover:bg-gray-50 transition font-[var(--font-inter)]"
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
                  className="text-gray-700 hover:text-[#2B237C] transition duration-300 font-semibold text-[16px] leading-[24px]"
                  style={{ fontFamily: "var(--font-inter)" }}
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
            className="px-6 py-3 bg-[#2D2E83] text-white rounded-full font-[var(--font-inter)] font-medium text-[16px] leading-[24px] transition duration-300 hover:brightness-110 shadow-md"
          >
            Get to the shop
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800" onClick={() => setOpen(!open)}>
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
              className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col gap-1">
                      <button
                        className="flex items-center justify-between text-gray-700 font-[var(--font-inter)] font-medium text-[16px] leading-[24px] w-full hover:text-[#2B237C] transition duration-300"
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
                                  className="text-gray-700 py-2 block hover:text-[#2B237C] transition"
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
                      className="text-gray-700 hover:text-[#2B237C] font-[var(--font-inter)] font-medium text-[16px] leading-[24px]"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Link
                  href="#"
                  className="px-6 py-3 bg-[#2D2E83] text-white rounded-full font-[var(--font-inter)] font-medium text-[16px] leading-[24px] transition duration-300 hover:brightness-110 shadow-md mt-2 text-center"
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
