"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "@/components/icons";
import { contacto, navItems } from "@/lib/site";
import logo from "@/public/brand/logo-horizontal.png";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50">
      <div className="mx-auto flex h-16 items-center justify-between gap-8 px-4 sm:px-6 lg:h-[7.5rem] lg:px-[5.0625rem]">
        <Link href="/" aria-label="Más Cuidados, ir al inicio" className="shrink-0">
          <Image src={logo} alt="Más Cuidados" preload className="h-9 w-auto lg:h-[3.75rem]" sizes="294px" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-[2.125rem] text-[1.25rem] leading-[1.22] text-white">
            {navItems.map((item) =>
              "children" in item ? (
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-[0.8125rem] transition-colors group-focus-within:font-semibold group-focus-within:text-orchid group-hover:font-semibold group-hover:text-orchid"
                  >
                    {item.label}
                    <ChevronDown className="w-[0.875rem] transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                  </button>
                  {/* El padding superior cubre el espacio hasta el menú, así no se cierra al bajar el mouse */}
                  <div className="invisible absolute top-full -left-[0.6875rem] pt-[3.55rem] opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="flex w-[16rem] flex-col gap-[1.5625rem] rounded-[0.625rem] bg-black/[0.67] p-[0.625rem]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block font-semibold text-orchid transition-colors hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="transition-colors hover:text-orchid aria-[current=page]:font-semibold aria-[current=page]:text-orchid"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative z-10 flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-7 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-brand-ink/95 backdrop-blur transition-opacity lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Principal mobile" className="container-site py-8">
          <ul className="flex flex-col gap-1 text-xl text-white">
            {navItems.map((item) =>
              "children" in item ? (
                <li key={item.label} className="py-2">
                  <span className="block py-2 text-sm font-semibold tracking-widest text-lilac uppercase">{item.label}</span>
                  <ul className="flex flex-col gap-1 border-l border-white/20 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeMenu} className="block py-2">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={closeMenu}
                    className="block py-3 aria-[current=page]:font-semibold aria-[current=page]:text-orchid"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <a
            href={contacto.telefonoHref}
            className="mt-8 flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-brand"
          >
            Llamanos al {contacto.telefono}
          </a>
        </nav>
      </div>
    </header>
  );
}
