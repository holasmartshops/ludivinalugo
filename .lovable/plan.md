
## Plan: Paleta crema casi blanco (60/30/10)

Actualizar tokens en `src/index.css` para lograr un fondo crema casi blanco como dominante, lavanda profundo como secundario y dorado como acento.

### Cambios en `:root` (src/index.css)

**Primario / fondo (60%) — crema casi blanco cálido:**
- `--background: 40 40% 98%;` (≈ #FCFAF5, crema muy luminoso casi blanco)
- `--foreground: 270 25% 20%;` (tinta morada profunda para texto)
- `--card: 0 0% 100%;` (blanco puro para tarjetas, contraste sutil sobre el crema)
- `--popover`, `--sidebar-background`: igual al background

**Secundario (30%) — lavanda profundo:**
- `--secondary: 270 30% 32%;` (≈ #4A3868)
- `--secondary-foreground: 40 40% 98%;`
- `--muted: 270 18% 92%;` (lavanda muy suave)
- `--muted-foreground: 270 15% 38%;`

**Acento (10%) — dorado (sin cambios):**
- `--primary`, `--accent`, `--gold`: `43 50% 54%`

**Superficies "dark" — lavanda PROFUNDO** (bloques secundarios contrastantes):
- `--dark: 270 30% 22%;` (≈ #2E2340)
- `--dark-card: 270 28% 28%;`
- `--dark-border: 270 25% 38%;`

**Bordes / inputs sutiles:**
- `--border: 270 18% 88%;`
- `--input: 270 18% 88%;`

**Cream tokens** (texto claro sobre superficies oscuras lavanda):
- `--cream: 40 40% 98%;`
- `--cream-dark: 40 25% 82%;`

### Distribución 60/30/10 automática

- **60% crema casi blanco** (`bg-background`): Hero, ForWhom, ProductCarousel, Services, About.
- **30% lavanda oscuro** (`bg-dark`): StatsBar, WhatLudivinaDoes, Footer (ya usan `bg-dark`, ahora se ven oscuros con texto crema).
- **10% dorado**: títulos, iconos, bordes de CTA (ya aplicado).

### Archivos a modificar
- `src/index.css` (único cambio — solo valores HSL de tokens)
