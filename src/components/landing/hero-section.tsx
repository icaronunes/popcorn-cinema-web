"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function HeroSection() {
  const isMobile = useIsMobile();
  const quality = isMobile ? 40 : 100;
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-neutral-950 text-white md:min-h-[calc(100svh-76px)]"
    >
      <Image
        src="/background-large.webp"
        alt=""
        fill={true}
        priority
        quality={quality}
        sizes="100vw"
        className="-z-20 object-cover object-center"
        data-ai-hint="movie theater"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/45 to-transparent"
      />
      <div className="container mx-auto px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase text-red-300">
            A sua próxima sessão começa aqui
          </p>
          <h1 className="max-w-xl font-headline text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            O próximo filme
          </h1>
          <h1 className="max-w-xl font-headline text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Na sala certa
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/80 md:text-lg">
            Descubra onde está passando aquele filme e combine a próxima sessão
            com seus amigos
          </p>
        </div>
      </div>
    </section>
  );
}
