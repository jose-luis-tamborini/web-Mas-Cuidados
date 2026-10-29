"use client";

import { useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

// "En medios": nota en video (pedido del cliente, no está en el Figma). Respeta la proporción original del
// video, no arranca solo y tiene un botón de reproducción al centro; al tocarlo aparecen los controles del navegador.
// Nota de Novaresio: original 4K del cliente (49 MB) pasado a H.264 con audio AAC 96k (`-preset veryslow -tune film
// -refs 4 -movflags +faststart`): 1080p con crf 26 y `-level:v 4.0` (8,6 MB) en desktop, 720p con crf 27 y
// `-level:v 3.1` (4,2 MB) en pantallas chicas. Portada: cuadro del segundo 6.
// Si se saca el video, poner `video` en null y la Home no muestra la sección.
export const video: { src1080: string; src720: string; poster: string; ancho: number; alto: number } | null = {
  src1080: "/videos/home/medios-novaresio-1080.mp4",
  src720: "/videos/home/medios-novaresio-720.mp4",
  poster: "/images/home/medios-novaresio.jpg",
  ancho: 16,
  alto: 9,
};

export default function MediosSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const [iniciado, setIniciado] = useState(false);
  if (!video) return null;

  return (
    <section aria-labelledby="medios-titulo" className="container-site pt-24 lg:pt-[8rem]">
      <div {...reveal}>
        <div className="text-center">
          <Eyebrow>Nuestra presencia</Eyebrow>
          <h2 id="medios-titulo" className="mt-1 font-serif text-h2 font-semibold lg:mt-[0.5625rem]">
            En medios
          </h2>
        </div>
        <div
          className="relative mx-auto mt-8 max-w-[60rem] overflow-hidden rounded-[1.5rem] bg-black shadow-card lg:mt-[2.5rem] lg:rounded-[1.75rem]"
          style={{ aspectRatio: `${video.ancho} / ${video.alto}` }}
        >
          <video
            ref={ref}
            poster={video.poster}
            preload="none"
            playsInline
            controls={iniciado}
            className="h-full w-full object-contain"
          >
            <source src={video.src1080} type="video/mp4" media="(min-width: 1024px)" />
            <source src={video.src720} type="video/mp4" />
          </video>
          {!iniciado && (
            <button
              type="button"
              aria-label="Reproducir el video"
              onClick={() => {
                setIniciado(true);
                ref.current?.play();
              }}
              className="group absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-white shadow-card transition-transform group-hover:scale-110 lg:size-[5rem]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 size-7 fill-brand lg:size-[2.25rem]">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
