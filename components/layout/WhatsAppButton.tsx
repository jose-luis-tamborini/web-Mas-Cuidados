import { WhatsAppIcon } from "@/components/icons";
import { contacto } from "@/lib/site";

export default function WhatsAppButton() {
  const external = contacto.whatsappHref.startsWith("http");
  return (
    <a
      href={contacto.whatsappHref}
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 block size-14 transition-transform hover:scale-105 lg:right-[6.8125rem] lg:bottom-[2.5rem] lg:size-[3.9375rem]"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <WhatsAppIcon className="size-full drop-shadow" />
    </a>
  );
}
