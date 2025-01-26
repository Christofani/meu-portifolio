import { ProjectProps } from "../types/ProjectType";
import imagenAgrix from "../images/agrix.webp";
import imagenLocalizador from "../images/localizador-museus.webp";
import minhaConta from "../images/minha-conta.webp";
import sistemaVotacao from "../images/voting.png";
import iChoveu from "../images/ichoveu.png";
import pixelsArt from "../images/pixels-art.webp";
import gerenciadorSenhas from "../images/gerenciador-de-senhas.webp";

const projects: ProjectProps[] = [
  {
    titleKey: "agrixTitle",
    descriptionKey: "agrixDescription",
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
    titleKey: "localizadorMuseusTitle",
    descriptionKey: "localizadorMuseusDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/projeto-localizador-de-museus",
    image: imagenLocalizador,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white",
    ],
  },
  {
    titleKey: "minhaContaTitle",
    descriptionKey: "minhaContaDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-my-account",
    image: minhaConta,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white",
    ],
  },
  {
    titleKey: "sistemaVotacaoTitle",
    descriptionKey: "sistemaVotacaoDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/projeto-sistema-de-votacao",
    image: sistemaVotacao,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white",
    ],
  },
  {
    titleKey: "iChoveuTitle",
    descriptionKey: "iChoveuDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-iChoveu",
    image: iChoveu,
    badges: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    ],
  },
  {
    titleKey: "pixelsArtTitle",
    descriptionKey: "pixelsArtDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-pixels-art",
    image: pixelsArt,
    badges: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    ],
  },
  {
    titleKey: "gerenciadorSenhasTitle",
    descriptionKey: "gerenciadorSenhasDescription",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-password-manager",
    image: gerenciadorSenhas,
    badges: [
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    ],
  },
];

export default projects;
