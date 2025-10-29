import React from "react";
import ListSection from "../Ui/ListSection/ListSection";

export default function GlassContent() {
  return (
    <ListSection
      heading="Content of our site: "
      headingPosition="left"
      items={[
        "What are the advantages of a glass shower?",
        "The right glass shower for me: as a shower screen, shower enclosure or shower cubicle?",
        "A question of installation situation and taste: shower cubicle complete, frameless, round or square?",
        "Shower fittings for glass showers: die-cast zinc as a solution!",
        "Last but not least: What glass is the best shower screen or shower cubicle made of for me?",
      ]}
      iconColor="text-[#2D2E83]"
      sectionClass="bg-white"
      itemBoxClass="bg-white"
      textClass="text-[#191D21] font-semibold"
    />
  );
}
