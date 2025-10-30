"use client";

import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function GlassLast() {
  return (
    <TwoColumnSection
      bgColor="bg-white"
      className="!pb-24"
      reverse={true}
      heading="Last but not least: What glass is the best shower screen or shower cubicle made of for me? "
      paragraph={`Shower enclosure, shower wall, shower cubicle or shower door: the question of material selection arises for all of our products and can be answered in just as many ways. Clear glass impresses with its very high-quality and elegant look. In addition, more light enters the shower cubicle or through any side wall. For customers who value strong privacy protection, matt white glass (or gray glass or colored glass ) is the measure of all things. If your shower is in a small, winding bathroom or in a niche, even less light enters the shower. Walk-in solutions, which often do not require a shower door, require a lot of space. Modern real glass showers are usually made of safety glass . This is particularly flexible and very robust. In addition, in the unfortunate event of the glass breaking, toughened safety glass (ESG) shatters into numerous small crumbs, so that in extreme cases there are no injuries. As you can see, there are many options when choosing glass (such as real glass). We therefore offer comprehensive and, above all, individually tailored advice based on decades of experience. The best way to do this is to contact us by telephone. `}
      imageSrc="/images/glassShower/last.png"
      imageClassName="-traslate-y-0 lg:-translate-y-[8rem]"
      imageWidth="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px]"
      imageHeight="h-auto"
    />
  );
}
