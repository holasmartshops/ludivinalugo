import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tienda", href: "#tienda" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-cinzel text-xs tracking-[0.25em] uppercase text-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart + Mobile Toggle (absolute right) */}
        <div className="absolute right-4 lg:right-8 flex items-center gap-4">
          <button aria-label="Carrito" className="text-gold hover:text-gold-light transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            aria-label="Menú"
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-cream/95 backdrop-blur-sm px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-cinzel text-xs tracking-[0.25em] uppercase text-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
