import starsBg from "@/assets/stars-bg.webp";

const posts = [
  {
    category: "Ángeles",
    title: "Cómo reconocer las señales de tus ángeles guardianes",
    date: "12 Abr 2026",
  },
  {
    category: "Meditación",
    title: "Una meditación de 7 minutos para conectar con la luz",
    date: "5 Abr 2026",
  },
  {
    category: "Numerología",
    title: "El significado de los números repetidos: 111, 222, 333",
    date: "28 Mar 2026",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ Susurros & Reflexiones</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Lecturas para tu camino
          </h2>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card-elevated overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${starsBg})` }}
              />
              <div className="p-6">
                <p className="eyebrow mb-3">{p.category}</p>
                <h3 className="font-display text-2xl text-secondary leading-snug mb-4 group-hover:text-gold-dark transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">{p.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
