# CLAUDE.md — Portafolio DAN · Art Design

> Contexto completo del proyecto para retomar en cualquier conversación.
> Última actualización: Junio 2025.

---

## Identidad del proyecto

**Cliente:** Dania García — diseñadora de imagen profesional, artista multidisciplinaria.  
**Marca:** `Art Design ✶ DAN`  
**Instagram:** @dania.garcia__  
**Teléfono:** (477) 843 683 8  
**Stack web:** Next.js + React (App Router) con Tailwind para estilos   
**Prototipo generado:** `dan_portfolio.html` — HTML standalone con assets embebidos en base64.

### Roles de DAN (en su propio orden de importancia)
1. Diseñadora de Imagen Profesional
2. Artista Multidisciplinaria
3. Directora de Arte
4. Directora Creativa
5. Event Planner
6. Videógrafa
7. Stylist

---

## Sistema de identidad visual

### Paleta de colores
```
--ink:    #0A0A0A   → fondo dominante en secciones oscuras
--chalk:  #F8F6F2   → fondo de secciones claras (hero, contacto)
--bone:   #EBEBEB   → variante neutra
--gold:   #C8A04A   → acento cálido (extraído de la fotografía cinematográfica)
```
El color real de la marca entra **solo por las fotografías**: candelas, amarillos, naranjas del maquillaje, azul/morado de iluminación en cortometrajes.

### Tipografía
| Rol | Fuente | Observación |
|-----|--------|-------------|
| Logo / secciones | **Manuscrita de DAN** (PNG/SVG extraído del PDF) | Nunca aproximar con ninguna fuente tipográfica |
| Headers bold | **Anton** (Google Fonts) | "PORTAFOLIO", números, sección strip |
| Subtítulos | **Crimson Pro italic** (Google Fonts) | "Cortometrajes", nombres de sección |
| Body / captions | **Space Mono** (Google Fonts) | Nav, metadatos, descripciones |

> **Regla crítica:** DAN escribe sus propias letras. La tipografía del logo y los labels de sección ("EVENTOS", "PASARELAS", "MAQUILLAJE", "VESTUARIO", "ARTE") son **imágenes extraídas del PDF**, no fuentes de ningún tipo.

### Elemento firma (signature)
La **mariposa monarca** — aparece en el logo "dan", en el marca "ART DESIGN", como SVG en la bio, como watermark en todas las páginas del PDF. Es el hilo visual de toda la identidad. Siempre presente, nunca protagónica.

---

## Fuente de materiales

**PDF original:** `ArtDesign___DAN.pdf` (35MB, 9 páginas, 1440×810pt cada una)
- Exportado de Canva
- Fuentes embebidas: Anton-Regular + TruetypewriterPolyglOTT
- Todas las imágenes son JPEG/PNG con perfiles ICC
- El logo "dan + mariposa" está en la página 1 como PNG con canal alpha (smask)

### Assets extraídos del PDF
Todos fueron procesados con PyMuPDF (fitz) y PIL.

| Asset | Descripción | Origen |
|-------|-------------|--------|
| `logo.png` | Logo "dan" + mariposa, fondo blanco | Página 1, crop 1180-1950px × 50-600px |
| `roles.png` | Roles escritos a mano (todos los títulos) | Página 1, zona inferior |
| `eventos.png` | "EVENTOS" vertical en su caligrafía, blanco sobre negro | Página 7, crop izquierdo |
| `bg_p4.jpg` | Galería cortometrajes (página 4 completa) | Página 4, 0.5x scale |
| `bg_p5.jpg` | Galería cortometrajes 2 (página 5) | Página 5, 0.5x scale |
| `bg_p6.jpg` | Galería cortometrajes 3 (página 6) | Página 6, 0.5x scale |
| `bg_p7.jpg` | Galería eventos y pasarelas (página 7) | Página 7, 0.5x scale |
| `bg_p8.jpg` | Maquillaje / vestuario / arte (página 8) | Página 8, 0.5x scale |
| `p2_bio.jpg` | Foto bio de fondo (página 2) | Página 2, 1.0x scale |
| `p3_mood.jpg` | Moodboard 4 columnas B&N (página 3) | Página 3, 1.0x scale |

> Para Next.js: mover todos los assets a `/public/assets/dan/` y usar `<Image>` de Next.js. Eliminar base64 del código — solo sirven en el prototipo HTML.

---

## Estructura del sitio

