import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedInStrip from "@/components/FeaturedInStrip";
import StatsBar from "@/components/StatsBar";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ForWhomSection from "@/components/ForWhomSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import ProductCarousel from "@/components/ProductCarousel";
import ShopIntentions from "@/components/ShopIntentions";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedInStrip />
      <StatsBar />
      <LeadMagnetSection />
      <ForWhomSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <VideoSection />
      <ProductCarousel />
      <ShopIntentions />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
