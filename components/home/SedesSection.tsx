import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import { sedes, type Sede } from "@/lib/site";
import mapa from "@/public/images/home/mapa-argentina.png";
import rosario from "@/public/images/sedes/rosario.png";
import cordoba from "@/public/images/sedes/cordoba.png";
import buenosAires from "@/public/images/sedes/buenos-aires.png";
import santaFe from "@/public/images/sedes/santa-fe.png";

const iconos: Record<Sede["icono"], typeof rosario> = {
  rosario,
  cordoba,
  "buenos-aires": buenosAires,
  "santa-fe": santaFe,
};

export default function SedesSection() {
  return (
    <section aria-labelledby="sedes-titulo" className="container-site pt-20 pb-24 lg:pt-[11.0625rem] lg:pb-[9.125rem]">
      <div className="grid items-center gap-12 lg:grid-cols-[54.6875rem_1fr] lg:items-start lg:gap-0">
        <div>
          <div className="flex flex-col items-center text-center">
            <Eyebrow>Presencia nacional</Eyebrow>
            <h2 id="sedes-titulo" className="mt-1 font-serif text-h1 font-semibold lg:-mt-[0.1rem]">
              Sedes en todo el país
            </h2>
            <p className="text-lead text-[#530467] lg:leading-[2.25]">
              Estamos cerca, con cobertura nacional y atención local.
            </p>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[2.75rem] lg:grid-cols-[repeat(2,25.3125rem)] lg:gap-x-[4.0625rem] lg:gap-y-[3.8125rem]">
            {sedes.map((sede) => (
              <li
                key={sede.nombre}
                className="flex gap-4 rounded-[2.75rem] bg-white p-6 text-brand-deep shadow-card lg:min-h-[18.0625rem] lg:gap-[1.3rem] lg:pt-[1.3125rem] lg:pr-[1rem] lg:pb-[1.6875rem] lg:pl-[2.125rem]"
              >
                <Image
                  src={iconos[sede.icono]}
                  alt=""
                  sizes="112px"
                  className="size-16 shrink-0 lg:mt-[0.3125rem] lg:size-[6.75rem]"
                />
                <div className="flex flex-col">
                  <h3 className="text-[1.375rem] leading-tight font-semibold lg:text-[1.75rem] lg:leading-[1.22]">
                    {sede.nombre}
                  </h3>
                  <address className="mt-3 text-body leading-[1.635] not-italic lg:mt-[1.125rem]">
                    <strong className="font-semibold">Oficinas</strong>
                    {sede.direccion.map((linea) => (
                      <span key={linea} className="block">
                        {linea}
                      </span>
                    ))}
                    <strong className="font-semibold">{sede.ciudad}</strong>
                  </address>
                  <a
                    href={sede.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-5 text-body leading-[1.22] hover:underline"
                  >
                    Encontranos en <strong className="font-semibold">Maps</strong>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={mapa}
          alt="Mapa de Argentina con las sedes de Más Cuidados"
          sizes="(min-width: 1024px) 23vw, 40vw"
          className="mx-auto w-2/5 max-w-[27.5rem] opacity-[0.58] lg:mx-0 lg:mt-[1rem] lg:mr-[4.1875rem] lg:w-[27.625rem] lg:max-w-none lg:justify-self-end"
        />
      </div>
    </section>
  );
}
