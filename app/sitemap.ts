import type { MetadataRoute } from "next";
import { navItems, siteUrl } from "@/lib/site";

// Todas las páginas del menú, más la Home.
export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = navItems.flatMap((item) => ("children" in item ? item.children.map((c) => c.href) : [item.href]));
  return ["/", ...rutas].map((ruta) => ({
    url: `${siteUrl}${ruta === "/" ? "" : ruta}`,
    changeFrequency: "monthly",
    priority: ruta === "/" ? 1 : 0.8,
  }));
}
