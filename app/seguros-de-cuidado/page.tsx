import type { Metadata } from "next";
import { canonica } from "@/lib/site";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/seguros/IntroSection";
import PlanesSection from "@/components/seguros/PlanesSection";
import hero from "@/public/images/seguros/hero.jpg";

export const metadata: Metadata = {
  title: "Seguros de internación",
  description:
    "Planes de seguros de internación en sanatorios, domicilios e instituciones: Premium Plus, Premium, Básico, Soporte Residencial, Regional y Joven.",
  ...canonica("/seguros-de-cuidado"),
};

export default function Seguros() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo={
          <>
            Planes de seguros de internación en <br className="max-lg:hidden" />
            sanatorios, domicilios e instituciones
          </>
        }
        tituloClassName="font-semibold tracking-[0.08em] lg:text-[3rem] lg:leading-[1.219] lg:tracking-[0.2em]"
        siguiente="contenido"
        imagenClassName="object-[60%_50%]"
      />
      <IntroSection />
      <PlanesSection />
      <div className="mt-20 lg:mt-[8.375rem]">
        <ContactoSection variante="franja" />
      </div>
    </>
  );
}
