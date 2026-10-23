import Eyebrow from "@/components/ui/Eyebrow";
import { reveal } from "@/components/ui/reveal";

export default function IntroSection() {
  return (
    <section id="contenido" aria-labelledby="intro-titulo" className="pt-16 pb-14 lg:pt-[6.375rem] lg:pb-[7.9375rem]">
      <div {...reveal} className="container-wide flex flex-col items-center text-center">
        <Eyebrow>Estamos para acompañarte</Eyebrow>
        <h2 id="intro-titulo" className="mt-6 max-w-[75rem] font-serif text-h2 font-semibold text-[#521562] lg:mt-[4.4375rem]">
          <span className="font-normal">A veces</span>, dar el primer paso es simplemente preguntar
        </h2>
      </div>
    </section>
  );
}
