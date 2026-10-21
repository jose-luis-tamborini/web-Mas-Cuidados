import { CheckCircle } from "@/components/icons";

type Props = {
  items: React.ReactNode[];
  variant?: "solid" | "soft" | "lilac";
  className?: string;
  /** Tamaño del círculo en desktop (36 px del diseño por defecto). */
  iconClassName?: string;
  /** Separación entre el círculo y el texto en desktop (17 px del diseño por defecto). */
  gapClassName?: string;
};

export default function CheckList({
  items,
  variant = "solid",
  className = "",
  iconClassName = "lg:size-[2.25rem]",
  gapClassName = "lg:gap-[1.0625rem]",
}: Props) {
  return (
    <ul className={`flex flex-col gap-3 lg:gap-0 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-4 lg:items-center ${gapClassName}`}>
          <CheckCircle variant={variant} className={`mt-0.5 size-7 shrink-0 lg:mt-0 ${iconClassName}`} />
          <span className="pt-0.5 lg:pt-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
