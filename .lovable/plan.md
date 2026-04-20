
## Plan: Hero mobile vertical — foto arriba, texto abajo

En mobile la referencia muestra:
1. Foto de Ludivina arriba (con nubes + watermark zodiacal detrás de ella, centrada)
2. Texto debajo: eyebrow dorado → título plum → párrafo → 2 botones full-width apilados

Hoy en mobile la foto y el texto compiten por altura porque el grid usa `min-h-[calc(100vh-5rem)]` y la foto tiene `h-[60vh]`, lo que empuja todo. Hay que reorganizar el layout mobile sin tocar desktop.

### Cambios en `src/components/HeroSection.tsx`

**Section wrapper:**
- Quitar `min-h-screen flex items-center` y `pt-20` rígidos en mobile.
- Mobile: `pt-24` (debajo de navbar h-24) y `pb-12`, sin altura mínima forzada (deja que el contenido fluya).
- Desktop (`lg:`): mantener `lg:min-h-screen lg:flex lg:items-center lg:pt-20 lg:pb-0`.

**Grid interno:**
- Quitar `min-h-[calc(100vh-5rem)]` del grid.
- Mobile: stack vertical natural con `gap-8`, foto primero (order-1), texto segundo (order-2).
- Desktop: `lg:grid-cols-2 lg:gap-12`, mantener orden actual (texto izquierda order-1, foto derecha order-2) y `lg:min-h-[calc(100vh-6rem)]`.

**Bloque de la foto (mobile):**
- Cambiar a `h-[42vh] max-h-[420px] w-full flex justify-center items-end` en mobile.
- Imagen: `h-full w-auto object-contain object-bottom mask-fade-bottom`.
- Desktop: mantener `lg:h-[calc(100vh-6rem)] lg:justify-end lg:items-end lg:self-end`.

**Bloque de texto (mobile):**
- Centrado (`text-center`), botones apilados full-width: `flex-col gap-3 w-full`.
- Botones con `w-full` solo en mobile (`sm:w-auto` para tablet+).
- Reducir tamaño del título en mobile: `text-4xl` (vs el actual `text-5xl`) para que no se desborde y respete la jerarquía de la referencia. Mantener `md:text-6xl lg:text-7xl`.
- Reducir margen inferior del párrafo en mobile: `mb-6 lg:mb-10`.

**Watermark zodiacal:**
- Sigue como `absolute inset-0` cubriendo toda la sección — en mobile quedará detrás de la foto (que está arriba), tal como en la referencia. Sin cambios.

**Nubes de fondo:**
- Sin cambios (siguen full-section con `mask-fade-bottom`).

### Resultado esperado en mobile (390px)
```text
[ Navbar h-24 ]
[ Foto Ludivina centrada con nubes + zodiaco detrás (~42vh) ]
[ ✦ GUÍA ESPIRITUAL ANGELICAL ]
[ Mensajes del cielo / para tu alma  (text-4xl) ]
[ Descubre los mensajes... ]
[ ▢ Reserva tu Lectura  (full-width, plum) ]
[ ▢ Ver Amuletos        (full-width, outline) ]
```

### Archivos
- Modificar: `src/components/HeroSection.tsx`
