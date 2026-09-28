import { PopcornIcon } from '@/components/icons/popcorn-icon';
import { PopcornName } from './popcorn-name';

export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-foreground">
            <PopcornIcon />
            <PopcornName />
          </div>
          <div >
          <p className="text-center text-sm text-muted-foreground flex items-center">
            &copy; {new Date().getFullYear()}
          </p>
          <p className="text-center text-sm text-muted-foreground flex items-center" >
             Família PopCorn Show
          </p>
</div>
        </div>
      </div>
    </footer>
  );
}
