"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/components/icons";

type Foto = { src: StaticImageData; alt: string; posicion?: string };

const INTERVALO = 5000;

// Carrusel de fotos del equipo (pedido del cliente). Pasa solo cada 5 s, se frena con el mouse encima o al
// enfocar los controles, y en mobile se puede deslizar. Con "reducir movimiento" no avanza solo.
export default function FotosCarrusel({ fotos, sizes }: { fotos: Foto[]; sizes: string }) {
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const toqueX = useRef<number | null>(null);

  const ir = (i: number) => setActual((i + fotos.length) % fotos.length);

  useEffect(() => {
    if (pausado || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActual((a) => (a + 1) % fotos.length), INTERVALO);
    return () => clearTimeout(t);
  }, [actual, pausado, fotos.length]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos del equipo de Más Cuidados"
      className="group absolute inset-0"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onTouchStart={(e) => (toqueX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (toqueX.current === null) return;
        const dx = e.changedTouches[0].clientX - toqueX.current;
        if (Math.abs(dx) > 40) ir(actual + (dx < 0 ? 1 : -1));
        toqueX.current = null;
      }}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${actual * 100}%)` }}
      >
        {fotos.map((f, i) => (
          <div
            key={f.alt}
            role="group"
            aria-roledescription="foto"
            aria-label={`${i + 1} de ${fotos.length}`}
            aria-hidden={i !== actual}
            className="relative h-full w-full shrink-0"
          >
            <Image src={f.src} alt={f.alt} fill sizes={sizes} className={`object-cover ${f.posicion ?? ""}`} />
          </div>
        ))}
      </div>

      {/* Flechas: en desktop aparecen al pasar el mouse; en mobile se ven siempre */}
      {[
        { label: "Foto anterior", paso: -1, lado: "left-3 rotate-90 lg:left-[1.25rem]" },
        { label: "Foto siguiente", paso: 1, lado: "right-3 -rotate-90 lg:right-[1.25rem]" },
      ].map((b) => (
        <button
          key={b.label}
          type="button"
          aria-label={b.label}
          onClick={() => ir(actual + b.paso)}
          className={`absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand shadow-card transition-opacity hover:bg-white focus-visible:opacity-100 lg:size-[3rem] lg:opacity-0 lg:group-hover:opacity-100 ${b.lado}`}
        >
          <ChevronDown className="w-4 lg:w-[1.125rem]" />
        </button>
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 lg:bottom-[1.5rem] lg:gap-[0.625rem]">
        {fotos.map((f, i) => (
          <button
            key={f.alt}
            type="button"
            aria-label={`Ver foto ${i + 1}`}
            aria-current={i === actual}
            onClick={() => ir(i)}
            className={`h-2.5 rounded-full shadow-card transition-all lg:h-[0.75rem] ${
              i === actual ? "w-7 bg-white lg:w-[2.25rem]" : "w-2.5 bg-white/60 hover:bg-white/90 lg:w-[0.75rem]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
