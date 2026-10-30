// Datos del sitio que se repiten en varias páginas (menú, contacto, sedes, redes).

/**
 * Dirección pública del sitio, para los links absolutos (vista previa al compartir, sitemap).
 * NEXT_PUBLIC_SITE_URL se carga cuando la web tenga su dominio definitivo; mientras no esté, los buscadores
 * no la indexan (ver app/robots.ts) para que no aparezca la dirección provisoria de Vercel.
 */
export const dominioDefinitivo = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl =
  dominioDefinitivo ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * URL canónica de cada página (metadata.alternates). Solo con el dominio definitivo: en las direcciones provisorias
 * apuntaría a ellas mismas (o a localhost en SiteGround, donde no hay VERCEL_PROJECT_PRODUCTION_URL).
 */
export const canonica = (ruta: string) => (dominioDefinitivo ? { alternates: { canonical: ruta } } : {});

export type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

export const navItems: NavItem[] = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  {
    label: "Servicios de cuidado",
    children: [
      { label: "Servicio Particular", href: "/servicio-particular" },
      { label: "Seguros de Cuidado", href: "/seguros-de-cuidado" },
    ],
  },
  { label: "Medicina Online", href: "/medicina-online" },
  { label: "Internación Domiciliaria", href: "/internacion-domiciliaria" },
  { label: "Alianzas", href: "/alianzas" },
  { label: "Contacto", href: "/contacto" },
];

export const contacto = {
  telefono: "0800 345 2260",
  telefonoHref: "tel:08003452260",
  whatsappHref: "https://wa.me/5491126477771",
};

export const redes = {
  linkedin: "https://www.linkedin.com/company/mascuidados/",
  facebook: "https://www.facebook.com/mascuidadossiempre",
  instagram: "https://www.instagram.com/mascuidados.arg/",
};

// Ficha de Google Maps abierta en la pestaña de opiniones (sin los parámetros de seguimiento del link original).
export const resenasGoogle =
  "https://www.google.com/maps/place/M%C3%A1s+Cuidados+-+Cuidado+de+personas+en+sanatorios+y+domicilios.+Enfermer%C3%ADa+a+domicilio.+Internaci%C3%B3n+Domiciliaria/@-32.9446553,-60.6567399,17z/data=!4m8!3m7!1s0x95b7ab405674c245:0x2714a1d03a5537ff!8m2!3d-32.9446598!4d-60.654165!9m1!1b1!16s%2Fg%2F11fz9y4_m0";

export type Sede = {
  nombre: string;
  direccion: string[];
  ciudad: string;
  icono: "rosario" | "cordoba" | "buenos-aires" | "santa-fe";
  // Ficha de Google de la sede (links oficiales que pasó el cliente, octubre 2026).
  mapsHref: string;
};

export const sedes: Sede[] = [
  {
    nombre: "Rosario",
    direccion: ["Rioja 2240"],
    ciudad: "Rosario, Santa Fe",
    icono: "rosario",
    mapsHref: "https://maps.app.goo.gl/HUbZmJFY6DAHsGU17",
  },
  {
    nombre: "Córdoba",
    direccion: ["San Jerónimo 275", "Piso 3, Oficina 5"],
    ciudad: "Córdoba, Córdoba",
    icono: "cordoba",
    mapsHref: "https://maps.app.goo.gl/dczGPXnh8iK3zfiD9",
  },
  {
    nombre: "Buenos Aires",
    direccion: ["Larrea 1007", "Piso 6 Oficina D"],
    ciudad: "CABA, Buenos Aires",
    icono: "buenos-aires",
    mapsHref: "https://maps.app.goo.gl/7mDok8tgW8Y5dgfo9",
  },
  {
    nombre: "Santa Fe",
    direccion: ["Marcial Candioti 3456"],
    ciudad: "Santa Fe, Santa Fe",
    icono: "santa-fe",
    mapsHref: "https://maps.app.goo.gl/1oTRFQsbdhawHr867",
  },
];

export const footerColumns: { titulo: string; links: { label: string; href: string }[] }[] = [
  {
    titulo: "MásCuidados",
    links: [
      { label: "Quiénes somos", href: "/quienes-somos" },
      { label: "Medicina online", href: "/medicina-online" },
      { label: "Internación domiciliaria", href: "/internacion-domiciliaria" },
      { label: "Seguros de cuidado", href: "/seguros-de-cuidado" },
      { label: "Servicio de Cuidado Inmediato", href: "/servicio-particular" },
    ],
  },
  {
    titulo: "Servicios",
    links: [
      { label: "Servicio inmediato", href: "/servicio-particular" },
      { label: "Cuidadores en sanatorios", href: "/servicio-particular" },
      { label: "Cuidadores en hospitales", href: "/servicio-particular" },
      { label: "Cuidadores en domicilio", href: "/servicio-particular" },
    ],
  },
  {
    titulo: "Nuestras sedes",
    links: sedes.map((s) => ({ label: s.nombre, href: s.mapsHref })),
  },
  {
    titulo: "Contacto",
    links: [
      { label: `Centro de atención: ${contacto.telefono}`, href: contacto.telefonoHref },
      // TODO: confirmar destino de "Trabajá con nosotros" (no hay página diseñada).
      { label: "Trabajá con nosotros", href: "/contacto" },
      { label: "Solicitá tu cuidadora", href: "/contacto" },
      { label: "Consultas comerciales", href: "/alianzas" },
    ],
  },
];
