import { Sparkles, Heart, Compass, Shield, Sun } from "lucide-react";
import starsBg from "@/assets/for-whom-bg.png";

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
          <p className="font-cinzel font-medium text-xs tracking-[0.3em] uppercase text-gold mb-4">¿Es para ti?</p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4 gold-glow">
            Esto es para ti si…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-5 bg-dark-card/50 border border-gold/20 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-gold/50"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-dark flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <p className="font-outfit text-cream/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
