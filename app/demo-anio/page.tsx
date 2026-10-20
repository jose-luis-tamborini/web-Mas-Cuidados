import type { Metadata } from "next";
import CountUp from "@/components/ui/CountUp";

// TEMPORAL: para que el cliente elija cómo anima el año en "Los números hablan por nosotros".
// Cuando elija, dejar esa variante en NumerosSection y borrar esta carpeta.

export const metadata: Metadata = {
  title: "Prueba de animación del año",
  robots: { index: false, follow: false },
};

const variantes = [
  { titulo: "A · Cuenta desde 0", valor: <CountUp to={2002} agrupar={false} /> },
  { titulo: "B · Cuenta desde 1990", valor: <CountUp to={2002} from={1990} agrupar={false} /> },
  { titulo: "C · Sin conteo", valor: "2002" },
];

export default function DemoAnio() {
  return (
    <section className="container-site pt-28 pb-24 lg:pt-[12rem]">
      <h1 className="font-serif text-h2 font-semibold">Animación del año</h1>
      <p className="mt-4 max-w-3xl text-body">
        Las tres formas posibles de mostrar &quot;2002&quot; en la sección de números. Los otros dos números (+60.000 y
        +45.000) cuentan desde 0 en todos los casos.
      </p>
      <a href="/demo-anio" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white">
        Ver de nuevo
      </a>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {variantes.map((v) => (
          <li key={v.titulo}>
            <p className="mb-3 font-semibold">{v.titulo}</p>
            <div className="flex flex-col items-center gap-2 rounded-[2.5rem] bg-gradient-plum px-6 py-12 text-white shadow-card">
              <span className="text-body font-semibold text-[#fbf8fc]">Cuidando familias desde</span>
              <span className="text-stat">{v.valor}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
