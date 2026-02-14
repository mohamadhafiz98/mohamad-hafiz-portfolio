import type { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/motion/Reveal";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal
          as="div"
          key={project.id}
          delay={(Math.min(index + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6)}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
