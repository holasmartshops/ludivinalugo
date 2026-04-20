import { Feather, HandHeart, Sun } from "lucide-react";
import ludivinaAbout from "@/assets/ludivina-about.png";

const pillars = [
  { icon: Feather, label: "Devoción" },
  { icon: HandHeart, label: "Servicio" },
  { icon: Sun, label: "Luz" },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative bg-background py-24">
      <hr className="gold-divider max-w-6xl mx-auto mb-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 lg:w-[28rem] card-elevated p-3 bg-white">
              <img
                src={ludivinaAbout}
                alt="Ludivina Lugo — Guía Espiritual Angelical"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">✦ Conoce a Ludivina</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight mb-8">
              Un canal entre el cielo y tu alma
            </h2>

            <div className="space-y-5 font-body text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Desde niña, Ludivina escuchó susurros que otros no podían oír. A los doce
                años tuvo su primer encuentro consciente con un ángel guardián, un instante
                que marcó para siempre su camino.
              </p>
              <p>
                Con más de quince años de trayectoria en angelología, numerología sagrada y
                terapias energéticas, ha guiado a miles de personas a través de lecturas,
                eventos y rituales de bendición de amuletos.
              </p>
              <p>
                Su misión: tender un puente entre el cielo y la tierra, recordándote que
                nunca caminas sola.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mb-10">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/5 flex items-center justify-center border border-gold/40">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn-ghost">Conoce mi historia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
