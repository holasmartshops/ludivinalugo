import starsBg from "@/assets/hero-bg-mobile.png";
import angelFrame from "@/assets/angel-frame.png";
import iconClaridad from "@/assets/for-whom/claridad.png";
import iconProteccion from "@/assets/for-whom/proteccion.png";
import iconAngeles from "@/assets/for-whom/angeles.png";
import iconTransicion from "@/assets/for-whom/transicion.png";
import iconAbundancia from "@/assets/for-whom/abundancia.png";

const items = [
  { image: iconClaridad, text: "Sientes que necesitas claridad en tu camino" },
  { image: iconProteccion, text: "Buscas protección y paz interior" },
  { image: iconTransicion, text: "Quieres conectar con tus ángeles guardianes" },
  { image: iconAngeles, text: "Atraviesas un momento de transición o duelo" },
  { image: iconAbundancia, text: "Deseas atraer abundancia con propósito divino" },
];

const ForWhomSection = () => {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${starsBg})` }}
      />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-[2] container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-cinzel font-semibold text-xs tracking-[0.3em] uppercase text-gold mb-4">¿Es para ti?</p>
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-wider text-foreground mb-4">
            Esto es para ti si…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map(({ image, text }, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={text}
                className={`relative aspect-[4/1.4] ${
                  isLast ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto sm:w-full" : ""
                }`}
              >
                <img
                  src={angelFrame}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
                />
                <div className="relative z-10 flex items-center justify-start gap-3 md:gap-5 h-full pl-14 pr-6 py-4 md:pl-20 md:pr-10 md:py-6 text-left">
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="shrink-0 w-11 h-11 md:w-16 md:h-16 object-contain"
                  />
                  <p className="font-cinzel font-medium text-foreground tracking-wide leading-snug md:leading-relaxed text-xs md:text-lg">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
