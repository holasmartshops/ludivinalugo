import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import ludivinaLogo from "@/assets/navbar-logo.webp";

const leftLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Tienda", href: "/tienda" },
];

const rightLinks = [
  { label: "Sobre Mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

const allLinks = [...leftLinks, ...rightLinks];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkClass =
    "font-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-transform duration-300 bg-background/95 backdrop-blur border-b border-gold/40"
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        {/* Desktop */}
        <div className="container mx-auto hidden md:grid grid-cols-3 items-center h-28 px-4 lg:px-8">
          <nav className="flex items-center justify-end gap-8 lg:gap-10">
            {leftLinks.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => handleNav(link.href)} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center">
            <Link to="/" onClick={() => handleNav("/")} className="flex items-center shrink-0">
              <img src={ludivinaLogo} alt="Ludivina Lugo" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="flex items-center justify-start gap-6 lg:gap-8">
            {rightLinks.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => handleNav(link.href)} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <span className="h-5 w-px bg-gold/40" aria-hidden="true" />
            <a
              href="/#servicios"
              className="btn-primary !py-2.5 !px-6 !text-xs !tracking-[0.15em] uppercase"
            >
              Reserva
            </a>
            <button
              aria-label="Carrito"
              className="relative text-foreground hover:text-gold transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-secondary text-[10px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="container mx-auto md:hidden flex items-center justify-between h-24 px-4">
          <Link to="/" onClick={() => handleNav("/")} className="flex items-center shrink-0">
            <img src={ludivinaLogo} alt="Ludivina Lugo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <button
              aria-label="Carrito"
              className="relative text-foreground hover:text-gold transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-secondary text-[10px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              aria-label="Menú"
              className="text-foreground hover:text-gold transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-background border-t border-gold/30 px-4 pb-6 pt-2">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNav(link.href)}
                className="block py-3 font-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a href="/#servicios" onClick={() => setMenuOpen(false)} className="btn-primary w-full mt-4">
              Reserva tu Lectura
            </a>
          </nav>
        )}
      </header>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};

export default Header;
