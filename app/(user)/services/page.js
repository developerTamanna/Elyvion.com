import ServicesCards from "./ServicesCards";
import ServiceSection from "./ServiceSection";
import ServiceBrandsCarousel from "./ServiceBrandsCarousel";

export default function ServicesPage() {
  return (
    <div>
      <ServiceSection />
      <ServicesCards />
      <ServiceBrandsCarousel />
    </div>
  );
}

