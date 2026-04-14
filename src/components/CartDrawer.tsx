import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import amuletoImg from "@/assets/amuleto-placeholder.png";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, cartCount, subtotal } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="bg-dark border-l border-dark-border p-0 flex flex-col w-[85vw] sm:max-w-sm"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-dark-border">
          <SheetTitle className="font-cinzel text-sm tracking-[0.25em] uppercase text-cream">
            Carrito {cartCount > 0 && `(${cartCount})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-6">
            <p className="font-outfit text-cream/40 text-sm text-center">
              Tu carrito está vacío
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.slug}
                  className="flex gap-4 border-b border-dark-border pb-4 last:border-0"
                >
                  <img
                    src={amuletoImg}
                    alt={product.name}
                    className="w-16 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cinzel text-xs tracking-wider text-cream truncate">
                      {product.name}
                    </h3>
                    <p className="font-outfit text-sm text-gold mt-1">
                      {product.price}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.slug, quantity - 1)}
                          className="text-cream/40 hover:text-gold transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-outfit text-sm text-cream w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.slug, quantity + 1)}
                          className="text-cream/40 hover:text-gold transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.slug)}
                        className="text-cream/30 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-dark-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-outfit text-sm text-cream/60">Subtotal</span>
                <span className="font-outfit text-lg text-gold">{subtotal}</span>
              </div>
              <button
                onClick={() => toast("Tienda próximamente disponible")}
                className="w-full font-cinzel text-xs tracking-[0.2em] uppercase bg-gold text-dark hover:bg-gold-light transition-colors py-3.5"
              >
                Proceder a la Compra
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
