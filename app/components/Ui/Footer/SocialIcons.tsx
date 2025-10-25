/* eslint-disable @next/next/no-img-element */
// components/footer/SocialIcons.tsx
import React from "react";

type SocialIconsProps = {
  size?: number;
  className?: string;
};

export default function SocialIcons({
  size = 44,
  className = "",
}: SocialIconsProps) {
  const icons = [
    { name: "facebook", src: "/images/facebook.svg" },
    { name: "twitter", src: "/images/twiter.svg" },
    { name: "instagram", src: "/images/instagram.svg" },
    { name: "youtube", src: "/images/youtube.svg" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map((ic) => (
        <button
          key={ic.name}
          aria-label={ic.name}
          className="rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#1f1f1f",
            width: size,
            height: size,
          }}
        >
          <img
            src={ic.src}
            alt={ic.name}
            className="w-[55%] h-[55%] object-contain"
          />
        </button>
      ))}
    </div>
  );
}
