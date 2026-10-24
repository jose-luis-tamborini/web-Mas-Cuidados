import Eyebrow from "@/components/ui/Eyebrow";
import MobileAccordion from "@/components/ui/MobileAccordion";
import { reveal } from "@/components/ui/reveal";
import FotosCarrusel from "./FotosCarrusel";
import estructura from "@/public/images/quienes-somos/estructura.jpg";
import recepcion from "@/public/images/quienes-somos/equipo-2.jpg";
import coordinacion from "@/public/images/quienes-somos/equipo-3.jpg";
import supervision from "@/public/images/quienes-somos/equipo-4.jpg";

// Fotos del equipo que mandó el cliente. La primera es la del Figma.
const fotos = [
  { src: estructura, alt: "Equipo de Más Cuidados trabajando en la oficina", posicion: "object-[50%_25%] lg:object-center" },
  { src: recepcion, alt: "Equipo de Más Cuidados en la recepción de la oficina", posicion: "object-[50%_70%]" },
  { src: coordinacion, alt: "Equipo de coordinación de Más Cuidados revisando una computadora", posicion: "object-[60%_50%]" },
  { src: supervision, alt: "Coordinadoras de Más Cuidados trabajando juntas en un escritorio", posicion: "object-[50%_40%]" },
];

const recursos = [
  { titulo: "Alcance Nacional y Sedes:", texto: "Contamos con 4 sedes estratégicas." },
  { titulo: "Red de Prestadores:", texto: "Una red activa de más de 250 prestadores profesionales." },
  {
    titulo: "Estructura Operativa y Comercial:",
    texto: "Más de 40 personas integrando de forma directa las áreas operativas.",
  },
  {
    titulo: "Disponibilidad 24/7:",
    texto: "Servicio de guardia y coordinación operativa disponible las 24 horas, los 365 días del año.",
  },
  {
    titulo: "Internación Domiciliaria de Alta Complejidad:",
    texto: "Equipamiento, logística y gestión médica integral.",
  },
  {
    titulo: "Innovación y Telemedicina:",
    texto: "Plataforma de medicina online e integración de sistemas inteligentes para agilizar la gestión.",
  },
];

// Tarjeta lila con el carrusel de fotos del equipo a la izquierda y la presentación a la derecha. En mobile la lista de
// recursos va en un desplegable.
export default function EstructuraSection() {
  return (
    <section id="contenido" aria-labelledby="estructura-titulo" className="container-wide pt-16 lg:pt-[4.375rem]">
      <div {...reveal} className="flex flex-col items-center text-center">
        <Eyebrow>Experiencia, alcance y respaldo</Eyebrow>
        <h2 id="estructura-titulo" className="mt-3 font-serif text-h2 text-[#521562] lg:mt-[0.625rem] [&_strong]:font-semibold">
          Una estructura <strong>preparada</strong> para <strong>cuidar</strong>
        </h2>
      </div>

      <div
        {...reveal}
        className="mt-10 rounded-[1.75rem] bg-lavender p-4 text-[#3d044b] lg:mx-auto lg:mt-[2.625rem] lg:grid lg:w-[88.5rem] lg:grid-cols-[41.875rem_1fr] lg:gap-[2.3125rem] lg:rounded-[1.875rem] lg:py-[1.875rem] lg:pr-[2.4375rem] lg:pl-[2.375rem]"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:aspect-auto lg:h-[47.0625rem] lg:rounded-[3.25rem]">
          <FotosCarrusel fotos={fotos} sizes="(min-width: 1024px) 35vw, 100vw" />
        </div>
        <div className="px-1 pt-5 text-body leading-[1.6] lg:p-0 lg:pt-[2.1875rem] lg:text-[1.25rem] lg:leading-[1.68rem] [&_strong]:font-semibold">
          <p>
            En <strong>Más Cuidados,</strong> somos una organización dedicada desde 2002 a la atención integral de la
            salud y el cuidado de las personas. Nos especializamos en acompañar a pacientes y sus familias tanto en
            domicilios como en sanatorios e instituciones, combinando calidad humana, rigor profesional e innovación
            constante.
          </p>
          <MobileAccordion
            triggerClassName="mt-5 border-t border-brand/20 pt-4 font-serif text-lg font-semibold"
            trigger="Infraestructura y Recursos con los que Contamos"
          >
            <h3 className="font-serif text-[1.5rem] leading-[1.68rem] font-semibold max-lg:hidden lg:mt-[1.68rem]">
              Infraestructura y Recursos con los que Contamos
            </h3>
            <ul className="space-y-4 pt-4 lg:space-y-[1.68rem] lg:pt-[1.68rem]">
              {recursos.map((r) => (
                <li key={r.titulo}>
                  <strong>{r.titulo}</strong> {r.texto}
                </li>
              ))}
            </ul>
          </MobileAccordion>
        </div>
      </div>
    </section>
  );
}
