import ServiceCard from "./ServicesCard";
import { Service } from "@/app/data/Services";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  items: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "What we do",
  subtitle = "Sed ut perspiciatis unde omnis iste natus error sit.",
  items,
}) => {
  
  return (
    <section className="w-full  py-14 sm:py-16 lg:py-24 bg-[#f8f9ff]">
      <div className="max-w-[1250px] mx-auto px-6 sm:px-8 xl:px-0">
        <header className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#101826] leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </h2>
          <p
            className="mt-4 text-sm font-normal sm:text-base text-[#585C67] max-w-[720px] mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {subtitle}
          </p>
        </header>

        <div
          className="
            grid gap-8 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            auto-rows-fr
          "
        >
          {items.map((item) => (
            <ServiceCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
