
## Plan: Ajustes a cards de "Esto es para ti"

Actualizar `src/components/ForWhomSection.tsx`:

1. **Cards más grandes**: Cambiar `max-w-4xl` → `max-w-5xl` y el aspect ratio `aspect-[4/1.2]` → `aspect-[4/1.4]` para darles más altura. Aumentar tamaño de texto a `text-base md:text-lg` e icono a `w-7 h-7`.

2. **Último card centrado**: Como son 5 items en grid de 2 columnas, el 5º queda solo en la última fila a la izquierda. Aplicar al último item: `sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto` para que ocupe el ancho de una columna pero centrado en el grid completo.

3. **Color de texto**: Cambiar `text-dark` → `text-foreground` (token oscuro preestablecido del design system, definido en `index.css`/`tailwind.config.ts`). Mantener `font-cinzel font-semibold`.

El icono dorado y el marco angelical permanecen igual.
