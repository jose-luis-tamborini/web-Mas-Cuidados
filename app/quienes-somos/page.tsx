import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import EstructuraSection from "@/components/quienes-somos/EstructuraSection";
import ComoTrabajamosSection from "@/components/quienes-somos/ComoTrabajamosSection";
import CompromisoSection from "@/components/quienes-somos/CompromisoSection";
import CalidadSection from "@/components/quienes-somos/CalidadSection";
import hero from "@/public/images/quienes-somos/hero.jpg";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Desde 2002 acompañamos a pacientes y familias en domicilios, sanatorios e instituciones: 4 sedes, más de 250 prestadores y coordinación las 24 horas, los 365 días del año.",
};

export default function QuienesSomos() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo={
          <>
            ¿Quiénes <strong>somos?</strong>
          </>
        }
        tituloClassName="font-medium tracking-[0.125em] lg:-ml-[0.6875rem] lg:text-[3rem] lg:leading-[1.219] lg:tracking-[0.2em] [&_strong]:font-bold"
        siguiente="contenido"
        // En el Figma la foto está espejada: la enfermera queda a la izquierda, del lado del título.
        imagenClassName="-scale-x-100 object-[60%_50%]"
      />
      <EstructuraSection />
      <ComoTrabajamosSection />
      <CompromisoSection />
      <CalidadSection />
      <ContactoSection variante="angosta" />
    </>
  );
}
