
## Plan: Fade inferior en imagen de "Recibe tu Mensaje Angelical"

Aplicar el mismo efecto `mask-fade-bottom` a la imagen de la sección Lead Magnet, eliminando el padding/wrapper que corta visualmente el fade para que se funda limpiamente con el fondo de la card.

### Cambios en `src/components/LeadMagnetSection.tsx`

En el bloque de la imagen (columna derecha):
- La imagen ya tiene `mask-fade-bottom` aplicado, pero está envuelta con `p-6` que reduce el área visible y el fade no llega al borde de la card.
- Quitar el `p-6` del `<img>` para que el fade se extienda hasta el final del contenedor, igual que en AboutSection.
- Mantener `object-contain`, `w-full h-full` y el wrapper `aspect-[3/4]`.

```tsx
<img
  src={ludivinaCards}
  alt="Mensaje angelical"
  className="relative z-10 w-full h-full object-contain mask-fade-bottom"
/>
```

### Resultado esperado
La imagen de las cartas/mensaje angelical se desvanece suavemente hacia abajo, fundiéndose con el fondo crema de la card — mismo efecto visual que la foto de Ludivina en "Conoce a Ludivina" y en el Hero.

### Archivos
- Modificar: `src/components/LeadMagnetSection.tsx`
