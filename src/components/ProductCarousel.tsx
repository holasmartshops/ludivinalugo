import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import amuletoImg from "@/assets/amuleto-placeholder.png";

const products = [
  { name: "Ala de Ángel", price: "$45.00" },
  { name: "Escudo Celestial", price: "$52.00" },
  { name: "Estrella Divina", price: "$38.00" },
  { name: "Llave del Arcángel", price: "$60.00" },
  { name: "Cruz Angelical", price: "$42.00" },
  { name: "Pluma Sagrada", price: "$35.00" },
  { name: "Ojo Protector", price: "$48.00" },
];

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
        {/* Title */}
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Colección
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4">
            Amuletos Sagrados
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[480px]">
          {products.map((product, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 3;

            if (!visible) return null;

            return (
              <div
                key={product.name}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${offset * 220}px) scale(${isActive ? 1 : 0.75})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  opacity: isActive ? 1 : 0.4,
                }}
                onClick={() => setActive(i)}
              >
                {/* Product name - only on active */}
                <div
                  className={`text-center mb-3 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-cinzel text-lg tracking-wider text-gold">
                    {product.name}
                  </h3>
                  <p className="font-cormorant text-cream/60 text-sm">
                    {product.price}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-sm border border-dark-border">
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

        {/* Arrows */}
        <div className="flex items-center justify-center gap-8 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:border-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:border-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#tienda"
            className="inline-block font-cinzel text-sm tracking-[0.2em] uppercase text-gold border border-gold/40 px-10 py-3 hover:bg-gold/10 transition-colors"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
