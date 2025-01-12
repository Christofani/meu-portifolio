import { ProjectProps } from "../types/ProjectType";
import imagenAgrix from "../images/agrix-home.png";

const projects: ProjectProps[] = [
  {
    title: "Projeto Agrix",
    description:
      "O sistema Agrix foi pensado em trazer facilidade para testar a API Agrix e trazer um layout interativo. Ele é dividido em três roles: admin, manager e user. Cada papel pode ser testado de forma prática e interativa, com acessos e permissões diferentes.",
    appLink: "https://agrix-front-end.vercel.app",
    repoLink: "https://github.com/Christofani/projeto-agrix-front-end",
    image: imagenAgrix,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white",
      "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
    ],
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    appLink: "https://link-da-aplicacao2.com",
    repoLink: "https://github.com/link-do-repositorio2",
    image: "https://via.placeholder.com/300",
    badges: [],
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3.",
    appLink: "https://link-da-aplicacao3.com",
    repoLink: "https://github.com/link-do-repositorio3",
    image: "https://via.placeholder.com/300",
    badges: [],
  },
];

export default projects;