import Link from "next/link";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import { ProjectsData } from "@/data/ProjectsData";

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden text-base text-[#111111] md:text-[17px]">
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#666666] transition-colors duration-200 hover:text-[#111111]"
        >
          Back to Home
        </Link>
        <ProjectsHeader />
        <ProjectsGrid projects={ProjectsData} />
      </div>
    </div>
  );
}
