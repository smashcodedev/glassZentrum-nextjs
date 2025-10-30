"use client";

import React from "react";
import { InfoBanner } from "../Ui/Banner/InfoBanner";

export default function EmergencyBannerGreen() {
  return (
    <InfoBanner
      contentWrapperClassName="lg:w-full !w-[90%]"
      title="Emergency service : 040 32042000"
      subtitle="Or you can easily contact us by email. To do this, click on the contact button below!"
      ctaLabel="Contact Us"
      onCta={() => alert("Calling emergency service...")}
      bgColor="#009937"
      textColor="white"
      ctaBgColor="#fff"
      ctaTextColor="#000"
      borderRadius="rounded-3xl"
      shadow="shadow-xl"
      paddingY="py-8 sm:py-10 lg:py-20"
      paddingX="px-6 sm:px-12 lg:px-16 xl:px-20"
      textAlign="center"
      gap="gap-0"
      titleClassName=""
      subtitleClassName=""
      highlightClassName=""
      buttonClassName=""
      layout="vertical"
      greena={true}
    />
  );
}
