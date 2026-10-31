@AGENTS.md

# Más Cuidados — web

Web institucional de Más Cuidados. No confundir con `../mas-cuidados/` (landing anterior del mismo cliente): no editarla; si se reutiliza algo de ahí (tokens, form con Resend, Cloudinary), copiarlo a este proyecto.

## Stack
Next 16.4 (App Router, sin `src/`), React 19.3, TypeScript, Tailwind v4 vía `@tailwindcss/postcss` (`postcss.config.mjs`). Cache Components y Partial Prefetching vienen activados por create-next-app.
- **Build con webpack** (`next build --webpack`): el hosting de SiteGround no deja abrir puertos al compilar y Turbopack los necesita para los loaders de CSS (ticket 5161088). En desarrollo sigue Turbopack. No volver a `@tailwindcss/turbopack`.
- **Versiones exactas en `package.json`** (sin `^`): SiteGround borra el `package-lock.json` antes de instalar. Al actualizar una dependencia, poner la versión exacta.
- `scripts/check-node.mjs` (prebuild) frena el build si el Node del servidor es vulnerable a Node2Shell.

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
- `components/layout/`: Header (submenú + menú mobile), Footer, botón "Consultanos" de AsisteClick (pedido del cliente en lugar del de WhatsApp): el widget lo carga el analista desde GTM (id del widget `8831853-5985`); en el código solo quedan la medición del clic (`AsisteClick.tsx`) y los arreglos de estilo y posición (`app/globals.css`). `components/home/`: secciones de la Home. `components/sections/`: bloques que se repiten en varias páginas (banner de asesoramiento, formulario). `components/icons.tsx`: íconos con los trazos del Figma.
- Tokens (colores, tamaños de letra, sombras, degradados) en `app/globals.css`.
- Video del hero en `public/videos/home/` (original del cliente: `Escritorio/Webs/mas-cuidados/web/home/hero-home.mp4`). Cuatro versiones sin audio: 1080p y 720p, cada una en AV1 (`libaom-av1 -crf 38 -b:v 0 -cpu-used 5`) y en H.264 de respaldo (`libx264 -preset veryslow -tune film`, crf 30 con `-level:v 4.0` en 1080p y crf 28 con `-level:v 3.1` en 720p, `-refs 4`), todas con `-movflags +faststart`. El proyecto no tiene ffmpeg: usar `ffmpeg-static` instalado en una carpeta temporal.
- **Medidas en desktop (≥1024 px):** el `font-size` del html escala con el ancho (16 px a 1952 px), así la página se ve igual que el Figma en cualquier pantalla. Toda medida desktop va con prefijo `lg:` y en rem = px del diseño / 16 (ej. 64 px → `lg:mt-[4rem]`). Sacar los px con `figma-dump.js`. El usuario compara contra el Figma a 1366 px: verificar con `shot.js` + `compare.js` (diseño a la izquierda, localhost a la derecha) y midiendo secciones en px de diseño.
- **Mobile (<1024 px):** no hay diseño; el html queda en 16 px y se usan las clases sin prefijo.
- **Páginas interiores:** hero compartido `components/sections/PageHero.tsx` (todas las páginas tienen el mismo: foto con velo violeta, cruz del logo, título en mayúsculas y flecha). En desktop los heroes (también el de la Home) ocupan el alto de la ventana (`lg:h-svh`, pedido del cliente) y el texto se ubica en proporción, no con el alto fijo del Figma. El contenido va a 1697 px del diseño (x=128 a 1825) con `container-wide`; la Home usa `container-site` (1650). Formulario: `<ContactoSection variante=... />` según el Figma de cada página ("home": franja gris; "franja": la misma con la tarjeta 8 px más abajo, como en Seguros; "pagina": sobre fondo crema). Si una página repite una pieza con medidas distintas entre copias (pasa seguido en este Figma), alinear con la primera y avisarle al usuario. Secciones de cada página en `components/<ruta>/`. Íconos nuevos: agregarlos a `components/icons.tsx` con los trazos de `.figma/svg/` (no volver a correr `gen-icons.js`, pisa el archivo).
- **Medir contra el Figma:** `.figma/scripts/bands.js` compara en px del diseño las filas con texto/íconos del render y de la captura (ej. `node .figma/scripts/bands.js . .figma/renders/02-servicio-inmediato.jpg .figma/shots/si-1366.jpg 1400 2900`). Sirve para encontrar en qué bloque empieza un desfase.
- **Animaciones** (pedido del cliente, sin librerías): `{...reveal}` (de `components/ui/reveal.ts`) hace que un bloque suba y aparezca al entrar en pantalla; ponerlo en envoltorios sin transiciones propias (sus estilos van fuera de @layer y pisan las utilidades). Para números, `components/ui/CountUp.tsx`. Todo se apaga con "reducir movimiento".
- **Mobile con desplegables** (pedido del cliente, referencia: persianassegurasrosario.com): `components/ui/MobileAccordion.tsx` despliega solo en < 1024 px; el título de desktop va dentro del contenido con `max-lg:hidden`. Usarlo en bloques largos (tarjetas con texto y listas, sedes, preguntas frecuentes); el formulario y los bloques cortos quedan abiertos. Todos los desplegables arrancan cerrados (pedido del cliente: no usar `defaultOpen`). Las tarjetas de servicios de la Home también son desplegables apilados en mobile, con la foto de fondo en el título (el cliente no quiere carruseles).
- Si una clase nueva de Tailwind no aparece en dev (pasó con un valor arbitrario), parar el server, borrar `.next/dev` y volver a levantarlo. Ojo: al detener la tarea de consola, el proceso de Next puede seguir vivo; verificar el puerto.

