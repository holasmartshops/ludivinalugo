
## Plan: Cards angelicales en "Esto es para ti"

**Asset:**
- Copiar `user-uploads://freepik_background_13601.png` a `src/assets/angel-frame.png`.

**Actualizar `src/components/ForWhomSection.tsx`:**

1. Importar `angelFrame from "@/assets/angel-frame.png"`.
2. Reemplazar cada card por un contenedor con el recuadro angelical como fondo (`<img>` posicionado absolute detrás, o `background-image`) y el contenido (icono + texto) superpuesto encima centrado.
3. Estructura por card:
   - `relative` wrapper con `aspect-ratio` apropiado al recuadro (≈ 4:1 horizontal).
   - `<img src={angelFrame}>` absolute, `inset-0 w-full h-full object-contain`, sin pointer events.
   - Contenido encima (`relative z-10`): icono dorado + texto centrado horizontal y verticalmente, con padding interior generoso (≈ `px-12 py-6`) para no salirse del marco decorado.
4. Cambiar la fuente del texto:
   - De `font-outfit text-cream/80` → `font-cinzel font-semibold text-dark` (sobre el recuadro claro el texto debe ser oscuro para legibilidad). Mantener `tracking-wide leading-relaxed`.
5. Quitar los estilos antiguos (`bg-dark-card/50 border border-gold/20 rounded-2xl backdrop-blur`) ya que el recuadro hace de fondo.
6. El icono se mantiene en `text-gold` pero sin la caja de fondo (irá flotando dentro del marco, a la izquierda del texto o arriba).

**Layout final por card:**
```text
┌─ angel-frame.png ─────────────┐
│   [icon]  Texto del item       │
└────────────────────────────────┘
```

Mantener el grid `sm:grid-cols-2 gap-5` y los 5 items.
