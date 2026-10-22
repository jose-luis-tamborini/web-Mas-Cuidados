import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

export default function IntroSection() {
  return (
    <section id="contenido" aria-labelledby="intro-titulo" className="pt-16 lg:pt-[6.25rem]">
      <div {...reveal} className="container-wide flex flex-col items-center text-center">
        <Eyebrow>Salud más cerca de vos</Eyebrow>
        <h2 id="intro-titulo" className="mt-4 font-serif text-h2 text-[#521562] lg:mt-[2.875rem]">
          Atención <strong className="font-bold">médica rápida</strong>, estés donde estés
        </h2>
        <p className="mt-6 text-lead text-[#521562] lg:mt-[5.75rem] lg:text-[1.75rem] lg:leading-[3.75rem] [&_strong]:font-semibold">
          Un servicio pensado para brindarte <strong>atención médica</strong> desde <strong>donde estés</strong>, con{" "}
          <strong>consultas online</strong>, <br className="max-lg:hidden" />
          <strong>recetas digitales</strong> y la tranquilidad de <strong>contar con profesionales</strong> cuando los
          necesitás.
        </p>
      </div>
    </section>
  );
}
