
## Plan: Grid 3x3 + tarjeta de resultado simplificada con múltiples amuletos

### Cambios en `src/data/needs.ts`
Cambiar `productSlug: string` por `productSlugs: string[]` para soportar necesidades con varios amuletos asociados. Por ahora todas las necesidades existentes mantienen 1 amuleto, pero la estructura ya soporta N (útil si en el futuro alguna necesidad mapea a varios dijes).

### Cambios en `src/components/NeedFinder.tsx`

**Layout de chips (necesidades):**
- Reemplazar `flex flex-wrap` por un grid fijo: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto`.
- En desktop (≥768px): exactamente 3 columnas × 3 filas.
- En tablet: 2 columnas. En mobile: 1 columna apilada.
- Chips mantienen estilo pill actual (border dorado, emoji + label).

**Panel de resultado (simplificado):**
- En lugar de mostrar 1 producto con descripción/precio/CTA grande, mostrar una **mini-galería** de los amuletos relacionados:
  - Si hay 1 amuleto → 1 tarjeta centrada.
  - Si hay 2+ amuletos → grid `sm:grid-cols-2` (preparado para futuro).
- Cada tarjeta de amuleto contiene **solo**:
  - Imagen del dije (cuadrada, `object-contain`, fondo `bg-card`, borde dorado sutil)
  - Nombre del dije debajo (font-display, text-secondary)
  - Arcángel relacionado (font-body italic, text-gold-dark)
- Toda la tarjeta es clickeable → enlaza a `/tienda/{slug}`.
- Se eliminan: precio, descripción, botón "Ver detalle" separado, encabezado "Amuleto para…".

### Resultado esperado
- 9 necesidades organizadas en grid 3×3 limpio en desktop.
- Al tocar una necesidad, aparece una tarjeta minimalista con imagen + nombre + arcángel.
- Estructura preparada para que una necesidad muestre múltiples dijes si se agregan en el futuro.

### Archivos
- Modificar: `src/data/needs.ts`, `src/components/NeedFinder.tsx`
