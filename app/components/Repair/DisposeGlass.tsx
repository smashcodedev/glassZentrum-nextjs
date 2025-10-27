"use client";

import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function DisposeGlass() {
  return (
    <TwoColumnSection
      bgColor="bg-[#f8f9ff]"
      className="!pb-24"
      reverse={true}
      heading="Why can't a pane be disposed of in residual waste or in a waste glass container?"
      paragraph={`Some types of glass are made from other materials through more complex production processes. This would make the recycling cycle for residual waste more expensive and there would be a price increase for the end consumer. This also applies to vehicle glass, for example. Glass, which is particularly found in cars, contains additional substances. Regardless of whether it is a safety film, dark edge coatings or colored visual stripes: vehicle glass is also recycled differently and therefore disposed of differently. If you want to be on the safe side, you can get advice from a recycling center or recycling center - or simply from us: As experts for all types of glass, comprehensive disposal advice is automatically part of our service portfolio! We always find a suitable solution for your glass problem and offer you the right alternatives. Please contact us via email!`}
      imageSrc="/images/repair/Dispose.jpg"
      imageClassName="-translate-y-10"
    />
  );
}
