import { useState } from "react";
import { Link } from "react-router-dom";
import { needs, archangelByProductSlug, type NeedSlug } from "@/data/needs";
import { products } from "@/data/products";

const NeedFinder = () => {
  const [active, setActive] = useState<NeedSlug | null>(null);

  const activeNeed = active ? needs.find((n) => n.slug === active) : null;
  const activeProduct = activeNeed
    ? products.find((p) => p.slug === activeNeed.productSlug)
    : null;
  const archangel = activeProduct ? archangelByProductSlug[activeProduct.slug] : null;

  const toggle = (slug: NeedSlug) => {
    setActive((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="amuletos" className="bg-muted/40 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ ¿Es para ti?</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            ¿Qué estás buscando?
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4">
            Toca lo que sientes y te mostramos tu amuleto.
          </p>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-12">
          {needs.map((need) => {
            const isActive = active === need.slug;
            return (
              <button
                key={need.slug}
                type="button"
                onClick={() => toggle(need.slug)}
                aria-pressed={isActive}
                className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 transition-all duration-300 ${
                  isActive
                    ? "border-gold bg-secondary/5 ring-1 ring-gold/40 text-secondary shadow-[var(--shadow-elevated)]"
                    : "border-gold/30 bg-card text-secondary/80 hover:border-gold/60 hover:text-secondary"
                }`}
              >
                <span className="text-lg leading-none" aria-hidden="true">
                  {need.emoji}
                </span>
                <span className="font-body italic text-sm md:text-base">
                  {need.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result panel */}
        {activeNeed && activeProduct ? (
          <div
            key={activeNeed.slug}
            className="max-w-3xl mx-auto card-elevated border border-gold/30 p-6 md:p-10 animate-in fade-in duration-300"
          >
            <p className="text-center font-display italic text-xl md:text-2xl text-secondary mb-8">
              Amuleto para {activeNeed.label.toLowerCase()}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div className="bg-card rounded-xl border border-gold/20 p-4 flex items-center justify-center">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full max-w-[260px] aspect-square object-contain"
                />
              </div>

              <div className="text-center sm:text-left">
                {archangel && (
                  <p className="font-body italic text-gold-dark mb-2">
                    {archangel}
                  </p>
                )}
                <h3 className="font-display text-3xl text-secondary mb-2">
                  {activeProduct.name}
                </h3>
                <p className="font-body text-lg text-gold-dark font-medium mb-6">
                  {activeProduct.price}
                </p>
                <Link
                  to={`/tienda/${activeProduct.slug}`}
                  className="btn-primary"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center font-body text-sm text-muted-foreground italic">
            ↑ Toca una necesidad para descubrir tu amuleto
          </p>
        )}
      </div>
    </section>
  );
};

export default NeedFinder;
