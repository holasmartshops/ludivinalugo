
## Plan: Navbar sólido blanco con logo

Actualizar `src/components/Header.tsx`:

**Cambios:**
1. **Fondo sólido blanco**: Cambiar el header a `bg-white` con un sutil `border-b border-border` y `shadow-sm` para separarlo del contenido.
2. **Logo a la izquierda**: Importar `ludivina-logo.png` desde `src/assets/` y mostrarlo como `<Link to="/">` en el lado izquierdo (altura ~40px, `h-10 w-auto`).
3. **Links centrados (desktop)**: Mantener los mismos 5 links (Inicio, Servicios, Tienda, Sobre Mí, Contacto) centrados. Ajustar el color del texto a `text-foreground hover:text-gold` (ya no es sobre fondo oscuro, así que el dorado claro se perdería sobre blanco — usar tinta violeta del foreground con hover dorado).
4. **Iconos a la derecha (mobile + desktop)**: Mantener carrito y menú hamburguesa (mobile) tal cual, ajustando colores a `text-foreground hover:text-gold` para contraste sobre blanco.
5. **Layout**: Reestructurar el contenedor con `flex justify-between`: logo (izquierda) | nav links centrados (desktop, `absolute` o `flex-1 justify-center`) | iconos (derecha).
6. **Menú móvil desplegable**: Cambiar fondo de `bg-dark/90` a `bg-white` con texto `text-foreground`.

**Estructura final:**
```text
[Logo]        [Inicio Servicios Tienda Sobre Contacto]        [🛒] [☰]
```

El comportamiento de auto-ocultar al hacer scroll hacia abajo se mantiene.

