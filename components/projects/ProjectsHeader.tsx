import Reveal from "@/components/motion/Reveal";

export default function ProjectsHeader() {
  return (
    <Reveal as="div" className="mb-14 text-center">
      <h1 className="mb-4 pb-1 text-4xl font-semibold leading-[1.15] tracking-wide md:text-5xl">
        Projects
      </h1>
      <p className="text-xl text-[#666666]">Recent work and design prototypes</p>
    </Reveal>
  );
}
