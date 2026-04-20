
## Plan: Navbar centrada con logo en medio + watermark más visible

### 1. `src/components/Header.tsx` — Navbar rediseñada

**Altura más alta para destacar el logo:**
- `h-20` → `h-28` (mobile `h-24`)
- Logo: `h-10` → `h-16` para que respire y se aprecie centrado

**Layout simétrico con logo en el centro:**

```text
[ Inicio  Servicios  Tienda ]   [ LOGO ]   [ Sobre Mí  Contacto  | Reserva  🛒 ]
```

- Reemplazar el flex actual (`justify-between` con logo izq + nav + acciones der) por un `grid grid-cols-3 items-center` en desktop:
  - Col izq: nav links `Inicio`, `Servicios`, `Tienda` con `justify-end`
  - Col centro: logo grande con `justify-center`
  - Col der: nav links `Sobre Mí`, `Contacto` + separador vertical sutil dorado + botón `Reserva` + icono carrito, con `justify-start`
- Separar el array `navLinks` en dos: `leftLinks` y `rightLinks`
- Mantener mismo estilo tipográfico (uppercase, tracking, hover dorado)

**Mobile** (`md:hidden`):
- Mantener layout actual: logo centrado/izquierda, hamburguesa + carrito a la derecha
- En el menú desplegable mostrar los 5 links en orden original (Inicio, Servicios, Tienda, Sobre Mí, Contacto) + CTA Reserva
- Ajustar altura mobile para que el logo más grande no apriete

**Detalles:**
- Mantener `border-b border-gold/40` y comportamiento de scroll-hide
- El botón "Reserva" pasa de `hidden md:inline-flex` a quedar dentro de la columna derecha en desktop

### 2. `src/components/ZodiacWatermark.tsx` — Watermark más visible

Subir presencia del símbolo astrológico de fondo del Hero:
- Opacidad del contenedor: `opacity-[0.06]` → `opacity-[0.14]`
- Grosor de líneas:
  - Círculo exterior `strokeWidth="1"` → `"1.5"`
  - Círculos internos `"0.5"` → `"1"`
  - Líneas radiales `"0.5"` → `"1"`
- Tamaño de los símbolos zodiacales: `fontSize="22"` → `"30"` y `font-weight="500"` para que se lean
- Tamaño del SVG: `w-[600px] h-[600px]` → `w-[760px] h-[760px]` (manteniendo `max-w-[90vw]`) para que ocupe más del Hero

### Archivos a modificar
- `src/components/Header.tsx`
- `src/components/ZodiacWatermark.tsx`
