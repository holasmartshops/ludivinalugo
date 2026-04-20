import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";


const ProductCarousel = () => {
  const [active, setActive] = useState(0);
  const total = products.length;
  const touchStartX = useRef<number>(0);
  const isMobile = useIsMobile();
  const offsetX = isMobile ? 130 : 220;
  const activeScale = isMobile ? 1.05 : 1.15;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="bg-muted/40 py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ Colección sagrada</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Amuletos bendecidos
          </h2>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div
          className="relative flex items-center justify-center h-[480px] md:h-[540px]"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 2;
            if (!visible) return null;

            return (
              <div
                key={product.slug}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${offset * offsetX}px) scale(${isActive ? activeScale : 0.7})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.4 : 0.15,
                }}
                onClick={() => setActive(i)}
              >
                <div className={`text-center mb-3 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                  <h3 className="font-display text-2xl text-secondary">{product.name}</h3>
                </div>

                <div className={`relative w-40 h-56 md:w-56 md:h-72 overflow-hidden rounded-xl ${isActive ? "ring-1 ring-gold/60 shadow-[0_8px_32px_hsl(var(--secondary)/0.15)]" : ""}`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-card" />
                  {!isActive && <div className="absolute inset-0 bg-background/60" />}
                </div>

                <div className={`text-center mt-3 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                  <p className="font-body text-gold-dark font-medium">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-12 mt-6">
          <button onClick={prev} className="text-secondary/60 hover:text-gold transition-colors">
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button onClick={next} className="text-secondary/60 hover:text-gold transition-colors">
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link to="/tienda" className="btn-primary">Ver Catálogo</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
