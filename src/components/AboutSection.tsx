import { User, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="bg-dark py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column — Logo + Description */}
          <div>
            {/* Logo placeholder */}
            <div className="mb-10">
              <Sparkles className="w-5 h-5 text-gold mb-3" />
              <h2 className="font-cinzel text-3xl tracking-[0.15em] text-gold gold-glow leading-tight">
                Ludivina<br />Lugo
              </h2>
              <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-cream/40 mt-1">
                Ángeles & Guía Espiritual
              </p>
            </div>

            <p className="font-outfit text-lg text-cream/70 leading-relaxed mb-4 font-light tracking-wide">
              Desde joven descubrí mi conexión con el mundo angelical. Los ángeles me eligieron como
              canal para transmitir sus mensajes de amor, protección y guía a quienes más lo necesitan.
            </p>
            <p className="font-outfit text-lg text-cream/70 leading-relaxed font-light tracking-wide">
              Cada lectura, cada amuleto, cada sesión es un acto de devoción y servicio divino.
              Mi misión es ayudarte a descubrir la luz que ya vive dentro de ti.
            </p>
          </div>

          {/* Right Column — Silhouette with fade */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-96">
              <User className="w-full h-full text-cream/20" strokeWidth={0.8} />
              {/* Bottom fade overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
