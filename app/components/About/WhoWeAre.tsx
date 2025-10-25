import TwoColumnSection from "../Ui/TwoColumnSection";

export default function WhoWeAre() {
  return (
    <TwoColumnSection
      bgColor="#ffff"
      reverse={true}
      heading="Who we are..."
      paragraph="We run our glassworks as a master company. This means: solid craftsmanship based on years of experience, an extensive glass warehouse and a large workshop with the latest state-of-the-art technology. Here we use different glass processing machines to bring glass and mirrors into top shape."
      ctaLabel="Learn More"
      subParagraphs={[
        "The two founders Marcel Vater-Engel and Lucas Krüger lead a team of experienced and motivated specialists in the field of glass in Hamburg Altona.",
      ]}
      ctaHref="/contact"
      imageSrc="/images/about/whatweare.jpg"
      imageHeight="h-[450px] sm:h-[520px] lg:h-[650px]"
      className="overflow-visible"
    />
  );
}
