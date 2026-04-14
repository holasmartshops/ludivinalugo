import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import amuletoImg from "@/assets/amuleto-placeholder.png";

const ProductCarousel = () => {
  const [active, setActive] = useState(0);
  const total = products.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="bg-dark py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Colección
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4 gold-glow">
            Amuletos Sagrados
          </h2>
        </div>

        <div className="relative flex items-center justify-center h-[420px] md:h-[480px]">
          {products.map((product, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 3;

            if (!visible) return null;

            return (
              <div
                key={product.slug}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${offset * 220}px) scale(${isActive ? 1 : 0.75})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  opacity: isActive ? 1 : 0.4,
                }}
                onClick={() => setActive(i)}
              >
                <div
                  className={`text-center mb-3 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-cinzel text-lg tracking-wider text-gold">
                    {product.name}
                  </h3>
                  <p className="font-outfit text-cream/60 text-sm">
                    {product.price}
                  </p>
                </div>

                <div className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden">
                  <img
                    src={amuletoImg}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-dark/50 transition-opacity duration-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-12 mt-6">
          <button onClick={prev} className="text-gold/60 hover:text-gold transition-colors">
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button onClick={next} className="text-gold/60 hover:text-gold transition-colors">
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tienda"
            className="inline-block font-cinzel text-sm tracking-[0.2em] uppercase text-gold px-10 py-3 hover:text-gold-light transition-colors"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
