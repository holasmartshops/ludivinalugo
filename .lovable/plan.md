

## Plan: Alinear iconos y botones al fondo de las cards de servicios

**Problema**: Las descripciones tienen longitudes diferentes, lo que hace que los iconos y botones se posicionen a alturas distintas en cada card.

**Solución**: Usar flexbox vertical en cada card con `flex-1` en la descripción para que el espacio variable se absorba ahí, empujando los iconos y botones a una posición consistente respecto al fondo.

### Cambios en `src/components/ServicesSection.tsx`

1. **Card container (línea 44)**: Agregar `flex flex-col h-full` para que cada card ocupe toda la altura y use layout vertical.
2. **Descripción (línea 49)**: Agregar `flex-1` para que absorba el espacio sobrante, manteniendo iconos y botones alineados al fondo.
3. **Wrapper de icono + botón**: Envolver el icono y el botón en un `div` con `mt-auto` para anclarlos al fondo de la card.

Esto garantiza que sin importar la longitud del texto, los iconos y botones siempre estén a la misma distancia del borde inferior.

