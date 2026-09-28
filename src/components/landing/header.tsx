import Link from "next/link";
import { PopcornIcon } from "@/components/icons/popcorn-icon";
import { GooglePlayIcon } from "@/components/icons/google-play-icon";
import { PopcornName } from "./popcorn-name";

export function Header() {
  return (
    <header className="relative z-50 w-full border-b border-foreground/10 bg-background">
      <div className="container mx-auto flex h-[76px] items-center justify-between gap-2 px-4 sm:gap-4">
        <Link href="#home" aria-label="PopCorn Cinema, início" className="flex shrink-0 items-center gap-1 sm:gap-2">
          <PopcornIcon />
          <PopcornName />
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium md:flex"/>
        <div className="flex items-center justify-end">
          <Link
            href="https://play.google.com/store/apps/details?id=br.com.popcorn.cinema"
            target="_blank"
            rel="noreferrer"
            aria-label="Baixar PopCorn Cinema no Google Play"
            className="block w-[128px] sm:w-[170px]"
          >
            <GooglePlayIcon className="h-auto w-full" />
          </Link>
        </div>
      </div>
    </header>
  );
}
