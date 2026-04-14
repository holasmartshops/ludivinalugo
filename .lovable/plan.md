

## Plan: Agregar swipe táctil al carrusel de amuletos

**Problema**: En móvil y tablet no se puede deslizar con el dedo para cambiar de producto en el carrusel.

**Solución**: Agregar event handlers de touch (`onTouchStart`, `onTouchEnd`) al contenedor del carrusel para detectar swipes horizontales y llamar `prev()`/`next()` según la dirección.

### Cambios en `src/components/ProductCarousel.tsx`

1. **Agregar estado para tracking de touch**: Usar `useRef` para guardar la posición X inicial del touch.

2. **Agregar handlers `onTouchStart` y `onTouchEnd`** al `div` contenedor del carrusel (línea 33):
   - `onTouchStart`: Guardar `e.touches[0].clientX` en el ref.
   - `onTouchEnd`: Calcular la diferencia con `e.changedTouches[0].clientX`. Si el swipe es mayor a 50px, llamar `next()` (swipe izquierda) o `prev()` (swipe derecha).

3. **Agregar `touch-action: pan-y`** al contenedor para permitir scroll vertical pero capturar swipes horizontales sin conflicto.

No se necesitan dependencias externas — solo eventos nativos del navegador.

