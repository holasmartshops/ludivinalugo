import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, intentions, type Intention } from "@/data/products";

const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("intencion") as Intention | null;

  const filtered = activeFilter
    ? products.filter((p) => p.intention === activeFilter)
    : products;

  const toggleFilter = (value: Intention) => {
    if (activeFilter === value) {
      searchParams.delete("intencion");
    } else {
      searchParams.set("intencion", value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Colección
            </p>
            <h1 className="font-cinzel text-3xl md:text-5xl tracking-wider text-foreground">
              Amuletos Sagrados
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {intentions.map((item) => (
              <button
                key={item.value}
                onClick={() => toggleFilter(item.value)}
                className={`font-cinzel text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full border transition-colors duration-300 ${
                  activeFilter === item.value
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tienda;
