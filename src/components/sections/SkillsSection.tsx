import type { SkillGroup } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, items }) => (
          <Card key={category}>
            <h3 className="mb-4 font-semibold text-snow">{category}</h3>
            <TagList items={items} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
