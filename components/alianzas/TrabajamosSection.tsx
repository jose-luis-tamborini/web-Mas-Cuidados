import Image, { type StaticImageData } from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import sanatorios from "@/public/images/alianzas/sanatorios.svg";
import obrasSociales from "@/public/images/alianzas/obras-sociales.svg";
import art from "@/public/images/alianzas/art.svg";
import mutuales from "@/public/images/alianzas/mutuales.svg";
import empresas from "@/public/images/alianzas/empresas-de-salud.svg";

// Los íconos traen la sombra del Figma, por eso el SVG es 8 px más ancho que el círculo (129×124 vs. 121×116).
const aliados: { texto: React.ReactNode; icono: StaticImageData; dosLineas?: boolean }[] = [
  { texto: "Sanatorios y Clínicas.", icono: sanatorios },
  {
    texto: (
      <>
        Obras Sociales
        <br />y Prepagas.
      </>
    ),
    icono: obrasSociales,
    dosLineas: true,
  },
  { texto: "ART.", icono: art },
  {
    texto: (
      <>
        Mutuales
        <br />y Cooperativas.
      </>
    ),
    icono: mutuales,
    dosLineas: true,
  },
  { texto: "Empresas de Salud.", icono: empresas },
];

export default function TrabajamosSection() {
  return (
    <section aria-labelledby="trabajamos-titulo" className="container-wide pt-20 lg:pt-[8.5rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Empezá con respaldo</Eyebrow>
        <h2 id="trabajamos-titulo" className="mt-3 font-serif text-h2 font-medium lg:mt-[1.125rem]">
          <strong className="font-bold">Trabajamos</strong> junto a
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:mx-auto lg:mt-[2.9375rem] lg:w-[96rem] lg:grid-cols-[repeat(5,15.6875rem)] lg:justify-between lg:gap-0">
        {aliados.map((a, i) => (
          <li
            key={i}
            {...reveal}
            className="flex flex-col items-center rounded-[1.75rem] bg-lavender px-2 max-sm:last:col-span-2 pt-4 pb-5 text-center text-brand shadow-card lg:h-[16.4375rem] lg:rounded-[3.75rem] lg:p-0 lg:pt-[2.125rem]"
          >
            <Image src={a.icono} alt="" className="h-16 w-auto lg:h-[7.75rem]" />
            <p
              className={`pt-2 text-sm leading-snug lg:text-[1.25rem] ${
                a.dosLineas ? "lg:pt-[1.0625rem] lg:leading-[2.125rem]" : "lg:pt-[1.0625rem] lg:leading-[3.3875rem]"
              }`}
            >
              {a.texto}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
