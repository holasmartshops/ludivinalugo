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
  productSlug: string;
}

export const needs: Need[] = [
  { slug: "proteccion", label: "Protección y defensa espiritual", emoji: "🛡️", productSlug: "dije-piedra-azul" },
  { slug: "salud", label: "Salud, sanación y enfermedades", emoji: "💚", productSlug: "dije-piedra-verde" },
  { slug: "viajes", label: "Viajes, caminos y animales", emoji: "🧭", productSlug: "dije-piedra-verde" },
  { slug: "familia", label: "Hijos, embarazo y familia", emoji: "👶", productSlug: "dije-piedra-blanca" },
  { slug: "estudios", label: "Estudios, sabiduría y conocimiento", emoji: "📚", productSlug: "dije-piedra-amarilla" },
  { slug: "trabajo", label: "Trabajo, dinero y prosperidad", emoji: "💰", productSlug: "dije-piedra-naranja" },
  { slug: "amor", label: "Amor, pareja y matrimonio", emoji: "🌹", productSlug: "dije-piedra-rosa" },
  { slug: "tramites", label: "Trámites, contratos y documentos", emoji: "📜", productSlug: "dije-piedra-rosa" },
  { slug: "paz", label: "Paz mental, perdón y liberación", emoji: "🕊️", productSlug: "dije-piedra-morado" },
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
