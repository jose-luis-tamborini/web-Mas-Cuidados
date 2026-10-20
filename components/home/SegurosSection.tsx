import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import seguros from "@/public/images/home/seguros.jpg";

export default function SegurosSection() {
  return (
    <section aria-labelledby="seguros-titulo" className="bg-lavender py-16 lg:pt-[5.625rem] lg:pb-[6.0625rem]">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[49.125rem_1fr] lg:gap-[4.25rem]">
        <div {...reveal} className="relative aspect-[786/677] overflow-hidden rounded-[2.5rem] lg:rounded-[3.8125rem]">
          <Image
            src={seguros}
            alt="Cuidadora abrazando a una mujer mayor en silla de ruedas"
            fill
            sizes="(min-width: 1024px) 41vw, 100vw"
            className="object-cover"
          />
        </div>
        <div {...reveal}>
          <Eyebrow>Seguros de planes de cuidados</Eyebrow>
          <h2 id="seguros-titulo" className="mt-4 max-w-[51.6875rem] font-serif text-h4 font-semibold lg:mt-[1rem]">
            Con una cuota mensual accesible, tu familia accede a cuidado en sanatorios, domicilio e instituciones
          </h2>
          <CheckList
            variant="soft"
            iconClassName="lg:size-[2.0625rem]"
            className="mt-8 text-lead lg:mt-[3rem] lg:leading-[2.32]"
            items={[
              "Atención dentro de las 24 hs de solicitud",
              "Cuidado experto y respuesta inmediata",
              "Ahorro frente al gasto particular imprevisto",
            ]}
          />
          <Link
            href="/seguros-de-cuidado"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-[0.9375rem] bg-brand px-8 text-subtitle text-white shadow-card transition-colors hover:bg-brand-deep lg:mt-[4.6875rem] lg:h-[4.5625rem] lg:w-[25.6875rem] lg:px-0"
          >
            Conocé los planes
          </Link>
        </div>
      </div>
    </section>
  );
}
