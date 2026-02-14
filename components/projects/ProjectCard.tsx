import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/Project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e0e0dc] bg-[#ecece8] shadow-[0_8px_24px_rgba(17,17,17,0.04)] motion-ui hover:-translate-y-[0.5px] hover:shadow-[0_10px_28px_rgba(17,17,17,0.06)]">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden bg-[#dfdfda]"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={500}
          className="h-full w-full object-cover motion-ui group-hover:scale-[1.01]"
        />
      </Link>

      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-[#111111]">
          {project.title}
        </h2>
        <p className="mb-4 line-clamp-2 text-base text-[#666666]">{project.description}</p>

        <ul className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={`${project.id}-${tech}`}
              className="rounded-lg border border-[#d8d8d3] bg-[#f5f5f3] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#666666] motion-fast hover:opacity-80"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.visibility === "private" ? (
          <span className="inline-flex rounded-lg border border-[#d8d8d3] bg-[#f5f5f3] px-3 py-2 text-xs font-medium uppercase tracking-wide text-[#666666]">
            Private
          </span>
        ) : (
          <div className="flex gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] py-2 text-center text-sm font-medium text-[#111111] motion-ui hover:-translate-y-[0.5px] hover:opacity-85"
              >
                GitHub
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] py-2 text-center text-sm font-medium text-[#111111] motion-ui hover:-translate-y-[0.5px] hover:opacity-85"
              >
                Live Demo
              </a>
            ) : (
              <span className="flex-1 rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] py-2 text-center text-sm font-medium text-[#666666]">
                Coming Soon
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
