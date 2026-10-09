import type { About } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";

export function AboutSection({ about }: { about: About }) {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed sm:text-lg text-ink-300">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <dl className="grid gap-6 sm:grid-cols-3 md:grid-cols-1">
          {about.highlights.map(({ value, label }) => (
            <div key={label} className="flex flex-col border-l-2 border-ember-500 pl-4">
              <dt className="text-sm text-ink-300">{label}</dt>
              <dd className="order-first text-2xl font-bold text-snow sm:text-3xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
