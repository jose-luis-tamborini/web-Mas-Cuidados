import Image from "next/image";
import { reveal } from "@/components/ui/reveal";
import asesora from "@/public/images/seguros/asesoramiento.jpg";

// "El plan para cada necesidad": panel violeta con la foto a la derecha. Es distinto del banner de
// asesoramiento de la Home (título más grande, botón blanco), por eso no reutiliza AsesoramientoBanner.
export default function PlanBanner() {
  return (
    <div
      {...reveal}
      className="grid overflow-hidden rounded-[2rem] bg-gradient-night text-white shadow-card md:grid-cols-2 lg:h-[29.5625rem] lg:grid-cols-[1fr_49.75rem] lg:rounded-[2.875rem]"
    >
      <div className="flex flex-col items-center px-6 py-10 text-center lg:p-0 lg:pt-[9.3125rem] lg:pl-[4rem]">
        <h2 className="font-serif text-h3 lg:text-[3.4375rem] lg:leading-[1.333]">El plan para cada necesidad</h2>
        <p className="mt-3 text-base leading-[2.11] lg:mt-[1.4375rem] lg:text-[1.125rem]">
          Estamos <strong className="font-semibold">disponibles</strong> para{" "}
          <strong className="font-semibold">ayudarte</strong>
        </p>
        <a
          href="#contacto"
          className="mt-5 inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-white px-6 text-lead text-brand-deep shadow-card transition-colors hover:bg-lavender lg:mt-[2.375rem] lg:h-[4.125rem] lg:w-[18.6875rem] lg:px-0 lg:text-[1.5rem]"
        >
          <span>
            Solicitar <strong className="font-semibold">asesoramiento</strong>
          </span>
        </a>
      </div>
      <div className="relative aspect-[796/473] max-md:-order-1 md:aspect-auto">
        <Image
          src={asesora}
          alt="Asesora de Más Cuidados atendiendo en la oficina"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
