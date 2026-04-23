import { useState } from "react";
import { Link } from "react-router-dom";
import { needs, archangelByProductSlug, type NeedSlug } from "@/data/needs";
import { products } from "@/data/products";

const NeedFinder = () => {
  const [active, setActive] = useState<NeedSlug | null>(null);

  const activeNeed = active ? needs.find((n) => n.slug === active) : null;
  const activeProducts = activeNeed
    ? activeNeed.productSlugs
        .map((slug) => products.find((p) => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
    : [];

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

        {/* Chips grid 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          {needs.map((need) => {
            const isActive = active === need.slug;
            return (
              <button
                key={need.slug}
                type="button"
                onClick={() => toggle(need.slug)}
                aria-pressed={isActive}
                className={`group inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 transition-all duration-300 ${
                  isActive
                    ? "border-gold bg-secondary/5 ring-1 ring-gold/40 text-secondary shadow-[var(--shadow-elevated)]"
                    : "border-gold/30 bg-card text-secondary/80 hover:border-gold/60 hover:text-secondary"
                }`}
              >
                <span className="text-lg leading-none" aria-hidden="true">
                  {need.emoji}
                </span>
                <span className="font-body italic text-sm md:text-base text-center">
                  {need.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result panel — soft expanding table */}
        <div
          className={`grid transition-all duration-500 ease-out ${
            activeNeed && activeProducts.length > 0
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!activeNeed}
        >
          <div className="overflow-hidden">
            {activeNeed && activeProducts.length > 0 && (
              <div
                key={activeNeed.slug}
                className="max-w-4xl mx-auto bg-card/60 border border-gold/30 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elevated)] animate-in fade-in duration-500"
              >
                <p className="text-center font-display italic text-xl md:text-2xl text-secondary mb-8">
                  Amuletos para {activeNeed.label.toLowerCase()}
                </p>

                <div className="flex flex-wrap items-stretch justify-center gap-6">
                  {activeProducts.map((product) => {
                    const archangel = archangelByProductSlug[product.slug];
                    return (
                      <Link
                        key={product.slug}
                        to={`/tienda/${product.slug}`}
                        className="w-full sm:w-[260px] card-elevated border border-gold/30 p-6 rounded-2xl bg-card hover:border-gold/60 transition-all duration-300 text-center block"
                      >
                        <div className="bg-card rounded-xl border border-gold/20 p-4 flex items-center justify-center mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-[220px] aspect-square object-contain"
                          />
                        </div>
                        <h3 className="font-display text-2xl text-secondary mb-1">
                          {product.name}
                        </h3>
                        {archangel && (
                          <p className="font-body italic text-gold-dark">
                            {archangel}
                          </p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {!activeNeed && (
          <p className="text-center font-body text-sm text-muted-foreground italic">
            ↑ Toca una necesidad para descubrir tu amuleto
          </p>
        )}
      </div>
    </section>
  );
};

export default NeedFinder;
