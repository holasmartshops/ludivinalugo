

## Carrusel de Productos — Debajo de Servicios

### Que se construye
Un carrusel interactivo de 7 amuletos entre ServicesSection y StatsBar, inspirado en la referencia "Celestial Amulet". El producto central aparece grande y destacado, los laterales se ven mas pequenos y oscurecidos. Flechas izquierda/derecha debajo de la imagen central para navegar. El nombre del producto aparece encima de la imagen activa. Boton "Ver Catalogo" debajo del carrusel.

### Productos (7 amuletos placeholder)
1. Ala de Angel — usando la imagen subida (`Diseño_sin_título_14.png`)
2. Escudo Celestial
3. Estrella Divina
4. Llave del Arcangel
5. Cruz Angelical
6. Pluma Sagrada
7. Ojo Protector

Todos usaran la misma imagen placeholder (el ala de angel) por ahora.

### Diseno visual
- Fondo negro (`bg-dark`), consistente con las secciones alrededor
- Titulo de seccion: "Amuletos Sagrados" en Cinzel dorado
- Carrusel horizontal: el item central se muestra a escala 1.0, con brillo completo. Items laterales a escala ~0.75, con opacity reducida y un overlay oscuro
- Nombre del producto en Cinzel dorado aparece sobre la imagen central
- Precio placeholder debajo del nombre
- Dos flechas (`←` `→`) centradas debajo del producto central
- Boton "Ver Catalogo" dorado outline debajo de todo
- Transiciones suaves con CSS transforms

### Implementacion tecnica
- Nuevo componente `src/components/ProductCarousel.tsx`
- Copiar la imagen del ala a `src/assets/amuleto-placeholder.png`
- Logica de carrusel custom con useState (indice activo), sin dependencia de Embla — mas control sobre el efecto de escala/opacidad
- Calcular posicion de cada item relativa al indice activo para aplicar transforms
- Agregar el componente en `Index.tsx` entre `ServicesSection` y `StatsBar`

### Archivos
- **Crear**: `src/components/ProductCarousel.tsx`
- **Copiar**: `user-uploads://Diseño_sin_título_14.png` → `src/assets/amuleto-placeholder.png`
- **Modificar**: `src/pages/Index.tsx` — insertar `<ProductCarousel />` despues de `<ServicesSection />`

