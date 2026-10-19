// Bajada corta que va arriba de los títulos ("– Nuestro diferencial").

type Props = {
  children: React.ReactNode;
  tone?: "brand" | "light";
  className?: string;
};

export default function Eyebrow({ children, tone = "brand", className = "" }: Props) {
  return (
    <p
      className={`flex items-center gap-[0.3125rem] text-lead leading-[1.22] font-medium ${tone === "light" ? "text-white" : "text-brand"} ${className}`}
    >
      <span aria-hidden="true" className="h-0.5 w-[0.75rem] shrink-0 bg-current" />
      {children}
    </p>
  );
}
