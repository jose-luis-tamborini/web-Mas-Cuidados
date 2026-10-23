import { QuoteIcon } from "@/components/icons";
import { reveal } from "@/components/ui/reveal";

// Frase destacada sobre el banner violeta, en una franja lila.
export default function CompromisoSection() {
  return (
    <section aria-label="Nuestro compromiso" className="mt-20 bg-lavender py-16 lg:mt-[8.25rem] lg:pt-[9.0625rem] lg:pb-[9rem]">
      <div className="container-wide">
        <figure
          {...reveal}
          className="rounded-[2rem] bg-gradient-night px-5 py-10 text-white lg:mx-auto lg:h-[18.375rem] lg:w-[87.6875rem] lg:rounded-[2.5rem_2.9375rem_2.9375rem_2.9375rem] lg:px-0 lg:pt-[4.625rem] lg:pb-0"
        >
          <blockquote className="relative mx-auto w-fit rounded-r-[1.875rem] border-l-4 border-white bg-[#d9d9d9]/[0.07] py-3 pr-5 pl-12 lg:h-[8rem] lg:w-[51.6875rem] lg:py-0 lg:pr-0 lg:pl-[4.8125rem]">
            <QuoteIcon className="absolute top-3 left-3 w-7 rotate-180 text-white/66 lg:top-[0.5rem] lg:left-[1.25rem] lg:w-[3.25rem]" />
            <p className="font-serif text-[1.625rem] leading-[1.33] text-white/90 italic lg:-mt-[0.375rem] lg:text-[3.125rem] lg:leading-[4.1625rem] [&_strong]:font-bold">
              <strong>Cuidamos</strong> con profesionalismo, <br className="max-lg:hidden" />
              acompañamos con <strong>humanidad.</strong>
              <QuoteIcon className="ml-1 inline-block w-7 align-top text-white/66 lg:ml-[0.25rem] lg:w-[3.25rem] lg:translate-y-[0.6rem]" />
            </p>
          </blockquote>
          <figcaption className="mt-6 text-center text-xs font-medium tracking-[0.2857em] uppercase lg:mt-[2.125rem] lg:text-[0.875rem] lg:leading-[1.22] [&_strong]:font-bold">
            Nuestro <strong>compromiso</strong> con cada <strong>familia</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
