import Image from "next/image";

export function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <Image
      src={"/google_play.webp"}
      alt="Google Play Icon"
      className={className}
      height={50}
      width={200}
    />
  );
}
