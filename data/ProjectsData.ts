import type { Project } from "@/types/Project";

export const ProjectsData: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "This project is my personal portfolio platform built to showcase my work, technical skills, and growth as a software developer.",
    overview:
      "The site is designed with a cyber/neon visual direction while keeping navigation and content structure simple for recruiters and collaborators.",
    features: [
      "Responsive layout for desktop and mobile devices",
      "Dedicated projects listing with dynamic project detail pages",
      "Reusable, typed component architecture for maintainability",
      "Downloadable resume and direct contact entry points",
    ],
    challenges: [
      "Keeping animation-heavy visuals readable and performant",
      "Separating data from UI while preserving existing project behavior",
      "Balancing visual style consistency across all pages",
    ],
    results: [
      "Cleaner project architecture with reusable components and typed data",
      "Improved scalability for adding new projects and sections",
      "Consistent theme and interaction patterns across the site",
    ],
    image: "/projects/portfolio-website.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    visibility: "public",
    github: "https://github.com/mohamadhafiz98/my-portfolio",
    demo: "https://my-portfolio-rust-phi-62.vercel.app/",
  },
  {
    id: 2,
    slug: "vehicle-management-system",
    title: "Vehicle Management System",
    description:
      "Converted a vehicle management platform from web to a React Native mobile app, delivering design and core features in the early phase.",
    longDescription:
      "This project focused on converting an existing vehicle management web application into a mobile app using React Native.",
    overview:
      "I handled the early implementation phase, including Figma-based design work and core functionality setup, before handover at contract completion.",
    features: [
      "Mobile-first application structure using React Native",
      "Early UX and screen flow designed in Figma",
      "Core functionality implementation for first delivery milestone",
      "Handover-ready foundation for continued development",
    ],
    challenges: [
      "Adapting web-based workflows into mobile interaction patterns",
      "Balancing delivery speed with clean early architecture",
      "Ensuring project continuity for handover to another developer",
    ],
    results: [
      "Delivered an operational early-phase mobile build",
      "Completed design and base functionality scope before contract end",
      "Successful transition package prepared for the next assignee",
    ],
    image: "/projects/vehicle-management-system.png",
    tech: ["React Native", "JavaScript", "Figma", "Mobile UI", "API Integration"],
    visibility: "private",
    github: null,
    demo: null,
  },
  {
    id: 3,
    slug: "portfolio-clean-rebuild",
    title: "Hafiz Portfolio",
    description:
      "A refined rebuild of my portfolio website with cleaner structure, improved mobile behavior, and reusable project components.",
    longDescription:
      "This website is my personal developer portfolio where I introduce myself, present my tech stack, and showcase selected projects with dedicated detail pages.",
    overview:
      "I rebuilt this version to make the UI cleaner and easier to scale. The homepage focuses on a clear personal introduction, the projects page highlights practical work, and the contact section gives direct ways to connect.",
    features: [
      "Responsive homepage with optimized hero layout for mobile and desktop",
      "Structured tech stack section with grouped categories",
      "Projects listing and dynamic slug-based project detail pages",
      "Reusable components and typed project data for easier maintenance",
    ],
    challenges: [
      "Keeping the design simple while still visually distinct",
      "Organizing project content so adding new entries stays fast",
      "Balancing visual polish with performance and readability",
    ],
    results: [
      "Cleaner information hierarchy across all major sections",
      "Improved maintainability through reusable components and typed models",
      "Faster workflow for updating portfolio content and project entries",
    ],
    image: "/projects/clean-portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    visibility: "public",
    github: "https://github.com/mohamadhafiz98/hafiz-portfolio",
    demo: "https://hafiz-98-portfolio.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return ProjectsData.find((project) => project.slug === slug);
}
