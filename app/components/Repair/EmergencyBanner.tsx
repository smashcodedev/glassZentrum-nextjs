"use client";

import React from "react";
import { InfoBanner } from "../Ui/Banner/InfoBanner";

export default function EmergencyBanner() {
  return (
    <InfoBanner
      contentWrapperClassName="lg:w-full !w-[90%]"
      title="Emergency Service"
      subtitle="Whether it's a break-in, storm damage or another cause, just call (040) 32 04 20 00 and we'll come."
      highlight="This service is available to you 24/7"
      ctaLabel="Contact Us"
      onCta={() => alert("Calling emergency service...")}
      bgColor="#2D2E83"
      textColor="white"
      ctaBgColor="#fff"
      ctaTextColor="#000"
      borderRadius="rounded-3xl"
      shadow="shadow-xl"
      paddingY="py-8 sm:py-10 lg:py-12"
      paddingX="px-6 sm:px-12 lg:px-16 xl:px-20"
      textAlign="left"
      gap="gap-0"
      titleClassName=""
      subtitleClassName=""
      highlightClassName=""
      buttonClassName=""
    />
  );
}
