import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const jobs = [
  {
    title: "Junior Mobile Application Developer (Protege)",
    company: "D'amante(M) Sdn Bhd",
    period: "May 2024 - December 2024",
    points: [
      "Converted web system into mobile app using React Native.",
      "Designed and implemented user-friendly mobile applications.",
      "Maintained and improved existing applications.",
    ],
  },
  {
    title: "Software Engineer (Protege)",
    company: "Datasonic Corporation Sdn Bhd",
    period: "July 2023 - March 2024",
    points: [
      "Supported in-house production systems.",
      "Developed file processing system using C# & SQL Server.",
      "Performed database querying and manipulation.",
    ],
  },
  {
    title: "Website Designer (Internship)",
    company: "Veecotech Web & Ecommerce",
    period: "March 2022 - August 2022",
    points: [
      "Built responsive websites using WordPress.",
      "Optimized layouts with media queries.",
      "Collaborated with UX team for better UI experience.",
    ],
  },
  {
    title: "IT Support (Internship)",
    company: "A Tu Z Wedding House",
    period: "July 2018 - December 2018",
    points: [
      "Edited product images using Photoshop.",
      "Designed promotional materials in Illustrator.",
      "Managed company social media platforms.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-base text-[#111111] md:text-[17px]">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal as="div">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#666666] motion-fast hover:text-[#111111]"
          >
            Back to Home
          </Link>
        </Reveal>

        <Reveal as="div" delay={1} className="mb-20 mt-12 text-center">
          <h1 className="text-4xl font-semibold tracking-wide md:text-5xl">Mohamad Hafiz</h1>
          <p className="mt-4 text-[#666666]">Software Developer</p>
        </Reveal>

        <Reveal
          as="section"
          delay={2}
          className="mb-20 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10"
        >
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>

          <div className="space-y-4 text-[#666666]">
            <p>
              {"Phone: "}
              <a href="tel:0164173931" className="text-[#111111] motion-fast hover:opacity-70">
                016-4173931
              </a>
            </p>

            <p>
              {"Email: "}
              <a
                href="mailto:hafizabuosman98@gmail.com"
                className="text-[#111111] motion-fast hover:opacity-70"
              >
                hafizabuosman98@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/mohamad-hafiz-ao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-5 py-2 motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43A2.07 2.07 0 1 1 5.33 3.3a2.07 2.07 0 0 1-.01 4.13ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.23 0Z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/mohamadhafiz98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-5 py-2 motion-ui hover:-translate-y-[0.5px] hover:opacity-90"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 .5a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.42-4.04-1.42-.54-1.4-1.33-1.77-1.33-1.77-1.08-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.06 1.84 2.79 1.31 3.47 1 .1-.78.42-1.31.76-1.61-2.67-.31-5.48-1.36-5.48-6.03 0-1.33.47-2.41 1.24-3.26-.12-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.24a11.3 11.3 0 0 1 6 0c2.3-1.57 3.3-1.24 3.3-1.24.66 1.7.24 2.95.12 3.26.77.85 1.24 1.93 1.24 3.26 0 4.68-2.81 5.71-5.5 6.02.43.38.81 1.11.81 2.24v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal
          as="section"
          delay={3}
          className="mb-20 rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10"
        >
          <h2 className="mb-8 text-2xl font-semibold">Work Experience</h2>

          <div className="space-y-10">
            {jobs.map((job, index) => (
              <Reveal
                as="div"
                key={job.title}
                delay={(Math.min(index + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6)}
              >
                <div className="mb-2 flex flex-col md:items-center md:justify-between md:flex-row">
                  <h3 className="text-xl font-medium text-[#111111]">{job.title}</h3>
                  <span className="text-sm text-[#666666]">{job.period}</span>
                </div>

                <p className="mb-3 text-[#666666]">{job.company}</p>

                <ul className="ml-6 list-disc space-y-2 text-[#666666]">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          delay={4}
          className="rounded-2xl border border-[#e0e0dc] bg-[#ecece8] p-8 md:p-10"
        >
          <h2 className="mb-8 text-2xl font-semibold">Education</h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-lg font-medium text-[#111111]">Bachelor of Computer Science (Artificial Intelligence)</h3>
                <span className="text-sm text-[#666666]">2019 - 2022</span>
              </div>
              <p className="text-[#666666]">Universiti Teknikal Malaysia Melaka</p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-lg font-medium text-[#111111]">Diploma in Digital Technology</h3>
                <span className="text-sm text-[#666666]">2016 - 2018</span>
              </div>
              <p className="text-[#666666]">Politeknik Balik Pulau</p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
