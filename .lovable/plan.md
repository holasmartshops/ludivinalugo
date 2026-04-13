

## Video de Fondo en Hero Section (Solo Desktop)

### Objetivo
Usar el video `.webm` subido como fondo de la hero section, reemplazando la imagen estática `hero-bg.png` **únicamente en pantallas desktop** (lg: 1024px+). En móvil y tablet se mantiene la imagen estática actual.

### Cambios en `src/components/HeroSection.tsx`

**1. Copiar el video al proyecto**
- `user-uploads://freepik_unicamente-las-luces-brillando-y-parpadeando-divin_kling_720p_3-4_24fps_29746.webm` → `src/assets/hero-bg-video.webm`

**2. Agregar elemento `<video>` para desktop**
- Añadir un `<video>` con clases `hidden lg:block absolute inset-0 w-full h-full object-cover`
- Atributos: `autoPlay`, `loop`, `muted`, `playsInline` (necesarios para autoplay en navegadores)
- El video se posiciona detrás del contenido (z-index bajo), igual que la imagen de fondo actual

**3. Mantener la imagen estática para móvil/tablet**
- El div con `background-image: hero-bg.png` se muestra con `lg:hidden` para que solo aparezca en pantallas pequeñas
- En desktop el video lo reemplaza visualmente

**4. El fade inferior y el contenido no cambian**
- El gradient `to-dark` en el fondo sigue funcionando sobre el video
- La imagen de Ludivina y el texto se mantienen igual

### Estructura resultante
```text
<section>
  <div class="lg:hidden ...">       ← imagen estática (móvil/tablet)
  <video class="hidden lg:block ..."> ← video fondo (desktop)
  <div class="fade z-20">            ← gradient inferior (sin cambios)
  <div class="contenido z-10">       ← grid con foto + texto (sin cambios)
</section>
```

### Consideración de rendimiento
- El video es 720p y `.webm` (formato eficiente), no debería impactar rendimiento
- `muted` es obligatorio para que el autoplay funcione en todos los navegadores

