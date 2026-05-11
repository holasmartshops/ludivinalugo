import { Feather, HandHeart, Sun } from "lucide-react";
import ludivinaAbout from "@/assets/ludivina-about-prayer.webp";

const pillars = [
  { icon: Feather, label: "Devoción" },
  { icon: HandHeart, label: "Servicio" },
  { icon: Sun, label: "Luz" },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative bg-background py-24">
      <hr className="gold-divider max-w-6xl mx-auto mb-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-64 sm:w-80 lg:w-[28rem]">
              <img
                src={ludivinaAbout}
                alt="Ludivina Lugo — Guía Espiritual Angelical"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain mask-fade-bottom"
              />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">✦ Conoce a Ludivina</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight mb-8">
              Un canal entre el cielo y tu alma
            </h2>

            <div className="space-y-5 font-body text-muted-foreground text-lg leading-relaxed mb-10">
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

            <a href="#contacto" className="btn-ghost">Conoce mi historia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
