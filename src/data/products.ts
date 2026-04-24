import alaAzul from "@/assets/products/ala-azul.webp";
import alaVerde from "@/assets/products/ala-verde.webp";
import alaBlanco from "@/assets/products/ala-blanco.webp";
import alaAmarillo from "@/assets/products/ala-amarillo.webp";
import alaNaranja from "@/assets/products/ala-naranja.webp";
import alaRosa from "@/assets/products/ala-rosa.webp";
import alaMorado from "@/assets/products/ala-morado.webp";

export type Intention = "paz" | "claridad" | "proteccion" | "abundancia";

export interface Product {
  name: string;
  slug: string;
  price: string;
  intention: Intention;
  description: string;
  image: string;
}

export const intentions: { value: Intention; label: string }[] = [
  { value: "paz", label: "Paz" },
  { value: "claridad", label: "Claridad" },
  { value: "proteccion", label: "Protección" },
  { value: "abundancia", label: "Abundancia" },
];

export const products: Product[] = [
  {
    name: "Dije Piedra Azul",
    slug: "dije-piedra-azul",
    price: "$45.00",
    intention: "proteccion",
    description:
      "Representa al Divino Arcángel Miguel, conocido como el Príncipe de las Milicias Celestiales. \u201C¿Quién como Dios?\u201D es su nombre, un grito de guerra y lealtad. Es el gran defensor contra las asechanzas y tentaciones del mal, brindando protección y guía en todo momento.",
    image: alaAzul,
  },
  {
    name: "Dije Piedra Verde",
    slug: "dije-piedra-verde",
    price: "$45.00",
    intention: "proteccion",
    description:
      "Representa al Divino Arcángel Rafael, \u201CMedicina de Dios\u201D. Su nombre refleja su misión de sanar tanto males físicos como espirituales. Es protector de los caminos y carreteras, guía de los viajeros, y resguarda hospitales, enfermos, médicos, enfermeras y animales.",
    image: alaVerde,
  },
  {
    name: "Dije Piedra Blanca",
    slug: "dije-piedra-blanca",
    price: "$45.00",
    intention: "paz",
    description:
      "Representa al Divino Arcángel Gabriel, fortaleza de Dios y mensajero divino. Protege a los niños, a las mujeres embarazadas, así como a escuelas, maestros, pediatras y guarderías. También nos trae mensajes y noticias que favorecen nuestra vida.",
    image: alaBlanco,
  },
  {
    name: "Dije Piedra Amarilla",
    slug: "dije-piedra-amarilla",
    price: "$45.00",
    intention: "claridad",
    description:
      "Representa al Divino Arcángel Jofiel, \u201CBelleza de Dios\u201D. Arcángel de la iluminación, otorga conocimiento, sabiduría e inteligencia divina. Es protector de estudiantes, maestros y centros educativos, y nos ayuda a superar pruebas tanto físicas como espirituales.",
    image: alaAmarillo,
  },
  {
    name: "Dije Piedra Naranja",
    slug: "dije-piedra-naranja",
    price: "$45.00",
    intention: "abundancia",
    description:
      "Representa al Divino Arcángel Uriel, \u201CFuego de Dios\u201D y \u201CLuz de Dios\u201D. Protector de la Madre Tierra, nos resguarda de catástrofes naturales. También nos ayuda a atraer estabilidad material, como un hogar, trabajo y prosperidad, favoreciendo el reconocimiento de nuestros esfuerzos y la superación de crisis económicas.",
    image: alaNaranja,
  },
  {
    name: "Dije Piedra Rosa",
    slug: "dije-piedra-rosa",
    price: "$45.00",
    intention: "paz",
    description:
      "Representa al Divino Arcángel Chamuel, \u201CEl que ve a Dios\u201D. Arcángel del amor, protector de los matrimonios y las relaciones. Nos ayuda a encontrar el amor verdadero y a mantener la armonía, la lealtad y el orden, incluso en asuntos legales y documentos importantes como contratos y acuerdos.",
    image: alaRosa,
  },
  {
    name: "Dije Piedra Morado",
    slug: "dije-piedra-morado",
    price: "$45.00",
    intention: "paz",
    description:
      "Representa al Divino Arcángel Zadquiel, \u201CJusticia de Dios\u201D. Arcángel de la transmutación y el perdón. Brinda paz a la mente, el corazón y las emociones, liberándonos de cargas físicas, mentales y espirituales. Nos guía hacia la comprensión de la verdad y transforma lo negativo en positivo.",
    image: alaMorado,
  },
];
