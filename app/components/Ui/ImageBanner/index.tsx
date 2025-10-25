"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  title: string;
  imageSrc: string;
  overlayOpacity?: string; // e.g. "bg-black/40"
  className?: string;
  bigText?: boolean;
}

export default function ImageBanner({
  title,
  imageSrc,
  overlayOpacity = "bg-black/40",
  className,
  bigText = false,
}: ImageBannerProps) {
  return (
    <section
      className={cn(
        "relative w-full flex items-center justify-center text-center text-white overflow-hidden",
        // Refined heights – more subtle on large screens
        "h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px]",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className={cn("absolute inset-0", overlayOpacity)} />

      {/* Title */}
      <div className="relative z-10 max-w-[720px] px-4">
        <h1
          className={cn(
            "font-semibold tracking-tight",
            // Better vertical rhythm — more breathing space across sizes
            "sm:text-3xl leading-[1.25] sm:leading-[1.1] ",
            "text-2xl  md:text-[38px] lg:text-[46px] xl:text-[56px]",
            bigText ? "xl:text-[46px] xl:scale-110" : ""
          )}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
