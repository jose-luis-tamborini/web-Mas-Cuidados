import type { Metadata } from "next";
import { canonica } from "@/lib/site";
import PageHero from "@/components/sections/PageHero";
import AsesoramientoBanner from "@/components/sections/AsesoramientoBanner";
import ContactoSection from "@/components/sections/ContactoSection";
import IntroSection from "@/components/medicina-online/IntroSection";
import ServicioSection from "@/components/medicina-online/ServicioSection";
import hero from "@/public/images/medicina-online/hero.jpg";
import orientacion from "@/public/images/medicina-online/orientacion.jpg";

export const metadata: Metadata = {
  title: "Medicina online",
  description:
    "Atención médica rápida estés donde estés: videollamadas con médicos, recetas y órdenes digitales y seguimiento profesional, sin moverte de tu casa.",
  ...canonica("/medicina-online"),
};

export default function MedicinaOnline() {
  return (
    <>
      <PageHero
        imagen={hero}
        titulo={
          <>
            Medicina <strong>online</strong>
          </>
        }
        tituloClassName="tracking-[0.125em] lg:text-[3rem] lg:leading-[1.219] lg:tracking-[0.2em] [&_strong]:font-bold"
        siguiente="contenido"
        imagenClassName="object-[30%_50%]"
      />
      <IntroSection />
      <ServicioSection />
      <div className="container-wide pb-16 lg:pb-[3.9375rem]">
        <div className="lg:mx-[1.6875rem]">
          <AsesoramientoBanner
            variante="orientacion"
            imagen={orientacion}
            imagenAlt="Asesora de Más Cuidados atendiendo a una pareja en la oficina"
            eyebrow="Atención personalizada"
            titulo={
              <>
                ¿Necesitás <strong className="font-semibold">orientación</strong>?
              </>
            }
            texto={
              <p>
                Estamos <strong className="font-semibold">disponibles</strong> para{" "}
                <strong className="font-semibold">ayudarte</strong>
              </p>
            }
            cta={
              <>
                Solicitar <strong className="font-semibold">asesoramiento</strong>
              </>
            }
            href="#contacto"
          />
        </div>
      </div>
      <ContactoSection variante="franja" />
    </>
  );
}
