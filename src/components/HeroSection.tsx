import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cream overflow-hidden"
    >
      {/* Giant background text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <span className="font-cinzelDecorative text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none tracking-[0.15em] text-gold/10 uppercase">
          Ludivina
        </span>
        <span className="font-cinzelDecorative text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-[0.3em] text-gold/10 uppercase -mt-4 md:-mt-8">
          Lugo
        </span>
      </div>

      {/* Photo placeholder (PNG with transparency) */}
      <div className="relative z-10 mt-20 mb-8">
        <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] flex items-end justify-center">
          {/* Replace this div with an <img> of the transparent PNG */}
          <div className="w-full h-full bg-gradient-to-t from-cream-dark/50 to-transparent border border-gold/15 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-gold/40 mx-auto mb-3" />
              <p className="font-cinzel text-xs tracking-widest text-muted-foreground uppercase">
                Foto PNG<br />Ludivina Lugo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Text below photo */}
      <div className="relative z-10 text-center px-4 pb-20 animate-fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Guía Espiritual Angelical
          </span>
          <Sparkles className="w-4 h-4 text-gold" />
        </div>

        <p className="font-cinzel text-sm md:text-base tracking-[0.2em] uppercase text-gold-dark mb-6">
          Lectura de Ángeles · Amuletos · Guía Espiritual
        </p>

        <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
          Descubre los mensajes que los ángeles tienen para ti. Te guío en tu camino
          hacia la paz interior, la claridad y la protección divina.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 border-2 border-gold text-gold-dark hover:bg-gold hover:text-foreground transition-all duration-300"
          >
            Descubre tus Mensajes
          </a>
          <a
            href="#tienda"
            className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 border border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-300"
          >
            Ver Amuletos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
