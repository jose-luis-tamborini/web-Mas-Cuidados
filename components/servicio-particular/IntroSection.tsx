import { ChevronesIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

export default function IntroSection() {
  return (
    <section
      id="contenido"
      aria-labelledby="intro-titulo"
      className="bg-lavender py-16 lg:pt-[7.25rem] lg:pb-[4rem]"
    >
      <div {...reveal} className="container-wide flex flex-col items-center text-center">
        <Eyebrow>
          <span>
            Cuidado <strong className="font-semibold">profesional</strong> cuando lo{" "}
            <strong className="font-semibold">necesitás.</strong>
          </span>
        </Eyebrow>
        <h2 id="intro-titulo" className="mt-4 font-serif text-h2 text-[#521562] lg:mt-[1.875rem]">
          Soluciones de <strong className="font-extrabold">cuidado</strong> adaptadas a cada{" "}
          <strong className="font-extrabold">necesidad</strong>
        </h2>
        <p className="mt-6 max-w-[67rem] text-lead text-[#2b1042] lg:mt-[3.875rem] lg:text-[1.75rem] lg:leading-[3.75rem]">
          Servicio de asistencia profesional <strong className="font-semibold">disponible por horas, días o meses</strong>,
          pensado para acompañar distintas necesidades de cuidado en el domicilio
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-gradient-night px-6 text-subtitle tracking-[0.01em] text-white shadow-float transition-opacity hover:opacity-90 lg:mt-[5.6875rem] lg:h-[4.625rem] lg:w-[29.875rem] lg:px-0"
        >
          <span>
            <strong className="font-bold">Quiero</strong> que me <strong className="font-bold">contacten</strong>
          </span>
        </a>
        {/* Flecha que señala el botón */}
        <span
          aria-hidden="true"
          className="mt-4 flex h-[2.875rem] w-[2rem] items-center justify-center rounded-[0.9375rem] bg-gradient-night text-white shadow-float lg:mt-[1.4375rem]"
        >
          <ChevronesIcon className="w-[0.75rem] rotate-180 lg:w-[0.875rem]" />
        </span>
      </div>
    </section>
  );
}
