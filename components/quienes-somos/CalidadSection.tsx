import {
  BirreteIcon,
  ComputadoraIcon,
  EstetoscopioIcon,
  ManosCorazonIcon,
  MundoIcon,
  RelojIcon,
} from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

// En el Figma los seis círculos recortan un mismo degradado de 1250 px: cada uno muestra un tramo, del más
// oscuro al más claro. `posicion` es el desplazamiento de ese tramo.
const pilares = [
  { label: "Supervisión médica", Icono: EstetoscopioIcon, icono: "lg:w-[3.75rem]", posicion: "1%" },
  { label: "Atención 24hs", Icono: RelojIcon, icono: "lg:w-[4.1875rem]", posicion: "20%" },
  { label: "Coordinación permanente", Icono: ManosCorazonIcon, icono: "lg:w-[4.625rem]", posicion: "40%" },
  { label: "Tecnología aplicada", Icono: ComputadoraIcon, icono: "lg:w-[4.3125rem]", posicion: "60%" },
  { label: "Cobertura nacional", Icono: MundoIcon, icono: "lg:w-[3.6875rem]", posicion: "79%" },
  { label: "Capacitación continua", Icono: BirreteIcon, icono: "lg:w-[5.25rem]", posicion: "98%" },
];

export default function CalidadSection() {
  return (
    <section aria-labelledby="calidad-titulo" className="container-wide pt-20 pb-20 lg:pt-[11.1875rem] lg:pb-[13.6875rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Personas capacitadas</Eyebrow>
        <h2 id="calidad-titulo" className="mt-3 font-serif text-h2 font-normal lg:mt-[0.1875rem] [&_strong]:font-bold">
          <strong>Calidad</strong> y excelencia <strong>humana</strong>
        </h2>
        <p className="mt-5 text-lead leading-[1.6] lg:mt-[3.125rem] lg:text-[1.75rem] [&_strong]:font-semibold">
          Personas <strong>capacitadas</strong> y <strong>comprometidas</strong> para brindar una atención{" "}
          <strong>profesional y humana.</strong>
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mx-auto lg:mt-[5.5625rem] lg:w-fit lg:grid-cols-[repeat(6,12.6875rem)] lg:gap-[2.25rem]">
        {pilares.map(({ label, Icono, icono, posicion }) => (
          <li
            key={label}
            {...reveal}
            className="flex flex-col items-center rounded-[2rem] bg-lavender-soft px-3 pt-4 pb-5 text-center shadow-[inset_0_4px_4px_rgb(0_0_0/0.25)] lg:h-[17.0625rem] lg:rounded-[3.125rem] lg:px-[0.5rem] lg:pt-[1.1875rem] lg:pb-0"
          >
            <span
              className="flex size-24 items-center justify-center rounded-full bg-gradient-night text-white lg:h-[8.8125rem] lg:w-[9.25rem]"
              style={{ backgroundSize: "845% 100%", backgroundPosition: `${posicion} 0` }}
            >
              <Icono className={`w-11 ${icono}`} />
            </span>
            <span className="mt-4 text-lg leading-tight lg:mt-[1.75rem] lg:text-[1.5rem] lg:leading-[1.8125rem]">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
