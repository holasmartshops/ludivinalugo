import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedInStrip from "@/components/FeaturedInStrip";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import VideoSection from "@/components/VideoSection";
// import ProductCarousel from "@/components/ProductCarousel"; // Carrusel desactivado temporalmente
import NeedFinder from "@/components/NeedFinder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedInStrip />
      <AboutSection />
      <StatsBar />
      <LeadMagnetSection />
      <VideoSection />
      {/* <ProductCarousel /> Carrusel desactivado temporalmente */}
      <NeedFinder />
      <Footer />
    </div>
  );
};

export default Index;
