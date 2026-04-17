const stats = [
  { number: "15+", label: "Años guiando almas" },
  { number: "2,500+", label: "Personas ayudadas" },
  { number: "500+", label: "Testimonios de luz" },
];

const WhatLudivinaDoes = () => {
  return (
    <section className="bg-dark py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-cinzel font-semibold text-xs tracking-[0.3em] uppercase text-gold mb-4">
            ¿Qué hace Ludivina?
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-cream mb-6 gold-glow">
            Canal entre el cielo y tu alma
          </h2>
          <p className="font-outfit text-lg text-cream/70 leading-relaxed font-light tracking-wide">
            Como angeóloga, Ludivina interpreta los mensajes que tus ángeles guardianes tienen para ti, guía almas en
            momentos de transición y energiza amuletos sagrados con intenciones específicas de protección, abundancia y
            paz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-cinzel text-4xl md:text-5xl text-gold tracking-wider mb-2 gold-glow">{stat.number}</p>
              <p className="font-cinzel font-semibold text-xs tracking-[0.2em] uppercase text-cream/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatLudivinaDoes;
