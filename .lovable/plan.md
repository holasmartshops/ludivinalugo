

## Segunda Iteración — Header Transparente + Hero Estilo Referencia 2

### Cambios

**1. Header (`Header.tsx`)**
- Quitar fondo negro (`bg-dark/95`) y borde inferior — hacerlo **completamente transparente**
- Quitar el logo "Ludivina Lugo" del header (ya estará en el Hero como texto de fondo)
- Dejar solo los 5 enlaces de navegación (Inicio, Servicios, Tienda, Sobre Mí, Contacto) + carrito, flotando sobre el hero
- Navegación minimalista: texto cream/blanco sobre fondo transparente

**2. Hero Section (`HeroSection.tsx`)**
- Rediseño completo inspirado en Referencia 2:
  - **Fondo**: texto gigante "LUDIVINA LUGO" en Cinzel Decorative, muy grande, semi-transparente (opacity baja), centrado como fondo decorativo detrás de la foto
  - **Centro**: placeholder para foto PNG/SVG con transparencia de Ludivina (silueta recortada superpuesta sobre el texto de fondo)
  - **Debajo de la foto**: subtítulo y texto devocional + CTAs
  - Layout centrado (no dos columnas), la foto es el protagonista visual
- El fondo del hero sigue siendo crema/blanco claro, con el texto decorativo grande en tono dorado o gris muy sutil

### Archivos a modificar
- `src/components/Header.tsx` — transparente, sin logo, solo nav links
- `src/components/HeroSection.tsx` — layout centrado con texto gigante de fondo + foto PNG placeholder encima

### Resultado visual
```text
┌─────────────────────────────────────────────┐
│  Inicio  Servicios  Tienda  Sobre Mí  🛒   │  ← header transparente
│                                             │
│           L U D I V I N A                   │  ← texto gigante de fondo
│              L U G O                        │    (semi-transparente)
│         ┌──────────────┐                    │
│         │              │                    │
│         │  FOTO PNG    │                    │  ← foto recortada encima
│         │  (placeholder)│                   │
│         │              │                    │
│         └──────────────┘                    │
│     Guía Espiritual Angelical               │
│     Lectura · Amuletos · Guía               │
│     [ Descubre tus Mensajes ]               │
└─────────────────────────────────────────────┘
```

