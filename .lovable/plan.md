

## Plan: Soporte completo de safe area en iOS

Dos cambios puntuales:

### 1. `index.html`
Agregar `viewport-fit=cover` al meta tag de viewport existente:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### 2. `src/components/Header.tsx`
Agregar `pt-[env(safe-area-inset-top)]` al `<header>` para que el contenido no quede oculto detrás del notch mientras el fondo llega hasta arriba.

