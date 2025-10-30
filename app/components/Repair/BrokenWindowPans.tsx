import React from "react";
import ImageTextSection from "../Ui/ImageTextSection/ImageTextSection";

export default function BrokenWindowPans() {
  return (
    <ImageTextSection
      title="Broken window pane, glass door or glass mirror: the correct disposal if glass breaks"
      paragraph="What to do if glass breaks? This paragraph is intended to clarify that! Here you can find out how to dispose of glass correctly. One important fact in advance: Window glass does NOT belong in the waste glass container. Window glass is produced differently and therefore goes through a different recycling cycle than packaging glass. If you find yourself in the unpleasant situation of glass breaking, the pile of broken glass should be placed in a sturdy plastic container. You can then dispose of this as bulky waste or hand it in at a recycling center.The same applies to mirror glass, because there is a different recycling cycle here too. Not all glass is the same."
      imageSrc="/images/BG.jpg"
      reverse={false}
      floatingCardClassName="-translate-y-10"
      textClassName="mt-0  -translate-x-0 lg:!mt-[15.5rem] lg:-translate-x-10"
      imageHeight="h-[550px]"
      imageWidth="w-[510px] sm:w-[550px]"
    />
  );
}
