const stats = [
  { number: "10+", label: "Años de Experiencia" },
  { number: "2,500+", label: "Personas Guiadas" },
  { number: "500+", label: "Reseñas 5 Estrellas" },
];

const StatsBar = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-cinzel text-4xl md:text-5xl text-gold tracking-wider mb-2">
                {stat.number}
              </p>
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
