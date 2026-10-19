import Image from "next/image";
import hero from "@/public/images/home/hero.jpg";

// TODO: el diseño lleva un video de fondo ("Video pag web nuevo 03"). Cuando llegue el archivo,
// pasarlo en `videoSrc`; la foto actual queda como póster mientras carga.
const videoSrc: string | null = null;

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[38rem] items-center overflow-hidden bg-brand-ink pt-16 text-white lg:h-[68.6875rem] lg:min-h-0 lg:items-start lg:pt-0">
      {videoSrc ? (
        <video
          className="absolute inset-0 -z-20 size-full object-cover"
          src={videoSrc}
          poster={hero.src}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image src={hero} alt="" fill preload sizes="100vw" className="-z-20 object-cover" />
      )}
      {/* Degradado hacia el violeta oscuro en la parte baja, como en el diseño */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-[#2c0536]/0 from-35% to-[#311647]" />

      <div className="container-site flex flex-col items-center py-20 text-center lg:py-0 lg:pt-[20.9375rem]">
        <h1 className="max-w-[16ch] font-serif text-display font-semibold lg:max-w-[62.6875rem]">
          Acompañamos asistimos y cuidamos
        </h1>
        <p className="mt-8 max-w-[50ch] text-subtitle lg:mt-[6.6875rem] lg:max-w-[76.1875rem]">
          Soluciones de cuidado, planes de seguros e internación domiciliaria, coordinadas por un solo equipo para
          acompañar a tu familia en cada etapa.
        </p>
        <a
          href="#contacto"
          className="mt-10 flex h-12 items-center rounded-[1.875rem] bg-white px-6 text-lead text-brand shadow-float transition-colors hover:bg-lavender lg:mt-[4.5rem] lg:h-[3.125rem] lg:w-[14.625rem] lg:justify-center lg:px-0 lg:tracking-[0.02em]"
        >
          Consultanos
        </a>
      </div>
    </section>
  );
}
