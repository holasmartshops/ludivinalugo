
## Plan: Reorganizar "Esto es para ti si…" como lista vertical + mejorar legibilidad mobile

### Problema
- **Mobile**: el texto en `font-display` (Cormorant serif) con peso medium se ve difícil de leer en tamaños pequeños — la serif decorativa pierde claridad bajo 18px.
- **Desktop**: el grid de 2 columnas obliga al ojo a saltar de izquierda a derecha, generando mucho movimiento visual lateral.

### Cambios en `src/components/ForWhomSection.tsx`

**1. Layout: de grid 2-col a lista vertical única**
- Reemplazar `grid sm:grid-cols-2 gap-6 max-w-5xl` por `flex flex-col gap-4 max-w-3xl mx-auto`.
- Eliminar la lógica `isLast` y `sm:col-span-2 sm:max-w-[calc(50%-0.75rem)]` (ya no hace falta — todos los items ocupan el mismo ancho).
- Resultado: 5 cards apilados verticalmente, lectura natural de arriba hacia abajo, sin saltos laterales.

**2. Tipografía: mejorar legibilidad en mobile**
- Cambiar el `<p>` de `font-display font-medium` (Cormorant serif) a `font-body` (Inter sans-serif) — más legible en mobile.
- Subir tamaño base mobile: de `text-base` a `text-[17px]` y desktop `md:text-lg`.
- Mantener `text-secondary` (plum) y `leading-snug` para densidad agradable.
- Peso: `font-medium` para mantener presencia sin ser pesado.

**3. Ajustes menores del card**
- Conservar el resto del estilo (bg blanco, borde dorado, barra dorada lateral, sombra, hover).
- Iconos PNG intactos: `w-12 h-12 md:w-14 md:h-14` (ligero ajuste para que el icono no domine sobre el texto en cards más anchos/horizontales).
- Padding sin cambios: `p-5 md:p-7`.

### Resultado esperado
- **Mobile**: texto en sans-serif claro y legible, cards anchos apilados verticalmente.
- **Desktop**: lista vertical centrada (max-w-3xl), lectura fluida de arriba hacia abajo sin movimiento lateral, manteniendo los iconos a la izquierda y el texto a la derecha en cada card.
- Coherencia visual con el resto del sitio (mismos colores, dorados, sombras).

### Archivos
- Modificar: `src/components/ForWhomSection.tsx`
