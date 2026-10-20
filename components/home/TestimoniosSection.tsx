import Image, { type StaticImageData } from "next/image";
import { QuoteIcon, StarIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import micaela from "@/public/images/testimonios/micaela-gabutto.png";
import monica from "@/public/images/testimonios/monica-zuccolo.png";
import mariano from "@/public/images/testimonios/mariano-barrientos.png";
import claudia from "@/public/images/testimonios/claudia-avogadro.png";
import berni from "@/public/images/testimonios/berni-buratti.png";
import estefania from "@/public/images/testimonios/estefania-walker.png";
import emmanuel from "@/public/images/testimonios/emmanuel-fleba.png";
import emilse from "@/public/images/testimonios/emilse-silvas.png";

type Testimonio = { nombre: string; lugar: string; texto: string; foto: StaticImageData };

// Reseñas tal como están en el Figma (componente "reseñas 22").
const testimonios: Testimonio[] = [
  { nombre: "Micaela Gabutto", lugar: "Rosario, Santa Fe", texto: "Muy buen servicio.", foto: micaela },
  {
    nombre: "Monica Zuccolo",
    lugar: "CABA, Buenos Aires",
    texto: "Muy buena ! atención y excelente la parte humana!!! . Al igual que la coordinación de la empresa!!!",
    foto: monica,
  },
  {
    nombre: "Mariano Barrientos",
    lugar: "Córdoba, Córdoba",
    texto:
      "Me encantó como cuidaron a mi papá. Mejoró notablemente su ánimo y su peso. Servicio recomendable, muy buena la prestadora Estefania.",
    foto: mariano,
  },
  {
    nombre: "Claudia Avogadro",
    lugar: "Rosario, Santa Fe",
    texto: "Excelente el servicio y el personal seleccionado. Totalmente recomendable",
    foto: claudia,
  },
  {
    nombre: "Berni Buratti",
    lugar: "Santa Fe, Santa Fe",
    texto: "Estoy muy conforme con el servicio, exelente atención del personal.",
    foto: berni,
  },
  {
    nombre: "Estefania Walker",
    lugar: "Santa Fe, Santa Fe",
    texto: "Muy buena atención de parte del personal. 100% recomendado 👏🏼",
    foto: estefania,
  },
  { nombre: "Emmanuel Fleba", lugar: "CABA, Buenos Aires", texto: "Excelente el trato que tuvieron 💚", foto: emmanuel },
  {
    nombre: "Emilse Silvas",
    lugar: "Santa Fe, Santa Fe",
    texto: "Estoy muy conforme con el servicio, exelente atención del personal.",
    foto: emilse,
  },
];

function Tarjeta({ t, hidden = false }: { t: Testimonio; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="relative mr-10 w-[min(84vw,37.5rem)] shrink-0 pt-6 pl-6 lg:mr-[3.5625rem] lg:w-[39.125rem] lg:pt-[3.125rem] lg:pl-[1.875rem]"
    >
      <div className="absolute top-0 left-0 z-10 size-20 rounded-full bg-[#d9d9d9] p-1.5 lg:size-[9.0625rem] lg:p-[0.6875rem]">
        <Image src={t.foto} alt="" className="size-full rounded-full object-cover" sizes="130px" />
      </div>
      <figure className="flex h-full min-h-64 flex-col rounded-[2.25rem] bg-white/40 px-6 pt-14 pb-10 text-center shadow-card lg:min-h-[23.375rem] lg:px-[2.75rem] lg:pt-[3.25rem] lg:pb-[2.6875rem]">
        <figcaption className="pl-10 lg:pl-[1.25rem]">
          <p className="text-[1.375rem] leading-tight font-semibold lg:text-[2.5rem] lg:leading-[1.22]">{t.nombre}</p>
          <p className="text-body leading-snug lg:leading-[1.22]">{t.lugar}</p>
        </figcaption>
        <blockquote className="mt-6 flex-1 text-lead leading-[1.22] text-[#530467] lg:mt-[2.625rem]">{t.texto}</blockquote>
        <div className="mt-6 flex justify-center gap-1 lg:gap-[0.1875rem]" role="img" aria-label="5 de 5 estrellas">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="size-7 lg:size-[2.25rem]" />
          ))}
        </div>
      </figure>
      <QuoteIcon className="absolute -right-1 -bottom-8 w-16 text-muted lg:-right-[0.0625rem] lg:-bottom-[2.6875rem] lg:w-[6.6875rem]" />
    </li>
  );
}

export default function TestimoniosSection() {
  return (
    <section aria-labelledby="testimonios-titulo" className="overflow-hidden pt-24 pb-16 lg:pt-[13.25rem] lg:pb-[8.625rem]">
      <div {...reveal} className="container-site flex flex-col items-center text-center">
        <Eyebrow>Testimonios</Eyebrow>
        <h2 id="testimonios-titulo" className="mt-1 font-serif text-h2 font-semibold lg:mt-[0.5625rem]">
          Lo que dicen las familias
        </h2>
      </div>

      {/* Carrusel continuo: la lista se repite dos veces para que el loop no tenga cortes. Se pausa al pasar el mouse. */}
      <div {...reveal} className="group mt-12 motion-reduce:overflow-x-auto lg:mt-[6.25rem]">
        <ul className="flex w-max animate-marquee pb-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none lg:pb-[2.6875rem]">
          {testimonios.map((t) => (
            <Tarjeta key={t.nombre} t={t} />
          ))}
          {testimonios.map((t) => (
            <Tarjeta key={`${t.nombre}-copia`} t={t} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
