import { BookOpen, Users, Star } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Lectura de Ángeles",
    description:
      "Conecta con tus ángeles guardianes y recibe mensajes de luz, amor y guía divina para cada aspecto de tu vida.",
    cta: "Agendar Lectura",
  },
  {
    icon: Users,
    title: "Guías Espirituales",
    description:
      "Sesiones personalizadas donde te acompaño en tu despertar espiritual, conectando con la sabiduría angelical.",
    cta: "Saber Más",
  },
  {
    icon: Star,
    title: "Amuletos Sagrados",
    description:
      "Amuletos energizados y bendecidos con intenciones específicas de protección, abundancia, paz y claridad.",
    cta: "Ver Amuletos",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-dark py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Lo que ofrezco
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4 gold-glow">
            Mis Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-dark-card rounded-2xl p-8 text-center transition-all duration-300 hover:bg-dark-card/80"
            >
              <h3 className="font-cinzel text-lg tracking-wider text-gold mb-4 gold-glow">
                {service.title}
              </h3>
              <p className="font-inter text-cream/70 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-dark flex items-center justify-center">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              <a
                href="#contacto"
                className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase text-cream/80 border border-cream/20 rounded-full px-6 py-3 hover:border-gold hover:text-gold transition-all duration-300"
              >
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
