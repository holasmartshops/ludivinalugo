## Plan: Filtro por necesidad en Home (reemplaza ProductCarousel)

Crear una nueva sección interactiva en la home donde el usuario seleccione una necesidad (chip toggle, una a la vez) y se muestren los amuletos correspondientes. La imagen de referencia se usa solo como wireframe — el estilo visual seguirá el sistema actual (crema/blanco, dorado, plum, Cormorant + Inter).

### 1. Mapeo necesidad → Arcángel (producto)

| # | Necesidad | Emoji | Producto |
|---|-----------|-------|----------|
| 1 | Protección y defensa espiritual | 🛡️ | Dije Piedra Azul (Miguel) |
| 2 | Salud, sanación y enfermedades | 💚 | Dije Piedra Verde (Rafael) |
| 3 | Viajes, caminos y animales | 🧭 | Dije Piedra Verde (Rafael) |
| 4 | Hijos, embarazo y familia | 👶 | Dije Piedra Blanca (Gabriel) |
| 5 | Estudios, sabiduría y conocimiento | 📚 | Dije Piedra Amarilla (Jofiel) |
| 6 | Trabajo, dinero y prosperidad | 💰 | Dije Piedra Naranja (Uriel) |
| 7 | Amor, pareja y matrimonio | 🌹 | Dije Piedra Rosa (Chamuel) |
| 8 | Trámites, contratos y documentos | 📜 | Dije Piedra Rosa (Chamuel) |
| 9 | Paz mental, perdón y liberación | 🕊️ | Dije Piedra Morado (Zadquiel) |

### 2. Cambios en archivos

**`src/data/needs.ts` (nuevo)** — exporta `needs: { slug, label, emoji, productSlug }[]` con las 9 entradas, más mapa Arcángel por slug de producto para mostrar el subtítulo.

**`src/components/NeedFinder.tsx` (nuevo)**
- Eyebrow: `✦ ¿Es para ti?`
- Título: `¿Qué estás buscando?` (font-display, text-secondary)
- Subtítulo: `Toca lo que sientes y te mostramos tu amuleto`
- Grid de 9 chips (flex-wrap, centrado) — pill `rounded-full px-5 py-2.5`:
  - bg-card, border `border-gold/30`, emoji + label en font-body
  - Estado activo: `border-gold bg-secondary/5 ring-1 ring-gold/40 text-secondary`
  - Hover: `border-gold/60`
- Estado: `useState<NeedSlug | null>(null)` — toggle (clic en activo lo desactiva).
- Panel de resultado debajo (solo si hay selección):
  - Card con `card-elevated`, borde dorado sutil, `rounded-2xl`, padding generoso
  - Título centrado: `Amuleto para {necesidad}` (font-display italic, text-secondary)
  - Mini-card del producto: imagen `object-contain` (mismo bg-card), nombre, Arcángel en `text-gold-dark italic` como subtítulo, precio, botón `btn-primary` "Ver detalle" → `/tienda/{slug}`
  - Transición suave fade-in al cambiar selección
- Sin selección: hint pequeño en muted-foreground

**`src/pages/Index.tsx`**
- Comentar `<ProductCarousel />` y dejar comentario `{/* Carrusel desactivado temporalmente */}`.
- Importar e insertar `<NeedFinder />` en la misma posición.

### 3. Estilo (coherente con el sitio)

- Sección `py-24 bg-muted/40` (mismo ritmo del carrusel anterior).
- Chips: alineados con los filtros de `/tienda` pero con emoji y forma más orgánica.
- Card de resultado: mismo lenguaje visual de `ShopIntentions` / `ForWhomSection`.
- Responsive: chips en flex-wrap se acomodan solos.

### 4. Resultado esperado

- Después de Video, aparece "¿Qué estás buscando?" con 9 chips.
- Al tocar un chip se muestra el amuleto correspondiente con CTA al detalle.
- Tocar el chip activo lo desactiva y oculta el panel.
- El carrusel queda comentado (fácil reactivar).

### Archivos
- Crear: `src/data/needs.ts`, `src/components/NeedFinder.tsx`
- Modificar: `src/pages/Index.tsx`
