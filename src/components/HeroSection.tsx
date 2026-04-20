import { forwardRef } from "react";
import ludivinaImg from "@/assets/ludivina.png";
import heroClouds from "@/assets/hero-clouds.jpg";
import ZodiacWatermark from "@/components/ZodiacWatermark";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] lg:min-h-screen lg:h-auto flex items-center overflow-hidden bg-background pt-24 pb-8 lg:pt-20 lg:pb-0"
    >
      <img
        src={heroClouds}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mask-fade-bottom pointer-events-none"
      />
      <ZodiacWatermark />

      {/* Mobile: Ludivina como capa de fondo */}
      <img
        src={ludivinaImg}
        alt=""
        aria-hidden="true"
        className="lg:hidden absolute bottom-0 right-0 h-[60%] w-auto object-contain object-bottom mask-fade-bottom opacity-90 pointer-events-none z-[5]"
      />

      <div className="relative z-10 container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
        {/* Left — Text */}
        <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
          <p className="eyebrow mb-3 lg:mb-6">✦ Guía Espiritual Angelical</p>

          <h1 className="font-display font-medium text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-secondary mb-4 lg:mb-6">
            Mensajes del cielo
            <br />
            para tu alma
          </h1>

          <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed max-w-md lg:max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-10">
            Descubre los mensajes que tus ángeles tienen para ti. Te acompaño en tu camino hacia la paz interior, la
            claridad y la protección divina.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#servicios" className="btn-primary w-full sm:w-auto">
              Reserva tu Lectura
            </a>
            <a href="#tienda" className="btn-ghost w-full sm:w-auto">
              Ver Amuletos
            </a>
          </div>
        </div>

        {/* Right — Photo (desktop only) */}
        <div className="hidden lg:flex relative justify-center lg:justify-end items-end self-end order-1 lg:order-2 h-[60vh] lg:h-[calc(100vh-6rem)]">
          <img
            src={ludivinaImg}
            alt="Ludivina Lugo — Guía Espiritual Angelical"
            className="h-full w-auto object-contain object-bottom mask-fade-bottom"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
