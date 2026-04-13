import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import ludivinaImg from "@/assets/ludivina.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-dark z-20" />

      {/* Giant background text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <span className="font-cinzelDecorative text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none tracking-[0.15em] text-gold-dark/20 uppercase">
          Ludivina
        </span>
        <span className="font-cinzelDecorative text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-[0.3em] text-gold-dark/20 uppercase -mt-4 md:-mt-8">
          Lugo
        </span>
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 items-center min-h-screen pt-24 pb-0">
        {/* Left — Ludivina photo (hidden on mobile/tablet) */}
        <div className="hidden lg:flex justify-start items-end self-end">
          <div className="relative w-[32rem]">
            <img
              src={ludivinaImg}
              alt="Ludivina Lugo — Guía Espiritual Angelical"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right — Info (centered vertically) */}
        <div className="text-center lg:text-left animate-fade-in-up self-center">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase text-foreground/70">
              Guía Espiritual Angelical
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <img
            src={ludivinaLogo}
            alt="Ludivina Lugo"
            className="w-64 md:w-80 lg:w-96 h-auto mb-6"
          />

          <p className="font-cinzel text-base md:text-lg tracking-[0.2em] uppercase text-gold-dark mb-8">
            Lectura de Ángeles · Amuletos · Guía Espiritual
          </p>

          <p className="font-outfit text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
            Descubre los mensajes que los ángeles tienen para ti. Te guío en tu camino
            hacia la paz interior, la claridad y la protección divina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Descubre tus Mensajes
            </a>
            <a
              href="#tienda"
              className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-300"
            >
              Ver Amuletos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
