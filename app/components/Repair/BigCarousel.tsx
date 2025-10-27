import React from "react";
import { CenterFocusCarousel } from "../Ui/CarouselMini/BigCarousel";

export default function BigCarousel() {
  return (
    <CenterFocusCarousel
      images={[
        { src: "/images/repair/SlideOne.jpg", alt: "slide-1" },
        { src: "/images/repair/SlideTwo.jpg", alt: "Slide two" },
        { src: "/images/repair/SlideOne.jpg", alt: "slide-1" },
      ]}
    />
  );
}
