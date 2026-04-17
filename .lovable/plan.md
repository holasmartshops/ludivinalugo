

## Plan: Nueva paleta cromática "Cielo angelical luminoso"

Las referencias muestran dos mundos: nubes celestiales claras (imagen 7, la que inspira el hero) y violetas/azul-noche místicos (imágenes 6 y 8). El cliente pidió **no tonos oscuros**, así que la paleta debe vivir en el **lado luminoso**, tomando del violeta/azul solo la temperatura, no la oscuridad.

### Círculo cromático propuesto

Trabajamos con una paleta análoga **lavanda → crema → dorado**, todos en alta luminosidad:

```
Base luminosa (fondos)
  cream-white   #FBF8F2   crema casi blanco — fondo principal
  cloud         #F0EAF5   lavanda nube — secciones alternas
  mist          #E4DCEC   lavanda neblina — cards/superficies elevadas

Acentos místicos (temperatura violeta sin oscuridad)
  lavender      #C9B8DD   lavanda media — bordes, divisores
  amethyst-soft #9C82B8   amatista suave — texto secundario, iconos
  amethyst-deep #6B4E8A   amatista profundo — solo para texto principal y CTAs (NO fondos)

Acentos cálidos (mantener identidad)
  gold          #C9A961   dorado actual — sin cambios
  gold-light    #E2C97A
  gold-dark     #A88A3F   para contraste sobre crema

Texto
  ink           #3A2F4A   tinta violeta-tinta (reemplaza el casi-negro) — texto principal
  ink-soft      #6B5F7A   texto secundario
```

### Mapeo a tokens de `src/index.css`

Reemplazos directos (no hay que tocar componentes, todo se propaga):

```
--background    → #FBF8F2  (ya estaba claro, se refina)
--foreground    → #3A2F4A  (de casi negro a tinta violeta)
--dark          → #F0EAF5  (¡el gran cambio! deja de ser oscuro)
--dark-card     → #E4DCEC  (cards sobre lavanda)
--dark-border   → #C9B8DD  (bordes lavanda)
--cream         → #3A2F4A  (invertir: "cream" se usa como texto sobre fondos "dark", ahora dark es claro → cream debe ser oscuro para contrastar)
--cream-dark    → #6B5F7A
--muted         → #C9B8DD
--muted-foreground → #6B5F7A
--border / --input → #D8CCE5
--gold          → sin cambios (sigue 43 50% 54%)
--primary       → gold (sin cambios)
--secondary     → amatista profundo #6B4E8A (para CTAs oscuros sobre crema)
```

Sidebar: invertir también (era oscuro, ahora claro).

### Tema iOS
- `<meta name="theme-color">` de `#0A0A0A` → `#FBF8F2`.

### Sobre el `gold-glow` (tu pregunta clave)

El glow actual es `text-shadow` dorado **sobre fondo oscuro** — funciona porque la luz brilla contra negro. Sobre crema **se va a perder casi por completo** (no hay contraste para que el halo se vea).

Tres opciones, elige una:

1. **Conservar glow dorado tal cual**: se verá sutilísimo, casi imperceptible. Honesto pero pierde el efecto "wow".
2. **Glow violeta-amatista** (recomendado): cambiar el `text-shadow` a `hsl(270 30% 45% / 0.35)`. Se ve elegante, místico, y SÍ contrasta sobre crema. Mantiene la sensación de "aura divina".
3. **Doble glow (dorado + halo blanco)**: `text-shadow: 0 0 20px gold/0.4, 0 0 40px white/0.6`. Efecto "luz celestial". Más dramático, muy alineado con la imagen 7.

**Mi recomendación: opción 3** — encaja perfecto con la estética de nubes/luz divina del hero.

### Imagen del hero
- Fondo de estrellas (`stars-bg.png`) y video oscuro: pueden chocar con la nueva paleta clara. Plan: aplicar un **overlay crema/lavanda al 60-70%** sobre el video y stars para integrarlos. Sin reemplazar assets.
- Los degradados `from-dark to-transparent` seguirán funcionando (ahora fundirán a lavanda en vez de negro), efecto suave automático.

### Ajustes secundarios previstos
- Botones primarios oscuros (ej. `bg-foreground text-background` del hero): seguirán funcionando porque foreground/background se invierten coherentemente.
- Cards con `bg-dark-card/50`: ahora serán lavanda translúcido sobre stars — más etéreo.

### Archivos a modificar
- `src/index.css` — todos los tokens HSL.
- `index.html` — `theme-color`.
- (opcional) overlay claro en `HeroSection.tsx` si el video se ve muy oscuro tras el cambio.

### Lo que NO cambia
- Tipografías (Cinzel + Outfit).
- Estructura de componentes.
- Dorado como color de marca.
- Layout y spacing.

### Decisiones que necesito de ti
1. ¿Glow opción 1, 2 o 3?
2. ¿Apruebas la paleta lavanda/crema/dorado o prefieres más peso del azul (azul-cielo en vez de lavanda)?

