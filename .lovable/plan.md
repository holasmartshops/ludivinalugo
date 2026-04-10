

## Iteración Minimalista — Flechas, Bordes y Header con Auto-hide

### Cambios

**1. Header (`Header.tsx`) — Auto-hide al hacer scroll**
- Agregar lógica con `useEffect` + `useState` que detecta dirección de scroll
- Scroll hacia abajo: header se oculta con `transform: translateY(-100%)`
- Scroll hacia arriba: header reaparece con transición suave
- Mantener transparente y minimalista

**2. ProductCarousel (`ProductCarousel.tsx`) — Flechas minimalistas**
- Quitar los recuadros/border de los botones de flecha — solo el icono dorado limpio
- Quitar el `border` y `rounded-sm` de las imágenes de producto (sin recuadro)
- Flechas más finas y simples, solo `ChevronLeft`/`ChevronRight` sin contenedor

**3. Eliminar líneas divisoras en TODAS las secciones**
- `ProductCarousel.tsx`: quitar la línea `w-16 h-px bg-gold` debajo del título
- `ServicesSection.tsx`: quitar la línea `w-16 h-px bg-gold` + quitar borders de las tarjetas y del recuadro de iconos
- `StatsBar.tsx`: quitar `border-y border-dark-border`
- `ShopIntentions.tsx`: quitar la línea `w-16 h-px bg-gold` + quitar borders de los círculos de iconos
- `AboutAndLeadMagnet.tsx`: quitar la línea `w-16 h-px bg-gold` + quitar border del card del lead magnet y del photo placeholder
- `Footer.tsx`: quitar `border-t border-dark-border` del footer y de la línea bottom
- En general: quitar cualquier `border` decorativo que divida secciones o encierre elementos

### Archivos a modificar
- `src/components/Header.tsx`
- `src/components/ProductCarousel.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/StatsBar.tsx`
- `src/components/ShopIntentions.tsx`
- `src/components/AboutAndLeadMagnet.tsx`
- `src/components/Footer.tsx`

