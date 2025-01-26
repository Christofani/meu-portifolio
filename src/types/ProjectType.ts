// types/ProjectType.ts

export interface ProjectProps {
  title: string;
  description: string;
  appLink: string;
  repoLink: string;
  image: string;
  badges?: string[]; // Lista de URLs para os badges
}
