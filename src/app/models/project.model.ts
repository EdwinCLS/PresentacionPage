export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  images: ProjectImage[];
  demoUrl?: string;
  repoUrl?: string;
}
