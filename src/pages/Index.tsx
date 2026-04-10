import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCarousel from "@/components/ProductCarousel";
import StatsBar from "@/components/StatsBar";
import ShopIntentions from "@/components/ShopIntentions";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductCarousel />
      <StatsBar />
      <ShopIntentions />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
