

## Plan: Mostrar imagen de Ludivina en hero móvil

Actualmente en mobile/tablet (`<lg`), la imagen de Ludivina está oculta (`hidden lg:flex`) y solo se ve el fondo + el bloque de texto. La referencia muestra que en móvil debe verse: eyebrow + logo + subtítulo + foto de Ludivina + (fundido) + descripción + botones.

### Cambios en `src/components/HeroSection.tsx`

Reestructurar el layout móvil para que sea un flujo vertical único, manteniendo el layout desktop de 2 columnas intacto.

**Nuevo orden en móvil (dentro del bloque derecho, ya centrado):**
1. Eyebrow "Guía Espiritual Angelical · Te acompaño en tu camino" (ya existe)
2. Logo Ludivina (ya existe)
3. Subtítulo "Lectura de Ángeles · Amuletos · Guía Espiritual" (ya existe)
4. **NUEVO:** Imagen de Ludivina (`ludivinaImg`) visible solo en móvil/tablet (`lg:hidden`), centrada, con un gradiente de fade en la parte inferior hacia el color de fondo para fundirse con el texto siguiente
5. Párrafo descriptivo (ya existe) — aparece "saliendo" del fade
6. Botones CTA (ya existen)

**Implementación del fade:**
- Wrapper con la imagen + un `div` absoluto encima con `bg-gradient-to-b from-transparent to-dark` (o `to-background` según se vea mejor con la nueva paleta lavanda) cubriendo el ~30-40% inferior de la foto.
- La columna izquierda actual (`hidden lg:flex` con `ludivinaImg`) se mantiene intacta para desktop.

**Ajustes menores:**
- En móvil, dar un poco menos de `pt-24` arriba si se siente apretado, y reducir margen entre subtítulo y la nueva foto para que respire como en la referencia.
- La imagen móvil ocupará ancho completo con `max-w-sm mx-auto` aprox., para que respete proporciones tipo retrato.

### Archivos a modificar
- `src/components/HeroSection.tsx` — único archivo.

### Lo que NO cambia
- Layout desktop (`lg:`) sigue siendo 2 columnas con foto a la izquierda.
- Fondo (imagen celestial / video).
- Copys ni assets.
- Estilos de botones.

