import CountUp from "@/components/ui/CountUp";
import { reveal } from "@/components/ui/reveal";

// El año cuenta desde 1990 para que se lea como años que pasan (desde 0 parece una cantidad).
const numeros = [
  { label: "Cuidando familias desde", conteo: { to: 2002, from: 1990, agrupar: false } },
  { label: "Beneficiarios", conteo: { to: 60000, prefix: "+" } },
  { label: "Horas de servicio al mes", conteo: { to: 45000, prefix: "+" } },
];

export default function NumerosSection() {
  return (
    <section aria-labelledby="numeros-titulo" className="container-site pt-16 lg:pt-[5.875rem]">
      <div
        {...reveal}
        className="rounded-[2.5rem] bg-gradient-plum px-6 py-12 text-center text-white shadow-card lg:rounded-[2.5625rem] lg:px-[3.75rem] lg:pt-[3.8125rem] lg:pb-[4.3125rem]"
      >
        <h2 id="numeros-titulo" className="font-serif text-h2 lg:leading-[1.22]">
          Los números hablan por <strong className="font-extrabold">nosotros</strong>
        </h2>
        <p className="mx-auto mt-6 max-w-[70.4375rem] text-lead leading-[1.833] lg:mt-[4.125rem]">
          La experiencia en <strong className="font-semibold">nuestros años de trayectoria</strong> y la condición de{" "}
          <strong className="font-semibold">ser pioneros en el servicio</strong> en nuestro país, nos posiciona como la{" "}
          <strong className="font-extrabold">empresa líder</strong>
          <strong className="font-semibold"> en el rubro.</strong>
        </p>
        <dl className="mx-auto mt-10 grid max-w-[89.25rem] gap-8 sm:grid-cols-3 sm:gap-0 lg:mt-[4rem]">
          {numeros.map((n, i) => (
            <div key={n.label} className="relative flex flex-col items-center gap-2 lg:gap-[0.625rem]">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[0.4rem] left-0 hidden h-[4.4375rem] w-px bg-white sm:block"
                />
              )}
              <dt className="text-body font-semibold text-[#fbf8fc]">{n.label}</dt>
              <dd className="text-stat">
                <CountUp {...n.conteo} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
