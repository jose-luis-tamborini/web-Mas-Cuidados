import type { MetadataRoute } from "next";
import { dominioDefinitivo, siteUrl } from "@/lib/site";

// Hasta que la web tenga su dominio definitivo (NEXT_PUBLIC_SITE_URL), se les pide a los buscadores que no la
// indexen: así no aparece en Google la dirección provisoria de Vercel.
export default function robots(): MetadataRoute.Robots {
  if (!dominioDefinitivo) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
