import { EstetoscopioIcon, PersonasIcon, RelojIcon } from "@/components/icons";
import CheckList from "@/components/ui/CheckList";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";

type Tarjeta = {
  titulo: string;
  Icono: (props: { className?: string }) => React.ReactNode;
  /** Ancho del ícono dentro del cuadrado violeta, como en el diseño. */
  iconoClassName: string;
  items: React.ReactNode[];
  /** La del medio tiene la letra un poco más chica para que cada ítem entre en una línea. */
  compacta?: boolean;
};

const tarjetas: Tarjeta[] = [
  {
    titulo: "¿Qué incluye?",
    Icono: EstetoscopioIcon,
    iconoClassName: "w-[2.3125rem]",
    items: [
      "Cuidador/a profesional.",
      "Atención en domicilio o sanatorio.",
      "Supervisión médica.",
      "Telemedicina.",
      "Recetas digitales.",
    ],
  },
  {
    titulo: "¿Para quién está pensado?",
    Icono: PersonasIcon,
    iconoClassName: "w-[2.9375rem]",
    items: [
      "Personas de todas las edades.",
      "Recuperaciones post internación.",
      <>
        Situaciones temporales y <strong className="font-semibold">personas con CUD.</strong>
      </>,
      "Familias que necesitan apoyo inmediato.",
      "Seguimiento continuo.",
    ],
    compacta: true,
  },
  {
    titulo: "Flexibilidad",
    Icono: RelojIcon,
    iconoClassName: "w-[2.875rem]",
    items: ["Turnos de 8, 12 o 24 hs.", "Cobertura diaria, semanal o mensual.", "Activación rápida.", "Auditoría telefónica."],
  },
];

function IconoCuadrado({ Icono, iconoClassName }: Pick<Tarjeta, "Icono" | "iconoClassName">) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#7830ad] text-white lg:h-[5rem] lg:w-[5.0625rem] lg:rounded-[1.25rem]">
      <Icono className={`max-lg:w-6 ${iconoClassName}`} />
    </span>
  );
}

export default function IncluyeSection() {
  return (
    <section aria-label="Qué incluye el servicio" className="container-wide pt-12 lg:pt-[6.75rem]">
      {/* Mobile: desplegables (el primero abierto). Desktop: las tres tarjetas del Figma. */}
      <ul className="grid gap-4 lg:grid-cols-[33.75rem_36.0625rem_33.75rem] lg:gap-[1.25rem]">
        {tarjetas.map((t, i) => (
          <li
            key={t.titulo}
            {...reveal}
            className="rounded-[1.75rem] bg-lavender px-5 py-2 text-brand shadow-card lg:h-[32.25rem] lg:rounded-[2.875rem] lg:p-0"
          >
            <MobileAccordion
              defaultOpen={i === 0}
              triggerClassName="min-h-16 py-2"
              trigger={
                <span className="flex items-center gap-4">
                  <IconoCuadrado Icono={t.Icono} iconoClassName={t.iconoClassName} />
                  <span className="text-lg font-semibold">{t.titulo}</span>
                </span>
              }
            >
              <div className="pb-4 lg:pb-0">
                <div className="max-lg:hidden lg:pt-[2.6875rem] lg:pl-[2.6875rem]">
                  <IconoCuadrado Icono={t.Icono} iconoClassName={t.iconoClassName} />
                  <h3 className="mt-[0.9375rem] text-[2rem] leading-[1.22] font-semibold">{t.titulo}</h3>
                  <span aria-hidden="true" className="mt-[1rem] ml-[0.4375rem] block h-1 w-[5.875rem] bg-orchid" />
                </div>
                <CheckList
                  variant="soft"
                  items={t.items}
                  iconClassName="lg:size-[2.0625rem]"
                  gapClassName={t.compacta ? "lg:gap-[1.25rem]" : "lg:gap-[1.3125rem]"}
                  className={`text-body lg:mt-[0.75rem] ${
                    t.compacta
                      ? "lg:pl-[1rem] lg:text-[1.38rem] lg:leading-[3.77rem]"
                      : "lg:pl-[2.0625rem] lg:text-[1.5rem] lg:leading-[3.63rem]"
                  }`}
                />
              </div>
            </MobileAccordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