## Datos confirmados por el cliente (octubre 2026)
"Desde 2002" y 4 sedes (Rosario, Córdoba, Buenos Aires, Santa Fe; Paraná cerró). El Figma tiene datos viejos que hay que corregir al maquetar: "16 años de trayectoria" en Quiénes somos (usar "desde 2002"), "5 SEDES EN TODO EL PAÍS" en el banner de Component 9 y "Santa Fé/Paraná" o "Paraná" en sedes y footers. Testimonios: reseñas reales de Google elegidas por el cliente (las del Figma eran de ejemplo); se muestra nombre + inicial del apellido y el texto tal cual.

## Pendientes del cliente/diseñadora
Mobile, versión del formulario y footer (larga en las páginas vs. corta suelta), destino de "Trabajá con nosotros" y política de privacidad. WhatsApp y redes ya están en `lib/site.ts`.

## Hosting (Vercel ahora, SiteGround más adelante)
- **Dos repos:** `origin` (emilianosala/mas-cuidados-web, conectado a SiteGround) y `cliente` (jose-luis-tamborini/web-Mas-Cuidados, conectado al Vercel del dueño, proyecto `mas-cuidados-web`). `git push` sube a los dos (origin tiene las dos direcciones de push).
- **Por qué Vercel (noviembre 2026):** en SiteGround un dominio no puede estar en dos sitios a la vez, y los mails de @mascuidados.com.ar (~68 casillas, ~50 GB) viven en el sitio del WordPress; pasar el dominio al proyecto de Node obliga a migrarlos (Email Migrator, contraseñas personales de cada usuario). Hasta que se migren, el dominio sigue en SiteGround (DNS y mails) y solo los registros A de `@` y `www` apuntan a Vercel (`76.76.21.21`; antes `34.174.56.63`). En el SPF del dominio se cambió `+a` por `+ip4:34.174.56.63` para que el servidor de mails siga autorizado. `www` redirige al dominio sin www desde Vercel. Al pasar a SiteGround: migrar mails, "Cambiar dominio principal" (WordPress → old.mascuidados.com.ar, joset39.sg-host.com → mascuidados.com.ar) y devolver esos registros.
- La cuenta de Vercel del dueño es Hobby: los deploys por CLI con commits del usuario quedan bloqueados ("commit author doesn't have permission"); por GitHub (repo del dueño) sí publican, como la landing.

