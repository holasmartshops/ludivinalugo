
## Plan: Quitar líneas lavanda entre secciones + degradado lavanda al final del About

### Problema
1. Las secciones usan `border-t border-border` y `--border` está en lavanda (`270 18% 88%`), por eso aparece la línea delgada lavanda entre cada bloque.
2. El degradado inferior del `AboutSection` es `to-background` (crema), por lo que se nota un corte cuando empieza el footer lavanda.

### Cambios

**1. `src/components/StatsBar.tsx`, `WhatLudivinaDoes.tsx`, `ServicesSection.tsx`, `ProductCarousel.tsx`**
- Quitar `border-t border-border` de la sección.

**2. `src/index.css`**
- Cambiar `--border` a un crema apenas más oscuro que el background (`40 25% 92%`) para que cualquier `border-border` residual (cards, inputs) no se lea lavanda. Mantener `--input` igual a `--border`.

**3. `src/components/AboutSection.tsx`**
- Cambiar el degradado inferior de `from-background` (crema) a `from-secondary` (lavanda profundo del footer) para fundir About → Footer sin corte visible.
- Mantener el degradado superior `from-background` (crema) intacto.

### Archivos
- `src/index.css`
- `src/components/StatsBar.tsx`
- `src/components/WhatLudivinaDoes.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/ProductCarousel.tsx`
- `src/components/AboutSection.tsx`
