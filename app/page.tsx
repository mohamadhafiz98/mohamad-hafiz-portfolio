import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

type TechItem = {
  name: string;
  iconSrc: string;
};

const techSections: { title: string; items: TechItem[] }[] = [
  {
    title: "Programming",
    items: [
      { name: "JavaScript", iconSrc: "https://img.icons8.com/color/48/javascript--v1.png" },
      { name: "TypeScript", iconSrc: "https://img.icons8.com/color/48/typescript.png" },
      { name: "C#", iconSrc: "https://img.icons8.com/color/48/c-sharp-logo.png" },
      { name: "Python", iconSrc: "https://img.icons8.com/color/48/python--v1.png" },
      { name: "SQL", iconSrc: "https://img.icons8.com/color/48/sql.png" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", iconSrc: "https://img.icons8.com/officel/48/react.png" },
      { name: "React Native", iconSrc: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Next.js", iconSrc: "https://img.icons8.com/fluency/48/nextjs.png" },
      { name: "Tailwind", iconSrc: "https://img.icons8.com/color/48/tailwindcss.png" },
      { name: "WordPress", iconSrc: "https://img.icons8.com/color/48/wordpress.png" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "SQL Server", iconSrc: "https://img.icons8.com/color/48/microsoft-sql-server.png" },
      { name: "MySQL", iconSrc: "https://img.icons8.com/color/48/mysql-logo.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", iconSrc: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", iconSrc: "https://img.icons8.com/ios-glyphs/48/github.png" },
      { name: "VS Code", iconSrc: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-base text-[#111111] md:text-[17px]">
      <div className="container mx-auto max-w-[1120px] px-6 py-24">

        {/* HERO */}
        <section className="mb-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal as="div" variant="left" className="order-2 text-left md:order-1">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[#666666]">
                + About
              </p>

              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
                Hi, I&apos;m Hafiz
              </h1>

              <p className="max-w-[560px] text-[#666666] leading-8">
Junior Software Developer experienced in mobile, web, and desktop applications. Passionate about building interactive systems, crafting UI experiences, and continuously leveling up my skills.              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-xl border border-[#e0e0dc] bg-[#ecece8] px-8 py-3 text-[#111111]
                  motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
                >
                  View Projects
                </Link>

                <a
                  href="#connect"
                  className="rounded-xl border border-[#e0e0dc] bg-transparent px-8 py-3 text-[#111111]
                  motion-ui hover:-translate-y-[0.5px] hover:bg-[#ecece8]"
                >
                  Contact Me
                </a>

                <a
                  href="/Resume%20Mohamad%20Hafiz%20bin%20Abu%20Osman_.pdf"
                  download
                  className="rounded-xl border border-[#e0e0dc] bg-transparent px-8 py-3 text-[#111111]
                  motion-ui resume-pulse-strong hover:-translate-y-[0.5px] hover:bg-[#ecece8]"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>

            <Reveal
              as="div"
              variant="right"
              className="order-1 flex justify-center md:order-2 md:justify-end"
            >
              <Image
                src="/faceHafiz.png"
                alt="Mohamad Hafiz profile photo"
                width={560}
                height={700}
                className="h-auto w-full max-w-[340px] rounded-b-[120px] md:max-w-[460px] md:rounded-b-[200px]"
                priority
              />
            </Reveal>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-24">
          <Reveal as="div" className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold md:text-4xl">Tech Stack</h2>
            <p className="text-sm uppercase tracking-[0.18em] text-[#666666]">
              Tools I Build With
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {techSections.map((section, index) => (
              <Reveal
                as="div"
                key={section.title}
                delay={(Math.min(index + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6)}
                className="rounded-2xl border border-[#e0e0dc] p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-medium text-[#111111]">
                    {section.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#dddcd7] bg-[#f9f9f7] px-3 py-2 text-sm text-[#111111] motion-fast hover:border-[#cfcfc8] hover:opacity-90"
                    >
                      <img
                        src={item.iconSrc}
                        alt={`${item.name} icon`}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                        loading="lazy"
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONNECT */}
        <Reveal
          as="section"
          variant="up"
          id="connect"
          className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-10 text-center md:p-12"
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
              motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
            >
              LinkedIn
            </a>

            <a
              href="mailto:hafizabuosman98@gmail.com"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-6 py-3
              motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
            >
              Email
            </a>

            <a
              href="tel:0164173931"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-6 py-3
              motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
            >
              Phone
            </a>

          </div>
        </Reveal>

      </div>
    </div>
  );
}
