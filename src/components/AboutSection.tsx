import ludivinaAbout from "@/assets/ludivina-about.png";
import ludivinaLogo from "@/assets/ludivina-logo.png";
import starsBg from "@/assets/stars-bg.png";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative py-24">
      {/* Stars background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${starsBg})` }}
      />
      {/* Top fade to dark */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark to-transparent z-[1]" />
      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent z-[1]" />
      <div className="relative z-[2] container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column — Logo + Description */}
          <div>
            <div className="mb-10">
              <img src={ludivinaLogo} alt="Ludivina Lugo" className="w-64 h-auto" />
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
