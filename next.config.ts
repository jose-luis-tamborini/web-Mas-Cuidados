import type { NextConfig } from "next";

// En SiteGround las variables del panel no le llegan a la web encendida (el formulario respondía "no está
// configurado"). Las del formulario se copian al código del servidor al compilar: solo las usa
// app/api/contacto/route.ts, nunca un componente del navegador. Se copian solo si existen al compilar, para
// no pisar las que dé el hosting mientras la web funciona (Vercel).
const variablesFormulario = [
  "RESEND_API_KEY",
  "RESEND_FROM",
  "NOTIFICATION_EMAIL",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
].filter((k) => process.env[k]);

// Servidor de SiteGround donde están los mails de @mascuidados.com.ar desde el pase de las casillas al proyecto
// de Node (noviembre 2026; antes, gtxm1008). Si se recrea el proyecto, confirmar el servidor en su Site Tools.
const servidorMails = "gtxm1257.siteground.biz";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  env: Object.fromEntries(variablesFormulario.map((k) => [k, process.env[k] as string])),
  // URLs del WordPress anterior (wp-sitemap.xml, octubre 2026). Era una sola página: los bloques de servicios y
  // sedes van a la página nueva que corresponde; lo demás (demos del tema, feeds, etiquetas) a la Home.
  async redirects() {
    const bloques: Record<string, string> = {
      internacion_domiciliaria: "/internacion-domiciliaria",
      insumosyequipamiento: "/internacion-domiciliaria",
      enfermeriaadomicilio: "/internacion-domiciliaria",
      acompanamiento_sanatorio: "/servicio-particular",
      cuidado_domicilio: "/servicio-particular",
      medicosyrecetasonline: "/medicina-online",
      c_bsas: "/contacto",
      c_cordoba: "/contacto",
      c_parana: "/contacto",
      c_rosario: "/contacto",
      c_stafe: "/contacto",
    };
    const aLaHome = [
      "/home-v2",
      "/beginners-guide-to-start-your-photography-journey-2",
      "/pxl-template/:path*",
      "/portfolio/:path*",
      "/portfolio-category/:path*",
      "/service/:path*",
      "/category/:path*",
      "/tag/:path*",
      "/author/:path*",
      "/feed",
      "/comments/feed",
    ];
    return [
      // mascuidados.com.ar/webmail es la dirección del webmail que usa el personal. Va primero para que no pase
      // por la redirección a www. Si SiteGround atiende /webmail antes que Next, esta regla no llega a usarse.
      {
        source: "/webmail/:path*",
        destination: `https://${servidorMails}/webmail/`,
        permanent: false,
      },
      // La dirección de la web es www.mascuidados.com.ar. En Vercel la redirección del dominio solo la hace el
      // panel de dominios; en SiteGround el dominio solo llega a la web y se redirige acá, con la ruta y los
      // parámetros (gclid, UTM). Antes lo hacía el .htaccess del WordPress.
      {
        source: "/:path*",
        has: [{ type: "host", value: "mascuidados\\.com\\.ar" }],
        destination: "https://www.mascuidados.com.ar/:path*",
        permanent: true,
      },
      ...Object.entries(bloques).map(([bloque, destination]) => ({
        source: `/pxl-template/${bloque}`,
        destination,
        permanent: true,
      })),
      ...aLaHome.map((source) => ({ source, destination: "/", permanent: true })),
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-:sitemap.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
