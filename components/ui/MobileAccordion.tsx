"use client";

import { useId, useState } from "react";

type Props = {
  /** Contenido del botón. Solo se ve en mobile: en desktop el título va dentro de `children`. */
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Elemento que envuelve al botón, para mantener la jerarquía de títulos de la página. */
  as?: "h2" | "h3" | "p";
  triggerClassName?: string;
  className?: string;
};

// Desplegable solo para mobile (< 1024 px). En desktop el botón no se muestra y el contenido queda
// siempre abierto, igual que en el Figma.
export default function MobileAccordion({
  trigger,
  children,
  defaultOpen = false,
  as: Titulo = "h3",
  triggerClassName = "",
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <>
      <Titulo className="lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className={`flex w-full items-center justify-between gap-4 text-left ${triggerClassName}`}
        >
          {trigger}
          {/* Más que se convierte en menos */}
          <span aria-hidden="true" className="relative size-4 shrink-0">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current" />
            <span
              className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${open ? "scale-y-0" : ""}`}
            />
          </span>
        </button>
      </Titulo>
      <div
        id={id}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out lg:visible lg:grid-rows-[1fr] ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        } ${className}`}
      >
        <div className="min-h-0 overflow-hidden lg:overflow-visible">{children}</div>
      </div>
    </>
  );
}
