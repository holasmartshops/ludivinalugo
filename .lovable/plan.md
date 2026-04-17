
## Plan: Ajustar tamaños mobile en "Esto es para ti"

### Cambios en `src/components/ForWhomSection.tsx`

En el `<div>` interno del card (actualmente `pl-20 pr-10 py-6 gap-5`):
- Padding/gap responsivos: `pl-14 pr-6 py-4 gap-3 md:pl-20 md:pr-10 md:py-6 md:gap-5` → en mobile el icono queda más cerca del borde izquierdo proporcionalmente al frame más pequeño, manteniendo el mismo balance visual que desktop.

En el `<img>` del icono (actualmente `w-16 h-16`):
- `w-11 h-11 md:w-16 md:h-16` → iconos más pequeños en mobile.

En el `<p>` del texto (actualmente `text-base md:text-lg`):
- `text-xs md:text-lg leading-snug md:leading-relaxed` → texto notablemente más pequeño en mobile para que quepa cómodo dentro del marco angelical sin desbordar.

### Archivo
- `src/components/ForWhomSection.tsx`
