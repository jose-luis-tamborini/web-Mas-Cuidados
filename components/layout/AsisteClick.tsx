"use client";

import { useEffect } from "react";
import { medir } from "@/lib/medicion";

// Botón flotante "Consultanos" de AsisteClick: el canal de consulta que pidió el cliente (reemplaza al botón de
// WhatsApp). El widget lo instala el analista desde Google Tag Manager (pedido del cliente, octubre 2026); acá solo
// queda la medición del clic. Los arreglos de estilo y la posición del botón siguen en app/globals.css.
// El botón lo inserta el widget y es un <button>, no un link: el disparador de clics en links que tenía GTM no lo
// ve, así que el clic se avisa a GTM como evento "click_consultanos".
export default function AsisteClick() {
  useEffect(() => {
    const alHacerClic = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("#asisteclick_button_css")) {
        medir({ event: "click_consultanos", pagina: window.location.pathname });
      }
    };
    document.addEventListener("click", alHacerClic, true);
    return () => document.removeEventListener("click", alHacerClic, true);
  }, []);

  return null;
}
