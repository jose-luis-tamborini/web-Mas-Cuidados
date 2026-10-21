import {
  AuricularesIcon,
  DocumentoIcon,
  PulsoIcon,
  RecetaIcon,
  VideoconsultaIcon,
} from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

type Item = { titulo: string; texto: string; Icono: (props: { className?: string }) => React.ReactNode };

type Panel = {
  titulo: string;
  bajada: React.ReactNode;
  items: Item[];
  /** Alto del panel en el diseño (los ítems van centrados). */
  alto: string;
};

const paneles: Panel[] = [
  {
    titulo: "Medicina Online",
    bajada: (
      <>
        <strong className="font-bold">Todos</strong> los servicios <strong className="font-bold">incluyen:</strong>
      </>
    ),
    items: [
      { titulo: "Videoconsultas médicas", texto: "Atención online.", Icono: VideoconsultaIcon },
      { titulo: "Recetas y análisis online", texto: "Sin moverte de tu casa.", Icono: RecetaIcon },
      { titulo: "Supervisión y auditorías médicas", texto: "En sanatorio y en el domicilio.", Icono: PulsoIcon },
    ],
    alto: "lg:h-[29.75rem]",
  },
  {
    titulo: "Respuesta inmediata",
    bajada: (
      <>
        <strong className="font-bold">Tu tranquilidad</strong> no tiene <strong className="font-bold">horario.</strong>
      </>
    ),
    items: [
      { titulo: "Atención al beneficiario", texto: "Activo 24/7 los 365 días del año.", Icono: AuricularesIcon },
      { titulo: "Gestión de guardias y reemplazos", texto: "Atención urgente.", Icono: DocumentoIcon },
    ],
    alto: "lg:h-[19.5rem]",
  },
];

export default function BeneficiosSection() {
  return (
    <section aria-labelledby="beneficios-titulo" className="container-wide pt-20 lg:pt-[8rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Cuidado inmediato</Eyebrow>
        <h2 id="beneficios-titulo" className="mt-3 font-serif text-h1 lg:mt-[0.75rem]">
          <strong className="font-semibold">Beneficios</strong> en <strong className="font-semibold">servicios</strong>{" "}
          particulares
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:mt-[4.125rem] lg:gap-[1.9375rem]">
        {paneles.map((p) => (
          <div
            key={p.titulo}
            {...reveal}
            className={`grid gap-6 rounded-[1.75rem] bg-gradient-night p-5 text-white sm:p-8 lg:grid-cols-[1fr_42.4375rem] lg:items-center lg:gap-0 lg:rounded-[2.4375rem] lg:p-0 lg:pr-[9.4375rem] lg:pl-[8.625rem] ${p.alto}`}
          >
            <div>
              <h3 className="font-serif text-h2 leading-[1.2] font-bold">{p.titulo}</h3>
              <p className="mt-2 text-lead leading-[1.22] lg:mt-[1.0625rem]">{p.bajada}</p>
            </div>
            <ul className="flex flex-col gap-3 lg:gap-[1.125rem]">
              {p.items.map(({ titulo, texto, Icono }) => (
                <li
                  key={titulo}
                  className="flex items-center gap-4 rounded-[1.25rem] bg-white/17 p-3 shadow-[inset_0_4px_4px_rgb(0_0_0/0.25)] lg:h-[7.9375rem] lg:gap-[1.375rem] lg:rounded-[1.6875rem] lg:p-0 lg:pl-[2.0625rem]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand lg:h-[4.5rem] lg:w-[4.375rem] lg:rounded-[0.9375rem]">
                    <Icono className="size-full" />
                  </span>
                  <p className="leading-snug lg:leading-[2.325rem]">
                    <strong className="block text-base font-bold lg:text-[1.75rem]">{titulo}</strong>
                    <span className="text-sm lg:text-[1.375rem]">{texto}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
