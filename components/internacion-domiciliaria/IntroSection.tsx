import { ChevronesIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

export default function IntroSection() {
  return (
    <section id="contenido" aria-labelledby="intro-titulo" className="pt-16 lg:pt-[7rem]">
      <div {...reveal} className="container-wide flex flex-col items-center text-center">
        <Eyebrow>Cuidado profesional en casa</Eyebrow>
        <h2 id="intro-titulo" className="mt-4 font-serif text-h2 font-bold text-[#521562] lg:mt-[1.75rem]">
          <span className="font-medium">Soluciones de cuidado</span> domiciliario para{" "}
          <br className="max-lg:hidden" />
          obras sociales, prepagas y entidades de salud
        </h2>
        <p className="mt-6 text-lead text-[#521562] lg:mt-[3.25rem] lg:text-[1.75rem] lg:leading-[3.75rem] [&_strong]:font-semibold">
          Brindamos un <strong>servicio integral</strong> que permite continuar el <strong>tratamiento en casa</strong>,
          con <br className="max-lg:hidden" />
          acompañamiento <strong>profesional y respaldo médico</strong>, cuidando el <strong>bienestar</strong> del{" "}
          <strong>paciente y su familia.</strong>
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-gradient-night px-6 text-subtitle font-bold tracking-[0.01em] text-white shadow-float transition-opacity hover:opacity-90 lg:mt-[5.9375rem] lg:h-[4.625rem] lg:w-[25.8125rem] lg:px-0"
        >
          Solicitar presupuesto
        </a>
        {/* Flecha que señala el botón */}
        <span
          aria-hidden="true"
          className="mt-4 flex h-[2.875rem] w-[2rem] items-center justify-center rounded-[0.9375rem] bg-gradient-night text-white shadow-float lg:mt-[0.9375rem]"
        >
          <ChevronesIcon className="w-[0.75rem] rotate-180 lg:w-[0.875rem]" />
        </span>
      </div>
    </section>
  );
}
