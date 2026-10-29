// Recibe el formulario "Solicitá asesoramiento" y lo manda por mail con Resend. Variables de entorno:
// RESEND_API_KEY, RESEND_FROM y NOTIFICATION_EMAIL (una o varias casillas separadas por coma; si no está,
// va a info@mascuidados.com.ar, la casilla que pidió el cliente).
// Se llama a la API de Resend con fetch para no sumar la dependencia.

const campos = {
  nombre: "Nombre y apellido",
  email: "Correo electrónico",
  whatsapp: "WhatsApp",
  ciudad: "Ciudad",
  servicio: "Servicio",
  comentarios: "Comentarios",
  pagina: "Enviado desde",
} as const;

type Campo = keyof typeof campos;

const obligatorios: Campo[] = ["nombre", "email", "whatsapp", "ciudad", "servicio"];

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }

  // Campo trampa: las personas no lo ven; si viene completo es un bot. Se responde ok para no darle pistas.
  if (typeof datos.sitio === "string" && datos.sitio.trim()) return Response.json({ ok: true });

  const valores = Object.fromEntries(
    (Object.keys(campos) as Campo[]).map((k) => [k, typeof datos[k] === "string" ? (datos[k] as string).trim().slice(0, 2000) : ""]),
  ) as Record<Campo, string>;

  if (obligatorios.some((k) => !valores[k]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email)) {
    return Response.json({ error: "Faltan datos obligatorios." }, { status: 422 });
  }

  // Leídas una por una (sin desestructurar) para que funcione el `env` de next.config.ts.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_FROM = process.env.RESEND_FROM;
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@mascuidados.com.ar";
  if (!RESEND_API_KEY || !RESEND_FROM) {
    console.error("[contacto] Faltan RESEND_API_KEY o RESEND_FROM");
    return Response.json({ error: "El formulario no está configurado." }, { status: 500 });
  }

  const filas = (Object.keys(campos) as Campo[])
    .filter((k) => valores[k])
    .map(
      (k, i) =>
        `<tr><td style="padding:8px 14px;font-weight:700;color:#4A007D;${i % 2 ? "" : "background:#f5f0fa"}">${campos[k]}</td><td style="padding:8px 14px">${escapar(valores[k]).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const respuesta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: NOTIFICATION_EMAIL.split(",").map((s) => s.trim()),
      reply_to: valores.email,
      subject: `Nuevo contacto web: ${valores.nombre} — ${valores.servicio}`,
      html: `<h2 style="color:#4A007D;font-family:sans-serif">Nuevo contacto desde la web</h2><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;width:100%;max-width:560px">${filas}</table>`,
    }),
  });

  if (!respuesta.ok) {
    console.error("[contacto] Resend respondió", respuesta.status, await respuesta.text());
    return Response.json({ error: "No se pudo enviar." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
