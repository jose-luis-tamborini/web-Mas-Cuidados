import Image, { type StaticImageData } from "next/image";
import CheckList from "@/components/ui/CheckList";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";

// Tarjeta grande de plan (Premium Plus, Premium, Básico y Joven): foto, texto del plan y "¿Qué incluye?".
// En desktop mide 1639×640 del diseño. En mobile la lista de "¿Qué incluye?" es un desplegable.

type Props = {
  id: string;
  titulo: string;
  imagen: StaticImageData;
  imagenAlt: string;
  /** Lo que va debajo del título (descripción, días de cobertura, opciones del plan). */
  children: React.ReactNode;
  incluye: string[];
  /** Ancho de la columna "¿Qué incluye?" en desktop, medido desde la línea divisoria. */
  incluyeClassName?: string;
  /** Separación entre el título y el texto en desktop (en el Plan Joven va más pegado). */
  textoClassName?: string;
  /** Encuadre de la foto (ej. en mobile la del Plan Joven va desde arriba para que se vean las caras). */
  imagenClassName?: string;
};

export default function PlanCard({
  id,
  titulo,
  imagen,
  imagenAlt,
  children,
  incluye,
  incluyeClassName = "lg:w-[32.75rem]",
  textoClassName = "lg:mt-[4.125rem]",
  imagenClassName = "",
}: Props) {
  return (
    <article
      id={id}
      aria-labelledby={`${id}-titulo`}
      {...reveal}
      className="overflow-hidden rounded-[1.75rem] bg-lavender text-[#521562] shadow-[0_4px_16px_4px_rgb(83_5_103/0.45)] lg:flex lg:h-[40rem] lg:rounded-[2.375rem] lg:shadow-[0_4px_23.1px_10px_#530567]"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:w-[31rem] lg:shrink-0">
        <Image src={imagen} alt={imagenAlt} fill sizes="(min-width: 1024px) 26vw, 100vw" className={`object-cover ${imagenClassName}`} />
      </div>

      <div className="px-5 pt-6 tracking-[0.015em] lg:flex-1 lg:px-0 lg:pt-[5.6875rem] lg:pr-[1.0625rem] lg:pl-[2.25rem]">
        <h2 id={`${id}-titulo`} className="font-serif text-h2 leading-tight font-semibold lg:leading-[2.875rem]">
          {titulo}
        </h2>
        <div className={`mt-4 text-body leading-[1.7] lg:text-[1.25rem] lg:leading-[2.25rem] ${textoClassName}`}>{children}</div>
      </div>

      <div
        className={`relative px-5 pt-4 pb-6 tracking-[0.015em] lg:shrink-0 lg:px-0 lg:pt-[4rem] lg:pb-0 lg:pl-[1.5rem] lg:before:absolute lg:before:top-[4.375rem] lg:before:left-0 lg:before:h-[32.5rem] lg:before:w-px lg:before:bg-brand ${incluyeClassName}`}
      >
        <MobileAccordion
          trigger={<span className="text-base font-semibold text-[#530467] uppercase">¿Qué incluye?</span>}
          triggerClassName="border-t border-brand/30 py-3"
        >
          <p className="text-[1.25rem] leading-[2.125rem] font-semibold text-[#530467] uppercase max-lg:hidden">
            ¿Qué incluye?
          </p>
          <CheckList
            variant="soft"
            items={incluye}
            iconClassName="lg:size-[2.0625rem]"
            gapClassName="lg:gap-[0.875rem]"
            className="pb-2 text-body lg:mt-[0.75rem] lg:pb-0 lg:text-[1.25rem] lg:leading-[2.875rem]"
          />
        </MobileAccordion>
        <a
          href="#contacto"
          className="mt-4 inline-flex h-12 items-center justify-center rounded-[1.125rem] bg-gradient-plum px-6 text-lg font-bold text-white shadow-card transition-opacity hover:opacity-90 lg:mt-[2.0625rem] lg:h-[5.125rem] lg:w-[13.625rem] lg:px-0 lg:text-[1.5rem] lg:tracking-normal"
        >
          Solicitar info
        </a>
      </div>
    </article>
  );
}
