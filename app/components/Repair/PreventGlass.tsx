"use client";

import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";

export default function PreventGlass() {
  return (
    <div className="w-full flex justify-center px-6 sm:px-10 lg:px-20 py-10">
      <div className="w-full max-w-[1250px] bg-[#F8FAFC] shadow-md rounded-2xl overflow-hidden border border-gray-200">
        <TwoColumnSection
          reverse={false}
          heading="Prevent glass repairs: use anti-shatter films!"
          headingClassName="text-2xl sm:text-3xl lg:text-4xl mb-3"
          paragraphClassName="text-sm sm:text-base lg:text-[17px] leading-relaxed"
          paragraph={`Another way to prevent glass breakage is to use a splinter protection film. This is attached directly to the flat glass surface and protects against skin injuries and minor cracks. Should a break still occur, the film holds the shards together and thus prevents a pile of shards consisting of sharp-edged glass splinters. Shatter protection films can be used in a variety of ways. They are particularly often needed for glass doors, mirrors and in kindergartens, as they significantly reduce the risk of injury if the glass breaks. Proper disposal of the broken material is also important. You notice: professional advice is required in order to avoid errors during use. This is what we are here for. Just contact us - we will be happy to advise you!`}
          borderRaduisImage="rounded-xl"
          imageClass="!rounded-3xl "
          imageSrc="/images/repair/preventGlass.jpg"
          imageWidth="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[500px]"
          imageClassName="rounded-3xl !-translate-y-6"
          textSectionHeight="lg:flex-[1.7]"
          className="!py-10"
          noNextImage={true}
        />
      </div>
    </div>
  );
}
