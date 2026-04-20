const outlets = ["Tv Azteca", "Milenio", "El Universal", "Imagen Radio", "Reforma", "TV Notas"];

const FeaturedInStrip = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center eyebrow text-gold mb-6">Como me han visto</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-4">
          {outlets.map((o) => (
            <span
              key={o}
              className="font-display italic text-xl md:text-2xl text-cream/80 tracking-wide"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInStrip;
