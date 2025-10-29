import TwoColumnSection from "../Ui/TwoColumnSection";

export default function GlassRight() {
  return (
    <TwoColumnSection
      bgColor="bg-[#2D2E83]"
      reverse={false}
      heading="The right glass shower for me: as a shower screen, shower enclosure or shower cubicle?"
      paragraph="In the second point we would like to explain the initial terminology to you. Because a shower screen, a shower enclosure and a shower cubicle are different from each other and offer individual solutions for every customer requirement. "
      imageSrc="/images/glassShower/right.png"
      imageHeight="h-[450px] sm:h-[520px] lg:h-[400px]"
      textSectionHeight="min-h-[400px]"
      className="overflow-visible !pt-0 mt-0 !pb-[10rem]"
      headingClassName="text-white pt-4"
      paragraphClassName="text-[#EBEBEB] !pt-8"
      subParagraphClassName="text-[#EBEBEB]"
      ctaClassName="bg-white text-black mt-10"
      imageClass="!rounded-6xl !object-contain"
      noNextImage={true}
      paddingTop={true}
    />
  );
}
