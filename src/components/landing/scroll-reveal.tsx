"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: string;
}

export function ScrollReveal({
  children,
  className,
  delay = "0",
}: ScrollRevealProps) {
  const isMobile = useIsMobile();
  const threshold = isMobile ? 0.1 : 0.5; // Adjust quality based on performance needs
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-700 ease-out motion-safe:transform motion-safe:transition-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-1 translate-y-5",
        className
      )}
      style={{ transitionDelay: isVisible ? delay : "0s" }}
    >
      {children}
    </div>
  );
}
