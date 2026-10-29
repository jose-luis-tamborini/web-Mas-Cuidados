import type { Metadata } from "next";
import { canonica } from "@/lib/site";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/servicio-particular/IntroSection";
import IncluyeSection from "@/components/servicio-particular/IncluyeSection";
import BeneficiosSection from "@/components/servicio-particular/BeneficiosSection";
import TareasSection from "@/components/servicio-particular/TareasSection";
import CudSection from "@/components/servicio-particular/CudSection";
import hero from "@/public/images/servicio-particular/hero.jpg";

export const metadata: Metadata = {
  title: "Servicio particular en domicilio",
  description:
    "Cuidadores profesionales en domicilio o sanatorio, por horas, días o meses. Turnos de 8, 12 o 24 hs, supervisión médica y telemedicina incluidas.",
  ...canonica("/servicio-particular"),
};

export default function ServicioParticular() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo={
          <>
            Servicio <strong>particular</strong> en <strong>domicilio</strong>
          </>
        }
        subtitulo={
          <>
            Cuidado <strong>inmediato</strong>
          </>
        }
        siguiente="contenido"
        imagenClassName="object-[55%_50%]"
      />
      <IntroSection />
      <IncluyeSection />
      <BeneficiosSection />
      <TareasSection />
      <CudSection />
      <ContactoSection variante="pagina" />
    </>
  );
}
