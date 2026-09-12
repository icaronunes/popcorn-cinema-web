import Link from "next/link";
import { PopcornIcon } from "@/components/icons/popcorn-icon";
import { GooglePlayIcon } from "@/components/icons/google-play-icon";
import { PopcornName } from "./popcorn-name";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <PopcornIcon className="flex items-center gap-2 font-bold font-headline" />
       <PopcornName /> 
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="https://play.google.com/store/apps/details?id=br.com.popcorn.cinema"
            target="_blank"
            className="h-30 w-48"
          >
            <GooglePlayIcon className="w-auto h-auto " />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center leading-tight space-y-0.1">
        </div>
      </div>
    </header>
  );
}