```
/ (single page, scroll continuo)
├── #hero          → Logo dan + mariposa / roles manuscritos
├── #bio           → Foto de fondo con parallax + texto superpuesto
├── #moodboard     → Página 3 del PDF (galería B&N, logo central)
├── #cortometrajes → Strip de sección + grid de stills cinematográficos
├── #eventos       → Split: "EVENTOS" vertical | galería pasarelas
├── #arte          → Strip + página 8 completa (maquillaje, vestuario, arte)
└── #contacto      → Logo + CTA + links
```

---

## Sistema de movimiento (Motion System)

Todas las curvas de animación son custom. **Nunca usar** `ease`, `ease-in-out`, `linear` de CSS.

```css
--ease-out:   cubic-bezier(0.16, 1, 0.3, 1);   /* reveals, entradas */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* hover sutil */
--ease-heavy:  cubic-bezier(0.76, 0, 0.24, 1);   /* transiciones de sección */
```

### Durations
- Fast (hover micro-interacciones): `0.3s`
- Mid (reveals de texto): `0.7s`
- Slow (reveals de imágenes, parallax): `1.1s`
- Crawl (page load, logo entry): `1.8s`

### Patrones implementados
1. **Scroll reveal** — IntersectionObserver en todos los `.reveal`, threshold 0.12, fire-once
2. **Stagger** — delay: 0s, 0.1s, 0.2s, 0.35s, 0.5s (no uniforme)
3. **Parallax bio** — translateY(progress × 28px) + scale(1.06), se activa con scroll
4. **Hover de galería** — `scale(1.04)` + `brightness(1.08)` con `overflow: hidden` en el contenedor
5. **Nav adaptive** — IntersectionObserver en secciones claras/oscuras para alternar `nav.dark`
6. **Progress bar** — línea de 2px en el borde superior, ancho = % de scroll

---

## Decisiones de diseño importantes

### Por qué HTML puro primero (prototipo), luego Next.js
El prototipo embebe assets en base64 para validar el diseño sin setup de servidor. Una vez validado, los assets van a `/public/` y el código se modulariza en componentes.

### Por qué no Tailwind ni frameworks UI
DAN tiene una estética muy propia. Los defaults de Tailwind (border-radius, sombras, espaciado) van en contra de la estética editorial. Todo CSS es custom, derivado del token system.

### Por qué las fotografías como fondos y no como contenido
El trabajo de DAN ES la fotografía y el audiovisual. Tratarlas como fondos (bg con overlay) da protagonismo sin anular el layout textual. La tensión entre imagen y texto es parte de la estética.
utiliza la skill
### Por qué la tipografía de DAN no se reemplaza
Cualquier fuente de "escritura a mano" de Google Fonts (Caveat, Sacramento, etc.) se ve como template. La caligrafía de DAN es su identidad. Se usa como imagen, no como fuente.

---

## Tipografía propia de DAN — estado del análisis

### Letras disponibles en el PDF (para crear una web font)
De las palabras identificadas en la caligrafía de DAN:

| Letras presentes | De qué palabra |
|-----------------|----------------|
| C, O, R, T, M, E, A, J, S | CORTOMETRAJES |
| D, I, S, Ñ, A, O, R, A | DISEÑADORA |
| P, A, S, R, E, L, A, S | PASARELAS |
| M, A, Q, U, I, L, L, A, J, E | MAQUILLAJE |
| V, E, S, T, U, A, R, I, O | VESTUARIO |
| E, V, E, N, T, O, S | EVENTOS |
| A, R, T, E | ARTE |

**Cobertura estimada:** ~22 letras únicas del español (~65% del abecedario básico).  
**Letras faltantes:** B, F, G, H, K, W, X, Y, Z (y algunas mayúsculas menos comunes).

### Proceso para crear la fuente (si DAN quiere completarla)
1. **Inkscape** (gratis) → Importar PDF → Seleccionar texto como objeto → *Path › Object to Path* → exportar cada letra como SVG
2. **Glyphr Studio** (glyphrstudio.com, gratis, en browser) → Importar SVG por glifo → ajustar baseline/x-height/kerning → exportar `.woff2`
3. DAN dibuja las letras faltantes (B, F, G, H, K, W, X, Y, Z) en papel → fotografía → vectorizar con Inkscape → agregar a Glyphr Studio

### Alternativa ya implementada (recomendada)
Usar las palabras completas de sección como **imágenes PNG** en lugar de texto. Esto preserva el trazo exacto de DAN sin necesitar una fuente completa. Implementado en el prototipo con `eventos.png`.

