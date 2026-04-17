

## Plan: Reestructurar landing page con nuevo mapa de sitio

Reorganizar el flujo de la home para priorizar el storytelling de Ludivina como angeóloga, manteniendo el estilo visual actual (paleta dorado/crema/oscuro, tipografía Cinzel + Outfit, fondos con estrellas y video).

### Nueva estructura de `src/pages/Index.tsx`

```
1. Header (existente)
2. HeroSection (existente, ajuste de copy)
3. WhatLudivinaDoes  ← NUEVO (reemplaza StatsBar suelto)
4. ForWhomSection    ← NUEVO
5. ServicesSection (existente) + ProductCarousel (existente, agrupados como "Servicios y Productos")
6. AboutSection (existente, ampliado a "Biografía")
7. Footer (existente)
```

### Cambios por sección

**1. HeroSection** (`src/components/HeroSection.tsx`) — ajuste menor
- Cambiar leyenda a algo más directo: "Guía espiritual angelical · Te acompaño en tu camino".
- Mantener layout de 2 columnas, video, logo, CTAs.

**2. WhatLudivinaDoes** ← NUEVO (`src/components/WhatLudivinaDoes.tsx`)
- Sección con fondo `bg-dark` y acentos dorados.
- Eyebrow: "¿Qué hace Ludivina?"
- Título: "Canal entre el cielo y tu alma"
- Párrafo corto explicando su rol como angeóloga (interpretar mensajes de ángeles, guiar almas, energizar amuletos).
- Stats integrados (absorbe el StatsBar actual): "15+ Años guiando almas", "2,500+ Personas ayudadas", "500+ Testimonios de luz".
- Resultado: elimina el `StatsBar` separado y le da contexto narrativo.

**3. ForWhomSection** ← NUEVO (`src/components/ForWhomSection.tsx`)
- Fondo con `starsBg` (reutilizar asset existente) y fades top/bottom hacia `dark`.
- Eyebrow: "¿Es para ti?"
- Título: "Esto es para ti si…"
- Lista de 4–5 ítems con icono (lucide: `Sparkles`, `Heart`, `Compass`, `Shield`, `Sun`):
  - "Sientes que necesitas claridad en tu camino"
  - "Buscas protección y paz interior"
  - "Quieres conectar con tus ángeles guardianes"
  - "Atraviesas un momento de transición o duelo"
  - "Deseas atraer abundancia con propósito divino"
- Cada ítem como card sutil (`bg-dark-card/50`, borde dorado tenue).

**4. Servicios y Productos** — agrupar visualmente
- Añadir un encabezado de sección compartido encima de `ServicesSection` ("Servicios y Productos · Lo que Ludivina ofrece para ti") — pequeño ajuste textual dentro de `ServicesSection.tsx`.
- Mantener `ProductCarousel` justo después como ya está.
- Sin cambios estructurales mayores.

**5. AboutSection → Biografía** (`src/components/AboutSection.tsx`)
- Cambiar `id` a `sobre-mi` (ya está) y eyebrow "Biografía".
- Ampliar el contenido textual a 3 párrafos placeholder:
  - Origen / llamado angelical (placeholder creativo).
  - Trayectoria / formación / experiencia (placeholder).
  - Misión actual y filosofía.
- Añadir un bloque con 3 "pilares" debajo (ej: Devoción · Servicio · Luz) en formato pequeño con iconos.
- Mantener silueta con máscara de fade existente.

### Cambios en `src/pages/Index.tsx`

```tsx
<Header />
<HeroSection />
<WhatLudivinaDoes />     // incluye stats
<ForWhomSection />
<ServicesSection />
<ProductCarousel />
<AboutSection />
<Footer />
```

- Eliminar import y uso de `StatsBar` y `ShopIntentions` de la home (ShopIntentions sigue existiendo para `/tienda` si aplica; solo se quita de Index).

### Estilo visual — consistencia
- Reutilizar tokens: `text-gold`, `text-cream`, `bg-dark`, `bg-dark-card`, `font-cinzel`, `font-outfit`, `gold-glow`.
- Eyebrows siempre `font-cinzel text-xs tracking-[0.3em] uppercase text-gold`.
- Títulos `font-cinzel text-3xl md:text-4xl tracking-wider text-cream gold-glow`.
- Alternar fondos: `dark` plano vs. `starsBg` con fades, para ritmo visual.

### Archivos a crear
- `src/components/WhatLudivinaDoes.tsx`
- `src/components/ForWhomSection.tsx`

### Archivos a modificar
- `src/pages/Index.tsx` (reordenar, quitar StatsBar y ShopIntentions)
- `src/components/HeroSection.tsx` (ajuste de copy del eyebrow/subtítulo)
- `src/components/ServicesSection.tsx` (eyebrow y título para enmarcar "Servicios y Productos")
- `src/components/AboutSection.tsx` (ampliar bio + pilares)

### Notas
- `StatsBar.tsx` y `ShopIntentions.tsx` no se borran (siguen disponibles), solo se desconectan de la home.
- Todo el copy nuevo es placeholder creativo angelical, listo para reemplazar cuando llegue la bio real.

