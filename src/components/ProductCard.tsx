import { Link } from "react-router-dom";
import type { Product } from "@/data/products";


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/tienda/${product.slug}`}
      className="group block text-center"
    >
      <div className="relative overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="eager"
          decoding="async"
          className="w-full aspect-[3/4] object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>
      <h3 className="font-cinzel text-sm tracking-wider text-gold mb-1">
        {product.name}
      </h3>
      <p className="font-outfit text-muted-foreground text-sm font-medium">
        {product.price}
      </p>
    </Link>
  );
};

export default ProductCard;
