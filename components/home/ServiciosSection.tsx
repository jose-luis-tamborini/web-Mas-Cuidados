import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import servicioParticular from "@/public/images/home/servicio-particular.jpg";
import seguroInternacion from "@/public/images/home/seguro-internacion.jpg";
import internacionDomiciliaria from "@/public/images/home/internacion-domiciliaria.jpg";

// `filtro` replica los ajustes de color que tienen las fotos en el Figma.
type Servicio = { titulo: string; bajada: string; href: string; imagen: StaticImageData; filtro?: string };

const servicios: Servicio[] = [
  {
    titulo: "Servicio Particular",
    bajada: "en domicilio.",
    href: "/servicio-particular",
    imagen: servicioParticular,
    filtro: "saturate-[1.19] contrast-[1.04]",
  },
  {
    titulo: "Seguro de Internación",
    bajada: "en Sanatorios u Hospitales.",
    href: "/seguros-de-cuidado",
    imagen: seguroInternacion,
  },
  {
    titulo: "Internación",
    bajada: "Domiciliaria.",
    href: "/internacion-domiciliaria",
    imagen: internacionDomiciliaria,
    filtro: "saturate-[1.32] brightness-[1.05]",
  },
];

export default function ServiciosSection() {
  return (
    <section aria-label="Nuestros servicios" className="container-site pt-4 lg:pt-[1.125rem]">
      <ul className="grid gap-6 md:grid-cols-3 lg:gap-[1.3125rem]">
        {servicios.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[537/325] overflow-hidden">
                <Image
                  src={s.imagen}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${s.filtro ?? ""}`}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 px-6 pt-6 pb-4 lg:min-h-[11.3125rem] lg:gap-0 lg:pt-4 lg:pr-[1.125rem] lg:pb-[1.25rem] lg:pl-[2.9375rem]">
                <h2 className="font-serif text-subtitle leading-[1.5] font-semibold text-[#370451]">
                  <span className="font-extrabold">{s.titulo}</span>
                  <br />
                  {s.bajada}
                </h2>
                <span className="self-end text-lg font-medium text-brand group-hover:underline lg:text-[1.125rem]">
                  + Info
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
