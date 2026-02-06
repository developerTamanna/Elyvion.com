import ServicesCards from "./ServicesCards";
import ServiceSection from "./ServiceSection";
import ServiceBrandsCarousel from "./ServiceBrandsCarousel";
import CTASection from "../components/CTASection";

export default function ServicesPage() {
  return (
    <div>
      <ServiceSection />
      <ServicesCards />
      <ServiceBrandsCarousel />
      <CTASection />
    </div>
  );
}

