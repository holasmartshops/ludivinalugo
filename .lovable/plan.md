

## Ludivina Lugo — Landing Page Angélica (Plan Final)

### Tipografía (basada en Referencia 3 - AstroRealm)
- **Títulos/Headings**: **Cinzel** (Google Font) — serif elegante con letras capitulares espaciadas, estilo místico-celestial idéntico a la Referencia 3
- **Subtítulos decorativos**: **Cinzel Decorative** para el logo "Ludivina Lugo" y elementos destacados
- **Cuerpo**: **Cormorant Garamond** o **Inter** para texto de lectura

### Paleta de colores (sin azul, solo blanco/negro/dorado)
- Blancos/Crema: `#FFFFFF`, `#F5F0E8`, `#FAF7F2`
- Negros: `#0A0A0A`, `#1A1A1A`, `#111111`
- Dorados: `#C9A84C`, `#D4AF37`, `#E8D48B`
- Grises cálidos: `#8A8A8A`, `#B0A89A`

### Estructura de la página
1. **Header** — Fondo negro, logo "Ludivina Lugo" en Cinzel Decorative dorado, menú en Cinzel (tracking amplio), carrito dorado
2. **Hero Section** — Fondo blanco/crema. Título grande en Cinzel con letras espaciadas. Texto devocional, CTA dorado outline. Espacio para foto placeholder
3. **Servicios** — Fondo negro. 3 tarjetas (Lectura de Ángeles, Guías Espirituales, Amuletos). Títulos Cinzel dorados, texto blanco
4. **Banda de Estadísticas** — Fondo negro. Números grandes dorados en Cinzel, labels en blanco
5. **Tienda por Intenciones** — Fondo negro. Grid de iconos dorados (Paz, Claridad, Protección, Abundancia). Preparada para Shopify
6. **Sobre Mí + Lead Magnet** — Fondo negro. 2 columnas: bio placeholder + formulario email
7. **Footer** — Fondo negro profundo. 4 columnas

### Archivos a crear/modificar
- `index.html` — Añadir Google Fonts (Cinzel, Cinzel Decorative, Cormorant Garamond)
- `src/index.css` — Nueva paleta sin azules, variables de tipografía
- `tailwind.config.ts` — Colores custom + fontFamily (cinzel, cinzelDecorative, cormorant)
- `src/pages/Index.tsx` — Orquesta todas las secciones
- `src/components/Header.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/StatsBar.tsx`
- `src/components/ShopIntentions.tsx`
- `src/components/AboutAndLeadMagnet.tsx`
- `src/components/Footer.tsx`

