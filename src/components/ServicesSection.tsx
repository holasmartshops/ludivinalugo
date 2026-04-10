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
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-4">
            Mis Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-dark-card p-8 text-center transition-all duration-300 hover:bg-dark-card/80"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-cinzel text-lg tracking-wider text-gold mb-4">
                {service.title}
              </h3>
              <p className="font-cormorant text-cream/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
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
