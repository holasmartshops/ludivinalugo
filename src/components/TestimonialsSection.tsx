const testimonials = [
  {
    quote:
      "La lectura con Ludivina cambió mi vida. Recibí mensajes tan precisos que solo podían venir del cielo. Hoy camino con paz y claridad.",
    name: "María Fernanda",
    role: "Ciudad de México",
    initials: "MF",
  },
  {
    quote:
      "Su don es real. Me guió en un momento de mucha incertidumbre y sus palabras siguen acompañándome cada día.",
    name: "Sofía Ramírez",
    role: "Guadalajara",
    initials: "SR",
  },
  {
    quote:
      "Mi amuleto bendecido por Ludivina es mi refugio. Siento la energía de protección desde el primer día.",
    name: "Andrea López",
    role: "Monterrey",
    initials: "AL",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ Testimonios</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Almas que han recibido luz
          </h2>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card flex flex-col">
              <p className="font-display italic text-xl text-secondary leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-body font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
