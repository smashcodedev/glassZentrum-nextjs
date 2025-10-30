import VideoSection from "../Ui/VideoSection/VideoSection";

export default function RepairVideo() {
  return (
    <VideoSection
      heading="Lorem ipsum dolor sit amet consectetur adipiscing elit"
      imageSrc="/images/about/vidImage.jpg"
      imageAlt="Glassworks project image"
      imageHeight="h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px]"
      overlayOpacity="bg-black/20"
      borderRadius="rounded-[2.5rem]"
      imageWidth="lg:w-[75%] w-[96%] sm:w-full md:w-[75%]"
      maxTextWidth="max-w-[1100px]"
      className="bg-[#F6F9FF]"
    />
  );
}
