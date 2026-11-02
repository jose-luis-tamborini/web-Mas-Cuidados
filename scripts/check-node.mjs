// Corre antes de cada build (npm "prebuild"), en Vercel y en SiteGround. Frena la publicación si el Node del
// servidor es vulnerable a Node2Shell (CVE-2026-111497, falla del decodificador Brotli que trae Node). SiteGround solo
// deja elegir la versión principal (22, 24…), así que este control es lo que garantiza la versión exacta.
// Versiones corregidas (Node, 21/10/2026). Si sale otro parche de seguridad, actualizar acá.
const corregidas = { 22: [23, 4], 24: [22, 1], 26: [12, 1] };

const [mayor, menor, parche] = process.versions.node.split(".").map(Number);
const minima = corregidas[mayor];
const ok = minima && (menor > minima[0] || (menor === minima[0] && parche >= minima[1]));

console.log(`[check-node] Node ${process.versions.node}`);
// Para revisar en el registro de compilación qué variables del formulario ve el hosting (solo sí/no, nunca el valor).
console.log(
  "[check-node] Variables del formulario: " +
    ["RESEND_API_KEY", "RESEND_FROM", "NOTIFICATION_EMAIL", "SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"].map((k) => `${k} ${process.env[k] ? "sí" : "no"}`).join(", "),
);
if (!ok) {
  console.error(
    `[check-node] Node ${process.versions.node} es vulnerable a Node2Shell o no tiene soporte. ` +
      "Usar Node 22.23.4+, 24.22.1+ o 26.12.1+.",
  );
  process.exit(1);
}
