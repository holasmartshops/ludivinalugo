
## Plan: Fondo de nubes en Hero con opacidad baja y fade inferior

### 1. Asset
- Copiar `user-uploads://sunrise-sea-clouds.jpg` → `src/assets/hero-clouds.jpg`

### 2. `src/components/HeroSection.tsx`
Agregar capa de fondo dentro del `<section>`, antes del `<ZodiacWatermark />`:

```tsx
<img
  src={heroClouds}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 w-full h-full object-cover opacity-40 mask-fade-bottom pointer-events-none"
/>
```

- `opacity-40` para que las nubes se vean suaves como en la referencia (rosados/durazno apenas visibles)
- `mask-fade-bottom` reutiliza la utilidad existente para que la imagen se desvanezca a 0 en la parte inferior y se funda con el background crema
- `object-cover` cubre todo el hero
- Importar el asset arriba: `import heroClouds from "@/assets/hero-clouds.jpg";`

El watermark zodiacal y el contenido (texto + foto de Ludivina) quedan por encima gracias al `relative z-10` ya existente en el contenedor de contenido. El watermark también queda visible sobre las nubes (su contenedor es `absolute inset-0` sin z explícito, pero al ir después del `<img>` en el DOM queda encima).

### Archivos
- Crear: `src/assets/hero-clouds.jpg`
- Modificar: `src/components/HeroSection.tsx`
