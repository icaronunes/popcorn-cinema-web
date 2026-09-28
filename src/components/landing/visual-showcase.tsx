"use client";
import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type Feature = {
  src: string;
  srcLarge: string;
  imageHeight: number;
  alt: string;
  hint: string;
  label: string;
};

const features: Feature[] = [
    {
      label: "Detalhes Filme",
      src: "/Screen_4.png",
      srcLarge: "/Screen_4.png",
      imageHeight: 6185,
      alt: "App screenshot 1",
      hint: "app screen tracking",
    }
  ,
    {
      label: "Busca por Filme",
      src: "/Screen_2.png",
      srcLarge: "/Screen_2.png",
      imageHeight: 4767,
      alt: "App screenshot 3",
      hint: "app screen series",
    }
  ,
    {
      label: "Cinemas da sua cidade",
      src: "/Screen_3.png",
      srcLarge:"/Screen_3",
      imageHeight: 4196,
      alt: "App screenshot 5",
      hint: "app screen movie",
    }
  ,
    {
      label: "Os cinemas onde está passando o filme",
      src: "/Screen_1.png",
      srcLarge: "/Screen_1.png",
      imageHeight: 4196,
      alt: "App screenshot 7",
      hint: "app screen person",
    }
  ,
];

export function VisualShowcase() {
  return (
    <ScrollReveal>
      <section
        id="features"
        className="overflow-hidden bg-background py-20 sm:py-28"
      >
        <div className="container mx-auto grid items-start gap-12 px-4 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] md:gap-16 lg:gap-24">
          <div className="max-w-md md:sticky md:top-12">
            <span className="flex shrink-0 items-center gap-0 sm:gap-0">
              <p className="mb-0 text-sm font-bold uppercase text-green-600">
                B
              </p>
              <p className="mb-0 text-sm font-bold uppercase text-yellow-600">
                R
              </p>
            </span>
            <h2 className="font-headline text-5xl leading-none sm:text-6xl">
              <span className="text-primary">PopCorn Cinema</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
              Encontre uma sala perto de você
            </p>
            <p className="mt-0 text-base leading-7 text-muted-foreground md:text-lg">
              Acompanhe seu cinema favorito e convide seus amigos
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-foreground/15 pt-5 text-sm font-medium">
              <span className="font-headline text-3xl text-primary">
                Detalhe
              </span>
              <span className="max-w-[480px]">
                As funções do PopCorn Cinema estão presentes no{" "}
                <a
                  href="https://popcorn-web-navy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-80"
                >
                  PopCorn Show
                </a>{" "}
                também
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-x-4 lg:gap-x-8">
            {features.map((feature, index) => (
              <PhoneMockup key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

const PhoneMockup = ({
  feature,
}: {
  feature: Feature;
}) => {
  const quality = useIsMobile() ? 50 : 100;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const label =  feature.label
  return (
    <div className="relative w-full max-w-[230px] text-center">
      <div className="relative mx-auto h-[460px] w-[230px] rounded-[2rem] border-[8px] border-neutral-800 bg-neutral-800 shadow-xl">
        <div className="relative h-[444px] w-[214px] overflow-hidden rounded-[1.5rem] bg-white">
          <Image
            key={feature.src}
            src={feature.src}
            className={`absolute left-0 top-0 h-auto w-full animate-scroll-vertical object-cover transition-opacity duration-1000 ${
              imagesLoaded ? "opacity-100" : "opacity-0"
            }`}
            width={1080}
            height={feature.imageHeight}
            loading={"eager"}
            quality={quality}
            alt={feature.alt}
            data-ai-hint={feature.hint}
            onLoad={() => setImagesLoaded(true)}
          />
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground">{label}</p>
    </div>
  );
};
