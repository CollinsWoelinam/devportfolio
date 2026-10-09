import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-ember-500 text-ink-950 hover:bg-ember-400",
  outline:
    "border border-ink-700 text-snow hover:border-ember-500 hover:text-ember-400",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variants[variant],
      )}
    >
      {children}
    </a>
  );
}
