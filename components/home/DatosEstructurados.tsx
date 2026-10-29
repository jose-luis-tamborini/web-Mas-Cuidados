import { contacto, redes, sedes, siteUrl } from "@/lib/site";

// Datos estructurados (schema.org) para Google: la empresa y sus 4 sedes, cada una con su dirección.
// Validar con https://search.google.com/test/rich-results una vez que la web esté en el dominio definitivo.
export default function DatosEstructurados() {
  const empresa = `${siteUrl}/#empresa`;
  const datos = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": empresa,
        name: "Más Cuidados",
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
        foundingDate: "2002",
        telephone: contacto.telefono,
        sameAs: Object.values(redes),
      },
      ...sedes.map((s) => {
        const [localidad, provincia] = s.ciudad.split(", ");
        return {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#sede-${s.icono}`,
          name: `Más Cuidados ${s.nombre}`,
          parentOrganization: { "@id": empresa },
          url: siteUrl,
          image: `${siteUrl}/opengraph-image.jpg`,
          telephone: contacto.telefono,
          address: {
            "@type": "PostalAddress",
            streetAddress: s.direccion.join(", "),
            addressLocality: localidad,
            addressRegion: provincia,
            addressCountry: "AR",
          },
        };
      }),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }}
    />
  );
}
