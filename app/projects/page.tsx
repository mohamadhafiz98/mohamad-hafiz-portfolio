import Link from "next/link";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import { ProjectsData } from "@/data/ProjectsData";
import Reveal from "@/components/motion/Reveal";

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden text-base text-[#111111] md:text-[17px]">
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 py-24">
        <Reveal as="div">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#666666] motion-fast hover:text-[#111111]"
          >
            Back to Home
          </Link>
        </Reveal>
        <ProjectsHeader />
        <ProjectsGrid projects={ProjectsData} />
      </div>
    </div>
  );
}
