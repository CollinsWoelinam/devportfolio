import type { Education } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry) => (
          <Card key={`${entry.institution}-${entry.qualification}`}>
            <p className="font-mono text-xs text-ember-400">{entry.status}</p>
            <h3 className="mt-1 text-xl font-semibold text-snow">
              {entry.qualification}
            </h3>
            <p className="mt-2 text-ink-300">{entry.institution}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
