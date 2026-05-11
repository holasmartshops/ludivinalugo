import { Feather, HandHeart, Sun } from "lucide-react";
import ludivinaAbout from "@/assets/ludivina-about-prayer.webp";

const pillars = [
  { icon: Feather, label: "Devoción" },
  { icon: HandHeart, label: "Servicio" },
  { icon: Sun, label: "Luz" },
];

const Pillars = () => (
  <div className="grid grid-cols-3 gap-4 max-w-md mb-10">
    {pillars.map(({ icon: Icon, label }) => (
      <div key={label} className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/5 flex items-center justify-center border border-gold/40">
          <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
        </div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          {label}
        </p>
      </div>
    ))}
  </div>
);

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative bg-background py-24">
      <hr className="gold-divider max-w-6xl mx-auto mb-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Title — mobile first, desktop right col */}
          <div className="order-1 lg:order-2 lg:col-start-2">
            <p className="eyebrow mb-4">✦ Conoce a Ludivina</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight">
              Un canal entre el cielo y tu alma
            </h2>
          </div>

          {/* Image — mobile second, desktop left col */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 lg:col-start-1 lg:row-start-1 lg:row-span-4">
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-[40rem]">
              <img
                src={ludivinaAbout}
                alt="Ludivina Lugo — Guía Espiritual Angelical"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain mask-fade-bottom"
              />
            </div>
          </div>

          {/* Mobile-only bio text */}
          <div className="order-3 lg:hidden space-y-5 font-body text-muted-foreground text-lg leading-relaxed">
            <p>
              Ludivina Lugo es una angelóloga y consejera espiritual con formación en Trabajo Social, Maestría en Investigación Social y profundos conocimientos en astrología, angelología y prácticas ancestrales mayas.
            </p>
            <p>
              Su misión es acompañar a las personas en su transformación personal a través del conocimiento angelical, convencida de que los ángeles son seres de luz que guían y protegen nuestro camino. Mediante consultas, conferencias y talleres —con alcance nacional e internacional— miles de personas han encontrado en ella las herramientas para sanar, elevar su energía y vivir en plenitud, abundancia y equilibrio.
            </p>
          </div>

          {/* Desktop-only bio text */}
          <div className="hidden lg:block lg:order-2 lg:col-start-2 space-y-5 font-body text-muted-foreground text-lg leading-relaxed">
            <p>
              Ludivina Lugo es una reconocida angelóloga y consejera espiritual con formación universitaria en Trabajo Social y Maestría en Investigación Social, complementada con profundos conocimientos en astrología, astrología médica, manejo de la energía, esoterismo, angelología y prácticas ancestrales de la cultura maya.
            </p>
            <p>
              A lo largo de su trayectoria se ha consolidado como guía espiritual dedicada a acompañar a las personas en su transformación personal, ayudándoles a descubrir su poder interior, fortalecer su autoestima y reconectar con su esencia divina. Su presencia en medios de comunicación —radio, televisión y plataformas digitales— le ha dado alcance nacional e internacional difundiendo mensajes de bienestar emocional, energético y espiritual.
            </p>
            <p>
              El pilar central de su misión es el conocimiento angelical: para Ludivina, los ángeles son seres de luz que nos guían, protegen y acompañan en cada paso del camino. A través de consultas privadas, conferencias y talleres, miles de personas han encontrado en ella orientación y herramientas concretas para sanar, elevar su energía y vivir en plenitud. Su propósito es claro: ayudar a cada ser humano a conectarse con la energía divina y convertirse en un canal de luz, abundancia y equilibrio.
            </p>
          </div>

          {/* Pillars — always visible */}
          <div className="order-4 lg:order-2 lg:col-start-2 mt-2 lg:mt-0">
            <Pillars />
          </div>

          {/* CTA — always visible */}
          <div className="order-5 lg:order-2 lg:col-start-2">
            <a href="#contacto" className="btn-ghost">Conoce mi historia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
