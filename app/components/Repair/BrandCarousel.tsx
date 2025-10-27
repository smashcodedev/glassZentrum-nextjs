import React from "react";
import { BrandCarousel } from "../Ui/CarouselMini/BrandCarousel";

export default function BrandRepairCarousel() {
  return (
    <BrandCarousel
      title="Brand Products"
      logos={[
        { src: "/images/repair/icons/logo-1.jpg", alt: "Glaszentrumnord" },
        { src: "/images/repair/icons/logo-2.jpg", alt: "Danfoss" },
        { src: "/images/repair/icons/logo-3.jpg", alt: "Copeland" },
        { src: "/images/repair/icons/logo-4.jpg", alt: "ABB" },
        { src: "/images/repair/icons/logo-4.jpg", alt: "ABB" },
        { src: "/images/repair/icons/logo-2.jpg", alt: "Danfoss" },
        { src: "/images/repair/icons/logo-3.jpg", alt: "Copeland" },
      ]}
    />
  );
}
