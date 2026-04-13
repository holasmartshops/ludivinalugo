

## Rediseño Hero Section — Con Fondo y Texto Gigante

### Objetivo
Integrar la foto de Ludivina y el layout de referencia (foto izquierda, info derecha, botón redondeado blanco) **manteniendo** el fondo actual (`hero-bg.png`) y el texto gigante decorativo "Ludivina Lugo".

### Cambios

**1. Copiar imagen de Ludivina**
- `user-uploads://Diseño_sin_título_15.png` → `src/assets/ludivina.png`

**2. Mantener del hero actual**
- Fondo con `hero-bg.png` (background image)
- Fade inferior hacia `bg-dark`
- Texto gigante decorativo "Ludivina / Lugo" semitransparente (`text-gold-dark/20`)

**3. Nuevo layout sobre el fondo**
- 2 columnas centradas verticalmente sobre el fondo existente
- **Izquierda**: Imagen de Ludivina con fade inferior
- **Derecha**: Subtítulo "Guía Espiritual Angelical", servicios, descripción
- Botón "Descubre tus Mensajes": `rounded-full`, fondo blanco, texto oscuro
- Botón "Ver Amuletos": outline redondeado

### Archivo a modificar
- `src/components/HeroSection.tsx` — reestructurar contenido interior manteniendo fondo y texto gigante

