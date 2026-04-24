## Plan: Optimización integral de imágenes

### 1. Script de optimización (`scripts/optimize-images.mjs`)
- Usar `sharp` (devDep) para recorrer `src/assets/**` y generar versiones `.webp` junto al original.
- Reglas de tamaño:
  - Amuletos (`products/*`): max 600px, calidad 82
  - Iconos (`for-whom/*`): max 200px, calidad 85
  - Retratos (`ludivina*.png`): max 900px, calidad 82
  - Fondos (`hero-clouds`, `stars-bg`): max 1920px, calidad 75
- Mantener originales por seguridad; solo agregar `.webp`.

### 2. Actualizar imports a `.webp`
- `src/data/products.ts` → 7 amuletos
- `src/components/HeroSection.tsx` → `ludivina`, `hero-clouds`
- `src/components/AboutSection.tsx` → `ludivina-about-prayer`
- `src/components/LeadMagnetSection.tsx` → `ludivina-cards`
- `src/components/ForWhomSection.tsx` → 5 iconos
- `src/components/BlogSection.tsx` → `stars-bg`
- `src/components/Header.tsx` → logo (si aplica)

### 3. Atributos en `<img>` para carga rápida
- **Above the fold** (Hero ludivina, logo Header): `loading="eager"`, `fetchpriority="high"`, `decoding="async"`, `width`/`height` explícitos.
- **Resto** (about, lead magnet, for-whom, productos, blog): `loading="lazy"`, `decoding="async"`, `width`/`height` explícitos para evitar CLS.

### 4. Ejecución
- Instalar `sharp` como devDependency
- Correr el script una vez para generar los `.webp`
- Verificar reducción de peso esperada: ~46MB → <2MB

### Archivos
- **Crear**: `scripts/optimize-images.mjs`, archivos `.webp` generados
- **Modificar**: `package.json` (sharp), `src/data/products.ts`, `HeroSection.tsx`, `AboutSection.tsx`, `LeadMagnetSection.tsx`, `ForWhomSection.tsx`, `BlogSection.tsx`, `Header.tsx`
