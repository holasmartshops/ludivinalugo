

## Fade-out en loop del video de fondo

### Enfoque
Usar un `useRef` + `useEffect` para escuchar el evento `timeupdate` del video. Cuando falten ~1 segundo para terminar, aplicar una transición de opacidad a 0. Al reiniciar el loop (evento `seeking` o `playing`), restaurar la opacidad a 1.

### Cambios en `src/components/HeroSection.tsx`

1. **Imports**: Agregar `useRef`, `useEffect` de React
2. **Ref**: Crear `videoRef` para el elemento `<video>`
3. **useEffect**: 
   - Escuchar `timeupdate`: cuando `currentTime >= duration - 1`, hacer `style.opacity = '0'`
   - Escuchar `playing`: restaurar `style.opacity = '1'`
4. **Video element**: Agregar `ref={videoRef}` y clase `transition-opacity duration-1000` para la transición CSS suave
5. Mantener `loop`, `autoPlay`, `muted`, `playsInline` sin cambios

### Resultado
El video se desvanece suavemente al final de cada ciclo y reaparece al comenzar el siguiente, creando una transición elegante entre loops.

