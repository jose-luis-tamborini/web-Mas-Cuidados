import { CapasIcon, EstetoscopioIcon, EstrellasIcon } from "@/components/icons";
import CheckList from "@/components/ui/CheckList";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";

// En el Figma cada tarjeta tiene el ícono, el título y la lista unos px corridos: se alinean todas con la primera.
// La del medio lleva pasos numerados en vez de tildes.

type Tarjeta = {
  titulo: string;
  Icono: (props: { className?: string }) => React.ReactNode;
  /** Ancho del ícono dentro del cuadrado violeta, como en el diseño. */
  iconoClassName: string;
  items: React.ReactNode[];
  numerada?: boolean;
};

const tarjetas: Tarjeta[] = [
  {
    titulo: "¿Qué incluye?",
    Icono: EstetoscopioIcon,
    iconoClassName: "w-[2.3125rem]",
    items: [
      <>
        <strong>Videollamadas</strong> médicas.
      </>,
      <>
        <strong>Recetas</strong> digitales.
      </>,
      <>
        <strong>Órdenes</strong> médicas.
      </>,
      <>
        <strong>Seguimiento profesional.</strong>
      </>,
    ],
  },
  {
    titulo: "¿Cómo funciona?",
    Icono: EstrellasIcon,
    iconoClassName: "w-[2.3125rem]",
    items: [
      "Agendás tu consulta",
      "Te conectás con un médico",
      "Recibís tu diagnóstico",
      "Obtenés tus recetas y órdenes",
      "Seguimiento continuo",
    ],
    numerada: true,
  },
  {
    titulo: "Beneficios adicionales.",
    Icono: CapasIcon,
    iconoClassName: "w-[2.375rem]",
    items: [
      <>
        Respuesta <strong>rápida.</strong>
      </>,
      <>
        Mayor <strong>comodidad.</strong>
      </>,
      <>
        Atención <strong>desde el hogar.</strong>
      </>,
      <>
        <strong>Integración</strong> con otros servicios.
      </>,
    ],
  },
];

const listaClassName = "text-body lg:mt-[1.75rem] lg:text-[1.5rem] lg:leading-[3.3125rem] [&_strong]:font-semibold";

function IconoCuadrado({ Icono, iconoClassName }: Pick<Tarjeta, "Icono" | "iconoClassName">) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#7830ad] text-white lg:h-[5rem] lg:w-[5.0625rem] lg:rounded-[1.25rem]">
      <Icono className={`max-lg:w-6 ${iconoClassName}`} />
    </span>
  );
}

function Pasos({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className={`flex flex-col gap-3 font-semibold lg:gap-0 ${listaClassName}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 lg:items-center lg:gap-[1.4375rem]">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-cream text-sm text-[#530467] lg:mt-0 lg:size-[2.0625rem] lg:text-[1.5rem]"
          >
            {i + 1}
          </span>
          <span className="pt-0.5 lg:pt-0">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function ServicioSection() {
  return (
    <section aria-label="Cómo es el servicio" className="container-wide pt-12 pb-16 lg:pt-[5.6875rem] lg:pb-[7rem]">
      {/* Mobile: desplegables (cerrados). Desktop: las tres tarjetas del Figma. */}
      <ul className="grid gap-4 lg:grid-cols-[repeat(3,31.6875rem)] lg:justify-center lg:gap-[3.8125rem]">
        {tarjetas.map((t) => (
          <li
            key={t.titulo}
            {...reveal}
            className="rounded-[1.75rem] bg-lavender px-5 py-2 text-brand shadow-card lg:h-[32.25rem] lg:rounded-[2.875rem] lg:p-0"
          >
            <MobileAccordion
              triggerClassName="min-h-16 py-2"
              trigger={
                <span className="flex items-center gap-4">
                  <IconoCuadrado Icono={t.Icono} iconoClassName={t.iconoClassName} />
                  <span className="text-lg font-semibold">{t.titulo}</span>
                </span>
              }
            >
              <div className="pb-4 lg:pb-0 lg:pl-[2.0625rem]">
                <div className="max-lg:hidden lg:pt-[2.1875rem]">
                  <IconoCuadrado Icono={t.Icono} iconoClassName={t.iconoClassName} />
                  <h3 className="mt-[0.9375rem] text-[2rem] leading-[1.22] font-semibold">{t.titulo}</h3>
                  <span aria-hidden="true" className="mt-[0.875rem] ml-[0.4375rem] block h-1 w-[5.875rem] bg-orchid" />
                </div>
                {t.numerada ? (
                  <Pasos items={t.items} />
                ) : (
                  <CheckList
                    variant="soft"
                    items={t.items}
                    iconClassName="lg:size-[2.0625rem]"
                    gapClassName="lg:gap-[1.4375rem]"
                    className={listaClassName}
                  />
                )}
              </div>
            </MobileAccordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
