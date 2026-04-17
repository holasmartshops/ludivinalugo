
## Plan: reemplazar iconos de "Esto es para ti" con las imágenes del ZIP

No puedo abrir el `.zip` en modo plan (falta `lov-copy` aquí). En modo default lo extraeré y lo aplicaré.

### Pasos al pasar a default

1. **Extraer el ZIP** `list-Lista_8-2026-04-17_22_54.zip` a `src/assets/for-whom/` y verificar que contenga 5 imágenes (una por bullet). Si trae más/menos, te aviso y ajustamos.
2. **Renombrar** los archivos a nombres semánticos que coincidan con cada texto, por ejemplo:
   - `claridad.png` → "Sientes que necesitas claridad en tu camino"
   - `proteccion.png` → "Buscas protección y paz interior"
   - `angeles.png` → "Quieres conectar con tus ángeles guardianes"
   - `transicion.png` → "Atraviesas un momento de transición o duelo"
   - `abundancia.png` → "Deseas atraer abundancia con propósito divino"
3. **QA visual** rápido (convertir cada imagen a thumbnail y verificar transparencia/calidad).

### Cambios en `src/components/ForWhomSection.tsx`

- Eliminar imports de `lucide-react` (`Sparkles, Heart, Compass, Shield, Sun`).
- Importar las 5 imágenes desde `@/assets/for-whom/...`.
- Cambiar el array `items` de `{ icon, text }` a `{ image, text }`.
- En el render, reemplazar `<Icon className="... w-7 h-7 text-gold" />` por `<img src={image} alt="" className="shrink-0 w-12 h-12 object-contain" />` (un poco más grandes que el icono lucide para que se aprecien). Mantener el resto del layout (frame angelical, tipografía, espaciado) sin cambios.

### Suposiciones

- Las imágenes del ZIP son los 5 iconos angelicales/decorativos en PNG con fondo transparente, en el mismo orden que los bullets. Si el orden no coincide lo reordeno tras inspeccionarlas.

### Archivos a modificar
- `src/components/ForWhomSection.tsx`
- Nuevos: `src/assets/for-whom/*.png` (5 archivos extraídos del ZIP)
