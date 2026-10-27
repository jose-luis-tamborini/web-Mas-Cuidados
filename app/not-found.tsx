import Link from "next/link";
import { LogoCruzIcon } from "@/components/icons";
import { contacto } from "@/lib/site";

// Página para las direcciones que no existen, con los colores del sitio.
export default function NotFound() {
  return (
    <section className="bg-brand-ink pt-32 pb-24 text-white lg:pt-[14rem] lg:pb-[10rem]">
      <div className="container-site flex flex-col items-center text-center">
        <LogoCruzIcon className="size-14 text-orchid lg:size-[5rem]" />
        <h1 className="mt-6 font-serif text-h2 font-semibold lg:mt-[2rem]">No encontramos esta página</h1>
        <p className="mt-4 max-w-xl text-lead text-white/85 lg:mt-[1.5rem] lg:max-w-[50rem]">
          Puede que la dirección esté mal escrita o que la página ya no exista. Te dejamos algunos caminos para seguir.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-[3rem] lg:gap-[1.5rem]">
          <Link
            href="/"
            className="rounded-full bg-white px-8 py-3 text-lead text-brand shadow-float transition-colors hover:bg-lavender"
          >
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border-2 border-white px-8 py-3 text-lead transition-colors hover:bg-white/15"
          >
            Contactanos
          </Link>
        </div>
        <p className="mt-8 text-body text-white/70 lg:mt-[2.5rem]">
          O llamanos al{" "}
          <a href={contacto.telefonoHref} className="font-semibold text-white underline">
            {contacto.telefono}
          </a>
        </p>
      </div>
    </section>
  );
}
