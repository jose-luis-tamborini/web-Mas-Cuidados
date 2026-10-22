import Image, { type StaticImageData } from "next/image";
import CheckList from "@/components/ui/CheckList";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";
import soporte from "@/public/images/seguros/soporte-residencial.jpg";
import regional from "@/public/images/seguros/regional.jpg";

// Plan Soporte Residencial y Plan Regional: dos tarjetas de 796×975 del diseño, una al lado de la otra.
// En mobile el detalle de cada plan es un desplegable.

type Props = {
  id: string;
  titulo: string;
  bajada: string;
  imagen: StaticImageData;
  imagenAlt: string;
  children: React.ReactNode;
};

function Tarjeta({ id, titulo, bajada, imagen, imagenAlt, children }: Props) {
  return (
    <article
      id={id}
      aria-labelledby={`${id}-titulo`}
      {...reveal}
      className="flex flex-col overflow-hidden rounded-[1.75rem] bg-lavender text-[#521562] shadow-[0_3.4px_11.8px_0.8px_rgb(83_5_103/0.56)] lg:h-[60.9375rem] lg:rounded-[2.0125rem]"
    >
      <div className="relative aspect-[16/7] shrink-0 lg:aspect-auto lg:h-[18.75rem]">
        <Image src={imagen} alt={imagenAlt} fill sizes="(min-width: 1024px) 41vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col px-5 pt-5 pb-6 tracking-[0.015em] lg:px-[3.5rem] lg:pt-[1.4375rem] lg:pb-[1.4375rem]">
        <h2 id={`${id}-titulo`} className="font-serif text-[1.75rem] leading-[1.2] font-semibold text-[#530467] lg:text-[2.5375rem]">
          {titulo}
        </h2>
        <p className="mt-2 text-body leading-[1.6] lg:mt-[0.9375rem] lg:text-[1.26875rem] lg:leading-[2.275rem]">{bajada}</p>
        <MobileAccordion
          trigger={<span className="text-base font-semibold text-[#530467] uppercase">¿Qué incluye?</span>}
          triggerClassName="mt-3 border-t border-brand/30 py-3"
        >
          {children}
        </MobileAccordion>
        <a
          href="#contacto"
          className="mt-4 inline-flex h-12 items-center justify-center self-center rounded-[0.95rem] bg-white px-6 text-base font-bold tracking-normal text-[#5d288a] shadow-card transition-colors hover:bg-[#fbf8fd] lg:mt-auto lg:h-[4.3125rem] lg:w-[12.1875rem] lg:px-0 lg:text-[1.26875rem]"
        >
          Solicitar info
        </a>
      </div>
    </article>
  );
}

// Columna de Plan Regional 12 / 24: lo destacado en violeta y el resto en gris, como en el diseño.
// Los segundos ítems quedan a la misma altura en las dos columnas; `anchoSegundo` hace que corten igual que en el Figma.
function Regional({ titulo, items, anchoSegundo }: { titulo: string; items: [string, React.ReactNode][]; anchoSegundo: string }) {
  return (
    <div>
      <h3 className="text-[1.375rem] leading-tight font-semibold text-[#530467] lg:text-[2.1rem] lg:leading-[1.49rem]">{titulo}</h3>
      {items.map(([destacado, resto], i) => (
        <p
          key={destacado}
          className={`text-sm leading-[1.6] text-muted lg:text-[1.2375rem] lg:leading-[2.2875rem] ${i === 0 ? "mt-4 lg:mt-[2.125rem] lg:min-h-[10.5rem]" : `mt-4 lg:mt-0 ${anchoSegundo}`}`}
        >
          <strong className="block text-lg font-semibold text-[#521562] lg:text-[1.5125rem]">{destacado}</strong>
          {resto}
        </p>
      ))}
    </div>
  );
}

export default function SoporteRegional() {
  return (
    <div className="grid gap-10 lg:grid-cols-[49.75rem_49.8125rem] lg:gap-[2.5625rem]">
      <Tarjeta
        id="plan-soporte-residencial"
        titulo="Plan Soporte Residencial"
        bajada="Una solución integral de cuidado y respaldo para residentes e instituciones."
        imagen={soporte}
        imagenAlt="Cuidadora acompañando a residentes mayores en el jardín de una residencia"
      >
        <CheckList
          variant="soft"
          iconClassName="size-6 lg:size-[1.75rem]"
          gapClassName="lg:gap-[1.75rem]"
          className="pb-2 text-sm leading-[1.6] lg:mt-[1.0625rem] lg:ml-[0.4375rem] lg:pb-0 lg:text-[1.1875rem] lg:leading-[2.43rem] [&_strong]:font-semibold"
          items={[
            <strong key="1">40 días de internación al año.</strong>,
            <>
              <strong>5 días de asistencia ambulatoria</strong> de hasta 6 horas.
            </>,
            <>
              <strong>Medicina online:</strong> recetas y pedidos de análisis, respuesta hasta 2 h, de lunes a sábado de 8 a 19 h.
            </>,
            <>
              <strong>Coordinación preferencial</strong> (hasta 12 h).
            </>,
            <strong key="5">Supervisión profesional.</strong>,
          ]}
        />
        <p className="mt-4 pb-2 text-sm leading-[1.7] text-brand lg:mt-[1.35rem] lg:ml-[0.8125rem] lg:pb-0 lg:text-[1.26875rem] lg:leading-[2.77rem]">
          <strong className="block font-bold">Beneficios institucionales</strong>A partir de 10 afiliados: 24 horas mensuales
          bonificadas cada 10 afiliados y hasta 2 jornadas recreativas por mes.
        </p>
      </Tarjeta>

      <Tarjeta
        id="plan-regional"
        titulo="Plan Regional"
        bajada="El mejor cuidado profesional cuando una internación te trae a la ciudad."
        imagen={regional}
        imagenAlt="Cuidadora acompañando a una mujer en el hall de un sanatorio"
      >
        <div className="grid gap-6 pb-2 sm:grid-cols-2 lg:mt-[1.6875rem] lg:-ml-[0.3125rem] lg:grid-cols-[20.875rem_1fr] lg:gap-0 lg:pb-0 lg:[&>div:last-child]:border-l lg:[&>div:last-child]:border-muted lg:[&>div:last-child]:pl-[2.75rem]">
          <Regional
            titulo="Plan Regional 12"
            anchoSegundo="lg:max-w-[16.4375rem]"
            items={[
              ["Hasta 40 días anuales", "de 12 horas diarias de acompañamiento."],
              ["Hasta 5 días anuales", "de servicio ambulatorio de hasta 6 horas diarias."],
            ]}
          />
          <Regional
            titulo="Plan Regional 24"
            anchoSegundo="lg:max-w-[18.4375rem]"
            items={[
              [
                "Hasta 40 días anuales",
                <>
                  de 24 horas diarias de acompañamiento, que podés dividir en{" "}
                  <strong className="font-semibold">80 días de 12 horas.</strong>
                </>,
              ],
              ["Hasta 10 días anuales", "de servicio ambulatorio de hasta 6 horas diarias."],
            ]}
          />
        </div>
      </Tarjeta>
    </div>
  );
}
