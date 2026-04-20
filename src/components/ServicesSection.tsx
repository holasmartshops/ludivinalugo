import { BookOpen, Users, Star } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Lecturas de Ángeles",
    description:
      "Conecta con tus ángeles guardianes y recibe mensajes semanales de luz, amor y guía divina para cada aspecto de tu vida.",
    cta: "Recibir mensajes",
  },
  {
    icon: Users,
    title: "Guías Espirituales",
    description:
      "Eventos donde te acompaño en tu despertar espiritual, conectando con la sabiduría angelical. Boletos en AREMA Ticket.",
    cta: "Comprar boletos",
  },
  {
    icon: Star,
    title: "Dijes Sagrados",
    description:
      "Amuletos energizados y bendecidos con intenciones específicas de protección, abundancia, paz y claridad.",
    cta: "Ver dijes",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-muted/40 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ Lo que ofrezco para ti</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Servicios y Lecturas
          </h2>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-elevated p-8 text-center flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/5 flex items-center justify-center border border-gold/40">
                <service.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-secondary mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              <a href="#contacto" className="btn-ghost mt-auto self-center">
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
