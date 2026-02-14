import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faJs,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCode,
  faCodeBranch,
  faDatabase,
  faFileCode,
  faLaptopCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

type TechItem = {
  name: string;
  icon: IconDefinition;
};

const techSections: { title: string; items: TechItem[] }[] = [
  {
    title: "Programming",
    items: [
      { name: "JavaScript", icon: faJs },
      { name: "TypeScript", icon: faCode },
      { name: "C#", icon: faCode },
      { name: "Python", icon: faPython },
      { name: "PHP", icon: faPhp },
      { name: "SQL", icon: faDatabase },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: faReact },
      { name: "React Native", icon: faReact },
      { name: "Next.js", icon: faBolt },
      { name: "Tailwind", icon: faCss3Alt },
      { name: "WordPress", icon: faFileCode },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "SQL Server", icon: faDatabase },
      { name: "MySQL", icon: faDatabase },
      { name: "Firebase", icon: faBolt },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "VS Code", icon: faLaptopCode },
      { name: "SSMS", icon: faTerminal },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-base text-[#111111] md:text-[17px]">
      <div className="container mx-auto max-w-[1120px] px-6 py-24 text-center">

        {/* HERO */}
        <section className="mb-24">
          <h1 className="mb-7 text-4xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-[#111111]">
              Mohamad Hafiz
            </span>
            
          </h1>

          <div className="mb-8 flex justify-center">
            <Image
              src="/faceHafiz.png"
              alt="Mohamad Hafiz profile photo"
              width={520}
              height={640}
              className="h-auto w-full max-w-[320px] md:max-w-[420px]"
              priority
            />
          </div>

          <p className="mb-6 text-lg text-[#666666] md:text-xl">
            Software Developer
          </p>

          <p className="mx-auto max-w-2xl text-[#666666] leading-8">
            Junior Software Developer experienced in mobile, web, and desktop 
            applications. Passionate about building interactive systems, 
            crafting UI experiences, and continuously leveling up my skills.          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl border border-[#e0e0dc] bg-[#ecece8] px-8 py-3 text-[#111111]
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              View Projects
            </Link>

            <a
              href="#connect"
              className="rounded-xl border border-[#e0e0dc] bg-transparent px-8 py-3 text-[#111111]
              transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ecece8]"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-24">
          <h2 className="mb-12 text-3xl font-semibold md:text-4xl">
            Tech Stack
          </h2>

          <div className="grid gap-10">
            {techSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-xl font-medium text-[#111111]">
                  {section.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                  {section.items.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-xl border border-[#e0e0dc] bg-[#ecece8] px-4 py-2
                      inline-flex items-center gap-2
                      text-[#111111]
                      transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-sm text-[#666666]" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONNECT */}
        <section
          id="connect"
          className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-10 md:p-12"
        >
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Contact
          </h2>

          <p className="mb-8 text-[#666666]">
            Open to collaboration, job opportunities, and epic builds.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://www.linkedin.com/in/mohamad-hafiz-ao/"
              target="_blank"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-6 py-3
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              LinkedIn
            </a>

            <a
              href="mailto:hafizabuosman98@gmail.com"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-6 py-3
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Email
            </a>

            <a
              href="tel:0164173931"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-6 py-3
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Phone
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}
