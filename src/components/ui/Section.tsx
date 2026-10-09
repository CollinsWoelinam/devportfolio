import type { ReactNode } from "react";
import { sectionIndex, type SectionId } from "@/lib/navigation";
import { Container } from "./Container";

interface SectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-ink-800 py-16 sm:py-24">
      <Container>
        <h2 className="mb-8 flex items-baseline gap-3 text-2xl sm:mb-12 sm:gap-4 sm:text-3xl md:text-4xl font-semibold tracking-tight text-snow ">
          <span className="font-mono text-sm text-ember-500">{sectionIndex(id)}</span>
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
