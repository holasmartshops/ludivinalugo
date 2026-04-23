export type NeedSlug =
  | "proteccion"
  | "salud"
  | "viajes"
  | "familia"
  | "estudios"
  | "trabajo"
  | "amor"
  | "tramites"
  | "paz";

export interface Need {
  slug: NeedSlug;
  label: string;
  emoji: string;
  productSlugs: string[];
}

export const needs: Need[] = [
  { slug: "proteccion", label: "Protección y defensa espiritual", emoji: "🛡️", productSlugs: ["dije-piedra-azul"] },
  { slug: "salud", label: "Salud, sanación y enfermedades", emoji: "💚", productSlugs: ["dije-piedra-verde"] },
  { slug: "viajes", label: "Viajes, caminos y animales", emoji: "🧭", productSlugs: ["dije-piedra-verde"] },
  { slug: "familia", label: "Hijos, embarazo y familia", emoji: "👶", productSlugs: ["dije-piedra-blanca"] },
  { slug: "estudios", label: "Estudios, sabiduría y conocimiento", emoji: "📚", productSlugs: ["dije-piedra-amarilla", "dije-piedra-blanca"] },
  { slug: "trabajo", label: "Trabajo, dinero y prosperidad", emoji: "💰", productSlugs: ["dije-piedra-naranja"] },
  { slug: "amor", label: "Amor, pareja y matrimonio", emoji: "🌹", productSlugs: ["dije-piedra-rosa"] },
  { slug: "tramites", label: "Trámites, contratos y documentos", emoji: "📜", productSlugs: ["dije-piedra-rosa"] },
  { slug: "paz", label: "Paz mental, perdón y liberación", emoji: "🕊️", productSlugs: ["dije-piedra-morado"] },
];

export const archangelByProductSlug: Record<string, string> = {
  "dije-piedra-azul": "Arcángel Miguel",
  "dije-piedra-verde": "Arcángel Rafael",
  "dije-piedra-blanca": "Arcángel Gabriel",
  "dije-piedra-amarilla": "Arcángel Jofiel",
  "dije-piedra-naranja": "Arcángel Uriel",
  "dije-piedra-rosa": "Arcángel Chamuel",
  "dije-piedra-morado": "Arcángel Zadquiel",
};
