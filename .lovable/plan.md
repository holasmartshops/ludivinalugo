A continuación tienes el inventario completo de **todos los textos placeholder** de la landing page (`/`), agrupados por sección en el orden en que aparecen. Para cada uno indico:

- **Texto actual**
- **Caracteres actuales** (referencia)
- **Máx. recomendado** (límite para que el diseño no se rompa en mobile/desktop)

Cuando me pases los textos finales, los reemplazo todos de una vez.

---

## 1. Header / Navegación (`Header.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 1.1 | Link nav | `Inicio` | 6 | 10 |
| 1.2 | Link nav | `Servicios` | 9 | 12 |
| 1.3 | Link nav | `Tienda` | 6 | 10 |
| 1.4 | Link nav | `Sobre Mí` | 8 | 12 |
| 1.5 | Link nav | `Contacto` | 8 | 12 |
| 1.6 | Botón CTA desktop | `Reserva` | 7 | 10 |
| 1.7 | Botón CTA menú móvil | `Reserva tu Lectura` | 18 | 24 |

---

## 2. Hero Section (`HeroSection.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 2.1 | Eyebrow | `✦ Guía Espiritual Angelical` | 28 | 35 |
| 2.2 | H1 (2 líneas) | `Mensajes del cielo` / `para tu alma` | 18 + 12 | 22 + 18 por línea |
| 2.3 | Subtítulo | `Descubre los mensajes que tus ángeles tienen para ti. Te acompaño en tu camino hacia la paz interior, la claridad y la protección divina.` | 138 | 180 |
| 2.4 | Botón primario | `Reserva tu Lectura` | 18 | 24 |
| 2.5 | Botón secundario | `Ver Amuletos` | 12 | 18 |

---

## 3. Featured In Strip (`FeaturedInStrip.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 3.1 | Eyebrow | `Como me han visto` | 17 | 30 |
| 3.2–3.7 | 6 medios | `Tv Azteca`, `Milenio`, `El Universal`, `Imagen Radio`, `Reforma`, `TV Notas` | — | 14 c/u |

> Indica si quieres cambiar la lista de medios o agregar/quitar.

---

## 4. About Section (`AboutSection.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 4.1 | Eyebrow | `✦ Conoce a Ludivina` | 19 | 30 |
| 4.2 | H2 | `Un canal entre el cielo y tu alma` | 33 | 45 |
| 4.3 | Párrafo 1 | `Desde niña, Ludivina escuchó susurros que otros no podían oír. A los doce años tuvo su primer encuentro consciente con un ángel guardián, un instante que marcó para siempre su camino.` | 184 | 230 |
| 4.4 | Párrafo 2 | `Con más de quince años de trayectoria en angelología, numerología sagrada y terapias energéticas, ha guiado a miles de personas a través de lecturas, eventos y rituales de bendición de amuletos.` | 195 | 230 |
| 4.5 | Párrafo 3 | `Su misión: tender un puente entre el cielo y la tierra, recordándote que nunca caminas sola.` | 92 | 140 |
| 4.6 | Pilar 1 | `Devoción` | 8 | 12 |
| 4.7 | Pilar 2 | `Servicio` | 8 | 12 |
| 4.8 | Pilar 3 | `Luz` | 3 | 12 |
| 4.9 | Botón | `Conoce mi historia` | 18 | 24 |

---

## 5. Stats Bar (`StatsBar.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 5.1 | Stat 1 número | `15+` | 3 | 6 |
| 5.2 | Stat 1 label | `Años guiando almas` | 18 | 24 |
| 5.3 | Stat 2 número | `2,500+` | 6 | 8 |
| 5.4 | Stat 2 label | `Personas ayudadas` | 17 | 24 |
| 5.5 | Stat 3 número | `500+` | 4 | 8 |
| 5.6 | Stat 3 label | `Testimonios de luz` | 18 | 24 |

---

## 6. Lead Magnet (`LeadMagnetSection.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 6.1 | Eyebrow | `✦ Regalo gratuito` | 17 | 30 |
| 6.2 | H2 | `Recibe tu Mensaje Angelical Semanal` | 35 | 45 |
| 6.3 | Párrafo | `Cada domingo, una guía angelical directa a tu correo: meditaciones, afirmaciones y mensajes canalizados para iluminar tu semana.` | 128 | 180 |
| 6.4 | Placeholder input | `tu@correo.com` | 13 | 20 |
| 6.5 | Botón | `Recibir mensaje` | 15 | 22 |
| 6.6 | Disclaimer | `Sin spam. Cancela cuando quieras.` | 33 | 50 |
| 6.7 | Toast éxito | `¡Listo! Pronto recibirás tu mensaje angelical.` | 46 | 60 |

---

