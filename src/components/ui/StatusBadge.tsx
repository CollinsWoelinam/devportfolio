import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function StatusBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-950/60 px-4 py-1.5 text-xs text-ink-300 backdrop-blur",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
      </span>
      {children}
    </p>
  );
}
