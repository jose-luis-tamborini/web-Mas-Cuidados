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
};

export default nextConfig;
