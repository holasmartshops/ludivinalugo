import { forwardRef } from "react";
import ludivinaImg from "@/assets/ludivina.png";
import ZodiacWatermark from "@/components/ZodiacWatermark";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20"
    >
      <ZodiacWatermark />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
        {/* Left — Text */}
        <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
          <p className="eyebrow mb-6">✦ Guía Espiritual Angelical</p>

          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-secondary mb-6">
            Mensajes del cielo
            <br />
            para tu alma
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Descubre los mensajes que tus ángeles tienen para ti. Te acompaño en tu camino hacia la paz interior, la
            claridad y la protección divina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#servicios" className="btn-primary">
              Reserva tu Lectura
            </a>
            <a href="#tienda" className="btn-ghost">
              Ver Amuletos
            </a>
          </div>
        </div>

        {/* Right — Photo with bottom fade */}
        <div className="relative flex justify-center lg:justify-end items-end self-end order-1 lg:order-2 h-[90vh] lg:h-[calc(100vh-5rem)]">
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
