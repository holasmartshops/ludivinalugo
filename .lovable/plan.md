

## Ajustes a la imagen de Ludivina en Hero Section

### Cambios en `src/components/HeroSection.tsx`

**1. Eliminar el fade negro individual de la imagen**
- Quitar el div overlay con `bg-gradient-to-t from-dark to-transparent` que está sobre la imagen (línea 41)

**2. Hacer la imagen más grande y que llegue al fondo de la hero section**
- Cambiar el contenedor de la imagen de `w-72 md:w-80 lg:w-96` a algo más grande como `w-80 md:w-96 lg:w-[28rem]`
- Alinear la imagen al fondo de la sección usando `items-end` y quitar el padding bottom para que la imagen toque el borde inferior
- La imagen debe extenderse hasta el final de la hero section

**3. El fade general de la hero section (línea 18) cubre tanto el fondo como la imagen**
- Ya existe el fade general en la parte inferior (`h-48 bg-gradient-to-b from-transparent to-dark`), este se encargará de difuminar tanto el fondo como la imagen de Ludivina
- Aumentar el z-index del fade general para que esté por encima de la imagen, o posicionar la imagen detrás del fade

### Estructura resultante
- Foto de Ludivina sin fade propio, más grande, tocando el borde inferior
- El fade de la hero section (compartido) oculta la parte inferior de todo: fondo + imagen

