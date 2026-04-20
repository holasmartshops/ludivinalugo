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
    <section id="tienda" className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ Amuletos por intención</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Herramientas para tu Camino
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-6">
            Cada amuleto está diseñado y energizado con una intención específica para acompañarte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {intentions.map((item) => (
            <Link
              key={item.label}
              to={`/tienda?intencion=${item.slug}`}
              className="group card-elevated p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-gold/60"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/5 flex items-center justify-center mb-4 border border-gold/30 group-hover:border-gold transition-colors">
                <item.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-secondary mb-1">
                {item.label}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
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
