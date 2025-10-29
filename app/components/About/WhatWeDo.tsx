import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function WhatWeDo() {
  return (
    <TwoColumnSection
      eyebrow="Solid craftsmanship and “state of the art” technology in a master company."
      reverse={false}
      heading="What we do for you..."
      paragraph="Do you have an idea or are you planning a simple or more complex project? Then come join us. We put your plan into action.
In our glassworks in Altona we process flat glass in all its shapes and colors. We will find professional solutions for your situation, which we will implement with care and precision. Of course, we also take care of the subsequent assembly - be it in your private home or in your business premises.
From glass showers to cutting mirrors to repair glazing; From precisely fitting glass partitions to simple picture frame repairs – we will complete your order promptly and with first-class quality.
Visit the Glass Center North in the Handworker Ottesen. You will find the glassworks right there on the ground floor. We would be happy to advise you on your next project."
      ctaLabel="Contact Us"
      ctaHref="/contact"
      imageSrc="/images/about/do.png"
      className="lg:!pb-20"
    />
  );
}
