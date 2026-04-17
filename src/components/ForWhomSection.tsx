import { Sparkles, Heart, Compass, Shield, Sun } from "lucide-react";
import starsBg from "@/assets/for-whom-bg.png";
import angelFrame from "@/assets/angel-frame.png";

const items = [
  { icon: Compass, text: "Sientes que necesitas claridad en tu camino" },
  { icon: Shield, text: "Buscas protección y paz interior" },
  { icon: Sparkles, text: "Quieres conectar con tus ángeles guardianes" },
  { icon: Heart, text: "Atraviesas un momento de transición o duelo" },
  { icon: Sun, text: "Deseas atraer abundancia con propósito divino" },
];

const ForWhomSection = () => {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${starsBg})` }}
      />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent z-[1]" />

      <div className="relative z-[2] container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel font-semibold text-xs tracking-[0.3em] uppercase text-gold mb-4">¿Es para ti?</p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4 gold-glow">
            Esto es para ti si…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="relative aspect-[4/1.2]">
              <img
                src={angelFrame}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
              />
              <div className="relative z-10 flex items-center justify-center gap-4 h-full px-12 py-6 text-center">
                <Icon className="shrink-0 w-6 h-6 text-gold" strokeWidth={1.5} />
                <p className="font-cinzel font-semibold text-dark tracking-wide leading-relaxed text-sm md:text-base">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
