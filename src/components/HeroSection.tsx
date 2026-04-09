import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-cream pt-16"
    >
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Guía Espiritual Angelical
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>

            <h1 className="font-cinzelDecorative text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider leading-tight mb-6">
              Ludivina Lugo
            </h1>

            <p className="font-cinzel text-sm md:text-base tracking-[0.2em] uppercase text-gold-dark mb-8">
              Lectura de Ángeles · Amuletos · Guía Espiritual
            </p>

            <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Descubre los mensajes que los ángeles tienen para ti. A través de la lectura angelical,
              te guío en tu camino hacia la paz interior, la claridad y la protección divina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Photo Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
              <div className="absolute inset-0 border-2 border-gold/30 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full bg-cream-dark border border-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-gold/40 mx-auto mb-3" />
                  <p className="font-cinzel text-xs tracking-widest text-muted-foreground uppercase">
                    Foto de<br />Ludivina Lugo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
