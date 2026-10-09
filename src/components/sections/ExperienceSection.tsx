import type { Experience } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function ExperienceSection({
  experience,
}: {
  experience: Experience[];
}) {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-ink-700 pl-6 sm:space-y-12 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute top-1.5 -left-[1.85rem] sm:-left-[2.35rem] h-3 w-3 rounded-full border-2 border-ember-500 bg-ink-950" />
            <p className="font-mono text-xs text-ember-400">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-snow sm:text-xl">
              {job.role}
              <span className="block text-base font-normal text-ink-300 sm:inline">
                <span className="hidden sm:inline"> · </span>
                {job.company}
              </span>
            </h3>
            <p className="mt-3 mb-4 max-w-2xl text-ink-300">
              {job.description}
            </p>
            <TagList items={job.stack} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
