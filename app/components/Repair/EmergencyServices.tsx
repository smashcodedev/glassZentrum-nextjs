import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function EmergencyServices() {
  return (
    <TwoColumnSection
      bgColor="bg-[#f8f9ff]"
      className="!pb-24"
      reverse={false}
      heading="Our emergency service: glass repairs on site as quickly as possible!"
      paragraph={`A well-known saying goes: “Shards bring luck!”. We don't want to sign that if the glass breaks and there's a pile of shards. In many cases, glass repair requires speed and precision because the sharp-edged shards are a danger to people and animals. Even small discs with a density of just a few millimeters (mm) can cause dangerous injuries if appropriate action is not taken. We are there for you - with our emergency service. Regardless of whether you have an accident, break-in or other broken glass objects, you can reach us at any time via the hotline. We will help you as quickly as possible. We need your contact details, a brief description of the situation and the location of the operation. This is followed by professional processing including advice and quick glass repairs. Also included in our service portfolio: the replacement of your glass object. As described at the beginning of this page, we take care of a precise error analysis. The knowledge gained from this is incorporated into the selection of the new glass object. Proper assembly and the use of the right building materials are a matter of course for us. Directly on site, we are also concerned with securing your own glass property, professionally sealing a building from possible weather conditions and, above all, restoring the safety of all residents. `}
      imageSrc="/images/repair/EmergencyService.png"
      imageClassName="-translate-y-16"
    />
  );
}
