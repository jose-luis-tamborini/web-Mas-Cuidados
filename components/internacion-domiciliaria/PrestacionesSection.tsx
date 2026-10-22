import { CajaIcon, CorazonPulsoIcon, MicroscopioIcon } from "@/components/icons";
import CheckList from "@/components/ui/CheckList";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";

// En el Figma cada tarjeta tiene el ícono, el título y la lista unos px corridos: se alinean todas con la primera.

type Tarjeta = {
  titulo: string;
  Icono: (props: { className?: string }) => React.ReactNode;
  /** Ancho del ícono dentro del cuadrado violeta, como en el diseño. */
  iconoClassName: string;
  items: string[];
};

const tarjetas: Tarjeta[] = [
  {
    titulo: "Atención integral.",
    Icono: MicroscopioIcon,
    iconoClassName: "w-[2.3125rem]",
    items: ["Médicos clínicos.", "Enfermería.", "Kinesiología.", "Nutrición.", "Cuidados paliativos."],
  },
  {
    titulo: "Equipamiento e insumos.",
    Icono: CajaIcon,
    iconoClassName: "w-[2.25rem]",
    items: ["Oxígeno.", "Camas ortopédicas.", "Bombas de infusión.", "Medicación e insumos."],
  },
  {
    titulo: "Beneficios.",
    Icono: CorazonPulsoIcon,
    iconoClassName: "w-[2.6875rem]",
    items: ["ECG.", "Ecografías.", "Radiografías.", "Análisis clínicos.", "Traslados programados."],
  },
];

function IconoCuadrado({ Icono, iconoClassName }: Pick<Tarjeta, "Icono" | "iconoClassName">) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#7830ad] text-white lg:h-[5rem] lg:w-[5.0625rem] lg:rounded-[1.25rem]">
      <Icono className={`max-lg:w-6 ${iconoClassName}`} />
    </span>
  );
}

export default function PrestacionesSection() {
  return (
    <section aria-label="Prestaciones incluidas" className="container-wide pt-12 pb-20 lg:pt-[9.0625rem] lg:pb-[7.625rem]">
      {/* Mobile: desplegables (el primero abierto). Desktop: las tres tarjetas del Figma. */}
      <ul className="grid gap-4 lg:grid-cols-[repeat(3,31.6875rem)] lg:justify-center lg:gap-[3.8125rem]">
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
              <div className="pb-4 lg:pb-0 lg:pl-[2.4375rem]">
                <div className="max-lg:hidden lg:pt-[2rem]">
                  <IconoCuadrado Icono={t.Icono} iconoClassName={t.iconoClassName} />
                  <h3 className="mt-[1.0625rem] text-[2rem] leading-[1.22] font-semibold">{t.titulo}</h3>
                  <span aria-hidden="true" className="mt-[0.9375rem] ml-[1.625rem] block h-1 w-[5.875rem] bg-orchid" />
                </div>
                <CheckList
                  variant="soft"
                  items={t.items}
                  iconClassName="lg:size-[2.0625rem]"
                  gapClassName="lg:gap-[1.4375rem]"
                  className="text-body font-semibold text-[#530467] lg:mt-[1.5625rem] lg:text-[1.5rem] lg:leading-[3.3125rem]"
                />
              </div>
            </MobileAccordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
