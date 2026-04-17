
## Plan: Crema casi blanco como base global, lavanda solo en botones/cards específicos

Actualmente varios bloques grandes (`StatsBar`, `WhatLudivinaDoes`, `Footer`) usan `bg-dark`, que se está renderizando como crema (porque `--dark` quedó en crema en el cambio anterior). El resultado es plano. Hay que **restaurar `--dark` a lavanda profundo** pero **dejar de aplicarlo como fondo de secciones grandes**, y usarlo solo donde aporte: botones secundarios y cards puntuales.

### 1. `src/index.css` — restaurar lavanda profundo en tokens "dark"

- `--dark: 270 30% 22%` (lavanda profundo, ≈ #2E2340)
- `--dark-card: 270 28% 28%`
- `--dark-border: 270 25% 38%`
- `--cream: 40 40% 98%` (volver a crema, para texto sobre lavanda)
- `--cream-dark: 40 25% 82%`
- `--background`, `--card`, `--secondary` se mantienen como están (crema casi blanco / lavanda).

### 2. Quitar `bg-dark` de secciones grandes → usar `bg-background`

Reemplazar fondo + adaptar colores de texto de crema a tokens oscuros:

- **`src/components/StatsBar.tsx`**: `bg-dark` → `bg-background`; `text-cream/60` → `text-muted-foreground`. Números siguen en `text-gold`.
- **`src/components/WhatLudivinaDoes.tsx`**: `bg-dark` → `bg-background`; `text-cream` → `text-foreground`; `text-cream/70` y `text-cream/60` → `text-muted-foreground`.
- **`src/components/Footer.tsx`**: `bg-dark` → `bg-secondary` (lavanda profundo como acento de cierre, ~5–10% del sitio). Textos `text-cream/50` → `text-secondary-foreground/70`. Esto deja **un único bloque lavanda** en todo el sitio (el footer), que funciona como anclaje visual.

### 3. Separadores sutiles entre secciones crema

Para que las secciones consecutivas con `bg-background` no se vean como un muro plano, añadir `border-t border-border` al inicio de `StatsBar` y `WhatLudivinaDoes`.

### 4. Botones y cards puntuales en lavanda (uso del 10–15% restante)

Mantener disponibles para uso puntual sin cambios de tokens:
- `bg-secondary text-secondary-foreground` → botones secundarios destacados.
- `bg-dark text-cream` → cards puntuales con alto contraste (ej. CTA de servicio destacado).

No se aplica masivamente en este paso — solo se documenta para uso futuro. Si quieres que ya lo aplique a algún CTA específico (ej. botón "Reserva tu lectura" en Hero o card destacada en Servicios), indícame cuál.

### Resultado 60/30/10

- **~85% crema casi blanco**: Hero, ForWhom, Services, About, Carousel, StatsBar, WhatLudivinaDoes, navbar.
- **~10% lavanda profundo**: Footer + futuros botones/cards puntuales.
- **~5% dorado**: títulos, iconos, acentos (sin cambios).

### Archivos a modificar
- `src/index.css`
- `src/components/StatsBar.tsx`
- `src/components/WhatLudivinaDoes.tsx`
- `src/components/Footer.tsx`
