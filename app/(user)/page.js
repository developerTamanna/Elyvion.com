import AboutSection from './components/AboutSection';
import AwardsSection from './components/AwardsSection';
import BrandsCarousel from './components/BrandsCarousel';
import CertificateSection from './components/CertificateSection';
import CTASection from './components/CTASection';
import Hero from './components/Hero';
import ScrollingBanner from './components/ScrollingBanner';
import ServicesSection from './components/ServicesSection';


export default function Home() {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <AboutSection />
      <AwardsSection />
      <ScrollingBanner />
      <ServicesSection />
      <CertificateSection />
      <CTASection />
      
    </>
  );
}
