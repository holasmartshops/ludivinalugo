import { Shield, HeartPulse, Compass, Baby, BookOpen, Coins, Flower2, ScrollText, Feather, type LucideIcon } from "lucide-react";

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
  shortLabel: string;
  icon: LucideIcon;
  productSlugs: string[];
}

export const needs: Need[] = [
  { slug: "proteccion", label: "Protección y defensa espiritual", shortLabel: "Protección", icon: Shield, productSlugs: ["dije-piedra-azul"] },
  { slug: "salud", label: "Salud, sanación y enfermedades", shortLabel: "Salud", icon: HeartPulse, productSlugs: ["dije-piedra-verde"] },
  { slug: "viajes", label: "Viajes, caminos y animales", shortLabel: "Viajes", icon: Compass, productSlugs: ["dije-piedra-verde"] },
  { slug: "familia", label: "Hijos, embarazo y familia", shortLabel: "Familia", icon: Baby, productSlugs: ["dije-piedra-blanca"] },
  { slug: "estudios", label: "Estudios, sabiduría y conocimiento", shortLabel: "Estudios", icon: BookOpen, productSlugs: ["dije-piedra-amarilla", "dije-piedra-blanca"] },
  { slug: "trabajo", label: "Trabajo, dinero y prosperidad", shortLabel: "Trabajo", icon: Coins, productSlugs: ["dije-piedra-naranja"] },
  { slug: "amor", label: "Amor, pareja y matrimonio", shortLabel: "Amor", icon: Flower2, productSlugs: ["dije-piedra-rosa"] },
  { slug: "tramites", label: "Trámites, contratos y documentos", shortLabel: "Trámites", icon: ScrollText, productSlugs: ["dije-piedra-rosa"] },
  { slug: "paz", label: "Paz mental, perdón y liberación", shortLabel: "Paz mental", icon: Feather, productSlugs: ["dije-piedra-morado", "dije-piedra-azul"] },
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
