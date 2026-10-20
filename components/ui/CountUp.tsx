"use client";

import { useEffect, useRef } from "react";

type Props = {
  to: number;
  from?: number;
  prefix?: string;
  /** false para años (2002 y no 2.002). */
  agrupar?: boolean;
  duracion?: number;
};

const formatear = (n: number, agrupar: boolean) => n.toLocaleString("es-AR", { useGrouping: agrupar });

// Número que cuenta de `from` a `to` cuando entra en pantalla. El HTML ya trae el valor final (es lo que
// se ve sin JS o con "reducir movimiento") y los lectores de pantalla leen siempre ese valor.
export default function CountUp({ to, from = 0, prefix = "", agrupar = true, duracion = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mostrar = (n: number) => {
      el.textContent = prefix + formatear(n, agrupar);
    };
    mostrar(from);

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const paso = (ahora: number) => {
          const t = Math.min((ahora - inicio) / duracion, 1);
          mostrar(Math.round(from + (to - from) * (1 - (1 - t) ** 3)));
          if (t < 1) frame = requestAnimationFrame(paso);
        };
        frame = requestAnimationFrame(paso);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      mostrar(to);
    };
  }, [to, from, prefix, agrupar, duracion]);

  return (
    <>
      <span className="sr-only">{prefix + formatear(to, agrupar)}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {prefix + formatear(to, agrupar)}
      </span>
    </>
  );
}
