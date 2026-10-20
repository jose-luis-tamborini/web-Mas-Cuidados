"use client";

import { useEffect } from "react";

// Animación de entrada para los elementos con `data-reveal` (estilos en globals.css). Solo oculta lo que
// está más abajo de la pantalla al cargar: lo que ya se ve queda quieto, y sin JS se ve todo.
// Los elementos que entran juntos (ej. una grilla de tarjetas) aparecen uno detrás de otro.

const DEMORA_INICIAL = 200; // ms antes de que arranque el primero
const DEMORA_ENTRE = 250; // ms entre elementos que entran juntos
// Cuánto tiene que haber subido el elemento antes de animarse (15 % del alto de la pantalla).
const MARGEN = "0px 0px -15% 0px";

export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${DEMORA_INICIAL + Math.min(i, 4) * DEMORA_ENTRE}ms`);
            el.dataset.reveal = "visible";
            io.unobserve(el);
          });
      },
      { rootMargin: MARGEN },
    );

    // Se vuelve a revisar cuando cambia el DOM, para las páginas que llegan navegando.
    const armados = new WeakSet<Element>();
    const armar = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (armados.has(el)) return;
        armados.add(el);
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.dataset.reveal = "oculto";
        io.observe(el);
      });
    };
    armar();
    const mo = new MutationObserver(armar);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
