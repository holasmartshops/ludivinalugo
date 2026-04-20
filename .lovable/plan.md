
## Plan: Reemplazar cards `angelFrame` por cards Tailwind en "Esto es para ti si…"

Sustituir el PNG decorativo `angelFrame` que envuelve cada item por un card construido con Tailwind, manteniendo el mismo lenguaje visual de la página (fondo crema/blanco, borde dorado sutil, esquinas redondeadas, sombra elevada, acento dorado). Los iconos PNG actuales (`claridad`, `proteccion`, `angeles`, `transicion`, `abundancia`) se conservan tal cual.

### Cambios en `src/components/ForWhomSection.tsx`

**Quitar:**
- Import de `angelFrame`.
- El `<img>` decorativo absoluto que pinta el marco angelical.
- Las clases `aspect-[4/1.4]`, `pl-14`, `pl-20` (padding extra que existía solo para esquivar la decoración del PNG).

**Reemplazar el wrapper de cada item por un card Tailwind con el estilo de la página:**

```tsx
<div className="group relative bg-card rounded-2xl border border-gold/30 shadow-[var(--shadow-elevated)] p-5 md:p-7 flex items-center gap-4 md:gap-6 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_4px_24px_hsl(295_35%_22%/0.12)]">
  {/* Acento dorado lateral */}
  <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-gold/70" aria-hidden="true" />
  
  <img
    src={image}
    alt=""
    aria-hidden="true"
    className="shrink-0 w-12 h-12 md:w-16 md:h-16 object-contain"
  />
  <p className="font-display font-medium text-secondary leading-snug md:leading-tight text-base md:text-xl">
    {text}
  </p>
</div>
```

**Detalles de estilo (consistentes con el resto de la página):**
- `bg-card` (blanco) sobre el fondo crema de la sección.
- `rounded-2xl` igual que `.card-elevated`.
- Borde dorado sutil `border-gold/30` que se intensifica en hover (mismo patrón de `.btn-ghost` y `.testimonial-card`).
- Sombra `--shadow-elevated` ya definida en el design system.
- Barra dorada lateral de 3px (mismo recurso visual que `.testimonial-card`, que usa `border-left: 3px solid hsl(var(--gold))`) — refuerza la coherencia con los testimonios.
- Hover: borde más dorado + sombra más profunda en plum, transición suave 300ms.

**Layout del grid:** se conserva `grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto` y la lógica del último item centrado en `sm:col-span-2`.

### Resultado esperado
- 5 cards limpios, en blanco con borde dorado sutil y barra dorada izquierda — visualmente alineados con los testimonios y los botones de la página.
- Los 5 iconos PNG (`claridad`, `proteccion`, `angeles`, `transicion`, `abundancia`) intactos.
- Hover sutil que refuerza el dorado, coherente con el resto del sitio.
- Sin dependencia del PNG `angelFrame`, layout más predecible y responsive.

### Archivos
- Modificar: `src/components/ForWhomSection.tsx`
