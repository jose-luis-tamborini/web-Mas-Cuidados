"use client";

import { useState } from "react";
import { reveal } from "@/components/ui/reveal";
import { contacto } from "@/lib/site";

// Formulario "Solicitá asesoramiento". Está en todas las páginas del diseño.
// Las consultas llegan por mail (app/api/contacto/route.ts). Cada campo lleva solo el placeholder (pedido del
// cliente: sin la etiqueta repetida debajo); el nombre accesible va en aria-label.

const servicios = [
  "Servicio particular en domicilio",
  "Seguros de internación",
  "Internación domiciliaria",
  "Medicina online",
  "Alianzas / consultas comerciales",
  "Otro",
];

// Las mismas opciones que la landing, sin Paraná (esa sede cerró).
const ciudades = ["Rosario", "CABA", "Córdoba", "Santa Fe", "Otro"];

const fieldClass =
  "w-full border-2 border-brand bg-transparent px-5 text-base text-brand placeholder:text-muted focus:border-brand-deep focus:ring-2 focus:ring-lilac/50 focus:outline-none lg:border-[0.12rem] lg:px-[1rem] lg:text-[1.075rem]";
const inputClass = `${fieldClass} h-12 rounded-full lg:h-[2.9375rem]`;
// Mientras no se elige una opción, el desplegable se ve del color de los placeholders.
const selectClass = `${inputClass} invalid:text-muted [&>option]:text-brand`;
// "home": franja gris con sombra, como en la Home. "franja": la misma franja con la tarjeta 8 px más abajo
// (Seguros). "pagina": sobre el fondo crema y a lo ancho del contenido de las páginas interiores (1697 px).
const franja =
  "bg-mist py-14 shadow-[0_0_0_0.8px_rgb(179_136_255/0.15),0_6.5px_32.5px_rgb(0_0_0/0.35),0_3.2px_17px_rgb(0_0_0/0.25)] lg:pb-[6.6875rem]";
const variantes = {
  home: { section: `${franja} lg:pt-[3.8125rem]`, container: "container-site", card: "lg:mx-[0.625rem]" },
  franja: { section: `${franja} lg:pt-[4.3125rem]`, container: "container-site", card: "lg:mx-[0.625rem]" },
  // Quiénes somos: la tarjeta más abajo (99 px del diseño) y al ancho del contenido de la página (1412 px).
  angosta: { section: `${franja} lg:pt-[6.1875rem]`, container: "container-site", card: "lg:mx-auto lg:max-w-[88.25rem]" },
  pagina: {
    section: "py-14 lg:pt-[7.375rem] lg:pb-[7.1875rem]",
    container: "container-wide",
    card: "",
  },
};

export default function ContactoSection({ variante = "home" }: { variante?: keyof typeof variantes }) {
  const [estado, setEstado] = useState<"listo" | "enviando" | "enviado" | "error">("listo");
  const v = variantes[variante];

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className={v.section}>
      <div className={v.container}>
        <div
          {...reveal}
          className={`rounded-[2.875rem] bg-[#421c62]/[0.08] px-5 py-10 shadow-[0_3.8px_20px_3.8px_rgb(0_0_0/0.25)] sm:px-10 lg:px-0 lg:pt-[1.625rem] lg:pb-[1.4375rem] ${v.card}`}
        >
          <div className="mx-auto max-w-[56.0625rem]">
            <h2 id="contacto-titulo" className="font-serif text-[1.75rem] leading-snug font-semibold lg:text-[2.39rem] lg:leading-[1.33]">
              Solicitá asesoramiento
            </h2>
            <span aria-hidden="true" className="mt-2 block h-0.5 w-28 bg-brand lg:mt-[1.0625rem] lg:w-[7.25rem]" />
            <p className="mt-4 text-base leading-[1.9] lg:mt-[0.4rem] lg:text-[1.195rem]">
              Completá tus datos y un asesor se pondrá en contacto con vos.
            </p>

            <form
              className="mt-6 grid gap-x-9 gap-y-5 sm:grid-cols-2 lg:mt-[3.1875rem] lg:gap-x-[2.3125rem] lg:gap-y-[1.75rem]"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                setEstado("enviando");
                try {
                  const res = await fetch("/api/contacto", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), pagina: window.location.pathname }),
                  });
                  if (!res.ok) throw new Error(String(res.status));
                  form.reset();
                  setEstado("enviado");
                } catch {
                  setEstado("error");
                }
              }}
            >
              {/* Campo trampa para bots: oculto para las personas y para los lectores de pantalla */}
              <input type="text" name="sitio" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <input id="nombre" name="nombre" aria-label="Nombre y apellido" placeholder="Nombre y apellido" autoComplete="name" required className={inputClass} />
              <input id="email" name="email" type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" autoComplete="email" required className={inputClass} />
              <input id="whatsapp" name="whatsapp" type="tel" aria-label="WhatsApp" placeholder="WhatsApp" autoComplete="tel" required className={inputClass} />
              <select id="ciudad" name="ciudad" aria-label="Ciudad" required defaultValue="" className={selectClass}>
                <option value="" disabled>
                  Ciudad
                </option>
                {ciudades.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select id="servicio" name="servicio" aria-label="Servicio" required defaultValue="" className={`${selectClass} sm:col-span-2`}>
                <option value="" disabled>
                  Seleccioná un servicio
                </option>
                {servicios.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <div className="sm:col-span-2">
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={5}
                  aria-label="Comentarios (opcional)"
                  placeholder="Comentarios (opcional)"
                  className={`${fieldClass} block rounded-[1.25rem] py-3 lg:h-[9.0625rem] lg:py-[0.6875rem]`}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="mt-5 rounded-full bg-brand/55 px-7 py-3 text-[0.97rem] font-bold tracking-[0.016em] text-mist uppercase shadow-[4.7px_4.7px_31px_rgb(0_0_0/0.25)] transition-colors hover:bg-brand disabled:cursor-wait disabled:opacity-70 lg:mt-[2.25rem] lg:flex lg:h-[3.6875rem] lg:w-[19.375rem] lg:items-center lg:justify-center lg:px-0 lg:py-0"
                  >
                    {estado === "enviando" ? "Enviando…" : "Quiero que me contacten"}
                  </button>
                </div>
                <p role="status" className="mt-3 text-right text-base font-semibold lg:text-[1.125rem]">
                  {estado === "enviado" && "¡Gracias! Recibimos tu consulta y un asesor se va a comunicar con vos a la brevedad."}
                  {estado === "error" && (
                    <>
                      No pudimos enviar la consulta. Probá de nuevo o llamanos al{" "}
                      <a href={contacto.telefonoHref} className="underline">
                        {contacto.telefono}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
