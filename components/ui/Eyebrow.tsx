// Bajada corta que va arriba de los títulos ("– Nuestro diferencial").

type Props = {
  children: React.ReactNode;
  tone?: "brand" | "light";
  className?: string;
};

export default function Eyebrow({ children, tone = "brand", className = "" }: Props) {
  return (
    // El guion va en línea (no flex) para que, si el texto ocupa dos líneas en mobile, quede pegado a la primera palabra.
    <p className={`text-lead leading-[1.22] font-medium ${tone === "light" ? "text-white" : "text-brand"} ${className}`}>
      <span aria-hidden="true" className="mr-[0.3125rem] inline-block h-0.5 w-[0.75rem] bg-current align-middle" />
      {children}
    </p>
  );
}
