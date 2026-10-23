import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";
import servicioParticular from "@/public/images/home/servicio-particular.jpg";
import seguroInternacion from "@/public/images/home/seguro-internacion.jpg";
import internacionDomiciliaria from "@/public/images/home/internacion-domiciliaria.jpg";

// `filtro` replica los ajustes de color que tienen las fotos en el Figma.
// `texto`: solo en mobile, dentro del desplegable (sale de la intro de cada página).
type Servicio = {
  titulo: string;
  bajada: string;
  texto: string;
  href: string;
  imagen: StaticImageData;
  filtro?: string;
};

const servicios: Servicio[] = [
  {
    titulo: "Servicio Particular",
    bajada: "en domicilio.",
    texto:
      "Servicio de asistencia profesional disponible por horas, días o meses, pensado para acompañar distintas necesidades de cuidado en el domicilio.",
    href: "/servicio-particular",
    imagen: servicioParticular,
    filtro: "saturate-[1.19] contrast-[1.04]",
  },
  {
    titulo: "Seguro de Internación",
    bajada: "en Sanatorios y Domicilios.",
    texto:
      "Planes diseñados para brindar tranquilidad en momentos de internación, recuperación o necesidad de asistencia, con atención profesional y acompañamiento continuo.",
    href: "/seguros-de-cuidado",
    imagen: seguroInternacion,
  },
  {
    titulo: "Internación",
    bajada: "Domiciliaria.",
    texto:
      "Un servicio integral que permite continuar el tratamiento en casa, con acompañamiento profesional y respaldo médico, cuidando el bienestar del paciente y su familia.",
    href: "/internacion-domiciliaria",
    imagen: internacionDomiciliaria,
    filtro: "saturate-[1.32] brightness-[1.05]",
  },
];

export default function ServiciosSection() {
  return (
    <section aria-label="Nuestros servicios" className="container-site pt-4 lg:pt-[1.125rem]">
      {/* Mobile: desplegables uno debajo del otro, cerrados, con la foto de fondo en el título (como "Nuestro diferencial"). */}
      <ul className="flex flex-col gap-4 lg:hidden">
        {servicios.map((s) => (
          <li key={s.href} {...reveal} className="overflow-hidden rounded-[1.5rem] bg-lavender shadow-panel">
            <MobileAccordion
              as="h2"
              triggerClassName="relative isolate min-h-24 px-5 py-4 text-white"
              trigger={
                <>
                  <Image src={s.imagen} alt="" fill sizes="100vw" className={`-z-20 object-cover ${s.filtro ?? ""}`} />
                  <span aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-brand-ink/90 to-brand-ink/35" />
                  <span className="text-lg leading-tight font-extrabold tracking-[0.0625rem] uppercase">
                    {s.titulo} {s.bajada.replace(/\.$/, "")}
                  </span>
                </>
              }
            >
              <div className="px-5 pt-5 pb-6">
                <p className="text-body leading-[1.7]">{s.texto}</p>
                <Link
                  href={s.href}
                  className="mt-6 inline-block rounded-[0.3125rem] border border-brand px-2 text-lg leading-[1.5] font-semibold transition-colors hover:bg-brand hover:text-white"
                >
                  + Info
                </Link>
              </div>
            </MobileAccordion>
          </li>
        ))}
      </ul>

      {/* Desktop: las tres tarjetas del Figma. */}
      <ul {...reveal} className="grid grid-cols-3 gap-[1.3125rem] max-lg:hidden">
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
                  sizes="33vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${s.filtro ?? ""}`}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between lg:min-h-[11.3125rem] lg:pt-4 lg:pr-[1.125rem] lg:pb-[1.25rem] lg:pl-[2.9375rem]">
                <h2 className="font-serif text-subtitle leading-[1.5] font-semibold text-[#370451]">
                  <span className="font-extrabold">{s.titulo}</span>
                  <br />
                  {s.bajada}
                </h2>
                <span className="self-end text-[1.125rem] font-medium text-brand group-hover:underline">+ Info</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
