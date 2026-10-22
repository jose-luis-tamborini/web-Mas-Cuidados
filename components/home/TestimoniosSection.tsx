import { StarIcon } from "@/components/icons";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";
import { resenasGoogle } from "@/lib/site";

// Reseñas reales de Google (5 estrellas), elegidas por el cliente. Los textos van tal cual los escribieron;
// del apellido se muestra solo la inicial. Van intercaladas largas y cortas para que siempre se vean tres o cuatro.
const testimonios = [
  {
    nombre: "Laura G.",
    texto:
      "Súper conforme con el servicio. Lo pago desde hace 3 años y nunca lo había necesitado, así que dudaba de si realmente sería una solución.\nEste año lamentablemente tuve que recurrir a él y solo tengo cosas buenas para decir.\nLas coordinadoras son muy amables y las cuidadoras son excelentes, educadas, puntuales y muy amorosas. Todo el proceso es muy simple y es una gran solución para los momentos más difíciles. Recomiendo totalmente.",
  },
  {
    nombre: "Marina K.",
    texto:
      "Al momento de necesitarlo cumplieron con todo, coordinando e informando los relevos cada día. Fue un alivio contar con su servicio",
  },
  {
    nombre: "Horacio C.",
    texto:
      "Tuvimos una excelente experiencia con María Fernanda, por la ternura , amorosidad y la calidad en los cuidados. Como así también, de todas las personas que se comunicaron de manera constante para garantizar el acompañamiento, muchas gracias!!!",
  },
  {
    nombre: "Susana P.",
    texto:
      "Excelente atención en la oficina brindando ayuda en un momento donde uno tanto necesita. Solución inmediata manteniendo contacto constante con nosotros para saber si necesitábamos algo. Las personas que cuidan lo hacen con mucho amor y dedicación manteniendo contacto e informando de lo que va sucediendo. Mi experiencia fue de lo mejor! Muchas gracias a todos!!! Cecilia y Teresa unas genias!!! Y quiero agregar a Verónica que desde el llamado que hice cuando estaba desorientada al ser de San Nicolás y no conocer a nadie de rosario para pedir personas que cuiden en la clínica se brindo de manera especial conmigo. Gracias Vero me ayudaste un montón!! Mil mil gracias!!",
  },
  {
    nombre: "Roque P.",
    texto: "Calidez en la atención, conexión y trato humano, de gran empatia, excelente. Agradecido",
  },
  {
    nombre: "Denise A.",
    texto:
      "Excelente servicio! Mi abuela es afiliada y destacó siempre la amabilidad y rapidez del área de coordinación. Destacó también el acompañamiento de Vizzi Caterina por la paciencia y calidez con la que trato a mi abuela!",
  },
  {
    nombre: "Fabiana F.",
    texto:
      "Quiero dejar constancia de mi agradecimiento por la excelente atención recibida por parte del área comercial. En especial, destaco a la señorita Milagros por su gran predisposición, amabilidad y compromiso en cada instancia del proceso. Su trato fue siempre claro, respetuoso y orientado a brindar soluciones, lo cual marca una diferencia notable. Sin dudas, una atención altamente recomendable",
  },
  {
    nombre: "María Laura B.",
    texto: "Muy buena experiencia, muy resolutivos ante lo que uno requiere",
  },
  {
    nombre: "Sergio F.",
    texto:
      "Excelente atención, seguimiento, contención del paciente; altamente recomendables , están a disposición de resolver cualquier problema.\nLo único que lamento es no haberlos encontrado antes.",
  },
  {
    nombre: "Norma R.",
    texto:
      "Excelente Servicio y comunicación continua entre la institución y los pacientes y familiares!!!!!! Rápida resolución de las dificultades. Gracias!!!!!!!",
  },
];

type Testimonio = (typeof testimonios)[number];

// Formato pedido por el cliente (referencia: landing.hsvabogados.com/indemnizacion): las reseñas una debajo de la
// otra en un recuadro blanco, con la inicial en un círculo, nombre, estrellas y texto, y abajo el link a Google.
function Resena({ t, i, hidden = false }: { t: Testimonio; i: number; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="flex gap-4 border-b border-brand/15 py-5 lg:gap-[1.5rem] lg:py-[1.75rem]">
      <span
        aria-hidden="true"
        className={`flex size-12 shrink-0 items-center justify-center rounded-full font-serif text-xl font-semibold text-white lg:size-[4rem] lg:text-[1.75rem] ${
          i % 2 === 0 ? "bg-brand" : "bg-lilac"
        }`}
      >
        {t.nombre[0]}
      </span>
      <figure className="min-w-0">
        <figcaption className="text-lg leading-tight font-semibold lg:text-[1.5rem]">{t.nombre}</figcaption>
        <div className="mt-1.5 flex gap-0.5 lg:mt-[0.5rem] lg:gap-[0.1875rem]" role="img" aria-label="5 de 5 estrellas">
          {Array.from({ length: 5 }, (_, j) => (
            <StarIcon key={j} className="size-4 lg:size-[1.375rem]" />
          ))}
        </div>
        <blockquote className="mt-2 line-clamp-5 text-body leading-[1.5] whitespace-pre-line text-[#530467] lg:mt-[0.625rem] lg:line-clamp-none">
          {t.texto}
        </blockquote>
      </figure>
    </li>
  );
}

export default function TestimoniosSection() {
  return (
    <section aria-labelledby="testimonios-titulo" className="pt-24 pb-16 lg:pt-[13.25rem] lg:pb-[8.625rem]">
      <div className="container-site">
        <div {...reveal} className="flex flex-col items-center text-center">
          <Eyebrow>Testimonios</Eyebrow>
          <h2 id="testimonios-titulo" className="mt-1 font-serif text-h2 font-semibold lg:mt-[0.5625rem]">
            Lo que dicen las familias
          </h2>
        </div>

        <div
          {...reveal}
          className="mx-auto mt-10 max-w-[75rem] rounded-[1.5rem] bg-white px-5 pt-2 pb-6 shadow-card sm:px-8 lg:mt-[4.5rem] lg:rounded-[2.25rem] lg:px-[3.5rem] lg:pt-[1.25rem] lg:pb-[2.5rem]"
        >
          {/* Ventana con tres o cuatro reseñas a la vista que suben solas. La lista se repite dos veces para que el
              loop no tenga cortes; se pausa al pasar el mouse o tocarla. Con "reducir movimiento" queda con scroll. */}
          <div className="group h-[38rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-y-auto lg:h-[54rem]">
            <ul className="animate-resenas group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none">
              {testimonios.map((t, i) => (
                <Resena key={t.nombre} t={t} i={i} />
              ))}
              {testimonios.map((t, i) => (
                <Resena key={`${t.nombre}-copia`} t={t} i={i} hidden />
              ))}
            </ul>
          </div>
          <a
            href={resenasGoogle}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block pt-5 text-base font-semibold text-brand underline-offset-4 hover:underline lg:mt-0 lg:pt-[1.75rem] lg:text-[1.25rem]"
          >
            Ver todas las opiniones en Google →
          </a>
        </div>
      </div>
    </section>
  );
}
