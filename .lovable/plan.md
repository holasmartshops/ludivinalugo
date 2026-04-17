

## Plan: Hero móvil estilo "poster" con textos sobre el logo y CTAs al fondo

La referencia muestra los textos (eyebrow, "Ludivina Lugo", subtítulo) como un bloque tipográfico **muy compacto y superpuesto sobre la zona del logo/foto**, sin respetar márgenes — funcionan como una composición tipo poster. Además, los botones CTA deben caer al **fondo de la pantalla** (no flotar a media altura), aprovechando que es la parte superior de la página.

### Cambios en `src/components/HeroSection.tsx` (solo rama móvil `<lg`)

Reestructurar el contenido móvil sin tocar la rama desktop (`lg:`).

**Estructura móvil propuesta:**

1. **Sección hero** pasa a `flex flex-col` con `min-h-screen`. La columna derecha móvil deja de estar `self-center`; en su lugar se distribuye en 3 zonas:
   - **Top (foto + textos sobrepuestos)** — crece (`flex-1`)
   - **Botones** — anclados abajo con `mt-auto` + `pb-8` (respetando safe area)

2. **Foto + textos como capas superpuestas** (móvil):
   - Wrapper `relative` que contiene:
     - La `<img>` de Ludivina con el `maskImage` actual (fade a transparente en la parte inferior).
     - Un `<div absolute inset-0 flex flex-col justify-center>` con los 3 textos (eyebrow, logo, subtítulo) **encima** de la foto, todos pegados entre sí (`mb-1` o `mb-2` máximo).
   - Esto reproduce el efecto de la referencia: el nombre "Ludivina Lugo" cae **sobre** la imagen.

3. **Párrafo descriptivo "Descubre los mensajes…"** queda debajo de la foto, con margen reducido.

4. **Botones CTA**:
   - En móvil: `mt-auto pb-8` para empujarlos al pie de la pantalla.
   - En desktop: mantener comportamiento actual (justo después del párrafo).

**Desktop intacto:** la columna izquierda con la foto y la columna derecha con textos siguen igual. Los nuevos textos sobrepuestos solo viven dentro del bloque `lg:hidden`.

### Ajustes de tamaño/tipografía móvil
- Eyebrow móvil: mantener `text-sm`, sombras suaves (`drop-shadow`) para legibilidad sobre la foto.
- Logo móvil: reducir `max-w` para que entre bien sobre la imagen (~`max-w-xs`).
- Subtítulo móvil: igual con `drop-shadow`.

### Archivo a modificar
- `src/components/HeroSection.tsx` (único)

### Lo que NO cambia
- Rama desktop (`lg:` y mayores), fondos, video, paleta, copys, otros componentes.

