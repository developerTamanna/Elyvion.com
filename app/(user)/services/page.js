import ServiceSection from "./ServiceSection";
import ServiceBrandsCarousel from "./ServiceBrandsCarousel";
import ServicesCards from "./ServicesCards";
import CTASection from "./CTASEction";


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

