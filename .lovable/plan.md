

## Plan: Ajustes finos del hero (mobile)

### 1. Pegar eyebrow y subtítulo al logo
En `HeroSection.tsx`, reducir márgenes alrededor del logo:
- Eyebrow ("Guía Espiritual Angelical…"): cambiar `mb-6` → `mb-2` (gap eyebrow→logo).
- Logo `<img ludivinaLogo>`: cambiar `mb-6` → `mb-2` (gap logo→subtítulo).
- Subtítulo ("Lectura de Ángeles…"): mantener pero reducir `mb-6 lg:mb-8` → `mb-4 lg:mb-8` para que en mobile quede compacto y en desktop no se altere.

### 2. Fade a transparente (no a color de fondo)
Actualmente el overlay del bloque mobile usa `bg-gradient-to-b from-transparent to-dark`, que funde la imagen contra el color `--dark` (lavanda sólido). En desktop NO hay overlay sobre la imagen — la transición se logra porque la imagen PNG ya tiene fondo transparente y se apoya en el fondo del hero.

Para replicar ese comportamiento en mobile:
- **Eliminar el `<div>` overlay** con `bg-gradient-to-b from-transparent to-dark` que está sobre la imagen.
- En su lugar, aplicar un `mask-image` (CSS mask) sobre la `<img>` de Ludivina mobile para que el píxel se vuelva transparente en el tercio inferior:
  ```
  style={{
    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  }}
  ```
- Resultado: la foto se desvanece a opacidad 0 real (deja ver el fondo del hero, sea imagen celestial o video), igual que la versión desktop que confía en la transparencia del PNG.

### Archivo a modificar
- `src/components/HeroSection.tsx` (único)

### Lo que NO cambia
- Layout desktop, fondo, copys, botones, paleta.

