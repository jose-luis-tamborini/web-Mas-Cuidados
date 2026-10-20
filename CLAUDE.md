@AGENTS.md

# Más Cuidados — web

Web institucional de Más Cuidados. No confundir con `../mas-cuidados/` (landing anterior del mismo cliente): no editarla; si se reutiliza algo de ahí (tokens, form con Resend, Cloudinary), copiarlo a este proyecto.

## Stack
Next 16.4 (App Router, sin `src/`), React 19.3, TypeScript, Tailwind v4 vía `@tailwindcss/turbopack`. Cache Components y Partial Prefetching vienen activados por create-next-app.

## Diseño (Figma)
- Archivo "MÁSCUIDADOS WEB/LANDING", key `h8TtEsWtKB6JFcnYrdWdUM`. Página "pagina web correcciones": https://www.figma.com/design/h8TtEsWtKB6JFcnYrdWdUM/M%C3%81SCUIDADOS-WEB-LANDING?node-id=1351-234 (para ir a un frame, cambiar `node-id` por su id con guion, ej. `2008-505`).
- El equipo no tiene plan pago de Figma y la cuenta solo tiene acceso de lectura al archivo.
- No usar el MCP de Figma (20 lecturas/mes). Leer con la REST API usando `FIGMA_TOKEN` de `.env.local` (scope `file_content:read`, vence 2027-01-17).
- GET file, GET file nodes y GET images tienen cupo mensual muy chico (6–20/mes según la doc de Figma): bajar el archivo entero una sola vez a `.figma/` (gitignored) y trabajar desde esa copia. Exportar imágenes en un solo pedido con todos los ids.
- Para comparar visualmente, capturas del link de Figma en Chrome (sin límite).

## Copia local del diseño (`.figma/`, no se versiona)
- `web.json`: página "pagina web correcciones" completa (fuente de verdad). `renders/`: capturas de cada página. `img/` y `svg/`: imágenes recortadas e íconos exportados.
- `scripts/`: `figma-dump.js <web.json> <nodeId> [depth]` imprime medidas, colores y textos de un nodo; `figma-crops.js` recorta las fotos según el Figma; `shot.js <dir> <url> <prefijo> 1440,390` saca capturas de página completa con Chrome headless (la ventana de la extensión de Chrome no permite screenshots).
- Lecturas de cupo usadas en octubre 2026: 4 (índice, página, renders, SVGs).

## Estructura
- `lib/site.ts`: menú, contacto, sedes, columnas del footer (con TODOs de datos que faltan).
- `components/layout/`: Header (submenú + menú mobile), Footer, botón de WhatsApp. `components/home/`: secciones de la Home. `components/sections/`: bloques que se repiten en varias páginas (banner de asesoramiento, formulario). `components/icons.tsx`: íconos con los trazos del Figma.
- Tokens (colores, tamaños de letra, sombras, degradados) en `app/globals.css`.
- Video del hero en `public/videos/home/` (original del cliente: `Escritorio/Webs/mas-cuidados/web/home/hero-home.mp4`). Cuatro versiones sin audio: 1080p y 720p, cada una en AV1 (`libaom-av1 -crf 38 -b:v 0 -cpu-used 5`) y en H.264 de respaldo (`libx264 -preset veryslow -tune film`, crf 30 con `-level:v 4.0` en 1080p y crf 28 con `-level:v 3.1` en 720p, `-refs 4`), todas con `-movflags +faststart`. El proyecto no tiene ffmpeg: usar `ffmpeg-static` instalado en una carpeta temporal.
- **Medidas en desktop (≥1024 px):** el `font-size` del html escala con el ancho (16 px a 1952 px), así la página se ve igual que el Figma en cualquier pantalla. Toda medida desktop va con prefijo `lg:` y en rem = px del diseño / 16 (ej. 64 px → `lg:mt-[4rem]`). Sacar los px con `figma-dump.js`. El usuario compara contra el Figma a 1366 px: verificar con `shot.js` + `compare.js` (diseño a la izquierda, localhost a la derecha) y midiendo secciones en px de diseño.
- **Mobile (<1024 px):** no hay diseño; el html queda en 16 px y se usan las clases sin prefijo.
- Si una clase nueva de Tailwind no aparece en dev (pasó con un valor arbitrario), parar el server, borrar `.next/dev` y volver a levantarlo. Ojo: al detener la tarea de consola, el proceso de Next puede seguir vivo; verificar el puerto.

## Pendientes del cliente/diseñadora
Mobile, versión del formulario y footer (larga en las páginas vs. corta suelta), número de WhatsApp, redes, destino de "Trabajá con nosotros" y política de privacidad, a dónde llegan los formularios, datos que no coinciden (16 vs. 24 años, 4 vs. 5 sedes), testimonios con texto repetido (Berni Buratti y Emilse Silvas).

## Flujo acordado
1. Inventario (páginas, secciones, componentes, colores, tipografías) → validar con el usuario antes de codear.
2. Base: tokens en `app/globals.css`, fuentes, header/footer, componentes base.
3. Páginas de a una, comparando con Figma en desktop y mobile.
4. Integraciones al final (formulario, WhatsApp, analítica).

Consultar antes de sumar dependencias o hacer push.
