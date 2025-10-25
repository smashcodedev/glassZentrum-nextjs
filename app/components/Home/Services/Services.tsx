import ServicesSection from "@/app/components/Home/Services/ServicesSection";
import { services } from "@/app/data/Services";

export default function Services() {
  return (
    <main>
      <ServicesSection items={services} />
    </main>
  );
}
