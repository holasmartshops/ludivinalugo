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
    <section className="relative bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">✦ ¿Es para ti?</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary mb-4">
            Esto es para ti si…
          </h2>
          <hr className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {items.map(({ image, text }) => (
            <div
              key={text}
              className="group relative bg-card rounded-2xl border border-gold/30 shadow-[var(--shadow-elevated)] p-5 md:p-7 flex items-center gap-4 md:gap-6 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_4px_24px_hsl(295_35%_22%/0.12)]"
            >
              <span
                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-gold/70"
                aria-hidden="true"
              />
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <p className="font-body font-medium text-secondary leading-snug text-[17px] md:text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
