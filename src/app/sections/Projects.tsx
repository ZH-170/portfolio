
import { PROJECTS } from "@/app/data/data";
import ProjectCard from "@/app/components/ProjectCard";
import Section from "@/app/components/Section";

export default function Projects() {
  return (
    <Section id="projects" index="03" subtitle="build log" title="The Projects">
      <div className="flex gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}

