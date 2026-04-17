import { Feather, HandHeart, Sun } from "lucide-react";
import ludivinaAbout from "@/assets/ludivina-about.png";
import ludivinaLogo from "@/assets/ludivina-logo.png";
import starsBg from "@/assets/stars-bg.png";

const pillars = [
  { icon: Feather, label: "Devoción" },
  { icon: HandHeart, label: "Servicio" },
  { icon: Sun, label: "Luz" },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative py-24">
      {/* Stars background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${starsBg})` }}
      />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent z-[1]" />

      <div className="relative z-[2] container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column — Logo + Bio */}
          <div>
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center lg:text-left">
              Biografía
            </p>
            <div className="mb-10 flex justify-center lg:justify-start">
              <img src={ludivinaLogo} alt="Ludivina Lugo" className="w-64 h-auto" />
            </div>

            <p className="font-outfit text-lg text-cream/70 leading-relaxed mb-4 font-medium tracking-wide">
              Desde niña, Ludivina escuchó susurros que otros no podían oír. A los doce
              años tuvo su primer encuentro consciente con un ángel guardián, un instante
              que marcó para siempre su camino y le reveló su don como canal angelical.
            </p>
            <p className="font-outfit text-lg text-cream/70 leading-relaxed mb-4 font-medium tracking-wide">
              Con más de quince años de trayectoria, se ha formado en angelología,
              numerología sagrada y terapias energéticas. Ha guiado a miles de personas
              a través de lecturas, eventos y rituales de bendición de amuletos.
            </p>
            <p className="font-outfit text-lg text-cream/70 leading-relaxed mb-10 font-medium tracking-wide">
              Hoy su misión es clara: tender un puente entre el cielo y la tierra,
              recordándote que nunca caminas sola. Cada sesión es un acto de devoción
              y un reflejo de la luz que habita en cada alma.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-dark-card flex items-center justify-center border border-gold/20">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-cream/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Silhouette with fade */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 lg:w-96">
              <img
                src={ludivinaAbout}
                alt="Ludivina Lugo — Guía Espiritual Angelical"
                className="w-full h-auto object-contain"
                style={{ maskImage: "linear-gradient(to bottom, white 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, white 50%, transparent 100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
