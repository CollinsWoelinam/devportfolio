import type { SkillGroup } from "@/types/portfolio";

export function TechMarquee({ skills }: { skills: SkillGroup[] }) {
  const items = [...new Set(skills.flatMap((group) => group.items))];

  return (
    <div
      aria-label="Technologies"
      className="overflow-hidden border-y border-ink-800 bg-ink-900/50 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      {/* The list is rendered twice so the scroll loops seamlessly. */}
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex gap-10">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-ink-300"
              >
                {item}
                <span className="text-ember-500">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