## 7. Video Section (`VideoSection.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 7.1 | Eyebrow | `✦ En video` | 10 | 25 |
| 7.2 | H2 | `Conoce mi mensaje en mis propias palabras` | 41 | 50 |
| 7.3 | Párrafo | `Mira mi presentación y descubre cómo trabajo con la energía angelical para guiarte en tu despertar espiritual.` | 110 | 160 |
| 7.4 | Botón | `Reserva tu lectura` | 18 | 24 |

---

## 8. Need Finder — Buscador de amuletos (`NeedFinder.tsx` + `data/needs.ts`)

### Encabezado
| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 8.1 | Eyebrow | `✦ ¿Es para ti?` | 14 | 25 |
| 8.2 | H2 | `¿Qué estás buscando?` | 20 | 35 |
| 8.3 | Subtítulo | `Toca lo que sientes y te mostramos tu amuleto.` | 46 | 70 |
| 8.4 | Hint inferior | `↑ Toca una necesidad para descubrir tu amuleto` | 46 | 60 |
| 8.5 | Título dinámico panel | `Amuletos para {necesidad}` | — | — |

### 9 chips de necesidades — cada una con `label` (desktop) y `shortLabel` (mobile)
**Máx. recomendado:** `shortLabel` ≤ 14 c · `label` ≤ 38 c

| # | Slug | shortLabel actual (mobile) | label actual (desktop) |
|---|---|---|---|
| 8.6 | proteccion | `Protección` (10) | `Protección y defensa espiritual` (31) |
| 8.7 | salud | `Salud` (5) | `Salud, sanación y enfermedades` (30) |
| 8.8 | viajes | `Viajes` (6) | `Viajes, caminos y animales` (26) |
| 8.9 | familia | `Familia` (7) | `Hijos, embarazo y familia` (25) |
| 8.10 | estudios | `Estudios` (8) | `Estudios, sabiduría y conocimiento` (34) |
| 8.11 | trabajo | `Trabajo` (7) | `Trabajo, dinero y prosperidad` (29) |
| 8.12 | amor | `Amor` (4) | `Amor, pareja y matrimonio` (25) |
| 8.13 | tramites | `Trámites` (8) | `Trámites, contratos y documentos` (32) |
| 8.14 | paz | `Paz mental` (10) | `Paz mental, perdón y liberación` (31) |

---

## 9. Footer (`Footer.tsx`)

| # | Elemento | Texto actual | Actual | Máx. recomendado |
|---|---|---|---|---|
| 9.1 | Marca | `Ludivina Lugo` | 13 | 20 |
| 9.2 | Tagline marca | `Angelóloga y guía espiritual. Conectando almas con la luz divina.` | 65 | 100 |
| 9.3 | Título col. | `Servicios` | 9 | 14 |
| 9.4 | Link | `Lectura de Ángeles` | 18 | 26 |
| 9.5 | Link | `Guías Espirituales` | 18 | 26 |
| 9.6 | Link | `Amuletos Sagrados` | 17 | 26 |
| 9.7 | Título col. | `Legal` | 5 | 14 |
| 9.8 | Link | `Aviso de Privacidad` | 19 | 26 |
| 9.9 | Link | `Términos y Condiciones` | 22 | 26 |
| 9.10 | Link | `Política de Cookies` | 19 | 26 |
| 9.11 | Título col. | `Newsletter` | 10 | 14 |
| 9.12 | Texto newsletter | `Mensajes angelicales en tu correo.` | 34 | 50 |
| 9.13 | Placeholder | `tu@correo.com` | 13 | 20 |
| 9.14 | Botón | `Suscribirme` | 11 | 18 |
| 9.15 | Toast éxito | `¡Bienvenida a la luz angelical!` | 31 | 50 |
| 9.16 | Copyright | `© {año} Ludivina Lugo. Todos los derechos reservados.` | — | 70 |

---

## 🔎 Notas

- La sección **Servicios** (`ServicesSection.tsx`) y **Testimonios** (`TestimonialsSection.tsx`) están definidas pero **no están montadas** en `Index.tsx` actualmente. Si quieres incluirlas, dímelo y agrego sus textos al inventario.
- Los nombres de productos y descripciones de la **tienda** están en `src/data/products.ts` (no son parte de la landing) — si los quieres también, los listo aparte.
- Los **eyebrows** que empiezan con `✦` mantienen ese símbolo decorativo; al pasarme el texto puedes incluirlo o lo agrego yo.

---

## Cómo enviarme los textos

Lo más fácil: respóndeme con el número de cada elemento y el texto nuevo, ej.:

```
2.2 → "Tu nuevo H1 línea 1 / línea 2"
2.3 → "Nuevo subtítulo..."
6.2 → "..."
```

O si prefieres, pásame todo en un solo bloque y yo lo mapeo. Cuando confirmes, hago todos los reemplazos en una sola pasada.