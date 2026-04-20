
## Plan: Rediseño visual editorial al estilo Matt Fraser + Starlit Whispers

Adapto la estructura existente al flujo del sitio Matt Fraser y aplico un sistema de diseño nuevo (paleta plum + dorado + crema, tipografía editorial Cormorant + DM Sans). No se elimina contenido — se reorganiza y reestiliza.

### 1. Sistema de diseño (`src/index.css`, `tailwind.config.ts`, `index.html`)

**Paleta 60/30/10** (sobreescribiendo tokens existentes en HSL):
- 60% `--background`: `#FAF7F2` (off-white cálido)
- 30% `--secondary` / `--dark`: `#3D1560` (deep plum, headings/footer/dark sections)
- 10% `--gold`: `#C9A84C` (acentos, bordes, hovers)
- `--foreground`: deep plum para titulares
- `--muted-foreground`: `#6B5E52` (warm gray)
- Card: `#FFFFFF` con sombra `0 2px 16px rgba(74,28,110,0.07)`, `border-radius: 16px`

**Tipografía** — añadir Cormorant Garamond + DM Sans en `index.html` (Google Fonts, ya hay Cormorant) y registrar en `tailwind.config.ts`:
- `font-display: 'Cormorant Garamond'` para H1-H3
- `font-body: 'DM Sans'` para párrafos
- Mantener Cinzel disponible para microtipografía/eyebrow opcional (o reemplazar por DM Sans uppercase)
- Override `h1-h6` en `@layer base` → Cormorant Garamond

**Utilidades nuevas en `index.css`**:
- `.btn-primary`: pill plum sólido, texto blanco, sin sombra dura, hover con glow dorado
- `.btn-ghost`: pill blanco, borde plum 1.5px, texto plum, hover borde dorado
- `.gold-divider`: `<hr>` 1px dorado al 40% opacidad
- `.card-elevated`: blanco + sombra + radius 16px
- `.testimonial-card`: borde izquierdo dorado 3px
- `.mask-fade-bottom`: `mask-image: linear-gradient(to bottom, black 60%, transparent 100%)`
- `.zodiac-watermark`: SVG mandala/zodiaco inline a 6% opacidad, posición central

### 2. Estructura de página (`src/pages/Index.tsx`)

Reordenar al flujo Matt Fraser:

```text
Header (nav + CTA "Reserva tu Lectura")
HeroSection            ← rediseñado
FeaturedInStrip        ← NUEVO (credibilidad)
LeadMagnetSection      ← NUEVO (opt-in email + mockup)
WhatLudivinaDoes       ← reusado como "Meet Ludivina" alternativo o eliminado en favor de AboutSection
AboutSection           ← "Meet Ludivina" (ya existe, reestilizar)
TestimonialsSection    ← NUEVO (3 cards con borde dorado izq.)
ServicesSection        ← reestilizado como cards editoriales
VideoSection           ← NUEVO (embed YouTube placeholder)
ProductCarousel        ← reestilizado como "Book/Product CTA" — dos columnas mockup + copy + CTA, manteniendo carrusel de amuletos debajo o convertido
ShopIntentions         ← se mantiene como categorías (estilo nuevo)
BlogSection            ← NUEVO (3 cards "Susurros & Reflexiones" con posts placeholder)
Footer                 ← rediseñado oscuro plum + newsletter + social
```

### 3. Componentes a modificar

**Header.tsx**
- Fondo off-white con `border-bottom` dorado fino (no lavanda)
- Logo izq, links centro (Cinzel/DM Sans uppercase tracking), CTA pill plum derecha "Reserva tu Lectura"
- Cart icon junto al CTA

**HeroSection.tsx**
- Fondo off-white + watermark SVG zodiaco/mandala centrado al 6%
- Eliminar video desktop (el ref es muy místico-oscuro, no encaja); mantener solo composición editorial estática
- Layout: izquierda texto (eyebrow gold + H1 Cormorant 64–72px plum + sub DM Sans 18px gray + dos pills primary/ghost); derecha foto Ludivina (`ludivina.png`) full-height alineada al borde con `mask-fade-bottom`
- Mobile: texto centrado arriba, foto debajo con mismo fade

**FeaturedInStrip.tsx (NUEVO)**
- Banda plum oscuro full-width, texto "Como me han visto" + 5–6 placeholders de medios en blanco/dorado (texto estilizado, sin logos reales aún)