## Hosting (SiteGround)
- La web corre en el plan GoGeek del cliente como "Proyecto de Node.js" (Site Tools → Node.js), conectado a GitHub: cada push a `main` se compila y publica solo (~1 min). Dirección temporal: https://joset39.sg-host.com. El WordPress actual de mascuidados.com.ar está en el mismo plan.
- **Variables del panel:** SiteGround las pasa al compilar pero no a la web encendida, y pierde los valores con espacios o `<>`. Por eso `next.config.ts` copia al código del servidor las del formulario y el remitente por defecto está en `route.ts`. **Al cambiar una variable hay que volver a desplegar** ("Guardar y desplegar"). El registro de compilación muestra cuáles ve (`[check-node] Variables del formulario`).
- Formulario: Resend con el dominio `mascuidados.com.ar` verificado (DNS en la Zona DNS del WordPress en SiteGround) y la clave `web-siteground` (solo envío, solo ese dominio). En el panel: `RESEND_API_KEY` y `NOTIFICATION_EMAIL`.

## Medición
- Google Tag Manager `GTM-KL3JCVS8` (el contenedor del WordPress; GA4 `G-D5KRH50Z70`) en `components/layout/TagManager.tsx`, en toda versión publicada, también en la dirección provisoria (pedido del cliente, octubre 2026, para probar etiquetas); no se carga en `next dev`.
- La web deja en el `dataLayer` (`lib/medicion.ts`, sin datos personales): `formulario_enviado` (servicio, ciudad, página) al enviar el formulario y `click_consultanos` (página) al tocar el botón de AsisteClick, que es un `<button>` y no lo ve el disparador de clics en links que tenía el contenedor.
- Al lanzar, sacar el GTM del WordPress (pasa a ser el respaldo).

## Lanzamiento
Mientras no exista `NEXT_PUBLIC_SITE_URL`, el sitio se publica con `noindex` y `robots.txt` bloqueando todo (para que Google no indexe las direcciones provisorias). Al pasar al dominio definitivo, cargar `NEXT_PUBLIC_SITE_URL=https://<dominio>` (sin barra final) en el hosting y volver a publicar: con eso se habilita la indexación y el sitemap usa ese dominio. Ícono, imagen para compartir (`app/opengraph-image.jpg`), sitemap y página 404 ya están en `app/`. Con `NEXT_PUBLIC_SITE_URL` también aparecen las URLs canónicas (`canonica()` en `lib/site.ts`, en el `metadata` de cada página) y los datos estructurados de la Home (`components/home/DatosEstructurados.tsx`, empresa + 4 sedes) usan ese dominio. En SiteGround esa variable se lee al compilar: cargarla en el panel y volver a desplegar.
- **Redirecciones del WordPress** (hechas, `redirects()` en `next.config.ts`): todas las URLs de su `wp-sitemap.xml` (demos del tema, portfolio, tags, bloques de servicios y sedes). Los PDF que linkeaba el WordPress (`/descargas/*.pdf`: brochures y franquicias) se copiaron a `public/descargas/` para que los links compartidos sigan andando.
- **Día del lanzamiento:** validar los datos estructurados en https://search.google.com/test/rich-results; dar de alta el sitemap en Search Console.

## Flujo acordado
1. Inventario (páginas, secciones, componentes, colores, tipografías) → validar con el usuario antes de codear.
2. Base: tokens en `app/globals.css`, fuentes, header/footer, componentes base.
3. Páginas de a una, comparando con Figma en desktop y mobile.
4. Integraciones al final (formulario, WhatsApp, analítica).

Consultar antes de sumar dependencias o hacer push.
