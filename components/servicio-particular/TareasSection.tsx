import { AutoIcon, CubiertosIcon, DuchaIcon, MedicacionIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

// `ancho`: tamaño del ícono dentro del círculo, como en el diseño.
const tareas = [
  { texto: "Medicación oral", Icono: MedicacionIcon, ancho: "w-[2.9375rem]" },
  { texto: "Higiene y confort", Icono: DuchaIcon, ancho: "w-[3.0625rem]" },
  { texto: "Alimentación e hidratación", Icono: CubiertosIcon, ancho: "w-[3.4375rem]" },
  { texto: "Traslados y acompañamiento", Icono: AutoIcon, ancho: "w-[3.4375rem]" },
];

export default function TareasSection() {
  return (
    <section aria-labelledby="tareas-titulo" className="container-wide pt-20 pb-20 lg:pt-[6.8125rem] lg:pb-[7.9375rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Cuidar es estar presentes</Eyebrow>
        <h2
          id="tareas-titulo"
          className="mt-3 font-serif text-h2 font-semibold lg:mt-[1.5625rem] lg:text-[4.375rem] lg:leading-[1.333]"
        >
          <span className="font-normal">Tareas que realizan los</span> cuidadores
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-[4.625rem] lg:grid-cols-[repeat(4,22.9375rem)] lg:justify-between lg:gap-0 lg:px-[1.3125rem]">
        {tareas.map(({ texto, Icono, ancho }) => (
          <li
            key={texto}
            {...reveal}
            className="flex flex-col items-center rounded-[2rem] bg-[#f0d9ff]/50 px-3 pt-3 pb-4 text-center text-[#530467] shadow-[inset_0_4.8px_4.8px_rgb(0_0_0/0.125)] lg:h-[15.0625rem] lg:rounded-[3.45rem] lg:p-0 lg:pt-[0.6875rem]"
          >
            <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_0_4.8px_4.8px_rgb(0_0_0/0.25)] lg:size-[8.4375rem]">
              <Icono className={`max-lg:w-8 ${ancho}`} />
            </span>
            <span className="flex flex-1 items-center pt-2 text-base leading-snug lg:max-w-[18.5rem] lg:pt-0 lg:pb-[0.625rem] lg:text-[1.8rem] lg:leading-[1.25]">
              {texto}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
