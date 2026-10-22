import Image, { type StaticImageData } from "next/image";
import { ChevronesIcon, LogoCruzIcon } from "@/components/icons";

// Hero de las páginas interiores: foto con velo violeta, cruz del logo, título en mayúsculas espaciadas y
// flecha para bajar al contenido. En el diseño mide 1110 px de alto y el bloque de texto arranca en x=210.

type Props = {
  imagen: StaticImageData;
  /** Título en mayúsculas. Lo que va en <strong> sale en semibold, como en el Figma. */
  titulo: React.ReactNode;
  subtitulo?: React.ReactNode;
  /** Contenido extra debajo del título (ej. habilitaciones en Internación domiciliaria). */
  children?: React.ReactNode;
  /** id de la sección a la que baja la flecha. */
  siguiente: string;
  /** Encuadre de la foto en mobile, donde se recorta de costado (ej. "object-[60%_50%]"). */
  imagenClassName?: string;
  /** Tamaño, grosor y espaciado del título en desktop: cambian según la página. */
  tituloClassName?: string;
};

export default function PageHero({
  imagen,
  titulo,
  subtitulo,
  children,
  siguiente,
  imagenClassName = "",
  tituloClassName = "font-medium tracking-[0.125em] lg:text-[3rem] lg:leading-[1.219] [&_strong]:font-semibold",
}: Props) {
  return (
    <section className="relative isolate flex min-h-[32rem] items-center overflow-hidden bg-brand-ink pt-16 text-white lg:h-[69.375rem] lg:min-h-0 lg:items-start lg:pt-0">
      <Image src={imagen} alt="" fill preload sizes="100vw" className={`-z-20 object-cover lg:object-center ${imagenClassName}`} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#530467]/32" />

      <div className="px-5 pt-10 pb-24 sm:px-10 lg:p-0 lg:pt-[29.5625rem] lg:pl-[13.125rem]">
        <div className="flex items-start gap-3 lg:gap-[1.125rem]">
          <LogoCruzIcon className="size-10 shrink-0 lg:size-[4.875rem]" />
          <div className="pt-1 lg:pt-[0.5625rem]">
            <h1
              className={`text-[1.5rem] leading-tight uppercase ${tituloClassName}`}
            >
              {titulo}
            </h1>
            {subtitulo && (
              <p className="mt-2 text-base leading-tight font-medium tracking-[0.123em] uppercase lg:mt-[1.0625rem] lg:text-[1.875rem] lg:leading-[1.22] [&_strong]:font-bold">
                {subtitulo}
              </p>
            )}
          </div>
        </div>
        {children}
      </div>

      <a
        href={`#${siguiente}`}
        aria-label="Bajar al contenido"
        className="absolute bottom-6 left-1/2 flex h-[3.375rem] w-[2.25rem] -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-colors hover:bg-white/15 lg:bottom-[1.4375rem]"
      >
        <ChevronesIcon className="w-[1.0625rem]" />
      </a>
    </section>
  );
}
