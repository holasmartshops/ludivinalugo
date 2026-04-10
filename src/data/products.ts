export type Intention = "paz" | "claridad" | "proteccion" | "abundancia";

export interface Product {
  name: string;
  slug: string;
  price: string;
  intention: Intention;
  description: string;
}

export const intentions: { value: Intention; label: string }[] = [
  { value: "paz", label: "Paz" },
  { value: "claridad", label: "Claridad" },
  { value: "proteccion", label: "Protección" },
  { value: "abundancia", label: "Abundancia" },
];

export const products: Product[] = [
  {
    name: "Ala de Ángel",
    slug: "ala-de-angel",
    price: "$45.00",
    intention: "paz",
    description:
      "Amuleto tallado a mano que canaliza la serenidad angelical. Diseñado para traer calma interior y conexión espiritual profunda a quien lo lleva.",
  },
  {
    name: "Escudo Celestial",
    slug: "escudo-celestial",
    price: "$52.00",
    intention: "proteccion",
    description:
      "Un escudo energético forjado con intención divina. Protege contra energías negativas y fortalece el aura de su portador.",
  },
  {
    name: "Estrella Divina",
    slug: "estrella-divina",
    price: "$38.00",
    intention: "claridad",
    description:
      "Inspirada en la luz de las estrellas, este amuleto ilumina el camino y aporta claridad mental en momentos de incertidumbre.",
  },
  {
    name: "Llave del Arcángel",
    slug: "llave-del-arcangel",
    price: "$60.00",
    intention: "abundancia",
    description:
      "La llave sagrada que abre las puertas de la prosperidad y las bendiciones. Energizada con la frecuencia de la abundancia divina.",
  },
  {
    name: "Cruz Angelical",
    slug: "cruz-angelical",
    price: "$42.00",
    intention: "proteccion",
    description:
      "Símbolo ancestral de fe y protección celestial. Cada cruz está bendecida para ser un faro de luz en la oscuridad.",
  },
  {
    name: "Pluma Sagrada",
    slug: "pluma-sagrada",
    price: "$35.00",
    intention: "paz",
    description:
      "Delicada como una pluma de ángel, este amuleto susurra paz al alma. Ideal para meditación y conexión con los reinos superiores.",
  },
  {
    name: "Ojo Protector",
    slug: "ojo-protector",
    price: "$48.00",
    intention: "claridad",
    description:
      "El ojo que todo lo ve, diseñado para otorgar visión espiritual y protección contra el mal de ojo. Un guardián silencioso.",
  },
];
