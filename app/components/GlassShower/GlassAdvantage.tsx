import TwoColumnSection from "../Ui/TwoColumnSection";

export default function GlassAdvantages() {
  return (
    <div className="bg-[#f8f9ff] py-10">
      <TwoColumnSection
        bgColor="#ffff"
        reverse={false}
        heading="What are the advantages of a glass shower?"
        paragraph="Glass showers and glass shower cubicles not only offer an exclusive design and are a real eye-catcher in every bathroom, but also benefit owners in everyday use. First of all, our products are extremely stable because they are made of toughened safety glass (ESG). Real glass is also more scratch-resistant than plastic showers. The real advantage of these showers, however, is that they are easy to clean, as water and dirt roll off the shower walls due to the so-called lotus effect. This means your bathroom stays dry and clean - and can be used by several people at the same time. Cleaning is always problem-free, all you need is a little glass cleaner for the shower enclosure or shower wall. Our made-to-measure products allow you maximum individuality in your selection and uncomplicated assembly on site . Another advantage concerns the design: a shower of this type fits into almost every interior style. If you don't want to forego privacy while showering in a glass shower, you can decorate your shower cubicle, sliding doors or even the shower wall with individual patterns and stripes that are incorporated into the products. This means that the new shower ultimately fits into every bathroom. For further benefits, please feel free to contact. We are happy to help!"
        ctaLabel="Contact Now"
        ctaHref="/contact"
        imageSrc="/images/glassShower/trio.png"
        imageHeight="h-[450px] sm:h-[520px] lg:h-[650px]"
        className="overflow-visible"
        imageClassName="-translate-y-12"
        ctaClassName="bg-[#00a13a]"
        textSectionWidth="!max-w-[750px]"
        objectFitMode="top"
      />
    </div>
  );
}
