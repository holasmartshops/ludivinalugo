
## Plan: Ajustes a "Esto es para ti"

### Cambios en `src/components/ForWhomSection.tsx`

1. **Intercambiar iconos** entre "ángeles guardianes" y "transición/duelo":
   - "Quieres conectar con tus ángeles guardianes" → usar `iconTransicion` (la pluma actual va mejor con ángeles).
   - "Atraviesas un momento de transición o duelo" → usar `iconAngeles` (las alas actuales van mejor con duelo/tránsito).

2. **Iconos más grandes**: `w-12 h-12` → `w-16 h-16`.

3. **Iconos más a la derecha + balance icono/texto**: actualmente el contenedor usa `flex items-center justify-center gap-4 ... px-12` lo que centra el conjunto. Cambiar a un layout de dos columnas donde el icono se alinea hacia el lado izquierdo del texto pero desplazado a la derecha del marco:
   - Cambiar `justify-center` → `justify-start`.
   - Aumentar padding izquierdo: `px-12` → `pl-20 pr-10` (empuja el icono hacia la derecha respecto al borde del marco angelical).
   - Ajustar `gap-4` → `gap-5` para dar respiro entre icono y texto.
   - Cambiar `text-center` del contenedor → `text-left` para que el texto fluya naturalmente desde el icono.

### Archivo a modificar
- `src/components/ForWhomSection.tsx`
