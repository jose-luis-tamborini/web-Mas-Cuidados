import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/contacto/IntroSection";
import hero from "@/public/images/contacto/hero.jpg";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Dejanos tus datos y un asesor de Más Cuidados se comunica con vos para orientarte sobre cuidadores, seguros de internación, internación domiciliaria y medicina online.",
};

export default function Contacto() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo="Contacto"
        tituloClassName="font-bold tracking-[0.125em] lg:ml-[0.4375rem] lg:text-[3rem] lg:leading-[1.219] lg:tracking-[0.2em]"
        siguiente="contenido"
        imagenClassName="object-[36%_50%]"
      />
      <IntroSection />
      <ContactoSection variante="franja" />
    </>
  );
}
