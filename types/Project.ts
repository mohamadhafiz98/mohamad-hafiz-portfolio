export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  overview: string;
  features: string[];
  challenges: string[];
  results: string[];
  image: string;
  tech: string[];
  visibility: "public" | "private";
  github: string | null;
  demo: string | null;
}
