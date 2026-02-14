import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-base text-[#111111] md:text-[17px]">
      <div className="mx-auto max-w-[1120px] px-6 py-24">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#666666] 
          transition-colors duration-200 hover:text-[#111111]"
        >
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-20 mt-12 text-center">
          <h1 className="text-4xl font-semibold tracking-wide md:text-5xl">
            Mohamad Hafiz
          </h1>
          <p className="mt-4 text-[#666666]">
            Software Developer
          </p>
        </div>

        {/* CONTACT */}
        <section className="mb-20 rounded-2xl border border-[#e0e0dc] 
        bg-[#ecece8] p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-semibold">
            Contact Information
          </h2>

          <div className="space-y-4 text-[#666666]">
            <p>
              {"Phone: "}
              <a
                href="tel:0164173931"
                className="text-[#111111] transition-opacity duration-200 hover:opacity-70"
              >
                016-4173931
              </a>
            </p>

            <p>
              {"Email: "}
              <a
                href="mailto:hafizabuosman98@gmail.com"
                className="text-[#111111] transition-opacity duration-200 hover:opacity-70"
              >
                hafizabuosman98@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/mohamad-hafiz-ao/"
              target="_blank"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-5 py-2
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/mohamadhafiz98"
              target="_blank"
              className="rounded-xl border border-[#e0e0dc] bg-[#f5f5f3] px-5 py-2
              transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-20 rounded-2xl border border-[#e0e0dc] 
        bg-[#ecece8] p-8 md:p-10">
          <h2 className="mb-8 text-2xl font-semibold">
            Work Experience
          </h2>

          <div className="space-y-10">

            {/* Job Item */}
            {[
              {
                title: "Junior Mobile Application Developer",
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
            ].map((job) => (
              <div key={job.title}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-medium text-[#111111]">
                    {job.title}
                  </h3>
                  <span className="text-sm text-[#666666]">
                    {job.period}
                  </span>
                </div>

                <p className="mb-3 text-[#666666]">{job.company}</p>

                <ul className="ml-6 list-disc space-y-2 text-[#666666]">
                  {job.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="rounded-2xl border border-[#e0e0dc] 
        bg-[#ecece8] p-8 md:p-10">
          <h2 className="mb-8 text-2xl font-semibold">
            Education
          </h2>

          <div className="space-y-8">

            <div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-lg font-medium text-[#111111]">
                  Bachelor of Computer Science (AI)
                </h3>
                <span className="text-sm text-[#666666]">2019 - 2022</span>
              </div>
              <p className="text-[#666666]">
                Universiti Teknikal Malaysia Melaka
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-lg font-medium text-[#111111]">
                  Diploma in Digital Technology
                </h3>
                <span className="text-sm text-[#666666]">2016 - 2018</span>
              </div>
              <p className="text-[#666666]">
                Politeknik Balik Pulau
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
