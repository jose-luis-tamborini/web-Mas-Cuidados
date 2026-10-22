import Image from "next/image";
import { reveal } from "@/components/ui/reveal";
import gestion from "@/public/images/alianzas/gestion.jpg";

// Foto grande con velo violeta y el recuadro de texto arriba a la derecha. En mobile el recuadro va debajo de la foto.
export default function GestionSection() {
  return (
    <section id="gestion" aria-labelledby="gestion-titulo" className="container-wide pt-12 lg:pt-[2.5rem]">
      <div
        {...reveal}
        className="overflow-hidden rounded-[2rem] bg-lavender shadow-card lg:relative lg:mx-[1.6875rem] lg:h-[47.0625rem] lg:rounded-[5.625rem] lg:bg-transparent lg:shadow-none"
      >
        <div className="relative aspect-[1642/753] lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src={gestion}
            alt="Profesionales y cuidadoras de Más Cuidados en la entrada de un sanatorio"
            fill
            sizes="(min-width: 1024px) 85vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#530467]/32" />
        </div>
        <div className="px-5 py-6 text-[#530467] lg:absolute lg:top-[4.375rem] lg:right-[3.5rem] lg:w-[45.5625rem] lg:rounded-[2.4375rem] lg:bg-cream/[0.76] lg:px-0 lg:pt-[1.0625rem] lg:pr-[1.5625rem] lg:pb-[2rem] lg:pl-[1.5rem] lg:shadow-[inset_0_4px_4px_rgb(0_0_0/0.25)]">
          <h2 id="gestion-titulo" className="font-serif text-h4 font-medium lg:text-[2.5rem] lg:leading-[1.375]">
            Gestión integral de la alianza
          </h2>
          <p className="mt-3 text-body leading-[1.8] lg:mt-[0.75rem] lg:text-[1.25rem] lg:leading-[2.5rem] [&_strong]:font-semibold">
            Integramos nuestro servicio a tu <strong>cartera de afiliados.</strong>
            <br />
            Transformá un <strong>servicio</strong> de <strong>bajo impacto</strong> en una unidad de negocios con{" "}
            <strong>alta generación de ingresos</strong> y <strong>mayor permanencia del cliente.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
