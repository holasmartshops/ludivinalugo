
## Plan: Foto de Ludivina en sección "Conoce a Ludivina" con fade de opacidad

Reemplazar la foto actual de la sección About por la nueva imagen de Ludivina con manos en oración, aplicando el mismo fade inferior (`mask-fade-bottom`) que usa el Hero, sin el card blanco con sombra para que el fade se funda con el fondo crema.

### 1. Asset
- Copiar `user-uploads://freepik_background_81154.png` → `src/assets/ludivina-about-prayer.png`

### 2. `src/components/AboutSection.tsx`
**Reemplazar el bloque actual de la foto** (el `<div>` con `card-elevated p-3 bg-white` que envuelve la imagen):

- Quitar el card blanco (`card-elevated`, `p-3`, `bg-white`, `rounded-xl`) — el fade necesita fundirse directo con el background crema, sin marco que lo corte.
- Cambiar el import de `ludivinaAbout` por el nuevo asset `ludivinaAboutPrayer`.
- Aplicar a la nueva imagen:
  - `className="w-full h-auto object-contain mask-fade-bottom"`
  - Mantener el wrapper responsive: `w-64 sm:w-80 lg:w-[28rem]` (ya existente, OK para móvil).
- Conservar el `alt` descriptivo y el layout del grid (foto a la izquierda en desktop, arriba en mobile gracias a los `order-*`).

### Resultado esperado
- La nueva foto de Ludivina con manos en oración aparece en la columna izquierda de la sección "Conoce a Ludivina".
- El fondo blanco del PNG se desvanece suavemente hacia abajo gracias a `mask-fade-bottom`, fundiéndose con el `bg-background` crema de la sección — mismo efecto que la foto del Hero.
- Sin marco/card blanco alrededor para que el fade funcione visualmente limpio.
- Layout responsive intacto: mobile mantiene el orden foto-arriba/texto-abajo, desktop foto-izquierda/texto-derecha.

### Archivos
- Crear: `src/assets/ludivina-about-prayer.png`
- Modificar: `src/components/AboutSection.tsx`