**LeadMagnetSection.tsx (NUEVO)**
- Dos columnas: izq copy "Recibe gratis tu Mensaje Angelical Semanal" + form email (input + pill plum "Recibir mi mensaje"); der mockup de teléfono o tarjeta angelical (reutiliza `ludivina-about.png` o `angel-frame.png`)

**AboutSection.tsx**
- Ya es two-column. Reestilizar: H2 Cormorant grande plum, párrafos DM Sans en `--muted-foreground`, CTA secundario ghost "Conoce mi historia"
- Quitar gradiente lavanda de fondo, dejar off-white limpio con divisor dorado superior

**TestimonialsSection.tsx (NUEVO)**
- 3 cards blancas, borde izquierdo dorado 3px, quote en Cormorant italic, nombre + avatar circular (iniciales sobre fondo plum) o `ludivina.png` placeholder
- Datos placeholder en español

**ServicesSection.tsx**
- Cards: fondo blanco, sombra suave, radius 16px, sin borde
- Icono (lucide actual) en círculo plum claro con stroke dorado
- Título Cormorant, descripción DM Sans, CTA pill ghost "Reservar"

**VideoSection.tsx (NUEVO)**
- H2 + sub + iframe placeholder (aspect-video) con marco dorado fino y sombra. Texto a la izq, video a la der

**ProductCarousel.tsx**
- Mantener funcionalidad. Reestilizar título Cormorant, fondo off-white, frame dorado fino alrededor del producto activo, CTA pill plum "Ver Catálogo"

**ShopIntentions.tsx**
- Iconos en círculos blancos con sombra suave + borde dorado en hover, label Cormorant

**BlogSection.tsx (NUEVO)**
- Eyebrow "Susurros & Reflexiones", H2 Cormorant
- 3 cards: imagen (placeholder con `stars-bg.png` o similar), categoría dorada, título Cormorant, fecha DM Sans

**Footer.tsx**
- Fondo plum oscuro `#3D1560`, full-width
- 4 columnas: brand+bio, links Servicios, Legal, Newsletter (input + pill dorado)
- Social icons (Instagram, Facebook, YouTube, TikTok) en blanco hover dorado
- Línea divisoria dorada al 30% sobre copyright

### 4. Componentes que ya no encajan
- `WhatLudivinaDoes.tsx` y `StatsBar.tsx` están duplicados (ambos muestran stats). Consolidar: mover los stats a una franja dentro de `AboutSection` o entre Hero y FeaturedIn. Dejar un solo componente `StatsBar` y borrar la duplicación de `WhatLudivinaDoes`. La intro textual de `WhatLudivinaDoes` se absorbe en `AboutSection`.
- `ForWhomSection.tsx` se mantiene tal cual (recientemente ajustado), solo se actualizan tokens de color por la nueva paleta — el marco dorado encaja perfecto con el nuevo sistema.

### 5. Detalles técnicos

- `index.html`: añadir `DM+Sans:wght@300;400;500;600;700` al link de Google Fonts existente
- `tailwind.config.ts`: extender `fontFamily` con `display: ['Cormorant Garamond', 'serif']` y `body: ['DM Sans', 'sans-serif']`; mantener cinzel/cormorant existentes para no romper componentes que aún los usen durante migración
- Watermark zodiaco: SVG inline en componente `<ZodiacWatermark />` reutilizable (círculo con 12 símbolos sutiles), posición absoluta, pointer-events-none
- Mantener rutas, CartContext, productos, ProductDetail, Tienda, NotFound sin cambios funcionales — solo heredan nuevos tokens vía CSS variables

### 6. Archivos

**Modificar:**
- `src/index.css`, `tailwind.config.ts`, `index.html`
- `src/pages/Index.tsx`
- `src/components/Header.tsx`, `Footer.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `ProductCarousel.tsx`, `ShopIntentions.tsx`, `ForWhomSection.tsx`, `StatsBar.tsx`

**Crear:**
- `src/components/FeaturedInStrip.tsx`
- `src/components/LeadMagnetSection.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/VideoSection.tsx`
- `src/components/BlogSection.tsx`
- `src/components/ZodiacWatermark.tsx`

**Eliminar/consolidar:**
- `src/components/WhatLudivinaDoes.tsx` (texto absorbido en AboutSection, stats movidos a StatsBar único)

### Suposiciones
- Sin contenido real para press logos, testimonios, video YouTube y blog → uso placeholders en español coherentes con la marca; tú los reemplazas después.
- Lead magnet: form sin backend (solo UI). Si quieres conectar a Mailchimp/Lovable Cloud, lo agregamos después.
- Mantengo el carrito y la tienda funcionales sin cambios de comportamiento.
