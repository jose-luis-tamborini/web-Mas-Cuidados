import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AsisteClick from "@/components/layout/AsisteClick";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { dominioDefinitivo, siteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Más Cuidados | Cuidadores y acompañantes para sanatorios y domicilios",
    template: "%s | Más Cuidados",
  },
  description:
    "Soluciones de cuidado, planes de seguros e internación domiciliaria, coordinadas por un solo equipo para acompañar a tu familia en cada etapa. Desde 2002.",
  // Vista previa al compartir el link (WhatsApp, redes). La imagen es app/opengraph-image.jpg.
  openGraph: { type: "website", locale: "es_AR", siteName: "Más Cuidados" },
  // Sin dominio definitivo, la dirección provisoria de Vercel no se indexa (también lo dice app/robots.ts).
  ...(dominioDefinitivo ? {} : { robots: { index: false, follow: false } }),
  // El diseño es solo claro: que Dark Reader no oscurezca la página.
  other: { "darkreader-lock": "true" },
};

// Que Chrome y los navegadores con modo oscuro forzado no inviertan los colores.
export const viewport: Viewport = {
  colorScheme: "only light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${montserrat.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-dvh">
        <Header />
        <main>{children}</main>
        <Footer />
        <AsisteClick />
        <RevealOnScroll />
      </body>
    </html>
  );
}
