import type { Metadata } from "next";
import { canonica } from "@/lib/site";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/internacion-domiciliaria/IntroSection";
import PrestacionesSection from "@/components/internacion-domiciliaria/PrestacionesSection";
import hero from "@/public/images/internacion-domiciliaria/hero.jpg";
import ministerio from "@/public/images/internacion-domiciliaria/ministerio-de-salud.png";
import sssalud from "@/public/images/internacion-domiciliaria/sssalud.png";

export const metadata: Metadata = {
  title: "Internación domiciliaria",
  description:
    "Internación domiciliaria para obras sociales, prepagas y entidades de salud: médicos clínicos, enfermería, kinesiología, equipamiento, insumos y estudios en casa. Habilitados por la Superintendencia de Servicios de Salud.",
  ...canonica("/internacion-domiciliaria"),
};

export default function InternacionDomiciliaria() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo={
          <>
            Internación <strong>domiciliaria</strong>
          </>
        }
        // En este hero el título es más chico y va más cerca de la cruz, para dejar lugar a las habilitaciones.
        tituloClassName="tracking-[0.125em] lg:mt-[0.6875rem] lg:-ml-[0.3125rem] lg:text-[2.375rem] lg:leading-[1.219] lg:tracking-[0.2em] [&_strong]:font-bold"
        siguiente="contenido"
        imagenClassName="object-[30%_50%]"
      >
        <div className="mt-4 pl-[3.25rem] lg:mt-[1.125rem] lg:pl-[5.6875rem]">
          <p className="text-sm leading-relaxed lg:pl-[0.125rem] lg:text-[1.25rem] lg:leading-[2.375rem]">
            Habilitados por la Superintendencia de Servicios de Salud
            <br />
            <strong className="font-bold">D.G.A.M. · Certificado N.º 4139</strong>
          </p>
          <div className="mt-3 inline-flex items-center gap-3 rounded-2xl bg-[#74576d] py-1.5 pr-2 pl-2 lg:mt-0 lg:h-[3.25rem] lg:gap-[0.75rem] lg:rounded-[1.25rem] lg:p-0 lg:pr-[0.4375rem] lg:pl-[0.5625rem]">
            <Image src={ministerio} alt="Ministerio de Salud de la Nación" className="size-8 lg:size-[2.4375rem]" />
            <Image
              src={sssalud}
              alt="Superintendencia de Servicios de Salud"
              className="h-6 w-auto lg:h-[1.75rem] lg:w-[11.375rem]"
            />
          </div>
        </div>
      </PageHero>
      <IntroSection />
      <PrestacionesSection />
      <ContactoSection variante="franja" />
    </>
  );
}
