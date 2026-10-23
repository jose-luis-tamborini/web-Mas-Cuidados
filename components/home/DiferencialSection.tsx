import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import Eyebrow from "@/components/ui/Eyebrow";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";
import equipo from "@/public/images/home/equipo-coordinacion.jpg";
import seguimiento from "@/public/images/home/seguimiento-profesional.jpg";
import atencion from "@/public/images/home/atencion-donde-la-necesites.jpg";

type Diferencial = {
  titulo: string;
  texto: string;
  items: string[];
  href: string;
  imagen: StaticImageData;
  imagenAlt: string;
};

const diferenciales: Diferencial[] = [
  {
    titulo: "Equipo de coordinación",
    texto: "Centralizamos la atención para acompañar a la familia y organizar cada etapa del cuidado.",
    items: [
      "Gestión de guardias y reemplazos urgentes",
      "Control operativo y de prestadores",
      "Atención y acompañamiento a la familia los 365 días del año",
    ],
    href: "/quienes-somos",
    imagen: equipo,
    imagenAlt: "Equipo de coordinación de Más Cuidados en la oficina",
  },
  {
    titulo: "Seguimiento profesional",
    texto: "Supervisamos cada servicio para asegurar una atención continua, organizada y de calidad.",
    items: ["Supervisión permanente", "Control de calidad", "Continuidad del cuidado"],
    href: "/quienes-somos",
    imagen: seguimiento,
    imagenAlt: "Cuidadoras de Más Cuidados acompañando a una paciente en su casa",
  },
  {
    titulo: "Atención donde la necesites",
    texto: "Brindamos acompañamiento profesional adaptado al lugar y a las necesidades de cada persona.",
    items: ["En domicilio", "En sanatorios", "En hospitales"],
    href: "/servicio-particular",
    imagen: atencion,
    imagenAlt: "Cuidadora acompañando a una mujer mayor",
  },
];

export default function DiferencialSection() {
  return (
    <section aria-labelledby="diferencial-titulo" className="container-site pt-24 pb-16 lg:pt-[4.9375rem] lg:pb-[5.5625rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Nuestro diferencial</Eyebrow>
        <h2 id="diferencial-titulo" className="mt-3 font-serif text-h2 font-semibold lg:mt-[0.5625rem]">
          Mucho más que un servicio de cuidado
        </h2>
        <p className="mt-2 max-w-3xl text-body leading-[1.535] font-semibold text-brand-ink lg:mt-0 lg:max-w-[64.1875rem]">
          Acompañamos a cada familia con una atención integral, coordinada y adaptada a cada necesidad.
        </p>
      </div>

      {/* Mobile: desplegables con la foto de fondo en el título (cerrados). Desktop: tarjetas del Figma. */}
      <ul className="mt-10 flex flex-col gap-4 lg:mt-[2.625rem] lg:gap-[3.75rem]">
        {diferenciales.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <li
              key={d.titulo}
              {...reveal}
              className={`rounded-[1.5rem] bg-lavender max-lg:overflow-hidden lg:grid lg:gap-[3rem] lg:rounded-[2.25rem] lg:px-[1.25rem] lg:py-[0.75rem] ${
                reverse
                  ? "shadow-[0_4px_7.5px_3px_rgb(83_4_103/0.42)] lg:grid-cols-[45.375rem_1fr]"
                  : "shadow-panel lg:grid-cols-[1fr_45.375rem]"
              }`}
            >
              <MobileAccordion
                triggerClassName="relative isolate min-h-24 px-5 py-4 text-white"
                trigger={
                  <>
                    <Image src={d.imagen} alt="" fill sizes="100vw" className="-z-20 object-cover" />
                    <span aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-brand-ink/90 to-brand-ink/35" />
                    <span className="text-lg leading-tight font-extrabold tracking-[0.0625rem] uppercase">{d.titulo}</span>
                  </>
                }
                className={`lg:self-center ${reverse ? "lg:order-2 lg:pl-[3.3rem]" : "lg:pl-[1.375rem]"}`}
              >
                <div className="px-5 pt-5 pb-6 text-center lg:p-0">
                  <h3 className="text-title font-extrabold tracking-[0.0625rem] uppercase max-lg:hidden">{d.titulo}</h3>
                  <p className="mx-auto max-w-[43.75rem] text-body leading-[1.7] lg:mt-[1.625rem]">{d.texto}</p>
                  <CheckList items={d.items} className="mx-auto mt-4 w-fit text-left text-body lg:mt-[0.5625rem] lg:leading-[2.6]" />
                  <Link
                    href={d.href}
                    className="mt-6 inline-block rounded-[0.3125rem] border border-brand px-2 text-lg leading-[1.5] font-semibold transition-colors hover:bg-brand hover:text-white lg:mt-[1rem] lg:px-[0.5625rem] lg:text-[1.125rem]"
                  >
                    + Info
                  </Link>
                </div>
              </MobileAccordion>
              <div className="relative overflow-hidden rounded-[1.875rem] max-lg:hidden lg:h-[25.25rem]">
                <Image src={d.imagen} alt={d.imagenAlt} fill sizes="38vw" className="object-cover" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
