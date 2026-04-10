import { Shield, Sun, Eye, Gem } from "lucide-react";

const intentions = [
  { icon: Sun, label: "Paz", description: "Serenidad interior y armonía" },
  { icon: Eye, label: "Claridad", description: "Visión y entendimiento profundo" },
  { icon: Shield, label: "Protección", description: "Escudo angelical divino" },
  { icon: Gem, label: "Abundancia", description: "Prosperidad y bendiciones" },
];

const ShopIntentions = () => {
  return (
    <section id="tienda" className="bg-dark py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Amuletos por Intención
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4">
            Herramientas para tu Camino
          </h2>
          <p className="font-cormorant text-cream/60 max-w-md mx-auto mt-6">
            Cada amuleto está diseñado y energizado con una intención específica para acompañarte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {intentions.map((item) => (
            <button
              key={item.label}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-dark-card flex items-center justify-center mb-4 group-hover:bg-gold/5 transition-all duration-300">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-cinzel text-sm tracking-wider text-cream mb-1">
                {item.label}
              </h3>
              <p className="font-cormorant text-xs text-cream/50">
                {item.description}
              </p>
            </button>
          ))}
        </div>

        <p className="text-center mt-12 font-cinzel text-xs tracking-[0.2em] uppercase text-cream/40">
          Tienda próximamente disponible
        </p>
      </div>
    </section>
  );
};

export default ShopIntentions;
