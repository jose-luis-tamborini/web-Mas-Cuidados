import Image, { type StaticImageData } from "next/image";
import { ChevronesIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import sinInversion from "@/public/images/alianzas/sin-inversion.svg";
import rentabilidad from "@/public/images/alianzas/rentabilidad.svg";
import sinEstructura from "@/public/images/alianzas/sin-estructura.svg";
import respaldo from "@/public/images/alianzas/respaldo.svg";

// `icono`: círculo con la ilustración, tal cual se exportó del Figma (dos vienen apenas achatados: 158×153).
const beneficios: { texto: React.ReactNode; icono: StaticImageData; iconoClassName: string }[] = [
  { texto: "Sin inversión inicial.", icono: sinInversion, iconoClassName: "lg:h-[9.875rem]" },
  {
    texto: (
      <>
        Rentabilidad inmediata <br className="max-lg:hidden" />
        para tu negocio.
      </>
    ),
    icono: rentabilidad,
    iconoClassName: "lg:h-[9.875rem]",
  },
  {
    texto: (
      <>
        Sin necesidad de <br className="max-lg:hidden" />
        estructura propia ni RRHH.
      </>
    ),
    icono: sinEstructura,
    iconoClassName: "lg:h-[9.5625rem]",
  },
  {
    texto: (
      <>
        Con respaldo operativo <br className="max-lg:hidden" />
        total de nuestra parte.
      </>
    ),
    icono: respaldo,
    iconoClassName: "lg:h-[9.5625rem]",
  },
];

export default function IntroSection() {
  return (
    <section id="contenido" aria-labelledby="intro-titulo" className="container-wide pt-16 lg:pt-[6.375rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Crecemos juntos</Eyebrow>
        <h2 id="intro-titulo" className="mt-4 font-serif text-h2 font-semibold text-[#521562] lg:mt-[2.5rem] lg:whitespace-nowrap">
          Una oportunidad para desarrollar tu negocio con respaldo
        </h2>
        <p className="mt-4 text-lead lg:mt-[1.1875rem] lg:text-[1.75rem] lg:leading-[2.45rem]">
          Un modelo de cuidado para crecer juntos. Sumate a una red con experiencia y proyección
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-[8.5625rem] lg:grid-cols-[repeat(4,22.0625rem)] lg:justify-center lg:gap-[4.25rem]">
        {beneficios.map((b, i) => (
          <li
            key={i}
            {...reveal}
            className="flex flex-col items-center rounded-[1.75rem] bg-lavender px-3 pt-4 pb-5 text-center shadow-card lg:h-[20.75rem] lg:rounded-[3.75rem] lg:px-0 lg:pt-[1.75rem] lg:pb-[0.375rem]"
          >
            <span className="flex size-20 items-center justify-center lg:size-[9.875rem]">
              <Image src={b.icono} alt="" className={`h-full w-auto ${b.iconoClassName}`} />
            </span>
            <p className="flex flex-1 items-center pt-3 text-sm leading-snug font-semibold lg:pt-0 lg:text-[1.5rem] lg:leading-[1.22]">
              {b.texto}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center lg:mt-[3.8125rem]">
        <a
          href="#gestion"
          className="inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-gradient-night px-6 text-subtitle font-bold tracking-[0.01em] text-white shadow-float transition-opacity hover:opacity-90 lg:h-[4.625rem] lg:w-[18.5rem] lg:px-0"
        >
          Conocer más
        </a>
        {/* Flecha que señala el botón */}
        <span
          aria-hidden="true"
          className="mt-4 flex h-[2.875rem] w-[2rem] items-center justify-center rounded-[0.9375rem] bg-gradient-night text-white shadow-float lg:mt-[1.25rem]"
        >
          <ChevronesIcon className="w-[0.75rem] rotate-180 lg:w-[0.875rem]" />
        </span>
      </div>
    </section>
  );
}
