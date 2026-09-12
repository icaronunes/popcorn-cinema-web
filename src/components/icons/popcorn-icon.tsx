import Image from 'next/image';
export function PopcornIcon({ className }: { className?: string }) {
  return (
    <div>
      <Image src={'/icon_visto.png'} alt="Popcorn Icon" width={50} height={50} className={className} />
    </div>
  );
}
