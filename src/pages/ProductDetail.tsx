import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, intentions } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import amuletoImg from "@/assets/amuleto-placeholder.png";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-outfit text-muted-foreground">Producto no encontrado.</p>
      </div>
    );
  }

  const intentionLabel =
    intentions.find((i) => i.value === product.intention)?.label ?? "";

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} añadido al carrito`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/tienda"
            className="inline-flex items-center gap-2 font-outfit text-sm text-muted-foreground hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <img
                src={amuletoImg}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
                {intentionLabel}
              </p>
              <h1 className="font-cinzel text-3xl md:text-4xl tracking-wider text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-outfit text-2xl text-gold font-medium mb-8">
                {product.price}
              </p>
              <p className="font-outfit text-muted-foreground font-medium leading-relaxed mb-10">
                {product.description}
              </p>

              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto font-cinzel text-sm tracking-[0.2em] uppercase text-background bg-gold hover:bg-gold-light transition-colors px-10 py-4"
              >
                Agregar al Carrito
              </button>

              <p className="font-outfit text-xs text-muted-foreground/70 mt-4">
                Tienda próximamente disponible
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
