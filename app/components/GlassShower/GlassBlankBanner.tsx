import Banner from "../Ui/Banner";

export default function GlassBlankBanner() {
  return (
    <Banner
      borderRadiusPx="30px"
      className="-translate-y-[9rem]"
      subtitle="A  shower screen  is far more durable than a shower curtain, as the latter has to be replaced over time due to hygiene and appearance. Shower walls and shower cubicles, on the other hand, can be used over a long period of time, but should be cleaned daily with a limescale squeegee to avoid annoying limescale stains on the material. A  shower enclosure  consists of at least one shower wall, but often two, which are built at a corner, creating a corner entry into the frameless  shower cubicle  . The shower enclosure can also be easily mounted on the side or in the middle of a wall. In the variant with two corner shower enclosures, your bathroom no longer needs a shower door. This is also known as a  walk-in shower enclosure  and is completely barrier-free. Shower cubicles with a walk-in solution are therefore particularly suitable for older people or people with walking difficulties and can be set up and installed in even the smallest bathrooms and niches. If you have any further questions regarding  walk-in,  we would be happy to advise you by telephone. "
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
      padding="mt-10 py-14 px-10 lg:px-16 sm:px-12"
      maxWidth="max-w-[1250px]"
      shadow="shadow-sm"
      showCta={false}
    />
  );
}
