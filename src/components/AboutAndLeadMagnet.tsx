import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

const AboutAndLeadMagnet = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section id="sobre-mi" className="bg-dark-card py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* About Column */}
          <div>
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Mi Historia
            </p>
            <h2 className="font-cinzel text-3xl tracking-wider text-cream mb-8 gold-glow">
              Sobre Mí
            </h2>

            <div className="w-full h-64 bg-dark mb-8 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-6 h-6 text-gold/40 mx-auto mb-2" />
                <p className="font-cinzel text-xs tracking-widest text-cream/40 uppercase">Foto</p>
              </div>
            </div>

            <p className="font-cormorant text-lg text-cream/70 leading-relaxed mb-4">
              Desde joven descubrí mi conexión con el mundo angelical. Los ángeles me eligieron como
              canal para transmitir sus mensajes de amor, protección y guía a quienes más lo necesitan.
            </p>
            <p className="font-cormorant text-lg text-cream/70 leading-relaxed">
              Cada lectura, cada amuleto, cada sesión es un acto de devoción y servicio divino.
              Mi misión es ayudarte a descubrir la luz que ya vive dentro de ti.
            </p>
          </div>

          {/* Lead Magnet Column */}
          <div className="lg:mt-16">
            <div className="bg-dark p-8 md:p-10">
              <div className="text-center mb-8">
                <Sparkles className="w-6 h-6 text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-xl tracking-wider text-gold mb-3">
                  Mensaje Angelical Semanal
                </h3>
                <p className="font-cormorant text-cream/60">
                  Recibe cada semana un mensaje de tus ángeles directamente en tu correo. Totalmente gratis.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="contacto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full bg-dark-card text-cream placeholder:text-cream/30 px-4 py-3 font-cormorant text-base focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-cinzel text-xs tracking-[0.2em] uppercase py-3 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Recibir Mensajes
                </button>
              </form>

              <p className="text-center mt-4 font-cormorant text-xs text-cream/30">
                Sin spam. Solo luz y guía angelical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndLeadMagnet;
