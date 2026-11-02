// Recibe el formulario "Solicitá asesoramiento" y lo manda por mail con Resend. Variables de entorno:
// RESEND_API_KEY, NOTIFICATION_EMAIL (una o varias casillas separadas por coma; si no está, va a
// info@mascuidados.com.ar, la casilla que pidió el cliente) y RESEND_FROM (opcional: el remitente por defecto
// está acá, porque SiteGround pierde los valores con espacios o "<>" en su panel). El dominio mascuidados.com.ar
// está verificado en Resend.
// Además se guarda en la tabla `contactos` del Supabase de la landing (proyecto "Más Cuidados"), con
// origen = "web": el escenario de Make que mira esa tabla lo pasa a la hoja de la web en Google Sheets.
// Variables: SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY (las mismas de la landing); si faltan, solo va el mail.
// Se llama a las APIs de Resend y Supabase con fetch para no sumar dependencias. El envío se da por bueno si
// llegó el mail o se guardó el contacto: con uno de los dos no se pierde.

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
  const RESEND_FROM = process.env.RESEND_FROM || "Más Cuidados Web <web@mascuidados.com.ar>";
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@mascuidados.com.ar";
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!RESEND_API_KEY) console.error("[contacto] Falta RESEND_API_KEY");
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) console.error("[contacto] Faltan las variables de Supabase");
  if (!RESEND_API_KEY && !(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY)) {
    return Response.json({ error: "El formulario no está configurado." }, { status: 500 });
  }

  const filas = (Object.keys(campos) as Campo[])
    .filter((k) => valores[k])
    .map(
      (k, i) =>
        `<tr><td style="padding:8px 14px;font-weight:700;color:#4A007D;${i % 2 ? "" : "background:#f5f0fa"}">${campos[k]}</td><td style="padding:8px 14px">${escapar(valores[k]).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const enviarMail = async () => {
    if (!RESEND_API_KEY) return false;
    const r = await fetch("https://api.resend.com/emails", {
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
    if (!r.ok) console.error("[contacto] Resend respondió", r.status, await r.text());
    return r.ok;
  };

  // Columnas de la tabla de la landing: los comentarios van en `mensaje`.
  const guardarContacto = async () => {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return false;
    const r = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/contactos`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nombre: valores.nombre,
        email: valores.email,
        whatsapp: valores.whatsapp,
        ciudad: valores.ciudad,
        servicio: valores.servicio,
        mensaje: valores.comentarios || null,
        origen: "web",
        pagina: valores.pagina || null,
      }),
    });
    if (!r.ok) console.error("[contacto] Supabase respondió", r.status, await r.text());
    return r.ok;
  };

  const [mail, guardado] = await Promise.allSettled([enviarMail(), guardarContacto()]);
  const salio = (p: PromiseSettledResult<boolean>) => {
    if (p.status === "rejected") console.error("[contacto] Error de red", p.reason);
    return p.status === "fulfilled" && p.value;
  };
  if (![salio(mail), salio(guardado)].some(Boolean)) {
    return Response.json({ error: "No se pudo enviar." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
