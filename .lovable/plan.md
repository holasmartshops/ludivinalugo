
## Plan: Hero mobile en un solo viewport (sin scroll)

### Objetivo
En mobile (390x844), el Hero debe caber entero en pantalla al abrir: navbar + texto + CTAs + imagen de Ludivina visibles sin scroll. Se permite que el texto se superponga ligeramente sobre la imagen.

### Estrategia
Cambiar el layout mobile de "grid apilado" (texto arriba, imagen abajo → fuerza scroll) a **layout superpuesto** donde la imagen de Ludivina vive como capa de fondo del Hero y el texto + CTAs flotan encima. En desktop se conserva el grid de 2 columnas actual.

### Cambios en `src/components/HeroSection.tsx`

**1. Section container**
- Altura controlada por viewport real, sin desbordar:
  - `min-h-screen` → `h-[100svh] lg:min-h-screen` (usa `svh` para excluir la barra de URL móvil).
  - `pt-20` → `pt-24 pb-8 lg:pt-20 lg:pb-0` (respeta navbar de 96px en mobile y deja aire abajo para los CTAs).

**2. Imagen de Ludivina — modo dual**
- En mobile: posicionada absoluta como capa de fondo, alineada abajo-derecha, ocupando ~70% del alto del Hero.
- En desktop: vuelve al grid como columna derecha (comportamiento actual).
- Implementación: dos `<img>` controladas por `hidden lg:block` y `lg:hidden`, o una sola con clases responsive:
  ```tsx
  {/* Mobile: capa de fondo */}
  <img
    src={ludivinaImg}
    alt="Ludivina Lugo"
    className="lg:hidden absolute bottom-0 right-0 h-[65%] w-auto object-contain object-bottom mask-fade-bottom opacity-90 pointer-events-none z-[5]"
  />
  ```
  Y conservar la versión desktop dentro del grid con `hidden lg:flex`.

**3. Bloque de texto (mobile)**
- Alineación: `text-center` en mobile, `lg:text-left`.
- Tipografía más compacta para que quepa con CTAs:
  - Eyebrow `mb-6` → `mb-3 lg:mb-6`.
  - Título: `text-5xl md:text-6xl lg:text-7xl` → `text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl` (~36px en mobile) y `mb-6` → `mb-4 lg:mb-6`.
  - Párrafo: `text-lg md:text-xl` → `text-sm sm:text-base md:text-xl`, `mb-10` → `mb-6 lg:mb-10`, y `max-w-xl` → `max-w-md mx-auto lg:mx-0`.
- z-index: el contenedor del texto pasa a `z-10` (ya lo tiene) para quedar sobre la imagen mobile.

**4. CTAs**
- `w-full sm:w-auto` para que en mobile sean botones cómodos sin desbordar.
- Mantener `gap-3 sm:gap-4` y `flex-col sm:flex-row`.
- El `pb-8` de la section garantiza separación con el borde inferior.

**5. Grid container**
- Quitar `min-h-[calc(100vh-5rem)]` (rompe el flujo): la altura ahora la da la section con `h-[100svh]`.
- `gap-12` → `gap-6 lg:gap-12`.

**6. Watermark zodiacal**
- Pasa a estar detrás de todo con `z-0` (ya está implícito); la imagen mobile de Ludivina lleva `z-[5]` y el texto `z-10`.

### Resultado esperado en 390x844
```text
┌─────────────────────────┐
│      NAVBAR (96px)      │
├─────────────────────────┤
│  ✦ Guía Espiritual      │  ← texto centrado, z-10
│   Mensajes del cielo    │
│      para tu alma       │
│                         │
│  Descubre los mensajes… │
│                         │
│  [ Reserva tu Lectura ] │
│  [   Ver Amuletos    ]  │
│        ╱──────╲         │  ← Ludivina detrás, fade abajo
│       │ Ludivina│       │
│       │ (foto)  │       │
└─────────────────────────┘
```
Todo cabe en 844px sin scroll. El texto puede solaparse sutilmente con la cabeza de la imagen — controlado por la opacidad y el fade.

### Archivos
- Modificar: `src/components/HeroSection.tsx`
