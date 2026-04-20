import { useState } from "react";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("¡Bienvenida a la luz angelical!");
    setEmail("");
  };

  return (
    <footer id="contacto" className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#inicio" className="font-display text-3xl text-gold tracking-wide">
              Ludivina Lugo
            </a>
            <p className="font-body text-secondary-foreground/70 mt-4 leading-relaxed text-sm">
              Angelóloga y guía espiritual. Conectando almas con la luz divina.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube, Music2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="text-secondary-foreground/70 hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {["Lectura de Ángeles", "Guías Espirituales", "Amuletos Sagrados"].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="font-body text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Aviso de Privacidad", "Términos y Condiciones", "Política de Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Newsletter
            </h4>
            <p className="font-body text-sm text-secondary-foreground/70 mb-4">
              Mensajes angelicales en tu correo.
            </p>
            <form onSubmit={subscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="rounded-full px-4 py-2.5 bg-white/10 border border-white/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-gold text-secondary px-4 py-2.5 font-body font-medium text-sm hover:bg-gold-light transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 border-0 h-px bg-gold/30" />
        <div className="mt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Ludivina Lugo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
