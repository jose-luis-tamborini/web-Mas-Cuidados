import Image from "next/image";
import CheckList from "@/components/ui/CheckList";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import cud from "@/public/images/servicio-particular/cud.jpg";

export default function CudSection() {
  return (
    <section aria-labelledby="cud-titulo" className="bg-lavender py-16 lg:pt-[5.75rem] lg:pb-[11.0625rem]">
      <div className="container-wide grid gap-10 lg:grid-cols-[48.3125rem_1fr] lg:items-start lg:gap-[8.25rem]">
        <div
          {...reveal}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-[49.625rem] lg:rounded-[3.75rem]"
        >
          <Image
            src={cud}
            alt="Cuidadora acercándole un café a un hombre que trabaja en su computadora"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div {...reveal} className="flex flex-col lg:max-w-[43.6875rem] lg:pt-[2.375rem]">
          <Eyebrow className="self-center">Certificado Único de Discapacidad</Eyebrow>
          <h2 id="cud-titulo" className="mt-4 font-serif text-h2 font-semibold lg:mt-[1.75rem]">
            ¿Tenés CUD y necesitás asistencia en tu hogar?
          </h2>
          <div className="mt-5 text-body leading-[1.65] text-[#4d0d5d] lg:mt-[1.4375rem] lg:text-[1.25rem] lg:leading-[2.0625rem] [&_strong]:font-semibold">
            <p>
              El <strong>CUD</strong> permite acceder a <strong>distintas prestaciones</strong> de{" "}
              <strong>salud y apoyo</strong> según cada <strong>necesidad.</strong>
            </p>
            <p className="mt-4 lg:mt-[2.0625rem]">
              En <strong>Más Cuidados</strong> te acompañamos en la <strong>gestión y coordinamos</strong> la atención
              que necesitás en tu hogar.
            </p>
          </div>
          <CheckList
            variant="lilac"
            iconClassName="lg:size-[2.0625rem]"
            className="mt-6 text-lead lg:mt-[1.4375rem] lg:leading-[3.48rem]"
            items={[
              "Orientación durante la gestión",
              "Coordinación con obras sociales y prepagas",
              "Equipo profesional para la atención domiciliaria",
            ]}
          />
          <a
            href="#contacto"
            className="mt-8 inline-flex h-14 items-center justify-center self-center rounded-[0.9375rem] bg-gradient-night px-6 text-subtitle text-white shadow-card transition-opacity hover:opacity-90 lg:mt-[1.875rem] lg:h-[4.5625rem] lg:w-[25.6875rem] lg:px-0"
          >
            <span>
              Solicitar <strong className="font-semibold">asesoramiento</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
