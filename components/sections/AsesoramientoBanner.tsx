import Image, { type StaticImageData } from "next/image";
import { reveal } from "@/components/ui/reveal";

// Banner con foto y panel violeta ("¿Necesitás asesoramiento?"). Se usa en Home, Seguros y Medicina online.

type Props = {
  imagen: StaticImageData;
  imagenAlt: string;
  eyebrow?: string;
  titulo: React.ReactNode;
  texto: React.ReactNode;
  cta: React.ReactNode;
  href: string;
  imagenALaDerecha?: boolean;
};

export default function AsesoramientoBanner({
  imagen,
  imagenAlt,
  eyebrow,
  titulo,
  texto,
  cta,
  href,
  imagenALaDerecha = false,
}: Props) {
  return (
    <div
      {...reveal}
      className={`grid overflow-hidden rounded-[2.875rem] bg-gradient-night shadow-card md:grid-cols-2 lg:h-[29.5625rem] ${
        imagenALaDerecha ? "lg:grid-cols-[1fr_50rem]" : "lg:grid-cols-[50rem_1fr]"
      }`}
    >
      <div className={`relative aspect-[800/473] md:aspect-auto md:min-h-[24rem] lg:min-h-0 ${imagenALaDerecha ? "md:order-2" : ""}`}>
        <Image src={imagen} alt={imagenAlt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-10 text-center text-white lg:justify-start lg:px-[2rem] lg:pt-[3.5625rem] lg:pb-0">
        {eyebrow && (
          <p className="flex items-center gap-2 text-sm lg:gap-[0.375rem] lg:text-[1.125rem] lg:leading-[1.22]">
            <span aria-hidden="true" className="h-0.5 w-2 bg-white lg:w-[0.4375rem]" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 font-serif text-h3 lg:mt-[2.3125rem]">{titulo}</h2>
        <div className="mt-5 text-sm leading-[2.4] lg:mt-[3rem] lg:w-full lg:max-w-[38.5rem] lg:text-left lg:text-base lg:leading-[2.375]">
          {texto}
        </div>
        <a
          href={href}
          className="mt-6 inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-white/30 px-3 text-subtitle shadow-card transition-colors hover:bg-white/40 lg:mt-[3.125rem] lg:h-[4.5625rem] lg:w-[25.6875rem] lg:px-0"
        >
          {/* El span evita que el flex del botón se coma el espacio antes del texto en negrita */}
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
}
