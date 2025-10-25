// components/footer/CTAButton.tsx
import React from "react";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function CTAButton({
  children,
  href = "#",
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-10 py-3 rounded-[40px] bg-[#2d2e83] hover:bg-[#352fa8] shadow-[0_8px_20px_rgba(60,54,182,0.18)] text-white font-medium text-lg ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </a>
  );
}
