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
      imageSrc="/images/about/drive.png"
      imageHeight="h-[450px] sm:h-[520px] lg:h-[650px]"
      textSectionHeight="lg:pb-0 pb-10 -translate-y-10 lg:-translate-y-0"
      className="overflow-visible  pt-10 lg:!pt-0 mt-0 !pb-[10rem]"
      headingClassName="text-white"
      paragraphClassName="text-[#EBEBEB] pt-4"
      subParagraphClassName="text-[#EBEBEB]"
      ctaClassName="bg-white text-black mt-10"
      imageWidth="sm:w-[600px] w-[600px] translate-x-3"
    />
  );
}
