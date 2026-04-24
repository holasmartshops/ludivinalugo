import { forwardRef } from "react";
import ludivinaImg from "@/assets/ludivina.webp";
import heroClouds from "@/assets/hero-clouds.webp";
import ZodiacWatermark from "@/components/ZodiacWatermark";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="inicio"
      className="relative overflow-hidden bg-background pt-24 pb-12 lg:pt-20 lg:pb-0 lg:min-h-screen lg:flex lg:items-center"
    >
      <img
        src={heroClouds}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mask-fade-bottom pointer-events-none"
      />
      <ZodiacWatermark />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center lg:min-h-[calc(100vh-6rem)]">
        {/* Left — Text */}
        <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
          <p className="eyebrow mb-6">✦ Guía Espiritual Angelical</p>

          <h1 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-secondary mb-6">
            Mensajes del cielo
            <br />
            para tu alma
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-10">
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

        {/* Right — Photo with bottom fade */}
        <div className="relative flex justify-center items-end order-1 lg:order-2 h-[42vh] max-h-[420px] w-full lg:h-[calc(100vh-6rem)] lg:max-h-none lg:justify-end lg:self-end">
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
