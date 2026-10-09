import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-800 bg-ink-900/80 p-5 backdrop-blur-sm transition-colors sm:p-6 hover:border-ember-600/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
