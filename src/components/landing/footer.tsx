import { PopcornIcon } from '@/components/icons/popcorn-icon';
import { PopcornName } from './popcorn-name';

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-1">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-foreground mb-4 md:mb-0">
            <PopcornIcon  />
            <PopcornName />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PopCorn Cinema - Faz parte da familia PopCorn Show
          </div>
        </div>
      </div>
    </footer>
  );
}
