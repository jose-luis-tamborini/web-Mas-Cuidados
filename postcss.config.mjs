// Tailwind v4 por PostCSS: sirve para Turbopack (desarrollo) y webpack (build). El build va con webpack porque
// SiteGround no deja abrir puertos al compilar y Turbopack los necesita para correr los loaders de CSS.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
