"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Request Button */}
      <Link
        href="#"
        className="px-12 py-3 text-center bg-[#2D2E83] text-white rounded-full  font-medium text-[16px] leading-[24px] transition hover:brightness-110 "
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Request
      </Link>

      {/* Contact Us Button */}
      <Link
        href="#"
        className="px-12 py-3 bg-white border border-[#D2D3D6] text-gray-800 rounded-full font-medium text-[16px] leading-[24px] transition hover:brightness-95"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Contact Us
      </Link>
    </div>
  );
}
