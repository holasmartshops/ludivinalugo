const stats = [
  { number: "32+", label: "Años guiando almas" },
  { number: "350,000+", label: "Personas ayudadas" },
  { number: "4,000+", label: "Testimonios de luz" },
];

const StatsBar = () => {
  return (
    <section className="bg-background py-16 border-y border-gold/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl md:text-6xl text-gold mb-2">{stat.number}</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
