"use client";

import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function ProtectGlass() {
  return (
    <TwoColumnSection
      reverse={false}
      heading="How can I protect my glass from glass breakage?"
      paragraph={`Speaking of advice: prevention is the key word! The best way to simplify glass repair is to simply make it unnecessary. Most glass damage could therefore be prevented if the material had been treated correctly. Choosing the right glass is essential. Of course, every area of ​​glass use requires a different type of glass. Flat front doors, a large window with direct sunlight, winter gardens, mirror glass in the bathroom: the possible uses of glass are numerous. The same goes for glass repairs. In the previous part we already  discussed the different causes of glass breakage. This needs to be limited during  production. Tempered glass, for example, protects against excessive heat development, which makes it particularly robust and suitable for winter gardens that are exposed to direct sunlight. Glass repairs can be prevented in advance`}
      imageSrc="/images/repair/protectGlass.png"
      imageClassName="!-translate-y-8"
    />
  );
}
