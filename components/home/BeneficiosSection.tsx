import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import santander from "@/public/images/bancos/santander.png";
import galicia from "@/public/images/bancos/galicia.png";
import macro from "@/public/images/bancos/macro.png";
import mercadoPago from "@/public/images/bancos/mercado-pago.png";

// `ancho`: proporción del logo dentro de la tarjeta, como en el diseño.
const bancos = [
  { nombre: "Santander", logo: santander, ancho: "w-[84%]" },
  { nombre: "Galicia", logo: galicia, ancho: "w-[81%]" },
  { nombre: "Macro", logo: macro, ancho: "w-[74%]" },
  { nombre: "Mercado Pago", logo: mercadoPago, ancho: "w-[77%]" },
];

export default function BeneficiosSection() {
  return (
    <section aria-labelledby="beneficios-titulo" className="container-site py-20 lg:pt-[13.9375rem] lg:pb-[14rem]">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Convenios vigentes</Eyebrow>
        <h2 id="beneficios-titulo" className="mt-1 font-serif text-h1 font-semibold lg:mt-0">
          Beneficios bancarios para afiliados
        </h2>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-[5.125rem] lg:grid-cols-[repeat(4,17.1875rem)] lg:justify-between lg:gap-0">
        {bancos.map((b) => (
          <li
            key={b.nombre}
            className="flex aspect-[275/114] items-center justify-center rounded-[1.875rem] bg-gradient-plum shadow-card"
          >
            <Image src={b.logo} alt={b.nombre} sizes="230px" className={`h-auto ${b.ancho}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
