import { ChevronesIcon } from "@/components/icons";
import { reveal } from "@/components/ui/reveal";
import { planesMenu } from "./planes";

export default function IntroSection() {
  return (
    <section id="contenido" aria-labelledby="intro-titulo" className="container-site pt-16 pb-20 lg:pt-[6.875rem] lg:pb-[8.625rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        {/* Bajada con guion: acá es más chica que en el resto del sitio (20 px) */}
        <p className="text-sm leading-[1.535] text-[#29023c] lg:text-[1.25rem]">
          <span aria-hidden="true" className="mr-[1rem] inline-block h-0.5 w-[0.75rem] bg-brand align-middle" />
          <strong className="font-semibold">Cobertura y acompañamiento</strong> profesional en{" "}
          <strong className="font-semibold">sanatorios, hospitales y domicilio.</strong>
        </p>
        <h2 id="intro-titulo" className="mt-4 font-serif text-h2 text-[#2b1042] lg:mt-[2.125rem]">
          Seguros de <strong className="font-bold">internación</strong> en{" "}
          <strong className="font-bold">Sanatorios y Domicilios</strong>
        </h2>
        <p className="mt-6 max-w-[84.375rem] text-lead text-[#2b1042] lg:mt-[5.125rem] lg:text-[1.75rem] lg:leading-[3.75rem] [&_strong]:font-semibold">
          Planes diseñados para <strong>brindar tranquilidad</strong> en <strong>momentos de internación</strong>,{" "}
          <strong>recuperación</strong> o <strong>necesidad de asistencia</strong>, con{" "}
          <strong>atención profesional</strong> y <strong>acompañamiento continuo.</strong>
        </p>
      </div>

      {/* Atajos a cada plan */}
      <ul className="mx-auto mt-10 grid max-w-md gap-3 sm:max-w-none sm:grid-cols-2 lg:mt-[4.1875rem] lg:w-fit lg:grid-cols-[repeat(3,23.125rem)] lg:gap-x-[2.6875rem] lg:gap-y-[1.625rem]">
        {planesMenu.map((p) => (
          <li key={p.id}>
            <a
              href={`#${p.id}`}
              className="flex h-12 items-center justify-center rounded-full border-2 border-brand text-lg font-semibold tracking-[0.017em] text-brand transition-shadow hover:shadow-[0_4px_9.1px_#530567] hover:ring-1 hover:ring-brand lg:h-[3.4375rem] lg:text-[1.5rem]"
            >
              {p.nombre}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center lg:mt-[4.875rem]">
        <a
          href="#contacto"
          className="inline-flex h-16 items-center justify-center rounded-[1.25rem] bg-gradient-plum px-10 text-[2rem] font-semibold tracking-[0.01em] text-white shadow-[8.5px_8.5px_56.8px_rgb(0_0_0/0.25)] transition-opacity hover:opacity-90 lg:h-[5.5rem] lg:w-[15.4375rem] lg:rounded-[1.33rem] lg:px-0 lg:text-[2.8375rem]"
        >
          Afiliate
        </a>
        {/* Flecha que señala el botón */}
        <span
          aria-hidden="true"
          className="mt-3 flex h-[2.875rem] w-[2rem] items-center justify-center rounded-[0.9375rem] bg-gradient-night text-white shadow-float lg:mt-[0.6875rem]"
        >
          <ChevronesIcon className="w-[0.75rem] rotate-180 lg:w-[0.875rem]" />
        </span>
      </div>
    </section>
  );
}
