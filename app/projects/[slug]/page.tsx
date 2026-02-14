import { ProjectsData, getProjectBySlug } from "@/data/ProjectsData";
import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import ZoomableScreenshot from "@/components/projects/ZoomableScreenshot";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ProjectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-base text-[#111111] md:text-[17px]">
      <main className="relative z-10 mx-auto max-w-[1120px] px-6 py-24">
        <Reveal as="div">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#666666] motion-fast hover:text-[#111111]"
          >
            Back to Projects
          </Link>

          <header className="mt-8 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#666666]">Project Detail</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-[#666666]">{project.longDescription}</p>

            {project.visibility === "private" ? (
              <div className="mt-6">
                <span className="inline-flex rounded-lg border border-[#d8d8d3] bg-[#f5f5f3] px-3 py-2 text-xs font-medium uppercase tracking-wide text-[#666666]">
                  Private
                </span>
              </div>
            ) : (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] px-5 py-2 text-[#111111] motion-ui hover:-translate-y-[0.5px] hover:opacity-85"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] px-5 py-2 text-[#111111] motion-ui hover:-translate-y-[0.5px] hover:opacity-85"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            )}
          </header>
        </Reveal>

        <Reveal as="section" delay={1} className="mt-10 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-3 leading-8 text-[#666666]">{project.overview}</p>
        </Reveal>

        <Reveal as="section" delay={2} className="mt-10 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Project Screenshot</h2>
          <ZoomableScreenshot
            src={project.image}
            alt={`${project.title} screenshot`}
          />
        </Reveal>

        <Reveal as="section" delay={3} className="mt-10 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <li
                key={`${project.slug}-${item}`}
                className="rounded-lg border border-[#d8d8d3] bg-[#f5f5f3] px-3 py-1 text-xs uppercase tracking-wide text-[#666666]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <Reveal as="div" delay={1} className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-6">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[#666666]">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={2} className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-6">
            <h2 className="text-xl font-semibold">Challenges</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[#666666]">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={3} className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-6">
            <h2 className="text-xl font-semibold">Results</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[#666666]">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

