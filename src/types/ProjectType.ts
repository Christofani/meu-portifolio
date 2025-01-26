// types/ProjectType.ts

export interface ProjectProps {
  titleKey: string;
  descriptionKey: string;
  appLink: string;
  repoLink: string;
  image: string;
  badges?: string[]; // Lista de URLs para os badges
}
