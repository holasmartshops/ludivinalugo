import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Tienda", href: "/tienda" },
  { label: "Sobre Mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();

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
      // If on another page, Link will navigate to / and the hash will scroll
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <nav className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNav(link.href)}
              className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-dark hover:text-gold transition-colors drop-shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-4 lg:right-8 flex items-center gap-4">
          <button aria-label="Carrito" className="text-gold-dark hover:text-gold transition-colors drop-shadow-sm">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            aria-label="Menú"
            className="md:hidden text-gold-dark"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-dark/90 backdrop-blur-sm px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNav(link.href)}
              className="block py-3 font-cinzel text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
