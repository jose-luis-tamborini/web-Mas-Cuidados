import type { NextConfig } from "next";

// En SiteGround las variables del panel no le llegan a la web encendida (el formulario respondía "no está
// configurado"). Las del formulario se copian al código del servidor al compilar: solo las usa
// app/api/contacto/route.ts, nunca un componente del navegador. Se copian solo si existen al compilar, para
// no pisar las que dé el hosting mientras la web funciona (Vercel).
const variablesFormulario = ["RESEND_API_KEY", "RESEND_FROM", "NOTIFICATION_EMAIL"].filter((k) => process.env[k]);

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
