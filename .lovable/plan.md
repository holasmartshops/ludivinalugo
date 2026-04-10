

## Rediseño Sección "Sobre Mí"

### Cambios

**1. Fondo oscuro consistente**
- Cambiar `bg-dark-card` por `bg-dark` para que coincida con el resto de la página

**2. Nueva estructura de 2 columnas**
- **Columna izquierda**: Logo de Ludivina Lugo (placeholder SVG con texto estilizado por ahora) + descripción debajo
- **Columna derecha**: Silueta grande de persona (icono `User` de Lucide) con efecto de difuminado (gradient fade) en la parte inferior

**3. Eliminar formulario**
- Quitar todo el bloque del lead magnet (email, botón, texto)
- Eliminar imports de `useState`, `Send`
- Renombrar componente a `AboutSection` para mayor claridad

**4. Efecto de silueta**
- Icono `User` grande (~300px) en color `cream/20`
- Gradient overlay de `bg-dark` → transparente en la parte inferior para crear el efecto difuminado

### Archivo a modificar
- `src/components/AboutAndLeadMagnet.tsx` — reescritura completa del componente

