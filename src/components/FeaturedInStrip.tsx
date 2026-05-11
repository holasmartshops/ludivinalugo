import multimediosLogo from "@/assets/logos/multimedios.svg";
import milenioLogo from "@/assets/logos/milenio.png";
import multimediosM from "@/assets/logos/multimedios-m.png";
import canal6 from "@/assets/logos/canal6.png";

const outlets = [
  { name: "Multimedios", src: multimediosM },
  { name: "Milenio", src: milenioLogo },
  { name: "Canal 6", src: canal6 },
];

const FeaturedInStrip = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center eyebrow text-gold mb-6">Donde me han visto</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6">
          {outlets.map((o) => (
            <img
              key={o.name}
              src={o.src}
              alt={o.name}
              loading="lazy"
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInStrip;
