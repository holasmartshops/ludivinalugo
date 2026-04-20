
## Plan: Arreglar responsividad global — overflow horizontal en mobile/tablet

### Problema raíz
La página se desplaza lateralmente en iPhone mostrando blanco. Causas identificadas:
1. **`VideoSection`**: el `<iframe>` tiene `width="560"` hardcoded como atributo HTML — en mobile (<560px) sobresale del viewport y empuja toda la página.
2. **`ProductCarousel`**: las cards usan `translateX(offset * 220px)` con `scale(1.15)`, salen del viewport en pantallas <500px.
3. **No hay `overflow-x: hidden` global** que contenga cualquier elemento que sobresalga.
4. Algunas imágenes/cards con anchos fijos (`w-80`) muy grandes para 375px.

---

### 1. `src/components/VideoSection.tsx` — FIX PRINCIPAL
El iframe necesita ser fluido, no fijo:
- Quitar atributos `width="560" height="315"`.
- Agregar clases: `className="w-full h-full"`.
- El wrapper `aspect-video` ya controla la proporción, así que el iframe solo debe llenar el contenedor.
- Verificar que `.container` + `px-4` dejen márgenes adecuados.

### 2. `src/index.css` — Contención global de seguridad
Añadir en `@layer base`:
```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```
Red de seguridad para que ningún elemento futuro rompa el layout.

### 3. `src/components/ProductCarousel.tsx` — Carrusel responsive
- Usar `useIsMobile` (hook ya existe) para:
  - Offset mobile: `offset * 130` en vez de `220`.
  - Scale activo mobile: `1.05` en vez de `1.15`.
  - Cards mobile: `w-40 h-56` en vez de `w-48 h-64`.
- El `<section>` ya tiene `overflow-hidden`, OK.

### 4. `src/components/AboutSection.tsx`
Si la foto usa `w-80` (320px) en mobile, reducir a `w-64 sm:w-72 lg:w-80` para dejar respiración en pantallas de 375px.

### 5. `src/components/LeadMagnetSection.tsx`
Reducir padding mobile de la card: `p-6 md:p-14` (en vez de `p-8 md:p-14`).

### 6. `src/components/FeaturedInStrip.tsx`
Reducir gap horizontal en mobile: `gap-x-6 md:gap-x-10` (en vez de `gap-x-10` fijo) para que los 6 outlets respiren mejor en tablet vertical.

### 7. Verificación cruzada
Revisar `Tienda.tsx`, `ProductDetail.tsx`, `Header.tsx` y `Footer.tsx` para confirmar que no haya `min-w` fijos o elementos absolutos sin contención. Aplicar `overflow-x-hidden` puntual si se detecta algo.

---

### Resultado esperado
- iPhone (375-414px): sin scroll horizontal ni franjas blancas.
- Video se ajusta al ancho del contenedor manteniendo aspect ratio 16:9.
- Carrusel de amuletos cabe dentro del viewport, sin cards saliéndose.
- Tablet (768-1024px): 2 columnas funcionan sin apretarse.

### Archivos a modificar
- `src/components/VideoSection.tsx` (clave)
- `src/index.css`
- `src/components/ProductCarousel.tsx`
- `src/components/AboutSection.tsx`
- `src/components/LeadMagnetSection.tsx`
- `src/components/FeaturedInStrip.tsx`
