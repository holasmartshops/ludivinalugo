

## Carrito Temporal con Panel Lateral

### Objetivo
Crear un carrito de compras temporal (estado local con React Context) que se despliega como panel lateral (Sheet) al hacer clic en el icono del carrito en el Header. Diseño minimalista oscuro acorde con la estética de la página.

### Archivos a crear

**1. `src/contexts/CartContext.tsx`** — Context + Provider
- Estado: array de `{ product: Product, quantity: number }`
- Funciones: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `cartCount`
- Persistencia en `localStorage` para que sobreviva recargas

**2. `src/components/CartDrawer.tsx`** — Panel lateral del carrito
- Usa el componente `Sheet` existente (side="right")
- Fondo `bg-dark`, texto `cream`, acentos `gold`
- Lista de productos con imagen, nombre, precio, cantidad y botón eliminar
- Subtotal al fondo
- Botón "Proceder a la Compra" (`bg-gold text-dark`, sin funcionalidad por ahora, muestra un toast de "Próximamente")
- Mensaje de carrito vacío cuando no hay productos

### Archivos a modificar

**3. `src/App.tsx`** — Envolver con `CartProvider`

**4. `src/components/Header.tsx`** — Reemplazar el botón del carrito
- Importar `CartDrawer` y `useCart`
- Mostrar badge con cantidad de productos sobre el icono `ShoppingBag`
- Al hacer clic, abrir el `CartDrawer`

**5. `src/pages/ProductDetail.tsx`** — Conectar botón "Agregar al Carrito"
- Importar `useCart`
- Al hacer clic en "Agregar al Carrito", llamar `addToCart(product)` y mostrar toast de confirmación

### Diseño visual del drawer
```text
┌──────────────────────┐
│  ✕           CARRITO  │
├──────────────────────┤
│  [img] Ala de Ángel   │
│        $45.00   ─ 1 + │
│                    🗑  │
│───────────────────────│
│  [img] Escudo Celest. │
│        $52.00   ─ 1 + │
│                    🗑  │
├──────────────────────┤
│  Subtotal      $97.00 │
│                        │
│ [Proceder a la Compra] │
└──────────────────────┘
```

Colores: fondo `bg-dark`, bordes `border-dark-border`, texto `text-cream`, precios y botón `text-gold` / `bg-gold`

