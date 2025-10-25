"use client";

import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function OurExperts() {
  return (
    <TwoColumnSection
      bgColor="bg-white"
      className="!pb-24"
      reverse={true}
      heading="Our experts measure and replace defective glass panes for you!"
      paragraph={`We are the experts for glass breakage of all kinds. One call is enough and our experts will be on the spot. 
No matter whether it's a burglary, an accident, or the classic broken window or door made of glass!
We take care of glass repairs and repair glazing — promptly and reliably. 
Repairs are just one of our diverse services: from measurements to installation, from single to insulating glass, from damaged panes to damaged doors.
Included in our service portfolio: emergency glazing! All it takes is one call — day or night. 
We’re available around the clock. Our competent experience is based on years of working with glass repairs.
After emergency protection, we can initiate the appropriate repair glazing if requested. 
Depending on the material you choose, production periods vary — but we do everything to make sure you can see crystal clear again quickly.
Below we explain how we work, what causes glass breakage, how you can protect against it, and what other proven services we offer — all for your glass!`}
      ctaLabel="Our emergency service number:040 32042000"
      ctaHref="/contact"
      imageSrc="/images/repair/RepariExperts.jpg"
      // 👇 Added image size props here
      imageWidth="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px]"
      imageHeight="h-auto"
    />
  );
}
