"use client";

import { useState } from "react";
import { reveal } from "@/components/ui/reveal";

// Formulario "Solicitá un Asesor de Servicios Ahora". Está en todas las páginas del diseño.
// TODO: falta definir a dónde llegan las consultas (mail, CRM) y si se usa la versión corta del formulario.

const servicios = [
  "Servicio particular en domicilio",
  "Seguros de internación",
  "Internación domiciliaria",
  "Medicina online",
  "Alianzas / consultas comerciales",
  "Otro",
];

const provincias = [
  "Buenos Aires",
  "CABA",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const fieldClass =
  "w-full border-2 border-brand bg-transparent px-5 text-base text-brand placeholder:text-muted focus:border-brand-deep focus:ring-2 focus:ring-lilac/50 focus:outline-none lg:border-[0.12rem] lg:px-[1rem] lg:text-[1.075rem]";
const inputClass = `${fieldClass} h-12 rounded-full lg:h-[2.9375rem]`;
const labelClass = "mt-2 block px-1 text-base lg:mt-[0.6875rem] lg:px-0 lg:text-[1.075rem] lg:leading-[1.35]";

function Campo({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col-reverse">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactoSection() {
  const [aviso, setAviso] = useState(false);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-mist py-14 shadow-[0_0_0_0.8px_rgb(179_136_255/0.15),0_6.5px_32.5px_rgb(0_0_0/0.35),0_3.2px_17px_rgb(0_0_0/0.25)] lg:pt-[3.8125rem] lg:pb-[6.6875rem]"
    >
      <div className="container-site">
        <div
          {...reveal}
          className="rounded-[2.875rem] bg-[#421c62]/[0.08] px-5 py-10 shadow-[0_3.8px_20px_3.8px_rgb(0_0_0/0.25)] sm:px-10 lg:mx-[0.625rem] lg:px-0 lg:pt-[1.625rem] lg:pb-[1.4375rem]">
          <div className="mx-auto max-w-[56.0625rem]">
            <h2 id="contacto-titulo" className="font-serif text-[1.75rem] leading-snug font-semibold lg:text-[2.39rem] lg:leading-[1.33]">
              Solicitá un Asesor de Servicios Ahora
            </h2>
            <span aria-hidden="true" className="mt-2 block h-0.5 w-28 bg-brand lg:mt-[1.0625rem] lg:w-[7.25rem]" />
            <p className="mt-4 text-base leading-[1.9] lg:mt-[0.4rem] lg:text-[1.195rem]">
              Completá tus datos de contacto a continuación para que uno de nuestros asesores de servicios se ponga en
              contacto con vos y te brinde toda la información que necesitás.
            </p>

            <form
              className="mt-6 grid gap-x-9 gap-y-5 sm:grid-cols-2 lg:mt-[3.1875rem] lg:gap-x-[2.3125rem] lg:gap-y-[2.375rem]"
              onSubmit={(e) => {
                e.preventDefault();
                setAviso(true);
              }}
            >
              <Campo id="nombre" label="Nombre">
                <input id="nombre" name="nombre" placeholder="Nombre" autoComplete="given-name" required className={inputClass} />
              </Campo>
              <Campo id="apellido" label="Apellido">
                <input id="apellido" name="apellido" placeholder="Apellido" autoComplete="family-name" required className={inputClass} />
              </Campo>
              <Campo id="email" label="Correo Electrónico">
                <input id="email" name="email" type="email" placeholder="Correo Electrónico" autoComplete="email" required className={inputClass} />
              </Campo>
              <Campo id="whatsapp" label="WhatsApp">
                <input id="whatsapp" name="whatsapp" type="tel" placeholder="WhatsApp" autoComplete="tel" required className={inputClass} />
              </Campo>
              <Campo id="provincia" label="Provincia">
                <select id="provincia" name="provincia" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    -Por favor, elegí una opción-
                  </option>
                  {provincias.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Campo>
              <Campo id="localidad" label="Localidad">
                <input id="localidad" name="localidad" placeholder="Localidad" autoComplete="address-level2" className={inputClass} />
              </Campo>
              <div className="sm:col-span-2">
                <Campo id="servicio" label="Servicio">
                  <select id="servicio" name="servicio" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      -Por favor, elegí una opción-
                    </option>
                    {servicios.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Campo>
              </div>
              {/* En el diseño el botón va a la derecha, en la misma línea que la etiqueta "Comentarios" */}
              <div className="sm:col-span-2">
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={5}
                  placeholder="Comentarios"
                  className={`${fieldClass} block rounded-[1.25rem] py-3 lg:h-[9.0625rem] lg:py-[0.6875rem]`}
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <label htmlFor="comentarios" className={labelClass}>
                    Comentarios
                  </label>
                  <button
                    type="submit"
                    className="mt-2 self-end rounded-full bg-brand/55 px-7 py-3 text-[0.97rem] font-bold tracking-[0.016em] text-mist uppercase shadow-[4.7px_4.7px_31px_rgb(0_0_0/0.25)] transition-colors hover:bg-brand lg:mt-[2.25rem] lg:flex lg:h-[3.6875rem] lg:w-[19.375rem] lg:items-center lg:justify-center lg:px-0 lg:py-0"
                  >
                    Quiero que me contacten.
                  </button>
                </div>
                {aviso && (
                  <p role="status" className="mt-3 text-right text-sm">
                    El envío del formulario se conecta en la próxima etapa.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
