import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

export default function SumateSection() {
  return (
    <section aria-labelledby="sumate-titulo" className="container-wide pt-20 pb-16 lg:pt-[8.375rem] lg:pb-[5rem]">
      <div
        {...reveal}
        className="flex flex-col items-center rounded-[2rem] bg-gradient-night px-6 py-12 text-center text-white shadow-card lg:mx-[1.625rem] lg:h-[28.5625rem] lg:rounded-[2.875rem] lg:p-0 lg:pt-[4.875rem]"
      >
        <Eyebrow tone="light">Programa de aliados</Eyebrow>
        <h2 id="sumate-titulo" className="mt-3 font-serif text-h2 font-bold text-balance lg:mt-[1.125rem]">
          Sumate a nuestra red
        </h2>
        <p className="mt-3 text-lead lg:mt-[0.8125rem] lg:text-[1.75rem] lg:leading-[3.75rem]">
          Llevá el cuidado profesional a tu comunidad con el respaldo de{" "}
          <strong className="font-semibold">Más Cuidados.</strong>
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-[0.9375rem] border border-white bg-white/30 px-6 text-subtitle shadow-card transition-colors hover:bg-white/40 lg:mt-[2.6875rem] lg:h-[4.5625rem] lg:w-[19.375rem] lg:px-0"
        >
          <span>
            Quiero ser <strong className="font-semibold">Aliado</strong>
          </span>
        </a>
      </div>
    </section>
  );
}
