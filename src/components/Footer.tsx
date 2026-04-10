import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="#inicio" className="font-cinzelDecorative text-gold text-lg tracking-widest">
              Ludivina Lugo
            </a>
            <p className="font-outfit text-cream/50 mt-4 leading-relaxed">
              Angelóloga y guía espiritual. Conectando almas con la luz divina.
            </p>
            <Sparkles className="w-4 h-4 text-gold/30 mt-4" />
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {["Lectura de Ángeles", "Guías Espirituales", "Amuletos Sagrados"].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="font-outfit text-cream/50 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Aviso de Privacidad", "Términos y Condiciones", "Política de Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-outfit text-cream/50 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Newsletter
            </h4>
            <p className="font-outfit text-cream/50 mb-3">
              Recibe mensajes angelicales semanales.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-dark-card text-cream placeholder:text-cream/30 px-3 py-2 text-sm font-outfit focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-dark px-4 py-2 font-cinzel text-xs tracking-wider transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <p className="font-outfit text-xs text-cream/30">
            © {new Date().getFullYear()} Ludivina Lugo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
