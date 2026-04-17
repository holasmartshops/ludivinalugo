import { Link } from "react-router-dom";
import { Shield, Sun, Eye, Gem } from "lucide-react";

const intentions = [
  { icon: Sun, label: "Paz", slug: "paz", description: "Serenidad interior y armonía" },
  { icon: Eye, label: "Claridad", slug: "claridad", description: "Visión y entendimiento profundo" },
  { icon: Shield, label: "Protección", slug: "proteccion", description: "Escudo angelical divino" },
  { icon: Gem, label: "Abundancia", slug: "abundancia", description: "Prosperidad y bendiciones" },
];

const ShopIntentions = () => {
  return (
    <section id="tienda" className="bg-background border-t border-border py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Amuletos por Intención
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-foreground mb-4">
            Herramientas para tu Camino
          </h2>
          <p className="font-outfit text-muted-foreground max-w-md mx-auto mt-6">
            Cada amuleto está diseñado y energizado con una intención específica para acompañarte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {intentions.map((item) => (
            <Link
              key={item.label}
              to={`/tienda?intencion=${item.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-cinzel text-sm tracking-wider text-foreground mb-1">
                {item.label}
              </h3>
              <p className="font-outfit text-xs text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopIntentions;
