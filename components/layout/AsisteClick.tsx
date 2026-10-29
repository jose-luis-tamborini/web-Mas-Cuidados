"use client";

import Script from "next/script";
import { useEffect } from "react";
import { medir } from "@/lib/medicion";

// Botón flotante "Consultanos" de AsisteClick: el canal de consulta que pidió el cliente (reemplaza al botón de
// WhatsApp). Es el mismo widget de la landing, que allá se carga por Google Tag Manager (GTM-P37TCDNK); acá va
// directo. Se carga cuando la página ya terminó, para no demorar el hero.
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

  return (
    <Script
      id="asisteclick"
      strategy="lazyOnload"
      src="https://app.asisteclick.com/v3/widget.php?id=8831853-5985&async=1&floating=DL&deptid=0&layer=1"
    />
  );
}
