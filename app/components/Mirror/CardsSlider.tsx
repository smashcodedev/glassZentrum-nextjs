import React from "react";
import CardCarousel from "../Ui/CarouselMini/CardCarousel/CardCarousel";

export default function CardsSlider() {
  return (
    <CardCarousel
      title="Our Latest News"
      items={[
        {
          image: "/images/repair/c1.jpg",
          date: "October 9, 2024",
          headline: "Protect my glass from glass breakage?",
          description:
            "A first-time buyer combs the Upper East Side for a place to make his beloved...",
          link: "#",
        },
        {
          image: "/images/repair/c2.jpg",
          date: "October 9, 2024",
          headline: "Repair glass units like a pro",
          description:
            "Learn how our professional team maintains and restores glass performance...",
          link: "#",
        },
        {
          image: "/images/repair/c3.jpg",
          date: "October 9, 2024",
          headline: "Industrial design and precision repair",
          description:
            "Discover the secret to long-lasting glass structures and energy-efficient replacements.",
          link: "#",
        },
        {
          image: "/images/repair/c1.jpg",
          date: "October 9, 2024",
          headline: "Protect my glass from glass breakage?",
          description:
            "A first-time buyer combs the Upper East Side for a place to make his beloved...",
          link: "#",
        },
      ]}
    />
  );
}
