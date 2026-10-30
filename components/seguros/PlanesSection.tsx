import { CheckCircle } from "@/components/icons";
import PlanBanner from "./PlanBanner";
import PlanCard from "./PlanCard";
import SoporteRegional from "./SoporteRegional";
import premiumPlus from "@/public/images/seguros/premium-plus.jpg";
import premium from "@/public/images/seguros/premium.jpg";
import basico from "@/public/images/seguros/basico.jpg";
import joven from "@/public/images/seguros/joven.jpg";

// Los días de cada plan son la suma de su lista (ej. Premium Plus: 40 + 40 + 20 + 12 = 112).
function Dias({ cantidad }: { cantidad: number }) {
  return (
    <p className="mt-6 lg:mt-[2.625rem] lg:mb-[0.375rem]">
      <strong className="text-[2.25rem] leading-none font-semibold lg:text-[3rem]">{cantidad}</strong>{" "}
      <span className="text-lg font-medium lg:text-[1.5rem]">días anuales de cobertura</span>
    </p>
  );
}

// Opción del Plan Joven (Esencial / Integral)
function OpcionJoven({ nombre, items }: { nombre: string; items: React.ReactNode[] }) {
  return (
    <div className="rounded-[1.5625rem] bg-[#eee4f7] px-3 pt-2 pb-4 text-brand lg:h-[14.0625rem] lg:pt-[0.375rem] lg:pr-[0.25rem] lg:pl-[0.6875rem]">
      <p className="text-lg leading-tight lg:text-[1.5rem] lg:leading-[2rem]">
        Plan Joven <strong className="block font-semibold">{nombre}</strong>
      </p>
      <ul className="mt-3 flex flex-col gap-3 text-sm leading-snug text-[#530467] lg:mt-[0.875rem] lg:gap-[1.5rem] lg:text-[1.15rem] lg:leading-[1.5375rem]">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 lg:gap-[0.75rem]">
            <CheckCircle variant="soft" className="size-6 shrink-0 lg:size-[2.0625rem]" />
            <span className="lg:pt-[0.125rem]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PlanesSection() {
  return (
    <section aria-label="Planes" className="container-site lg:pr-[2.5625rem] lg:pl-[2.125rem]">
      <div className="flex flex-col gap-10 lg:gap-0">
        <PlanCard
          id="plan-premium-plus"
          titulo="Plan Premium Plus"
          imagen={premiumPlus}
          imagenAlt="Cuidadora conversando con una mujer en cama en su casa"
          incluye={[
            "40 días en sanatorios y hospitales",
            "40 días post internación",
            "20 días de domicilio especial",
            "12 días de acompañamiento ambulatorio",
            "Atención preferencial",
            "Telemedicina ilimitada",
            "Estudios domiciliarios (con costo)",
            "Enfermería en sedes",
          ]}
        >
          <p>Cobertura integral para acompañar internaciones, recuperación y cuidados en domicilio.</p>
          <Dias cantidad={112} />
          <p>
            Nuestro plan más completo, con{" "}
            <strong className="font-semibold">mayor cobertura, atención preferencial y acompañamiento continuo</strong> durante
            todo el proceso de cuidado.
          </p>
        </PlanCard>

        <div className="lg:mt-[7rem]">
          <PlanCard
            id="plan-premium"
            titulo="Plan Premium"
            imagen={premium}
            imagenAlt="Cuidadora tomando la mano de una mujer mayor en cama"
            incluye={[
              "40 días en sanatorios y hospitales",
              "40 días post internación",
              "20 días de domicilio especial",
              "10 días de acompañamiento ambulatorio",
              "Telemedicina ilimitada",
              "Estudios domiciliarios (con costo)",
              "Enfermería en sedes",
            ]}
          >
            <p>Cobertura integral para acompañar internaciones, recuperación y cuidados en domicilio.</p>
            <Dias cantidad={110} />
            <p>
              Diseñado para familias que buscan una cobertura más amplia, con acompañamiento profesional tanto en internación
              como en domicilio, incluyendo atención médica digital y servicios complementarios. Brinda mayor tranquilidad,
              respuesta rápida y seguimiento continuo en cada etapa.
            </p>
          </PlanCard>
        </div>

        <div className="lg:mt-[7.375rem]">
          <PlanCard
            id="plan-basico"
            titulo="Plan Básico"
            imagen={basico}
            imagenAlt="Mujer acompañando a su madre internada en un sanatorio"
            incluye={[
              "40 días en sanatorios y hospitales",
              "40 días post internación",
              "5 días de acompañamiento ambulatorio",
              "Telemedicina incluida",
              "Recetas digitales",
              "Supervisión médica",
            ]}
          >
            <p>Cobertura esencial para acompañar internaciones y recuperaciones.</p>
            <Dias cantidad={85} />
            <p>
              Pensado para familias que buscan acompañamiento profesional durante internaciones, post internación y
              situaciones que requieren apoyo y contención. Incluye acceso a herramientas de salud digital, supervisión
              médica y atención personalizada.
            </p>
          </PlanCard>
        </div>

        <div className="lg:mt-[9rem]">
          <PlanBanner />
        </div>

        <div className="lg:mt-[8.125rem]">
          <SoporteRegional />
        </div>

        <div className="lg:mt-[6.875rem]">
          <PlanCard
            id="plan-joven"
            titulo="Plan Joven"
            imagen={joven}
            imagenAlt="Cuidadora acompañando a un estudiante con el brazo enyesado"
            imagenClassName="max-lg:object-top"
            incluyeClassName="lg:w-[30.625rem]"
            textoClassName="lg:mt-[1.8125rem]"
            incluye={[
              "Videoconsultas médicas",
              "Recetas electrónicas",
              "Pedidos de estudios clínicos online",
              "Orientación sobre cuándo y dónde atenderse",
              "Cuidadores durante una internación, según el plan",
            ]}
          >
            <p>Salud y acompañamiento para estudiantes que viven lejos de sus familias.</p>
            <p className="mt-6 text-lg font-semibold text-brand lg:mt-[3.3125rem] lg:text-[1.5rem] lg:leading-[2rem]">
              Dos opciones de cobertura
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:mt-[1.75rem] lg:grid-cols-[18.0625rem_18.0625rem] lg:gap-[1.4375rem]">
              <OpcionJoven
                nombre="Esencial"
                items={[
                  <>
                    <strong className="font-semibold">5 días</strong> al año de 8 h de cuidadores en sanatorio
                  </>,
                  <>
                    <strong className="font-semibold">3 días</strong> al año de compañía ambulatoria.
                  </>,
                ]}
              />
              <OpcionJoven
                nombre="Integral"
                items={[
                  <>
                    <strong className="font-semibold">10 días</strong> al año de 8 h de cuidadores en sanatorio
                  </>,
                  <>
                    <strong className="font-semibold">5 días</strong> al año de compañía ambulatoria.
                  </>,
                ]}
              />
            </div>
          </PlanCard>
        </div>
      </div>
    </section>
  );
}
