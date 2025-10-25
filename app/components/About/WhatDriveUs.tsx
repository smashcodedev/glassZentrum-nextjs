import TwoColumnSection from "../Ui/TwoColumnSection";

export default function WhatDriveUs() {
  return (
    <TwoColumnSection
      bgColor="bg-[#2D2E83]"
      reverse={false}
      heading="What drives us..."
      paragraph="Glass, mirrors, showers, partitions… Glass is fascinating. Glass inspired. We have been working with this material for over a decade."
      ctaLabel="Contact Us"
      subParagraphs={[
        "We carry out all orders relating to the production and processing of glass products, mirrors, furniture and other constructions.",
      ]}
      ctaHref="/contact"
      imageSrc="/images/about/driveUs.png"
      imageHeight="h-[450px] sm:h-[520px] lg:h-[650px]"
      textSectionHeight="min-h-[400px]"
      className="overflow-visible !pt-0 mt-0 !pb-[10rem]"
      headingClassName="text-white"
      paragraphClassName="text-[#EBEBEB] pt-4"
      subParagraphClassName="text-[#EBEBEB]"
      ctaClassName="bg-white text-black mt-10"
    />
  );
}
