import Banner from "../Ui/Banner";

export default function WeWantBanner() {
  return (
    <Banner
      borderRadiusPx="30px"
      className="-translate-y-[9rem]"
      title="We Want"
      subtitle="We only want to carry out and implement projects that we are really convinced of."
      subParagraphs={[
        "The satisfaction of our customers is our business card. We combine traditional craftsmanship with contemporary processing options and modern know-how.",
        "Our location is in the Handworker Ottesen, an innovative project to preserve the craftsmen in the district. Here we are the central point of contact for people and companies who value standards, quality and something special in their glass projects. Our customers include, in addition to private individuals, housing associations, architects, craft, commercial and service companies as well as state and federal authorities.",
      ]}
      bgColor="bg-white"
      textColor="text-black"
      borderRadius="4xl"
      textAlign="center"
      fontFamily="font-[Inter]"
      fontWeight="font-normal"
      fontStyle="not-italic"
      fontSize="text-[16px]"
      lineHeight="leading-[26px]"
      letterSpacing="tracking-normal"
      titleClassName="text-4xl sm:text-4xl font-bold text-black"
      subtitleClassName="text-[#737780] text-base sm:text-md"
      paragraphClassName="text-[#737780] text-base sm:text-md leading-relaxed -translate-y-6"
      padding="py-20 px-8 lg:px-24 lg:pb-10 sm:px-12"
      maxWidth="max-w-[1250px]"
      shadow="shadow-sm"
      showCta={false}
    />
  );
}
