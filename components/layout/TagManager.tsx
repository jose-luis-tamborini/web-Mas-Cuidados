import Script from "next/script";
import { gtmId } from "@/lib/medicion";
import { dominioDefinitivo } from "@/lib/site";

// Google Tag Manager. Solo con el dominio definitivo (NEXT_PUBLIC_SITE_URL), para que las visitas de prueba a las
// direcciones provisorias no ensucien Analytics. Fragmento oficial de Google, cargado con next/script.
export default function TagManager() {
  if (!dominioDefinitivo) return null;
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
