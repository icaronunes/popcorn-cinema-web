"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function HeroSection() {
  const isMobile = useIsMobile();
  const traducao = {
       pt: {
      title: "Qual cinema perto de você",
      description:
        "Aonde está passando aquele filme que todos querem ver",
    },
  };

  const langague = traducao["pt"];
  const quality = isMobile ? 40 : 100;
  return (
    <section className="relative bg-secondary/30">
      <Image
        src="/background-large.webp"
        alt="Background image of a movie theater"
        fill={true}
        loading="lazy"
        placeholder="blur"
        quality={quality}
        blurDataURL="popcorn.webp"
        className="object-cover opacity-79"
        data-ai-hint="movie theater"
      />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
            {langague.title}
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            {langague.description}
          </p>
        </div>
      </div>
    </section>
  );
}
