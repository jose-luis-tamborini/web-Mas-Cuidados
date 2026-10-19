import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import ServiciosSection from "@/components/home/ServiciosSection";
import DiferencialSection from "@/components/home/DiferencialSection";
import SegurosSection from "@/components/home/SegurosSection";
import BeneficiosSection from "@/components/home/BeneficiosSection";
import NumerosSection from "@/components/home/NumerosSection";
import TestimoniosSection from "@/components/home/TestimoniosSection";
import SedesSection from "@/components/home/SedesSection";
import AsesoramientoBanner from "@/components/sections/AsesoramientoBanner";
import ContactoSection from "@/components/sections/ContactoSection";
import fondoServicios from "@/public/images/home/fondo-servicios.jpg";
import asesoramiento from "@/public/images/home/asesoramiento.jpg";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Servicios y diferencial comparten fondo: foto al 12% y degradado que sale del hero */}
      <div className="relative isolate overflow-hidden">
        <Image src={fondoServicios} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-[0.12]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[17rem] bg-linear-to-b from-[#2b1042]/95 to-[#2b1042]/0 lg:h-[16.875rem]" />
        <ServiciosSection />
        <DiferencialSection />
      </div>

      <SegurosSection />
      <BeneficiosSection />

      <div className="bg-lavender">
        <NumerosSection />
        <TestimoniosSection />
      </div>

      <SedesSection />

      <div className="container-site pb-24 lg:pb-[5.5625rem]">
        <AsesoramientoBanner
          imagen={asesoramiento}
          imagenAlt="Asesora de Más Cuidados atendiendo consultas"
          eyebrow="Atención personalizada"
          titulo={
            <>
              ¿Necesitás <strong className="font-bold">asesoramiento?</strong>
            </>
          }
          texto={
            <>
              <p>
                Te ayudamos para <strong className="font-semibold">encontrar</strong> el plan de{" "}
                <strong className="font-semibold">cuidado ideal</strong> para tu familia.
              </p>
              <p>Sin compromiso y en el día.</p>
            </>
          }
          cta={
            <>
              Solicitar <strong className="font-semibold">asesoramiento</strong>
            </>
          }
          href="#contacto"
        />
      </div>

      <ContactoSection />
    </>
  );
}
