"use client";
import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/use-Language";

type Feature = {
  src: string;
  srcLarge: string;
  alt: string;
  hint: string;
  label: string;
  label_en: string;
};

const features: Feature[][] = [
  [
    {
      label: "Acompanhando",
      label_en: "Fallowing",
      src: "/segue.webp",
      srcLarge: "/segue-large.webp",
      alt: "App screenshot 1",
      hint: "app screen tracking",
    },
    {
      label: "Acompanhando",
      label_en: "Fallowing",
      src: "/segue2.webp",
      srcLarge: "/segue2-large.webp",
      alt: "App screenshot 2",
      hint: "app screen series",
    },
  ],
  [
    {
      label: "Series",
      label_en: "Tv",
      src: "/serie.webp",
      srcLarge: "/serie-large.webp",
      alt: "App screenshot 3",
      hint: "app screen series",
    },
    {
      label: "Series",
      label_en: "Tv",
      src: "/serie2.webp",
      srcLarge: "/segue2-large.webp",
      alt: "App screenshot 4",
      hint: "app screen tracking",
    },
  ],
  [
    {
      label: "Filmes",
      label_en: "Movies",
      src: "/movie.webp",
      srcLarge: "/movie-large.webp",
      alt: "App screenshot 5",
      hint: "app screen movie",
    },
    {
      label: "Filmes",
      label_en: "Movies",
      src: "/movie2.webp",
      srcLarge: "/movie2-large.webp",
      alt: "App screenshot 6",
      hint: "app screen series",
    },
  ],
  [
    {
      label: "Pessoas",
      label_en: "Peoples",
      src: "/person.webp",
      srcLarge: "/person-large.png",
      alt: "App screenshot 7",
      hint: "app screen person",
    },
    {
      label: "Pessoas",
      label_en: "Peoples",
      src: "/person2.webp",
      srcLarge: "/person2-large.png",
      alt: "App screenshot 8",
      hint: "app screen series",
    },
  ],
];

export function VisualShowcase() {
  const quality = useIsMobile() ? 50 : 100; // Adjust quality based on performance needs
  const traducoes = {
    pt: {
      app: "Aplicativo",
      desc: "📱 Encontre uma Encontre uma sala de cinama perto de você e seus amigos 📺",
    },
  };
  const language =  traducoes["pt"];
  return (
    <ScrollReveal>
      <section
        id="features"
        className="relative py-16 sm:py-10 bg-secondary/30"
      >
        <Image
          src="background-oscar.webp"
          alt="background image oscar"
          fill
          quality={quality}
          className="object-cover opacity-40"
          data-ai-hint="app showcase"
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-1 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                {language.app}
              </h2>
              <h2 className="text-3xl md:text-4xl font-italic font-headline mb-4 text-red-700">
                PopCorn
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-blue-700">
                Cinema
              </h2>
            </div>
            <p className="text-black-700 md:text-lg">{language.desc}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <PhoneMockup key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

const PhoneMockup = ({ feature }: { feature: Feature[] }) => {
  const quality = useIsMobile() ? 50 : 100; // Adjust quality based on performance needs
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (imagesLoaded) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === 1 ? 0 : 1));
      }, 10500);
    }
    return () => clearInterval(interval);
  }, [imagesLoaded, feature.length]);
  const label = useLanguage() == "pt" ? feature[current].label : feature[current].label_en;
// TODO remover traducoes
  return (
    <div className="relative w-full max-w-xs text-center">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[540px] w-[270px] shadow-xl">
        <div className="rounded-[2rem] overflow-hidden w-[250px] h-[520px] bg-white dark:bg-gray-800 relative">
          {feature.map((_, index) => (
            <Image
              key={`${feature[current].src}-${index}`}
              src={feature[current].src}
              className={`absolute top-0 left-0 object-cover w-full h-auto animate-scroll-vertical transition-opacity duration-1000 ${
                imagesLoaded ? "opacity-100" : "opacity-0"
              }`}
              width={250}
              height={800}
              loading="eager"
              quality={quality}
              blurDataURL="popcorn.webp"
              alt={feature[current].alt}
              data-ai-hint={feature[current].hint}
              onLoad={() => {
                if (index === 0) setImagesLoaded(true);
              }}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-lg font-medium">{label}</p>
    </div>
  );
};