---

## Para Next.js — estructura de componentes sugerida

```
app/
├── layout.tsx              ← Nav, cursor, progress bar (client)
├── page.tsx                ← Composición de secciones
├── components/
│   ├── Cursor.tsx          ← Custom cursor con expand on hover
│   ├── NavBar.tsx          ← Adaptive dark/light con IntersectionObserver
│   ├── ProgressBar.tsx     ← Línea de scroll progress
│   ├── RevealWrapper.tsx   ← IntersectionObserver wrapper con delay
│   ├── ParallaxSection.tsx ← Scroll-driven translateY para fondos
│   ├── Hero.tsx            ← Logo + roles (uses logo.png, roles.png)
│   ├── Bio.tsx             ← Parallax bg + texto
│   ├── Moodboard.tsx       ← Imagen completa página 3
│   ├── FilmGallery.tsx     ← Grid de cortometrajes
│   ├── EventosPasarelas.tsx← Split panel con texto vertical
│   ├── ArteSection.tsx     ← Maquillaje/vestuario/arte
│   └── Contacto.tsx        ← Logo + links
├── hooks/
│   ├── useScrollProgress.ts
│   └── useIntersection.ts
└── public/
    └── assets/
        ├── logo.png
        ├── roles.png
        ├── labels/
        │   ├── eventos.png
        │   ├── pasarelas.png     ← extraer de página 7
        │   ├── maquillaje.png    ← extraer de página 8
        │   ├── vestuario.png     ← extraer de página 8
        │   └── arte.png          ← extraer de página 8
        └── gallery/
            ├── bio-bg.jpg
            ├── moodboard.jpg
            ├── film-01.jpg       ← stills cortometrajes individuales (pendiente)
            └── ...
```

---

## Pendientes / próximos pasos

- [ ] Extraer los labels individuales de página 8 (MAQUILLAJE, VESTUARIO, ARTE) como PNGs
- [ ] Extraer PASARELAS vertical de página 7 como PNG
- [ ] Separar los stills individuales de cortometrajes de las páginas 4-6 (en lugar de usar la página completa)
- [ ] Implementar en Next.js con `next/image` para optimización
- [ ] Crear la paleta de colores como CSS custom properties en `globals.css`
- [ ] Definir si habrá páginas interiores para cada proyecto (cortometraje individual, evento)
- [ ] Decidir si incluir showreel/video embed en la sección de cortometrajes
- [ ] Añadir sección de "Colaboraciones" (marcas con las que ha trabajado)
- [ ] Contacto funcional (Formspree o similar, sin backend propio)
- [ ] Meta tags OG para compartir en redes (logo + tagline)
- [ ] Responsive móvil — nav colapsable, grids a 1 columna, texto vertical a horizontal

---

## Comandos útiles para retomar la extracción de assets

```bash
# Re-extraer assets del PDF (si se necesitan nuevas versiones)
pip install pymupdf pillow --break-system-packages

python3 << 'EOF'
import fitz
from PIL import Image
import base64

doc = fitz.open("/ruta/al/ArtDesign___DAN.pdf")
mat = fitz.Matrix(2, 2)  # 2x = buena resolución

# Renderizar página específica
page = doc[6]  # página 7 (0-indexed)
pix = page.get_pixmap(matrix=mat, alpha=False)
pix.save("/tmp/page7.jpg")

# Luego hacer crop con PIL
img = Image.open("/tmp/page7.jpg")
crop = img.crop((x1, y1, x2, y2))  # ajustar coordenadas
crop.save("/tmp/label.png")
EOF

# Extraer todas las imágenes embebidas de una página
pdfimages -png -f 7 -l 7 ArtDesign___DAN.pdf /tmp/p7_imgs
ls /tmp/p7_imgs-*.png
```

---

## Referencia rápida del prototipo

El prototipo `dan_portfolio.html` es un archivo standalone (~1.8MB) que incluye:
- Todos los assets embebidos en base64
- Google Fonts cargadas por CDN (Anton, Space Mono, Crimson Pro)
- CSS y JS inline
- Funcional sin servidor, abrir directamente en el navegador

Para verlo: abrir `dan_portfolio.html` en cualquier browser moderno.

---

*Art Design ✶ DAN — "La imagen es un lenguaje capaz de comunicar, emocionar y construir significado."*