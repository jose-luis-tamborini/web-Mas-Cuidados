import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/alianzas/IntroSection";
import GestionSection from "@/components/alianzas/GestionSection";
import TrabajamosSection from "@/components/alianzas/TrabajamosSection";
import SumateSection from "@/components/alianzas/SumateSection";
import hero from "@/public/images/alianzas/hero.jpg";

export const metadata: Metadata = {
  title: "Alianzas",
  description:
    "Programa de aliados para sanatorios, obras sociales, prepagas, ART, mutuales y empresas de salud: sin inversión inicial, con rentabilidad inmediata y respaldo operativo total.",
};

export default function Alianzas() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo="Alianzas"
        tituloClassName="font-bold tracking-[0.125em] lg:ml-[0.4375rem] lg:text-[3rem] lg:leading-[1.219] lg:tracking-[0.2em]"
        siguiente="contenido"
        imagenClassName="object-[60%_50%]"
      />
      <IntroSection />
      <GestionSection />
      <TrabajamosSection />
      <SumateSection />
      <ContactoSection variante="home" />
    </>
  );
}
