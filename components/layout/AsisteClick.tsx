import Script from "next/script";

// Botón flotante "Consultanos" de AsisteClick: el canal de consulta que pidió el cliente (reemplaza al botón de
// WhatsApp). Es el mismo widget de la landing, que allá se carga por Google Tag Manager (GTM-P37TCDNK); acá va
// directo para no sumar las etiquetas de medición de la landing. Se carga cuando la página ya terminó, para no
// demorar el hero.
export default function AsisteClick() {
  return (
    <Script
      id="asisteclick"
      strategy="lazyOnload"
      src="https://app.asisteclick.com/v3/widget.php?id=8831853-5985&async=1&floating=DL&deptid=0&layer=1"
    />
  );
}
