// Datos del sitio que se repiten en varias páginas (menú, contacto, sedes, redes).

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
  // TODO: falta el número de WhatsApp del cliente. Mientras tanto el botón lleva al formulario.
  whatsappHref: "/contacto",
};

// TODO: faltan las URLs reales de las redes.
export const redes = {
  linkedin: "#",
  facebook: "#",
  instagram: "#",
  web: "/",
};

const maps = (direccion: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;

export type Sede = {
  nombre: string;
  direccion: string[];
  ciudad: string;
  icono: "rosario" | "cordoba" | "buenos-aires" | "santa-fe";
  mapsHref: string;
};

export const sedes: Sede[] = [
  {
    nombre: "Rosario",
    direccion: ["Rioja 2240"],
    ciudad: "Rosario, Santa Fe",
    icono: "rosario",
    mapsHref: maps("Rioja 2240, Rosario, Santa Fe"),
  },
  {
    nombre: "Córdoba",
    direccion: ["San Jerónimo 275", "Piso 3, Oficina 5"],
    ciudad: "Córdoba, Córdoba",
    icono: "cordoba",
    mapsHref: maps("San Jerónimo 275, Córdoba"),
  },
  {
    nombre: "Buenos Aires",
    direccion: ["Larrea 1007", "Piso 6 Oficina D"],
    ciudad: "CABA, Buenos Aires",
    icono: "buenos-aires",
    mapsHref: maps("Larrea 1007, CABA"),
  },
  {
    nombre: "Santa Fe",
    direccion: ["Marcial Candioti 3456"],
    ciudad: "Santa Fe, Santa Fe",
    icono: "santa-fe",
    mapsHref: maps("Marcial Candioti 3456, Santa Fe"),
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
      { label: "Internación domiciliaria", href: "/internacion-domiciliaria" },
      { label: "Servicio inmediato", href: "/servicio-particular" },
      { label: "Cuidadores en sanatorios", href: "/servicio-particular" },
      { label: "Cuidadores en hospitales", href: "/servicio-particular" },
      { label: "Cuidadores en domicilio", href: "/servicio-particular" },
      { label: "Medicina online", href: "/medicina-online" },
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
