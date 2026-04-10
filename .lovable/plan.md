

## Tienda y Página de Producto — UI Estática

### Que se construye
1. **Página de Catálogo (`/tienda`)** — Grid de los 7 productos con imagen, nombre, precio e intención. Estilo oscuro minimalista consistente con el landing. Filtros por intención (Paz, Claridad, Protección, Abundancia).
2. **Página de Producto (`/tienda/:slug`)** — Vista detallada con imagen grande, nombre, precio, descripción, intención, y botón "Agregar al Carrito" (sin funcionalidad por ahora).
3. **Datos compartidos** — Archivo de datos estáticos con los 7 productos (nombre, precio, slug, descripción, intención) reutilizado en el carrusel del landing, catálogo y página de producto.
4. **Navegación** — El enlace "Ver Catálogo" del carrusel y el link "Tienda" del header apuntarán a `/tienda`. Header y Footer compartidos en ambas páginas.

### Estructura de archivos

```text
src/
├── data/products.ts          ← datos estáticos de los 7 productos
├── pages/
│   ├── Tienda.tsx             ← catálogo con grid y filtros
│   └── ProductDetail.tsx      ← página individual de producto
├── components/
│   └── ProductCard.tsx        ← card reutilizable (catálogo)
```

### Cambios en archivos existentes
- **`src/App.tsx`** — Agregar rutas `/tienda` y `/tienda/:slug`
- **`src/components/ProductCarousel.tsx`** — Importar productos desde `data/products.ts` en lugar de tenerlos hardcoded. Enlace "Ver Catálogo" apunta a `/tienda`
- **`src/components/Header.tsx`** — Link "Tienda" navega a `/tienda` con React Router
- **`src/components/ShopIntentions.tsx`** — Los botones de intención enlazan a `/tienda?intencion=paz` etc.

### Diseño visual
- Fondo oscuro (`bg-dark`), tipografía Cinzel para títulos con `gold-glow`, Outfit para body
- Cards de producto minimalistas sin bordes, hover sutil con escala
- Página de producto: layout de 2 columnas (imagen | info) en desktop, apilado en mobile
- Filtros de intención como pills/chips dorados en la parte superior del catálogo

### Detalle técnico
- Navegación con `react-router-dom` (`Link`, `useParams`, `useSearchParams`)
- Todos los productos usan la misma imagen placeholder (`amuleto-placeholder.png`) por ahora
- Sin backend, sin carrito funcional — solo UI

