import { CheckCircle } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";

type Area = {
  numero: string;
  area: string;
  titulo: React.ReactNode;
  texto: string;
  items: string[];
  /** La segunda tarjeta va destacada en el Figma: sombra violeta y tildes lilas. */
  destacada?: boolean;
};

const areas: Area[] = [
  {
    numero: "01",
    area: "Recursos humanos",
    titulo: (
      <>
        El área que <strong>selecciona</strong> y <strong>acompaña</strong> a quienes cuidan.
      </>
    ),
    texto: "Buscamos y seleccionamos profesionales comprometidos para garantizar una atención responsable, humana y de calidad.",
    items: ["Selección de personal", "Evaluación y seguimiento", "Calidad humana"],
  },
  {
    numero: "02",
    area: "Equipo de trabajo",
    titulo: (
      <>
        <strong>Capacitación</strong> permanente.
      </>
    ),
    texto: "Formamos y acompañamos a nuestro personal para brindar una atención profesional, segura y humana.",
    items: ["Capacitación continua", "Buen trato y empatía", "Desarrollo profesional"],
    destacada: true,
  },
  {
    numero: "03",
    area: "Control de calidad",
    titulo: (
      <>
        <strong>Supervisión</strong> y seguimiento.
      </>
    ),
    texto: "Un sistema de control integral para garantizar tranquilidad, confianza y excelencia en cada servicio.",
    items: ["Supervisión domiciliaria", "Auditorías médicas", "Seguimiento continuo"],
  },
];

export default function ComoTrabajamosSection() {
  return (
    <section aria-labelledby="como-trabajamos-titulo" className="container-wide pt-20 lg:pt-[4rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>¿Cómo trabajamos?</Eyebrow>
        <h2 id="como-trabajamos-titulo" className="mt-3 font-serif text-h2 text-[#521562] lg:mt-[0.625rem] [&_strong]:font-bold">
          Cuidamos <strong>personas</strong>, acompañamos <strong>familias</strong>
        </h2>
        <p className="mt-6 text-body leading-[1.535] text-brand-ink lg:mt-[4.75rem] lg:text-[1.25rem] [&_strong]:font-semibold">
          Somos un <strong>equipo comprometido</strong> con brindar atención{" "}
          <strong>profesional, humana y cercana a cada familia.</strong>
        </p>
      </div>

      {/* En desktop las tres miden lo mismo (372 px del diseño) y el contenido queda centrado en alto. */}
      <ul className="mt-10 flex flex-col gap-4 lg:mx-auto lg:mt-[4.3125rem] lg:w-[87.6875rem] lg:gap-[3.25rem]">
        {areas.map((a) => (
          <li
            key={a.numero}
            {...reveal}
            className={`relative rounded-[1.5rem] bg-lavender text-[#530467] lg:flex lg:min-h-[23.25rem] lg:flex-col lg:justify-center lg:rounded-[2.25rem] lg:pt-[1.75rem] lg:pr-[3.5rem] lg:pb-[1.4375rem] lg:pl-[6.125rem] ${
              a.destacada ? "shadow-[0_4px_14.2px_5px_rgb(83_5_103/0.37)]" : "shadow-[0_4px_14.2px_5px_rgb(0_0_0/0.25)]"
            }`}
          >
            <MobileAccordion
              triggerClassName="px-5 py-4"
              trigger={
                <span className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl text-black/25">{a.numero}</span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide uppercase">{a.area}</span>
                    <span className="mt-1 block text-lg leading-tight font-semibold [&_strong]:font-extrabold">{a.titulo}</span>
                  </span>
                </span>
              }
            >
              <div className="px-5 pb-6 lg:p-0">
                <span
                  aria-hidden="true"
                  className="absolute top-[1.3rem] right-[3.5rem] font-serif text-[6rem] leading-none text-black/24 max-lg:hidden"
                >
                  {a.numero}
                </span>
                <p className="flex items-center gap-[0.25rem] text-base leading-[1.22] font-semibold uppercase max-lg:hidden lg:pl-[0.25rem]">
                  <span aria-hidden="true" className="inline-block h-[3px] w-[0.625rem] bg-current" />
                  {a.area}
                </p>
                <h3 className="max-w-[38.8125rem] text-[2.5rem] leading-[1.22] font-semibold max-lg:hidden lg:mt-[2.03rem] [&_strong]:font-extrabold">
                  {a.titulo}
                </h3>
                <p className="max-w-[40.3125rem] text-body leading-[1.7] text-[#521562] lg:mt-[0.3125rem] lg:text-[1.25rem] lg:leading-[2.5rem]">
                  {a.texto}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 lg:mt-[1.875rem] lg:gap-[1rem]">
                  {a.items.map((item) => (
                    <li
                      key={item}
                      className={`flex h-11 items-center gap-2 rounded-full border bg-white pr-4 pl-1.5 text-sm text-black lg:h-[3.5rem] lg:gap-[1rem] lg:pr-[0.9375rem] lg:pl-[0.6875rem] lg:text-[1.25rem] ${
                        a.destacada ? "border-footer" : "border-mauve"
                      }`}
                    >
                      <CheckCircle variant={a.destacada ? "lilac" : "solid"} className="size-8 shrink-0 lg:size-[2.25rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MobileAccordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
