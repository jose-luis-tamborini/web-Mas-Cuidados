import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { GlobeIcon, InstagramIcon } from "@/components/icons";
import { footerColumns, redes } from "@/lib/site";
import logo from "@/public/brand/logo-vertical.png";

// Los íconos de Font Awesome vienen en un lienzo de 448×512 con el cuadrado centrado:
// se les da más alto para que el cuadrado visible mida 36 px, como en el diseño.
const sizeFigma = "size-8 lg:size-[2.25rem]";
const sizeFontAwesome = "h-[2.2857rem] w-8 lg:h-[2.5714rem] lg:w-[2.25rem]";

const redesSociales = [
  { label: "LinkedIn", href: redes.linkedin, Icon: FaLinkedin, size: sizeFontAwesome },
  { label: "Facebook", href: redes.facebook, Icon: FaSquareFacebook, size: sizeFontAwesome },
  { label: "Instagram", href: redes.instagram, Icon: InstagramIcon, size: sizeFigma },
  { label: "Sitio web", href: redes.web, Icon: GlobeIcon, size: sizeFigma },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white shadow-card">
      <div className="container-site pt-16 lg:min-h-[32.375rem] lg:pt-[9.625rem]">
        <div className="grid gap-12 lg:grid-cols-[35.5rem_1fr] lg:gap-0">
          <Link href="/" aria-label="Más Cuidados, ir al inicio" className="w-fit lg:mt-[2.0625rem] lg:ml-[0.5625rem]">
            <Image src={logo} alt="Más Cuidados, cuando más nos necesitás" className="w-36 lg:w-[12.25rem]" sizes="196px" />
          </Link>

          <div className="grid grid-cols-1 gap-10 text-base sm:grid-cols-2 lg:grid-cols-[18.5625rem_17.75rem_12.5rem_auto] lg:gap-0">
            {footerColumns.map((col) => (
              <div key={col.titulo}>
                <p className="leading-[2.3] font-semibold">{col.titulo}</p>
                <ul>
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    const className =
                      "leading-[2.3] transition-colors hover:underline lg:whitespace-nowrap";
                    return (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className={className}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {col.titulo === "Contacto" && (
                  <ul className="mt-4 flex items-center gap-3 lg:mt-[1.125rem] lg:gap-[0.875rem]">
                    {redesSociales.map(({ label, href, Icon, size }) => (
                      <li key={label}>
                        <a href={href} aria-label={label} className="block transition-opacity hover:opacity-80">
                          <Icon aria-hidden="true" className={size} />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-4 mt-16 border-t border-white/70 pt-8 pb-10 text-sm leading-[1.6] font-semibold sm:mx-6 lg:mx-[3.4375rem] lg:mt-0 lg:pt-[2.125rem] lg:pb-[2.625rem] lg:text-base">
        © Más Cuidados 2026 - Todos los derechos reservados
      </div>
    </footer>
  );
}
