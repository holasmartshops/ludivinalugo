

## Diagnóstico y corrección de la Hero Section

### Problemas detectados

1. **Video de fondo no se muestra**: El `<video>` está presente pero el fondo aparece blanco/vacío. Probablemente el video no se está reproduciendo correctamente en el preview.
2. **Imagen de Ludivina no aparece**: La columna izquierda con `hidden lg:flex` debería mostrarse a 1382px, pero no se ve en el screenshot.
3. **Logo no visible**: El `<img>` del logo está ahí pero podría ser transparente sobre fondo claro, haciéndolo invisible.

### Plan de corrección

**1. Asegurar que el video se reproduce (`HeroSection.tsx`)**
- Agregar `useRef` y `useEffect` para forzar el play del video programáticamente (algunos navegadores bloquean autoplay incluso con `muted`)
- Agregar un fallback de fondo oscuro en el `<section>` para que si el video falla, el contenido siga siendo legible: `bg-dark`

**2. Agregar el fade de transición del loop del video** (del plan anterior aprobado)
- Escuchar `timeupdate`: cuando `currentTime >= duration - 1`, hacer opacity → 0
- Escuchar `playing`: restaurar opacity → 1  
- Clases CSS: `transition-opacity duration-1000`

**3. Verificar visibilidad de la imagen de Ludivina**
- Confirmar que la imagen se muestra correctamente y no está oculta por z-index

**4. Corregir el warning de ref en consola**
- El error "Function components cannot be given refs" sugiere que `Index.tsx` o algún componente padre está pasando un ref a `HeroSection`. Verificar y agregar `forwardRef` si es necesario.

### Cambios en archivo

Solo se modifica `src/components/HeroSection.tsx`:
- Importar `useRef`, `useEffect`, `forwardRef` de React
- Envolver el componente en `forwardRef`
- Crear `videoRef` para el `<video>`
- `useEffect` que llame `videoRef.current.play()` al montar y maneje el fade del loop
- Agregar `bg-dark` al `<section>` como color de fondo base
- Agregar `transition-opacity duration-1000` al video

