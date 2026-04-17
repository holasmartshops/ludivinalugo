import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatLudivinaDoes from "@/components/WhatLudivinaDoes";
import ForWhomSection from "@/components/ForWhomSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCarousel from "@/components/ProductCarousel";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatLudivinaDoes />
      <ForWhomSection />
      <ServicesSection />
      <ProductCarousel />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
