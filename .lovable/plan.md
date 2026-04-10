

## Corrección de Fuente — Estilo de Referencia

### Análisis
La imagen de referencia muestra una fuente sans-serif con estas características:
- Peso ligero (~300-400)
- Tracking ligeramente abierto
- Formas geométricas suaves, más anchas que Inter
- Color gris claro sobre fondo oscuro

La fuente que mejor coincide es **Outfit** — una sans-serif geométrica moderna, limpia y ligera. Inter es más compacta y humanista, lo cual no coincide con la referencia.

### Cambios

**1. `index.html`** — Reemplazar la carga de Inter por Outfit (weights 300, 400, 500)

**2. `tailwind.config.ts`** — Cambiar `inter: ["Inter", "sans-serif"]` por `outfit: ["Outfit", "sans-serif"]`

**3. `src/index.css`** — Cambiar `font-inter` por `font-outfit` en body

**4. Todos los componentes** — Buscar y reemplazar `font-inter` por `font-outfit` en:
- HeroSection, ServicesSection, ProductCarousel, ShopIntentions, AboutAndLeadMagnet, Footer, StatsBar

**5. Ajustar peso y tracking** — Aplicar `font-light` (300) y `tracking-wide` en textos descriptivos para replicar el estilo airy de la referencia

### Archivos a modificar
- `index.html`
- `tailwind.config.ts`
- `src/index.css`
- Todos los componentes con `font-inter`

