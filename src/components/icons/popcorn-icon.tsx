import Image from 'next/image';
export function PopcornIcon({ className }: { className?: string }) {
  return (
    <div>
      <Image src={'/ic_popcorn_cinema_small.webp'} alt="Popcorn Icon" width={50} height={50} className={className} />
    </div>
  );
}
