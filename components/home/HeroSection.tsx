import Image from "next/image";
import hero from "@/public/images/home/hero.jpg";

// Video de fondo ("Video pag web nuevo 03"): 1080p en desktop y 720p en pantallas chicas, en AV1 con
// H.264 de respaldo para los navegadores que no lo reproducen. La foto (primer cuadro del video) queda
// debajo mientras carga. Con "reducir movimiento" activado no coincide ninguna fuente y queda la foto.
const motion = "(prefers-reduced-motion: no-preference)";
const videoSources = [
  { src: "/videos/home/hero-1080-av1.mp4", type: 'video/mp4; codecs="av01.0.08M.08"', media: `${motion} and (min-width: 1024px)` },
  { src: "/videos/home/hero-1080-h264.mp4", type: "video/mp4", media: `${motion} and (min-width: 1024px)` },
  { src: "/videos/home/hero-720-av1.mp4", type: 'video/mp4; codecs="av01.0.05M.08"', media: motion },
  { src: "/videos/home/hero-720-h264.mp4", type: "video/mp4", media: motion },
];

export default function HeroSection() {
  // En desktop ocupa el alto de la ventana (pedido del cliente) y el texto va centrado debajo del header.
  return (
    <section className="relative isolate flex min-h-[38rem] items-center overflow-hidden bg-brand-ink pt-16 text-white lg:h-svh lg:min-h-[40rem] lg:pt-[7.5rem]">
      <Image src={hero} alt="" fill preload sizes="100vw" className="-z-20 object-cover" />
      <video
        className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        {videoSources.map((s) => (
          <source key={s.src} {...s} />
        ))}
      </video>
      {/* Degradado hacia el violeta oscuro en la parte baja, como en el diseño */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-[#2c0536]/0 from-35% to-[#311647]" />

      <div className="container-site flex flex-col items-center py-20 text-center lg:py-0">
        <h1 className="max-w-[16ch] font-serif text-display font-semibold lg:max-w-[62.6875rem]">
          Acompañamos, asistimos y cuidamos
        </h1>
        <p className="mt-8 max-w-[50ch] text-subtitle lg:mt-[6.6875rem] lg:max-w-[76.1875rem]">
          <span className="font-semibold">Soluciones de cuidado, seguros e internación domiciliaria.</span>{" "}
          <span className="mt-3 block lg:mt-[0.5rem]">Un solo equipo para acompañar a tu familia en cada etapa.</span>
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
