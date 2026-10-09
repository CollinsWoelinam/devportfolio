import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

function ProjectLink({ href, label }: { href?: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-ember-500 hover:text-ember-300"
    >
      {label} ↗
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={cn(
        "flex flex-col",
        project.featured && "bg-gradient-to-br from-ember-900 to-ink-900 sm:col-span-2",
      )}
    >
      {project.imageUrl && (
        <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-snow sm:text-xl">{project.title}</h3>
      <p className="mt-2 mb-5 flex-1 text-ink-300">{project.description}</p>
      <TagList items={project.stack} />
      <div className="mt-6 flex gap-5">
        <ProjectLink href={project.liveUrl} label="Live" />
        <ProjectLink href={project.repoUrl} label="Code" />
      </div>
    </Card>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
