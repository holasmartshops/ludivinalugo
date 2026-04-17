import { BookOpen, Users, Star } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Lecturas de Ángeles",
    description:
      "Conecta con tus ángeles guardianes y recibe mensajes semanales de luz, amor y guía divina para cada aspecto de tu vida.",
    cta: "​recibir mensajes",
  },
  {
    icon: Users,
    title: "Guías Espirituales",
    description:
      "Eventos donde te acompaño en tu despertar espiritual, conectando con la sabiduría angelical. Boletos en AREMA Ticket.",
    cta: "​Comprar boletos",
  },
  {
    icon: Star,
    title: "dijes Sagrados",
    description:
      "Amuletos energizados y bendecidos con intenciones específicas de protección, abundancia, paz y claridad.",
    cta: "Ver dijes",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background border-t border-border py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Lo que Ludivina ofrece para ti
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-foreground mb-4">
            Servicios y Productos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-md flex flex-col h-full"
            >
              <h3 className="font-cinzel text-lg tracking-wider text-gold mb-4">
                {service.title}
              </h3>
              <p className="font-outfit text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="mt-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-muted flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>

                <a
                  href="#contacto"
                  className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase text-foreground/80 border border-border rounded-full px-6 py-3 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
