import ServicesSection from "@/app/components/Services/ServicesSection";
import { services } from "@/app/data/Services";

export default function Services() {
  return (
    <main>
      <ServicesSection items={services} />
    </main>
  );
}
