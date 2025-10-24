"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="hidden lg:flex flex-col gap-2.5 xl:gap-3 absolute right-3 xl:right-5 top-[38%] xl:top-[40%] -translate-y-1/2 z-20">
      {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
        <a
          key={i}
          href="#"
          className="bg-white p-1.5 xl:p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <Icon size={13} />
        </a>
      ))}
    </div>
  );
}
