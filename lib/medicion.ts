// Eventos para Google Tag Manager (GTM-KL3JCVS8, el contenedor que usaba el WordPress). La web los deja en el
// dataLayer y en GTM se crean los disparadores de "Evento personalizado" con estos nombres. Nunca se mandan
// datos personales (nombre, correo, teléfono): solo qué se eligió y desde qué página.

export const gtmId = "GTM-KL3JCVS8";

type Evento =
  | { event: "formulario_enviado"; servicio: string; ciudad: string; pagina: string }
  | { event: "click_consultanos"; pagina: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function medir(evento: Evento) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(evento);
}
