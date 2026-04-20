import { useState } from "react";
import { toast } from "sonner";
import ludivinaCards from "@/assets/ludivina-cards.png";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("¡Listo! Pronto recibirás tu mensaje angelical.");
    setEmail("");
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto card-elevated p-8 md:p-14">
          <div>
            <p className="eyebrow mb-4">✦ Regalo gratuito</p>
            <h2 className="font-display text-4xl md:text-5xl text-secondary leading-tight mb-6">
              Recibe tu Mensaje Angelical Semanal
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Cada domingo, una guía angelical directa a tu correo: meditaciones, afirmaciones y mensajes canalizados
              para iluminar tu semana.
            </p>

            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="flex-1 rounded-full px-6 py-3.5 bg-muted/60 border border-border text-foreground font-body placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Recibir mensaje
              </button>
            </form>
            <p className="font-body text-xs text-muted-foreground mt-4">Sin spam. Cancela cuando quieras.</p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <img
                src={ludivinaCards}
                alt="Mensaje angelical"
                className="relative z-10 w-full h-full object-contain p-6 mask-fade-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
